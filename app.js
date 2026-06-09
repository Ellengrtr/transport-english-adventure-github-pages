const destinations = [
  { id: "zoo", cn: "动物园", en: "Zoo", icon: "ZOO", phrase: "the zoo", stop: "Zoo Station" },
  { id: "toy", cn: "玩具店", en: "Toy Shop", icon: "TOY", phrase: "the toy shop", stop: "Toy Shop Station" },
  { id: "restaurant", cn: "餐厅", en: "Restaurant", icon: "FOOD", phrase: "the restaurant", stop: "Restaurant Station" },
  { id: "bathroom", cn: "厕所", en: "Bathroom", icon: "WC", phrase: "the bathroom", stop: "Bathroom Station" },
  { id: "hospital", cn: "医院", en: "Hospital", icon: "HELP", phrase: "the hospital", stop: "Hospital Station" },
  { id: "hotel", cn: "酒店", en: "Hotel", icon: "BED", phrase: "the hotel", stop: "Hotel Station" },
  { id: "park", cn: "公园", en: "Park", icon: "PARK", phrase: "the park", stop: "Park Station" },
  { id: "station", cn: "高铁站", en: "Train Station", icon: "HSR", phrase: "the train station", stop: "Train Station" }
];

const transports = [
  { id: "train", cn: "高铁", en: "train", className: "train", ticket: "High-speed Ticket" },
  { id: "metro", cn: "地铁", en: "metro", className: "metro", ticket: "Metro Card" },
  { id: "bus", cn: "公交车", en: "bus", className: "bus", ticket: "Bus Ticket" }
];

const destinationsPerPage = 8;

destinations.push(
  { id: "school", cn: "学校", en: "School", icon: "SCH", phrase: "school", stop: "School Stop" },
  { id: "library", cn: "图书馆", en: "Library", icon: "LIB", phrase: "the library", stop: "Library Stop" },
  { id: "supermarket", cn: "超市", en: "Supermarket", icon: "SHOP", phrase: "the supermarket", stop: "Market Stop" },
  { id: "pharmacy", cn: "药店", en: "Pharmacy", icon: "MED", phrase: "the pharmacy", stop: "Pharmacy Stop" },
  { id: "airport", cn: "机场", en: "Airport", icon: "AIR", phrase: "the airport", stop: "Airport Station" },
  { id: "cafe", cn: "咖啡店", en: "Cafe", icon: "CAFE", phrase: "the cafe", stop: "Cafe Stop" },
  { id: "bookstore", cn: "书店", en: "Bookstore", icon: "BOOK", phrase: "the bookstore", stop: "Bookstore Stop" },
  { id: "clothing", cn: "服装店", en: "Clothing Store", icon: "TEE", phrase: "the clothing store", stop: "Clothing Store Stop" },
  { id: "shoes", cn: "鞋店", en: "Shoe Store", icon: "SHOE", phrase: "the shoe store", stop: "Shoe Store Stop" },
  { id: "dentist", cn: "牙医诊所", en: "Dentist", icon: "TEETH", phrase: "the dentist", stop: "Dentist Stop" },
  { id: "museum", cn: "博物馆", en: "Museum", icon: "MUSE", phrase: "the museum", stop: "Museum Stop" },
  { id: "movie", cn: "电影院", en: "Movie Theater", icon: "FILM", phrase: "the movie theater", stop: "Movie Theater Stop" },
  { id: "pool", cn: "游泳馆", en: "Pool", icon: "POOL", phrase: "the pool", stop: "Pool Stop" },
  { id: "hair", cn: "理发店", en: "Hair Salon", icon: "HAIR", phrase: "the hair salon", stop: "Hair Salon Stop" },
  { id: "post", cn: "邮局", en: "Post Office", icon: "POST", phrase: "the post office", stop: "Post Office Stop" },
  { id: "bank", cn: "银行", en: "Bank", icon: "BANK", phrase: "the bank", stop: "Bank Stop" },
  { id: "police", cn: "警察局", en: "Police Station", icon: "SOS", phrase: "the police station", stop: "Police Station" },
  { id: "friend", cn: "朋友家", en: "Friend's House", icon: "HOME", phrase: "my friend's house", stop: "Friend's House Stop" },
  { id: "birthday", cn: "生日派对", en: "Birthday Party", icon: "BDAY", phrase: "the birthday party", stop: "Party Stop" },
  { id: "taxi", cn: "出租车", en: "Taxi Stand", icon: "TAXI", phrase: "the taxi stand", stop: "Taxi Stand" }
);

const travelStartStep = {
  id: "choose",
  speaker: "任务中心",
  prompt: "Choose your ride.",
  zh: "选择今天坐什么交通工具。",
  type: "transport"
};

