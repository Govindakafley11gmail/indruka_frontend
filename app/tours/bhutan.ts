import type { Tour } from "./tourtype";

export const bhutanTours: Tour[] = [
 
  {
    id: 512,
    country: "Bhutan",
    place: "Paro",
    title: "Bhutan Tour with Haa Valley",
    type: "Cultural",
    duration: "11 Days / 10 Nights",
    durationTag: "11 Days",
    startEnd: "Paro → Thimphu → Punakha → Bumthang → Haa → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Punakha",
      "Phobjikha Valley",
      "Bumthang",
      "Tang Valley",
      "Haa Valley",
    ],
    amenities: ["Hotel & Homestay", "Meals", "Transfers", "Sightseeing"],
    price: 2170,
    rating: 4.9,
    reviews: 59,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/photo13.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Home", label: "Homestay", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Mountain", label: "Hiking", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Landmark", label: "Culture", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Hike to Paro Taktsang — Sacred Tiger's Nest Monastery at 3,120m",
      },
      { title: "Scenic Himalayan Views — Dochula Pass & Himalayan Panorama" },
      {
        title:
          "Haa Panorama Trail — Pine Forests & Sacred Peak of Meri Puensum",
      },
      { title: "Thimphu City Tour — Buddha Dordenma & Memorial Chorten" },
      { title: "Chele La Pass — Prayer Flags & Sweeping Himalayan Vistas" },
      {
        title:
          "Historic Haa Valley Discovery — Authentic Homestay & Hot Stone Bath",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/photo13.jpg",
      alt: "Bhutan Tour with Haa Valley — Paro to Bumthang via Punakha and Haa",
    },

    testimonials: [],
    thumbnails: [
        {
        id: 1,
        src: "/photo13.jpg",
        alt: "Haa Dzong",
      },
      {
        id: 2,
        src: "/doc3.jpg",
        alt: "Haa Dzongkhag",
      },
      {
        id: 3,
        src: "/tigers-nest-path.jpg",
        alt: "haa places",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Bhutan Tour with Haa Valley" },
    ],

    badges: [
      { label: "FEATURED", variant: "solid" as const, color: "orange" },
      { label: "11 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 11,
    countryCount: 1,
    cityCount: 7,
    region: "Kingdom of Bhutan",
    maxGuests: 16,

    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Punakha", nights: 1 },
      { city: "Phobjikha Valley", nights: 1 },
      { city: "Tang Valley", nights: 1 },
      { city: "Bumthang", nights: 1 },
      { city: "Thimphu (Return)", nights: 1 },
      { city: "Haa Valley", nights: 1 },
      { city: "Paro", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Into the Kingdom — Arrival in Paro & Drive to Thimphu",
        details: [
          "Arrive at Paro International Airport greeted by a breathtaking aerial panorama of snow-capped Himalayan peaks on descent into the narrow Paro Valley.",
          "Clear immigration and customs at one of the world's most dramatically situated airports, framed by the iconic silhouettes of Paro Dzong and Ta Dzong along the Pa Chu River.",
          "Receive a warm traditional welcome from your guide before beginning the scenic drive eastward towards Thimphu.",
          "En route, stop near Chhuzom at the sacred Tachog Lhakhang — a revered temple with deep spiritual significance dating back to the 14th century.",
          "Cross the traditional iron chain bridge over the river, a masterpiece of ancient engineering crafted by the legendary Bhutanese bridge-builder Thangtong Gyalpo.",
          "Learn about the temple's fascinating history — having survived devastating floods over the centuries and been lovingly restored, it stands as a symbol of faith and resilience.",
          "Arrive in Thimphu, Bhutan's capital city, by early evening and check in to your hotel, settling into the calm, unhurried rhythm of the Himalayan kingdom.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Thimphu's Living Heritage — Chortens, Buddha Point & Dzong",
        details: [
          "Begin the morning at Memorial Chorten, one of Thimphu's most sacred landmarks, where locals gather in quiet devotion and spin prayer wheels in a timeless daily ritual.",
          "Drive up to Kuensel Phodrang to visit Buddha Dordenma, one of the largest Buddha statues in the world, commanding sweeping views across the entire Thimphu Valley.",
          "Discover that the magnificent statue shelters thousands of smaller golden Buddhas within its interior, adding layers of spiritual depth to this iconic site.",
          "Opt for a scenic hike from Buddha Point towards Changangkha Lhakhang, winding through quiet forest trails and open ridgelines for an intimate view of the city.",
          "Explore the vibrant local vegetable market in the afternoon, where farmers and vendors create a colorful, lively snapshot of everyday Bhutanese life.",
          "Visit the majestic Tashichho Dzong by the Wang Chhu river as the day draws to a close — its whitewashed walls and golden roofs glowing softly in the evening light.",
          "Reflect on a full day steeped in culture and spirituality as the calm rhythm of Thimphu settles into a peaceful overnight stay.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Punakha",
        details: [
          "Depart Thimphu and begin a steady climb towards the breathtaking Dochula Pass, sitting at over 3,000 meters above sea level.",
          "Arrive at the pass to find rows of 108 sacred chortens and, on a clear day, stunning views of the Himalayan giants including Gangkar Puensum — Bhutan's highest unclimbed peak.",
          "Take an optional detour to Tashigang Goenpa, the starting point for the rewarding Lungchutse hike through rhododendron forests and prayer-flag-lined ridges.",
          "Alternatively, follow the scenic Trans Bhutan Trail descending through Thinleygang — a peaceful route through ancient villages carrying the spirit of old Bhutan.",
          "Continue the drive as the road drops dramatically into the warmer Wangduephodrang district, where the landscape shifts from highland cool to subtropical lush.",
          "Arrive in Punakha Valley, where rice fields appear along the riverbanks and the air feels noticeably warmer compared to the highlands left behind.",
          "Check in and unwind in one of Bhutan's most fertile and historically significant valleys, formerly the capital of the kingdom. Overnight Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Punakha → Chimi Lhakhang → Phobjikha Valley",
        details: [
          "Begin the morning with a visit to the awe-inspiring Punakha Dzong, a masterpiece of Bhutanese architecture standing proudly at the confluence of the Pho Chhu and Mo Chhu rivers.",
          "Explore the dzong's richly decorated courtyards and corridors, layered with centuries of royal history and spiritual significance as the former seat of Bhutan's government.",
          "Take a gentle walk through golden rice paddies to reach Chimi Lhakhang, a small yet deeply revered temple dedicated to the beloved and unconventional saint Drukpa Kuenley.",
          "Receive blessings at the temple, a cherished tradition for visitors and pilgrims alike, in a setting of serene rural beauty.",
          "Make a brief stop at the commanding Wangdue Phodrang Dzong, perched dramatically above the valley, before the road begins its climb into cooler mountain terrain.",
          "Arrive in the wide, glacial expanse of Phobjikha Valley — a protected wildlife reserve and seasonal home of the graceful Black-necked Crane, revered in Bhutanese culture.",
          "Visit the sacred Gangtey Monastery, perched above the valley floor and quietly watching over the land, before settling in for a crisp, peaceful evening. Overnight Phobjikha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Phobjikha → Trongsa Dzong → Tang Valley",
        details: [
          "Start the morning with a gentle walk along the Gangtey Nature Trail, a peaceful route through open meadows, pine forests, and quiet farming villages.",
          "Visit Gangtey Monastery and nearby temples that anchor the deep spiritual essence of the Phobjikha Valley before departing eastward.",
          "Stop at the striking Chendebji Chorten en route, its design echoing the famous Swayambhunath Stupa of Nepal and rooted in ancient legends of subduing dark forces.",
          "Reach the dramatic Trongsa Dzong, dramatically perched along a narrow ridge and once the strategic stronghold from which Bhutan's kings shaped the nation's destiny.",
          "Explore the dzong's historic corridors and courtyards, which still carry the powerful weight of Bhutan's royal and political history.",
          "Continue into the spiritual heartland of Bumthang, where the valleys widen, rivers soften, and a deeper sense of sacred heritage begins to unfold.",
          "Visit the historic Ogyen Choling Palace for a fascinating glimpse into the aristocratic life of Bhutan's noble past before arriving at Tang Valley for the night. Overnight Tang Valley.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Bumthang — Ogyen Choling, Jambay Lhakhang & Kurje Lhakhang",
        details: [
          "Begin the day at Ogyen Choling Museum, where centuries-old artifacts, thangkas, and royal heirlooms bring Bhutan's noble past vividly and intimately to life.",
          "The museum's guesthouse occasionally offers the rare privilege of an evening conversation with Walter Roder, whose deep personal connection to Bhutan adds remarkable depth to the visit.",
          "Return to the valley and visit Jambay Lhakhang, one of the oldest and most revered temples in Bhutan, believed to have been built in the 7th century by Tibetan King Songtsen Gampo.",
          "Proceed to the sacred Kurje Lhakhang, where Guru Rinpoche is believed to have meditated and left the imprint of his body after subduing a powerful local demon — making it one of Bhutan's most hallowed pilgrimage sites.",
          "Explore the three temples that make up the Kurje Lhakhang complex, each carrying layers of spiritual and historical significance unique to Bumthang.",
          "In the afternoon, visit Jakar Dzong — gracefully perched above the valley with sweeping views, its whitewashed walls capturing both the strategic and spiritual essence of the region.",
          "As evening settles over Bumthang, soak in the atmosphere of this living sanctuary, quietly echoing with centuries of devotion and timeless beauty. Overnight Bumthang.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Scenic Return — Bumthang to Thimphu",
        details: [
          "Bid farewell to the serene valleys of Bumthang after breakfast and begin the long, meditative drive back towards Thimphu along the kingdom's central mountain spine.",
          "Pass through the dramatic Trongsa Dzong once more, its commanding ridge-top presence just as striking on the return journey as on the way in.",
          "Climb steadily through winding mountain roads, watching the landscape shift from the warm, forested valleys of Bumthang to the cooler, misty highlands.",
          "Ascend to the scenic heights of Dochula Pass for a final opportunity to soak in the panoramic Himalayan views, weather permitting.",
          "Pause at the 108 chortens of Dochula, a reflective spot to absorb the grandeur of the mountains and the quiet spirituality of this high-altitude landmark.",
          "As the road descends and the capital comes into view, the familiar rhythm of Thimphu gradually returns — a gentle transition from the remote east back to city life.",
          "Arrive Thimphu by evening for a calm and restful overnight stay, bringing the eastern journey to a peaceful close. Overnight Thimphu.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Paro → Chele La Pass → Haa Valley Homestay",
        details: [
          "Depart after breakfast from Paro, heading westward on a road that gradually winds upward toward one of Bhutan's most scenic high-altitude passes.",
          "Arrive at Chele La Pass, sitting at approximately 3,988 meters, where colorful prayer flags flutter wildly in the mountain breeze against a backdrop of sweeping Himalayan ridgelines.",
          "Enjoy panoramic views from the pass, with clear days offering sightlines to Bhutan's sacred Jhomolhari and Jichu Drake peaks rising above the horizon.",
          "Descend into the secluded Haa Valley, one of Bhutan's least-visited and most authentically preserved regions, where traditions remain deeply rooted and the pace of life is wonderfully unhurried.",
          "Check in to a local farmhouse homestay for an immersive and intimate experience — shared meals, quiet conversations by the hearth, and the simple warmth of Bhutanese family hospitality.",
          "As the evening deepens, prepare for a traditional Bhutanese hot stone bath (menchu), where river stones heated in a fire are placed in a wooden tub, releasing minerals into the water.",
          "Let the soothing warmth of the menchu ease tired muscles after the day's journey, bringing the evening to a deeply relaxed and restorative close. Overnight Haa.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Farewell to the Hidden Valley — Haa Panorama Trail & Return to Paro",
        details: [
          "Rise early and begin the morning with the scenic Haa Panorama Hiking Trail, starting near the peaceful Yangthang Gonpa at the edge of the valley.",
          "Follow the trail as it winds through fragrant pine and fir forests, with birdsong and the soft crunch of the path underfoot creating a deeply grounding sense of calm.",
          "As the trail climbs, the treeline opens up to sweeping panoramic views across the Haa Valley, revealing the sacred triple peaks of Meri Puensum and distant Himalayan ridges.",
          "The hike offers a sense of quiet expansion — both physically and spiritually — as the valley unfolds far below and the mountain silence wraps around you.",
          "Descend from the trail and enjoy a relaxed lunch in Haa town, savoring a final taste of this hidden valley's peaceful charm before the return journey.",
          "Retrace the route back over the windswept heights of Chele La Pass, where prayer flags dance one last time against the vast Himalayan sky.",
          "Descend into the familiar warmth of Paro Valley by evening, arriving with a reflective sense of having discovered one of Bhutan's most authentic and lesser-known corners. Overnight Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Paro — Tiger's Nest Hike & Rinpung Dzong",
        details: [
          "Begin Bhutan's most iconic experience with an early morning start toward Paro Taktsang — the legendary Tiger's Nest Monastery perched impossibly on a cliffside at 3,120 meters.",
          "The trail ascends steadily through beautiful blue pine forests and corridors of fluttering prayer flags, with each turn revealing increasingly dramatic views of the monastery clinging to the rock face.",
          "Pause at the Taktsang Cafeteria at the halfway point, where a panoramic viewpoint delivers one of the most breathtaking perspectives of the sacred site — a perfect spot to rest and absorb the moment.",
          "Continue the final ascent to the monastery complex itself, a deeply spiritual experience believed to be the site where Guru Rinpoche meditated in the 8th century after flying here on the back of a tigress.",
          "The full round-trip hike takes approximately 4 to 5 hours — an unforgettable physical and spiritual journey that forms the emotional highlight of the entire Bhutan tour.",
          "In the afternoon, visit Ta Dzong — once a strategic watchtower and now the National Museum — followed by the magnificent Rinpung Dzong standing proudly above the Paro River.",
          "End the evening with a leisurely stroll through Paro town, and optionally climb to Zuri Dzong for a quiet forest walk with panoramic valley views as the final act of this remarkable journey. Overnight Paro.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Departure",
        details: [
          "Wake up for a final breakfast in Paro, taking a quiet moment to reflect on eleven days of Himalayan wonder, sacred monasteries, and warm Bhutanese hospitality.",
          "Complete any last-minute packing and check out of the hotel, carrying memories of tiger nests, hidden valleys, and mountain passes that will linger long after the journey ends.",
          "Transfer to Paro International Airport for your flight to your onward destination, departing the Kingdom of Bhutan with a heart full of gratitude and wonder.",
        ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "11 Days / 10 Nights" },
      {
        label: "Destinations",
        value:
          "Paro · Thimphu · Punakha · Phobjikha Valley · Bumthang · Tang Valley · Haa Valley",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-HAA-PBH-11" },
      {
        label: "Meals",
        value:
          "Breakfast , lunch & Dinner daily; Traditional homestay meals included in Haa Valley",
      },
      { label: "Best Time", value: "March–May & September–November" },
      { label: "Group Size", value: "Max 16 Guests" },
    ],

  },
  {
    id: 513,
    country: "Bhutan",
    place: "Paro",
    title: "Jomolhari Trekking in Bhutan",
    type: "Adventure",
    duration: "12 Days / 11 Nights",
    durationTag: "12 Days",
    startEnd:
      "Paro → Shingkharap → Jangothang → Lingzhi → Thimphu → Punakha → Paro",
    destinations: [
      "Paro",
      "Shingkharap",
      "Soi Thangkha",
      "Jangothang",
      "Lingzhi",
      "Shodu",
      "Thimphu",
      "Punakha",
    ],
    amenities: ["Hotel & Camp", "Meals", "Transfers", "Sightseeing"],
    price: 3799, // To be filled
    rating: 0, // To be filled
    reviews: 0, // To be filled
    badge: "Adventure",
    badgeColor: "bg-green-700",
    mode: "Trek",
    src: "/Jomolhari.jpg", // To be filled
    popular: true,

    tourFeatures: [
      { icon: "Tent", label: "Camp Stay", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Mountain", label: "Trekking", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Landmark", label: "Culture", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Hike to Paro Taktsang — Sacred Tiger's Nest Monastery at 3,120m",
      },
      {
        title:
          "Remote Himalayan Camping — Nights Under the Stars at High Altitude",
      },
      { title: "Jomolhari Base Camp — Sacred Peak Views at 4,040m" },
      {
        title:
          "Neyle La & Yale La — Crossing Two Dramatic High-Altitude Passes",
      },
      { title: "Tshophu Twin Lakes — Mirror-Like Alpine Waters at 4,400m" },
      {
        title:
          "Lingzhi Dzong — Remote Historic Fortress in an Untouched Valley",
      },
    ],

    tourManagerCompany: "", // To be filled

    heroImage: {
      src:  "/Jomolhari1.jpg", // To be filled
      alt: "Jomolhari Trekking in Bhutan — Paro to Thimphu via Jangothang and Lingzhi",
    },

    testimonials: [], // To be filled
    thumbnails: [
        {
        id: 1,
        src: "/Jomolhari2.png",
        alt: "Jomolhari2",
      },
      {
        id: 2,
        src: "/Jomolhari3.jpg",
        alt: "Jomolhari3",
      },
      {
        id: 3,
        src: "/Jomolhari4.jpg",
        alt: "Jomolhari24",
      },
    ], // To be filled

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Jomolhari Trekking in Bhutan" },
    ],

    badges: [
      { label: "ADVENTURE", variant: "solid" as const, color: "green" },
      { label: "12 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 12,
    countryCount: 1,
    cityCount: 8,
    region: "Kingdom of Bhutan",
    maxGuests: 16,

    itineraryStops: [
      { city: "Paro", nights: 2 },
      { city: "Shingkharap", nights: 1 },
      { city: "Soi Thangkha", nights: 1 },
      { city: "Jangothang", nights: 2 },
      { city: "Lingzhi", nights: 1 },
      { city: "Shodu", nights: 1 },
      { city: "Thimphu", nights: 1 },
      { city: "Punakha", nights: 1 },
      { city: "Paro (Return)", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Touching Down in the Kingdom — Arrival in Paro",
        details: [
          "Arrive at Paro International Airport at 2,280m, greeted by one of the most spectacular flight approaches on earth — Himalayan peaks including Everest and Kanchenjunga visible on clear days.",
          "Clear airport formalities and transfer to your hotel through the pine-covered valley, with whitewashed farmhouses and quiet Bhutanese charm lining the route.",
          "Enjoy a relaxed welcome lunch and settle into the gentle, unhurried rhythm of Bhutanese time before the afternoon exploration begins.",
          "Visit the striking Rinpung Dzong, standing proudly above the Paro River — an architectural masterpiece layered with centuries of history and spiritual significance.",
          "Continue to Kichu Lhakhang, one of the oldest and most sacred temples in Bhutan, where the air carries a deep, reverent stillness that sets the spiritual tone for the journey.",
          "Explore the historic ruins of Drukgyal Dzong, where stories of old battles and Bhutanese resilience linger in the mountain breeze.",
          "End the day with a leisurely stroll through Paro town, absorbing its neat wooden shopfronts and soft valley light before retiring for the night. Overnight Paro.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Tiger's Nest Monastery Hike",
        details: [
          "Begin the morning with a short drive to the Taktsang trailhead, where the path immediately immerses you in a forest of fluttering prayer flags and whispering blue pines.",
          "Ascend steadily over 4–5 hours to reach Paro Taktsang at 3,120m — Bhutan's most iconic monastery clinging impossibly to a sheer cliffside above the valley.",
          "Be rewarded at every turn with sweeping panoramic views of the Paro Valley unfolding far below, deepening in beauty with every step of the climb.",
          "Arrive at the monastery complex, where Guru Rinpoche is believed to have meditated in the 8th century — a moment of profound stillness that is difficult to put into words.",
          "Explore the sacred halls and temples within the complex, each chamber carrying centuries of devotion and spiritual energy rooted deep in the mountain rock.",
          "Descend along the same forested trail, a little easier on the legs and equally beautiful, bringing a well-earned sense of accomplishment back to Paro.",
          "Spend the evening at leisure to rest, reflect, and quietly relive the day's unforgettable climb before the trek begins tomorrow. Overnight Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Paro → Shingkharap — Trek Begins",
        details: [
          "Drive from Paro toward Gunitsawa, the true starting point of the Jomolhari Trek, where permits are checked and the trail officially begins.",
          "Set off on a pleasant 9 km walk over 4–5 hours, immediately entering a sense of mountain solitude as the last signs of everyday life slowly fade behind.",
          "Follow the soothing rhythm of the Paro Chhu river, its steady flow becoming a peaceful companion through dense forests of blue pine and rhododendron.",
          "Walk a trail that feels almost meditative — soft underfoot, richly shaded, and alive with birdsong — making this first trekking day a gentle and welcoming introduction.",
          "Pass through occasional clearings in the forest that offer fleeting glimpses of distant peaks, building anticipation for the high Himalayan landscapes ahead.",
          "Ascend gradually to the campsite at Shingkharap at 3,110m, a quiet woodland retreat surrounded by towering trees and the sound of a nearby stream.",
          "Settle into the crisp mountain air of camp for the first time, as the hush of nature and a star-filled sky mark the true beginning of life on the trail. Overnight Shingkharap Camp.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Shingkharap → Soi Thangkha — Following the River into the High Forests",
        details: [
          "Begin a longer day on the trail, covering around 15 km over 5–6 hours, with the Pachu River continuing as a steady and soothing companion throughout.",
          "Walk through dense forests of pine, oak, and blooming rhododendron, the trail wrapped in deep greens and — in spring — vivid bursts of floral colour.",
          "Feel the landscape gradually shift in character as the altitude climbs to 3,670m, with the body beginning to sense the increasing height in the thinner, crisper air.",
          "The ascent is gradual and manageable, allowing time to appreciate the changing environment and occasional openings that reveal higher ridgelines ahead.",
          "Pause for trail snacks and rest stops along the river, soaking in the peaceful mountain silence punctuated only by birdsong and flowing water.",
          "Arrive at the campsite at Soi Thangkha in a wide alpine clearing beneath towering slopes, a setting that feels raw and beautifully remote.",
          "As evening settles over camp at high altitude, the mountains begin to reveal their quieter, more untamed side, far removed from the valleys left behind. Overnight Soi Thangkha Camp.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Soi Thangkha → Jangothang — Arrival at Jomolhari's Doorstep",
        details: [
          "Step beyond the tree line today as the trail climbs into vast, open high-altitude wilderness, where the sky feels closer and every breath carries the sharpness of altitude.",
          "Cover 17 km over approximately 4–5 hours, following the valley floor with a steady ascent past scattered yak herder settlements where traditional mountain life continues quietly.",
          "Watch the landscape transform dramatically — broad alpine meadows replace the forests, and the sense of space becomes almost overwhelming in its grandeur.",
          "As the altitude reaches 4,040m, the sacred Mount Jomolhari rises in commanding, almost otherworldly elegance directly ahead, one of Bhutan's most revered and spectacular peaks.",
          "Jichu Drake stands proudly nearby, its sharp ridgelines completing a view that makes this one of the most photogenic and awe-inspiring stretches of the entire trek.",
          "Arrive at Jangothang Base Camp, set in a wide open valley beneath these towering Himalayan giants — a place that feels simultaneously humbling and deeply exhilarating.",
          "As the sun dips behind snow-capped ridges, the peaks glow softly in the fading light, marking an unforgettable arrival at the true doorstep of the high Himalaya. Overnight Jangothang Camp.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jangothang — Acclimatization Day",
        details: [
          "Take a well-earned rest day at high altitude, allowing the body to acclimatize properly before the challenging passes ahead while soaking in the extraordinary mountain surroundings.",
          "Choose from optional gentle hikes of 2–4 hours up the surrounding ridges, each offering increasingly dramatic perspectives of the valley below and the towering peaks above.",
          "For those feeling strong, a rewarding climb to the Tshophu Twin Lakes at around 4,400m reveals still, mirror-like waters cradled beneath rugged alpine slopes — a scene of breathtaking serenity.",
          "Keep an eye on the hillsides for herds of blue sheep grazing peacefully along the slopes, a remarkable sight in this remote high-altitude wilderness.",
          "Scan the vast sky for the rare and exhilarating sight of a golden eagle soaring effortlessly above the mountain ridges on thermal currents.",
          "Return to camp and spend the remainder of the day resting, journaling, or simply sitting in the profound silence of the mountains.",
          "Let the altitude settle gently into the body as the evening closes in over Jangothang, preparing for the demanding days ahead. Overnight Jangothang Camp.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Jangothang → Lingzhi — Crossing Neyle La Pass",
        details: [
          "Begin the day with a steady, purposeful climb out of Jangothang, gaining altitude gradually as the trail winds toward the high and dramatic Neyle La Pass at 4,830m.",
          "The ascent demands patience and a measured pace, but each step upward rewards with increasingly sweeping views of snow-capped giants stretching across the horizon.",
          "Reach the top of Neyle La, where the world opens in every direction with panoramic Himalayan vistas that feel almost surreal in their scale and grandeur.",
          "Begin the descent from the pass into the remote and windswept Lingzhi valley, where the landscape feels raw, expansive, and wonderfully untouched by the outside world.",
          "Cover around 18 km over 6–7 hours, with the long day balanced by the extraordinary scenery and the deeply satisfying feeling of having crossed a major Himalayan pass.",
          "Arrive at the historic Lingzhi Dzong, perched dramatically on a ridge overlooking the valley, silently guarding this isolated region as it has for centuries.",
          "Set up camp near the dzong at 4,010m, surrounded by wide alpine plains and distant peaks, as the evening carries a quiet remoteness that few places on earth can offer. Overnight Lingzhi Camp.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Lingzhi → Shodu — Crossing Yale La Pass",
        details: [
          "Face one of the trek's most demanding days, with 19 km and approximately 7–8 hours of walking ahead, testing both physical endurance and mental resolve.",
          "Climb steadily toward Yale La at 4,942m — the highest pass on the entire trek — where the trail narrows and the air grows noticeably thinner with every upward step.",
          "As the altitude increases, the panoramic Himalayan views that unfold along the ascent become some of the most breathtaking of the entire journey — vast ridgelines, distant snow peaks, and open sky.",
          "Stand at the summit of Yale La, where a raw, untouched mountain energy fills the air and the sense of standing on the very spine of the Himalayas is unmistakable.",
          "Begin the long descent from the pass into the remote Shodu valley, where the terrain gradually softens into rolling alpine landscapes and wide-open silence.",
          "Feel the deep physical satisfaction of completing the trek's most challenging passage as the valley floor comes into view and the campsite appears beside the river.",
          "Settle in at camp at approximately 4,100m, surrounded by immense stillness, the day ending with a powerful sense of accomplishment. Overnight Shodu Camp.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Shodu → Thimphu — Farewell to the Mountains",
        details: [
          "Begin the final trekking day with a gentle descent alongside the Thimphu Chhu, the river's steady flow guiding the path back down through lush, welcoming landscapes.",
          "Walk through forests, past cascading waterfalls, and into greener, lower terrain that feels almost tropical after days spent in the high alpine wilderness.",
          "Cover around 16 km over 5–6 hours, with a bittersweet rhythm to each step — the mountains still towering behind as the familiar comforts of lower altitude slowly return.",
          "Pause at the atmospheric ruins of Barshong Dzong en route, its weathered stone walls standing as a quiet, final reminder of Bhutan's rich and layered history in these remote valleys.",
          "As the trek draws to its conclusion, the waiting vehicle marks the transition back to the world of roads and towns — a moment that carries both relief and a tinge of sadness.",
          "Drive into Thimphu, the capital city gradually reappearing with its familiar warmth and gentle buzz after days of mountain silence.",
          "Check in to the hotel, savour a hot shower and a proper bed, and allow the body and spirit to fully absorb the magnitude of what has been experienced on the trail. Overnight Thimphu.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Thimphu → Dochula Pass → Punakha",
        details: [
          "Begin the morning with a gentle exploration of Thimphu, starting at the peaceful National Memorial Chorten, where locals circle quietly in prayer in a timeless daily ritual.",
          "Visit the grand Buddha Dordenma, one of the largest Buddha statues in the world, overlooking the entire valley in serene, commanding silence.",
          "Stop at the Motithang Takin Preserve, home to the takin — Bhutan's wonderfully unique national animal — adding a touch of natural charm to the morning.",
          "Drive up to the breathtaking Dochula Pass at 3,100m, where 108 sacred chortens stand in neat rows and, on a clear day, a sweeping panorama of Himalayan peaks stretches endlessly into the distance.",
          "Descend from the pass into the warmer Punakha Valley, where the air softens, rice fields appear along the roadside, and the lush subtropical landscape feels like a welcome contrast to the highlands.",
          "Take a gentle walk through golden rice paddies to the fertility temple of Chimi Lhakhang, a deeply revered and charming site filled with local stories and quiet blessings.",
          "Arrive in Punakha by evening, settling into the hotel and enjoying the comforting warmth and greenery of one of Bhutan's most beautiful valleys. Overnight Punakha.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Punakha → Paro",
        details: [
          "Begin the morning at the magnificent Punakha Dzong, standing gracefully at the confluence of the Pho Chhu and Mo Chhu rivers — widely regarded as one of the most beautiful fortresses in Bhutan.",
          "Marvel at the intricate woodwork, painted courtyards, and serene riverside setting that make Punakha Dzong a true masterpiece of Bhutanese architecture and royal heritage.",
          "Cross the long Punakha Suspension Bridge just nearby, where prayer flags flutter above the rushing Pho Chhu below, adding a final touch of adventure to the morning.",
          "Depart toward Paro, retracing the scenic route through Thimphu where a pause at local markets offers the perfect chance to pick up last-minute souvenirs and handicrafts.",
          "Browse through the market stalls for traditional Bhutanese textiles, handcrafted jewelry, and locally made products — a colourful and lively end to the Thimphu chapter.",
          "Continue the 4–5 hour drive through familiar mountain passes and valleys, the journey carrying a reflective quality as Bhutan's landscapes pass by one final time.",
          "Arrive in Paro by evening with a calm, full-circle feeling — the same valley where the adventure first began now welcoming you back for one last peaceful night. Overnight Paro.",
        ],
      },
      {
        day: 12,
        date: "Day 12",
        title: "Departure from Paro",
        details: [
          "Wake up to a final, quiet morning in Paro, where the crisp mountain air and slow valley rhythm make the idea of leaving feel almost reluctant.",
          "Enjoy a last breakfast in Bhutan, taking a quiet moment to reflect on twelve extraordinary days of trekking, culture, and Himalayan wonder.",
          "Complete packing and check out, carrying with you not just souvenirs but a deeper connection to the spirit of Bhutan that will linger long after departure.",
          "Transfer to Paro International Airport, the same peaceful gateway through which this remarkable journey first began.",
          "As the flight lifts off and the valleys, rivers, and snow-capped peaks slowly dissolve beneath the clouds, let the memories of Jomolhari, Lingzhi, and the high passes settle into something permanent.",
        ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "12 Days / 11 Nights" },
      {
        label: "Destinations",
        value:
          "Paro · Shingkharap · Soi Thangkha · Jangothang · Lingzhi · Shodu · Thimphu · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-JOM-PBH-12" },
      {
        label: "Meals",
        value: "Breakfast , lunch & Dinner daily; All meals included during trek days",
      },
      { label: "Best Time", value: "April–June & September–November" },
      { label: "Group Size", value: "Max 16 Guests" },
      {
        label: "Trek Distance",
        value: "Approx. 94 km total trekking distance",
      },
      { label: "Max Altitude", value: "Yale La Pass at 4,942m" },
    ],

  },

  {
    id: 514,
    country: "Bhutan",
    place: "Paro",
    title: "Dagala Thousand Lakes Trek in Bhutan",
    type: "Adventure",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd:
      "Paro → Geynekha → Gur → Labatama → Kheri Khewa → Tshokam → Thimphu → Paro",
    destinations: [
      "Paro",
      "Geynekha",
      "Gur",
      "Labatama",
      "Kheri Khewa",
      "Tshokam",
      "Thimphu",
    ],
    amenities: ["Hotel & Camp", "Meals", "Transfers", "Sightseeing"],
    price: 3200,
    rating: 0,
    reviews: 0,
    badge: "Adventure",
    badgeColor: "bg-green-700",
    mode: "Trek",
    src: "/doc3.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Tent", label: "Camp Stay", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Mountain", label: "Trekking", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Landmark", label: "Culture", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Hike to Paro Taktsang — Sacred Tiger's Nest Monastery at 3,120m",
      },
      {
        title:
          "Dagala Highlands — A Thousand Glacial Lakes Scattered Across the Alpine Plateau",
      },
      { title: "Pagalabtsa La Pass — Panoramic Himalayan Views at 4,170m" },
      { title: "Highest Point Near Jomo Peak — Optional Climb to 4,716m" },
      {
        title:
          "Sacred Serbho Tsho & Neighbouring Lakes — Revered Highland Waters",
      },
      {
        title:
          "Lingzhi Dzong Ruins — Remote Historic Remnants Deep in the Trek",
      },
    ],
    tourManagerCompany: "",
    heroImage: {
      src: "/doc3.jpg",
      alt: "Dagala Thousand Lakes Trek in Bhutan — Paro to Thimphu via Dagala Highlands",
    },
    testimonials: [],
    thumbnails: [
       {
        id: 1,
        src: "/doc3.jpg",
        alt: "Dagala2",
      },
      {
        id: 2,
        src: "/vaishno-Hima8.jpg",
        alt: "Dagala3",
      },
      {
        id: 3,
        src: "/Dagala6.jpg",
        alt: "Dagala6",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Dagala Thousand Lakes Trek in Bhutan", href: "" },
    ],
    badges: [
      { label: "ADVENTURE", variant: "solid", color: "green" },
      { label: "9 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 9,
    countryCount: 1,
    cityCount: 7,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Paro", nights: 2 },
      { city: "Gur", nights: 1 },
      { city: "Labatama", nights: 1 },
      { city: "Kheri Khewa", nights: 1 },
      { city: "Tshokam", nights: 1 },
      { city: "Thimphu", nights: 1 },
      { city: "Paro (Return)", nights: 1 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Welcome into Paro Valley",
        details: [
          "At 2,280 metres above sea level, the experience begins with an unforgettable flight into Bhutan, where the Himalayan range unfolds in spectacular fashion and, on clear days, the legendary peaks of Everest and Kanchenjunga can be seen from the aircraft window.",
          "As the flight descends into Paro International Airport, the valley comes into view with its pine-clad slopes, whitewashed farmhouses, and peaceful scenery, offering a beautiful first impression of the kingdom.",
          "After completing airport formalities, take a short and easy transfer to the hotel, followed by a relaxed lunch and time to settle into Bhutan's gentle pace.",
          "In the afternoon, begin exploring Paro with a visit to Rinpung Dzong, an impressive fortress rising above the river, before continuing to Kichu Lhakhang, one of Bhutan's oldest and most sacred temples, known for its quiet and spiritual atmosphere.",
          "The journey then continues to the historic ruins of Drukgyal Dzong, a place that reflects stories of ancient battles and Bhutanese strength against the dramatic mountain backdrop.",
          "As evening approaches, enjoy a leisurely stroll through Paro town, where traditional wooden shopfronts, soft valley light, and a welcoming local atmosphere offer the first taste of Bhutanese charm, before spending the night at a hotel in Paro.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "The Sacred Climb to Tiger's Nest",
        details: [
          "After a wholesome Bhutanese breakfast, set out for one of the most iconic journeys in the Himalayas — the hike to Tiger's Nest Monastery, perched impossibly on a sheer cliff at 3,120 metres.",
          "The trail begins gently, winding through fragrant pine forests draped in fluttering prayer flags, each step feeling like walking deeper into a living spiritual story.",
          "It's a steady climb of about 2 to 3 hours to the top, though a horse ride is available halfway for those wishing to conserve energy for the final ascent.",
          "About midway, the cafeteria viewpoint offers the first breathtaking, postcard-perfect view of the monastery clinging to the rock face — a moment worth the journey in itself.",
          "From there, the path grows steeper, but the reward is profound; standing before Tiger's Nest carries a quiet stillness that is hard to put into words.",
          "After soaking it all in, the descent completes the 4 to 5-hour round trip, with the afternoon spent strolling through the charming streets of Paro town before settling in for another overnight in Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Paro → Geynekha → Gur — Trek Begins",
        details: [
          "Leaving Paro after breakfast, the drive to Geynekha takes about two hours, passing the iron bridge of Tachog Lhakhang and the sacred confluence at Chuzom, where the Paro Chu and Wang Chu rivers meet, each marked by chortens of different architectural styles.",
          "On reaching Geynekha at around 2,900 metres, the trek begins with a steady and forgiving ascent, weaving through open meadows before pulling deeper into oak forests where the air feels cooler, richer, and alive.",
          "Along the way, the quiet ruins of Genye Dzong stand as a reminder of stories long gone, before the trail climbs to a viewpoint at 3,200 metres offering sweeping views of the surrounding ridges.",
          "A gentle final push leads to the campsite at Gur, sitting peacefully at 3,350 metres.",
          "As the evening settles, the mountains glow softly and the highlands offer a kind of silence that only the mountains can provide — the first true night under Bhutan's trekking sky.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gur → Labatama — Crossing the High Pass",
        details: [
          "Leaving Gur, the trail rolls gently at first through alpine pastures around 3,440 metres, where yaks graze lazily and the landscape opens wide and wild.",
          "Climbing higher toward the shepherd huts of Gibze Kebze at 3,710 metres, the air begins to thin just a little, with the pace kept steady and in rhythm with the mountains.",
          "The highlight of the day is the ascent to Pagalabtsa La Pass at 4,170 metres — a steady push rewarded with panoramic views of the Dagala range stretching endlessly across the horizon, peaks layered like waves frozen in time.",
          "From the pass, the trail descends into a hidden highland world, where glacial lakes shimmer quietly in the distance and the vastness of Bhutan truly sinks in.",
          "The campsite at Labatama at 4,050 metres sits tucked in the heart of this remote alpine basin, where the evening brings dropping temperatures and an overwhelming sense of being far from the ordinary — right where Bhutan feels most untouched.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Labatama → Kheri Khewa — Heart of the Dagala Lakes",
        details: [
          "The trail leads deeper into the heart of the Dagala lakes region, where the landscape shifts into a surreal high-altitude world dotted with glacial lakes that shimmer like mirrors to the sky.",
          "Walking past Serbho Tsho and its neighbouring lakes, the stillness here feels blessed — these waters are considered sacred, and a quiet reverence fills the air.",
          "The trail climbs steadily toward the day's highest pass at 4,520 metres, rewarding with jaw-dropping views stretching all the way to Jomolhari and even Kanchenjunga far in the distance.",
          "For those with the energy, an optional push to a viewpoint near Jomo Peak at 4,716 metres offers one of the most memorable climbs of the entire journey.",
          "The descent leads to the campsite at Kheri Khewa at 4,350 metres, tucked into a quiet windswept valley where the lakes reflect the fading light and the mountains turn golden as evening falls.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Kheri Khewa → Tshokam — Descending the Highlands",
        details: [
          "The morning unfolds quietly in Kheri Khewa, with the mountains holding onto that crisp, untouched stillness that has become so familiar over the past days.",
          "The trail ahead is noticeably gentler, easing into a steady rhythm across open highland terrain where rolling ridges stretch endlessly under vast Bhutanese skies.",
          "A soft climb leads to a pass at around 4,200 metres — not demanding, but offering just enough elevation to reveal one last sweep of the surrounding ranges.",
          "From here, the journey begins its gradual descent, with the scenery becoming calmer and more expansive, and a peaceful silence inviting reflection on the days spent deep in the Dagala wilderness.",
          "The campsite at Tshokam — meaning 'Dried Lake' — appears wide and open, a fitting place for the final night in the mountains, where the fading light brushes the highlands in soft tones and the atmosphere carries a quiet sense of closure.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Tshokam → Chamgang → Thimphu — Farewell to the Mountains",
        details: [
          "The final morning in the highlands carries a quiet mix of satisfaction and nostalgia, as the trail begins its steady descent toward Chamgang over about four hours.",
          "The path winds down through changing landscapes — alpine terrain slowly giving way to forested slopes and warmer air, marking a gentle return to the valleys.",
          "At Chamgang, a heartfelt farewell to the trekking crew takes place before the vehicle awaits, their smiles, stories, and quiet strength woven into the experience.",
          "The drive to Thimphu feels like re-entering a different world, where the rhythm shifts from mountain silence to the subtle buzz of Bhutan's capital.",
          "By evening, the city offers a relaxed stroll or quiet rest, with its comforts providing a gentle landing after days in the wild.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Thimphu → Paro",
        details: [
          "The day begins in Thimphu with a visit to Buddha Dordenma, the massive statue sitting high above the valley with a calm that stays long after leaving.",
          "Down in the city, Norzin Lam brings a different energy, with local shops, cafés, and the gentle rhythm of daily Bhutanese life unfolding along the main street.",
          "The nearby handicraft market offers a delightful wander through intricate textiles, handmade souvenirs, and stories woven into every piece.",
          "A visit to Tashichho Dzong follows, an impressive fortress serving as the seat of the King and government, standing with quiet authority beside the river.",
          "As the day winds down, the drive back to Paro feels familiar and comforting, tracing the valleys once more before settling in for a peaceful overnight in Paro.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Departure from Paro",
        details: [
          "The final morning arrives in Paro, where the crisp mountain air and slow valley rhythm make it hard to say goodbye.",
          "After breakfast, a short transfer leads to Paro International Airport, the same peaceful gateway where the journey first began.",
          "As the flight lifts off, the valleys, rivers, and distant snow peaks slowly fade beneath the clouds, leaving behind not just memories of places visited, but a deeper connection to the spirit of Bhutan that lingers long after departure.",
        ],
      },
    ],
    tourDetails: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations",
        value:
          "Paro · Geynekha · Gur · Labatama · Kheri Khewa · Tshokam · Thimphu",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-DAG-PBH-09" },
      {
        label: "Meals",
        value: "Breakfast daily; All meals included during trek days",
      },
      { label: "Best Time", value: "April–June & September–November" },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Max Altitude", value: "Near Jomo Peak at 4,716m" },
    ],
  },
  {
    id: 515,
    country: "Bhutan",
    place: "Paro",
    title: "Glimpse of Bhutan",
    type: "Cultural",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Paro → Thimphu → Punakha → Paro",
    destinations: ["Paro", "Thimphu", "Dochula Pass", "Punakha"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1799,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/punakhadzong.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Landmark", label: "Culture", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Hike to Paro Taktsang — Sacred Tiger's Nest Monastery at 3,120m",
      },
      {
        title:
          "Punakha Dzong — Majestic Fortress at the Confluence of Two Rivers",
      },
      {
        title:
          "Dochula Pass — 108 Chortens & Panoramic Himalayan Views at 3,050m",
      },
      {
        title: "Buddha Dordenma — Iconic Statue Overlooking the Thimphu Valley",
      },
      {
        title:
          "Chimi Lhakhang — The Revered Temple of Fertility in Lobesa Valley",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten — Scenic Ridge Temple with Valley Views",
      },
    ],
    tourManagerCompany: "",
    heroImage: {
      src: "/punakhadzong.jpg",
      alt: "Glimpse of Bhutan — Paro, Thimphu, Punakha 6-Day Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/vaishno-Hima2.jpg",
        alt: "paro2",
      },
      {
        id: 2,
        src: "/thimphu5.jpg",
        alt: "paro3",
      },
      {
        id: 3,
        src: "/paro6.jpg",
        alt: "paro6",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Glimpse of Bhutan", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "6 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Punakha", nights: 1 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Into the Kingdom of the Thunder Dragon",
        details: [
          "The flight into Bhutan is a spectacular introduction to the kingdom, offering breathtaking views of the majestic Himalayas and the glittering glaciers of some of the world's highest peaks.",
          "As the flight descends into Paro Valley, the silvery Pa Chhu winds through the landscape alongside the striking Paro Dzong and the historic Ta Dzong watchtower, before a warm welcome marks the beginning of the journey.",
          "En route toward Thimphu, a visit to Tachog Lhakhang — also known as Tachogang — involves crossing the river on a traditional iron chain bridge; this sacred site, meaning 'Temple of the Hill of the Excellent Horse,' was built in the 14th century by the revered saint and engineer Thangtong Gyalpo.",
          "Though the original structure was washed away by floods in 1969, it was faithfully restored in 2005, preserving the legacy of a master architect credited with constructing 108 iron bridges across Bhutan and Tibet.",
          "The scenic drive continues onward to Thimphu for an overnight stay.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Thimphu — Capital of the Last Himalayan Kingdom",
        details: [
          "After breakfast, the day begins with a visit to the Memorial Chorten, a beautiful stupa built in memory of Bhutan's Third King, His Majesty Jigme Dorji Wangchuck, before continuing to the iconic Buddha Dordenma — a magnificent statue perched atop Kuensel Phodrang housing over one hundred thousand smaller Buddha statues and offering sweeping views of the Thimphu Valley.",
          "For those feeling active, an optional two-hour scenic hike from Buddha Point to Changangkha Lhakhang can be arranged, rewarding with stunning vistas along the way.",
          "Before lunch, the Motithang Takin Preserve offers a chance to see Bhutan's unique national animal, the takin, followed by a stroll through the local vegetable market to experience the rhythm of daily Bhutanese life.",
          "In the evening, a visit to the impressive Tashichho Dzong — meaning 'Fortress of the Glorious Religion' — reveals grand whitewashed walls, golden roofs, intricate woodwork, courtyards, and temples; originally built in 1216 and expanded in the 1960s, it now serves as the seat of Bhutan's government and the summer residence of the Je Khenpo.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Punakha",
        details: [
          "After breakfast, the drive to Dochula Pass at 3,050 metres offers sweeping panoramic views of the eastern Himalayas on clear days, including peaks such as Masagang, Terigang, Kangphugang, and the majestic Gangkar Puensum at 7,497 metres — Bhutan's highest peak.",
          "The journey then descends along a winding road into the lush Wangduephodrang Valley, with a lunch stop in Wangduephodrang town and a visit to Wangdue Phodrang Dzong, a historic fortress perched on a ridge overlooking the confluence of the Punatsang Chhu and Dang Chhu rivers.",
          "After lunch, a pleasant 30-minute walk through scenic fields leads to Chimi Lhakhang, set on a hillock in the Lobesa Valley and dedicated to the 15th-century saint Lama Drukpa Kuenley, the revered 'Divine Madman,' and widely regarded as the Temple of Fertility.",
          "In the afternoon, the magnificent Punakha Dzong awaits — beautifully situated at the confluence of two rivers, it served as Bhutan's capital until 1955, remains the winter residence of the Central Monastic Body, and holds the historic significance of being where Bhutan's first king was crowned in 1907.",
          "The evening is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Punakha → Paro",
        details: [
          "After breakfast, the morning begins with a visit to Khamsum Yulley Namgyal Chorten, standing majestically on a ridge overlooking the Punakha Valley and reached via a scenic one-hour hike through rice fields and pine forests.",
          "Built over nine years by skilled Bhutanese artisans using traditional methods guided by sacred scriptures, this four-storey temple was commissioned by Her Majesty the Queen Mother and dedicated to the peace, stability, and well-being of the kingdom and all sentient beings.",
          "A second visit to Punakha Dzong allows for deeper exploration of its historical significance — including its role as the site of Bhutan's first royal coronation in 1907 and its miraculous preservation of its most sacred statue through centuries of fires, earthquakes, and floods.",
          "After lunch, the drive continues to Paro, with the evening left free for a relaxed stroll through Paro town before settling in for an overnight stay.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery begins — an iconic Buddhist temple complex dramatically perched on a cliff at 3,120 metres overlooking the upper Paro Valley, and one of Bhutan's most revered landmarks.",
          "The ascent takes 2 to 3 hours depending on pace, with the option to ride a horse to the halfway point; the trail winds through serene blue pine forests adorned with colourful prayer flags, creating a peaceful and uplifting journey.",
          "The Taktsang Cafeteria at the halfway point offers spectacular views of the monastery for those preferring a lighter experience, while the full climb rewards with an unmatched sense of spiritual presence.",
          "The descent takes around 1.5 to 2 hours, completing the round trip in approximately 4 to 5 hours.",
          "In the afternoon, if time permits, a visit to the Ta Dzong National Museum — originally built as a watchtower to safeguard Rinpung Dzong in 1646 — is followed by a leisurely evening stroll through Paro town for shopping and exploration, before an overnight stay in Paro.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Departure from Paro",
        details: [
          "After breakfast, the drive to Paro International Airport brings the journey to a close.",
          "As the flight lifts off from the valley, the mountains, rivers, and golden dzongs of Bhutan slowly fade beneath the clouds, leaving behind memories of a kingdom unlike any other.",
        ],
      },
    ],
    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Paro · Thimphu · Dochula Pass · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-GLM-PBH-06" },
      { label: "Meals", value: "Breakfast daily" },
      { label: "Best Time", value: "March–May & September–November" },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Sightseeing" },
    ],
  },
  {
    id: 516,
    country: "Bhutan",
    place: "Paro",
    title: "Bhutan Short Trip",
    type: "Cultural",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Paro → Thimphu → Paro",
    destinations: ["Paro", "Thimphu"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1499,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/thimphu.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Landmark", label: "Culture", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Hike to Paro Taktsang — Sacred Tiger's Nest Monastery at 3,120m",
      },
      { title: "Paro Dzong — Iconic Fortress Rising Above the Paro Valley" },
      {
        title:
          "Thimphu City Tour — Capital Culture, Buddha Dordenma & Memorial Chorten",
      },
      {
        title: "Tashichho Dzong — Seat of Bhutan's Government on the Wang Chhu",
      },
      {
        title:
          "Ta Dzong National Museum — Bhutan's Finest Traditional Watchtower Architecture",
      },
      { title: "Traditional Dinner — A Taste of Authentic Bhutanese Cuisine" },
    ],
    tourManagerCompany: "",
    heroImage: {
      src: "/thimphu1.jpg",
      alt: "Bhutan Short Trip — Paro and Thimphu 4-Day Cultural Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/thimphu2.jpg",
        alt: "thimphu2",
      },
      {
        id: 2,
        src: "/thimphu3.jpg",
        alt: "thimphu3",
      },
      {
        id: 3,
        src: "/thimphu4.jpg",
        alt: "thimphu4",
      },
       {
        id: 3,
        src: "/dochula_overview.jpg",
        alt: "dochula_overview.jpg",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Bhutan Short Trip", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "4 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 4,
    countryCount: 1,
    cityCount: 2,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 1 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Gateway to the Thunder Dragon Kingdom",
        details: [
          "The flight into Bhutan offers breathtaking views of the majestic Himalayas, revealing the shimmering glaciers of some of the world's highest peaks; as the plane descends into Paro Valley, the silvery Pa Chhu winds through the landscape alongside the iconic Paro Dzong and Ta Dzong watchtower.",
          "After a warm welcome on arrival and transfer toward Thimphu, a stop at Tachog Lhakhang — also known as Tachogang — involves crossing the river via a traditional iron chain bridge; this sacred site, meaning 'Temple of the Hill of the Excellent Horse,' was built in the 14th century by Thangtong Gyalpo.",
          "Though the original bridge was washed away by floods in 1969, it was faithfully restored in 2005, preserving the legacy of a master architect credited with building 108 iron bridges across Bhutan and Tibet.",
          "In the evening, a visit to the impressive Tashichho Dzong reveals grand whitewashed walls, golden roofs, intricate woodwork, and courtyards; originally built in 1216 and expanded in the 1960s, it now serves as the seat of Bhutan's government and the summer residence of the Je Khenpo.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Thimphu → Paro — Culture, Icons & the Paro Valley",
        details: [
          "After breakfast, the day begins with a visit to the Memorial Chorten, built in memory of Bhutan's Third King, His Majesty Jigme Dorji Wangchuck, before continuing to Buddha Dordenma — a magnificent statue atop Kuensel Phodrang housing over one hundred thousand smaller Buddha statues and offering sweeping views of the Thimphu Valley.",
          "For those interested, an optional two-hour scenic hike from Buddha Point to Changangkha Lhakhang can be arranged, providing stunning vistas along the way.",
          "Before lunch, the Motithang Takin Preserve offers a chance to see Bhutan's unique national animal, the takin, followed by a stroll through the local vegetable market to experience everyday Bhutanese life.",
          "After lunch, the drive continues to Paro, with a visit to the Ta Dzong National Museum — originally built as a watchtower to protect Rinpung Dzong in 1646 by Shabdrung Ngawang Namgyal and considered one of Bhutan's finest examples of traditional architecture.",
          "The evening is left free for a relaxed walk through Paro town for shopping and exploration, before settling in for an overnight stay in Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery begins — an iconic Buddhist temple dramatically perched on a cliff at 3,120 metres overlooking the upper Paro Valley, and one of Bhutan's most revered landmarks.",
          "The ascent takes 2 to 3 hours depending on pace and fitness level, with the option to ride a horse to the halfway point; the trail winds through peaceful blue pine forests and prayer-flag-lined paths, creating a serene and uplifting journey.",
          "For those who prefer a lighter experience, the Taktsang Cafeteria at the halfway point offers spectacular views of the monastery without the full climb.",
          "The descent takes around 1.5 to 2 hours, completing the total round trip in approximately 4 to 5 hours.",
          "The evening is spent back at the hotel in Paro.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Departure from Paro",
        details: [
          "After breakfast, the drive to Paro International Airport brings the journey to a graceful close.",
          "As the flight lifts off from the valley, the mountain peaks, ancient dzongs, and warm spirit of Bhutan linger as memories that will last long after the kingdom fades from view.",
        ],
      },
    ],
    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "Paro · Thimphu" },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-SHT-PBH-04" },
      { label: "Meals", value: "Breakfast daily; Traditional Dinner included" },
      { label: "Best Time", value: "March–May & September–November" },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Sightseeing" },
    ],
  },
  {
    id: 517,
    country: "Bhutan",
    place: "Paro",
    title: "Paro Festival Tour",
    type: "Cultural",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Paro → Thimphu → Punakha → Paro",
    destinations: ["Paro", "Thimphu", "Dochula Pass", "Punakha"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1799,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/paro-festival.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Landmark", label: "Culture", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Paro Tsechu Festival — Sacred Mask Dances & Traditional Costumes at Rinpung Dzong",
      },
      {
        title:
          "Hike to Paro Taktsang — Sacred Tiger's Nest Monastery at 3,120m",
      },
      {
        title:
          "Punakha Dzong — Majestic Fortress at the Confluence of Two Rivers",
      },
      {
        title:
          "Dochula Pass — Panoramic Himalayan Views at 3,050m & 108 Chortens",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten — Hilltop Temple with Valley Views",
      },
      {
        title:
          "Simtokha Dzong — One of Bhutan's Oldest Fortress Monasteries, Built 1629",
      },
    ],
    tourManagerCompany: "",
    heroImage: {
      src: "/paro-festival1.jpg",
      alt: "Paro Festival Tour — Paro Tsechu, Thimphu & Punakha 8-Day Cultural Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/paro-festival2.jpg",
        alt: "paro-festival2",
      },
      {
        id: 2,
        src: "/paro-festival3.jpg",
        alt: "paro-festival3",
      },
      {
        id: 3,
        src: "/paro.jpg",
        alt: "paro",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Paro Festival Tour", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "8 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 8,
    countryCount: 1,
    cityCount: 4,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Punakha", nights: 2 },
      { city: "Paro", nights: 3 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Transfer to Thimphu",
        details: [
          "Upon arrival at Paro International Airport, a warm welcome from the guide marks the beginning of the journey, followed by a scenic one-hour drive to Thimphu, the capital city of Bhutan.",
          "Along the way, a visit to Tachog Lhakhang includes crossing the river on the famous iron chain bridge built by Thangtong Gyalpo, a revered saint and engineer credited with constructing 108 iron bridges across Bhutan and Tibet.",
          "In the afternoon, sightseeing in Thimphu begins with visits to the Memorial Chorten, a beautiful stupa built in memory of Bhutan's Third King, and the lively Centenary Farmers Market.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Thimphu — A Day in the Capital",
        details: [
          "A full day of exploration begins with a visit to the magnificent Buddha Dordenma Statue, one of the largest Buddha statues in the world, offering panoramic views over the Thimphu Valley.",
          "The morning continues at the Motithang Takin Preserve, home to Bhutan's unique national animal, the takin, followed by a visit to the National Textile Museum and the Folk Heritage Museum to discover traditional Bhutanese life, craftsmanship, and customs.",
          "Later in the day, the impressive Tashichho Dzong — seat of Bhutan's government and central monastic body — is explored in all its grandeur of whitewashed walls, golden roofs, and intricate woodwork.",
          "The evening is spent on a relaxing stroll through Thimphu town, soaking in the local atmosphere before an overnight stay in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Punakha",
        details: [
          "A scenic drive from Thimphu leads to the breathtaking Dochula Pass at 3,050 metres, known for its panoramic views of the Himalayan mountain range and the iconic 108 Druk Wangyal Chortens.",
          "For those seeking a bit more adventure, an optional Lungchutse Hike begins just above the chortens and leads to Lungchutse Temple on a ridge at around 3,600 metres, covering approximately 5–6 km round trip over 3–4 hours.",
          "After the pass, the journey continues toward Punakha — the former capital of Bhutan — with a stop at Chimi Lhakhang, the revered Temple of Fertility in the Lobesa Valley, reached via a pleasant walk through scenic fields.",
          "Along the way, Wangdue Phodrang Dzong is also visited, a historically significant fortress monastery known for its striking architecture.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Punakha — Dzongs, Temples & Suspension Bridge",
        details: [
          "The morning begins with a scenic hike to Khamsum Yulley Namgyal Chorten, a remarkable temple set on a hilltop above the Punakha Valley, rewarding visitors with breathtaking panoramic views of the valley, terraced fields, and surrounding mountains.",
          "In the afternoon, the magnificent Punakha Dzong is explored — one of Bhutan's most impressive fortresses, beautifully situated at the confluence of the Pho Chhu and Mo Chhu rivers, and the historic site of Bhutan's first royal coronation in 1907.",
          "The day concludes with a visit to the Punakha Suspension Bridge, one of the longest in Bhutan, offering scenic valley views and a memorable walking experience.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Punakha → Simtokha Dzong → Paro",
        details: [
          "After a memorable stay in Punakha, the journey heads back toward the enchanting Paro Valley, with a stop at Simtokha Dzong along the way.",
          "Built in 1629 and standing about 5 km south of Thimphu, Simtokha Dzong is one of the oldest and most historically significant dzongs in Bhutan, admired for its deep religious importance and traditional Bhutanese architecture.",
          "After exploring this cultural treasure, the scenic drive continues to Paro, where peaceful landscapes, charming villages, and fresh mountain air create the perfect setting for relaxation.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Paro Tsechu Festival — Sacred Dances at Rinpung Dzong",
        details: [
          "The cultural heart of the journey unfolds at the spectacular Paro Tsechu Festival, held at the historic Rinpung Dzong — one of the most vibrant and spiritually significant festivals in Bhutan.",
          "Sacred mask dances performed by monks fill the courtyard, while locals dressed in their finest traditional attire gather to receive blessings and celebrate their rich cultural heritage.",
          "In the afternoon, sightseeing in Paro continues with visits to Ta Dzong housing the National Museum of Bhutan, the magnificent Rinpung Dzong, and Kyichu Lhakhang — one of the oldest and most sacred temples in Bhutan.",
          "The evening is spent exploring Paro town, browsing traditional shops and soaking in the unique ambiance of this beautiful Himalayan valley.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery begins — an iconic Buddhist temple complex dramatically perched on a cliff at 3,120 metres overlooking the upper Paro Valley, and one of Bhutan's most revered landmarks.",
          "The ascent takes 2 to 3 hours depending on pace, with the option to ride a horse to the halfway point; the trail winds through serene blue pine forests adorned with colourful prayer flags, creating a peaceful and uplifting journey.",
          "The Taktsang Cafeteria at the halfway point offers spectacular views of the monastery for those preferring a lighter experience, while the full climb rewards with a profound sense of spiritual stillness.",
          "The descent takes around 1.5 to 2 hours, completing the round trip in approximately 4 to 5 hours.",
          "The afternoon is spent on a leisurely stroll through Paro town for shopping and exploration, before a final overnight stay in Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Departure from Paro",
        details: [
          "After breakfast, a transfer to Paro International Airport brings the journey to a close.",
          "As the flight lifts off from the Paro Valley, the colourful festival memories, sacred monasteries, and the warm spirit of Bhutan linger long after the kingdom fades from view.",
        ],
      },
    ],
    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Paro · Thimphu · Dochula Pass · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-PFT-PBH-08" },
      { label: "Meals", value: "Breakfast daily" },
      {
        label: "Best Time",
        value: "March–April (Paro Tsechu Festival Season)",
      },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Festival & Cultural Sightseeing" },
    ],
  },
  {
    id: 518,
    country: "Bhutan",
    place: "Paro",
    title: "Best of Bhutan Tour",
    type: "Cultural",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Paro → Thimphu → Phobjikha → Punakha → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Dochula Pass",
      "Phobjikha Valley",
      "Punakha",
      "Paro",
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1999,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/pobjikha-bird.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Hiking", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Punakha Dzong — Majestic Fortress at the Confluence of Two Rivers",
      },
      {
        title:
          "Dochula Pass — Panoramic Himalayan Views at 3,088m with 108 Chortens",
      },
      {
        title:
          "Phobjikha Valley — Glacial Valley & Winter Home of the Black-Necked Crane",
      },
      {
        title:
          "Gangtey Monastery — 17th-Century Nyingma Monastery Overlooking Phobjikha",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten — Unique 4-Storey Hilltop Temple Above Punakha Valley",
      },
    ],
    tourManagerCompany: "",
    heroImage: {
      src: "pobjikha.jpg",
      alt: "Best of Bhutan Tour — Paro, Thimphu, Phobjikha & Punakha 9-Day Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/Phobjikha2.jpg",
        alt: "Phobjikha2",
      },
      {
        id: 2,
        src: "/thimphu.jpg",
        alt: "himphu.jpg3",
      },
      {
        id: 3,
        src: "/paro.jpg",
        alt: "paro",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Best of Bhutan Tour", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "9 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 9,
    countryCount: 1,
    cityCount: 5,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Phobjikha Valley", nights: 2 },
      { city: "Punakha", nights: 1 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Tachog Lhakhang & Transfer to Thimphu",
        details: [
          "The flight into Bhutan offers stunning scenic views of some of the world's highest glacial peaks, sweeping past forested hills and the silvery Paro river as the plane descends into the Paro valley.",
          "Upon arrival at Paro International Airport, a representative meets guests and completes arrival formalities before transferring to Thimphu.",
          "En route, a visit to Tachog Lhakhang — also known as Tachogang, meaning 'temple of the hill of excellent horse' — is made by crossing the Paro river on a traditional iron chain bridge.",
          "The temple was built in the 14th century by the renowned architect-saint Thangtong Gyalpo, who constructed 108 iron bridges throughout Tibet and Bhutan; the current bridge is a 2005 restoration of the original washed away in 1969.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu — Memorial Chorten, Buddha Dordenma & Changjangkha Temple",
        details: [
          "After breakfast, the day begins with a visit to the National Memorial Chorten, a landmark stupa built in memory of Bhutan's Third King, Jigme Dorji Wangchuck, as a monument to world peace and prosperity; completed in 1974, its paintings and statues offer a deep insight into Buddhist philosophy.",
          "The morning continues with a visit to the colossal Buddha Dordenma statue — one of the largest Shakyamuni Buddha statues in the world — sited amidst the ruins of Kuensel Phodrang and overlooking the southern approach to Thimphu.",
          "From Buddha Dordenma, an approximately two-hour hike leads up to Changjangkha Temple, rewarding hikers with sweeping panoramic views over Thimphu city.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Phobjikha Valley",
        details: [
          "After an early breakfast, the drive heads up to Dochula Pass at 3,088 metres, where the chortens, mani wall, and prayer flags mark the highest point on the road; on clear days, a sweeping panorama of Himalayan peaks is visible, including Gangkar Puensum at 7,497m — the highest peak in Bhutan.",
          "The journey then descends into the Wangduephodrang valley, approximately 1,700 metres below the pass, with a stop in Wangduephodrang town for lunch.",
          "In the mountains east of Wangduephodrang lies the beautiful Phobjikha valley, home to the great Gangtey Monastery established in the 17th century, and the charming village of Phobjikha on the valley floor.",
          "The valley is famed as the winter refuge of black-necked cranes, which migrate from the arid plains of Tibet to pass the colder months in this remote and tranquil setting.",
          "The night is spent at a hotel in Phobjikha Valley.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Phobjikha Valley — Gangtey Monastery & Black-Necked Crane Centre",
        details: [
          "A full day is spent exploring Phobjikha, a vast U-shaped glacial valley also known as Gangteng Valley, named after the impressive Gangtey Monastery of the Nyingma tradition.",
          "The valley is one of Bhutan's most significant wildlife habitats: an area of approximately 163 square kilometres has been declared a protected zone managed by the Royal Society for the Protection of Nature (RSPN), sheltering 14 globally threatened species including the iconic black-necked crane.",
          "A visit to the Black-Necked Crane Information Centre offers a deeper understanding of the cranes' remarkable annual migration from the Tibetan Plateau — upon arriving each October, the cranes are said to circle Gangtey Monastery three times before landing, and repeat the ritual upon departure.",
          "The night is spent at a hotel in Phobjikha Valley.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Phobjikha Valley → Chimi Lhakhang → Punakha",
        details: [
          "After breakfast, the drive heads toward Punakha with an en-route stop at Chimi Lhakhang, situated on a hillock in the centre of the Lobesa valley and dedicated to Lama Drukpa Kuenley — the 'Divine Madman' — who used humour and unconventional teachings to spread Buddhism in the 15th century.",
          "Chimi Lhakhang is widely revered as the Temple of Fertility, believed to bless childless couples who pray here; the temple is reached by a pleasant 30-minute walk across scenic paddy fields or by a short drive.",
          "The journey then continues to Punakha, the former capital of Bhutan, set amid warm lowland valleys at the confluence of two rivers.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Punakha — Khamsum Chorten, Punakha Dzong & Suspension Bridge",
        details: [
          "The morning begins with a visit to Khamsum Yulley Namgyal Chorten, a magnificent 4-storey temple built over 9 years by Bhutanese craftsmen who consulted holy scriptures rather than engineering manuals; constructed by Her Majesty the Queen Mother, it stands as a unique architectural masterpiece on a strategic ridge above the Punakha valley.",
          "In the afternoon, the grand Punakha Dzong is explored — a massive fortress built at the junction of the Pho Chhu and Mo Chhu rivers, which served as Bhutan's capital until 1955 and was the site of the first royal coronation in 1907; despite centuries of damage from fire, earthquake, and flood, the dzong remains one of Bhutan's most awe-inspiring structures.",
          "The day concludes with a walk across Punakha's famous suspension bridge, offering beautiful views of the river valley below.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Punakha → Ta Dzong & Rinpung Dzong → Paro",
        details: [
          "After breakfast, the drive heads directly to Paro, where the first stop is Ta Dzong — the former watchtower of Paro Dzong, now housing the National Museum of Bhutan.",
          "From Ta Dzong, a trail leads down to the magnificent Rinpung Dzong, built in 1646 by Zhabdrung Ngawang Namgyal, which houses the monastic body of Paro and the district's administrative offices; the approach is made through the traditional covered Nemi Zam bridge, with beautiful views of the dzong's architecture along the stone-inlaid path.",
          "Guests have the opportunity to wear traditional Bhutanese dress for photographs against the stunning backdrop of the dzong and its wooden bridge.",
          "The evening is spent on a leisurely walk through Paro town for shopping and exploration.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery — popularly known as the Tiger's Nest — begins; dramatically perched on a cliff at 3,120 metres above the Paro Valley, it is one of Bhutan's most revered and iconic landmarks.",
          "The ascent takes 2 to 3 hours depending on pace, with the option to ride a horse to the halfway point; the trail winds through serene blue pine forests adorned with colourful prayer flags in a deeply peaceful atmosphere.",
          "The Taktsang Cafeteria at the halfway point offers spectacular views of the monastery for those preferring a lighter experience, while completing the full climb rewards with a profound sense of spiritual stillness and breathtaking mountain scenery.",
          "The descent takes around 1.5 to 2 hours, making the total round trip approximately 4 to 5 hours.",
          "The evening is spent strolling through Paro town for shopping and exploration, followed by a final overnight stay in Paro.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Departure from Paro",
        details: [
          "After breakfast, a transfer to Paro International Airport brings the journey to a close.",
          "As the flight departs over the Paro Valley, the memories of ancient monasteries, misty mountain passes, and the warm hospitality of the Bhutanese people remain long after the kingdom fades from view.",
        ],
      },
    ],
    tourDetails: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations",
        value: "Paro · Thimphu · Dochula Pass · Phobjikha Valley · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-BOB-PBH-09" },
      { label: "Meals", value: "Breakfast daily" },
      { label: "Best Time", value: "October–April" },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Nature Sightseeing" },
    ],
  },
  {
    id: 519,
    country: "Bhutan",
    place: "Paro",
    title: "Punakha Festival Tour",
    type: "Cultural",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Paro → Thimphu → Punakha → Paro",
    destinations: ["Paro", "Thimphu", "Dochula Pass", "Punakha",],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1799,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/punakha-dzong.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Hiking", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Punakha Drubchen — Warrior Dances & Historical Reenactments at Punakha Dzong",
      },
      {
        title:
          "Punakha Tshechu Festival — Sacred Mask Dances & Buddhist Ceremonies",
      },
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Punakha Dzong — Majestic Fortress at the Confluence of Pho Chhu & Mo Chhu Rivers",
      },
      {
        title:
          "Dochula Pass — Panoramic Himalayan Views at 3,050m with 108 Druk Wangyal Chortens",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten — Hilltop Temple Overlooking Punakha Valley",
      },
    ],
    tourManagerCompany: "Indruka Tours and Travels",
    heroImage: {
      src: "/paro-festival.jpg",
      alt: "Punakha Festival Tour — Paro, Thimphu & Punakha 8-Day Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/paro-festival2.jpg",
        alt: "paro-festival12",
      },
      {
        id: 2,
        src: "/punakha-festivals.jpg",
        alt: "paro-festval13",
      },
      {
        id: 3,
        src: "/paro-festval1.jpg",
        alt: "paro-festval1",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Punakha Festival Tour", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "8 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 8,
    countryCount: 1,
    cityCount: 4,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Punakha", nights: 3 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Tachog Lhakhang & Transfer to Thimphu",
        details: [
          "Your Bhutan journey begins with one of the world's most scenic mountain flights, with spectacular views of the Eastern Himalayas before descending into the breathtaking Paro Valley, where the Paro River, Paro Dzong, and Ta Dzong come into view.",
          "On arrival at Paro International Airport, you will be warmly welcomed by your guide and driven to Thimphu, Bhutan's charming capital, with an enriching stop at Tachog Lhakhang — the sacred temple built by Thangtong Gyalpo and famed for its historic iron chain bridge.",
          "In the afternoon, explore Thimphu's cultural highlights, including the National Memorial Chorten and the lively Centenary Farmers Market.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing — Buddha Dordenma, Takin Preserve & Tashichho Dzong",
        details: [
          "Explore the highlights of Thimphu, Bhutan's vibrant capital, where tradition and modern life come together in a uniquely Bhutanese setting.",
          "The day includes visits to the magnificent Buddha Dordenma overlooking the Thimphu Valley and the Motithang Takin Preserve, home to Bhutan's national animal, the takin.",
          "Further visits are made to the Folk Heritage Museum and the National Institute for Zorig Chusum, where traditional Bhutanese arts and crafts are preserved and taught.",
          "The day concludes with a visit to the impressive Tashichho Dzong — the seat of Bhutan's government and central monastic body — followed by a relaxed evening stroll through Thimphu town.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Punakha",
        details: [
          "Journey to the beautiful Punakha Valley via the breathtaking Dochula Pass at 3,050 metres, where sweeping views of the Himalayan mountain range create one of Bhutan's most memorable travel experiences on clear days.",
          "A stop is made to admire the 108 Druk Wangyal Chortens, and for those seeking a more active experience, an optional hike to Lungchutse Temple offers a rewarding trail with spectacular mountain views.",
          "Continue into the lush Punakha Valley for a visit to Chimi Lhakhang — the revered Temple of Fertility reached by a pleasant walk through rice fields.",
          "The day also includes a visit to Wangdue Phodrang Dzong, one of Bhutan's historically significant fortress monasteries.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Punakha Tshechu Festival & Punakha Dzong",
        details: [
          "Experience the vibrant Punakha Tshechu Festival at the magnificent Punakha Dzong, one of Bhutan's most celebrated cultural and religious events.",
          "Set against the stunning backdrop of the Pho Chhu and Mo Chhu rivers, the festival comes alive with sacred mask dances performed by monks and lay dancers, reflecting Buddhist teachings and Bhutanese legends.",
          "Local people gather in their finest traditional attire to receive blessings and celebrate together, offering a rare and meaningful glimpse into Bhutan's living culture and spiritual heritage.",
          "Time is also spent admiring Punakha Dzong, widely regarded as one of Bhutan's most beautiful fortresses.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Punakha Valley Exploration — Khamsum Chorten & Suspension Bridge",
        details: [
          "Begin the day with a scenic hike to Khamsum Yulley Namgyal Chorten, a beautiful hilltop temple overlooking the Punakha Valley and offering spectacular views of the river, rice fields, and surrounding landscapes.",
          "This rewarding experience combines Bhutan's spiritual charm with natural beauty.",
          "You may also choose to visit the Punakha Suspension Bridge — one of the longest suspension bridges in Bhutan — for an added touch of adventure.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Punakha → Simtokha Dzong → Paro — Ta Dzong & Rinpung Dzong",
        details: [
          "Return to the beautiful Paro Valley with a scenic drive that includes a visit to Simtokha Dzong — one of Bhutan's oldest and most historically important dzongs, built in 1629 and located just south of Thimphu.",
          "Continue to Paro for afternoon sightseeing at Ta Dzong, the National Museum of Bhutan, and the impressive Rinpung Dzong, one of the valley's most iconic landmarks.",
          "In the evening, enjoy exploring Paro town, where charming streets, local shops, and cosy cafés add to the experience.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery — popularly known as Paro Taktsang or the Tiger's Nest — begins; dramatically perched on a cliff at 3,120 metres above the Paro Valley, it is one of Bhutan's most revered landmarks and a powerful cultural symbol.",
          "The ascent takes 2 to 3 hours depending on pace and fitness level, with the option to ride a horse to the halfway point (approximately 1 to 1.5 hours); the trail winds through serene blue pine forests adorned with colourful prayer flags.",
          "The Taktsang Cafeteria at the halfway point provides spectacular views of the monastery for those preferring a lighter experience without completing the full climb.",
          "The descent takes around 1.5 to 2 hours, making the total round trip approximately 4 to 5 hours.",
          "In the afternoon, enjoy a leisurely evening stroll through Paro town for shopping and exploration.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Departure from Paro",
        details: [
          "After breakfast, transfer to Paro International Airport for your onward flight.",
        ],
      },
    ],
    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Paro · Thimphu · Dochula Pass · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-PFT-PBH-08" },
      { label: "Meals", value: "Breakfast daily" },
      { label: "Best Time", value: "February–March (Festival Season)" },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Festival" },
    ],
  },
  {
    id: 5920,
    country: "Bhutan",
    place: "Paro",
    title: "Thimphu Festival Tour",
    type: "Cultural",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Paro → Thimphu → Phobjikha → Punakha → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Dochula Pass",
      "Phobjikha Valley",
      "Punakha",
      "Paro",
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2300,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/thimphu-festival.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Hiking", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Thimphu Tshechu — Sacred Mask Dances & Religious Ceremonies at Tashichho Dzong",
      },
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Phobjikha Valley — Glacial Valley & Winter Home of the Black-Necked Crane",
      },
      {
        title:
          "Gangtey Monastery — 17th-Century Nyingma Monastery Overlooking Phobjikha",
      },
      {
        title:
          "Punakha Dzong — Majestic Fortress at the Confluence of Pho Chhu & Mo Chhu Rivers",
      },
      {
        title:
          "Dochula Pass — Panoramic Himalayan Views at 3,050m with 108 Chortens",
      },
    ],
    tourManagerCompany: "Indruka Tours and Travels",
    heroImage: {
      src: "/thimphu-festival1.jpg",
      alt: "Thimphu Festival Tour — Paro, Thimphu, Phobjikha & Punakha 8-Day Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/thimphu.jpg",
        alt: "thimphu1",
      },
      {
        id: 2,
        src: "/paro-festival1.jpg",
        alt: "paro-festival3",
      },
      {
        id: 3,
        src: "/paro-festival3.jpg",
        alt: "paro-festival6",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Thimphu Festival Tour", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "8 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 1 },
      { city: "Phobjikha Valley", nights: 1 },
      { city: "Punakha", nights: 2 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Tachog Lhakhang & Transfer to Thimphu",
        details: [
          "The flight into Bhutan offers spectacular views of the Eastern Himalayas, including some of the world's highest peaks.",
          "As the aircraft descends into the Paro Valley, the beautiful Paro River (Pa Chhu), Paro Dzong, and Ta Dzong come into view.",
          "Upon arrival at Paro International Airport, guests are warmly received by a representative before driving to Thimphu (approximately 1 hour).",
          "En route, a visit is made to Tachog Lhakhang — located along the Paro–Thimphu highway — reached by crossing the Paro River via an iron chain bridge originally built by the famous Tibetan saint and engineer Thangtong Gyalpo, who constructed many iron bridges across the Himalayas.",
          "The afternoon includes Thimphu sightseeing, with visits to the Memorial Chorten — built in memory of the Third King of Bhutan — the gigantic Buddha Dordenma statue overlooking Thimphu Valley, and the lively Centenary Farmers Market.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Thimphu Tshechu Festival at Tashichho Dzong",
        details: [
          "The morning is spent attending the Thimphu Tshechu Festival at Tashichho Dzong — one of the most important religious festivals in Bhutan.",
          "Monks and lay performers present sacred mask dances (Cham) representing Buddhist teachings and spiritual stories.",
          "Local people dressed in their finest traditional attire gather to receive blessings and celebrate this vibrant cultural event.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Phobjikha Valley",
        details: [
          "The drive heads towards Phobjikha Valley with an en-route stop at Dochula Pass at 3,050 metres, where on a clear day spectacular panoramic views of the eastern Himalayan mountain range can be enjoyed.",
          "The journey continues, descending through subtropical valleys before reaching the beautiful Phobjikha (Gangtey) Valley — a glacial valley famous as the winter home of rare black-necked cranes migrating from Tibet.",
          "Visits include Gangtey Monastery (17th century) and the Black-Necked Crane Information Centre.",
          "The valley is part of a protected conservation area managed by the Royal Society for Protection of Nature.",
          "The night is spent at a hotel in Phobjikha Valley.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Phobjikha Valley → Wangdue Phodrang → Chimi Lhakhang → Punakha",
        details: [
          "After breakfast, the Gangtey Nature Trail is enjoyed — one of the most scenic short hikes in central Bhutan — offering panoramic views of the glacial Phobjikha Valley, peaceful pine forests, open meadows, traditional Bhutanese villages, and clear flowing streams.",
          "The drive then heads toward Wangdue Phodrang for a visit to Wangdue Phodrang Dzong — a historic fortress on a ridge overlooking the confluence of the Puna Tsang Chhu and Dang Chhu rivers, making it a strategically important defensive site.",
          "After lunch, a visit is made to Chimi Lhakhang, situated on a hill in the Lobesa Valley and dedicated to Lama Drukpa Kuenley — also known as the Divine Madman — who used humour, songs, and unconventional behaviour to teach Buddhist philosophy.",
          "Widely known as the Temple of Fertility, where many couples pray for children, the temple is reached by a pleasant 30-minute walk across rice fields from the road.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Punakha Sightseeing — Khamsum Chorten & Punakha Dzong",
        details: [
          "The morning begins with a hike to Khamsum Yulley Namgyal Chorten, located on a ridge above the Punakha Valley and built by the Queen Mother for the peace and prosperity of Bhutan.",
          "The afternoon includes a visit to Punakha Dzong — often considered the most beautiful fortress in Bhutan — located at the confluence of the Pho Chhu and Mo Chhu rivers.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Punakha → Ta Dzong & Rinpung Dzong → Paro",
        details: [
          "After breakfast, the drive heads back to Paro.",
          "Afternoon visits include Ta Dzong (National Museum) — originally built as a watchtower for Paro Dzong — and Rinpung Dzong (Paro Dzong), built in 1646 by Zhabdrung Ngawang Namgyal.",
          "The evening is spent on a leisurely stroll through Paro town for shopping and exploration.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery — popularly known as Paro Taktsang or the Tiger's Nest — begins; dramatically perched on a cliff at 3,120 metres above the Paro Valley, it is one of Bhutan's most revered landmarks and a powerful cultural symbol.",
          "The ascent takes 2 to 3 hours depending on pace and fitness level, with the option to ride a horse to the halfway point (approximately 1 to 1.5 hours); the trail winds through serene blue pine forests adorned with colourful prayer flags.",
          "The Taktsang Cafeteria at the halfway point provides spectacular views of the monastery for those preferring a lighter experience without completing the full climb.",
          "The descent takes around 1.5 to 2 hours, making the total round trip approximately 4 to 5 hours.",
          "The afternoon is spent strolling through Paro town for shopping and exploration.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Departure from Paro",
        details: [
          "After breakfast, transfer to Paro International Airport for your onward flight.",
        ],
      },
    ],
    inclusions: [
      "All Meals",
      "Daily Mineral Water",
      "Sustainable Development Fee",
      "English Language Speaking Guide",
      "Accommodation on a twin-sharing basis",
      "Comfortable Vehicles with Skilled Drivers",
      "A minimum of 3 star accommodation (4 & 5 star may require an additional premium)",
      "Monument entrance fees as per itinerary",
    ],
    exclusions: [
      "Airfare international & domestic",
      "Personal shopping",
      "Tips for guide & driver",
      "Travel insurance",
      "Laundry",
      "Alcohol",
    ],
    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Paro · Thimphu · Dochula Pass · Phobjikha Valley · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-TFT-PBH-08" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "September–October (Festival Season)" },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Festival" },
    ],
  },
  {
    id: 521,
    country: "Bhutan",
    place: "Paro",
    title: "Druk Path Trek",
    type: "Trekking",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Paro → Druk Path → Thimphu → Paro",
    destinations: [
      "Paro",
      "Jele Dzong",
      "Tshokham",
      "Jimi Langtso",
      "Simkota",
      "Phajoding",
      "Thimphu",
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing", "Trekking"],
    price: 3499,
    rating: 0,
    reviews: 0,
    badge: "Trekking",
    badgeColor: "bg-green-600",
    mode: "Trek",
    src: "/huge-complex.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Tent", label: "Camping", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Mountain", label: "Trekking", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "High-Altitude Lakes — Pristine Alpine Lakes Including Jimi Langtso & Simkota Tsho",
      },
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Himalayan Panoramas — Views of Kangchenjunga, Chomolhari, Jichu Drakey & Tsrim Gang",
      },
      {
        title:
          "Yak Herder Camps — Encounters with Traditional High-Altitude Nomadic Communities",
      },
      {
        title:
          "Rhododendron Forests — Vibrant Alpine Flora Lining the Druk Path Trail",
      },
      {
        title:
          "Phajoding Monastery — Ancient Monastic Complex at 3,870m Above Thimphu Valley",
      },
    ],
    tourManagerCompany: "Indruka Tours and Travels",
    heroImage: {
      src: "/druk-path2.jpg",
      alt: "Druk Path Trek — Paro to Thimphu 10-Day High-Altitude Trek",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/druk-path3.jpg",
        alt: "druk-path3",
      },
      {
        id: 2,
        src: "/paro1.jpg",
        alt: "paro1",
      },
      {
        id: 3,
        src: "/paro2.jpg",
        alt: "paro2",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Druk Path Trek", href: "" },
    ],
    badges: [
      { label: "TREKKING", variant: "solid", color: "green" },
      { label: "10 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 10,
    countryCount: 1,
    cityCount: 7,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Paro", nights: 2 },
      { city: "Jele Dzong Camp", nights: 1 },
      { city: "Tshokham Camp", nights: 1 },
      { city: "Jimi Langtso Camp", nights: 1 },
      { city: "Simkota Camp", nights: 1 },
      { city: "Phajoding / Thimphu", nights: 1 },
      { city: "Thimphu", nights: 1 },
      { city: "Paro", nights: 1 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Paro Arrival — National Museum & Paro Dzong",
        details: [
          "A flight to Paro is one of the most spectacular of all mountain flights, offering views of Mt. Everest, Kangchenjunga, Makalu, and Bhutanese peaks such as Jumolhari, Jichu Drakey, and Tsrim Gang.",
          "Upon landing, guests are received by a representative and escorted to the hotel.",
          "In the afternoon, visit the National Museum of Bhutan — known as Ta Dzong (Watch Tower) — originally built in the 17th century alongside Paro Dzong to defend against Tibetan invasion. It houses a diverse collection of artefacts from across Bhutan dating back to the 6th century.",
          "Visit Paro Dzong, the administrative headquarters of the Paro District, which operates a dual system combining both administrative and religious functions.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Paro Sightseeing — Tiger's Nest Monastery Hike",
        details: [
          "After breakfast, proceed to Taktsang Palphug Monastery — popularly known as Paro Taktsang or the Tiger's Nest — an iconic Buddhist temple complex dramatically perched on a cliff at 3,120 metres overlooking the upper Paro Valley.",
          "The hike to Taktsang typically takes 2 to 3 hours to ascend depending on pace and fitness level, with the option to walk or ride a horse to the halfway point (approximately 1 to 1.5 hours).",
          "The Taktsang Cafeteria, located approximately halfway up, provides spectacular views of the monastery for those preferring a lighter experience without completing the full climb; the trail winds through serene blue pine forests adorned with colourful prayer flags.",
          "The descent takes around 1.5 to 2 hours, making the total round trip approximately 4 to 5 hours.",
          "In the evening, enjoy a leisurely stroll through Paro town for shopping and exploration.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Trek: Ta Dzong → Jele Dzong Camp — 10 km / 3–4 Hours / 3,450m",
        details: [
          "The Druk Path Trek begins early to avoid the heat on the uphill sections where tree cover is sparse.",
          "The trail starts above Ta Dzong (National Museum), ascending gradually through mixed temperate forests and past occasional farmhouses.",
          "By lunchtime, the route passes through a thick coniferous belt — an excellent area for spotting wild animals and birds.",
          "By evening, the trail reaches Jelela Pass at approximately 2,600 metres, with the campsite situated just a hundred metres downhill in a wide meadow — a site traditionally used by yak herders during seasonal migration.",
          "The night is spent at Jele Dzong Camp (3,450m).",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Trek: Jele Dzong → Tshokham — 10 km / 4–5 Hours / 3,780m",
        details: [
          "Today's trek heads to Tshokham Camp, a 4 to 5 hour walk reaching a campsite at 3,780 metres — a gain of approximately 300 metres in altitude.",
          "The trail begins with a 200-metre climb to Jeli Dzong — a structure that served as a royal rest house during the Second King's era and now operates as a monastic institute.",
          "The route is mostly undulating, offering good views of the Paro Valley to the left as trekkers walk along the ridges, passing through high-temperate forests and open alpine meadows.",
          "The night is spent at Tshokham Camp (3,780m).",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Trek: Tshokham → Jimi Langtso Lake — 11 km / 5–6 Hours / 3,880m",
        details: [
          "Today's destination is Jimi Langtso Lake — the highest campsite of the trek at 3,880 metres — reached after a 6 to 7 hour walk.",
          "The trek begins with a 500-metre ascent through coniferous forests and barren hillsides dotted with rhododendron flowers in spring, alongside abundant flora and fauna including wild onions.",
          "After the first pass, the trail becomes mostly undulating; those riding ponies should exercise extra caution on the descent.",
          "Before crossing the last pass, the route follows a ridge offering magnificent views of Mt. Kangchenjunga, Chomolhari, Jichu Drakey, and Tsrim Gang on clear days.",
          "After the last pass, Jimi Langtso Lake comes into view on the left, with the final stretch descending to the lakeside campsite.",
          "The night is spent at Jimi Langtso Camp (3,880m).",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Trek: Jimi Langtso → Simkota — 11 km / 4–5 Hours / 4,110m",
        details: [
          "The trail passes through dwarf rhododendron trees and bypasses the lake of Janetso.",
          "There is a chance to encounter yak herders' camps and gain insight into the lifestyle of these high-altitude communities.",
          "The route winds and undulates with magnificent Himalayan views across deep valleys.",
          "Simkota Tsho Lake at 4,110 metres comes into view after crossing one final spur, and trekkers continue to the yak pasture camp for the night.",
          "The night is spent at Simkota Camp (4,110m).",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Trek: Simkota → Phajoding → Thimphu — 14 km / 7–8 Hours / 3,870m",
        details: [
          "The day begins with a gradual climb to a small saddle at 4,150 metres, offering majestic views of Mt. Gangkar Puensum and other Himalayan peaks on clear days.",
          "The route then descends to another small lake before climbing to Phume La pass at 4,220 metres — adorned with colourful prayer flags — from where panoramic views of Thimphu city far below can be enjoyed.",
          "The trail slowly descends through juniper trees to a community hall near Phajoding Monastery at 3,870 metres; trekkers are advised to carry a walking stick as monastery dogs can occasionally be a nuisance.",
          "The walk down through mixed temperate forests to the trek endpoint takes a maximum of 2 hours, where vehicles await.",
          "Tashi Delek and farewell to the trekking crew.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Thimphu Sightseeing",
        details: [
          "After breakfast, visit the National Memorial Chorten — built in memory of the late Third King Jigme Dorji Wangchuk in 1974.",
          "Proceed to Buddha Dordenma, a gigantic Shakyamuni Buddha statue overlooking Thimphu Valley.",
          "Visit the 15th-century Changangkha Temple, the Takin (National Animal) Sanctuary, and the Thimphu city viewpoint.",
          "On the way back, visit Zilukha Nunnery and Dechenphodrang Monastic School.",
          "Visit the National Library, School of Arts and Crafts, Government Handicrafts Emporium, Traditional Handmade Paper Factory, and the Goldsmith & Silversmith unit.",
          "In the evening, visit Tashi Chhodzong — the capital's parliament house — and explore the various handicraft stores in town.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Thimphu → Paro",
        details: [
          "The morning is free for leisure activities.",
          "After lunch, drive to Paro via a scenic winding road following the Wangchuk River down to Chu Zom — the confluence of the Wangchuk and Pa Chhu rivers — which also serves as a vehicle checkpoint and immigration point.",
          "At the junction of the two rivers, three different styles of chorten can be seen: Tibetan, Bhutanese, and Nepalese.",
          "Cross the bridge and turn right towards Paro.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Departure from Paro",
        details: [
          "In the morning, the guide bids farewell at Paro International Airport for the onward journey.",
        ],
      },
    ],
    inclusions: [
      "All Meals",
      "Daily Mineral Water",
      "Sustainable Development Fee",
      "English Language Speaking Guide",
      "Trekking Crew & Equipment",
      "Camping Gear & Tents",
      "Pack Animals / Ponies for Luggage",
      "Accommodation on a twin-sharing basis (hotel nights)",
      "Comfortable Vehicles with Skilled Drivers",
      "A minimum of 3 star accommodation for hotel nights (4 & 5 star may require an additional premium)",
      "Monument entrance fees as per itinerary",
    ],
    exclusions: [
      "Airfare international & domestic",
      "Personal trekking gear & clothing",
      "Personal shopping",
      "Tips for guide, driver & trekking crew",
      "Travel insurance",
      "Laundry",
      "Alcohol",
      "Horse riding fees (optional)",
    ],
    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value:
          "Paro · Jele Dzong · Tshokham · Jimi Langtso · Simkota · Phajoding · Thimphu",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-DPT-PBH-10" },
      { label: "Meals", value: "All meals included" },
      {
        label: "Best Time",
        value: "March–May (Spring) & September–November (Autumn)",
      },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Trekking & Cultural" },
      {
        label: "Trek Distance",
        value: "Approximately 56 km over 5 trekking days",
      },
      { label: "Max Altitude", value: "4,220m (Phume La Pass)" },
    ],
  },
 
  {
    id: 522,
    country: "Bhutan",
    place: "Paro",
    title: "Bhutan Cultural Journey",
    type: "Cultural",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Paro → Thimphu → Phobjikha → Bumthang → Punakha → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Dochula Pass",
      "Phobjikha Valley",
      "Trongsa",
      "Bumthang (Tang Valley)",
      "Jakar",
      "Punakha",
      "Paro",
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2099,
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/DGkalipong2.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Hiking", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Himalayan Scenic Flight — Panoramic Views of the World's Highest Glacial Peaks on Arrival",
      },
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Thimphu Cultural Sights — Memorial Chorten, Buddha Dordenma & Traditional Archery",
      },
      {
        title:
          "Dochula Pass Panorama — 360° Views of the Eastern Himalayan Range at 3,050m",
      },
      {
        title:
          "Phobjikha Valley — Glacial Valley & Winter Home of the Rare Black-Necked Crane",
      },
      {
        title:
          "Central Bhutan — Trongsa Dzong, Bumthang Tang Valley & Ogyen Choling Palace",
      },
    ],
    tourManagerCompany: "Indruka Tours and Travels",
    heroImage: {
      src: "/DGkalipong2.jpg",
      alt: "Bhutan Cultural Journey — Paro, Thimphu, Phobjikha, Bumthang & Punakha 10-Day Tour",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/DGkalipong2.jpg",
        alt: "BhutanCulture1.jpg",
      },
      {
        id: 2,
        src: "/bhutanCulture4.jpg",
        alt: "/bhutanCulture1.jpg",
      },
      {
        id: 3,
        src: "/paro-festival2.jpg",
        alt: "paro-festival2",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Bhutan Cultural Journey", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "10 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 10,
    countryCount: 1,
    cityCount: 8,
    region: "Kingdom of Bhutan",
    maxGuests: 16,
    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Phobjikha Valley", nights: 1 },
      { city: "Tang Valley (Bumthang)", nights: 1 },
      { city: "Jakar (Bumthang)", nights: 1 },
      { city: "Punakha", nights: 2 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Tachog Lhakhang & Transfer to Thimphu",
        details: [
          "Experience one of the world's most remarkable flight journeys as the aircraft descends into Bhutan, offering panoramic views of the majestic Himalayas and some of the highest glacial peaks on earth.",
          "Upon arrival, guests are warmly received by a Indruka Tours and Travels representative and transferred toward Thimphu.",
          "En route, shortly after Isuna village and before reaching Chhuzom, a visit is made to the historic Tachog Lhakhang — gracefully set at the base of a mountain along the Paro–Thimphu highway.",
          "A short walk across the Paro River via a traditional iron chain bridge leads to this sacred site, built in the 14th century by the revered saint and engineer Thangtong Gyalpo following his vision of Balaha — the spiritual horse and an emanation of Avalokiteshvara.",
          "Renowned for constructing 108 iron bridges across the region, his legacy lives on here, with the present bridge reconstructed in traditional style in 2005 after the original was lost to floods. The temple remains privately maintained by his descendants.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing — Memorial Chorten, Buddha Dordenma & Archery Ground",
        details: [
          "After breakfast, the day begins with a visit to the Memorial Chorten — an iconic stupa built in honour of Bhutan's Third King and a vibrant centre of daily devotion for locals.",
          "Continue to the magnificent Buddha Dordenma — a towering statue of Shakyamuni Buddha housing over one hundred thousand smaller Buddha statues — seated atop Kuensel Phodrang with sweeping views over the Thimphu Valley.",
          "For those seeking a more active experience, an optional scenic hike from Buddha Point to Changangkha is available, offering breathtaking vistas and taking approximately two hours.",
          "In the afternoon, visit the bustling vegetable market, followed by the traditional archery ground where Bhutan's national sport is played, showcasing both skill and lively community spirit.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Phobjikha Valley",
        details: [
          "After breakfast, a scenic drive to Dochula Pass at 3,050 metres offers breathtaking panoramic views of the eastern Himalayan range on clear days, including peaks such as Masagang, Tsendagang, Terigang, Jejegangphugang, Kangphugang, Zongphugang, and the majestic Gangkar Puensum — the highest mountain in Bhutan — alongside the distinctive Table Mountain overlooking the remote Lunana region.",
          "The journey continues descending through winding mountain roads into the lush Wangduephodrang Valley, arriving in time for lunch, before proceeding onward to the tranquil Phobjikha Valley.",
          "Also known as Gangtey Valley, this expansive U-shaped glacial valley is home to the historic 17th-century Gangtey Monastery of the Nyingma school, perched gracefully on the valley slope.",
          "Phobjikha serves as the winter habitat for the rare black-necked cranes migrating from the Tibetan Plateau, often observed performing their traditional circling ritual over the monastery upon arrival and departure.",
          "A visit to the Black-Necked Crane Information Centre provides insights into conservation efforts for this endangered species.",
          "Spanning approximately 163 square kilometres and managed by the Royal Society for the Protection of Nature (RSPN), the valley is a designated protected area rich in biodiversity.",
          "The night is spent at a hotel in Phobjikha Valley.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Phobjikha Valley → Trongsa Dzong → Tang Valley (Bumthang)",
        details: [
          "After breakfast, the drive heads toward Trongsa with an en-route stop at Chendebji Chorten — patterned after Kathmandu's Swayambhunath Stupa with painted eyes facing the four cardinal directions — built in the 18th century by Lama Shida from Tibet to subdue an evil spirit believed to have been defeated at this site.",
          "After lunch, Trongsa Dzong is visited — built in 1648 and the historic seat of power over central and eastern Bhutan, from which the first and second Kings governed the country. All four Kings were traditionally appointed as Trongsa Penlop (Governor) prior to ascending the throne, and the present Crown Prince continues to hold this esteemed position.",
          "The dzong is an impressive architectural masterpiece featuring multiple levels cascading along the contours of the ridge on which it stands.",
          "After visiting Trongsa, the drive continues to Bumthang and onward to Tang Valley.",
          "Ogyen Choling Palace is visited — originally built in the 16th century by Deb Tsokye Dorje — with the present structure comprising a temple, servants' quarters, and main residential building reconstructed following damage from the 1897 earthquake. A guesthouse established under a trust fund generates revenue that contributes directly to the property's preservation.",
          "If available, there may be an opportunity to dine with Dr. Walter Roder, former Country Director of Helvetas Swiss Cooperation, offering valuable insights into Bhutan's rural development and cultural heritage.",
          "The night is spent at Tang Valley.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Tang Valley → Ogyen Choling Museum → Kurje Lhakhang → Jakar",
        details: [
          "After breakfast, the Ogyen Choling Museum is visited, offering fascinating insights into Bhutan's aristocratic heritage and traditional rural life, before driving back to Bumthang Valley.",
          "En route, the sacred Kurje Lhakhang is visited — one of Bhutan's most revered temples, believed to mark the site where Guru Rinpoche subdued a local demon and left the imprint of his body on a rock. The temple complex consists of three main shrines, with the oldest dating back to the 8th century, making it an important pilgrimage destination.",
          "Jakar Dzong — famously known as the 'Castle of the White Bird' — is then explored: a striking 17th-century fortress serving as both the religious and administrative centre of Bumthang, perched on a ridge overlooking the valley with classic Bhutanese whitewashed walls, intricate woodwork, and tiered roofs.",
          "The night is spent at a hotel in Jakar, Bumthang.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Bumthang → Wangdue Phodrang → Chimi Lhakhang → Punakha",
        details: [
          "After breakfast, a scenic drive to Punakha includes a stop at Wangdue Phodrang Dzong — a historic fortress strategically perched on a ridge overlooking the confluence of the Punatsang Chhu and Dang Chhu rivers, reflecting its importance as a former defensive stronghold.",
          "A visit is made to Chimi Lhakhang in the Lobesa Valley — a revered temple dedicated to Lama Drukpa Kuenley, the 15th-century 'Divine Madman' known for his unconventional teachings — widely regarded as the Temple of Fertility, attracting couples seeking blessings for children. The temple is reached via a pleasant 30-minute walk through picturesque farmlands, with an option to drive closer and enjoy a traditional Bhutanese farmhouse lunch.",
          "In the afternoon, the magnificent Punakha Dzong is visited — an architectural masterpiece at the confluence of two rivers, which served as Bhutan's capital until 1955 and remains the winter residence of the central monastic body. It is also the historic site where Bhutan's first King, Ugyen Wangchuck, was crowned in 1907, and stands as a symbol of resilience having withstood fires, earthquakes, and floods.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Punakha Sightseeing — Khamsum Chorten & Punakha Dzong",
        details: [
          "After breakfast, a scenic excursion is made to the Khamsum Yulley Namgyal Chorten — gracefully perched on a ridge above the Punakha Valley and reached via a pleasant one-hour hike through picturesque countryside.",
          "This four-storey temple, commissioned by Her Majesty the Queen Mother, is a remarkable showcase of Bhutanese craftsmanship, constructed over nine years by skilled artisans following traditional Buddhist scriptures, and dedicated to the wellbeing of the kingdom and all sentient beings.",
          "In the afternoon, Punakha Dzong is revisited at leisure — an architectural masterpiece at the confluence of the Pho Chhu and Mo Chhu rivers, once the capital of Bhutan until 1955, and the winter residence of the central monastic body. Despite facing fires, earthquakes, and floods — including a major flood in 1994 — the dzong stands resilient, preserving its sacred relics and cultural legacy.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Punakha → Ta Dzong & Rinpung Dzong → Paro",
        details: [
          "After breakfast, a scenic drive heads to Paro — a valley renowned for its natural beauty and cultural heritage.",
          "In the afternoon, Ta Dzong (National Museum of Bhutan) is visited — originally built as a watchtower for Paro Dzong and now housing an extensive collection of Bhutanese art, artefacts, and historical treasures.",
          "A visit is then made to Rinpung Dzong (Paro Dzong) — an impressive fortress constructed in 1646 by Zhabdrung Ngawang Namgyal, showcasing exquisite Bhutanese architecture and serving as an important religious and administrative centre.",
          "In the evening, a leisurely stroll through Paro town allows for exploring local handicraft shops and experiencing the charm of Bhutanese culture.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Tiger's Nest Hike — Paro Taktsang",
        details: [
          "After breakfast, the hike to Taktsang Palphug Monastery — popularly known as Paro Taktsang or the Tiger's Nest — begins; dramatically perched on a cliff at 3,120 metres above the Paro Valley, it is one of Bhutan's most revered landmarks and a powerful cultural symbol.",
          "The ascent takes 2 to 3 hours depending on pace and fitness level, with the option to ride a horse to the halfway point (approximately 1 to 1.5 hours); the trail winds through serene blue pine forests adorned with colourful prayer flags.",
          "The Taktsang Cafeteria at the halfway point provides spectacular views of the monastery for those preferring a lighter experience without completing the full climb.",
          "The descent takes around 1.5 to 2 hours, making the total round trip approximately 4 to 5 hours.",
          "If time permits in the afternoon, a return visit to Ta Dzong National Museum is possible before a leisurely evening stroll through Paro town for shopping and exploration.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Departure from Paro",
        details: [
          "After breakfast, transfer to Paro International Airport for the onward flight.",
        ],
      },
    ],
    inclusions: [
      "All Meals",
      "Daily Mineral Water",
      "Sustainable Development Fee",
      "English Language Speaking Guide",
      "Accommodation on a twin-sharing basis",
      "Comfortable Vehicles with Skilled Drivers",
      "A minimum of 3 star accommodation (4 & 5 star may require an additional premium)",
      "Monument entrance fees as per itinerary",
    ],
    exclusions: [
      "Airfare international & domestic",
      "Personal shopping",
      "Tips for guide & driver",
      "Travel insurance",
      "Laundry",
      "Alcohol",
      "Horse riding fees at Tiger's Nest (optional)",
    ],
    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value:
          "Paro · Thimphu · Dochula Pass · Phobjikha Valley · Trongsa · Bumthang · Punakha",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-BCJ-PBH-10" },
      { label: "Meals", value: "All meals included" },
      {
        label: "Best Time",
        value: "March–May (Spring) & September–November (Autumn)",
      },
      { label: "Group Size", value: "Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Sightseeing" },
    ],
  }, //
  // luxury of bhutan

  {
    id: 523,
    country: "Bhutan",
    place: "Paro",
    title: "Bhutan Luxury Tour",
    type: "Luxury",
    duration: "11 Days / 10 Nights",
    durationTag: "11 Days",
    startEnd: "Paro → Thimphu → Punakha → Gangtey → Bumthang → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Dochula Pass",
      "Punakha",
      "Gangtey (Phobjikha Valley)",
      "Bumthang",
      "Paro",
    ],
    amenities: [
      "Luxury Hotels",
      "Meals",
      "Transfers",
      "Sightseeing",
      "Private Guide",
    ],
    price: 2299,
    rating: 0,
    reviews: 0,
    badge: "Luxury",
    badgeColor: "bg-yellow-600",
    mode: "Tour",
    src: "/bhutan-lux.jpg",
    popular: true,
    tourFeatures: [
      {
        icon: "Building2",
        label: "Luxury Hotels",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: "UtensilsCrossed",
        label: "Fine Dining",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Hiking", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Zhiwaling Heritage Stay — Bhutan's Only All-Bhutanese Luxury Heritage Property in Paro",
      },
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Buddhism & Meditation — Rare Private Session with a Reincarnate Lama",
      },
      {
        title:
          "Gross National Happiness Talk — Expert-Led Evening Session on Bhutan's Guiding Philosophy",
      },
      {
        title:
          "Gangtey Lodge Stay — Award-Winning Lodge in the Mystical Phobjikha Valley",
      },
      {
        title:
          "Bumthang Spiritual Journeys — Sacred Sites Linked to Guru Rinpoche & Nuns' Drum Ceremony",
      },
      {
        title:
          "Community Immersion — Village Cooking Class, Social Projects & Cultural Encounters",
      },
      {
        title:
          "Private Farewell Dinner — Exclusive Evening with a Bhutanese Dignitary & Cultural Performances",
      },
    ],
    tourManagerCompany: "Indruka Tours and Travels",
    heroImage: {
      src: "bhutan-lux2.jpg",
      alt: "Bhutan Luxury Tour — Thimphu, Punakha, Gangtey & Bumthang 11-Day Luxury Journey",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/bhutan-lux3.jpg",
        alt: "bhutan-lux3",
      },
      {
        id: 2,
        src: "/bhutan-lux4.jpg",
        alt: "bhutan-lux4",
      },
      {
        id: 3,
        src: "/bhutan-lux5.jpg",
        alt: "bhutan-lux5",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Bhutan Luxury Tour", href: "" },
    ],
    badges: [
      { label: "LUXURY", variant: "solid", color: "yellow" },
      { label: "11 DAYS", variant: "outlined", color: "cyan" },
    ],
    durationDays: 11,
    countryCount: 1,
    cityCount: 6,
    region: "Kingdom of Bhutan",
    maxGuests: 0,
    itineraryStops: [
      { city: "Thimphu", nights: 2 },
      { city: "Punakha", nights: 2 },
      { city: "Gangtey (Phobjikha Valley)", nights: 2 },
      { city: "Bumthang", nights: 2 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title:
          "Arrival in Paro — Scenic Himalayan Flight & Transfer to Thimphu",
        details: [
          "Arrival into Bhutan offers sweeping views of the Himalayas, including Mount Everest, Kanchenjunga, and Bhutan's sacred peaks — Jomolhari (7,326m) and Gangkar Puensum (7,570m, the world's highest unclimbed peak).",
          "A warm welcome is extended by a compassionate Yangphel guide and driver upon landing.",
          "A leisurely drive of approximately 55 km (~1.5 hours) leads to Thimphu, Bhutan's charming capital, with sightseeing en route depending on arrival time.",
          "The night is spent at a luxury lodge in Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Thimphu — Cultural Immersion, GNH Talk & Fine Dining",
        details: [
          "The day begins with visits to Thimphu's key cultural landmarks: the National Memorial Chorten, Folk Heritage Museum, Takin Preserve, and the magnificent Buddha Dordenma — the world's largest seated Buddha statue.",
          "A visit to Chari Monastery includes a picnic lunch and an immersive experience at the Choki Traditional Arts School, where students practice classical Bhutanese art forms.",
          "The afternoon offers an urban experience alongside locals — exploring Changyul Park, the vibrant Farmers Market, and the Takin Reserve.",
          "The evening features a thought-provoking talk on Bhutan's guiding philosophy of Gross National Happiness, followed by fine dining.",
          "The night is spent at a luxury lodge in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Thimphu → Dochula Pass → Punakha — The Ancient Capital",
        details: [
          "A scenic drive of approximately 85 km (~3 hours) crosses Dochula Pass at 3,140 metres — adorned with 108 chortens and offering panoramic Himalayan views.",
          "The route descends into the subtropical Punakha Valley at 1,300 metres.",
          "Punakha Dzong — Bhutan's most beautiful fortress — is visited at the confluence of the Pho Chhu and Mo Chhu rivers, followed by a crossing of the longest suspension bridge in Bhutan with spectacular views of the river flowing south of the dzong.",
          "The night is spent at a luxury lodge in Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Punakha — Valley Exploration, Temple Hikes & Private Monastery Blessings",
        details: [
          "The morning includes a hike through rice fields to Chimi Lhakhang — the revered Temple of Fertility dedicated to the Divine Madman, Lama Drukpa Kuenley.",
          "A further hike leads to Khamsum Yulley Chorten — the King's temple — perched on a ridge above the Punakha Valley.",
          "Optional white-water rafting along the Mo Chhu (female river) is available for those seeking light adventure.",
          "A rare and intimate private blessing ceremony is held with monks at the centuries-old Chorten Nyebu Monastic School.",
          "The night is spent at a luxury lodge in Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Punakha → Gangtey — The Mystical Phobjikha Valley",
        details: [
          "A scenic drive of approximately 75 km (~3.5 hours) leads into the mystical Phobjikha Valley at 2,990 metres — the winter home of the rare black-necked cranes migrating from the Tibetan Plateau.",
          "The afternoon is spent strolling through traditional villages and immersing in the serene valley life, followed by the 360-degree hike trail offering sweeping panoramic views.",
          "The evening features a Buddhism talk with a Bhutanese expert, followed by a guided meditation session.",
          "The night is spent at Gangtey Lodge — celebrated for its design, views, and soulful service.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Gangtey — Nature Trail, Community Immersion & Village Cooking Class",
        details: [
          "The morning begins with a visit to Gangtey Monastery — one of Bhutan's most important Nyingma Buddhist centres — followed by a forest-bathing hike along the nature trail through pine forests.",
          "The afternoon is dedicated to a community immersion project, engaging in meaningful social work alongside local residents.",
          "A visit to the black-necked crane research centre is followed by a hands-on cooking class in a village home, learning to prepare authentic Bhutanese dishes such as red rice, ema datshi (chilli cheese), and homemade butter tea.",
          "The night is spent at Gangtey Lodge.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Gangtey → Bumthang — Bhutan's Spiritual Heartland",
        details: [
          "One of the most scenic drives of the journey — approximately 188 km (~7 hours) — crosses high passes and pristine landscapes to arrive in Bumthang, the spiritual heartland of Bhutan, at 2,600 metres.",
          "The evening includes a leisurely walk through Jakar town and its traditional markets.",
          "Depending on the time of travel, there may be an opportunity to witness a local festival in the valley.",
          "The night is spent at Amankora Bumthang.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Bumthang — Sacred Temples, Nuns' Drum Ceremony & Bushman's Trail Hike",
        details: [
          "The day is spent exploring Bumthang's most sacred sites: Jambay Lhakhang, Kurjey Lhakhang, and Tamshing Monastery — all linked to Guru Rinpoche and central to Bhutanese spiritual heritage.",
          "A deeply moving prayer ceremony is joined alongside nuns in a nunnery, accompanied by the melodious chanting of drums.",
          "The afternoon brings an adventurous 3-hour hike along the Bushman's Trail through Bumthang's scenic highlands.",
          "The night is spent at Amankora Bumthang.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Domestic Flight to Paro — National Museum, Paro Dzong & Zhiwaling Heritage",
        details: [
          "A morning domestic flight of approximately 30 minutes from Bumthang to Paro offers spectacular aerial views of the Eastern Himalayan snow peaks, including Gangkar Puensum — the world's highest unclimbed peak.",
          "The afternoon includes visits to the National Museum (Ta Dzong) — originally built as a watchtower for Paro Dzong — and the impressive Rinpung Dzong (Paro Dzong) along with its historic cantilevered covered bridge.",
          "The evening is spent at leisure at Zhiwaling Heritage — Bhutan's first and only hotel wholly inspired, designed, and built by Bhutanese artisans — where traditional hand-carved architecture meets refined modern comfort.",
          "The night is spent at Zhiwaling Heritage, Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Tiger's Nest Hike — Taktsang Monastery & Private Farewell Dinner",
        details: [
          "The signature hike to Taktsang Monastery — the Tiger's Nest — perched on a cliffside at 3,120 metres above the Paro Valley is undertaken: a round trip of approximately 4 to 5 hours covering ~5 km.",
          "A reflective meditation session is held at this sacred site, one of the most revered pilgrimage destinations in the Buddhist world.",
          "The evening is marked by a private farewell dinner with a Bhutanese dignitary, celebrating the journey with traditional cultural performances.",
          "The night is spent at Zhiwaling Heritage, Paro.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Departure from Bhutan",
        details: [
          "An early morning transfer is made to Paro International Airport.",
          "Guides and drivers bid heartfelt farewells, offering blessings for safe travels.",
          "One final glimpse of the Himalayas from the flight window — a reminder that Bhutan awaits a return.",
        ],
      },
    ],
    inclusions: [
      "All Meals including Fine Dining",
      "Daily Mineral Water",
      "Sustainable Development Fee",
      "Compassionate Expert Guide (Indruka Tours and Travels)",
      "Luxury Vehicles with Professional Drivers",
      "Accommodation at Luxury Properties (Zhiwaling Heritage, Amankora Bumthang, Gangtey Lodge & equivalent)",
      "Domestic Flight — Bumthang to Paro",
      "Gross National Happiness Evening Talk",
      "Private Blessing Ceremony at Chorten Nyebu Monastic School",
      "Buddhism & Meditation Session with a Reincarnate Lama",
      "Village Cooking Class",
      "Community Immersion & Social Project",
      "Traditional Hot Stone Bath",
      "Archery Experience",
      "Private Farewell Dinner with a Bhutanese Dignitary",
      "Monument entrance fees as per itinerary",
    ],
    exclusions: [
      "International airfare",
      "Personal shopping",
      "Tips for guide & driver",
      "Travel insurance",
      "Laundry",
      "Alcohol (unless specified)",
      "Optional rafting along Mo Chhu river",
      "Horse riding fees (optional)",
    ],
    tourDetails: [
      { label: "Duration", value: "11 Days / 10 Nights" },
      {
        label: "Destinations",
        value: "Paro · Thimphu · Dochula Pass · Punakha · Gangtey · Bumthang",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-BLT-PBH-11" },
      { label: "Meals", value: "All meals included (fine dining)" },
      {
        label: "Best Time",
        value: "March–May (Spring) & September–November (Autumn)",
      },
      { label: "Tour Type", value: "Luxury & Cultural" },
      { label: "Tour Operator", value: "Indruka Tours and Travels" },
      {
        label: "Signature Stay",
        value: "Zhiwaling Heritage, Paro · Gangtey Lodge · Amankora Bumthang",
      },
      { label: "Domestic Flight", value: "Bumthang → Paro (included)" },
    ],
  },
  //Laya Festivals
  {
    id: 524,
    country: "Bhutan",
    place: "Paro",
    title: "Happiness Trek",
    type: "Trekking",
    duration: "14 Days / 13 Nights",
    durationTag: "14 Days",
    startEnd:
      "Paro → Bumthang → Trongsa → Trek → Phobjikha → Punakha → Thimphu → Paro",
    destinations: [
      "Paro",
      "Bumthang (Jakar Valley)",
      "Trongsa",
      "Kasiphey Monastery Camp",
      "Drongthang Village Camp",
      "Mangdiphu",
      "Bemji Nagtshang Camp",
      "Phobjikha Valley",
      "Punakha",
      "Thimphu",
      "Paro",
    ],
    amenities: [
      "Hotels",
      "Guesthouses",
      "Homestays",
      "Camping",
      "Meals",
      "Transfers",
      "Sightseeing",
    ],
    price: 3599,
    rating: 0,
    reviews: 0,
    badge: "Trekking",
    badgeColor: "bg-green-600",
    mode: "Trek",
    src: "/The lake.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Tent", label: "Camping", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Mountain", label: "Trekking", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Central Bhutan Trek — Follow the Mangdi Chu River Through Remote Villages & Hidden Valleys",
      },
      {
        title:
          "Tiger's Nest Hike — Iconic Taktsang Monastery Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Drongthang Village — Cultural Immersion, Folk Dances & Traditional Ara Moonshine",
      },
      {
        title:
          "Bumthang Sacred Sites — Jambay Lhakhang, Kurjey Lhakhang & Mebartsho Burning Lake",
      },
      {
        title:
          "Phobjikha Valley — Glacial Wetlands & Winter Home of the Rare Black-Necked Crane",
      },
      {
        title:
          "Bemji Nagtshang — Historic Noble Manor of Bhutan's Revered Reincarnate Lama Lineage",
      },
    ],
    tourManagerCompany: "Indruka Tours and Travels",
    heroImage: {
      src: "/The lake.jpg",
      alt: "Happiness Trek — 14-Day Culture, Trekking & Timeless Adventure Through Bhutan",
    },
    testimonials: [],
    thumbnails: [
      {
        id: 1,
        src: "/adikalesh.jpg",
        alt: "happiness-trek2",
      },
      {
        id: 2,
        src: "/happiness-trek3.jpg",
        alt: "happiness-trek3",
      },
      {
        id: 3,
        src: "/happiness-trek4.jpg",
        alt: "happiness-trek4",
      },


    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Paro", href: "/bhutan/paro" },
      { label: "Happiness Trek", href: "" },
    ],
    badges: [
      { label: "TREKKING", variant: "solid", color: "green" },
      { label: "14 DAYS", variant: "outlined", color: "cyan" },
      { label: "MODERATE", variant: "outlined", color: "amber" },
    ],
    durationDays: 14,
    countryCount: 1,
    cityCount: 7,
    region: "Kingdom of Bhutan",
    maxGuests: 0,
    itineraryStops: [
      { city: "Paro / Thimphu", nights: 1 },
      { city: "Bumthang (Jakar)", nights: 2 },
      { city: "Trek Camps (Kasiphey · Drongthang · Bemji)", nights: 4 },
      { city: "Phobjikha Valley", nights: 2 },
      { city: "Punakha", nights: 1 },
      { city: "Thimphu", nights: 1 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Paro — Scenic Himalayan Flight & Welcome to Bhutan",
        details: [
          "Arrival into Bhutan offers breathtaking views of the Eastern Himalayas, including some of the world's highest peaks.",
          "Guests are warmly received by a Indruka Tours and Travels representative and guide upon landing at Paro International Airport.",
          "Transfer to the hotel for check-in, orientation briefing, and a welcome dinner introducing the journey ahead.",
          "The night is spent at a hotel in Paro or Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Domestic Flight to Bumthang — Sacred Temples of the Chamkhar Valley",
        details: [
          "Weather permitting, a breathtaking domestic flight is taken to Bumthang at 2,600 metres, soaring over Himalayan peaks, rivers, and the Black Mountain Range (4,922m).",
          "Arrival in Jakar Valley at 2,800 metres is followed by a spiritual hike of 6 to 8 km through the Chamkhar Valley, visiting sacred temples and monasteries tied to Guru Rinpoche — who brought Buddhism to Bhutan.",
          "Jambay Lhakhang (2,700m) is visited — a 7th-century temple built to subdue an ogress obstructing the spread of Buddhism.",
          "Kurjey Lhakhang (2,750m) is explored — Guru Rinpoche's meditation site, with the imprint of his body still visible in the rock within the temple complex.",
          "An optional 2 km hike continues to Tamshing Monastery (2,700m) — a 16th-century Nyingma monastery founded by Pema Lingpa, featuring ancient murals and a sacred chainmail vest used in a purification ritual.",
          "The afternoon includes a visit to a Swiss project site to sample Bhutanese cheese, Red Panda beer, apple juice, and honey, followed by a stroll through Chamkhar town for local handicrafts.",
          "The night is spent at a lodge in Bumthang.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Ogyen Choling Palace · Pemacholing Nunnery · Mebartsho (Burning Lake)",
        details: [
          "Ogyen Choling — the Palace of Bliss — is visited: once home to 14th-century Buddhist scholar Longchen Rabjam and now a private museum preserving Bhutan's noble history, religious relics, and traditions. If fortunate, guests may meet Azhi Kunzang Choden, a historian and direct descendant, whose insights bring Bhutan's past to life.",
          "On the return from Tang Valley (25 km / ~1 hour), a stop is made at Pemacholing Nunnery (2,700m), where over 300 Buddhist nuns devote their lives to prayer and meditation. Guests witness the sacred Choed Drum Ceremony — a ritual of chants, drums, and bells believed to purify karma and bring blessings.",
          "A short 1 km pilgrimage hike (~30 minutes round trip) leads to Mebartsho — the Burning Lake — where the 15th-century treasure revealer Pema Lingpa performed his first miracle, retrieving hidden relics from the lake while keeping a butter lamp burning. Today it remains a revered site adorned with prayer flags and offerings.",
          "The night is spent at a lodge in Bumthang.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Trek Day 1: Drive to Trongsa → Trek to Kasiphey Monastery Camp — 14.4 km / 5–6 Hours / ~3,050m",
        details: [
          "A scenic 2-hour drive to Trongsa begins the trekking phase of the journey, where camp staff and pack animals are met and luggage is handed over to the crew.",
          "The first stage of the trek begins with a gradual ascent through dense oak forests, steadily revealing expansive valley views as elevation is gained.",
          "The route climbs to Dhemlay La Pass (~3,050m / ~10,000 ft), where a breathtaking panoramic view of the Nubchutey region unfolds.",
          "After crossing the pass, the trail descends to the first night's campsite, situated just below Kasiphey Monastery — a serene monastery founded in 1999 by Gangtey Tulku Rinpoche, home to over 50 young monks dedicated to Buddhist studies and practice.",
          "Trek details: 14.4 km / 9 miles · 5–6 hours · Elevation gain 485m / 1,600 ft.",
          "The night is spent at Kasiphey Monastery Camp.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Trek Day 2: Kasiphey → Drongthang Village — 14.4 km / 4–5 Hours / 2,590m",
        details: [
          "The trail descends toward the Mangdi Chu River, offering stunning views of terraced fields and ancient Bhutanese farmhouses, with the tranquil sounds of flowing water and birdsong as constant companions.",
          "After a gentle stretch along the valley floor, the trail ascends past an ancient chorten, leading to the remote village of Drongthang at 2,590 metres — the domain of the Takin, Bhutan's national animal, which roams the surrounding forests.",
          "Drongthang holds deep spiritual significance as the believed site where the Bodhisattva Gyalpo Drimed Kuenden journeyed from India and established a temple as early as the 3rd century.",
          "After settling into camp, the village is explored; the evening is spent with the village headman and elders, gaining insight into local traditions and ways of life.",
          "Trek details: 14.4 km / 9 miles · 4–5 hours · Elevation gain 300m / 1,000 ft · Elevation loss 360m / 1,200 ft.",
          "The night is spent at Drongthang Village Camp.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Day Hike to Mangdiphu — Hidden Shangri-La, Farm Activities & Village Celebration",
        details: [
          "Today's hike leads to Mangdiphu — a secret Baeyul (hidden Shangri-La) in the upper reaches of the Mangdi Chu River — consisting of just four traditional Bhutanese houses and believed to be the last settlement upstream, untouched by modernity.",
          "The trail meanders through whispering pine forests, emerald meadows, and gently cascading streams, revealing breathtaking glimpses of dark rocky peaks embracing this secluded haven.",
          "Lunch is enjoyed at Mangdiphu, accompanied by immersive farm activities — milking cows, churning butter, and making farm cheese — before hiking back to Drongthang.",
          "The afternoon in Drongthang offers leisure and cultural immersion: a visit to a traditional farmhouse where guests learn about the centuries-old process of brewing Ara (local moonshine), with the option to sample a glass by the village hearth.",
          "As twilight settles, the village gathers in honour of the guests — flickering butter lamps illuminate traditional folk dances under the starlit Himalayan sky, culminating in a shared feast of stories, laughter, and Ara.",
          "The night is spent at Drongthang Village Camp.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Trek Day 3: Drongthang → Bemji Nagtshang — 16 km / 4–5 Hours",
        details: [
          "The trail gently descends toward the Mangdi Chu River, passing through quaint hamlets and terraced fields with breathtaking valley views, surrounded by the timeless rhythms of rural Bhutan — farmers tending crops, prayer flags fluttering, and the river carving through the valley.",
          "After a scenic lunch with panoramic vistas, the route gradually ascends to Bemji — a village steeped in history — where Bemji Nagtshang stands: a historic manor house that serves as the ancestral home of past temporal rulers and descendants of revered reincarnate lamas, including Gyalsey Tenzin Rabgyal and Gangtey Tulku.",
          "Camp is set up in the village community schoolyard — a perfect vantage point to absorb the beauty and tranquility of this historic enclave.",
          "If fortunate, the schoolchildren of Bemji's small community school gather to perform traditional Bhutanese songs, filling the evening air with pure and joyful harmonies.",
          "Trek details: 16 km / 10 miles · 4–5 hours · Elevation loss 90m / 300 ft.",
          "The night is spent at Bemji Nagtshang Village Camp.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Trek Day 4 (Final): Bemji → Bjizam → Drive to Phobjikha via Pele La Pass",
        details: [
          "An optional visit to the school's morning assembly offers a memorable start — students sing the Bhutanese national anthem followed by a meditation session, with the chance to visit classrooms and meet the children.",
          "The final hike descends to the Mangdi Chu River, crossing to the opposite bank and winding along the mountainside to the village of Bjizam, where the awaiting vehicle marks the triumphant end of the trekking adventure.",
          "A celebratory scenic picnic lunch is enjoyed before the drive toward Phobjikha Valley, crossing Pele La Pass at 3,353 metres (11,000 ft).",
          "The night is spent at a hotel or guesthouse in Phobjikha Valley.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Phobjikha Valley — Black-Necked Cranes, Crane Centre & Nature Trail",
        details: [
          "Phobjikha — a glacial valley of ethereal beauty — is home to the endangered black-necked cranes migrating from the Tibetan Plateau each winter to roost in its marshy wetlands. Bhutan's conservation efforts in collaboration with WWF have helped safeguard this precious haven.",
          "A visit to the Crane Information Centre provides invaluable insight into the cranes' migratory patterns, folklore, and Bhutan's commitment to wildlife preservation.",
          "An optional nature trail hike along the ridge of Phobjikha Valley (2.99 km / ~1.5 hours easy) winds through fragrant pine forests and open countryside, offering panoramic views of the valley, wetlands, and cranes gliding gracefully over the marshes.",
          "The evening is spent in quiet reflection on the journey — one that has traversed breathtaking landscapes and gone deep into the heart and soul of Bhutan.",
          "The night is spent at a hotel or guesthouse in Phobjikha Valley.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Phobjikha → Punakha — Punakha Dzong & Khamsum Chorten Hike",
        details: [
          "An 85 km (~3 hour) drive descends 1,830 metres from Lawala Pass through lush subtropical valleys to Punakha — once Bhutan's ancient capital and still the winter residence of the Central Monk Body.",
          "After lunch, Punakha Dzong is visited — an architectural marvel built in 1637 by Zhabdrung Ngawang Namgyal at the confluence of the Pho Chhu and Mo Chhu rivers, housing sacred relics and hosting Bhutan's grandest festivals: Punakha Drubchen and Punakha Tshechu.",
          "In the afternoon, a 3.5 km hike (~1.5 to 2 hours round trip) through rice fields and pine forests leads to Khamsum Yulley Namgyal Chorten — a hilltop temple built by Queen Mother Ashi Tshering Yangdon Wangchuck for the peace and prosperity of Bhutan — featuring intricate Buddhist murals and stunning panoramic views from the rooftop.",
          "The night is spent at a hotel in Punakha.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Punakha → Dochula Pass → Chimi Lhakhang → Thimphu",
        details: [
          "The drive to Thimphu at 2,320 metres crosses Dochula Pass at 3,100 metres — marked by 108 Druk Wangyal Chortens built in honour of Bhutan's Fourth King — offering panoramic Himalayan views including Gangkar Puensum (7,570m) on clear days.",
          "Before reaching Thimphu, a short 1.5 km hike (~45 minutes round trip) through rice paddies leads to Chimi Lhakhang — the Fertility Temple — built in the 15th century by disciples of the Divine Madman, Lama Drukpa Kuenley, drawing couples from across Bhutan seeking blessings for children.",
          "By early afternoon, arrival in Bhutan's vibrant capital is followed by free time to explore: a stroll along Norzin Lam lined with handicraft stores and cafes, a visit to the Centenary Farmers Market, and a stop at Clock Tower Square for butter tea and momos.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 12,
        date: "Day 12",
        title: "Thimphu Sightseeing — Markets, Crafts & Drive to Paro",
        details: [
          "If visiting on a weekend, the day begins at Thimphu's bustling weekend market, where farmers and artisans sell fresh produce, handmade textiles, wooden masks, and traditional crafts — a wonderful opportunity to mingle with locals.",
          "The afternoon includes visits to the Green Weaving Centre and National Textile Museum to discover Bhutan's rich weaving traditions; the Handmade Paper Factory where traditional Deh-sho paper is crafted from tree bark and herbs; the Archery Grounds to watch Bhutan's national sport celebrated with dances and witty banter; and the Takin Preserve (2,600m) to see Bhutan's national animal tied to the Divine Madman legend.",
          "In the late afternoon, a 2-hour scenic drive to Paro passes through pine forests, farmlands, and villages, arriving to majestic views of Paro Dzong and the National Museum.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 13,
        date: "Day 13",
        title: "Tiger's Nest Hike — Taktsang Monastery & Farewell Dinner",
        details: [
          "The iconic hike to Taktsang Monastery — Bhutan's most sacred pilgrimage site — begins after breakfast: perched 900 metres above the Paro Valley, the monastery dates to 747 CE when Guru Rinpoche is said to have arrived on a flying tigress to subdue evil spirits. The round trip covers 13.2 km over 5 to 6 hours.",
          "The trail winds through pine and rhododendron forests to the Taktsang Cafeteria (2,800m) with breathtaking views, then ascends to a stupa viewpoint before the final approach into the monastery's sacred shrines, murals, and prayer halls.",
          "The afternoon in Paro offers leisure options: strolling through local markets and handicraft shops, visiting Kyichu Lhakhang (2,250m) — one of Bhutan's oldest temples — or relaxing with a traditional hot stone bath to soothe tired muscles.",
          "The evening is marked by a special farewell dinner celebrating the incredible journey through Bhutan with traditional cuisine and cherished memories.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 14,
        date: "Day 14",
        title: "Departure from Bhutan — Tashi Delek!",
        details: [
          "The guide and driver accompany guests to Paro International Airport, offering heartfelt farewells and blessings for safe travels.",
          "One final glimpse of Bhutan's rolling hills and towering Himalayan peaks from the flight window serves as a reminder that the Land of the Thunder Dragon always welcomes a return.",
          "Tashi Delek — may the path ahead be filled with happiness, peace, and endless adventure.",
        ],
      },
    ],
    inclusions: [
      "All Meals (Hotels, Guesthouses, Homestays & Camp Kitchen)",
      "Daily Mineral Water",
      "Sustainable Development Fee",
      "Expert Trek Guide (Indruka Tours and Travels)",
      "Trekking Crew, Camp Staff & Pack Animals",
      "Yangphel Signature Camping Gear & Comfortable Tents",
      "Domestic Flight — Paro / Thimphu to Bumthang (weather permitting)",
      "Hotel, Guesthouse & Homestay Accommodation as per itinerary",
      "Comfortable Vehicles with Skilled Drivers",
      "Monument & Monastery Entrance Fees as per itinerary",
      "Traditional Ara (Moonshine) Tasting in Drongthang Village",
      "Farm Activities at Mangdiphu (butter churning, cheese making)",
      "Folk Dance Evening with Drongthang Villagers",
    ],
    exclusions: [
      "International airfare",
      "Personal trekking gear & clothing",
      "Personal shopping",
      "Tips for guide, driver & trekking crew",
      "Travel insurance",
      "Laundry",
      "Alcohol (beyond cultural tastings)",
      "Traditional hot stone bath (optional extra)",
      "Any activities marked as optional",
    ],
    tourDetails: [
      { label: "Duration", value: "14 Days / 13 Nights" },
      {
        label: "Destinations",
        value:
          "Paro · Bumthang · Trongsa · Kasiphey · Drongthang · Mangdiphu · Bemji · Phobjikha · Punakha · Thimphu · Paro",
      },
      {
        label: "Departure & Return",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-HT-PBH-14" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "All year round" },
      { label: "Tour Type", value: "Trekking, Cultural & Village Immersion" },
      { label: "Difficulty", value: "Easy to Moderate" },
      {
        label: "Daily Trek Distance",
        value: "8–16 km / 5–10 miles per trekking day",
      },
      { label: "Max Altitude", value: "~3,353m (Pele La Pass)" },
      { label: "Tour Operator", value: "Indruka Tours and Travels" },
      {
        label: "Accommodation",
        value: "Hotels · Guesthouses · Homestays · Yangphel Signature Camping",
      },
      {
        label: "Domestic Flight",
        value: "Paro/Thimphu → Bumthang (included, weather permitting)",
      },
    ],
  },
  //Phuentsholing
  {
    id: 525,
    country: "Bhutan",
    place: "Phuentsholing",
    title: "From Historical to Modern Day Bhutan",
    type: "Cultural",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd:
      "Phuentsholing → Thimphu → Paro → Phuentsholing → NJP / IXB",
    destinations: [
      "Phuentsholing",
      "Thimphu",
      "Paro",
      "P/ling",
    ],
    amenities: ["Hotels", "Meals", "Cab Transfer", "Sightseeing"],
    price: 2100,
    oldPrice: 2333,
    discount: "10% OFF",
    currency: "INR",
    rating: 0,
    reviews: 0,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/darjeeling11.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotels", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals (MAP)",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Camera", label: "Sightseeing", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Car", label: "Cab Transfer", color: "#E8508A", bg: "#FFF0F4" },
    ],
    tourHighlights: [
      {
        title:
          "Tashichho Dzong — Fortress of Buddhist Religion & Seat of the Bhutanese Government Since 1952",
      },
      {
        title:
          "Buddha Dordenma (Kuensel Phodrang) — Gigantic Statue of Lord Buddha Overlooking Thimphu Valley",
      },
      {
        title:
          "Ta Dzong & Rinpung Dzong — Four-and-a-Half-Century-Old Fortresses Housing Bhutanese Antiquities",
      },
      {
        title:
          "Drukgyel Dzong — UNESCO-Recognised Historic Fortress & Defence Site in the Paro Valley",
      },
      {
        title:
          "Kyichu Lhakhang — One of Bhutan's Oldest Temples, Built in 659 CE",
      },
      {
        title:
          "Phuentsholing — Gateway to Bhutan & the Commercial Heart of the Northern Indian Plains",
      },
    ],
    tourManagerCompany: "Indruka Tourism",
    heroImage: {
      src: "/thimphu4.jpg",
      alt: "From Historical to Modern Day Bhutan — Phuentsholing, Thimphu & Paro 6-Day Tour by Indruka Tourism",
    },
    testimonials: [],
    thumbnails: [
         {
        id: 1,
        src: "/happiness-trek2.jpg",
        alt: "happiness-trek2",
      },
      {
        id: 2,
        src: "/happiness-trek3.jpg",
        alt: "happiness-trek3",
      },
      {
        id: 3,
        src: "/happiness-trek4.jpg",
        alt: "happiness-trek4",
      },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan", href: "/bhutan" },
      { label: "Phuentsholing", href: "/bhutan/phuentsholing" },
      { label: "From Historical to Modern Day Bhutan", href: "" },
    ],
    badges: [
      { label: "CULTURAL", variant: "solid", color: "orange" },
      { label: "6 DAYS", variant: "outlined", color: "cyan" },
      { label: "10% OFF", variant: "solid", color: "green" },
    ],
    durationDays: 6,
    countryCount: 1,
    cityCount: 3,
    region: "Kingdom of Bhutan",
    maxGuests: 0,
    itineraryStops: [
      { city: "Phuentsholing", nights: 2 },
      { city: "Thimphu", nights: 1 },
      { city: "Paro", nights: 2 },
    ],
    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Phuentsholing ",
        details: [
          "Guests are received at Phuentsholing by Indruk Tours and Travel's agents.",
          "After arrival, check-in to the hotel and the evening is spent unwinding from the journey.",
          "The night is spent at a hotel in Phuentsholing.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Phuentsholing → Thimphu — 176 km / ~6 Hours / 2,350m",
        details: [
          "After a Bhutanese breakfast, immigration formalities are completed at the Phuentsholing border before proceeding to Thimphu — the capital and largest city of Bhutan.",
          "The drive of approximately 176 km (~6 hours) ascends to Thimphu at 2,350 metres above sea level — a city celebrated for its unique juxtaposition of ancient tradition and modern lifestyle.",
          "Upon arrival and hotel check-in, guests may choose to rest or begin exploring the capital.",
          "An optional early visit to Tashichho Dzong — the renowned fortress of the Buddhist religion, home and office of the present King, and seat of the Bhutanese government since 1952 — is recommended for those with energy.",
          "The night is spent at a hotel in Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu Sightseeing → Drive to Paro — 65 km / ~2 Hours / 2,280m",
        details: [
          "The morning begins with breakfast at the hotel followed by a sightseeing tour of Thimphu's most iconic landmarks.",
          "Kuensel Phodrang (Buddha Dordenma) is visited first — one of Bhutan's most photogenic destinations, dominated by the gigantic statue of Lord Buddha overlooking the Thimphu Valley.",
          "The National Memorial Chorten is the next stop — a revered monument where visitors can observe and participate in daily devotional rituals, drawing spiritual energy through prayer.",
          "The Folk Heritage Museum offers a rich immersion into Bhutanese culture, rural history, and heritage through demonstrations, exhibits, and documentaries about the country's traditional way of life.",
          "After the morning tour, a scenic 2-hour drive along winding mountain roads through tall lush greenery leads to Paro at 2,280 metres — a valley celebrated for its elegant natural beauty and traditional-style architecture.",
          "The night is spent at a hotel in Paro.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Paro Sightseeing — Dzongs, Ruins & Ancient Temples",
        details: [
          "The day begins with breakfast before a full day of sightseeing across Paro's most significant historical and religious landmarks.",
          "Ta Dzong (National Museum) is visited first — approximately four and a half centuries old, this proud religious fortress houses a priceless collection of Bhutanese antiquities and withstood a major earthquake in 2011.",
          "Rinpung Dzong (Paro Dzong) is next — a fortress of matchless spiritual splendour serving as both a place of worship and the administrative seat of the Paro district, offering a rejuvenating sense of peace.",
          "Drukgyel Dzong is explored — a UNESCO World Heritage-recognised site that served as the region's primary defence until 1951, when it was destroyed by fire. Its evocative ruins continue to speak powerfully of Bhutan's history and heritage.",
          "The day concludes at Kyichu Lhakhang — one of Bhutan's oldest temples, built in 659 CE with the purpose of subduing a demon believed to be obstructing the establishment of Buddhist religion in Tibet.",
          "After a full and rewarding day, guests return to the hotel for dinner and a restful night in Paro.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Paro → Phuentsholing — 200 km / ~7 Hours / 293m",
        details: [
          "After breakfast and hotel check-out, the day is spent on a scenic 7-hour drive of approximately 200 km back to Phuentsholing.",
          "Upon arrival, guests may visit the local market to browse for souvenirs and gifts for loved ones.",
          "The evening is spent at leisure — relaxing and reflecting on the journey through Bhutan before the return the following day.",
          "The night is spent at a hotel in Phuentsholing.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Phuentsholing",
        details: [
          "On the final day, after breakfast and check-out",
          "The journey is a chance to rewind and relive every cherished memory from one of the world's most beautiful and peaceful countries.",
          "The Indruka Tourism representative bids farewell at the station , concluding the Bhutan experience.",
        ],
      },
    ],
    inclusions: [
      "Accommodation in Base Category Hotel Rooms",
      "Meals on MAP Basis (Breakfast , lunch & Dinner daily)",
      "1 Non-AC Cab for Arrival, Departure & All Sightseeing",
      "Porterage at Hotels & Airport",
      "All Applicable Luxury & Road Taxes",
      "Bhutan Innerline Permit",
    ],
    exclusions: [
      "Lunch throughout the tour",
      "Personal shopping & souvenirs",
      "Tips for guide & driver",
      "Travel insurance",
      "Laundry",
      "Alcohol & personal beverages",
      "Any entry tickets not mentioned in the itinerary",
      "Any expense arising due to natural calamity, roadblock, or political unrest",
    ],
    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Destinations", value: "Phuentsholing · Thimphu · Paro" },
      {
        label: "Departure & Return",
        value:
          "Paro → Phuentsholing ",
      },
      { label: "Tour Code", value: "BHU-HMB-PHU-06" },
      { label: "Meals", value: "MAP Basis — Breakfast & Dinner included" },
      { label: "Best Time", value: "March–May & September–November" },
      { label: "Group Size", value: "Private Cab (Non-AC)" },
      { label: "Tour Type", value: "Cultural & Heritage" },
      { label: "Tour Operator", value: "Indruka Tourism" },

      { label: "Price", value: "₹67,000 per person (10% off from ₹60,334)" },
    ],
  },
];