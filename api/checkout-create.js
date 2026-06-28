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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { productId, variantIdx, paymentMethod, email, username } = req.body;

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true, day: '2-digit', month: 'short', year: 'numeric' });

    // Environment variables
    const binanceKey = process.env.BINANCE_API_KEY;
    const paypalId = process.env.PAYPAL_CLIENT_ID;
    const nowpaymentsKey = process.env.NOWPAYMENTS_API_KEY;

    const isDemo = !binanceKey && !paypalId && !nowpaymentsKey;

    let paymentUrl = "";
    let qrCodeUrl = "";
    let address = "";
    let amount = 10.0;

    if (paymentMethod === "binance") {
      if (isDemo) {
        paymentUrl = "https://pay.binance.com/checkout/demo";
        qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent("https://pay.binance.com/checkout/demo/" + orderId);
      } else {
        // Real Binance Pay API creation integration
        // Reference details: https://developers.binance.com/docs/binance-pay/api-order-create
      }
    } else if (paymentMethod === "crypto") {
      if (isDemo) {
        address = "TYm7D8pMockUSDTTrxNetworkUSDTAddress7777";
        amount = 3.5;
        qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent("trx:TYm7D8pMockUSDTTrxNetworkUSDTAddress7777?amount=3.5");
      } else {
        // Real NOWPayments payment invoice creation
      }
    } else if (paymentMethod === "paypal") {
      if (isDemo) {
        paymentUrl = "https://www.paypal.com/checkout/demo";
      } else {
        // Real PayPal API order creation
      }
    }

    res.status(200).json({
      orderId,
      paymentMethod,
      paymentUrl,
      qrCodeUrl,
      address,
      amount,
      demoMode: isDemo,
      date: dateStr
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