const destinationMissions = {
  zoo: [
    {
      id: "zoo-ticket",
      speaker: "动物园售票员",
      prompt: "Hi there. How many tickets?",
      zh: "售票员问你要几张票。",
      answer: "Two tickets, please.",
      distractors: ["One map, please.", "I have two toy trains."]
    },
    {
      id: "zoo-map",
      speaker: "动物园工作人员",
      prompt: "Would you like a map?",
      zh: "工作人员问你要不要地图。",
      answer: "Yes, please. A map would help.",
      distractors: ["No, thanks. I have a ticket.", "Yes, please. A bag would help."]
    },
    {
      id: "zoo-pandas",
      speaker: "家人",
      prompt: "What animals do you want to see first?",
      zh: "家人问你先想看什么动物。",
      answer: "I want to see the pandas first.",
      distractors: ["I want to see the cafe first.", "I want to find the exit first."]
    },
    {
      id: "zoo-rule",
      speaker: "动物园广播",
      prompt: "Please do not feed the animals.",
      zh: "广播提醒不要喂动物。",
      answer: "Okay. I won't feed them.",
      distractors: ["Okay. I'll take a photo.", "Okay. I'll buy a snack."]
    },
    {
      id: "zoo-snack",
      speaker: "家人",
      prompt: "Are you hungry?",
      zh: "家人问你饿不饿。",
      answer: "Yes. Can we get a snack?",
      distractors: ["Yes. Can we get a map?", "No, I'm not hungry."]
    }
  ],
  toy: [
    {
      id: "toy-help",
      speaker: "店员",
      prompt: "Can I help you?",
      zh: "店员问你需要什么。",
      answer: "I'm looking for a toy train.",
      distractors: ["I'm looking for a real train.", "I'm looking for a storybook."]
    },
    {
      id: "toy-try",
      speaker: "店员",
      prompt: "Would you like to try it?",
      zh: "店员问你想不想试一下。",
      answer: "Yes, can I try it?",
      distractors: ["Yes, can I buy a ticket?", "No, can I see the receipt?"]
    },
    {
      id: "toy-color",
      speaker: "店员",
      prompt: "Do you want the red one or the blue one?",
      zh: "店员问你要红色还是蓝色。",
      answer: "The red one, please.",
      distractors: ["The big one, please.", "The one by the door, please."]
    },
    {
      id: "toy-price",
      speaker: "收银员",
      prompt: "Anything else?",
      zh: "收银员问还要别的吗。",
      answer: "No, thank you. How much is it?",
      distractors: ["No, thank you. Where is it?", "Yes, please. What color is it?"]
    },
    {
      id: "toy-bag",
      speaker: "收银员",
      prompt: "Would you like a bag?",
      zh: "收银员问你要不要袋子。",
      answer: "Yes, please.",
      distractors: ["A receipt, please.", "No, thank you. I have a backpack."]
    }
  ],
  restaurant: [
    {
      id: "restaurant-table",
      speaker: "服务员",
      prompt: "Table for how many?",
      zh: "服务员问几位用餐。",
      answer: "A table for two, please.",
      distractors: ["A ticket for two, please.", "A menu for two, please."]
    },
    {
      id: "restaurant-order",
      speaker: "服务员",
      prompt: "What would you like?",
      zh: "服务员问你想点什么。",
      answer: "Can I have noodles, please?",
      distractors: ["Can I have a ticket, please?", "Can I have the bill, please?"]
    },
    {
      id: "restaurant-drink",
      speaker: "服务员",
      prompt: "Anything to drink?",
      zh: "服务员问你喝什么。",
      answer: "Water, please.",
      distractors: ["The bill, please.", "A map, please."]
    },
    {
      id: "restaurant-taste",
      speaker: "服务员",
      prompt: "How is everything?",
      zh: "服务员问饭菜怎么样。",
      answer: "It's delicious. Thank you.",
      distractors: ["It's too far. Thank you.", "It's very busy. Thank you."]
    },
    {
      id: "restaurant-bill",
      speaker: "服务员",
      prompt: "Are you ready for the bill?",
      zh: "服务员问你要不要结账。",
      answer: "Yes, please.",
      distractors: ["Yes, the food is good.", "No, thank you. I need water."]
    }
  ],
  bathroom: [
    {
      id: "bathroom-ask",
      speaker: "你",
      prompt: "Excuse me.",
      zh: "先礼貌地叫住别人。",
      answer: "Where is the restroom?",
      distractors: ["Where is the toy train?", "Where are my noodles?"]
    },
    {
      id: "bathroom-direction",
      speaker: "路人",
      prompt: "It's down the hall.",
      zh: "别人告诉你在走廊那边。",
      answer: "Thank you.",
      distractors: ["No, thank you. I can wait.", "Thank you for the map."]
    },
    {
      id: "bathroom-floor",
      speaker: "你",
      prompt: "Ask one more thing.",
      zh: "再确认一下是不是在这一层。",
      answer: "Is it on this floor?",
      distractors: ["Is it open now?", "Is it by the ticket gate?"]
    },
    {
      id: "bathroom-minute",
      speaker: "外面的人",
      prompt: "Are you almost done?",
      zh: "外面的人问你快好了吗。",
      answer: "Just a minute, please.",
      distractors: ["Just a ticket, please.", "Just a panda, please."]
    },
    {
      id: "bathroom-ready",
      speaker: "家人",
      prompt: "Are you ready to go?",
      zh: "家人问你准备好走了吗。",
      answer: "Yes, I'm ready.",
      distractors: ["Yes, I'm still washing my hands.", "No, I'm looking for the restroom."]
    }
  ],
  hospital: [
    {
      id: "hospital-wrong",
      speaker: "护士",
      prompt: "What's wrong?",
      zh: "护士问你哪里不舒服。",
      answer: "My tummy hurts.",
      distractors: ["My ticket hurts.", "My train is hungry."]
    },
    {
      id: "hospital-fever",
      speaker: "护士",
      prompt: "Do you have a fever?",
      zh: "护士问你有没有发烧。",
      answer: "I feel a little hot.",
      distractors: ["I feel a little hungry.", "I feel a little sleepy."]
    },
    {
      id: "hospital-where",
      speaker: "医生",
      prompt: "Where does it hurt?",
      zh: "医生问你哪里疼。",
      answer: "It hurts here.",
      distractors: ["It starts here.", "It stops here."]
    },
    {
      id: "hospital-sit",
      speaker: "护士",
      prompt: "Can you sit over here?",
      zh: "护士让你坐到这边。",
      answer: "Okay. I can sit here.",
      distractors: ["Okay. I can wait here.", "Okay. I can stand here."]
    },
    {
      id: "hospital-water",
      speaker: "医生",
      prompt: "Do you need anything?",
      zh: "医生问你还需要什么。",
      answer: "Can I have some water?",
      distractors: ["Can I have a sticker?", "Can I have my ticket back?"]
    }
  ],
  hotel: [
    {
      id: "hotel-reservation",
      speaker: "前台",
      prompt: "Do you have a reservation?",
      zh: "前台问你有没有预订。",
      answer: "Yes, we have a reservation.",
      distractors: ["Yes, we have a restaurant.", "No, we're looking for a taxi."]
    },
    {
      id: "hotel-name",
      speaker: "前台",
      prompt: "What's your name?",
      zh: "前台问你的名字。",
      answer: "My name is Leo.",
      distractors: ["My room is upstairs.", "The room key is here."]
    },
    {
      id: "hotel-key",
      speaker: "前台",
      prompt: "Here's your key card.",
      zh: "前台给你房卡。",
      answer: "Thank you. Which floor?",
      distractors: ["Thank you. Which table?", "Thank you. Which train?"]
    },
    {
      id: "hotel-bags",
      speaker: "前台",
      prompt: "Do you need help with your bags?",
      zh: "前台问你需不需要帮忙拿包。",
      answer: "Yes, please. Thank you.",
      distractors: ["Yes, please. The room is ready.", "No, thank you. I need a key card."]
    },
    {
      id: "hotel-day",
      speaker: "前台",
      prompt: "Enjoy your stay.",
      zh: "前台祝你住得愉快。",
      answer: "Thank you. Have a good day.",
      distractors: ["Thank you. Where is the pool?", "Thank you. I need a towel."]
    }
  ],
  park: [
    {
      id: "park-slide",
      speaker: "家人",
      prompt: "What do you want to do first?",
      zh: "家人问你先想玩什么。",
      answer: "Can I play on the slide?",
      distractors: ["Can I sit on the bench?", "Can I look at the map?"]
    },
    {
      id: "park-swing",
      speaker: "小朋友",
      prompt: "Do you want to swing?",
      zh: "小朋友问你要不要荡秋千。",
      answer: "Yes, I want to swing.",
      distractors: ["Yes, I want to sit down.", "No, I want to go home."]
    },
    {
      id: "park-gate",
      speaker: "家人",
      prompt: "Let's meet by the gate.",
      zh: "家人约你在门口见。",
      answer: "Okay. See you by the gate.",
      distractors: ["Okay. See you by the cafe.", "Okay. I'll wait by the slide."]
    },
    {
      id: "park-careful",
      speaker: "家人",
      prompt: "Be careful.",
      zh: "家人提醒你小心。",
      answer: "Okay. I'll be careful.",
      distractors: ["Okay. I'll be hungry.", "Okay. I'll wait by the cafe."]
    },
    {
      id: "park-leave",
      speaker: "家人",
      prompt: "Are you ready to leave?",
      zh: "家人问你准备走了吗。",
      answer: "Five more minutes, please.",
      distractors: ["Five more tickets, please.", "Five more bathrooms, please."]
    }
  ],
  station: [
    {
      id: "station-ticket",
      speaker: "检票员",
      prompt: "May I see your ticket?",
      zh: "检票员要看你的票。",
      answer: "Sure. Here it is.",
      distractors: ["Sure. Here is my bag.", "Sure. Here is my map."]
    },
    {
      id: "station-platform",
      speaker: "工作人员",
      prompt: "Which platform are you looking for?",
      zh: "工作人员问你找哪个站台。",
      answer: "I'm looking for Platform 3.",
      distractors: ["I'm looking for three noodles.", "I'm looking for the toy floor."]
    },
    {
      id: "station-seat",
      speaker: "乘客",
      prompt: "Is this seat taken?",
      zh: "别人问这个座位有没有人。",
      answer: "No, it's free.",
      distractors: ["No, it's too far.", "Yes, it's by the window."]
    },
    {
      id: "station-bag",
      speaker: "乘务员",
      prompt: "Do you need help with your bag?",
      zh: "乘务员问你需不需要帮忙放包。",
      answer: "Yes, please. It's heavy.",
      distractors: ["Yes, please. It's delicious.", "No, thanks. It's not heavy."]
    },
    {
      id: "station-hurry",
      speaker: "广播",
      prompt: "The train is leaving soon.",
      zh: "广播提醒火车快要开了。",
      answer: "Okay. Let's hurry.",
      distractors: ["Okay. Let's wait here.", "Okay. Let's buy a snack."]
    }
  ]
};

