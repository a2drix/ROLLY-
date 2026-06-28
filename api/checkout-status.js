export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { orderId, paymentMethod, createdAt } = req.query;

  if (!orderId || !createdAt) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const elapsed = Date.now() - parseInt(createdAt);

    // Environment check
    const binanceKey = process.env.BINANCE_API_KEY;
    const paypalId = process.env.PAYPAL_CLIENT_ID;
    const nowpaymentsKey = process.env.NOWPAYMENTS_API_KEY;

    const isDemo = !binanceKey && !paypalId && !nowpaymentsKey;

    if (isDemo) {
      // In Demo mode: Confirm payment after 5 seconds of polling
      if (elapsed > 5000) {
        const mockCodes = [
          "ROLLY-NITRO-7731-9984-2110",
          "ROLLY-STEAM-8841-2771-0094",
          "ROLLY-GP-6610-8841-2993",
          "ROLLY-VAL-1102-8841-9982"
        ];
        const releasedCode = mockCodes[Math.floor(Math.random() * mockCodes.length)];

        res.status(200).json({
          status: "paid",
          code: releasedCode
        });
      } else {
        res.status(200).json({
          status: "pending"
        });
      }
    } else {
      // Real payment status verification checks
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
