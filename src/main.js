/* ==========================================
   ROLLY STORE - Main Application Logic
   ========================================== */

// 1. Live Products Database from API (45 products)
const DEFAULT_PRODUCTS = [
  {
    "id": "69a3a506fe5878c1877bd59e",
    "name": "Youtube Boost",
    "category": "Youtube",
    "price": 10,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Supercharge your channel's visibility and authority. Whether you're a new creator looking for your first 1,000 subscribe...",
    "themeColor": "#ff0000",
    "imageUrl": "https://i.cbc.ca/ais/1.7560884,1749839379000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1919%2C1079%29%3B",
    "subProducts": [
      {
        "title": "Views",
        "price": 10,
        "originalPrice": 20
      },
      {
        "title": "Likes",
        "price": 5,
        "originalPrice": 10
      },
      {
        "title": "Comments",
        "price": 20,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a3a3d5fe5878c1877bd59d",
    "name": "Youtube Premium",
    "category": "Youtube",
    "price": 10,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Unlock the ultimate YouTube experience. Watch your favorite creators without a single ad, play videos in the background ...",
    "themeColor": "#ff0000",
    "imageUrl": "https://i.cbc.ca/ais/1.7560884,1749839379000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1919%2C1079%29%3Bac",
    "subProducts": [
      {
        "title": "Youtube Premium Month",
        "price": 10,
        "originalPrice": 20
      },
      {
        "title": "Youtube Premium 3 Months",
        "price": 20,
        "originalPrice": 30
      },
      {
        "title": "Youtube Premium Family Onwer",
        "price": 25,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a3a1a88de4543ac2826d29",
    "name": "ChatGPT",
    "category": "Softwares",
    "price": 5,
    "oldPrice": 10,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Experience the world's most advanced AI. Get priority access to GPT-5.2, including \"Thinking\" modes for complex reasonin...",
    "themeColor": "#10b981",
    "imageUrl": "https://cdn.neowin.com/news/images/uploaded/2023/05/1683188731_image-of-hand-holding-an-ai-face-looking-at-the-words-chatgpt-openai.jpg",
    "subProducts": [
      {
        "title": "ChatGPT Plus",
        "price": 5,
        "originalPrice": 10
      },
      {
        "title": "ChatGPT Business",
        "price": 5,
        "originalPrice": 10
      },
      {
        "title": "ChatGPT Pro",
        "price": 5,
        "originalPrice": 10
      },
      {
        "title": "ChatGPT Plus 3 Months",
        "price": 18,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a3a0afc81d042c4524eb59",
    "name": "NordVPN",
    "category": "Softwares",
    "price": 15,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The industry leader in privacy. Secure up to 10 devices with ultra-fast 10Gbps+ servers in over 120 countries. Includes ...",
    "themeColor": "#10b981",
    "imageUrl": "https://techjioblog.com/wp-content/uploads/2020/03/nordvpn_cover.jpg",
    "subProducts": [
      {
        "title": "NordVPN",
        "price": 15,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a3a04cfe5878c1877bd59a",
    "name": "Duolingo Max",
    "category": "Softwares",
    "price": 5,
    "oldPrice": 10,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Master a new language with the power of AI. Includes everything in Super Duolingo (Unlimited Hearts, No Ads) plus Video ...",
    "themeColor": "#10b981",
    "imageUrl": "https://cdn.slidesharecdn.com/ss_thumbnails/duolingo-230819152812-3a15b958-thumbnail.jpg?width=640&height=640&fit=bounds",
    "subProducts": [
      {
        "title": "Duolingo Max",
        "price": 5,
        "originalPrice": 10
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a39fdefe5878c1877bd599",
    "name": "Canva Pro",
    "category": "Softwares",
    "price": 8,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Design anything like a pro. Gain access to 100M+ premium photos, videos, and fonts. Use Magic Studio AI to resize design...",
    "themeColor": "#10b981",
    "imageUrl": "https://cegepgranby.ca/wp-content/uploads/2022/07/entete-sae-canva-pro.jpg",
    "subProducts": [
      {
        "title": "Canva Pro",
        "price": 8,
        "originalPrice": 20
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a39f7a8de4543ac2826d28",
    "name": "Capcut Pro",
    "category": "Softwares",
    "price": 8,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The professional's choice for social media editing. Unlock 4K HDR exports, remove all watermarks, and access premium AI ...",
    "themeColor": "#10b981",
    "imageUrl": "https://hustle.com.sg/wp-content/uploads/2023/10/Capcut.png",
    "subProducts": [
      {
        "title": "Capcut Pro",
        "price": 8,
        "originalPrice": 20
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a39e9b8de4543ac2826d27",
    "name": "Crunchyroll Premium",
    "category": "Crunchyroll",
    "price": 1,
    "oldPrice": 5,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The ultimate destination for anime fans. Stream the world’s largest anime library ad-free, including exclusive simulcast...",
    "themeColor": "#f78c25",
    "imageUrl": "https://anitrendz.net/news/wp-content/uploads/2020/08/Crunchyroll-Banner.png",
    "subProducts": [
      {
        "title": "Crunchyroll Random",
        "price": 1,
        "originalPrice": 5
      },
      {
        "title": "Crunchyroll Premium",
        "price": 11,
        "originalPrice": 15
      },
      {
        "title": "Crunchyroll Mega Fan",
        "price": 15,
        "originalPrice": 20
      },
      {
        "title": "Crunchyroll Premium 3 Months",
        "price": 26,
        "originalPrice": 30
      },
      {
        "title": "Crunchyroll Premium 1 Year",
        "price": 55,
        "originalPrice": 70
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69a0e44a8d8eb71cd652a6e2",
    "name": "ARC Raiders",
    "category": "Games Accounts",
    "price": 85,
    "oldPrice": 120,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Secure your survival in the Rust Belt with a Full Access ARC Raiders account.\nIncludes Original Email (OGE) for 100% sec...",
    "themeColor": "#6366f1",
    "imageUrl": "https://image.api.playstation.com/vulcan/ap/rnd/202504/1515/3ef1ea90a64952c060b797fde8602ee745c2e7c73277c4a5.png",
    "subProducts": [
      {
        "title": "ARC Raiders",
        "price": 85,
        "originalPrice": 120
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698769153155184667394298",
    "name": "Euro Truck Simulator 2",
    "category": "Games Accounts",
    "price": 10,
    "oldPrice": 15,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Become the king of the road with a Full Access Euro Truck Simulator 2 Steam account. Includes Original Email (OGE) for 1...",
    "themeColor": "#6366f1",
    "imageUrl": "https://media.overclock3d.net/2023/10/Euro-Truck-Simulator-2-image.jpg",
    "subProducts": [
      {
        "title": "Euro Truck Simulator 2",
        "price": 10,
        "originalPrice": 15
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698767ce3155184667394296",
    "name": "Red Dead Redemption 2",
    "category": "Games Accounts",
    "price": 45,
    "oldPrice": 50,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Experience the epic tale of the Wild West with a Full Access Red Dead Redemption 2 account. Includes original email (OGE...",
    "themeColor": "#6366f1",
    "imageUrl": "https://wallpapers.com/images/hd/red-dead-redemption-2-desktop-71j3tjqunmm3a25b.jpg",
    "subProducts": [
      {
        "title": "Red Dead Redemption 2",
        "price": 45,
        "originalPrice": 50
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698766c93155184667394294",
    "name": "Minecraft Java and Bedrock Edition",
    "category": "Games Accounts",
    "price": 35,
    "oldPrice": 50,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Get the ultimate Minecraft experience with both Java and Bedrock Editions in one bundle. Play with friends across any de...",
    "themeColor": "#6366f1",
    "imageUrl": "https://kids.guinnessworldrecords.com/news/2025/4/images/minecraft-header-thumbnail-776652.jpg",
    "subProducts": [
      {
        "title": "Minecraft Account",
        "price": 35,
        "originalPrice": 50
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698765df3155184667394292",
    "name": "ARK: Survival Evolved Accounts",
    "category": "Games Accounts",
    "price": 7,
    "oldPrice": 10,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Full Access ARK: Survival Evolved account with 100% control over email and password. Includes Original Email (OGE) for m...",
    "themeColor": "#6366f1",
    "imageUrl": "https://images.launchbox-app.com/7cdea627-b641-47bb-8894-3af22765b86b.jpg",
    "subProducts": [
      {
        "title": "ARK: Survival Evolved",
        "price": 7,
        "originalPrice": 10
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6987650f3155184667394290",
    "name": "EA Sport FC Account",
    "category": "Games Accounts",
    "price": 25,
    "oldPrice": 40,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Get ahead of the competition with a Full Access EA Sports FC 25 or FC 26 account. Includes Original Email (OGE) for 100%...",
    "themeColor": "#6366f1",
    "imageUrl": "https://image.mux.com/T1HTP5SEXGemp9E7yLTtvgFxdfVffjYg502hcVKZeKLw/thumbnail.jpg?time=84.823593",
    "subProducts": [
      {
        "title": "EA Sport FC 25",
        "price": 25,
        "originalPrice": 40
      },
      {
        "title": "EA Sport FC 26",
        "price": 50,
        "originalPrice": 60
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69876392315518466739428e",
    "name": "Forza Horizon 5",
    "category": "Games Accounts",
    "price": 40,
    "oldPrice": 50,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Own Forza Horizon 5 permanently with a Full Access Microsoft/Xbox account. Includes original email for 100% security—cha...",
    "themeColor": "#6366f1",
    "imageUrl": "https://amazing.tn/wp-content/uploads/2022/11/forza-horizon-5-pc-xbox-one-xbox-series-xs-pc-xbox-one-xbox-series-x-s-jeu-microsoft-store-cover.jpg",
    "subProducts": [
      {
        "title": "Forza Horizon 5 Account",
        "price": 40,
        "originalPrice": 50
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6987623b315518466739428c",
    "name": "Grand Theft Auto V",
    "category": "Games Accounts",
    "price": 35,
    "oldPrice": 50,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Full Access GTA V account with complete control over email and password settings. Includes the full game (Story Mode + G...",
    "themeColor": "#6366f1",
    "imageUrl": "https://i.redd.it/xghgr1kwvcee1.jpeg",
    "subProducts": [
      {
        "title": "Grand Theft Auto V Account",
        "price": 35,
        "originalPrice": 50
      },
      {
        "title": "FiveM Ready Key",
        "price": 3,
        "originalPrice": 5
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6987612e315518466739428a",
    "name": "Rust Steam",
    "category": "Games Accounts",
    "price": 28,
    "oldPrice": 40,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Get instant access to Rust with a brand new, Full Access Steam Account. Includes original email data for 100% security a...",
    "themeColor": "#6366f1",
    "imageUrl": "https://hone.gg/blog/wp-content/uploads/2025/05/rust-banner_1rust-banner.webp",
    "subProducts": [
      {
        "title": "Rust Steam Account",
        "price": 28,
        "originalPrice": 40
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6985295803f94df5313f2af1",
    "name": "Facebook Products",
    "category": "Social Media",
    "price": 10,
    "oldPrice": 15,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Boost your Facebook Page or Post authority with fast Followers, Likes, and Views. Build instant social proof and improve...",
    "themeColor": "#4f46e5",
    "imageUrl": "https://images.unsplash.com/photo-1662947852129-ead669d746f0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291dmVydHVyZSUyMGZhY2Vib29rfGVufDB8fDB8fHww",
    "subProducts": [
      {
        "title": "1000 Followers",
        "price": 10,
        "originalPrice": 15
      },
      {
        "title": "1000 Likes",
        "price": 1,
        "originalPrice": 2.01
      },
      {
        "title": "1000 Views",
        "price": 0.5,
        "originalPrice": 1
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698527f903f94df5313f2af0",
    "name": "Instagram Products",
    "category": "Social Media",
    "price": 10,
    "oldPrice": 15,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Give your Instagram profile an instant boost with high-speed Followers, Likes, and Views. The most affordable way to inc...",
    "themeColor": "#4f46e5",
    "imageUrl": "https://m-cdn.phonearena.com/images/article/106266-wide-two_1200/Instagram-gains-new-feature-to-help-users-read-all-posts-on-their-Feed.jpg",
    "subProducts": [
      {
        "title": "1000 Followers",
        "price": 10,
        "originalPrice": 15
      },
      {
        "title": "1000 Likes ",
        "price": 1,
        "originalPrice": 2
      },
      {
        "title": "10000 Views",
        "price": 1,
        "originalPrice": 2
      },
      {
        "title": "Meta Verify (6.5$)",
        "price": 28,
        "originalPrice": 40
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6985256803f94df5313f2aef",
    "name": "Tiktok Products",
    "category": "Social Media",
    "price": 7,
    "oldPrice": 10,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Boost your TikTok presence instantly with our high-speed Followers, Likes, and Views. Perfect for social proof and incre...",
    "themeColor": "#4f46e5",
    "imageUrl": "https://as1.ftcdn.net/jpg/05/17/14/18/1000_F_517141830_8sbSRYMP13ulFVV2wFy0e1W6dmN44bFq.jpg",
    "subProducts": [
      {
        "title": "1000 Followers",
        "price": 7,
        "originalPrice": 10
      },
      {
        "title": "1000 Likes",
        "price": 0.5,
        "originalPrice": 1
      },
      {
        "title": "1000 Views",
        "price": 0.5,
        "originalPrice": 1
      },
      {
        "title": "100 Tiktok Livestream Views (15 Mint)",
        "price": 5,
        "originalPrice": 7
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69851d5503f94df5313f2ae9",
    "name": "Spotify Premium",
    "category": "Spotify",
    "price": 12,
    "oldPrice": 15,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Upgrade your own Spotify account to Premium at a fraction of the official price. Keep all your playlists and liked songs...",
    "themeColor": "#1DB954",
    "imageUrl": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/2024-spotify-brand-assets-media-kit.jpg",
    "subProducts": [
      {
        "title": "1 Month Individual",
        "price": 12,
        "originalPrice": 15
      },
      {
        "title": "1 Month Duo",
        "price": 20,
        "originalPrice": 25
      },
      {
        "title": "1 Month Family",
        "price": 25,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69851b7303f94df5313f2ae6",
    "name": "Netflix",
    "category": "Netflix",
    "price": 16,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Instant access to a pre-activated Netflix Premium 4K HDR account. No gift card redemption required—just log in with the ...",
    "themeColor": "#E50914",
    "imageUrl": "https://images.squarespace-cdn.com/content/v1/567e05c4e0327cd48ad079f3/1549393275390-RR6JD669IX1AS8LWUE3U/NETFLIX_FORM_06_wes.jpg",
    "subProducts": [
      {
        "title": "1 Month Basic",
        "price": 16,
        "originalPrice": 20
      },
      {
        "title": "1 Month Standard",
        "price": 32,
        "originalPrice": 40
      },
      {
        "title": "1 Month Premium",
        "price": 39,
        "originalPrice": 50
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698519cd03f94df5313f2ae3",
    "name": "Discord Effects",
    "category": "Discord",
    "price": 7,
    "oldPrice": 10,
    "badge": "",
    "stock": "in-stock",
    "desc": "Personalize your profile forever with permanent Avatar Decorations and Profile Effects. Delivered as an instant Gift Lin...",
    "themeColor": "#5865F2",
    "imageUrl": "https://imgur.com/E8m1AVT.png",
    "subProducts": [
      {
        "title": "Decoration & Effect 4.99$",
        "price": 7,
        "originalPrice": 10
      },
      {
        "title": "Decoration & Effect 5.99$",
        "price": 8,
        "originalPrice": 10
      },
      {
        "title": "Decoration & Effect 9.99$",
        "price": 13,
        "originalPrice": 15
      },
      {
        "title": "Decoration & Effect 10.99$",
        "price": 14,
        "originalPrice": 16
      },
      {
        "title": "Decoration & Effect 11.99$",
        "price": 15,
        "originalPrice": 18
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6985186703f94df5313f2ae2",
    "name": "Discord Boosts",
    "category": "Discord",
    "price": 15,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Instantly upgrade any Discord server to Level 3 with a 14x Boost package. Unlock 384Kbps audio, 100MB uploads, and a cus...",
    "themeColor": "#5865F2",
    "imageUrl": "https://imgur.com/7Cjwkbg.png",
    "subProducts": [
      {
        "title": "Boosts 1 Month X8",
        "price": 15,
        "originalPrice": 20
      },
      {
        "title": "Boosts 1 Month X14",
        "price": 30,
        "originalPrice": 40
      },
      {
        "title": "Boosts 3 Months X8",
        "price": 25,
        "originalPrice": 35
      },
      {
        "title": "Boosts 3 Months X14",
        "price": 50,
        "originalPrice": 70
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6985174603f94df5313f2ae1",
    "name": "Discord Nitro",
    "category": "Discord",
    "price": 27,
    "oldPrice": 35,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Get the full Discord experience with Nitro Gaming or Basic. 1-Month and 3-Month Promo links are for new/eligible account...",
    "themeColor": "#5865F2",
    "imageUrl": "https://imgur.com/1HXnUNz.png",
    "subProducts": [
      {
        "title": "Nitro Gaming Gift",
        "price": 27,
        "originalPrice": 35
      },
      {
        "title": "Nitro Basic Gift",
        "price": 10,
        "originalPrice": 15
      },
      {
        "title": "Nitro 3 Months Link",
        "price": 10,
        "originalPrice": 15
      },
      {
        "title": "Visa Activation Link",
        "price": 5,
        "originalPrice": 7
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698514e703f94df5313f2adc",
    "name": "Free Fire Member",
    "category": "Free Fire",
    "price": 10,
    "oldPrice": 15,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The best value for Free Fire: Get up to 4x more Diamonds compared to standard top-ups. Choose Weekly for a quick boost o...",
    "themeColor": "#FF4B2B",
    "imageUrl": "https://i.redd.it/8c37jexvbrpb1.jpg",
    "subProducts": [
      {
        "title": "Weekly Member",
        "price": 10,
        "originalPrice": 15
      },
      {
        "title": "Monthly Member",
        "price": 25,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698513f503f94df5313f2adb",
    "name": "Free Fire Diamonds",
    "category": "Free Fire",
    "price": 4.5,
    "oldPrice": 5,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Instantly recharge Free Fire Diamonds via Player ID to unlock the Booyah Pass and rare skins. Safe, secure, and fast del...",
    "themeColor": "#FF4B2B",
    "imageUrl": "https://i.redd.it/8c37jexvbrpb1.jpg",
    "subProducts": [
      {
        "title": "100 Diamond",
        "price": 4.5,
        "originalPrice": 5
      },
      {
        "title": "210 Diamond",
        "price": 10,
        "originalPrice": 15
      },
      {
        "title": "530 Diamond",
        "price": 25,
        "originalPrice": 30
      },
      {
        "title": "1188 Diamond",
        "price": 45,
        "originalPrice": 60
      },
      {
        "title": "2200 Diamond",
        "price": 85,
        "originalPrice": 100
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6985128703f94df5313f2ad7",
    "name": "PUBG Mobile UC ",
    "category": "PUBG Mobile",
    "price": 4.5,
    "oldPrice": 5,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The premium currency for PUBG Mobile to unlock the Royale Pass and legendary weapon skins. Fast, secure top-ups via Play...",
    "themeColor": "#f3ba2f",
    "imageUrl": "https://www.entreprises-magazine.com/wp-content/uploads/2019/07/PUBG-MOBILE.jpg",
    "subProducts": [
      {
        "title": "60 UC",
        "price": 4.5,
        "originalPrice": 5
      },
      {
        "title": "325 UC",
        "price": 18.5,
        "originalPrice": 30
      },
      {
        "title": "660 UC",
        "price": 37,
        "originalPrice": 50
      },
      {
        "title": "1800 UC",
        "price": 83,
        "originalPrice": 100
      },
      {
        "title": "3850 UC",
        "price": 177,
        "originalPrice": 200
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6985111903f94df5313f2ad4",
    "name": "Blood Strike Golds",
    "category": "Blood Strike",
    "price": 2.2,
    "oldPrice": 3,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Premium currency for Blood Strike to unlock exclusive Strikers, Ultra-tier skins, and the Strike Pass. Fast and secure U...",
    "themeColor": "#ff3b30",
    "imageUrl": "https://imgur.com/ItlV4eK.png",
    "subProducts": [
      {
        "title": "56 Golds",
        "price": 2.2,
        "originalPrice": 3
      },
      {
        "title": "116 Golds",
        "price": 4.2,
        "originalPrice": 5
      },
      {
        "title": "352 Golds",
        "price": 13,
        "originalPrice": 15
      },
      {
        "title": "594 Golds",
        "price": 21,
        "originalPrice": 25
      },
      {
        "title": "1210 Golds",
        "price": 42,
        "originalPrice": 50
      },
      {
        "title": "2486 Golds",
        "price": 84,
        "originalPrice": 100
      },
      {
        "title": "6380 Golds",
        "price": 210,
        "originalPrice": 250
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69850fcb03f94df5313f2ad3",
    "name": "Blood Strike Strike Pass",
    "category": "Blood Strike",
    "price": 17,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Unlock exclusive Ultra skins, executions, and weapon camos with the Blood Strike seasonal pass. Complete the Elite track...",
    "themeColor": "#ff3b30",
    "imageUrl": "https://imgur.com/ItlV4eK.png",
    "subProducts": [
      {
        "title": "Strike Pass Elite",
        "price": 17,
        "originalPrice": 20
      },
      {
        "title": "Strike Pass Premium",
        "price": 38,
        "originalPrice": 45
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69850e4703f94df5313f2acf",
    "name": "Xbox Gift Card (USD)",
    "category": "Xbox",
    "price": 19,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The ultimate gift for gamers: add USD credit to your US Microsoft account for games, apps, and hardware. Instant digital...",
    "themeColor": "#107c10",
    "imageUrl": "https://imgur.com/s2cu4j6.png",
    "subProducts": [
      {
        "title": "5 USD",
        "price": 19,
        "originalPrice": 30
      },
      {
        "title": "10 USD",
        "price": 37,
        "originalPrice": 50
      },
      {
        "title": "15 USD",
        "price": 52,
        "originalPrice": 70
      },
      {
        "title": "20 USD",
        "price": 70,
        "originalPrice": 100
      },
      {
        "title": "25 USD",
        "price": 85,
        "originalPrice": 100
      },
      {
        "title": "50 USD",
        "price": 160,
        "originalPrice": 180
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69850ce103f94df5313f2ace",
    "name": "Xbox Games Pass (Global)",
    "category": "Xbox",
    "price": 6,
    "oldPrice": 10,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Instant access to hundreds of high-quality games on Xbox and PC, including new releases on day one. The \"Ultimate\" gamin...",
    "themeColor": "#107c10",
    "imageUrl": "https://imgur.com/s2cu4j6.png",
    "subProducts": [
      {
        "title": "Xbox Game Pass Premium 1 Month",
        "price": 6,
        "originalPrice": 10
      },
      {
        "title": "Xbox EA Play Membership 1 Month",
        "price": 46,
        "originalPrice": 50
      },
      {
        "title": "Xbox Game Pass Ultimate 1 Month Trial",
        "price": 56,
        "originalPrice": 60
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "69850a1503f94df5313f2aca",
    "name": "Itunes Gift Card (USD)",
    "category": "iTunes",
    "price": 8,
    "oldPrice": 10,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "One card for everything Apple: buy apps, games, music, and movies, or pay for iCloud+ and Apple Music. Instant digital d...",
    "themeColor": "#ea4c89",
    "imageUrl": "https://imgur.com/N48TNjr.png",
    "subProducts": [
      {
        "title": "2 USD",
        "price": 8,
        "originalPrice": 10
      },
      {
        "title": "5 USD",
        "price": 20,
        "originalPrice": 25
      },
      {
        "title": "10 USD",
        "price": 39,
        "originalPrice": 50
      },
      {
        "title": "15 USD",
        "price": 58,
        "originalPrice": 70
      },
      {
        "title": "20 USD",
        "price": 77,
        "originalPrice": 90
      },
      {
        "title": "30 USD",
        "price": 115,
        "originalPrice": 130
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698508b103f94df5313f2ac7",
    "name": "PlayStation Gift Cards (TRY)",
    "category": "PlayStation",
    "price": 23,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The best way to fund your Turkish PSN account and access the store's regional deals and PS Plus. Instant digital deliver...",
    "themeColor": "#003087",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/topup-hub-t831o.firebasestorage.app/o/psstore_card_1500x950.png?alt=media&token=c75da10a-70a6-41c8-a90f-ec821210fcaa",
    "subProducts": [
      {
        "title": "250 TRY",
        "price": 23,
        "originalPrice": 30
      },
      {
        "title": "500 TRY",
        "price": 45,
        "originalPrice": 60
      },
      {
        "title": "750 TRY",
        "price": 70,
        "originalPrice": 80
      },
      {
        "title": "1000 TRY",
        "price": 89,
        "originalPrice": 100
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "698507f803f94df5313f2ac6",
    "name": "PlayStation Gift Cards (USD)",
    "category": "PlayStation",
    "price": 18,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The easiest way to fund your US PlayStation Store account for games, DLC, and PS Plus. Instant digital delivery for safe...",
    "themeColor": "#003087",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/topup-hub-t831o.firebasestorage.app/o/psstore_card_1500x950.png?alt=media&token=c75da10a-70a6-41c8-a90f-ec821210fcaa",
    "subProducts": [
      {
        "title": "5 USD",
        "price": 18,
        "originalPrice": 20
      },
      {
        "title": "10 USD",
        "price": 28,
        "originalPrice": 40
      },
      {
        "title": "25 USD",
        "price": 88,
        "originalPrice": 100
      },
      {
        "title": "50 USD",
        "price": 174,
        "originalPrice": 200
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6984f17703f94df5313f2ac2",
    "name": "Steam Gift Cards (CNY)",
    "category": "Steam",
    "price": 15,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The essential top-up for Steam accounts registered in the Mainland China region. Instant CNY credit for games and DLC wi...",
    "themeColor": "#1b2838",
    "imageUrl": "https://cdn.dlcompare.com/others_jpg/upload/news/image/en-new-valve-guidelines-suggest-0fbf22a7-image-0fbf228a.jpg.webp",
    "subProducts": [
      {
        "title": "20 CNY",
        "price": 15,
        "originalPrice": 20
      },
      {
        "title": "50 CNY",
        "price": 33,
        "originalPrice": 40
      },
      {
        "title": "100 CNY",
        "price": 61,
        "originalPrice": 70
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6984efcb03f94df5313f2ac1",
    "name": "Steam Gift Cards (EU)",
    "category": "Steam",
    "price": 25,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The perfect way to top up your Eurozone Steam Wallet for games, software, and hardware. Instant digital delivery with no...",
    "themeColor": "#1b2838",
    "imageUrl": "https://cdn.dlcompare.com/others_jpg/upload/news/image/en-new-valve-guidelines-suggest-0fbf22a7-image-0fbf228a.jpg.webp",
    "subProducts": [
      {
        "title": "5 EU",
        "price": 25,
        "originalPrice": 30
      },
      {
        "title": "10 EU",
        "price": 48,
        "originalPrice": 60
      },
      {
        "title": "20 EU",
        "price": 92,
        "originalPrice": 110
      },
      {
        "title": "30 EU",
        "price": 140,
        "originalPrice": 160
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6984ef0b03f94df5313f2ac0",
    "name": "Steam Gift Cards (USD)",
    "category": "Steam",
    "price": 22,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The primary way to fund your US-region Steam Wallet for games, DLC, and hardware. Instant digital delivery with no expir...",
    "themeColor": "#1b2838",
    "imageUrl": "https://cdn.dlcompare.com/others_jpg/upload/news/image/en-new-valve-guidelines-suggest-0fbf22a7-image-0fbf228a.jpg.webp",
    "subProducts": [
      {
        "title": "5 USD",
        "price": 22,
        "originalPrice": 30
      },
      {
        "title": "10 USD",
        "price": 39,
        "originalPrice": 60
      },
      {
        "title": "20 USD",
        "price": 80,
        "originalPrice": 100
      },
      {
        "title": "25 USD",
        "price": 96,
        "originalPrice": 120
      },
      {
        "title": "30 USD",
        "price": 120,
        "originalPrice": 150
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6984ebf703f94df5313f2abb",
    "name": "Razer Gold Global",
    "category": "Razer Gold",
    "price": 4,
    "oldPrice": 5,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The universal currency for gamers: unlock content in over 42,000 games and earn Razer Silver rewards. Secure, instant di...",
    "themeColor": "#ffc000",
    "imageUrl": "https://assets2.razerzone.com/images/pnx.assets/77a3129a6bcbb490078654285d1bad1d/razer-gold-pin-hero-mobile.webp",
    "subProducts": [
      {
        "title": "1 USD",
        "price": 4,
        "originalPrice": 5
      },
      {
        "title": "2 USD",
        "price": 8,
        "originalPrice": 10
      },
      {
        "title": "5 USD",
        "price": 20,
        "originalPrice": 30
      },
      {
        "title": "10 USD",
        "price": 39,
        "originalPrice": 50
      },
      {
        "title": "20 USD",
        "price": 70,
        "originalPrice": 100
      },
      {
        "title": "50 USD",
        "price": 180,
        "originalPrice": 200
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6984e94403f94df5313f2ab8",
    "name": "Epic Fortnite V Bucks",
    "category": "Fortnite",
    "price": 25,
    "oldPrice": 40,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The most flexible way to power up—recharge your Epic balance to buy V-Bucks, Packs, or the Fortnite Crew. Enjoy \"Shared ...",
    "themeColor": "#fbe532",
    "imageUrl": "https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg",
    "subProducts": [
      {
        "title": "1000 V-Bucks",
        "price": 25,
        "originalPrice": 40
      },
      {
        "title": "2800 V-Bucks",
        "price": 55,
        "originalPrice": 70
      },
      {
        "title": "5000 V-Bucks",
        "price": 77,
        "originalPrice": 100
      },
      {
        "title": "13500 V-Bucks",
        "price": 170,
        "originalPrice": 200
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6984e60303f94df5313f2ab6",
    "name": "Epic > Fortnite Crew",
    "category": "Fortnite",
    "price": 22,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "The ultimate Fortnite bundle: Get the Battle Pass, 1,000 monthly V-Bucks, and an exclusive Outfit Pack. Enjoy premium re...",
    "themeColor": "#fbe532",
    "imageUrl": "https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg",
    "subProducts": [
      {
        "title": "Fortnite Crew Subscription",
        "price": 22,
        "originalPrice": 30
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6983d1e98626c21d93a339c9",
    "name": "League of Legends Europe",
    "category": "League of Legends",
    "price": 20,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Instantly unlock Champions, Skins, and Battle Passes on EUW/EUNE servers with a Riot RP Gift Card. Secure digital delive...",
    "themeColor": "#00c8c8",
    "imageUrl": "https://imgur.com/ROV92Yc.png",
    "subProducts": [
      {
        "title": "500 RP",
        "price": 20,
        "originalPrice": 30
      },
      {
        "title": "1000 RP",
        "price": 40,
        "originalPrice": 50
      },
      {
        "title": "1500 RP",
        "price": 65,
        "originalPrice": 80
      },
      {
        "title": "2000 RP",
        "price": 81,
        "originalPrice": 90
      },
      {
        "title": "2500 RP",
        "price": 100,
        "originalPrice": 120
      },
      {
        "title": "3500 RP",
        "price": 140,
        "originalPrice": 150
      },
      {
        "title": "5000 RP",
        "price": 197,
        "originalPrice": 220
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6983ce3c8626c21d93a339c6",
    "name": "Robux Global",
    "category": "Roblox",
    "price": 22,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Redeemable worldwide, this gift card converts instantly to your local currency for Robux or Premium. Includes a free exc...",
    "themeColor": "#000000",
    "imageUrl": "https://i0.wp.com/gameranx.com/wp-content/uploads/2023/06/Roblox-logo.jpg?fit=1200%2C630&ssl=1",
    "subProducts": [
      {
        "title": "500 Roblux",
        "price": 22,
        "originalPrice": 30
      },
      {
        "title": "1000 Roblux",
        "price": 35,
        "originalPrice": 40
      },
      {
        "title": "1500 Roblux",
        "price": 60,
        "originalPrice": 70
      },
      {
        "title": "2000 Roblux",
        "price": 78,
        "originalPrice": 90
      },
      {
        "title": "2500 Roblux",
        "price": 95,
        "originalPrice": 110
      },
      {
        "title": "3000 Roblux",
        "price": 118,
        "originalPrice": 140
      },
      {
        "title": "5000 Roblux",
        "price": 189,
        "originalPrice": 200
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6983c8c88626c21d93a339c3",
    "name": "Valorant Europe",
    "category": "Valorant",
    "price": 20,
    "oldPrice": 30,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Instantly recharge your Europe-region account with Valorant Points for exclusive skins and Battle Passes. Secure digital...",
    "themeColor": "#fa4454",
    "imageUrl": "https://images-ext-1.discordapp.net/external/7f-FBeWit4lkymHieeOuuB87iPsR2WQRxreII_Wq1sA/https/i.pinimg.com/736x/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.jpg?format=webp",
    "subProducts": [
      {
        "title": "500 Points",
        "price": 20,
        "originalPrice": 30
      },
      {
        "title": "1000 Points",
        "price": 39,
        "originalPrice": 50
      },
      {
        "title": "1500 Points",
        "price": 60,
        "originalPrice": 80
      },
      {
        "title": "2000 Points",
        "price": 74,
        "originalPrice": 90
      },
      {
        "title": "2500 Points",
        "price": 100,
        "originalPrice": 120
      },
      {
        "title": "3500 Points",
        "price": 135,
        "originalPrice": 150
      },
      {
        "title": "5000 Points",
        "price": 193,
        "originalPrice": 220
      }
    ],
    "popularIndex": 80
  },
  {
    "id": "6981688d43683fc2d6fc1dfb",
    "name": "Valorant Turkey",
    "category": "Valorant",
    "price": 11,
    "oldPrice": 20,
    "badge": "Featured",
    "stock": "in-stock",
    "desc": "Unlock Valorant Points instantly for skins and Battle Passes on your Turkey-region account. This digital code provides t...",
    "themeColor": "#fa4454",
    "imageUrl": "https://images-ext-1.discordapp.net/external/7f-FBeWit4lkymHieeOuuB87iPsR2WQRxreII_Wq1sA/https/i.pinimg.com/736x/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.jpg?format=webp",
    "subProducts": [
      {
        "title": "375 Points",
        "price": 11,
        "originalPrice": 20
      },
      {
        "title": "825 Points",
        "price": 22,
        "originalPrice": 30
      },
      {
        "title": "1700 Points",
        "price": 44,
        "originalPrice": 60
      },
      {
        "title": "2925 Points",
        "price": 75,
        "originalPrice": 100
      },
      {
        "title": "4325 Points",
        "price": 110,
        "originalPrice": 150
      }
    ],
    "popularIndex": 80
  }
];

// Unique categories list generated dynamically from products
const CATEGORIES = [
  { id: "all", name: "Tous les articles", icon: "📦", desc: "Explorez notre inventaire complet de codes et services digitaux." },
  { id: "Gaming & Cartes", name: "Gaming & Cartes", icon: "🎮", desc: "Diamants Free Fire, UC PUBG, Robux et Riot Points VP." },
  { id: "Streaming & TV", name: "Streaming & TV", icon: "🎬", desc: "Abonnements Netflix Premium, Shahid VIP et Spotify." },
  { id: "Recharges & Flexi", name: "Recharges & Flexi", icon: "📞", desc: "Forfaits internet Flexi directs pour Ooredoo Tunisie." },
  { id: "Cartes Cadeaux", name: "Cartes Cadeaux", icon: "🎁", desc: "Cartes Steam, PlayStation, Xbox, Razer et Google Play." },
  { id: "Softwares", name: "Logiciels & Softs", icon: "💻", desc: "Licences ChatGPT Plus, VPNs, Duolingo et abonnements pro." }
];


// Mapping helper to place product categories into filter groups
function getCategoryGroup(prodCat) {
  if (!prodCat) return "Softwares";
  const cat = prodCat.toLowerCase();
  if (["free fire", "pubg mobile", "valorant", "roblox", "league of legends", "blood strike", "efootball"].some(c => cat.includes(c))) {
    return "Gaming & Cartes";
  }
  if (["netflix", "spotify", "crunchyroll", "shahid", "youtube", "discord"].some(c => cat.includes(c))) {
    return "Streaming & TV";
  }
  if (["telecom", "ooredoo", "flexi"].some(c => cat.includes(c))) {
    return "Recharges & Flexi";
  }
  if (["steam", "playstation", "xbox", "itunes", "razer gold", "google play"].some(c => cat.includes(c))) {
    return "Cartes Cadeaux";
  }
  return "Softwares";
}


// 1.5. Mock orders list representing different stages
const DEFAULT_ORDERS = [
  {
    id: "#ORD-178094",
    items: "Youtube Premium (Youtube Premium Month) (x1)",
    customer: "Tél: 22123456",
    method: "ooredoo",
    total: 10.000,
    status: "completed",
    date: "09 Jun 2026, 03:13 AM",
    playerInfo: "client@gmail.com",
    step: 5,
    deliveredData: "Youtube Access: client@gmail.com / Pass: 123456",
    timeline: [
      { time: "09 Jun 2026, 03:13 AM", text: "Order placed and pending for delivery." },
      { time: "09 Jun 2026, 03:13 AM", text: "Delivery in progress." },
      { time: "09 Jun 2026, 03:14 AM", text: "G2G delivered 1 quantity." },
      { time: "09 Jun 2026, 03:14 AM", text: "Receipt of the item has been confirmed." },
      { time: "09 Jun 2026, 03:14 AM", text: "The order is completed." }
    ]
  },
  {
    id: "#ORD-281048",
    items: "325 UC PUBG Mobile (x1)",
    customer: "D17: 29019283",
    method: "d17",
    total: 18.500,
    status: "verify",
    date: "27 Jun 2026, 04:10 PM",
    playerInfo: "57829103",
    step: 2,
    deliveredData: "",
    timeline: [
      { time: "27 Jun 2026, 04:10 PM", text: "Order placed and pending for payment verification." },
      { time: "27 Jun 2026, 04:12 PM", text: "Client declared D17 transfer. Awaiting admin review." }
    ]
  },
  {
    id: "#ORD-894021",
    items: "Free Fire Member (Weekly Member) (x2)",
    customer: "Binance: TXID-98048",
    method: "binance",
    total: 20.000,
    status: "preparing",
    date: "27 Jun 2026, 04:22 PM",
    playerInfo: "32019472",
    step: 3,
    deliveredData: "",
    timeline: [
      { time: "27 Jun 2026, 04:22 PM", text: "Order placed and pending payment verification." },
      { time: "27 Jun 2026, 04:23 PM", text: "Payment confirmed via Binance Pay transaction." },
      { time: "27 Jun 2026, 04:25 PM", text: "Order is in preparation phase." }
    ]
  }
];

// Global App State
let products = [];
let orders = [];
let tickets = [];
let cart = [];
let activeCategory = "all";
let currentSearch = "";
let currentSort = "default";
let activeOrderStatusTab = "to-pay";
let clientOrdersSearchVal = "";
let activeTrackingOrderId = "";
let users = [];
let currentUser = null;
let discordClientId = "";
let priceSliderMax = 9999; // Extended max price limit for high end games
let checkoutPaymentMethod = "ooredoo";
let checkoutStep = 1;
let simulatedOTP = "";
let isCloudDbConnected = true;

// Initialize App safely with try-catch blocks for robust lifecycle execution
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM content loaded. Starting initialization phases...");
  
  // Fetch Discord Client ID
  try {
    const res = await fetch("/api/discord-client-id");
    if (res.ok) {
      const data = await res.json();
      discordClientId = data.clientId;
    }
  } catch (e) {
    console.error("Failed to load Discord Client ID:", e);
  }

  // Check Discord OAuth Callback
  const urlParams = new URLSearchParams(window.location.search);
  const discordCode = urlParams.get('code');
  if (discordCode) {
    await handleDiscordCallback(discordCode);
  }

  try {
    await loadDatabase();
    console.log("Phase 1: Database initialized successfully.");
  } catch (e) {
    console.error("loadDatabase error details:", e);
  }
  
  try {
    setupUI();
    console.log("Phase 2: UI templates rendered successfully.");
  } catch (e) {
    console.error("setupUI error details:", e);
  }
  
  try {
    setupEventListeners();
    console.log("Phase 3: Interactive event listeners bound successfully.");
  } catch (e) {
    console.error("setupEventListeners error details:", e);
  }
  
  try {
    runStatsAnimation();
    console.log("Phase 4: Stats animation loaded successfully.");
  } catch (e) {
    console.error("runStatsAnimation error:", e);
  }
    // Live Poll support tickets from database every 10 seconds
  setInterval(async () => {
    try {
      const res = await fetch("/api/tickets");
      if (res.ok) {
        const cloudTickets = await res.json();
        if (cloudTickets && cloudTickets.length > 0) {
          const activeTicketIdEl = document.getElementById("support-chat-active-ticket-id");
          const activeId = activeTicketIdEl ? activeTicketIdEl.value : null;

          const adminActiveIdEl = document.getElementById("admin-active-ticket-id");
          const adminActiveId = adminActiveIdEl ? adminActiveIdEl.value : null;

          tickets = cloudTickets;

          renderClientTickets();
          renderAdminTickets();

          if (activeId && document.getElementById("support-screen-chat").style.display === "flex") {
            const t = tickets.find(o => o.id === activeId);
            if (t) {
              const chatBox = document.getElementById("support-chat-messages-box");
              const oldScrollHeight = chatBox.scrollHeight;
              
              chatBox.innerHTML = t.replies.map(r => {
                const typeClass = r.sender === "admin" ? "admin" : "client";
                const senderName = r.sender === "admin" ? "Support ROLLY" : "Moi";
                return `
                  <div class="chat-bubble ${typeClass}">
                    <span style="font-size: 10px; font-weight: 800; opacity: 0.8; margin-bottom: 2px;">${senderName}</span>
                    <span>${r.text}</span>
                    <span class="chat-bubble-time">${r.time}</span>
                  </div>
                `;
              }).join("");

              if (chatBox.scrollTop + chatBox.clientHeight >= oldScrollHeight - 50) {
                chatBox.scrollTop = chatBox.scrollHeight;
              }
            }
          }

          if (adminActiveId && document.getElementById("admin-ticket-reply-modal").classList.contains("active")) {
            const t = tickets.find(o => o.id === adminActiveId);
            if (t) {
              const chatBox = document.getElementById("admin-chat-messages-box");
              const oldScrollHeight = chatBox.scrollHeight;
              
              chatBox.innerHTML = t.replies.map(r => {
                const typeClass = r.sender === "admin" ? "admin" : "client";
                const senderName = r.sender === "admin" ? "Support" : t.customerName;
                return `
                  <div class="chat-bubble ${typeClass}">
                    <span style="font-size: 10px; font-weight: 800; opacity: 0.8; margin-bottom: 2px;">${senderName}</span>
                    <span>${r.text}</span>
                    <span class="chat-bubble-time">${r.time}</span>
                  </div>
                `;
              }).join("");

              if (chatBox.scrollTop + chatBox.clientHeight >= oldScrollHeight - 50) {
                chatBox.scrollTop = chatBox.scrollHeight;
              }
            }
          }
        }
      }
    } catch(err) {}
  }, 10000);

  showToast("Boutique ROLLY chargée avec succès ! 🇹🇳");
});


// Cloud Saving wrappers calling Vercel serverless database APIs
async function saveProductsToCloud() {
  localStorage.setItem("rolly_products", JSON.stringify(products));
  try {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products)
    });
  } catch (e) {
    console.warn("Products cloud sync failed, cached locally:", e);
  }
}

async function saveOrdersToCloud() {
  localStorage.setItem("rolly_orders", JSON.stringify(orders));
  try {
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orders)
    });
  } catch (e) {
    console.warn("Orders cloud sync failed, cached locally:", e);
  }
}

async function saveUsersToCloud() {
  localStorage.setItem("rolly_users", JSON.stringify(users));
  try {
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    });
  } catch (e) {
    console.warn("Users cloud sync failed, cached locally:", e);
  }
}

async function saveTicketsToCloud() {
  localStorage.setItem("rolly_tickets", JSON.stringify(tickets));
  try {
    await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tickets)
    });
  } catch (e) {
    console.warn("Tickets cloud sync failed, cached locally:", e);
  }
}

// Load DB from Cloud with LocalStorage safely with fallback overrides
async function loadDatabase() {
  const localCart = localStorage.getItem("rolly_cart");
  const sessionUser = sessionStorage.getItem("rolly_session_user");

  // 1. Fetch products from Serverless Cloud DB
  try {
    const res = await fetch("/api/products");
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data && data.error === "database_disconnected") {
      isCloudDbConnected = false;
      throw new Error();
    }
    if (data && data.length > 0) {
      products = data;
    } else {
      products = [...DEFAULT_PRODUCTS];
      await saveProductsToCloud();
    }
  } catch (e) {
    isCloudDbConnected = false;
    console.warn("Fallback to local products cache.");
    const local = localStorage.getItem("rolly_products");
    products = local ? JSON.parse(local) : [...DEFAULT_PRODUCTS];
  }

  // Backwards compatibility migration checks
  let productsFeaturedModified = false;
  products.forEach(p => {
    if (p.featuredCarousel === undefined) {
      p.featuredCarousel = (p.popularIndex >= 80);
      productsFeaturedModified = true;
    }
    if (p.featuredGrid === undefined) {
      p.featuredGrid = (p.popularIndex >= 80);
      productsFeaturedModified = true;
    }
  });
  if (productsFeaturedModified) {
    await saveProductsToCloud();
  }

  // 2. Fetch orders from Serverless Cloud DB
  try {
    const res = await fetch("/api/orders");
    if (!res.ok) throw new Error();
    const cloudOrders = await res.json();
    
    const local = localStorage.getItem("rolly_orders");
    let localOrders = [];
    try {
      if (local) localOrders = JSON.parse(local);
    } catch(err) {}

    orders = cloudOrders || [];
    let mergedAny = false;
    localOrders.forEach(lo => {
      if (!orders.some(co => co.id === lo.id)) {
        orders.push(lo);
        mergedAny = true;
      }
    });

    if (mergedAny) {
      await saveOrdersToCloud();
    }
  } catch (e) {
    isCloudDbConnected = false;
    console.warn("Fallback to local orders cache.");
    const local = localStorage.getItem("rolly_orders");
    orders = local ? JSON.parse(local) : [...DEFAULT_ORDERS];
  }

  // 3. Fetch users from Serverless Cloud DB
  try {
    const res = await fetch("/api/users");
    if (!res.ok) throw new Error();
    const cloudUsers = await res.json();
    
    const local = localStorage.getItem("rolly_users");
    let localUsers = [];
    try {
      if (local) localUsers = JSON.parse(local);
    } catch(err) {}

    users = cloudUsers || [];
    let mergedAny = false;
    localUsers.forEach(lu => {
      const match = users.find(cu => cu.username.toLowerCase() === lu.username.toLowerCase());
      if (!match) {
        users.push(lu);
        mergedAny = true;
      } else {
        // If the matching account in cloud DB has default password "admin" but local has a custom password, restore it!
        if ((match.password === "admin" || match.username === "adrix") && lu.password !== "admin" && lu.password !== "admin") {
          match.password = lu.password;
          mergedAny = true;
        }
      }
    });

    if (mergedAny) {
      await saveUsersToCloud();
    }
  } catch (e) {
    isCloudDbConnected = false;
    console.warn("Fallback to local users cache.");
    const local = localStorage.getItem("rolly_users");
    users = local ? JSON.parse(local) : [];
  }

  // Delete default master admin "admin" if it exists
  if (users.some(u => u.username.toLowerCase() === "admin")) {
    users = users.filter(u => u.username.toLowerCase() !== "admin");
    await saveUsersToCloud();
  }

  // Elevate user 'adrix' to admin with custom password
  const adrixUser = users.find(u => u.username.toLowerCase() === "adrix");
  if (adrixUser) {
    adrixUser.password = "zfezef*zad/4988";
    if (adrixUser.role !== "admin") {
      adrixUser.role = "admin";
    }
    await saveUsersToCloud();
  } else {
    users.push({
      id: "usr-adrix-master",
      username: "adrix",
      password: "zfezef*zad/4988",
      role: "admin"
    });
    await saveUsersToCloud();
  }

  // 4. Fetch support tickets from Serverless Cloud DB
  try {
    const res = await fetch("/api/tickets");
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data && data.length > 0) {
      tickets = data;
    } else {
      tickets = [];
      await saveTicketsToCloud();
    }
  } catch (e) {
    isCloudDbConnected = false;
    console.warn("Fallback to local tickets cache.");
    const local = localStorage.getItem("rolly_tickets");
    tickets = local ? JSON.parse(local) : [];
  }

  if (tickets.length === 0) {
    tickets = [
      {
        id: "#TCK-481029",
        userId: "kais",
        customerName: "Kais",
        customerEmail: "kais@gmail.com",
        message: "Problème D17: Bonjour, j'ai payé par D17 mais ma commande #ORD-178094 est toujours en attente de vérification. Merci.",
        status: "open",
        date: "Jun 27, 2026, 4:00 PM",
        replies: [
          { sender: "client", text: "Problème D17: Bonjour, j'ai payé par D17 mais ma commande #ORD-178094 est toujours en attente de vérification. Merci.", time: "Jun 27, 2026, 4:00 PM" }
        ]
      },
      {
        id: "#TCK-928174",
        userId: "anis",
        customerName: "Anis",
        customerEmail: "anis@gmail.com",
        message: "Validité des codes: Est-ce que les codes iTunes sont valables pour le store Tunisien ?",
        status: "resolved",
        date: "Jun 26, 2026, 11:30 AM",
        replies: [
          { sender: "client", text: "Validité des codes: Est-ce que les codes iTunes sont valables pour le store Tunisien ?", time: "Jun 26, 2026, 11:30 AM" },
          { sender: "admin", text: "Bonjour Anis, non les codes iTunes USD sont uniquement valables pour le store Américain.", time: "Jun 26, 2026, 12:00 PM" }
        ]
      }
    ];
    await saveTicketsToCloud();
  }

  // Load session user and cart locally
  try {
    if (sessionUser) {
      currentUser = JSON.parse(sessionUser);
      // Update session user role dynamically to match db changes
      const updatedSelf = users.find(u => u.id === currentUser.id);
      if (updatedSelf && updatedSelf.role !== currentUser.role) {
        currentUser.role = updatedSelf.role;
        sessionStorage.setItem("rolly_session_user", JSON.stringify(currentUser));
      }
    }
  } catch (e) {
    currentUser = null;
  }

  try {
    if (localCart) {
      cart = JSON.parse(localCart);
    }
  } catch (e) {
    cart = [];
  }
  updateCartBadge();
}

// Setup Page Elements
function setupUI() {
  const warningBanner = document.getElementById("admin-db-warning-banner");
  if (warningBanner) {
    warningBanner.style.display = isCloudDbConnected ? "none" : "flex";
  }
  renderHeroCarousel();
  renderCategoryMarquee();
  renderSidebarTrending();
  renderTrendingProducts();
  renderCatalogProducts();
  renderCategoriesGrid();
  updateAuthUI();
  renderClientOrders();
  updateCartUI();
  updateAdminStats();
  renderAdminOrders();
  renderAdminUsers();
  renderStockInventory();
  updateAdminSidebarProfile();
  renderAdminTickets();
  renderClientTickets();
}

// Dynamically updates username and initials inside admin sidebar profile widget
function updateAdminSidebarProfile() {
  const charEl = document.getElementById("admin-profile-avatar-char");
  const nameEl = document.getElementById("admin-profile-username-label");
  if (currentUser && charEl && nameEl) {
    charEl.innerText = currentUser.username.charAt(0).toUpperCase();
    nameEl.innerText = currentUser.username;
  }
}

// Switch between subviews inside the admin control panel
function switchAdminSubview(subviewId) {
  // Toggle active subviews
  document.querySelectorAll(".admin-panel-subview").forEach(view => {
    view.classList.remove("active");
  });
  const targetView = document.getElementById(`admin-subview-${subviewId}`);
  if (targetView) {
    targetView.classList.add("active");
  }

  // Toggle active sidebar items
  document.querySelectorAll(".admin-sidebar-nav-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-admin-tab") === subviewId) {
      item.classList.add("active");
    }
  });

  if (subviewId === "tickets") {
    renderAdminTickets();
  }

  // Update section header title text
  const titleEl = document.getElementById("admin-subview-title");
  if (titleEl) {
    if (subviewId === "dashboard") titleEl.innerText = "Tableau de bord";
    else if (subviewId === "stock") titleEl.innerText = "Gestion du Stock & Prix";
    else if (subviewId === "admins") titleEl.innerText = "Gestion des Administrateurs";
    else if (subviewId === "tickets") titleEl.innerText = "Tickets Support";
  }
}

// Render list of administrator accounts in Admin panel
function renderAdminUsers() {
  const container = document.getElementById("admins-list-body-new");
  if (!container) return;

  const adminUsers = users.filter(u => u.role === "admin");

  if (adminUsers.length === 0) {
    container.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 12px 0;">Aucun autre administrateur.</td></tr>`;
    return;
  }

  container.innerHTML = adminUsers.map(u => {
    const isMaster = u.username === "admin" || u.username.toLowerCase() === "adrix";
    const deleteBtnHTML = isMaster 
      ? `<span style="font-size: 11px; color: var(--text-muted);">Protégé</span>` 
      : `<button class="btn btn-sm btn-outline delete-admin-btn" data-username="${u.username}" style="color: var(--primary); border-color: var(--primary); padding: 4px 8px; font-size: 11px; height: 26px; line-height: 1;">Supprimer</button>`;
    
    return `
      <tr>
        <td style="font-family: var(--font-secondary); font-size: 12px; font-weight: 700; color: #fff; padding: 12px;">${u.username}</td>
        <td style="font-family: var(--font-secondary); font-size: 11px; color: var(--text-secondary); padding: 12px;"><span class="badge" style="background-color: var(--primary); color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Admin</span></td>
        <td style="padding: 12px;">${deleteBtnHTML}</td>
      </tr>
    `;
  }).join("");

  // Bind delete events
  container.querySelectorAll(".delete-admin-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetUsername = btn.getAttribute("data-username");
      if (confirm(`Supprimer l'administrateur ${targetUsername} ?`)) {
        users = users.filter(u => u.username.toLowerCase() !== targetUsername.toLowerCase());
        saveUsersToCloud();
        showToast(`Administrateur ${targetUsername} supprimé ! 🗑`);
        setupUI();
      }
    });
  });
}

let adminInventorySearch = "";

// Render products in the visual CMS stock management view
function renderStockInventory() {
  const grid = document.getElementById("admin-inventory-grid");
  if (!grid) return;

  const filtered = products.filter(p => p.name.toLowerCase().includes(adminInventorySearch.toLowerCase()));

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0; font-family: var(--font-secondary); font-size: 14px;">Aucun produit trouvé.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const isOutOfStock = p.stock === "out-of-stock";
    const badgeClass = isOutOfStock ? "out-of-stock" : "in-stock";
    const badgeText = isOutOfStock ? "Rupture" : "En Stock";
    const coverImg = p.image || p.imageUrl || "/public/favicon.svg";

    return `
      <div class="inventory-card" data-product-id="${p.id}">
        <div class="inventory-card-image-box">
          <img src="${coverImg}" class="inventory-card-image" alt="${p.name}" />
        </div>
        <div class="inventory-card-info">
          <span class="inventory-card-category">${p.category}</span>
          <h4 class="inventory-card-name">${p.name}</h4>
          <span class="inventory-card-price">${p.price.toFixed(3)} DT</span>
          <span class="inventory-card-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="inventory-card-actions">
          <button class="inventory-action-btn edit btn-edit-inventory" data-id="${p.id}">Modifier</button>
          <button class="inventory-action-btn clone btn-clone-inventory" data-id="${p.id}">Dupliquer</button>
          <button class="inventory-action-btn delete btn-delete-inventory" data-id="${p.id}">Supprimer</button>
        </div>
      </div>
    `;
  }).join("");

  // Bind actions
  grid.querySelectorAll(".btn-edit-inventory").forEach(btn => {
    btn.addEventListener("click", () => {
      openEditProductModal(btn.getAttribute("data-id"));
    });
  });

  grid.querySelectorAll(".btn-clone-inventory").forEach(btn => {
    btn.addEventListener("click", () => {
      cloneProduct(btn.getAttribute("data-id"));
    });
  });

  grid.querySelectorAll(".btn-delete-inventory").forEach(btn => {
    btn.addEventListener("click", () => {
      deleteProduct(btn.getAttribute("data-id"));
    });
  });
}

// Controller to clone product
function cloneProduct(prodId) {
  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  // Deep clone
  const clone = JSON.parse(JSON.stringify(prod));
  clone.id = "prod-" + Math.floor(100000 + Math.random() * 900000);
  clone.name = clone.name + " (Copie)";

  products.push(clone);
  saveProductsToCloud();
  showToast(`Produit ${prod.name} dupliqué avec succès ! 👥`);
  setupUI();
}

// Controller to delete product
function deleteProduct(prodId) {
  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  if (confirm(`Êtes-vous sûr de vouloir supprimer le produit ${prod.name} ?`)) {
    products = products.filter(p => p.id !== prodId);
    saveProductsToCloud();
    showToast(`Produit ${prod.name} supprimé. 🗑️`);
    setupUI();
  }
}

// Open modal and prefill product edit form details
function openEditProductModal(prodId) {
  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  document.getElementById("edit-prod-id").value = prod.id;
  document.getElementById("edit-prod-name").value = prod.name;
  document.getElementById("edit-prod-category").value = prod.category || "Gaming & Cartes";
  document.getElementById("edit-prod-image").value = prod.image || prod.imageUrl || "";
  document.getElementById("edit-prod-stock").value = prod.stock || "in-stock";
  document.getElementById("edit-prod-featured").checked = prod.featuredCarousel === true;
  document.getElementById("edit-prod-featured-grid").checked = prod.featuredGrid === true;

  const varBox = document.getElementById("edit-prod-variants-box");
  if (varBox) {
    if (!prod.subProducts || prod.subProducts.length === 0) {
      varBox.innerHTML = `<p style="font-family: var(--font-secondary); font-size: 12px; color: var(--text-muted);">Ce produit n'a pas de variantes de prix.</p>`;
    } else {
      varBox.innerHTML = `
        <h4 style="font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 12px;">Prix des variantes (Packs) :</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${prod.subProducts.map((v, idx) => {
            return `
              <div class="form-row" style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px; align-items: center;">
                <span style="font-family: var(--font-secondary); font-size: 12px; color: #fff; font-weight: 600;">${v.title}</span>
                <div style="position: relative; display: flex; align-items: center;">
                  <input type="number" step="0.100" class="edit-variant-price-input" data-idx="${idx}" value="${v.price}" required style="width: 100%; background-color: #0d0e12; border: 1px solid var(--border-color); border-radius: 8px; padding: 8px 12px; font-family: var(--font-secondary); font-size: 12px; color: #fff; outline: none; text-align: right; padding-right: 36px;" />
                  <span style="position: absolute; right: 12px; font-family: var(--font-secondary); font-size: 11px; color: var(--text-muted); font-weight: 700;">DT</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `;
    }
  }

  document.getElementById("edit-product-modal").classList.add("active");
}

// Setup Event Listeners
function setupEventListeners() {
  // Support chat page event bindings
  const newChatBtn = document.getElementById("btn-support-new-chat");
  if (newChatBtn) {
    newChatBtn.addEventListener("click", () => {
      localStorage.removeItem("rolly_last_active_ticket_id");
      document.querySelectorAll(".support-ticket-item").forEach(item => {
        item.classList.remove("active");
      });
      document.getElementById("support-screen-welcome").style.display = "none";
      document.getElementById("support-screen-chat").style.display = "none";
      
      const createScreen = document.getElementById("support-screen-create");
      createScreen.style.display = "flex";

      const guestFields = document.getElementById("support-guest-fields");
      if (guestFields) {
        if (!currentUser) {
          guestFields.style.display = "flex";
          document.getElementById("support-guest-name").required = true;
          document.getElementById("support-guest-email").required = true;
        } else {
          guestFields.style.display = "none";
          document.getElementById("support-guest-name").required = false;
          document.getElementById("support-guest-email").required = false;
        }
      }
    });
  }

  const startChatBtn = document.getElementById("btn-support-start-chat");
  if (startChatBtn) {
    startChatBtn.addEventListener("click", () => {
      if (newChatBtn) newChatBtn.click();
    });
  }

  const createForm = document.getElementById("support-create-ticket-form");
  if (createForm) {
    createForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const subject = document.getElementById("support-ticket-subject").value.trim();
      const message = document.getElementById("support-ticket-message").value.trim();
      
      let name = "";
      let email = "";
      if (currentUser) {
        name = currentUser.username;
        email = currentUser.email || "client@rolly.store";
      } else {
        name = document.getElementById("support-guest-name").value.trim();
        email = document.getElementById("support-guest-email").value.trim();
      }

      const ticketId = "#TCK-" + Math.floor(100000 + Math.random() * 900000);
      const timeStr = new Date().toLocaleString();

      const newTicket = {
        id: ticketId,
        userId: currentUser ? currentUser.id : "guest",
        customerName: name,
        customerEmail: email,
        message: message,
        status: "open",
        date: timeStr,
        replies: [
          { sender: "client", text: message, time: timeStr }
        ]
      };

      tickets.push(newTicket);

      if (!currentUser) {
        let guestSession = [];
        try {
          const stored = localStorage.getItem("rolly_guest_ticket_ids");
          if (stored) guestSession = JSON.parse(stored);
        } catch(err) {}
        guestSession.push(ticketId);
        localStorage.setItem("rolly_guest_ticket_ids", JSON.stringify(guestSession));
      }

      await saveTicketsToCloud();
      createForm.reset();
      
      showToast("Ticket créé avec succès ! Nos agents vous répondrons bientôt. 💬");
      
      renderClientTickets();
      renderAdminTickets();
      openClientTicketChat(ticketId);
    });
  }

  const inputForm = document.getElementById("support-chat-input-form");
  if (inputForm) {
    inputForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const ticketId = document.getElementById("support-chat-active-ticket-id").value;
      const textInput = document.getElementById("support-chat-message-text");
      const textVal = textInput.value.trim();
      if (!textVal) return;

      const t = tickets.find(o => o.id === ticketId);
      if (t) {
        const timeStr = new Date().toLocaleString();
        t.replies.push({
          sender: "client",
          text: textVal,
          time: timeStr
        });
        
        textInput.value = "";
        await saveTicketsToCloud();
        
        openClientTicketChat(ticketId);
        renderClientTickets();
      }
    });
  }

  const adminChatForm = document.getElementById("admin-ticket-chat-form");
  if (adminChatForm) {
    adminChatForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const ticketId = document.getElementById("admin-active-ticket-id").value;
      const replyTextEl = document.getElementById("admin-ticket-reply-text");
      const replyTextVal = replyTextEl.value.trim();
      const statusSelect = document.getElementById("admin-ticket-status-select").value;

      const t = tickets.find(o => o.id === ticketId);
      if (t) {
        const timeStr = new Date().toLocaleString();
        
        if (replyTextVal) {
          t.replies.push({
            sender: "admin",
            text: replyTextVal,
            time: timeStr
          });
          replyTextEl.value = "";
        }
        
        t.status = statusSelect;
        
        await saveTicketsToCloud();
        showToast("Réponse envoyée et statut mis à jour ! 🚀");
        
        openAdminTicketChat(ticketId);
        
        if (statusSelect === "resolved") {
          document.getElementById("admin-ticket-reply-modal").classList.remove("active");
        }
        
        renderAdminTickets();
        renderClientTickets();
      }
    });
  }

  const closeAdminTicketBtn = document.getElementById("close-admin-ticket-modal");
  if (closeAdminTicketBtn) {
    closeAdminTicketBtn.addEventListener("click", () => {
      document.getElementById("admin-ticket-reply-modal").classList.remove("active");
    });
  }

  // Navigation Routing
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-view");
      switchView(targetView);
    });
  });

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-view");
      switchView(targetView);
      document.getElementById("mobile-nav-overlay").classList.remove("active");
    });
  });

  document.querySelectorAll("[data-link-view]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-link-view");
      switchView(targetView);
      window.scrollTo(0, 0);
    });
  });

  document.getElementById("header-logo").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
  });

  // 3D Hero Carousel control triggers
  const prevBtn = document.getElementById("carousel-prev-btn");
  const nextBtn = document.getElementById("carousel-next-btn");
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      activeCarouselIndex = (activeCarouselIndex - 1 + carouselProducts.length) % carouselProducts.length;
      updateCarouselLayout();
      startCarouselAutoSlide(); // Reset auto-slide timer
    });
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      activeCarouselIndex = (activeCarouselIndex + 1) % carouselProducts.length;
      updateCarouselLayout();
      startCarouselAutoSlide(); // Reset auto-slide timer
    });
  }

  document.getElementById("view-all-products-btn").addEventListener("click", () => {
    switchView("products");
  });

  // Mobile Hamburger Toggle
  const burgerBtn = document.getElementById("burger-menu-btn");
  const closeBurgerBtn = document.getElementById("close-burger-btn");
  const mobileOverlay = document.getElementById("mobile-nav-overlay");

  burgerBtn.addEventListener("click", () => {
    mobileOverlay.classList.add("active");
  });

  closeBurgerBtn.addEventListener("click", () => {
    mobileOverlay.classList.remove("active");
  });

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      mobileOverlay.classList.remove("active");
    }
  });

  // Catalog Sidebar Filters
  const catalogSearch = document.getElementById("catalog-search");
  catalogSearch.addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    renderCatalogProducts();
  });

  const catalogCatSelect = document.getElementById("catalog-category-select");
  catalogCatSelect.addEventListener("change", (e) => {
    activeCategory = e.target.value;
    renderCatalogProducts();
  });

  const catalogSort = document.getElementById("catalog-sort");
  catalogSort.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderCatalogProducts();
  });

  const priceSlider = document.getElementById("price-slider");
  priceSlider.addEventListener("input", (e) => {
    priceSliderMax = parseFloat(e.target.value);
    document.getElementById("price-slider-value").innerText = priceSliderMax;
    renderCatalogProducts();
  });

  // Header Search Shortcut
  const headerSearch = document.getElementById("search-input");
  headerSearch.addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    catalogSearch.value = e.target.value;
    if (document.querySelector(".app-view.active").id !== "view-products") {
      switchView("products");
    }
    renderCatalogProducts();
  });

  // Cart drawer triggers
  const cartBtn = document.getElementById("cart-btn");
  const cartOverlay = document.getElementById("cart-overlay");
  const closeCartBtn = document.getElementById("close-cart-btn");

  cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("active");
  });

  closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
  });

  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.remove("active");
    }
  });

  // Quantity controllers inside purchase configuration modal
  const qtyMinus = document.getElementById("qty-minus");
  const qtyPlus = document.getElementById("qty-plus");
  const qtyInput = document.getElementById("qty-input");

  qtyMinus.addEventListener("click", () => {
    let val = parseInt(qtyInput.value);
    if (val > 1) qtyInput.value = val - 1;
  });

  qtyPlus.addEventListener("click", () => {
    let val = parseInt(qtyInput.value);
    if (val < 10) qtyInput.value = val + 1;
  });

  document.getElementById("purchase-config-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const prodId = document.getElementById("modal-product-id").value;
    const playerInfo = document.getElementById("purchase-playerid").value.trim();
    const qty = parseInt(qtyInput.value);
    
    const prod = products.find(p => p.id === prodId);
    const selectEl = document.getElementById("purchase-variant-select");
    
    let finalName = prod.name;
    let finalPrice = prod.price;
    
    if (selectEl) {
      const selectedIdx = parseInt(selectEl.value);
      const variant = prod.subProducts[selectedIdx];
      finalName = `${prod.name} (${variant.title})`;
      finalPrice = variant.price;
    }
    
    addToCart(prod, finalName, finalPrice, qty, playerInfo);
    document.getElementById("purchase-modal").classList.remove("active");
  });

  // Checkout modal loops
  const checkoutBtn = document.getElementById("checkout-btn");
  const checkoutModal = document.getElementById("checkout-modal");
  const closeCheckoutModal = document.getElementById("close-checkout-modal");

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Votre panier est vide ! 🛒");
      return;
    }
    cartOverlay.classList.remove("active");
    openCheckoutWizard();
  });



  // Checkout select payment cards
  document.querySelectorAll(".payment-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      checkoutPaymentMethod = card.getAttribute("data-method");
    });
  });

  // Wizard Nav controls
  document.getElementById("btn-next-step-1").addEventListener("click", () => {
    checkoutStep = 2;
    updateCheckoutStepUI();
  });

  document.getElementById("btn-prev-step-2").addEventListener("click", () => {
    checkoutStep = 1;
    updateCheckoutStepUI();
  });

  document.getElementById("btn-next-step-2").addEventListener("click", () => {
    if (!validateCheckoutStep2()) return;

    if (checkoutPaymentMethod === "binance" || checkoutPaymentMethod === "crypto" || checkoutPaymentMethod === "paypal") {
      // Open overlay modal and show loader
      const overlay = document.getElementById("checkout-payment-overlay");
      overlay.classList.add("active");
      document.getElementById("payment-state-loading").style.display = "flex";
      document.getElementById("payment-state-binance").style.display = "none";
      document.getElementById("payment-state-crypto").style.display = "none";
      document.getElementById("payment-state-success").style.display = "none";

      const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

      // Call serverless checkout-create API endpoint with dynamic local fallback
      fetch("/api/checkout-create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: cart[0].product.id,
          variantIdx: 0,
          paymentMethod: checkoutPaymentMethod,
          email: currentUser ? currentUser.email : "guest@rolly.tn",
          username: currentUser ? currentUser.username : "guest"
        })
      })
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(data => {
        if (data.error) {
          showToast(`Erreur API: ${data.error} ❌`);
          overlay.classList.remove("active");
          return;
        }

        // Hide Loading State
        document.getElementById("payment-state-loading").style.display = "none";

        // Display correct sub-state and initialize polling checks
        if (checkoutPaymentMethod === "binance") {
          document.getElementById("binance-qr-img").src = data.qrCodeUrl;
          document.getElementById("binance-pay-link").href = data.paymentUrl;
          document.getElementById("payment-state-binance").style.display = "flex";
        } else if (checkoutPaymentMethod === "crypto") {
          document.getElementById("crypto-qr-img").src = data.qrCodeUrl;
          document.getElementById("crypto-address-input").value = data.address;
          document.getElementById("crypto-exact-amount").innerText = data.amount.toFixed(2) + " USDT";
          document.getElementById("payment-state-crypto").style.display = "flex";
        } else if (checkoutPaymentMethod === "paypal") {
          // Open Paypal in a new checkout tab
          window.open(data.paymentUrl, "_blank");
          // Re-use binance state template styled for Paypal
          document.getElementById("binance-qr-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(data.paymentUrl);
          document.getElementById("binance-pay-link").href = data.paymentUrl;
          document.getElementById("binance-pay-link").innerText = "Procéder sur PayPal 💳";
          document.getElementById("binance-pay-link").style.backgroundColor = "#0070ba";
          document.getElementById("binance-pay-link").style.color = "#fff";
          document.getElementById("payment-state-binance").style.display = "flex";
        }

        // Start checking payment status
        startPaymentPolling(data.orderId, Date.now(), checkoutPaymentMethod);
      })
      .catch(err => {
        console.warn("Serverless API is offline/unavailable. Activating local browser simulation...", err);
        showToast("Mode Démo local activé (Sérveur API hors-ligne) 🧪");

        // Front-end ONLY checkout flow simulation fallback
        setTimeout(() => {
          document.getElementById("payment-state-loading").style.display = "none";
          const mockOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

          if (checkoutPaymentMethod === "binance") {
            document.getElementById("binance-qr-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent("https://pay.binance.com/checkout/demo");
            document.getElementById("binance-pay-link").href = "https://pay.binance.com/checkout/demo";
            document.getElementById("payment-state-binance").style.display = "flex";
          } else if (checkoutPaymentMethod === "crypto") {
            document.getElementById("crypto-qr-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent("trx:TYm7D8pMockUSDTAddress7777");
            document.getElementById("crypto-address-input").value = "TYm7D8pMockUSDTAddress7777";
            document.getElementById("crypto-exact-amount").innerText = usdtTotal.toFixed(2) + " USDT";
            document.getElementById("payment-state-crypto").style.display = "flex";
          } else if (checkoutPaymentMethod === "paypal") {
            document.getElementById("binance-qr-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent("https://www.paypal.com/checkout/demo");
            document.getElementById("binance-pay-link").href = "https://www.paypal.com/checkout/demo";
            document.getElementById("binance-pay-link").innerText = "Procéder sur PayPal 💳";
            document.getElementById("binance-pay-link").style.backgroundColor = "#0070ba";
            document.getElementById("binance-pay-link").style.color = "#fff";
            document.getElementById("payment-state-binance").style.display = "flex";
          }

          // Trigger simulated checkouts completion after 5 seconds on client side
          setTimeout(() => {
            document.getElementById("payment-state-binance").style.display = "none";
            document.getElementById("payment-state-crypto").style.display = "none";
            document.getElementById("payment-state-success").style.display = "flex";

            setTimeout(() => {
              document.getElementById("checkout-payment-overlay").classList.remove("active");
              completeOrderWithDetails(mockOrderId, new Date().toLocaleString(), checkoutPaymentMethod, "ROLLY-LOCAL-DEMO-9912");
            }, 2000);
          }, 5000);

        }, 1200);
      });
    } else {
      // Direct manual declaration transitions
      checkoutStep = 3;
      updateCheckoutStepUI();
    }
  });

  // OTP inputs checks
  const otpInputs = document.querySelectorAll(".otp-char");
  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const val = e.target.value;
      if (val && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  document.getElementById("btn-confirm-otp").addEventListener("click", () => {
    let enteredOTP = "";
    otpInputs.forEach(input => {
      enteredOTP += input.value;
    });

    if (enteredOTP === simulatedOTP) {
      completeOrderSimulation();
    } else {
      showToast("Code OTP invalide. Veuillez réessayer. ❌");
      otpInputs.forEach(input => input.value = "");
      otpInputs[0].focus();
    }
  });

  document.getElementById("btn-simulate-manual-success").addEventListener("click", () => {
    completeOrderSimulation();
  });

  // Copy crypto deposit address
  const copyCryptoBtn = document.getElementById("btn-copy-crypto-address");
  if (copyCryptoBtn) {
    copyCryptoBtn.addEventListener("click", () => {
      const addressInput = document.getElementById("crypto-address-input");
      if (addressInput) {
        addressInput.select();
        addressInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(addressInput.value);
        showToast("Adresse copiée dans le presse-papiers ! 📋");
      }
    });
  }

  // Close payment overlay manually
  const closePaymentOverlayBtn = document.getElementById("close-payment-overlay-btn");
  if (closePaymentOverlayBtn) {
    closePaymentOverlayBtn.addEventListener("click", () => {
      stopPaymentPolling();
      document.getElementById("checkout-payment-overlay").classList.remove("active");
    });
  }

  document.getElementById("btn-close-checkout-success").addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // Contact Page form simulated submit
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.reset();
      showToast("Votre message a bien été envoyé ! Nous vous répondrons sous peu. ✉️");
    });
  }

  // Client orders dashboard tab selectors
  document.querySelectorAll(".order-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".order-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeOrderStatusTab = btn.getAttribute("data-status");
      renderClientOrders();
    });
  });

  const clientOrdersSearch = document.getElementById("client-orders-search");
  if (clientOrdersSearch) {
    clientOrdersSearch.addEventListener("input", (e) => {
      clientOrdersSearchVal = e.target.value.toLowerCase().trim();
      renderClientOrders();
    });
  }

  // Go back to orders listing from G2G tracker
  document.getElementById("btn-back-to-orders").addEventListener("click", () => {
    switchView("orders");
    renderClientOrders();
  });

  document.getElementById("close-tracking-view-btn").addEventListener("click", () => {
    switchView("orders");
    renderClientOrders();
  });

  // Auth modal trigger buttons (delegated safely to support dynamic render states)
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("#btn-login-modal-trigger");
    if (trigger) {
      openAuthModal();
    }
  });

  const mobileLoginBtn = document.getElementById("btn-mobile-login-trigger");
  if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener("click", () => {
      document.getElementById("mobile-nav-overlay").classList.remove("active");
      openAuthModal();
    });
  }



  // Auth Tab Toggles
  document.getElementById("tab-login").addEventListener("click", () => {
    document.getElementById("tab-login").classList.add("active");
    document.getElementById("tab-login").style.color = "var(--primary)";
    document.getElementById("tab-register").classList.remove("active");
    document.getElementById("tab-register").style.color = "var(--text-secondary)";
    document.getElementById("auth-login-form").style.display = "block";
    document.getElementById("auth-register-form").style.display = "none";
  });

  document.getElementById("tab-register").addEventListener("click", () => {
    document.getElementById("tab-register").classList.add("active");
    document.getElementById("tab-register").style.color = "var(--primary)";
    document.getElementById("tab-login").classList.remove("active");
    document.getElementById("tab-login").style.color = "var(--text-secondary)";
    document.getElementById("auth-register-form").style.display = "block";
    document.getElementById("auth-login-form").style.display = "none";
  });

  // Handle Discord Sign In click
  const discordLoginBtn = document.getElementById("btn-discord-login");
  if (discordLoginBtn) {
    discordLoginBtn.addEventListener("click", () => {
      initiateDiscordLogin();
    });
  }

  // Handle Sign In submission
  document.getElementById("auth-login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userVal = document.getElementById("login-username").value.trim();
    const passVal = document.getElementById("login-password").value;

    const matchedUser = users.find(u => u.username.toLowerCase() === userVal.toLowerCase() && u.password === passVal);
    if (matchedUser) {
      currentUser = matchedUser;
      sessionStorage.setItem("rolly_session_user", JSON.stringify(currentUser));
      
      // On first login of mock users, tag existing demo orders to this user so they see them
      orders.forEach(o => {
        if (!o.userId) o.userId = currentUser.id;
      });
      saveOrdersToCloud();

      document.getElementById("auth-modal").classList.remove("active");
      document.getElementById("auth-login-form").reset();
      showToast(`Ravi de vous revoir, ${currentUser.username} ! 👋`);
      setupUI();
      
      // If user was attempting to view orders, direct them there now
      switchView("orders");
    } else {
      showToast("Nom d'utilisateur ou mot de passe incorrect. ❌");
    }
  });

  // Handle Sign Up submission
  document.getElementById("auth-register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userVal = document.getElementById("register-username").value.trim();
    const passVal = document.getElementById("register-password").value;
    const confirmVal = document.getElementById("register-confirm-password").value;

    if (passVal !== confirmVal) {
      showToast("Les mots de passe ne correspondent pas. ❌");
      return;
    }

    if (users.some(u => u.username.toLowerCase() === userVal.toLowerCase())) {
      showToast("Ce nom d'utilisateur est déjà pris. ❌");
      return;
    }

    const newUser = {
      id: "usr-" + Date.now(),
      username: userVal,
      password: passVal
    };

    users.push(newUser);
    saveUsersToCloud();

    currentUser = newUser;
    sessionStorage.setItem("rolly_session_user", JSON.stringify(currentUser));

    // Tag current mock demo orders to the newly registered user so they can immediately test G2G details
    orders.forEach(o => {
      if (!o.userId) o.userId = currentUser.id;
    });
    saveOrdersToCloud();

    document.getElementById("auth-modal").classList.remove("active");
    document.getElementById("auth-register-form").reset();
    showToast(`Compte créé avec succès ! Bienvenue ${currentUser.username} 🎉`);
    setupUI();
    switchView("orders");
  });



  document.getElementById("btn-view-delivered-data").addEventListener("click", () => {
    const order = orders.find(o => o.id === activeTrackingOrderId);
    if (order && order.deliveredData) {
      document.getElementById("client-delivered-content-box").innerText = order.deliveredData;
      document.getElementById("client-view-code-modal").classList.add("active");
    }
  });

  document.getElementById("btn-copy-client-code").addEventListener("click", () => {
    const codeVal = document.getElementById("client-delivered-content-box").innerText;
    navigator.clipboard.writeText(codeVal).then(() => {
      showToast("Code copié dans le presse-papier ! 📋");
    });
  });

  // Admin order modal submission with safety try-catch wrappers
  document.getElementById("admin-order-fulfill-form").addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const orderId = document.getElementById("admin-modal-order-id").value;
      const nextStatus = document.getElementById("admin-order-status-select").value;
      const deliveredTxt = document.getElementById("admin-order-delivered-data").value.trim();

      const order = orders.find(o => o.id === orderId);
      if (order) {
        const prevStatus = order.status;
        order.status = nextStatus;
        order.deliveredData = deliveredTxt;

        // Map dynamic step based on selected status
        let stepNum = 1;
        if (nextStatus === "to-pay") stepNum = 1;
        else if (nextStatus === "verify") stepNum = 2;
        else if (nextStatus === "preparing") stepNum = 3;
        else if (nextStatus === "delivering") stepNum = 4;
        else if (nextStatus === "completed") stepNum = 5;
        
        order.step = stepNum;

        // Safe check for timeline logs initialization to block null property unshift errors
        if (!order.timeline) {
          order.timeline = [];
        }

        // Add timeline log entries if status changed
        if (prevStatus !== nextStatus) {
          let statusDesc = `Statut mis à jour en : ${nextStatus}.`;
          if (nextStatus === "verify") statusDesc = "PaymentDeclared. Awaiting payment validation review.";
          else if (nextStatus === "preparing") statusDesc = "Payment confirmed. Order processed and in preparation.";
          else if (nextStatus === "delivering") statusDesc = "Delivery in progress. Voucher keys generated.";
          else if (nextStatus === "completed") statusDesc = "The order has been marked as completed.";

          order.timeline.unshift({
            time: new Date().toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true, day: '2-digit', month: 'short', year: 'numeric' }),
            text: statusDesc
          });
        }

        saveOrdersToCloud();
        document.getElementById("admin-order-modal").classList.remove("active");
        showToast(`Commande ${orderId} mise à jour ! 💾`);
        setupUI();
      } else {
        showToast("Erreur : Commande introuvable. ❌");
      }
    } catch (err) {
      console.error("Fulfill submit error details:", err);
      showToast("Une erreur est survenue lors de la mise à jour de la commande. ❌");
    }
  });

  // Admin Dashboard settings
  // ==========================================================
  // PHASE 11: ONEPANEL STYLE ADMIN DASHBOARD EVENT LISTENERS
  // ==========================================================

  // 1. Sidebar Nav subview switching
  document.querySelectorAll(".admin-sidebar-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-admin-tab");
      switchAdminSubview(tabId);
    });
  });

  // 2. Open "+ Ajouter un Produit" modal
  const addProdTrigger = document.getElementById("btn-admin-add-product-trigger");
  if (addProdTrigger) {
    addProdTrigger.addEventListener("click", () => {
      document.getElementById("add-product-modal").classList.add("active");
    });
  }

  // 3. Logout from admin sidebar
  const adminLogoutBtn = document.getElementById("btn-admin-logout");
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", () => {
      currentUser = null;
      localStorage.removeItem("rolly_current_user");
      updateAuthUI();
      switchView("home");
      showToast("Déconnexion réussie. 👋");
    });
  }

  // 4. Reset DB button click
  const resetDbBtnNew = document.getElementById("reset-db-btn-new");
  if (resetDbBtnNew) {
    resetDbBtnNew.addEventListener("click", () => {
      if (confirm("Réinitialiser la base de données ?")) {
        localStorage.removeItem("rolly_products");
        localStorage.removeItem("rolly_orders");
        loadDatabase();
        setupUI();
        showToast("Données réinitialisées. 🔄");
      }
    });
  }

  // 5. Submit product creation form
  const addProdFormNew = document.getElementById("add-product-form-new");
  if (addProdFormNew) {
    addProdFormNew.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProd = {
        id: "prod-" + Date.now(),
        name: document.getElementById("prod-name-new").value.trim(),
        category: document.getElementById("prod-category-new").value,
        price: parseFloat(document.getElementById("prod-price-new").value),
        oldPrice: document.getElementById("prod-oldprice-new").value ? parseFloat(document.getElementById("prod-oldprice-new").value) : null,
        badge: "Nouveau",
        stock: document.getElementById("prod-stock-new").value,
        desc: document.getElementById("prod-desc-new").value.trim(),
        themeColor: document.getElementById("prod-theme-new").value,
        imageUrl: "/freefire.jpg",
        subProducts: [{
          "title": "Standard Pack",
          "price": parseFloat(document.getElementById("prod-price-new").value),
          "originalPrice": document.getElementById("prod-oldprice-new").value ? parseFloat(document.getElementById("prod-oldprice-new").value) : null
        }],
        popularIndex: 50,
        featuredCarousel: document.getElementById("prod-featured-new").checked,
        featuredGrid: document.getElementById("prod-featured-grid-new").checked
      };

      products.push(newProd);
      saveProductsToCloud();
      addProdFormNew.reset();
      document.getElementById("add-product-modal").classList.remove("active");
      
      showToast("Produit créé avec succès ! 📦");
      setupUI();
    });
  }

  // 6. Submit admin creation form
  const addAdminFormNew = document.getElementById("add-admin-form-new");
  if (addAdminFormNew) {
    addAdminFormNew.addEventListener("submit", (e) => {
      e.preventDefault();
      const usernameVal = document.getElementById("admin-new-username-new").value.trim();
      const passwordVal = document.getElementById("admin-new-password-new").value;

      if (users.some(u => u.username.toLowerCase() === usernameVal.toLowerCase())) {
        showToast("Ce nom d'utilisateur est déjà utilisé. ❌");
        return;
      }

      const newAdmin = {
        id: "usr-" + Date.now(),
        username: usernameVal,
        password: passwordVal,
        role: "admin"
      };

      users.push(newAdmin);
      saveUsersToCloud();
      addAdminFormNew.reset();
      showToast(`Administrateur ${usernameVal} créé avec succès ! 🔑`);
      setupUI();
    });
  }

  // 7. Visual Product Inventory CMS controls
  const searchInput = document.getElementById("admin-stock-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      adminInventorySearch = e.target.value;
      renderStockInventory();
    });
  }

  // Bind top Create Product trigger button
  const createProductTopBtn = document.getElementById("btn-admin-create-product-top");
  if (createProductTopBtn) {
    createProductTopBtn.addEventListener("click", () => {
      document.getElementById("add-product-modal").classList.add("active");
    });
  }

  // Close Edit modal button
  const closeEditModalBtn = document.getElementById("close-edit-product-modal");
  if (closeEditModalBtn) {
    closeEditModalBtn.addEventListener("click", () => {
      document.getElementById("edit-product-modal").classList.remove("active");
    });
  }

  // Submit edit product form
  const editProductForm = document.getElementById("admin-edit-product-form");
  if (editProductForm) {
    editProductForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const prodId = document.getElementById("edit-prod-id").value;
      const newName = document.getElementById("edit-prod-name").value.trim();
      const newCategory = document.getElementById("edit-prod-category").value;
      const newImage = document.getElementById("edit-prod-image").value.trim();
      const newStock = document.getElementById("edit-prod-stock").value;
      const newFeatured = document.getElementById("edit-prod-featured").checked;

      const prod = products.find(p => p.id === prodId);
      if (prod) {
        prod.name = newName;
        prod.category = newCategory;
        prod.image = newImage;
        prod.imageUrl = newImage;
        prod.stock = newStock;
        prod.featuredCarousel = newFeatured;
        
        const newFeaturedGrid = document.getElementById("edit-prod-featured-grid").checked;
        prod.featuredGrid = newFeaturedGrid;

        // Save variant prices
        const priceInputs = editProductForm.querySelectorAll(".edit-variant-price-input");
        priceInputs.forEach(input => {
          const idx = parseInt(input.getAttribute("data-idx"));
          const newPrice = parseFloat(input.value);
          if (prod.subProducts && prod.subProducts[idx]) {
            prod.subProducts[idx].price = newPrice;
            if (idx === 0) {
              prod.price = newPrice;
            }
          }
        });

        saveProductsToCloud();
        showToast(`Produit ${prod.name} modifié avec succès ! 💾`);
        document.getElementById("edit-product-modal").classList.remove("active");
        setupUI();
      }
    });
  }

  // FAQ sliding lists
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // ==========================================================
  // BULLET-PROOF GENERIC MODAL SYSTEM CLOSERS (Phase 6 Fixes)
  // ==========================================================
  // 1. Close modal on clicking any element with class 'close-btn'
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = btn.closest(".modal-overlay");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  });

  // 2. Close modal on clicking the dark semi-transparent background overlay
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  // ==========================================================
  // PHASE 14: CLIENT PREMIUM DASHBOARD INTERACTIONS
  // ==========================================================

  // 1. Sidebar nav tabs click bindings
  document.querySelectorAll(".client-sidebar-nav-item").forEach(item => {
    if (!item.classList.contains("logout")) {
      item.addEventListener("click", () => {
        const tabId = item.getAttribute("data-tab");
        switchClientDashboardTab(tabId);
      });
    }
  });

  // 2. Widget "Voir tout" button
  const switchOrdersBtn = document.getElementById("btn-switch-tab-orders");
  if (switchOrdersBtn) {
    switchOrdersBtn.addEventListener("click", () => {
      switchClientDashboardTab("orders");
    });
  }



  // 4. Wallet topup form submit
  const walletForm = document.getElementById("wallet-topup-form");
  if (walletForm) {
    walletForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const amount = parseFloat(document.getElementById("topup-amount").value);
      const method = document.getElementById("topup-method").value;
      
      let methodLabel = "D17";
      if (method === "postal") methodLabel = "Virement Postal";
      if (method === "ooredoo") methodLabel = "Solde Ooredoo";

      if (currentUser && amount > 0) {
        currentUser.walletBalance += amount;
        currentUser.xp += Math.floor(amount * 1.5); // Add XP for wallet deposits!
        
        currentUser.activityFeed.push({
          text: `Portefeuille rechargé de ${amount.toFixed(3)} DT via ${methodLabel} 💳`,
          time: "À l'instant"
        });

        saveUsersToCloud();
        showToast(`Dépôt de ${amount.toFixed(3)} DT effectué avec succès ! 🚀`);
        
        // Reset form
        walletForm.reset();
        
        // Redirect back to dashboard to see new balance
        switchClientDashboardTab("dashboard");
      }
    });
  }

  // 5. Logout inside client dashboard sidebar
  const clientLogoutBtn = document.getElementById("btn-client-dashboard-logout");
  if (clientLogoutBtn) {
    clientLogoutBtn.addEventListener("click", () => {
      logoutClient();
    });
  }
}

// Router switcher logic
function switchView(viewId) {
  // Auth Route Guard for Mes Commandes view
  if (viewId === "orders" && !currentUser) {
    openAuthModal();
    showToast("Veuillez vous connecter pour voir vos commandes. 🔒");
    return;
  }

  // Auth Route Guard for Admin dashboard view
  if (viewId === "admin") {
    if (!currentUser || currentUser.role !== "admin") {
      showToast("Accès refusé. Réservé aux administrateurs. 🔒");
      return;
    }
    document.body.classList.add("admin-mode-active");
    // Automatically switch to the dashboard subview on entry so it's never empty
    switchAdminSubview("dashboard");
  } else {
    document.body.classList.remove("admin-mode-active");
  }

  document.querySelectorAll(".app-view").forEach(view => {
    view.classList.remove("active");
  });

  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    }
  });

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add("active");
  }

  if (viewId === "orders") {
    document.body.classList.add("client-mode-active");
    renderClientDashboard();
  } else {
    document.body.classList.remove("client-mode-active");
  }

  // Auto-open last active or latest support ticket when entering contact view
  if (viewId === "contact") {
    renderClientTickets();
    const lastActiveId = localStorage.getItem("rolly_last_active_ticket_id");
    if (lastActiveId) {
      const t = tickets.find(o => o.id === lastActiveId);
      if (t) {
        openClientTicketChat(lastActiveId);
      }
    } else {
      const localGuestSession = localStorage.getItem("rolly_guest_ticket_ids");
      let guestTicketIds = [];
      try {
        if (localGuestSession) guestTicketIds = JSON.parse(localGuestSession);
      } catch(e) {}

      const userTickets = tickets.filter(t => {
        if (currentUser) {
          return t.userId === currentUser.id || t.customerName.toLowerCase() === currentUser.username.toLowerCase();
        } else {
          return guestTicketIds.includes(t.id);
        }
      });

      if (userTickets.length > 0) {
        const latest = userTickets[userTickets.length - 1];
        openClientTicketChat(latest.id);
      }
    }
  }

  const headerSearch = document.querySelector(".search-container");
  if (viewId === "home" || viewId === "products") {
    headerSearch.style.display = "";
  } else {
    headerSearch.style.display = "none";
  }

  if (viewId === "home") {
    runStatsAnimation();
  }

  window.scrollTo(0, 0);
}

// Render Infinite Categories Marquee (scrolling loop on home view)
function renderCategoryMarquee() {
  const container = document.getElementById("category-scroll-container");
  if (!container) return;

  const categoriesList = CATEGORIES.filter(c => c.id !== "all");

  const listHTML = categoriesList.map(cat => {
    const activeClass = cat.id === activeCategory ? "active" : "";
    return `
      <div class="category-btn ${activeClass}" data-category-id="${cat.id}">
        <span>${cat.icon}</span>
        ${cat.name}
      </div>
    `;
  }).join("");

  container.innerHTML = listHTML + listHTML;

  container.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const catId = btn.getAttribute("data-category-id");
      activeCategory = catId;
      document.getElementById("catalog-category-select").value = catId;
      renderCatalogProducts();
      switchView("products");
    });
  });
}

// Render Trending Sidebar items list on Hero right-hand side
function renderSidebarTrending() {
  const container = document.getElementById("sidebar-trending-list");
  if (!container) return;

  const trending = products.filter(p => p.popularIndex >= 85).slice(0, 5);

  container.innerHTML = trending.map(prod => {
    return `
      <div class="trending-item-row" data-prod-id="${prod.id}" style="--theme-color: ${prod.themeColor || '#E60000'}">
        <div class="trending-item-icon" style="background: none; overflow: hidden; display: flex; align-items: center; justify-content: center;">
          <img src="${prod.imageUrl}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
        </div>
        <div class="trending-item-info">
          <div class="trending-item-name">${prod.name}</div>
          <div class="trending-item-price">${prod.price.toFixed(3)} DT</div>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".trending-item-row").forEach(row => {
    row.addEventListener("click", () => {
      const prodId = row.getAttribute("data-prod-id");
      openProductDetailsView(prodId);
    });
  });
}

// Render Trending Products grid on Home
function renderTrendingProducts() {
  const grid = document.getElementById("trending-products-grid");
  if (!grid) return;

  let filtered = products.filter(p => {
    const group = getCategoryGroup(p.category);
    const matchesCat = activeCategory === "all" || group === activeCategory;
    const isTrending = p.featuredGrid === true;
    return matchesCat && isTrending;
  });

  // Fallback if no products are explicitly selected for home grid
  if (filtered.length === 0) {
    filtered = products.filter(p => {
      const group = getCategoryGroup(p.category);
      const matchesCat = activeCategory === "all" || group === activeCategory;
      const isTrending = p.popularIndex >= 80;
      return matchesCat && isTrending;
    });
  }

  filtered = filtered.slice(0, 8); // Render 8 products as requested by visual specs

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-cart-state" style="grid-column: 1/-1; padding: 40px 0;">
        <p>Aucun produit disponible dans cette catégorie.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => renderProductCardHTML(prod)).join("");
  bindProductCardsTriggers(grid);
}

// Render Catalog products view (filtered & sorted)
function renderCatalogProducts() {
  const grid = document.getElementById("catalog-products-grid");
  if (!grid) return;

  let filtered = products.filter(p => {
    const group = getCategoryGroup(p.category);
    const matchesCat = activeCategory === "all" || group === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(currentSearch) || p.desc.toLowerCase().includes(currentSearch);
    const matchesPrice = p.price <= priceSliderMax;
    return matchesCat && matchesSearch && matchesPrice;
  });

  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "popular") {
    filtered.sort((a, b) => b.popularIndex - a.popularIndex);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-cart-state" style="grid-column: 1/-1; padding: 60px 0;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.3;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p style="margin-top: 16px;">Aucun produit trouvé avec ces filtres.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => renderProductCardHTML(prod)).join("");
  bindProductCardsTriggers(grid);
}

// Render Categories List Grid on Categories View
function renderCategoriesGrid() {
  const grid = document.getElementById("full-categories-grid");
  if (!grid) return;

  const list = CATEGORIES.filter(c => c.id !== "all");

  grid.innerHTML = list.map(cat => {
    const count = products.filter(p => getCategoryGroup(p.category) === cat.id).length;
    return `
      <div class="category-card" data-category-id="${cat.id}">
        <span class="category-card-icon">${cat.icon}</span>
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="category-card-count">${count} articles actifs</span>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const catId = card.getAttribute("data-category-id");
      activeCategory = catId;
      document.getElementById("catalog-category-select").value = catId;
      renderCatalogProducts();
      switchView("products");
    });
  });
}

// Generate single card layout markup
function renderProductCardHTML(prod) {
  const hasDiscount = prod.oldPrice !== null;
  const discountBadge = hasDiscount ? `<span class="product-badge discount">${prod.badge || "PROMO"}</span>` : "";
  const badgeMarkup = prod.badge && !hasDiscount ? `<span class="product-badge">${prod.badge}</span>` : discountBadge;
  
  const formattedPrice = prod.price.toFixed(3) + " DT";
  const formattedOldPrice = hasDiscount ? prod.oldPrice.toFixed(3) + " DT" : "";

  const btnMarkup = prod.stock === "out-of-stock" 
    ? `<span class="out-of-stock-label">Rupture</span>` 
    : `<button class="buy-btn" data-prod-id="${prod.id}">Acheter</button>`;

  return `
    <div class="product-card" style="--theme-color: ${prod.themeColor || '#E60000'}">
      <div class="product-card-top">
        ${badgeMarkup}
        <img class="product-card-image" src="${prod.imageUrl}" alt="${prod.name}" />
      </div>
      <div class="product-card-info">
        <span class="product-category-label" data-cat="${prod.category}">${prod.category}</span>
        <h3 class="product-title" data-prod-id="${prod.id}">${prod.name}</h3>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-price-row">
          <div class="price-container">
            ${hasDiscount ? `<span class="old-price">${formattedOldPrice}</span>` : ""}
            <span class="current-price">${formattedPrice}</span>
          </div>
          ${btnMarkup}
        </div>
      </div>
    </div>
  `;
}

// Bind product card interaction event triggers
function bindProductCardsTriggers(container) {
  container.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute("data-prod-id");
      openProductDetailsView(prodId);
    });
  });

  container.querySelectorAll(".product-title").forEach(title => {
    title.addEventListener("click", () => {
      const prodId = title.getAttribute("data-prod-id");
      openProductDetailsView(prodId);
    });
  });

  container.querySelectorAll(".product-category-label").forEach(label => {
    label.addEventListener("click", (e) => {
      e.stopPropagation();
      const cat = label.getAttribute("data-cat");
      activeCategory = getCategoryGroup(cat);
      document.getElementById("catalog-category-select").value = activeCategory;
      renderCatalogProducts();
      switchView("products");
    });
  });
}

// Open Purchase Modal and prefill details with dynamic variant selector
function openPurchaseModal(productId) {
  // Auth Guard for buying triggers
  if (!currentUser) {
    openAuthModal();
    showToast("Veuillez vous connecter pour acheter des articles. 🔒");
    return;
  }

  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById("modal-product-id").value = prod.id;
  document.getElementById("modal-product-title").innerText = prod.name;
  document.getElementById("modal-product-price").innerText = prod.price.toFixed(3) + " DT";
  document.getElementById("modal-product-desc").innerText = prod.desc;
  
  const inputLabel = document.getElementById("purchase-input-label");
  const inputPlaceholder = document.getElementById("purchase-playerid");
  const inputTip = document.getElementById("purchase-input-tip");
  
  const catLower = prod.category.toLowerCase();
  if (["free fire", "pubg mobile", "blood strike", "efootball"].some(c => catLower.includes(c))) {
    inputLabel.innerText = "ID de Joueur (Player ID)";
    inputPlaceholder.placeholder = "Ex: 574218903";
    inputTip.innerText = "Veillez à saisir le bon identifiant de joueur pour éviter les erreurs de livraison.";
    inputPlaceholder.pattern = "[0-9]+";
  } else if (["telecom", "ooredoo"].some(c => catLower.includes(c))) {
    inputLabel.innerText = "Numéro de Téléphone Ooredoo";
    inputPlaceholder.placeholder = "Ex: 22123456";
    inputTip.innerText = "Le forfait internet Flexi sera activé directement sur ce numéro.";
    inputPlaceholder.pattern = "[0-9]{8}";
  } else {
    inputLabel.innerText = "Adresse E-mail / Téléphone de réception";
    inputPlaceholder.placeholder = "Ex: client@gmail.com ou 22123456";
    inputTip.innerText = "Le compte premium ou code de recharge sera envoyé à cette adresse.";
    inputPlaceholder.pattern = ".*";
  }

  // Append variants select dynamically if product has variants
  let variantWrapper = document.getElementById("modal-variant-select-wrapper");
  if (!variantWrapper) {
    variantWrapper = document.createElement("div");
    variantWrapper.id = "modal-variant-select-wrapper";
    const form = document.getElementById("purchase-config-form");
    form.insertBefore(variantWrapper, document.getElementById("input-playerid-group"));
  }

  if (prod.subProducts && prod.subProducts.length > 0) {
    variantWrapper.innerHTML = `
      <div class="form-group">
        <label for="purchase-variant-select">Choisir l'offre (Option)</label>
        <select id="purchase-variant-select" style="width: 100%; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 10px; padding: 12px 16px; font-family: var(--font-secondary); font-size: 14px; color: #fff; outline: none;">
          ${prod.subProducts.map((v, i) => `<option value="${i}">${v.title} - ${v.price.toFixed(3)} DT</option>`).join("")}
        </select>
      </div>
    `;

    const selectEl = document.getElementById("purchase-variant-select");
    selectEl.addEventListener("change", () => {
      const selectedIdx = parseInt(selectEl.value);
      const variant = prod.subProducts[selectedIdx];
      document.getElementById("modal-product-price").innerText = variant.price.toFixed(3) + " DT";
    });
  } else {
    variantWrapper.innerHTML = "";
  }

  const badgeContainer = document.getElementById("modal-product-badge");
  badgeContainer.innerHTML = `<img src="${prod.imageUrl}" alt="${prod.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;" />`;

  document.getElementById("qty-input").value = 1;
  document.getElementById("purchase-playerid").value = "";

  document.getElementById("purchase-modal").classList.add("active");
}

// Render dynamic detail product page with dynamic variant selector
function openProductDetailsView(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const container = document.getElementById("details-view-content");
  if (!container) return;

  let formLabel = "ID du Joueur (Player ID)";
  let formPlaceholder = "Ex: 574218903";
  let formTip = "Saisissez attentivement le Player ID de votre compte de jeu.";

  const catLower = prod.category.toLowerCase();
  if (["telecom", "ooredoo"].some(c => catLower.includes(c))) {
    formLabel = "Numéro de Téléphone Ooredoo";
    formPlaceholder = "Ex: 22123456";
    formTip = "Saisissez le numéro Ooredoo Tunisie sur lequel activer le forfait.";
  } else if (!["free fire", "pubg mobile", "blood strike", "efootball", "valorant", "league of legends"].some(c => catLower.includes(c))) {
    formLabel = "Adresse E-mail / Téléphone de réception";
    formPlaceholder = "Ex: client@gmail.com ou 22123456";
    formTip = "Indiquez l'e-mail ou le numéro sur lequel envoyer le code ou les accès du compte.";
  }

  // Active Variant Selection Index (Default to first)
  let selectedVariantIdx = 0;

  // Build the Variant Grid Cards HTML
  let variantsCardsHTML = "";
  if (prod.subProducts && prod.subProducts.length > 0) {
    variantsCardsHTML = prod.subProducts.map((v, i) => {
      const activeClass = i === 0 ? "active" : "";
      return `
        <div class="variant-grid-card-new ${activeClass}" data-variant-idx="${i}">
          <span class="variant-card-title-new">${v.title}</span>
          <div class="variant-card-prices-new">
            <span class="variant-card-price-new">${v.price.toFixed(3)} DT</span>
            ${v.originalPrice ? `<span class="variant-card-oldprice-new">${v.originalPrice.toFixed(3)} DT</span>` : ""}
          </div>
        </div>
      `;
    }).join("");
  }

  container.innerHTML = `
    <div class="product-details-layout-new" style="--theme-color: ${prod.themeColor || '#E60000'}">
      
      <!-- Left Column: Cover Card & Share -->
      <div class="details-left-col">
        <div class="details-cover-card">
          <img class="details-cover-img" src="${prod.imageUrl}" alt="${prod.name}" />
        </div>
        <button class="btn btn-outline" style="height: 44px; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="navigator.clipboard.writeText(window.location.href); alert('Lien partagé ! 📋');">
          Share 🔗
        </button>
      </div>

      <!-- Right Column: Product Info & Configuration -->
      <div class="details-right-col">
        <span class="details-category-badge-new">${prod.category}</span>
        <h1>${prod.name}</h1>
        
        <div class="details-rating-row">
          <span>⭐⭐⭐⭐⭐ (5.0 ratings)</span>
          <span style="opacity: 0.3;">|</span>
          <span>12 reviews</span>
        </div>

        <p class="details-description-text">
          Profitez du meilleur service de rechargement de la boutique ROLLY. Nous offrons une livraison ultra rapide et automatisée. Toutes nos offres sont conformes aux directives des éditeurs officiels et des opérateurs locaux en Tunisie.
        </p>

        <!-- Variants Grid Section -->
        <div>
          <h3 class="variants-section-title">Select Version</h3>
          <div class="variants-cards-grid">
            ${variantsCardsHTML}
          </div>
        </div>

        <!-- Player Info Form Input -->
        <div class="details-playerid-section" style="margin-top: 10px; border-top: 1px solid var(--border-color); padding-top: 20px;">
          <div class="form-group">
            <label for="details-playerid" style="font-size: 13px; font-weight: 700; color: #fff; display: block; margin-bottom: 8px;">${formLabel}</label>
            <input type="text" id="details-playerid" placeholder="${formPlaceholder}" required style="width: 100%; background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px 16px; font-family: var(--font-secondary); font-size: 13px; color: #fff; outline: none; transition: var(--transition);" />
            <p class="input-tip" style="font-family: var(--font-secondary); font-size: 11px; color: var(--text-muted); margin-top: 6px;">${formTip}</p>
          </div>
        </div>

        <!-- Quantity & Buy Action buttons -->
        <div class="actions-buttons-row" style="margin-top: 10px; display: flex; gap: 16px; align-items: center;">
          <div class="details-qty-selector-box">
            <button type="button" class="details-qty-selector-btn" id="details-qty-minus">-</button>
            <input type="number" class="details-qty-selector-input" id="details-qty-input" value="1" min="1" max="10" readonly />
            <button type="button" class="details-qty-selector-btn" id="details-qty-plus">+</button>
          </div>
          
          <button class="btn btn-primary" id="details-add-to-cart-btn" style="height: 46px; flex: 1; font-size: 14px; font-weight: 700;">
            Add to Cart 🛒
          </button>
        </div>

        <!-- Full Width Checkout button -->
        <button class="btn btn-outline w-full" id="details-checkout-btn" style="height: 48px; font-size: 14px; font-weight: 700; border-color: var(--primary); color: #fff;">
          Proceed to Checkout 💳
        </button>

        <!-- Trust indicators -->
        <div class="trust-indicators-line">
          <span>🔒 Secure</span>
          <span>🔄 Easy Returns</span>
          <span>✔ Verified</span>
        </div>

        <!-- Trust 2x2 badges grid -->
        <div class="features-badges-grid-2x2">
          <div class="feature-badge-card">
            <span class="feature-badge-icon">⚡</span>
            <div class="feature-badge-info">
              <h4>Instant Delivery</h4>
              <p>Immediate access</p>
            </div>
          </div>
          <div class="feature-badge-card">
            <span class="feature-badge-icon">🛡</span>
            <div class="feature-badge-info">
              <h4>100% Authentic</h4>
              <p>Official product</p>
            </div>
          </div>
          <div class="feature-badge-card">
            <span class="feature-badge-icon">💰</span>
            <div class="feature-badge-info">
              <h4>Secure Payment</h4>
              <p>Safe transactions</p>
            </div>
          </div>
          <div class="feature-badge-card">
            <span class="feature-badge-icon">💬</span>
            <div class="feature-badge-info">
              <h4>24/7 Support</h4>
              <p>Always available</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;

  // Bind Quantity buttons listeners
  const detailsQtyInput = document.getElementById("details-qty-input");
  
  document.getElementById("details-qty-minus").addEventListener("click", () => {
    let val = parseInt(detailsQtyInput.value);
    if (val > 1) detailsQtyInput.value = val - 1;
  });

  document.getElementById("details-qty-plus").addEventListener("click", () => {
    let val = parseInt(detailsQtyInput.value);
    if (val < 10) detailsQtyInput.value = val + 1;
  });

  // Bind Variant Click Selection Cards
  const variantCards = container.querySelectorAll(".variant-grid-card-new");
  variantCards.forEach(card => {
    card.addEventListener("click", () => {
      variantCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      selectedVariantIdx = parseInt(card.getAttribute("data-variant-idx"));
    });
  });

  // Bind Add to Cart submission
  document.getElementById("details-add-to-cart-btn").addEventListener("click", (e) => {
    e.preventDefault();
    if (!currentUser) {
      openAuthModal();
      showToast("Veuillez vous connecter pour acheter des articles. 🔒");
      return;
    }
    const info = document.getElementById("details-playerid").value.trim();
    if (!info) {
      showToast("Veuillez remplir l'identifiant de réception. ✏");
      document.getElementById("details-playerid").focus();
      return;
    }
    const qty = parseInt(detailsQtyInput.value);
    
    let finalName = prod.name;
    let finalPrice = prod.price;
    
    if (prod.subProducts && prod.subProducts[selectedVariantIdx]) {
      const variant = prod.subProducts[selectedVariantIdx];
      finalName = `${prod.name} (${variant.title})`;
      finalPrice = variant.price;
    }
    
    addToCart(prod, finalName, finalPrice, qty, info);
  });

  // Bind Proceed to Checkout action button
  document.getElementById("details-checkout-btn").addEventListener("click", (e) => {
    e.preventDefault();
    if (!currentUser) {
      openAuthModal();
      showToast("Veuillez vous connecter pour acheter des articles. 🔒");
      return;
    }
    const info = document.getElementById("details-playerid").value.trim();
    if (!info) {
      showToast("Veuillez remplir l'identifiant de réception. ✏");
      document.getElementById("details-playerid").focus();
      return;
    }
    const qty = parseInt(detailsQtyInput.value);
    
    let finalName = prod.name;
    let finalPrice = prod.price;
    
    if (prod.subProducts && prod.subProducts[selectedVariantIdx]) {
      const variant = prod.subProducts[selectedVariantIdx];
      finalName = `${prod.name} (${variant.title})`;
      finalPrice = variant.price;
    }
    
    // Add to cart first
    cart.push({
      product: {
        id: prod.id,
        name: finalName,
        price: finalPrice,
        themeColor: prod.themeColor,
        category: prod.category
      },
      quantity: qty,
      playerInfo: info
    });
    localStorage.setItem("rolly_cart", JSON.stringify(cart));
    updateCartBadge();
    updateCartUI();

    // Trigger instant checkout drawer / wizard
    openCheckoutWizard();
  });

  switchView("product-details");
}

// Shopping Cart Management
function addToCart(parentProduct, name, price, qty, playerInfo) {
  cart.push({
    product: {
      id: parentProduct.id,
      name: name,
      price: price,
      themeColor: parentProduct.themeColor,
      category: parentProduct.category
    },
    quantity: qty,
    playerInfo: playerInfo
  });

  localStorage.setItem("rolly_cart", JSON.stringify(cart));
  updateCartBadge();
  updateCartUI();
  showToast(`Ajouté au panier : ${name} 🛒`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("rolly_cart", JSON.stringify(cart));
  updateCartBadge();
  updateCartUI();
  showToast("Article retiré du panier. 🗑️");
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").innerText = count;
}

function updateCartUI() {
  const container = document.getElementById("cart-items");
  const totalPriceLabel = document.getElementById("cart-total-price");
  if (!container || !totalPriceLabel) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <p>Votre panier est vide</p>
      </div>
    `;
    totalPriceLabel.innerText = "0.000 DT";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.product.price * item.quantity;
    total += itemTotal;
    
    return `
      <div class="cart-item">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.product.name}</div>
          <div class="cart-item-playerid">Infos: ${item.playerInfo}</div>
          <div class="cart-item-meta">
            <span class="cart-item-qty">Qté : ${item.quantity}</span>
            <span class="cart-item-price">${itemTotal.toFixed(3)} DT</span>
          </div>
        </div>
        <button class="cart-item-remove" data-index="${idx}" aria-label="Remove item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      </div>
    `;
  }).join("");

  totalPriceLabel.innerText = total.toFixed(3) + " DT";

  container.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"));
      removeFromCart(idx);
    });
  });
}

// Checkout flow
function openCheckoutWizard() {
  checkoutStep = 1;
  checkoutPaymentMethod = "ooredoo";
  
  document.querySelectorAll(".payment-card").forEach(card => {
    card.classList.remove("active");
    if (card.getAttribute("data-method") === checkoutPaymentMethod) {
      card.classList.add("active");
    }
  });

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  document.getElementById("checkout-amount-summary").innerText = cartTotal.toFixed(3) + " DT";

  document.getElementById("d17-exact-price").innerText = cartTotal.toFixed(3) + " DT";
  document.getElementById("binance-converted-price").innerText = (cartTotal * 0.32).toFixed(2) + " USDT";

  if (document.getElementById("pay-phone-ooredoo")) document.getElementById("pay-phone-ooredoo").value = "";
  if (document.getElementById("pay-phone-d17")) document.getElementById("pay-phone-d17").value = "";
  if (document.getElementById("pay-binance-id")) document.getElementById("pay-binance-id").value = "";

  document.querySelectorAll(".otp-char").forEach(i => i.value = "");

  updateCheckoutStepUI();
  document.getElementById("checkout-modal").classList.add("active");
}

function updateCheckoutStepUI() {
  document.querySelectorAll(".checkout-steps .step").forEach((el, index) => {
    el.classList.remove("active");
    if (index + 1 <= checkoutStep) {
      el.classList.add("active");
    }
  });

  document.getElementById("checkout-step-1").classList.remove("active");
  document.getElementById("checkout-step-2").classList.remove("active");
  document.getElementById("checkout-step-3").classList.remove("active");

  document.getElementById(`checkout-step-${checkoutStep}`).classList.add("active");

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const usdtTotal = cartTotal * 0.320;

  if (checkoutStep === 2) {
    document.getElementById("form-pay-ooredoo").style.display = "none";
    document.getElementById("form-pay-d17").style.display = "none";
    document.getElementById("form-pay-binance").style.display = "none";
    document.getElementById("form-pay-crypto").style.display = "none";
    document.getElementById("form-pay-paypal").style.display = "none";

    document.getElementById(`form-pay-${checkoutPaymentMethod}`).style.display = "block";

    // Update converted prices labels
    const binanceRateEl = document.getElementById("binance-converted-price");
    if (binanceRateEl) binanceRateEl.innerText = usdtTotal.toFixed(2) + " USDT";

    const cryptoRateEl = document.getElementById("crypto-converted-price");
    if (cryptoRateEl) cryptoRateEl.innerText = usdtTotal.toFixed(2) + " USDT";

    const paypalRateEl = document.getElementById("paypal-converted-price");
    if (paypalRateEl) paypalRateEl.innerText = cartTotal.toFixed(3) + " DT";
  }

  if (checkoutStep === 3) {
    document.getElementById("valid-ooredoo").style.display = "none";
    document.getElementById("valid-manual").style.display = "none";
    document.getElementById("valid-success").style.display = "none";

    if (checkoutPaymentMethod === "ooredoo") {
      const phone = document.getElementById("pay-phone-ooredoo").value;
      document.getElementById("valid-phone-label").innerText = `+216 ${phone.substring(0, 2)} ${phone.substring(2, 5)} ${phone.substring(5, 8)}`;
      
      simulatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
      document.getElementById("simulated-otp-code").innerText = simulatedOTP;
      
      document.getElementById("valid-ooredoo").style.display = "block";
      setTimeout(() => {
        document.querySelectorAll(".otp-char")[0].focus();
      }, 300);
    } else {
      document.getElementById("valid-manual").style.display = "block";
    }
  }
}

function validateCheckoutStep2() {
  if (checkoutPaymentMethod === "ooredoo") {
    const phone = document.getElementById("pay-phone-ooredoo").value.trim();
    if (!phone || phone.length !== 8 || isNaN(phone)) {
      showToast("Veuillez saisir un numéro de téléphone Ooredoo valide (8 chiffres). 📱");
      return false;
    }
  } else if (checkoutPaymentMethod === "d17") {
    const phone = document.getElementById("pay-phone-d17").value.trim();
    if (!phone || phone.length !== 8 || isNaN(phone)) {
      showToast("Veuillez saisir votre numéro D17 à 8 chiffres pour vérification. 💳");
      return false;
    }
  } else if (checkoutPaymentMethod === "binance" || checkoutPaymentMethod === "crypto" || checkoutPaymentMethod === "paypal") {
    // Automated flow check, passes directly to validation
    return true;
  }
  return true;
}

function completeOrderSimulation() {
  document.getElementById("valid-ooredoo").style.display = "none";
  document.getElementById("valid-manual").style.display = "none";

  const orderId = "#ORD-" + Math.floor(100000 + Math.random() * 900000);
  const cartTotal = cart.length > 0 ? cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0) : 0;
  
  let customerDetails = "";
  if (checkoutPaymentMethod === "ooredoo") {
    customerDetails = "Tél: " + document.getElementById("pay-phone-ooredoo").value;
  } else if (checkoutPaymentMethod === "d17") {
    customerDetails = "D17: " + document.getElementById("pay-phone-d17").value;
  } else {
    const binanceEl = document.getElementById("pay-binance-id");
    customerDetails = binanceEl ? "Binance: " + binanceEl.value.substring(0, 8) + "..." : "Binance Auto-pay";
  }

  const itemsSummary = cart.length > 0 ? cart.map(item => `${item.product.name} (x${item.quantity}) [Info: ${item.playerInfo}]`).join(", ") : "Aucun article";

  // Map default status & stepper steps for new orders
  let initialStatus = "verify"; // verify payment by default
  let initialStep = 2; // Paid/Declared step
  let statusDesc = "PaymentDeclared. Awaiting payment validation review.";

  if (checkoutPaymentMethod === "ooredoo") {
    initialStatus = "verify"; 
    initialStep = 2; 
    statusDesc = "Payment OTP Submitted. Awaiting payment validation review.";
  }

  const orderTimeStr = new Date().toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true, day: '2-digit', month: 'short', year: 'numeric' });

  const newOrder = {
    id: orderId,
    userId: currentUser ? currentUser.id : "guest",
    items: itemsSummary,
    customer: customerDetails,
    method: checkoutPaymentMethod,
    total: cartTotal,
    status: initialStatus,
    date: orderTimeStr,
    playerInfo: (cart.length > 0 && cart[0].playerInfo) ? cart[0].playerInfo : "",
    step: initialStep,
    deliveredData: "",
    timeline: [
      { time: orderTimeStr, text: statusDesc },
      { time: orderTimeStr, text: "Order placed and pending for verification." }
    ]
  };

  orders.push(newOrder);
  saveOrdersToCloud();

  document.getElementById("success-order-id").innerText = orderId;
  
  let formattedMethod = "Solde Ooredoo";
  if (checkoutPaymentMethod === "d17") formattedMethod = "D17 Poste";
  if (checkoutPaymentMethod === "binance") formattedMethod = "Binance Pay";
  
  document.getElementById("success-pay-method").innerText = formattedMethod;
  document.getElementById("valid-success").style.display = "block";

  cart = [];
  localStorage.removeItem("rolly_cart");
  updateCartBadge();
  updateCartUI();

  updateAdminStats();
  renderAdminOrders();

  showToast("Commande payée et livrée ! 🎉");
}

// Admin Dashboard stats
function updateAdminStats() {
  const revenueLabel = document.getElementById("admin-stat-revenue-new");
  const ordersLabel = document.getElementById("admin-stat-orders-new");
  const productsLabel = document.getElementById("admin-stat-products-new");
  const rolesLabel = document.getElementById("admin-stat-roles-new");
  
  if (!revenueLabel || !ordersLabel || !productsLabel || !rolesLabel) return;

  const totalRev = orders.reduce((sum, order) => sum + order.total, 0);
  revenueLabel.innerText = totalRev.toFixed(3) + " DT";
  ordersLabel.innerText = orders.length;
  productsLabel.innerText = products.length;

  const adminCount = users.filter(u => u.role === "admin").length;
  rolesLabel.innerText = adminCount;
}

function renderAdminOrders() {
  const container = document.getElementById("orders-list-body-new");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px 0;">Aucune commande disponible.</td>
      </tr>
    `;
    return;
  }

  container.innerHTML = [...orders].reverse().map(order => {
    let methodBadge = "";
    if (order.method === "ooredoo") methodBadge = `<span class="pay-badge ooredoo">Ooredoo</span>`;
    else if (order.method === "d17") methodBadge = `<span class="pay-badge post">D17</span>`;
    else methodBadge = `<span class="pay-badge binance">Binance</span>`;

    let dotClass = "to-pay";
    let statusText = "To Pay";
    if (order.status === "completed") { dotClass = "completed"; statusText = "Completed"; }
    else if (order.status === "verify") { dotClass = "verify"; statusText = "Verify payment"; }
    else if (order.status === "preparing") { dotClass = "preparing"; statusText = "Preparing"; }
    else if (order.status === "delivering") { dotClass = "preparing"; statusText = "Delivering"; }
    else if (order.status === "cancelled") { dotClass = "cancelled"; statusText = "Cancelled"; }
    else if (order.status === "resolution") { dotClass = "resolution"; statusText = "Resolution"; }

    let statusLabel = `<span style="display: flex; align-items: center; font-family: var(--font-secondary); font-size: 12px; font-weight: 700; color: #fff;"><span class="status-indicator-dot ${dotClass}"></span>${statusText}</span>`;

    return `
      <tr>
        <td style="padding: 14px 12px;"><strong>${order.id}</strong></td>
        <td style="padding: 14px 12px;">${order.items}</td>
        <td style="padding: 14px 12px;">${order.customer}</td>
        <td style="padding: 14px 12px;">${methodBadge}</td>
        <td style="padding: 14px 12px;"><strong>${order.total.toFixed(3)} DT</strong></td>
        <td style="padding: 14px 12px;">${statusLabel}</td>
        <td style="padding: 14px 12px;">
          <button class="admin-action-btn fulfill-order-btn" data-order-id="${order.id}" style="background-color: var(--primary); margin-right: 6px;">Gérer</button>
          <button class="admin-action-btn delete-order-btn" data-order-id="${order.id}">Supprimer</button>
        </td>
      </tr>
    `;
  }).join("");

  container.querySelectorAll(".delete-order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const orderId = btn.getAttribute("data-order-id");
      if (confirm(`Supprimer la commande ${orderId} ?`)) {
        orders = orders.filter(o => o.id !== orderId);
        saveOrdersToCloud();
        updateAdminStats();
        renderAdminOrders();
        showToast("Commande supprimée.");
      }
    });
  });

  // Open Admin Manage Modal form
  container.querySelectorAll(".fulfill-order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const orderId = btn.getAttribute("data-order-id");
      const order = orders.find(o => o.id === orderId);
      if (order) {
        document.getElementById("admin-modal-order-id").value = order.id;
        document.getElementById("admin-modal-order-info").innerText = `Client: ${order.customer} | Items: ${order.items}`;
        document.getElementById("admin-order-status-select").value = order.status;
        document.getElementById("admin-order-delivered-data").value = order.deliveredData || "";
        document.getElementById("admin-order-modal").classList.add("active");
      }
    });
  });

  // Render recent activity logs panel
  renderAdminActivityTimeline();
}

// Render dynamic recent activity log events inside the admin dashboard
function renderAdminActivityTimeline() {
  const container = document.getElementById("admin-activity-timeline-list");
  if (!container) return;

  let allEvents = [];
  orders.forEach(order => {
    if (order.timeline && order.timeline.length > 0) {
      order.timeline.forEach(event => {
        allEvents.push({
          orderId: order.id,
          time: event.time,
          text: event.text
        });
      });
    }
  });

  if (allEvents.length === 0) {
    container.innerHTML = `<p style="font-family: var(--font-secondary); font-size: 12px; color: var(--text-muted); text-align: center; padding: 20px 0;">Aucune activité récente.</p>`;
    return;
  }

  // Sort by timeline index (latest first) and limit to 5
  const latestEvents = allEvents.slice(0, 5);

  container.innerHTML = latestEvents.map(event => {
    return `
      <div style="position: relative; display: flex; flex-direction: column; gap: 4px;">
        <div style="font-family: var(--font-secondary); font-size: 10px; color: var(--text-muted); font-weight: 700;">${event.time}</div>
        <div style="font-family: var(--font-secondary); font-size: 12px; color: #fff; font-weight: 600; line-height: 1.4;">
          <span style="color: var(--primary);">${event.orderId}</span>: ${event.text}
        </div>
      </div>
    `;
  }).join("");
}

// Live statistics counter animation
function runStatsAnimation() {
  const statNumbers = document.querySelectorAll(".stat-number");
  
  statNumbers.forEach(num => {
    const target = parseFloat(num.getAttribute("data-target"));
    let count = 0;
    
    const duration = 1000;
    const stepTime = 15;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        if (target === 99.9) {
          num.innerText = "99.9%";
        } else if (target === 24) {
          num.innerText = "24/7";
        } else {
          num.innerText = Math.round(target) + "+";
        }
      } else {
        if (target === 99.9) {
          num.innerText = count.toFixed(1) + "%";
        } else if (target === 24) {
          num.innerText = "24/7";
          clearInterval(interval);
        } else {
          num.innerText = Math.round(count);
        }
      }
    }, stepTime);
  });
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 4000);
}

// Premium Client Dashboard Subview Switching
function switchClientDashboardTab(tabId) {
  // Toggle active subviews
  document.querySelectorAll(".client-subview").forEach(view => {
    view.classList.remove("active");
  });
  const targetView = document.getElementById(`client-subview-${tabId}`);
  if (targetView) {
    targetView.classList.add("active");
  }

  // Toggle active sidebar navigation items
  document.querySelectorAll(".client-sidebar-nav-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabId) {
      item.classList.add("active");
    }
  });

  // Handle specific tab loading triggers
  if (tabId === "dashboard") {
    renderClientDashboardSummary();
  } else if (tabId === "orders") {
    renderClientOrders();
  } else if (tabId === "wallet") {
    renderClientWallet();
  } else if (tabId === "tickets") {
    // Automatically redirect to support page view
    switchView("contact");
  }
}

// Master Dashboard Initialization
function renderClientDashboard() {
  if (!currentUser) return;

  // Initialize simulated user dashboard stats safely if undefined
  currentUser.walletBalance = currentUser.walletBalance !== undefined ? parseFloat(currentUser.walletBalance) : 0.000;
  currentUser.xp = currentUser.xp !== undefined ? parseInt(currentUser.xp) : 0;
  currentUser.streak = currentUser.streak !== undefined ? parseInt(currentUser.streak) : 0;
  currentUser.lastClaimedReward = currentUser.lastClaimedReward || null;
  currentUser.activityFeed = currentUser.activityFeed || [
    { text: "Bienvenue sur ROLLY Store ! 🛒", time: "Aujourd'hui" }
  ];

  // Set default active tab
  switchClientDashboardTab("dashboard");
}

function renderClientDashboardSummary() {
  if (!currentUser) return;

  // 1. Sidebar details
  const initials = currentUser.username.slice(0, 2).toUpperCase();
  const avatarInitialsEl = document.getElementById("client-avatar-initials");
  const avatarImgEl = document.getElementById("client-sidebar-avatar-img");
  
  if (currentUser.avatar) {
    if (avatarImgEl) {
      avatarImgEl.src = currentUser.avatar;
      avatarImgEl.style.display = "block";
    }
    if (avatarInitialsEl) avatarInitialsEl.style.display = "none";
  } else {
    if (avatarImgEl) avatarImgEl.style.display = "none";
    if (avatarInitialsEl) {
      avatarInitialsEl.innerText = initials;
      avatarInitialsEl.style.display = "flex";
    }
  }
  
  const sidebarUsernameEl = document.getElementById("client-sidebar-username");
  if (sidebarUsernameEl) sidebarUsernameEl.innerText = currentUser.username;

  const discordStatusEl = document.getElementById("client-sidebar-discord-status");
  if (discordStatusEl) {
    if (currentUser.discordUsername) {
      discordStatusEl.innerHTML = `
        <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#5865F2;background:rgba(88,101,242,0.1);padding:4px 8px;border-radius:4px;width:fit-content;margin:4px 0 0 0;">
          <svg width="12" height="12" viewBox="0 0 127.14 96.36" fill="currentColor" style="display:inline-block;vertical-align:middle;">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.88-.65,1.72-1.34,2.51-2a75.58,75.58,0,0,0,66,0c.79.71,1.63,1.4,2.51,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.87,49.25,123.63,26.43,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
          </svg>
          @${currentUser.discordUsername}
        </div>
      `;
    } else {
      discordStatusEl.innerHTML = `
        <button id="btn-link-discord" style="display:flex;align-items:center;gap:6px;font-size:10px;font-weight:700;color:#fff;background:#5865F2;border:none;padding:5px 8px;border-radius:4px;cursor:pointer;margin:4px 0 0 0;transition:opacity 0.2s;outline:none;">
          <svg width="10" height="10" viewBox="0 0 127.14 96.36" fill="currentColor" style="display:inline-block;vertical-align:middle;">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.88-.65,1.72-1.34,2.51-2a75.58,75.58,0,0,0,66,0c.79.71,1.63,1.4,2.51,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.87,49.25,123.63,26.43,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
          </svg>
          Lier Discord
        </button>
      `;
      // Bind click event
      setTimeout(() => {
        const linkBtn = document.getElementById("btn-link-discord");
        if (linkBtn) {
          linkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            initiateDiscordLogin();
          });
        }
      }, 50);
    }
  }
  
  // 2. Banner details
  const bannerAvatarInitialsEl = document.getElementById("banner-avatar-large");
  const bannerAvatarImgEl = document.getElementById("banner-avatar-img");
  
  if (currentUser.avatar) {
    if (bannerAvatarImgEl) {
      bannerAvatarImgEl.src = currentUser.avatar;
      bannerAvatarImgEl.style.display = "block";
    }
    if (bannerAvatarInitialsEl) bannerAvatarInitialsEl.style.display = "none";
  } else {
    if (bannerAvatarImgEl) bannerAvatarImgEl.style.display = "none";
    if (bannerAvatarInitialsEl) {
      bannerAvatarInitialsEl.innerText = initials;
      bannerAvatarInitialsEl.style.display = "flex";
    }
  }
  
  const bannerUsernameEl = document.getElementById("banner-username");
  if (bannerUsernameEl) bannerUsernameEl.innerText = currentUser.username;
  
  // Setup file upload listener
  const fileInput = document.getElementById("profile-picture-upload");
  const bannerAvatarContainer = document.getElementById("banner-avatar-container");
  
  if (bannerAvatarContainer && fileInput && !bannerAvatarContainer.hasAttribute("data-upload-bound")) {
    bannerAvatarContainer.setAttribute("data-upload-bound", "true");
    bannerAvatarContainer.addEventListener("click", () => {
      fileInput.click();
    });
    
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const base64String = event.target.result;
          currentUser.avatar = base64String;
          saveCurrentUser();
          renderClientDashboardSummary();
          showToast("Photo de profil mise à jour avec succès ! ✅");
        };
        reader.readAsDataURL(file);
      }
    });
  }
  
  // 3. Stats details
  const statWalletEl = document.getElementById("stat-wallet-balance");
  if (statWalletEl) statWalletEl.innerText = `${currentUser.walletBalance.toFixed(3)} DT`;
  
  const userOrdersCount = orders.filter(o => o.userId === currentUser.id).length;
  const statOrdersEl = document.getElementById("stat-total-orders");
  if (statOrdersEl) statOrdersEl.innerText = userOrdersCount;

  const userTicketsCount = tickets.filter(t => t.userId === currentUser.id || t.customerName.toLowerCase() === currentUser.username.toLowerCase()).length;
  const statTicketsEl = document.getElementById("stat-total-tickets");
  if (statTicketsEl) statTicketsEl.innerText = userTicketsCount;

  // 4. Recent Purchases List (Widget)
  const recentTable = document.getElementById("recent-purchases-widget-table");
  if (recentTable) {
    const userOrders = orders.filter(o => o.userId === currentUser.id);
    if (userOrders.length === 0) {
      recentTable.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 13px; padding: 20px 0;">Aucune commande récente. <a href="#" onclick="switchView('products')" style="color: var(--primary); text-decoration: none;">Acheter maintenant &rarr;</a></div>`;
    } else {
      const recent = [...userOrders].reverse().slice(0, 3);
      recentTable.innerHTML = `
        <table class="orders-table" style="font-size: 12px; width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-color); text-align: left;">
              <th style="padding: 8px 0;">N° Commande</th>
              <th style="padding: 8px 0;">Articles</th>
              <th style="padding: 8px 0;">Statut</th>
              <th style="padding: 8px 0;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${recent.map(o => {
              let statusBadge = `<span class="order-status-badge pending">En cours</span>`;
              if (o.status === "completed") statusBadge = `<span class="order-status-badge completed">Livrée</span>`;
              if (o.status === "cancelled") statusBadge = `<span class="order-status-badge" style="background: rgba(239, 68, 68, 0.1); color: #ef4444; border-radius: 4px; padding: 2px 6px;">Annulée</span>`;
              return `
                <tr style="cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.02);" data-order-id="${o.id}" class="widget-row-item">
                  <td style="padding: 8px 0;"><strong>${o.id.substring(0, 8)}...</strong></td>
                  <td style="padding: 8px 0;">${o.items.length > 20 ? o.items.substring(0, 18) + '...' : o.items}</td>
                  <td style="padding: 8px 0;">${statusBadge}</td>
                  <td style="padding: 8px 0;">${o.total.toFixed(3)} DT</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;

      recentTable.querySelectorAll(".widget-row-item").forEach(row => {
        row.addEventListener("click", () => {
          const oId = row.getAttribute("data-order-id");
          openOrderTrackingView(oId);
        });
      });
    }
  }

  // 5. Activity Feed List (Widget)
  const feedContainer = document.getElementById("client-activity-feed-list");
  if (feedContainer) {
    const feed = currentUser.activityFeed || [];
    feedContainer.innerHTML = [...feed].reverse().slice(0, 4).map(item => {
      return `
        <div class="activity-item">
          <span class="activity-item-dot"></span>
          <div class="activity-item-details">
            <span style="color: #fff; font-weight: 500;">${item.text}</span>
            <span class="activity-time-lbl">${item.time}</span>
          </div>
        </div>
      `;
    }).join("");
  }


}

function renderClientWallet() {
  if (!currentUser) return;
  const balanceEl = document.getElementById("wallet-premium-balance");
  if (balanceEl) balanceEl.innerText = `${currentUser.walletBalance.toFixed(3)} DT`;
  
  const usernameEl = document.getElementById("wallet-username-premium");
  if (usernameEl) usernameEl.innerText = currentUser.username.toUpperCase();
}



// 12. Client orders list filter renderer
function renderClientOrders() {
  const container = document.getElementById("client-orders-list-wrapper");
  if (!container) return;

  // Filter orders matching logged-in user session, status tab and search term
  const list = orders.filter(order => {
    const belongsToUser = order.userId === (currentUser ? currentUser.id : "guest");
    const matchesTab = order.status === activeOrderStatusTab;
    const matchesSearch = order.id.toLowerCase().includes(clientOrdersSearchVal) || 
                          order.items.toLowerCase().includes(clientOrdersSearchVal);
    return belongsToUser && matchesTab && matchesSearch;
  });

  if (list.length === 0) {
    container.innerHTML = `
      <div class="orders-empty-state">
        <img src="/sad_lion.jpg" alt="No results found" class="empty-state-lion-img" />
        <h4>No results found</h4>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(order => {
    let methodBadge = "";
    if (order.method === "ooredoo") methodBadge = `<span class="pay-badge ooredoo">Ooredoo</span>`;
    else if (order.method === "d17") methodBadge = `<span class="pay-badge post">D17</span>`;
    else methodBadge = `<span class="pay-badge binance">Binance</span>`;

    return `
      <div class="client-order-row-card" data-order-id="${order.id}">
        <div class="client-order-row-card-header">
          <h4>Order no. ${order.id}</h4>
          <span style="font-family: var(--font-secondary); font-size: 11px; color: var(--text-muted);">${order.date}</span>
        </div>
        <div class="client-order-row-card-body">
          <p><strong>Articles :</strong> ${order.items}</p>
          <p><strong>Bénéficiaire :</strong> ${order.customer}</p>
        </div>
        <div class="client-order-row-card-footer">
          <div>Mode : ${methodBadge}</div>
          <div>Total : <strong style="color: #fff; font-size: 14px;">${order.total.toFixed(3)} DT</strong></div>
        </div>
      </div>
    `;
  }).join("");

  // Click card to open G2G Order Detail Tracking View
  container.querySelectorAll(".client-order-row-card").forEach(card => {
    card.addEventListener("click", () => {
      const orderId = card.getAttribute("data-order-id");
      openOrderTrackingView(orderId);
    });
  });
}

// 13. Open and build G2G detail order tracking view
function openOrderTrackingView(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  activeTrackingOrderId = orderId;
  document.getElementById("track-order-no").innerText = order.id;
  document.getElementById("track-order-date").innerText = `Placed on ${order.date}`;

  // Advance dynamic horizontal stepper visual progress bar
  const stepperLine = document.getElementById("track-stepper-line");
  const stepNodes = [
    document.getElementById("step-node-1"),
    document.getElementById("step-node-2"),
    document.getElementById("step-node-3"),
    document.getElementById("step-node-4"),
    document.getElementById("step-node-5")
  ];

  const currentStep = order.step || 1;
  const progressPercent = ((currentStep - 1) / 4) * 100;
  stepperLine.style.width = `${progressPercent}%`;

  stepNodes.forEach((node, idx) => {
    if (idx + 1 <= currentStep) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });

  // Load history logs list
  const logsContainer = document.getElementById("tracking-logs-list");
  const timelineLogs = order.timeline || [];
  
  logsContainer.innerHTML = timelineLogs.map((log, idx) => {
    const isLatest = idx === 0 ? "latest" : "";
    return `
      <div class="tracking-log-item ${isLatest}">
        <div class="log-time">${log.time}</div>
        <div class="log-text">${log.text}</div>
      </div>
    `;
  }).join("");

  // Show/Hide Purchased Gift Cards panel if voucher content is available
  const cardSection = document.getElementById("purchased-gift-cards-section");
  if (order.deliveredData) {
    cardSection.style.display = "block";
  } else {
    cardSection.style.display = "none";
  }

  switchView("order-tracking");
}

// 14. Authentication System Helper functions
function openAuthModal() {
  document.getElementById("tab-login").click();
  document.getElementById("auth-modal").classList.add("active");
}

function updateAuthUI() {
  const headerWrapper = document.getElementById("user-auth-header-wrapper");
  const mobileWrapper = document.getElementById("mobile-auth-wrapper");
  if (!headerWrapper || !mobileWrapper) return;

  if (currentUser) {
    if (currentUser.role === "admin") {
      document.body.classList.add("user-is-admin");
    } else {
      document.body.classList.remove("user-is-admin");
    }
    
    // Header Logged-In Avatar Badge
    let avatarHTML = "";
    if (currentUser.avatar) {
      avatarHTML = `<img src="${currentUser.avatar}" alt="Avatar">`;
    } else {
      const initials = currentUser.username.slice(0, 2).toUpperCase();
      avatarHTML = `<span>${initials}</span>`;
    }

    headerWrapper.innerHTML = `
      <button class="header-avatar-trigger" id="header-avatar-btn" title="Mon Compte">
        ${avatarHTML}
      </button>
    `;
    
    // Mobile Drawer Logged-In Badge
    mobileWrapper.innerHTML = `
      <div class="mobile-user-status">
        <div style="font-family: var(--font-secondary); font-size: 13px; color: #fff; margin-bottom: 12px;">Connecté en tant que: <strong>${currentUser.username}</strong></div>
        <button class="btn btn-outline w-full" id="btn-mobile-logout-action" style="height: 40px;">Se Déconnecter 🚪</button>
      </div>
    `;

    // Bind Avatar click to open client panel (dashboard tab)
    document.getElementById("header-avatar-btn").addEventListener("click", () => {
      switchView("orders");
      switchClientDashboardTab("dashboard");
    });
    
    document.getElementById("btn-mobile-logout-action").addEventListener("click", () => {
      logoutClient();
    });
  } else {
    // Header Logged-Out Trigger button
    headerWrapper.innerHTML = `
      <button class="btn btn-outline btn-login-trigger" id="btn-login-modal-trigger" style="height: 38px; padding: 0 14px; font-size: 12px; display: flex; align-items: center; gap: 6px;">Connexion 👤</button>
    `;

    // Mobile Drawer Logged-Out Trigger button
    mobileWrapper.innerHTML = `
      <button class="btn btn-primary w-full" id="btn-mobile-login-trigger" style="height: 42px;">Se Connecter 👤</button>
    `;

    // Rebind Login Modal Triggers
    document.getElementById("btn-login-modal-trigger").addEventListener("click", () => {
      openAuthModal();
    });
    document.getElementById("btn-mobile-login-trigger").addEventListener("click", () => {
      openAuthModal();
    });
  }
}

function logoutClient() {
  currentUser = null;
  document.body.classList.remove("user-is-admin");
  document.body.classList.remove("admin-mode-active");
  sessionStorage.removeItem("rolly_session_user");
  showToast("Vous vous êtes déconnecté. À bientôt ! 👋");
  
  // Reset back to home page if they were on client dashboard tracking
  const currentActiveView = document.querySelector(".app-view.active").id;
  if (currentActiveView === "view-orders" || currentActiveView === "view-order-tracking") {
    switchView("home");
  }
  
  setupUI();
}


// ==========================================================
// PHASE 12: SUPPORT TICKET CHAT SYSTEM CONTROLLERS
// ==========================================================

// Render all support tickets inside admin subview
function renderAdminTickets() {
  const container = document.getElementById("admin-tickets-list-body");
  if (!container) return;

  if (tickets.length === 0) {
    container.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 20px 0;">Aucun ticket disponible.</td></tr>`;
    return;
  }

  container.innerHTML = [...tickets].reverse().map(t => {
    let statusLabel = `<span class="ticket-status-badge open">Ouvert</span>`;
    if (t.status === "resolved") {
      statusLabel = `<span class="ticket-status-badge resolved">Résolu</span>`;
    }

    const lastReply = t.replies && t.replies.length > 0 ? t.replies[t.replies.length - 1].text : t.message;
    const shortReply = lastReply.length > 45 ? lastReply.substring(0, 42) + "..." : lastReply;

    return `
      <tr>
        <td style="padding: 14px 12px;"><strong>${t.id}</strong></td>
        <td style="padding: 14px 12px;">${t.customerName}</td>
        <td style="padding: 14px 12px;">${t.customerEmail}</td>
        <td style="padding: 14px 12px;">${shortReply}</td>
        <td style="padding: 14px 12px;">${statusLabel}</td>
        <td style="padding: 14px 12px;">${t.date}</td>
        <td style="padding: 14px 12px;">
          <button class="admin-action-btn fulfill-order-btn btn-view-ticket" data-ticket-id="${t.id}" style="background-color: var(--primary);">Ouvrir</button>
        </td>
      </tr>
    `;
  }).join("");

  // Bind Open Ticket button
  container.querySelectorAll(".btn-view-ticket").forEach(btn => {
    btn.addEventListener("click", () => {
      const tckId = btn.getAttribute("data-ticket-id");
      openAdminTicketChat(tckId);
    });
  });
}

// Render active client's support tickets in the sidebar of the new chat page
function renderClientTickets() {
  const sidebarList = document.getElementById("support-tickets-history-list");
  if (!sidebarList) return;

  const localGuestSession = localStorage.getItem("rolly_guest_ticket_ids");
  let guestTicketIds = [];
  try {
    if (localGuestSession) guestTicketIds = JSON.parse(localGuestSession);
  } catch(e) {}

  const userTickets = tickets.filter(t => {
    if (currentUser) {
      return t.userId === currentUser.id || t.customerName.toLowerCase() === currentUser.username.toLowerCase();
    } else {
      return guestTicketIds.includes(t.id);
    }
  });

  if (userTickets.length === 0) {
    sidebarList.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 20px 0;">Aucune discussion active.</div>`;
    return;
  }

  const activeTicketIdEl = document.getElementById("support-chat-active-ticket-id");
  const activeId = activeTicketIdEl ? activeTicketIdEl.value : null;

  sidebarList.innerHTML = [...userTickets].reverse().map(t => {
    let statusBadge = `<span class="ticket-status-badge open" style="background: rgba(16,185,129,0.1); color: #10b981;">Ouvert</span>`;
    if (t.status === "resolved") {
      statusBadge = `<span class="ticket-status-badge resolved" style="background: rgba(255,255,255,0.05); color: var(--text-muted);">Résolu</span>`;
    }

    const isActiveClass = t.id === activeId ? "active" : "";

    return `
      <div class="support-ticket-item ${isActiveClass}" data-ticket-id="${t.id}">
        <div class="support-ticket-meta">
          <span class="support-ticket-id">${t.id}</span>
          ${statusBadge}
        </div>
        <div class="support-ticket-title">${t.message.substring(0, 24)}${t.message.length > 24 ? '...' : ''}</div>
        <div style="font-size: 10px; color: var(--text-muted); text-align: right; margin-top: 4px;">${t.date}</div>
      </div>
    `;
  }).join("");

  sidebarList.querySelectorAll(".support-ticket-item").forEach(item => {
    item.addEventListener("click", () => {
      const tckId = item.getAttribute("data-ticket-id");
      openClientTicketChat(tckId);
    });
  });
}

// Open admin chat reply modal
function openAdminTicketChat(ticketId) {
  const t = tickets.find(o => o.id === ticketId);
  if (t) {
    document.getElementById("admin-active-ticket-id").value = t.id;
    document.getElementById("admin-reply-modal-title").innerText = `Ticket ${t.id} - ${t.customerName}`;
    document.getElementById("admin-ticket-status-select").value = t.status;
    document.getElementById("admin-ticket-reply-text").value = "";

    const chatBox = document.getElementById("admin-chat-messages-box");
    chatBox.innerHTML = t.replies.map(r => {
      const typeClass = r.sender === "admin" ? "admin" : "client";
      const senderName = r.sender === "admin" ? "Support" : t.customerName;
      return `
        <div class="chat-bubble ${typeClass}">
          <span style="font-size: 10px; font-weight: 800; opacity: 0.8; margin-bottom: 2px;">${senderName}</span>
          <span>${r.text}</span>
          <span class="chat-bubble-time">${r.time}</span>
        </div>
      `;
    }).join("");

    document.getElementById("admin-ticket-reply-modal").classList.add("active");
    setTimeout(() => { chatBox.scrollTop = chatBox.scrollHeight; }, 50);
  }
}

// Open client chat history screen
function openClientTicketChat(ticketId) {
  const t = tickets.find(o => o.id === ticketId);
  if (t) {
    localStorage.setItem("rolly_last_active_ticket_id", t.id);
    document.getElementById("support-screen-welcome").style.display = "none";
    document.getElementById("support-screen-create").style.display = "none";
    document.getElementById("support-screen-chat").style.display = "flex";

    document.querySelectorAll(".support-ticket-item").forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-ticket-id") === t.id) {
        item.classList.add("active");
      }
    });

    document.getElementById("support-chat-active-ticket-id").value = t.id;
    document.getElementById("support-chat-ticket-id").innerText = `Ticket ${t.id}`;
    document.getElementById("support-chat-ticket-subject").innerText = `${t.customerName} - ${t.customerEmail}`;

    const statusEl = document.getElementById("support-chat-ticket-status");
    if (t.status === "resolved") {
      statusEl.innerHTML = `<span class="ticket-status-badge resolved" style="background: rgba(255,255,255,0.05); color: var(--text-muted); padding: 4px 10px; border-radius: 6px; font-size:11px; font-weight:700;">Résolu 🔒</span>`;
      document.getElementById("support-chat-input-form").style.display = "none";
      document.getElementById("support-chat-resolved-banner").style.display = "flex";
    } else {
      statusEl.innerHTML = `<span class="ticket-status-badge open" style="background: rgba(16,185,129,0.1); color: #10b981; padding: 4px 10px; border-radius: 6px; font-size:11px; font-weight:700;">Ouvert 🟢</span>`;
      document.getElementById("support-chat-input-form").style.display = "block";
      document.getElementById("support-chat-resolved-banner").style.display = "none";
    }

    const chatBox = document.getElementById("support-chat-messages-box");
    chatBox.innerHTML = t.replies.map(r => {
      const typeClass = r.sender === "admin" ? "admin" : "client";
      const senderName = r.sender === "admin" ? "Support ROLLY" : "Moi";
      return `
        <div class="chat-bubble ${typeClass}">
          <span style="font-size: 10px; font-weight: 800; opacity: 0.8; margin-bottom: 2px;">${senderName}</span>
          <span>${r.text}</span>
          <span class="chat-bubble-time">${r.time}</span>
        </div>
      `;
    }).join("");

    setTimeout(() => { chatBox.scrollTop = chatBox.scrollHeight; }, 50);
  }
}


// ==========================================================
// PHASE 13: 3D COVER FLOW HERO CAROUSEL CONTROLLER
// ==========================================================

let activeCarouselIndex = 0;
let carouselProducts = [];
let carouselInterval = null;

// Start carousel automatic sliding every 5 seconds
function startCarouselAutoSlide() {
  stopCarouselAutoSlide();
  if (carouselProducts.length > 1) {
    carouselInterval = setInterval(() => {
      activeCarouselIndex = (activeCarouselIndex + 1) % carouselProducts.length;
      updateCarouselLayout();
    }, 5000);
  }
}

// Stop carousel automatic sliding
function stopCarouselAutoSlide() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
}

function renderHeroCarousel() {
  const track = document.getElementById("hero-carousel-track");
  if (!track) return;

  // Filter top featured products selected by the admin
  carouselProducts = products.filter(p => p.featuredCarousel === true);
  if (carouselProducts.length === 0) {
    carouselProducts = products.filter(p => p.popularIndex >= 80).slice(0, 5);
  }
  if (carouselProducts.length === 0) {
    carouselProducts = products.slice(0, 5);
  }

  track.innerHTML = carouselProducts.map((p, index) => {
    // Resolve cover image safely using fallback overrides
    const coverImg = p.image || p.imageUrl || "/public/favicon.svg";
    return `
      <div class="carousel-card" data-index="${index}" data-product-id="${p.id}">
        <img src="${coverImg}" class="carousel-card-img" alt="${p.name}" />
        <div class="carousel-card-overlay">
          <h4 class="carousel-card-title">${p.name}</h4>
          <button class="carousel-card-btn" data-product-id="${p.id}">Acheter Maintenant 🛒</button>
        </div>
      </div>
    `;
  }).join("");

  updateCarouselLayout();
  startCarouselAutoSlide();

  // Bind click listeners on cards
  track.querySelectorAll(".carousel-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"));
      if (idx === activeCarouselIndex) {
        // Center card click -> opens product details wizard
        const prodId = card.getAttribute("data-product-id");
        openProductDetailsView(prodId);
      } else {
        // Flanking card click -> pivots it to center focus
        activeCarouselIndex = idx;
        updateCarouselLayout();
        startCarouselAutoSlide(); // Reset auto-slide timer on manual navigation
      }
    });
  });

  // Explicitly bind click handler on button to ensure 100% responsiveness on mobile/desktop
  track.querySelectorAll(".carousel-card-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Stop event bubbling to card
      const prodId = btn.getAttribute("data-product-id");
      openProductDetailsView(prodId);
    });
  });
}

function updateCarouselLayout() {
  const cards = document.querySelectorAll(".carousel-card");
  if (cards.length === 0) return;

  cards.forEach((card, index) => {
    let offset = index - activeCarouselIndex;
    let absOffset = Math.abs(offset);

    if (absOffset > 2) {
      // Hide far away cards
      card.style.opacity = "0";
      card.style.visibility = "hidden";
      card.style.transform = `translateX(${offset * 160}px) scale(0.5) rotateY(0deg)`;
      card.style.zIndex = "0";
    } else {
      card.style.opacity = "1";
      card.style.visibility = "visible";

      let transformStr = "";
      let zIndex = 5 - absOffset;

      if (offset === 0) {
        // Center card: facing front with z-depth translation
        transformStr = `translateX(0px) translateZ(120px) scale(1) rotateY(0deg)`;
      } else if (offset > 0) {
        // Right side cards: angled back with offset translations
        transformStr = `translateX(${offset * 140}px) translateZ(${60 - absOffset * 40}px) scale(${1 - absOffset * 0.15}) rotateY(-35deg)`;
      } else {
        // Left side cards: angled back with offset translations
        transformStr = `translateX(${offset * 140}px) translateZ(${60 - absOffset * 40}px) scale(${1 - absOffset * 0.15}) rotateY(35deg)`;
      }

      card.style.transform = transformStr;
      card.style.zIndex = zIndex.toString();

      // Dim overlays for inactive flanking cards
      const overlay = card.querySelector(".carousel-card-overlay");
      if (offset === 0) {
        overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)";
        card.style.filter = "none";
      } else {
        overlay.style.background = "rgba(0, 0, 0, 0.7)";
        card.style.filter = "brightness(0.5)";
      }
    }
  });
}


// Polling interval controllers for Serverless payments checkups
let paymentPollInterval = null;

function startPaymentPolling(orderId, createdAt, method) {
  stopPaymentPolling();
  
  paymentPollInterval = setInterval(() => {
    fetch(`/api/checkout-status?orderId=${orderId}&paymentMethod=${method}&createdAt=${createdAt}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "paid") {
          stopPaymentPolling();
          
          // Switch to Success State
          document.getElementById("payment-state-binance").style.display = "none";
          document.getElementById("payment-state-crypto").style.display = "none";
          document.getElementById("payment-state-success").style.display = "flex";

          // Play a nice success beep if supported
          try {
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
          } catch(e) {}

          setTimeout(() => {
            document.getElementById("checkout-payment-overlay").classList.remove("active");
            completeOrderWithDetails(orderId, new Date().toLocaleString(), method, data.code);
          }, 2000);
        }
      })
      .catch(err => {
        console.error("Polling error:", err);
      });
  }, 3000);
}

function stopPaymentPolling() {
  if (paymentPollInterval) {
    clearInterval(paymentPollInterval);
    paymentPollInterval = null;
  }
}

// Complete order with real backend validation details and generated code
function completeOrderWithDetails(orderId, dateStr, method, voucherCode) {
  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemsSummary = cart.map(item => `${item.product.name} (x${item.quantity}) [Info: ${item.playerInfo}]`).join(", ");

  let methodLabel = "Binance Pay";
  if (method === "crypto") methodLabel = "Crypto USDT";
  if (method === "paypal") methodLabel = "PayPal / Cartes";

  const newOrder = {
    id: orderId,
    userId: currentUser ? currentUser.id : "guest",
    items: itemsSummary,
    customer: `${methodLabel} Auto-pay`,
    method: method,
    total: cartTotal,
    status: "verify",
    date: dateStr,
    playerInfo: cart[0].playerInfo || "",
    step: 2, 
    deliveredData: "",
    timeline: [
      { time: dateStr, text: "Awaiting admin manual payment validation." },
      { time: dateStr, text: `Paiement déclaré via ${methodLabel}.` },
      { time: dateStr, text: "Commande créée." }
    ]
  };

  orders.push(newOrder);
  saveOrdersToCloud();

  // Load layout success timeline
  document.getElementById("success-order-id").innerText = orderId;
  document.getElementById("success-pay-method").innerText = methodLabel;
  
  document.getElementById("valid-ooredoo").style.display = "none";
  document.getElementById("valid-manual").style.display = "none";
  document.getElementById("valid-success").style.display = "block";

  checkoutStep = 3;
  updateCheckoutStepUI();

  // Reset cart
  cart = [];
  localStorage.removeItem("rolly_cart");
  updateCartBadge();
  updateCartUI();

  updateAdminStats();
  renderAdminOrders();

  showToast("Félicitations ! Commande livrée automatiquement. 🎉");
}

function saveCurrentUser() {
  if (currentUser) {
    sessionStorage.setItem("rolly_session_user", JSON.stringify(currentUser));
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
      users[idx] = currentUser;
    }
    saveUsersToCloud();
  }
}

function initiateDiscordLogin() {
  if (!discordClientId) {
    showToast("ID Client Discord non configuré. Veuillez configurer DISCORD_CLIENT_ID dans Vercel. ❌");
    return;
  }
  const redirectUri = window.location.origin + '/';
  const url = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify%20guilds.join`;
  window.location.href = url;
}

async function handleDiscordCallback(code) {
  const redirectUri = window.location.origin + '/';
  showToast("Authentification avec Discord en cours... ⏳");
  try {
    const res = await fetch("/api/discord-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, redirectUri })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Erreur de connexion Discord");
    }
    const discordUser = await res.json();
    
    // Clean code param from URL
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);

    await handleDiscordLoginOrLink(discordUser);
  } catch (e) {
    console.error("Discord Auth Callback Error:", e);
    showToast(`Échec de l'authentification Discord : ${e.message} ❌`);
  }
}

async function handleDiscordLoginOrLink(discordUser) {
  // Reload users from cloud
  try {
    const res = await fetch("/api/users");
    if (res.ok) {
      users = await res.json();
    }
  } catch (e) {}

  const discordAvatarUrl = discordUser.avatar 
    ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
    : "";

  if (currentUser) {
    // Link Discord to current user
    const existingLink = users.find(u => u.discordId === discordUser.id && u.id !== currentUser.id);
    if (existingLink) {
      showToast("Ce compte Discord est déjà lié à un autre utilisateur. ❌");
      return;
    }

    const userInDb = users.find(u => u.id === currentUser.id);
    if (userInDb) {
      userInDb.discordId = discordUser.id;
      userInDb.discordUsername = discordUser.username;
      userInDb.discordAvatar = discordAvatarUrl;
      
      if (!userInDb.avatar) {
        userInDb.avatar = discordAvatarUrl;
      }

      currentUser = userInDb;
      saveCurrentUser();
      showToast("Compte Discord lié avec succès ! ✅");
      setupUI();
      if (currentView === "orders") {
        renderClientDashboardSummary();
      }
    }
    return;
  }

  // Login/Register
  let matchedUser = users.find(u => u.discordId === discordUser.id);
  if (matchedUser) {
    currentUser = matchedUser;
    sessionStorage.setItem("rolly_session_user", JSON.stringify(currentUser));
    showToast(`Bienvenue, ${currentUser.username} (via Discord) ! 👋`);
    setupUI();
    switchView("orders");
  } else {
    // Generate unique username
    let targetUsername = discordUser.username;
    let suffix = 1;
    while (users.some(u => u.username.toLowerCase() === targetUsername.toLowerCase())) {
      targetUsername = discordUser.username + suffix;
      suffix++;
    }

    const newUser = {
      id: "usr-" + Date.now(),
      username: targetUsername,
      password: Math.random().toString(36).slice(-8),
      role: "client",
      discordId: discordUser.id,
      discordUsername: discordUser.username,
      discordAvatar: discordAvatarUrl,
      avatar: discordAvatarUrl,
      walletBalance: 0.000,
      activityFeed: [
        { text: "Compte créé via Discord ! 🎉", time: "À l'instant" }
      ]
    };

    users.push(newUser);
    saveUsersToCloud();

    currentUser = newUser;
    sessionStorage.setItem("rolly_session_user", JSON.stringify(currentUser));

    orders.forEach(o => {
      if (!o.userId) o.userId = currentUser.id;
    });
    saveOrdersToCloud();

    showToast(`Compte créé via Discord ! Bienvenue ${currentUser.username} 🎉`);
    setupUI();
    switchView("orders");
  }
}
// Trigger Vercel Redeployment with Upstash linked