Object.assign(destinationMissions, {
  school: [
    { id: "school-morning", speaker: "老师", prompt: "Good morning, everyone.", zh: "老师早上和大家打招呼。", answer: "Good morning, Ms. Smith." },
    { id: "school-grade", speaker: "老师", prompt: "What class are you in?", zh: "老师问你在哪个年级。", answer: "I'm in first grade." },
    { id: "school-help", speaker: "老师", prompt: "Do you understand?", zh: "老师问你听懂了吗。", answer: "Not yet. Can you help me?" },
    { id: "school-pencil", speaker: "同学", prompt: "Do you need anything?", zh: "同学问你需不需要东西。", answer: "Can I borrow a pencil?" },
    { id: "school-recess", speaker: "同学", prompt: "Want to play at recess?", zh: "同学问你课间要不要一起玩。", answer: "Yes, let's play together." }
  ],
  library: [
    { id: "library-card", speaker: "图书管理员", prompt: "Do you have a library card?", zh: "管理员问你有没有借书卡。", answer: "Yes, here it is." },
    { id: "library-book", speaker: "图书管理员", prompt: "What kind of book do you want?", zh: "管理员问你想要哪类书。", answer: "I want a picture book." },
    { id: "library-quiet", speaker: "图书管理员", prompt: "Please use a quiet voice.", zh: "管理员提醒你小声说话。", answer: "Okay. I'll be quiet." },
    { id: "library-borrow", speaker: "图书管理员", prompt: "You can keep it for one week.", zh: "管理员告诉你可以借一周。", answer: "Great. Thank you." },
    { id: "library-renew", speaker: "图书管理员", prompt: "Do you want to renew it?", zh: "管理员问你要不要续借。", answer: "Yes, please. I need more time." }
  ],
  supermarket: [
    { id: "supermarket-find", speaker: "收银员", prompt: "Did you find everything okay?", zh: "收银员问你东西都找到了吗。", answer: "Yes, thank you." },
    { id: "supermarket-need", speaker: "家人", prompt: "What do we need?", zh: "家人问今天要买什么。", answer: "We need milk and eggs." },
    { id: "supermarket-aisle", speaker: "店员", prompt: "What are you looking for?", zh: "店员问你在找什么。", answer: "Where is the cereal?" },
    { id: "supermarket-bag", speaker: "收银员", prompt: "Paper or plastic?", zh: "收银员问你要纸袋还是塑料袋。", answer: "Paper, please." },
    { id: "supermarket-receipt", speaker: "收银员", prompt: "Do you need a receipt?", zh: "收银员问你要不要小票。", answer: "Yes, please." }
  ],
  pharmacy: [
    { id: "pharmacy-help", speaker: "药剂师", prompt: "How can I help?", zh: "药剂师问你需要什么。", answer: "I need something for a cough." },
    { id: "pharmacy-for-you", speaker: "药剂师", prompt: "Is it for you?", zh: "药剂师问药是不是给你的。", answer: "Yes, it's for me." },
    { id: "pharmacy-after-meals", speaker: "药剂师", prompt: "Take it after meals.", zh: "药剂师告诉你饭后吃。", answer: "Okay. After meals." },
    { id: "pharmacy-water", speaker: "家人", prompt: "Do you need water?", zh: "家人问你要不要水。", answer: "Yes, a little water, please." },
    { id: "pharmacy-better", speaker: "家人", prompt: "Do you feel better?", zh: "家人问你好点了吗。", answer: "A little better, thanks." }
  ],
  airport: [
    { id: "airport-passport", speaker: "工作人员", prompt: "May I see your passport?", zh: "工作人员要看护照。", answer: "Sure. Here you go." },
    { id: "airport-liquids", speaker: "安检员", prompt: "Any liquids in your bag?", zh: "安检员问包里有没有液体。", answer: "No, I don't have any." },
    { id: "airport-seat", speaker: "值机员", prompt: "Window or aisle?", zh: "值机员问你要靠窗还是过道。", answer: "Window, please." },
    { id: "airport-gate", speaker: "工作人员", prompt: "Your gate is B12.", zh: "工作人员告诉你登机口。", answer: "Thank you. Where is B12?" },
    { id: "airport-boarding", speaker: "广播", prompt: "Boarding starts soon.", zh: "广播说快要登机了。", answer: "Okay. Let's go to the gate." }
  ],
  cafe: [
    { id: "cafe-order", speaker: "店员", prompt: "What can I get for you?", zh: "店员问你要点什么。", answer: "A hot chocolate, please." },
    { id: "cafe-here", speaker: "店员", prompt: "For here or to go?", zh: "店员问堂食还是带走。", answer: "For here, please." },
    { id: "cafe-size", speaker: "店员", prompt: "What size?", zh: "店员问你要什么杯型。", answer: "Small, please." },
    { id: "cafe-name", speaker: "店员", prompt: "What's your name?", zh: "店员问你的名字。", answer: "My name is Leo." },
    { id: "cafe-ready", speaker: "店员", prompt: "Your drink is ready.", zh: "店员告诉你饮料好了。", answer: "Thank you." }
  ],
  bookstore: [
    { id: "bookstore-looking", speaker: "店员", prompt: "Are you looking for something?", zh: "店员问你在找什么。", answer: "I'm looking for a comic book." },
    { id: "bookstore-popular", speaker: "店员", prompt: "This one is popular.", zh: "店员推荐一本热门书。", answer: "Can I take a look?" },
    { id: "bookstore-bookmark", speaker: "店员", prompt: "Do you want a bookmark?", zh: "店员问你要不要书签。", answer: "Yes, please." },
    { id: "bookstore-price", speaker: "收银员", prompt: "That will be five dollars.", zh: "收银员告诉你价格。", answer: "Here you go." },
    { id: "bookstore-gift", speaker: "店员", prompt: "Is it a gift?", zh: "店员问是不是礼物。", answer: "Yes. Can you wrap it?" }
  ],
  clothing: [
    { id: "clothing-size", speaker: "店员", prompt: "What size do you need?", zh: "店员问你要什么尺码。", answer: "I need a small size." },
    { id: "clothing-like", speaker: "家人", prompt: "Do you like this shirt?", zh: "家人问你喜不喜欢这件衣服。", answer: "Yes, I like the color." },
    { id: "clothing-try", speaker: "店员", prompt: "Do you want to try it on?", zh: "店员问你要不要试穿。", answer: "Yes. Where is the fitting room?" },
    { id: "clothing-fit", speaker: "家人", prompt: "How does it fit?", zh: "家人问衣服合不合身。", answer: "It fits well." },
    { id: "clothing-bag", speaker: "收银员", prompt: "Would you like a bag?", zh: "收银员问你要不要袋子。", answer: "No, thank you." }
  ],
  shoes: [
    { id: "shoes-size", speaker: "店员", prompt: "What size are you?", zh: "店员问你的鞋码。", answer: "I'm size 12." },
    { id: "shoes-feel", speaker: "店员", prompt: "How do they feel?", zh: "店员问鞋穿起来怎么样。", answer: "They feel comfortable." },
    { id: "shoes-walk", speaker: "家人", prompt: "Can you walk in them?", zh: "家人问你能不能穿着走路。", answer: "Yes, they fit well." },
    { id: "shoes-pair", speaker: "店员", prompt: "Do you want this pair?", zh: "店员问你要不要这一双。", answer: "Yes, please." },
    { id: "shoes-box", speaker: "店员", prompt: "Do you need the box?", zh: "店员问你要不要鞋盒。", answer: "No, thank you." }
  ],
  dentist: [
    { id: "dentist-open", speaker: "牙医", prompt: "Open wide, please.", zh: "牙医让你张大嘴。", answer: "Okay, I'll open wide." },
    { id: "dentist-hurt", speaker: "牙医", prompt: "Does this tooth hurt?", zh: "牙医问这颗牙疼不疼。", answer: "Yes, a little." },
    { id: "dentist-brush", speaker: "牙医", prompt: "Brush twice a day.", zh: "牙医提醒你每天刷两次牙。", answer: "Okay. Twice a day." },
    { id: "dentist-floss", speaker: "牙医", prompt: "Do you floss?", zh: "牙医问你用不用牙线。", answer: "Not yet. Can you show me?" },
    { id: "dentist-done", speaker: "牙医", prompt: "You're all done.", zh: "牙医说检查结束了。", answer: "Thank you, Doctor." }
  ],
  museum: [
    { id: "museum-tickets", speaker: "工作人员", prompt: "Tickets, please.", zh: "工作人员要看票。", answer: "Here are our tickets." },
    { id: "museum-dino", speaker: "家人", prompt: "What do you want to see first?", zh: "家人问你先想看什么。", answer: "I want to see the dinosaurs." },
    { id: "museum-touch", speaker: "工作人员", prompt: "Please do not touch.", zh: "工作人员提醒不要摸展品。", answer: "Okay. I won't touch it." },
    { id: "museum-photo", speaker: "工作人员", prompt: "Photos are okay here.", zh: "工作人员说这里可以拍照。", answer: "Great. Can I take a picture?" },
    { id: "museum-learn", speaker: "家人", prompt: "What did you learn?", zh: "家人问你学到了什么。", answer: "I learned about space." }
  ],
  movie: [
    { id: "movie-which", speaker: "售票员", prompt: "Which movie?", zh: "售票员问你看哪部电影。", answer: "The cartoon movie, please." },
    { id: "movie-time", speaker: "售票员", prompt: "What time?", zh: "售票员问你看几点的场次。", answer: "The three o'clock show." },
    { id: "movie-snack", speaker: "店员", prompt: "Popcorn or candy?", zh: "店员问你要爆米花还是糖果。", answer: "Popcorn, please." },
    { id: "movie-seat", speaker: "工作人员", prompt: "Your seats are in Row C.", zh: "工作人员告诉你座位在 C 排。", answer: "Thank you. Where is Row C?" },
    { id: "movie-enjoy", speaker: "工作人员", prompt: "Enjoy the movie.", zh: "工作人员祝你观影愉快。", answer: "Thank you." }
  ],
  pool: [
    { id: "pool-cap", speaker: "工作人员", prompt: "Do you have a swim cap?", zh: "工作人员问你有没有泳帽。", answer: "Yes, I have one." },
    { id: "pool-float", speaker: "教练", prompt: "Can you float?", zh: "教练问你会不会漂浮。", answer: "I can try." },
    { id: "pool-cold", speaker: "家人", prompt: "Are you cold?", zh: "家人问你冷不冷。", answer: "A little. I need a towel." },
    { id: "pool-walk", speaker: "救生员", prompt: "Walk, please.", zh: "救生员提醒你慢慢走。", answer: "Okay. I'll walk." },
    { id: "pool-break", speaker: "教练", prompt: "Do you need a break?", zh: "教练问你要不要休息。", answer: "Yes, just for a minute." }
  ],
  hair: [
    { id: "hair-shorter", speaker: "理发师", prompt: "How would you like your hair?", zh: "理发师问你想怎么剪。", answer: "Just a little shorter, please." },
    { id: "hair-okay", speaker: "理发师", prompt: "Is this okay?", zh: "理发师问这个长度可以吗。", answer: "Yes, it looks good." },
    { id: "hair-wash", speaker: "理发师", prompt: "Do you want it washed?", zh: "理发师问要不要洗头。", answer: "No, thank you." },
    { id: "hair-still", speaker: "理发师", prompt: "Please sit still.", zh: "理发师提醒你坐好别动。", answer: "Okay. I'll sit still." },
    { id: "hair-like", speaker: "家人", prompt: "Do you like your haircut?", zh: "家人问你喜不喜欢新发型。", answer: "Yes, I like it." }
  ],
  post: [
    { id: "post-mail", speaker: "工作人员", prompt: "How can I help?", zh: "工作人员问你需要什么。", answer: "I want to mail this card." },
    { id: "post-where", speaker: "工作人员", prompt: "Where is it going?", zh: "工作人员问寄到哪里。", answer: "It's going to China." },
    { id: "post-stamp", speaker: "工作人员", prompt: "Do you need a stamp?", zh: "工作人员问你要不要邮票。", answer: "Yes, please." },
    { id: "post-box", speaker: "工作人员", prompt: "Put it in this box.", zh: "工作人员告诉你放进这个邮筒。", answer: "Okay. Thank you." },
    { id: "post-arrive", speaker: "工作人员", prompt: "It should arrive next week.", zh: "工作人员说下周应该能到。", answer: "Great. Thanks." }
  ],
  bank: [
    { id: "bank-atm", speaker: "工作人员", prompt: "How can I help?", zh: "工作人员问你需要什么。", answer: "I need to use the ATM." },
    { id: "bank-cash", speaker: "家人", prompt: "Do you need cash?", zh: "家人问你需不需要现金。", answer: "Yes, a little cash." },
    { id: "bank-line", speaker: "工作人员", prompt: "Please wait in line.", zh: "工作人员让你排队等候。", answer: "Okay. I'll wait here." },
    { id: "bank-card", speaker: "家人", prompt: "Do you have your card?", zh: "家人问你有没有卡。", answer: "Yes, I have it." },
    { id: "bank-else", speaker: "工作人员", prompt: "Anything else?", zh: "工作人员问还有别的吗。", answer: "No, thank you." }
  ],
  police: [
    { id: "police-lost", speaker: "警察", prompt: "Are you lost?", zh: "警察问你是不是迷路了。", answer: "Yes, I can't find my dad." },
    { id: "police-name", speaker: "警察", prompt: "What's your name?", zh: "警察问你的名字。", answer: "My name is Leo." },
    { id: "police-phone", speaker: "警察", prompt: "Do you know his phone number?", zh: "警察问你知不知道爸爸电话。", answer: "Yes, I know it." },
    { id: "police-stay", speaker: "警察", prompt: "Stay here with me.", zh: "警察让你在这里等。", answer: "Okay. Thank you." },
    { id: "police-safe", speaker: "警察", prompt: "You're safe now.", zh: "警察告诉你现在安全了。", answer: "Thank you for helping me." }
  ],
  friend: [
    { id: "friend-come", speaker: "朋友", prompt: "Come in.", zh: "朋友请你进门。", answer: "Thank you for having me." },
    { id: "friend-play", speaker: "朋友", prompt: "Want to play?", zh: "朋友问你要不要玩。", answer: "Yes, what should we play?" },
    { id: "friend-juice", speaker: "朋友家长", prompt: "Do you want juice?", zh: "朋友家长问你要不要果汁。", answer: "Yes, please." },
    { id: "friend-clean", speaker: "朋友", prompt: "Let's clean up.", zh: "朋友说一起收拾。", answer: "Okay. I'll help." },
    { id: "friend-bye", speaker: "朋友", prompt: "See you tomorrow.", zh: "朋友跟你说明天见。", answer: "See you tomorrow." }
  ],
  birthday: [
    { id: "birthday-greet", speaker: "朋友", prompt: "Happy birthday!", zh: "朋友祝你生日快乐。", answer: "Thank you." },
    { id: "birthday-cake", speaker: "家长", prompt: "Would you like cake?", zh: "家长问你要不要蛋糕。", answer: "Yes, please. A small piece." },
    { id: "birthday-wish", speaker: "朋友", prompt: "Make a wish.", zh: "朋友让你许愿。", answer: "Okay. I'm ready." },
    { id: "birthday-present", speaker: "朋友", prompt: "This is for you.", zh: "朋友给你礼物。", answer: "Thank you. That's so nice." },
    { id: "birthday-fun", speaker: "家长", prompt: "Did you have fun?", zh: "家长问你玩得开心吗。", answer: "Yes, I had a great time." }
  ],
  taxi: [
    { id: "taxi-where", speaker: "司机", prompt: "Where to?", zh: "司机问你去哪儿。", answer: "To the hotel, please." },
    { id: "taxi-buckle", speaker: "司机", prompt: "Can you buckle up?", zh: "司机提醒你系安全带。", answer: "Yes, I'm buckled." },
    { id: "taxi-entrance", speaker: "司机", prompt: "Which entrance?", zh: "司机问你到哪个入口。", answer: "The front entrance, please." },
    { id: "taxi-pay", speaker: "司机", prompt: "You can pay by card.", zh: "司机说可以刷卡。", answer: "Great. I'll use my card." },
    { id: "taxi-arrive", speaker: "司机", prompt: "Here we are.", zh: "司机说到了。", answer: "Thank you. Keep the change." }
  ]
});

const state = {
  destination: destinations[0],
  transport: transports[1],
  destinationPage: 0,
  stepIndex: 0,
  hintLevel: 0,
  completedStepIds: new Set(),
  tickets: loadTickets()
};

let currentAudio = null;

const destinationGrid = document.querySelector("#destinationGrid");
const prevPageBtn = document.querySelector("#prevPageBtn");
const nextPageBtn = document.querySelector("#nextPageBtn");
const pageDots = document.querySelector("#pageDots");
const missionCard = document.querySelector("#missionCard");
const speakBtn = document.querySelector("#speakBtn");
const nextBtn = document.querySelector("#nextBtn");
const hintBtn = document.querySelector("#hintBtn");
const resetBtn = document.querySelector("#resetBtn");
const clearPassportBtn = document.querySelector("#clearPassportBtn");
const passport = document.querySelector("#passport");
const phraseList = document.querySelector("#phraseList");
const ticketCount = document.querySelector("#ticketCount");
const levelBadge = document.querySelector("#levelBadge");

function loadTickets() {
  try {
    return JSON.parse(localStorage.getItem("transportEnglishTickets") || "[]");
  } catch {
    return [];
  }
}

function saveTickets() {
  localStorage.setItem("transportEnglishTickets", JSON.stringify(state.tickets));
}

function renderDestinations() {
  const pageCount = getDestinationPageCount();
  const start = state.destinationPage * destinationsPerPage;
  const pageDestinations = destinations.slice(start, start + destinationsPerPage);

  destinationGrid.innerHTML = pageDestinations
    .map(
      (place) => `
        <button class="destination-button ${place.id === state.destination.id ? "is-active" : ""}" type="button" data-destination="${place.id}">
          <span class="place-icon" aria-hidden="true">${place.icon}</span>
          <span class="place-cn">${place.cn}</span>
          <span class="place-en">${place.en}</span>
        </button>
      `
    )
    .join("");
  pageDots.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const label = `第 ${index + 1} 页目的地`;
    return `<button class="page-dot ${index === state.destinationPage ? "is-active" : ""}" type="button" data-page="${index}" aria-label="${label}" title="${label}"></button>`;
  }).join("");
  prevPageBtn.disabled = state.destinationPage === 0;
  nextPageBtn.disabled = state.destinationPage === pageCount - 1;
}

function getDestinationPageCount() {
  return Math.ceil(destinations.length / destinationsPerPage);
}

function setDestinationPage(page) {
  const pageCount = getDestinationPageCount();
  state.destinationPage = Math.max(0, Math.min(page, pageCount - 1));
  renderDestinations();
}

function showSelectedDestinationPage() {
  const selectedIndex = destinations.findIndex((place) => place.id === state.destination.id);
  if (selectedIndex >= 0) state.destinationPage = Math.floor(selectedIndex / destinationsPerPage);
}

function getCurrentStep() {
  return getLessonSteps()[state.stepIndex];
}

function getLessonSteps() {
  return [travelStartStep, ...destinationMissions[state.destination.id]];
}

function resolveValue(value) {
  return typeof value === "function" ? value(state) : value;
}

function getCorrectAnswer(step = getCurrentStep()) {
  return step.answer ? resolveValue(step.answer) : "";
}

function getOptions(step) {
  const correct = getCorrectAnswer(step);
  const distractors = step.distractors ? resolveValue(step.distractors) : getDefaultDistractors(step);
  const options = [correct, ...distractors];
  return options.sort((a, b) => seededSortValue(a) - seededSortValue(b));
}

function getDefaultDistractors(step) {
  const answers = destinationMissions[state.destination.id]
    .filter((missionStep) => missionStep.id !== step.id)
    .map((missionStep) => missionStep.answer);
  return answers.sort((a, b) => seededSortValue(a) - seededSortValue(b)).slice(0, 2);
}

function seededSortValue(text) {
  let total = state.stepIndex + state.destination.id.length;
  for (const char of text) total += char.charCodeAt(0);
  return total % 17;
}

function renderMission() {
  const lessonSteps = getLessonSteps();
  const step = getCurrentStep();
  const prompt = resolveValue(step.prompt);
  const vehicleClass = state.transport.className;
  const stepLabel = `${state.stepIndex + 1} / ${lessonSteps.length}`;
  const body =
    step.type === "transport"
      ? renderTransportPicker()
      : renderAnswerChoices(step);

  missionCard.innerHTML = `
    <div class="scene-visual" aria-hidden="true">
      <div class="vehicle ${vehicleClass}">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="speech">
      <p class="speaker">${stepLabel} · ${step.speaker}</p>
      <p class="english-line">${prompt}</p>
      <p class="chinese-line">${step.zh}</p>
    </div>
    ${body}
    <p id="feedback" class="feedback">${getDefaultFeedback(step)}</p>
  `;

  nextBtn.textContent = state.stepIndex === lessonSteps.length - 1 ? "完成任务" : "下一步";
  hintBtn.disabled = step.type === "transport";
}

function renderTransportPicker() {
  return `
    <div class="choice-row" aria-label="选择交通工具">
      ${transports
        .map(
          (transport) => `
            <button class="transport-button ${transport.id === state.transport.id ? "is-active" : ""}" type="button" data-transport="${transport.id}">
              <span>${transport.cn}</span>
              <span>${transport.en}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderAnswerChoices(step) {
  return `
    <div class="answer-grid" aria-label="选择英文回答">
      ${getOptions(step)
        .map(
          (option) => `
            <button class="answer-button" type="button" data-answer="${escapeAttribute(option)}">
              ${option}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function getDefaultFeedback(step) {
  if (step.type === "transport") {
    return `今天去 ${state.destination.cn}，先选择一种交通工具。`;
  }
  if (state.completedStepIds.has(step.id)) {
    return "这一句已经通过，可以继续前进。";
  }
  return "听一听，再选一句最能解决问题的英文。";
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function handleAnswer(answer) {
  const step = getCurrentStep();
  const correct = getCorrectAnswer(step);
  const feedback = document.querySelector("#feedback");
  const buttons = [...document.querySelectorAll(".answer-button")];

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === correct) button.classList.add("is-correct");
    if (button.dataset.answer === answer && answer !== correct) button.classList.add("is-wrong");
  });

  if (answer === correct) {
    state.completedStepIds.add(step.id);
    feedback.textContent = `答对了。今天会用：${correct}`;
    speak(correct);
  } else {
    feedback.textContent = `差一点。我们要表达的是：${correct}`;
    speak(correct);
  }
  renderProgress();
}

function nextStep() {
  const lessonSteps = getLessonSteps();
  const step = getCurrentStep();
  if (step.type !== "transport" && !state.completedStepIds.has(step.id)) {
    document.querySelector("#feedback").textContent = "先选对一句英文，再继续前进。";
    speak(getCorrectAnswer(step));
    return;
  }

  if (state.stepIndex < lessonSteps.length - 1) {
    state.stepIndex += 1;
    state.hintLevel = 0;
    render();
    speak(resolveValue(getCurrentStep().prompt));
    return;
  }

  addTicket();
}

function addTicket() {
  const key = `${state.destination.id}-${state.transport.id}`;
  const exists = state.tickets.some((ticket) => ticket.key === key);
  if (!exists) {
    state.tickets.push({
      key,
      destinationCn: state.destination.cn,
      destinationEn: state.destination.en,
      transportCn: state.transport.cn,
      transportEn: state.transport.en,
      ticketName: state.transport.ticket,
      date: new Date().toLocaleDateString("zh-CN")
    });
    saveTickets();
  }

  const feedback = document.querySelector("#feedback");
  feedback.textContent = exists ? "这条路线已经盖过章了。换个目的地继续探险吧。" : "任务完成。新的车票已经贴进交通护照。";
  renderPassport();
  renderProgress();
}

function giveHint() {
  const step = getCurrentStep();
  if (step.type === "transport") return;

  state.hintLevel = Math.min(state.hintLevel + 1, 3);
  const correct = getCorrectAnswer(step);
  const feedback = document.querySelector("#feedback");

  if (state.hintLevel === 1) {
    feedback.textContent = `听关键词：${correct.split(" ").slice(0, 3).join(" ")} ...`;
  } else if (state.hintLevel === 2) {
    feedback.textContent = makeBlankHint(correct);
  } else {
    feedback.textContent = `完整句子：${correct}`;
    speak(correct);
  }
}

function makeBlankHint(sentence) {
  const words = sentence.split(" ");
  if (words.length < 4) return sentence;
  words[words.length - 1] = "____";
  return words.join(" ");
}

function renderPassport() {
  if (!state.tickets.length) {
    passport.innerHTML = `<p class="empty-state">完成第一条路线后，这里会出现你的电子车票。</p>`;
    return;
  }

  passport.innerHTML = state.tickets
    .map(
      (ticket) => `
        <article class="ticket">
          <strong>${ticket.ticketName}</strong>
          <span>${ticket.transportCn} · ${ticket.destinationCn}</span>
          <span>${ticket.destinationEn} · ${ticket.date}</span>
        </article>
      `
    )
    .join("");
}

function renderPhrases() {
  const phrases = destinationMissions[state.destination.id].map((step) => step.answer);

  phraseList.innerHTML = phrases.map((phrase) => `<span class="phrase-chip">${phrase}</span>`).join("");
}

function renderProgress() {
  const completed = state.completedStepIds.size;
  const ticketTotal = state.tickets.length;
  ticketCount.textContent = `${ticketTotal} 张车票`;

  if (ticketTotal >= 6) {
    levelBadge.textContent = "Level 3 小地铁探险家";
  } else if (ticketTotal >= 3) {
    levelBadge.textContent = "Level 2 小售票员";
  } else {
    levelBadge.textContent = completed >= 3 ? "Level 1 小乘客+" : "Level 1 小乘客";
  }
}

function speak(text) {
  const cleanText = normalizeSpeechText(text);
  const edgeAudioUrl = window.EDGE_TTS_AUDIO?.[cleanText];

  if (edgeAudioUrl) {
    playEdgeAudio(edgeAudioUrl, cleanText);
    return;
  }

  speakWithBrowserVoice(cleanText);
}

function normalizeSpeechText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function playEdgeAudio(url, fallbackText) {
  document.documentElement.dataset.lastAudioSource = "edge-tts";
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();

  currentAudio = new Audio(url);
  currentAudio.play().catch(() => speakWithBrowserVoice(fallbackText));
}

function speakWithBrowserVoice(text) {
  document.documentElement.dataset.lastAudioSource = "browser";
  if (!("speechSynthesis" in window) || !text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find((voice) => /Ava|Jenny|Aria|Microsoft/i.test(voice.name));
  if (preferredVoice) utterance.voice = preferredVoice;
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1.08;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function resetMission() {
  state.stepIndex = 0;
  state.hintLevel = 0;
  state.completedStepIds = new Set();
  render();
}

function render() {
  document.documentElement.dataset.edgeAudioCount = String(Object.keys(window.EDGE_TTS_AUDIO || {}).length);
  renderDestinations();
  renderMission();
  renderPassport();
  renderPhrases();
  renderProgress();
}

destinationGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-destination]");
  if (!button) return;
  const nextDestination = destinations.find((place) => place.id === button.dataset.destination);
  if (!nextDestination) return;
  state.destination = nextDestination;
  showSelectedDestinationPage();
  resetMission();
});

pageDots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  setDestinationPage(Number(button.dataset.page));
});

prevPageBtn.addEventListener("click", () => setDestinationPage(state.destinationPage - 1));
nextPageBtn.addEventListener("click", () => setDestinationPage(state.destinationPage + 1));

missionCard.addEventListener("click", (event) => {
  const transportButton = event.target.closest("[data-transport]");
  if (transportButton) {
    const nextTransport = transports.find((transport) => transport.id === transportButton.dataset.transport);
    if (nextTransport) {
      state.transport = nextTransport;
      renderMission();
      speak(nextTransport.en);
    }
    return;
  }

  const answerButton = event.target.closest("[data-answer]");
  if (answerButton) handleAnswer(answerButton.dataset.answer);
});

speakBtn.addEventListener("click", () => {
  const step = getCurrentStep();
  speak(step.type === "transport" ? state.transport.en : resolveValue(step.prompt));
});

nextBtn.addEventListener("click", nextStep);
hintBtn.addEventListener("click", giveHint);
resetBtn.addEventListener("click", resetMission);
clearPassportBtn.addEventListener("click", () => {
  state.tickets = [];
  saveTickets();
  renderPassport();
  renderProgress();
});

render();
