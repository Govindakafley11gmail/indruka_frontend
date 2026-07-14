import type { Tour } from "./tourtype";

export const bhutanTours: Tour[] = [
  {
    id: 512,
    country: "Bhutan",
    place: "Paro",
    title: "Bhutan Tour Package with Haa Valley – 11 Days Cultural Journey",
    type: "cultural",
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
    price: 2599,
    priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.9,
    reviews: 59,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/photo13.webp",
    popular: true,

    seoMeta: {
      slug: "bhutan-tour-package-haa-valley-11-days",
      metaTitle:
        "Bhutan Tour Package with Haa Valley | 11 Days | Paro · Thimphu · Punakha · Bumthang",
      metaDescription:
        "Explore Bhutan in 11 days with visits to Tiger's Nest, Haa Valley homestay, Punakha Dzong, Dochula Pass, and Bumthang temples. Small group cultural tour from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/bhutan-tour-package-haa-valley-11-days",
      keywords: [
        "Bhutan Tour Package",
        "11 Day Bhutan Tour",
        "Haa Valley Tour",
        "Bhutan Cultural Tour",
        "Tiger's Nest Hike",
        "Punakha Dzong Tour",
        "Bumthang Tour",
        "Paro Tour Package",
        "Bhutan Holiday Package",
        "Bhutan Travel Agency",
      ]
    },

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
        title: "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Altitude",
      },
      {
        title:
          "Haa Valley Homestay – Traditional Farmhouse Stay & Hot Stone Bath",
      },
      { title: "Dochula Pass – 108 Chortens & Panoramic Himalayan Views" },
      { title: "Punakha Dzong – Bhutan's Most Beautiful Fortress Monastery" },
      {
        title:
          "Chele La Pass – Highest Motorable Road with Prayer Flags & Peak Views",
      },
      {
        title:
          "Haa Panorama Trail – Pine Forests, Sacred Meri Puensum & Valley Views",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/photo13.jpg",
      alt: "Haa Valley Bhutan – Traditional Farmhouse with Himalayan Mountains in Background",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/photo13.jpg",
        alt: "Haa Dzong Fortress in Haa Valley, Bhutan – Ancient Whitewashed Monastery",
      },
      {
        id: 2,
        src: "/doc3.jpg",
        alt: "Haa Dzongkhag District Landscape – Green Valley and Rice Fields in Bhutan",
      },
      {
        id: 3,
        src: "/tigers-nest-path.jpg",
        alt: "Hiking Trail to Paro Taktsang Tiger's Nest Monastery Through Pine Forest",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Bhutan Tour Package with Haa Valley – 11 Days" },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome & Drive to Thimphu via Tachog Lhakhang",
        details: [
          "Arrive at Paro International Airport (PBH), one of the world's most scenic mountain airports, with breathtaking aerial views of snow-capped Himalayan peaks as your flight descends into the narrow Paro Valley.",
          "Complete immigration and customs at an airport framed by the iconic silhouettes of Paro Dzong and Ta Dzong along the Pa Chu River – a first glimpse of Bhutan's timeless architecture.",
          "Receive a warm traditional welcome from your local guide before starting the scenic eastward drive to Bhutan's capital, Thimphu.",
          "En route, stop at the sacred Tachog Lhakhang near Chhuzom, a revered 14th-century temple reached via a traditional iron chain bridge – a masterpiece attributed to legendary Bhutanese saint and bridge-builder Thangtong Gyalpo.",
          "Learn how the temple survived devastating floods over centuries and was lovingly restored, making it a symbol of Bhutanese faith and resilience.",
          "Arrive in Thimphu, Bhutan's capital city, by early evening and check in to your hotel, beginning your immersion into the unhurried rhythm of Himalayan life.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing – Buddha Dordenma, Memorial Chorten & Tashichho Dzong",
        details: [
          "Start the morning at Memorial Chorten, one of Thimphu's most beloved landmarks, where devoted locals gather daily to spin prayer wheels and circumambulate in a deeply moving spiritual ritual.",
          "Drive to Kuensel Phodrang to visit the towering Buddha Dordenma statue – one of the largest Buddha statues in the world at 51.5 meters – offering sweeping panoramic views across the entire Thimphu Valley.",
          "Discover that the Buddha Dordenma shelters 125,000 smaller golden Buddha statues in its interior, making it one of Bhutan's most spiritually layered landmarks.",
          "Opt for a scenic forest hike from Buddha Point to Changangkha Lhakhang, winding through quiet pine trails and open ridgelines for an intimate, uncrowded perspective of Thimphu.",
          "Browse the vibrant local vegetable market in the afternoon for a colorful, authentic snapshot of everyday Bhutanese life.",
          "Visit the magnificent Tashichho Dzong fortress monastery along the Wang Chhu River at dusk, its whitewashed walls and golden roofs glowing softly in the fading light.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Punakha via Dochula Pass – 108 Chortens & Himalayan Views",
        details: [
          "Depart Thimphu and climb steadily toward Dochula Pass at 3,100 meters, one of Bhutan's most iconic high-altitude viewpoints and a highlight of any Bhutan tour itinerary.",
          "Arrive at the pass to find 108 memorial chortens (Druk Wangyal Chortens) and, on clear days, sweeping panoramas of the Eastern Himalayan range including Gangkar Puensum – the world's highest unclimbed peak.",
          "Take an optional detour to Tashigang Goenpa, the starting point for the rewarding Lungchutse hike through rhododendron forest and prayer-flag-lined ridges above Thimphu.",
          "Alternatively, follow a section of the Trans Bhutan Trail descending through Thinleygang village – a peaceful, historically significant route through traditional Bhutanese rural landscape.",
          "Continue the drive as the road drops dramatically into warmer Wangduephodrang district, where subtropical forest and riverside rice fields replace the cool highland terrain.",
          "Arrive in Punakha Valley, once Bhutan's royal capital and still one of its most historically significant and agriculturally fertile regions. Overnight Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Punakha Dzong & Chimi Lhakhang – Drive to Phobjikha Valley (Black-necked Crane Reserve)",
        details: [
          "Begin with a visit to Punakha Dzong, widely regarded as the most beautiful dzong in Bhutan, standing at the confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River).",
          "Explore its richly decorated courtyards and corridors layered with centuries of royal Bhutanese history, including the country's first coronation and the royal wedding of the Fourth Druk Gyalpo.",
          "Walk through golden rice paddies to reach Chimi Lhakhang, a charming hilltop fertility temple dedicated to the revered 'Divine Madman' Drukpa Kuenley – a beloved pilgrimage site for couples seeking blessings.",
          "Make a brief stop at Wangdue Phodrang Dzong overlooking the valley before climbing into cooler mountain terrain.",
          "Arrive in Phobjikha Valley, a UNESCO-recognized glacial valley and protected Black-necked Crane (Grus nigricollis) habitat – one of the most ecologically important sites in Bhutan.",
          "Visit Gangtey Monastery (Gangtey Gonpa), a centuries-old Nyingmapa monastery perched above the valley floor, before settling in for a quiet, starlit evening. Overnight Phobjikha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Phobjikha to Tang Valley via Trongsa Dzong – Bhutan's Central Highlands",
        details: [
          "Begin with a peaceful morning walk along the Gangtey Nature Trail, looping through open marshland, pine forest, and traditional villages at the heart of the Black-necked Crane Reserve.",
          "Visit Gangtey Monastery and nearby temples before departing eastward into Bhutan's spectacular central highlands.",
          "Stop at Chendebji Chorten, a striking whitewashed stupa modeled on Nepal's Swayambhunath and rooted in local legends of subduing demonic forces beneath the valley.",
          "Reach the commanding Trongsa Dzong, dramatically positioned on a forested ridge above the Mangde Chhu gorge – the historic seat of power from which Bhutan's royal Wangchuck dynasty unified the kingdom.",
          "Explore Trongsa Dzong's layered courtyards, secret corridors, and temples, which still carry the weight of Bhutan's political and spiritual legacy.",
          "Continue eastward into the spiritual heartland of Bumthang, where the valleys widen and a deeper sense of ancient heritage begins to emerge.",
          "Visit the historic Ogyen Choling Palace for a fascinating glimpse into Bhutanese aristocratic life before arriving at Tang Valley. Overnight Tang Valley.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Bumthang Valley Tour – Ogyen Choling Museum, Jambay Lhakhang & Kurje Lhakhang",
        details: [
          "Begin the day at Ogyen Choling Museum in Tang Valley, where centuries-old thangkas, royal artifacts, and ceremonial objects bring the noble history of Bumthang's aristocratic families vividly to life.",
          "Return to Bumthang Valley and visit Jambay Lhakhang, one of the oldest temples in Bhutan, believed to have been founded in the 7th century by Tibetan Emperor Songtsen Gampo – a pillar site on the Himalayan Buddhist circuit.",
          "Proceed to the sacred Kurje Lhakhang, where Guru Rinpoche (Padmasambhava) is said to have meditated in the 8th century and left the imprint of his body in rock – one of the most revered pilgrimage sites in Bhutan.",
          "Explore the three interconnected temples of the Kurje Lhakhang complex, each layer adding historical and spiritual depth unique to Bumthang's sacred landscape.",
          "Afternoon visit to Jakar Dzong ('Castle of the White Bird'), gracefully perched above the Bumthang Valley with panoramic views and whitewashed walls that glow golden in afternoon light.",
          "Spend the evening soaking in the atmosphere of Bumthang – widely considered Bhutan's spiritual heartland – before a peaceful overnight stay.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Bumthang to Thimphu – Scenic Mountain Drive Through Bhutan's Central Highlands",
        details: [
          "Bid farewell to the serene valleys of Bumthang and begin the long scenic drive westward back to Thimphu along Bhutan's central mountain spine – a journey through some of the kingdom's most dramatic highland terrain.",
          "Pass Trongsa Dzong once more, its ridge-top silhouette above the Mangde Chhu gorge just as striking on the return as it was on arrival.",
          "Climb through winding switchbacks as the landscape shifts from Bumthang's warm, forested valleys to cool, mist-draped highland passes.",
          "Return to Dochula Pass for a final opportunity to absorb the panoramic Himalayan views across the Bhutan-Tibet border – weather permitting, one of the finest viewpoints in the country.",
          "Pause at the 108 Druk Wangyal Chortens for quiet reflection and photography at this iconic Bhutanese landmark.",
          "Descend into Thimphu by evening, easing back into the rhythm of Bhutan's capital after five days in the remote eastern valleys. Overnight Thimphu.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Chele La Pass (3,988m) & Haa Valley Homestay – Traditional Hot Stone Bath (Menchu)",
        details: [
          "Depart from Paro westward on the road to Chele La Pass, Bhutan's highest motorable road pass at approximately 3,988 meters, offering some of the finest high-altitude Himalayan scenery in the country.",
          "Arrive at Chele La Pass where colorful prayer flags flutter against a panorama of Himalayan ridgelines, with clear days revealing the sacred peaks of Jhomolhari (7,326m) and Jichu Drake (6,989m).",
          "Descend into Haa Valley (Haa Dzongkhag) – one of Bhutan's least-visited, most authentically preserved districts – where traditional farming communities and ancient fortresses have remained largely unchanged for centuries.",
          "Check in to a local farmhouse for an immersive Bhutanese homestay experience – shared family meals, evening conversations by the hearth, and warm, unhurried hospitality far from tourist circuits.",
          "As evening settles, prepare for a traditional Bhutanese hot stone bath (menchu), where large river stones heated in a fire are lowered into a wooden tub – a centuries-old healing ritual said to relieve fatigue and joint pain.",
          "Let the warmth of the menchu ease tired muscles and bring the journey's most authentic night to a deeply restorative close. Overnight Haa Valley.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Haa Panorama Hiking Trail – Yangthang Gonpa, Meri Puensum Views & Return to Paro",
        details: [
          "Rise early for the scenic Haa Panorama Hiking Trail, beginning near the peaceful Yangthang Gonpa monastery at the far end of the valley.",
          "Follow the trail through fragrant pine and silver fir forest, with birdsong and the scent of alpine air creating an atmosphere of deep natural calm.",
          "As the trail climbs above the treeline, the full sweep of Haa Valley unfolds below – a rare, unhurried vista of the sacred triple peaks of Meri Puensum and distant snowfields along the Bhutan-Tibet border.",
          "The hike offers one of the most rewarding panoramic experiences on any Bhutan trekking itinerary, combining forest, ridgeline, and high-altitude views in a single morning.",
          "Descend and enjoy a relaxed lunch in Haa town – one of Bhutan's least commercialized district capitals – before departing for the return journey.",
          "Retrace the route back over Chele La Pass, where prayer flags frame one final sweeping Himalayan farewell.",
          "Arrive in Paro Valley by evening, settling in with a reflective sense of having reached one of Bhutan's most authentic and rarely visited corners. Overnight Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Tiger's Nest Hike (Paro Taktsang) – Bhutan's Most Iconic Trek & Rinpung Dzong",
        details: [
          "Begin Bhutan's most famous hike with an early morning start toward Paro Taktsang – the Tiger's Nest Monastery (Taktsang Palphug) dramatically clinging to a granite cliff at 3,120 meters above the Paro Valley floor.",
          "The trail ascends steadily through beautiful blue pine forest and corridors of prayer flags, with each switchback revealing increasingly breathtaking views of the monastery against the sheer cliff face.",
          "Rest at the Taktsang Cafeteria viewpoint halfway up – one of the most photographed perspectives in Bhutan – before continuing the final ascent to the monastery complex itself.",
          "Explore the sacred site where Guru Rinpoche is said to have arrived on the back of a tigress in the 8th century, meditating in the caves before establishing Buddhism across Bhutan.",
          "The full round-trip hike takes 4–5 hours and is considered the single most memorable experience on any Bhutan travel itinerary.",
          "Afternoon: visit Ta Dzong (National Museum of Bhutan) and the majestic Rinpung Dzong standing above the Paro Chhu River, followed by a leisurely stroll through Paro town.",
          "Optionally climb to Zuri Dzong for a quiet forest walk and panoramic valley views as the final sunset of this remarkable Bhutan journey. Overnight Paro.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Departure from Paro International Airport – End of Bhutan Tour",
        details: [
          "Enjoy a final breakfast in Paro, taking a quiet moment to reflect on eleven days exploring Bhutan's sacred monasteries, hidden valleys, high-altitude passes, and warm Bhutanese hospitality.",
          "Complete last-minute packing and check out, carrying memories of Tiger's Nest, Haa Valley, Punakha Dzong, and the Himalayan panoramas that define this Kingdom of Happiness.",
          "Transfer to Paro International Airport (PBH) for your onward flight, departing Bhutan with a heart full of wonder and gratitude for one of the world's most extraordinary travel experiences.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "11 Days / 10 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Thimphu · Punakha · Phobjikha Valley · Bumthang · Tang Valley · Haa Valley",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-HAA-PBH-11" },
      {
        label: "Meals Included",
        value:
          "Breakfast, lunch & dinner daily; traditional Bhutanese homestay meals included in Haa Valley",
      },
      {
        label: "Best Time to Visit Bhutan",
        value: "March–May & September–November",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
    ],
  },
  {
    id: 513,
    country: "Bhutan",
    place: "Paro",
    title: "Jomolhari Trek Bhutan – 12 Days High-Altitude Himalayan Adventure",
    type: "Trekking",
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
    price: 3799,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.8,
    reviews: 43,
    badge: "Adventure",
    badgeColor: "bg-green-700",
    mode: "Trek",
    src: "/Jomolhari.jpg",
    popular: true,

    seoMeta: {
      slug: "jomolhari-trek-bhutan-12-days",
      metaTitle:
        "Jomolhari Trek Bhutan | 12 Days | Paro · Jangothang · Lingzhi · Punakha",
      metaDescription:
        "Trek to Jomolhari Base Camp at 4,040m in 12 days. Cross Neyle La and Yale La passes, camp beneath sacred Himalayan peaks, hike Tiger's Nest and explore Punakha Dzong. Small group adventure from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/jomolhari-trek-bhutan-12-days",
      keywords: [
        "Jomolhari Trek Bhutan",
        "Jomolhari Trek",
        "Bhutan Trekking Tour",
        "Bhutan Adventure Tour",
        "Jangothang Base Camp Trek",
        "Bhutan Himalayan Trek",
        "Bhutan Mountain Trek",
        "High Altitude Trek Bhutan",
        "Bhutan Camping Trek",
        "Lingzhi Trek Bhutan",
        "Yale La Pass Trek",
        "Neyle La Pass Trek",
        "Tiger's Nest Trek Bhutan",
        "Paro Trekking Tour",
        "Bhutan Guided Trek",
        "Best Trek in Bhutan",
        "Bhutan Hiking Adventure",
        "Bhutan Trek Package",
        "Jomolhari Base Camp",
        "Bhutan Nature Tour",
        "Bhutan Small Group Trek",
        "Punakha and Jomolhari Trek",
        "Bhutan Travel Package",
        "Bhutan Trekking Holiday",
        "Bhutan Eco Adventure",
        "Himalayan Trek Bhutan",
        "Bhutan Trekking Expedition",
        "Jomolhari Trek Cost",
        "Jomolhari Trek Itinerary",
        "12 Day Bhutan Trek"
      ]
    },

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
        title: "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Altitude",
      },
      {
        title:
          "Jomolhari Base Camp at 4,040m – Sacred Peak Views & Remote Himalayan Camping",
      },
      {
        title:
          "Neyle La Pass (4,830m) & Yale La Pass (4,942m) – Two Dramatic High-Altitude Crossings",
      },
      {
        title:
          "Tshophu Twin Lakes at 4,400m – Mirror-Like Alpine Waters Beneath Rugged Himalayan Slopes",
      },
      {
        title:
          "Lingzhi Dzong – Remote Historic Fortress Monastery in an Untouched Valley",
      },
      {
        title:
          "Punakha Dzong – Bhutan's Most Beautiful Fortress at the River Confluence",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/Jomolhari1.jpg",
      alt: "Jomolhari Peak at Sunrise – Sacred 7,326m Himalayan Summit Above Jangothang Base Camp, Bhutan",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/Jomolhari2.png",
        alt: "Jangothang Base Camp Bhutan – Trekking Camp Beneath Jomolhari Peak with Himalayan Valley Views",
      },
      {
        id: 2,
        src: "/Jomolhari3.jpg",
        alt: "Tshophu Twin Lakes Bhutan – Alpine Lake at 4,400m on the Jomolhari Trek Route",
      },
      {
        id: 3,
        src: "/Jomolhari4.jpg",
        alt: "Lingzhi Dzong Bhutan – Ancient Fortress Monastery on Ridge Above Remote Himalayan Valley",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      {
        label:
          "Jomolhari Trek Bhutan – 12 Days High-Altitude Himalayan Adventure",
      },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome, Rinpung Dzong & Kichu Lhakhang",
        details: [
          "Arrive at Paro International Airport (PBH) at 2,280m, greeted by one of the most dramatic flight approaches on earth – Himalayan peaks including Everest and Kanchenjunga visible on clear mornings as the aircraft descends into the narrow Paro Valley.",
          "Complete immigration formalities at an airport framed by the iconic silhouette of Paro Dzong rising above the Pa Chu River – a first, immediate glimpse of Bhutan's timeless architecture and monastic heritage.",
          "Receive a warm traditional welcome from your local guide before transferring through pine-covered valley roads to your hotel, where whitewashed farmhouses and quiet Bhutanese calm line every stretch of the route.",
          "After a welcome lunch and a first taste of Bhutanese cuisine, begin a relaxed afternoon exploration of Paro – a town that quietly sets the spiritual tone for the entire journey.",
          "Visit Rinpung Dzong (Paro Dzong), standing proudly above the Paro River on a sloping hillside – an architectural masterpiece of whitewashed stone and gilded roofs layered with over four centuries of history and spiritual significance.",
          "Continue to Kichu Lhakhang, one of the oldest and most sacred temples in Bhutan, believed to have been built in the 7th century by Tibetan Emperor Songtsen Gampo to pin down a demoness – the air inside carrying a deep, reverent stillness unique to ancient sites.",
          "End the day with a leisurely stroll through Paro town, soaking up the soft valley light and the unhurried rhythm of Bhutanese life before retiring for a well-rested night ahead of the trek. Overnight Paro.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m & Drukgyal Dzong",
        details: [
          "Begin the morning with a short drive to the Taktsang trailhead, where the path immediately enters a world of fluttering prayer flags, blue pine forest, and the distant silhouette of the Tiger's Nest Monastery clinging impossibly to the cliff above.",
          "Ascend steadily over 4–5 hours to reach Paro Taktsang (Taktsang Palphug Monastery) at 3,120m – Bhutan's most iconic sacred site, dramatically perched on a sheer granite cliff face 900 metres above the Paro Valley floor.",
          "Rest at the Taktsang Cafeteria viewpoint halfway up, one of the most photographed vantage points in Bhutan, where the monastery's reflection in the cliff creates a view unlike anywhere else on earth.",
          "Arrive at the monastery complex, where Guru Rinpoche (Padmasambhava) is believed to have flown on the back of a tigress in the 8th century and meditated in the caves below before establishing Buddhism across the kingdom.",
          "Explore the sacred halls, altar rooms, and prayer chambers within the complex – each space carrying centuries of devotion and a spiritual energy rooted deep within the mountain rock itself.",
          "Descend along the same forested trail, the downward path considerably easier on the legs and equally beautiful, returning to the valley with a well-earned sense of accomplishment.",
          "Afternoon visit to the historic ruins of Drukgyal Dzong, once a powerful fortress built to celebrate Bhutanese victories over Tibetan invasions, now a quiet and evocative silhouette against the Himalayan skyline.",
          "Return to Paro for a final evening of rest before the Jomolhari Trek officially begins at dawn tomorrow. Overnight Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Trek Begins – Paro to Shingkharap (3,110m) via Gunitsawa | 9 km | 4–5 Hours",
        details: [
          "Depart Paro early and drive toward Gunitsawa village, the official starting point of the Jomolhari Trek where permits are inspected and the trail – one of Bhutan's most celebrated trekking routes – formally begins.",
          "Set off on a pleasant 9 km opening walk of 4–5 hours, immediately entering a sense of mountain solitude as the last signs of everyday valley life slowly fade behind you.",
          "Follow the soothing rhythm of the Paro Chhu river upstream, its steady green flow becoming a peaceful and constant companion through corridors of dense blue pine and rhododendron forest.",
          "The trail feels almost meditative in its character – soft underfoot, richly shaded, and alive with birdsong from Himalayan species rarely encountered at lower altitudes.",
          "Pass through occasional forest clearings that offer fleeting glimpses of distant snow peaks, each view building quiet anticipation for the dramatic high-altitude landscapes that lie ahead.",
          "Ascend gradually to the first campsite at Shingkharap at 3,110m, a tranquil woodland retreat enclosed by towering trees and accompanied by the constant sound of a nearby mountain stream.",
          "Settle into the crisp, clean mountain air of camp for the very first time, as the hush of deep nature and the arc of a star-filled Himalayan sky mark the true, unhurried beginning of life on the Jomolhari trail. Overnight Shingkharap Camp.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Shingkharap to Soi Thangkha (3,670m) – River Forests & Rising Altitude | 15 km | 5–6 Hours",
        details: [
          "Begin a longer day on the trail covering approximately 15 km over 5–6 hours, with the Paro Chhu river continuing to flow alongside as a steady and reliable companion through the morning.",
          "Walk through dense mixed forests of pine, oak, and blooming rhododendron – the trail wrapped in deep greens and, during spring, vivid bursts of crimson and pink floral colour that transform the entire valley.",
          "Feel the landscape gradually shift in character as the altitude climbs steadily toward 3,670m, with the body beginning to sense the increasing height in the thinner, crisper quality of the mountain air.",
          "The ascent is measured and manageable, allowing ample time to appreciate the evolving environment and the occasional ridge openings that reveal higher peaks and broader skylines ahead.",
          "Pause for trail snacks and rest stops beside the river, absorbing the profound mountain silence punctuated only by flowing water and the distant call of Himalayan birds high in the canopy.",
          "Pass the ruins of an old Bhutanese watchtower en route – a quiet reminder that these valleys, now so remote, once carried strategic importance along ancient Himalayan trade and military routes.",
          "Arrive at the campsite at Soi Thangkha in a wide alpine clearing beneath towering valley slopes, a setting that feels genuinely raw and beautifully untouched by the modern world.",
          "As evening settles at altitude, the mountains begin to reveal their quieter, more untamed nature – a stark and compelling contrast to the comfortable valleys left behind two days ago. Overnight Soi Thangkha Camp.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Soi Thangkha to Jangothang Base Camp (4,040m) – First View of Sacred Jomolhari | 17 km | 4–5 Hours",
        details: [
          "Step entirely beyond the tree line today as the trail climbs into vast, open high-altitude wilderness, where the sky feels noticeably closer and each breath carries the sharp, clean edge of significant altitude.",
          "Cover 17 km over approximately 4–5 hours, following the valley floor upstream with a steady ascent past scattered yak herder settlements (dokpas) where traditional mountain pastoral life continues quietly and unchanged.",
          "Watch the landscape transform dramatically with every kilometre – broad alpine meadows replace dense forest, the sense of sky and space becomes almost overwhelming, and the silence deepens to something rare and profound.",
          "As the altitude approaches 4,040m, the sacred Mount Jomolhari (7,326m) rises in commanding, almost otherworldly grandeur directly ahead – one of Bhutan's most revered peaks and the undisputed crown of this entire trekking route.",
          "Jichu Drake (6,989m) stands boldly alongside, its sharp ridgelines and permanent snowfields completing a panoramic view that makes this one of the most photogenic and emotionally resonant stretches of any trek in the Himalayas.",
          "Arrive at Jangothang Base Camp, set in a wide open valley directly beneath these towering Himalayan giants – a location that feels simultaneously humbling in scale and deeply exhilarating in its raw mountain energy.",
          "Watch as the sun descends behind the snow-capped ridges and the peaks of Jomolhari and Jichu Drake glow in shades of amber and rose, marking an unforgettable arrival at the true doorstep of the high Himalayas. Overnight Jangothang Camp.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Jangothang Acclimatization Day – Tshophu Twin Lakes (4,400m) & Blue Sheep Spotting",
        details: [
          "Take a well-earned acclimatization rest day at Jangothang Base Camp, allowing the body to adjust properly to the altitude before the demanding high passes ahead while immersing fully in the extraordinary mountain landscape.",
          "Choose from optional gentle hikes of 2–4 hours up the surrounding ridges, each climb offering increasingly dramatic perspectives of the valley and the towering Himalayan peaks that encircle the campsite.",
          "For those feeling strong and well-acclimatized, a rewarding ascent to the Tshophu Twin Lakes at approximately 4,400m reveals still, mirror-like alpine waters cradled in rugged glacial terrain – a scene of austere and breathtaking Himalayan serenity.",
          "Keep a careful eye on the steep hillsides surrounding camp for herds of blue sheep (bharal) grazing peacefully along the slopes – a remarkable wildlife encounter in this high-altitude wilderness.",
          "Scan the vast mountain sky for the rare and exhilarating sight of a golden eagle soaring effortlessly above the ridgelines on thermal currents, one of the most striking natural spectacles possible at this elevation.",
          "Spend the midday hours resting, journaling, photographing the summit of Jomolhari in shifting light conditions, or simply sitting in the profound and restorative silence of the mountains.",
          "Let the altitude settle gently into the body and allow the immensity of the surrounding landscape to be fully absorbed, in quiet preparation for the challenging Neyle La crossing that awaits tomorrow. Overnight Jangothang Camp.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Jangothang to Lingzhi (4,010m) – Crossing Neyle La Pass (4,830m) | 18 km | 6–7 Hours",
        details: [
          "Begin the day with a steady, purposeful climb out of Jangothang, gaining altitude gradually as the trail winds upward through open alpine terrain toward the high and dramatic Neyle La Pass at 4,830m.",
          "The ascent demands patience and a measured, rhythmic pace, but rewards with increasingly sweeping panoramic views of snow-capped Himalayan giants stretching across the horizon with every additional metre of elevation gained.",
          "Reach the summit of Neyle La, where the world opens in every direction with 360-degree Himalayan vistas that feel almost surreal in their scale and grandeur – a defining moment on the Jomolhari Trek.",
          "Strings of colourful prayer flags at the pass snap in the high-altitude wind, framing a view that encompasses some of the most dramatic mountain terrain anywhere in Bhutan or the wider Eastern Himalayan region.",
          "Begin the descent from the pass into the remote and windswept Lingzhi valley, where the landscape feels raw, expansive, and wonderfully untouched by the outside world in every direction.",
          "Cover approximately 18 km over 6–7 hours – a long day balanced by the extraordinary terrain and the deeply satisfying physical achievement of crossing the first of two major Himalayan passes on this route.",
          "Arrive at the historic Lingzhi Dzong, perched dramatically on a ridge above the valley floor at 4,010m – a centuries-old fortress monastery that has silently guarded this isolated region since its construction.",
          "Set up camp near the dzong in the wide alpine plain, surrounded by distant peaks and a quietness so complete it feels like a form of rare privilege. Overnight Lingzhi Camp.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Lingzhi to Shodu (4,100m) – Crossing Yale La Pass (4,942m) | 19 km | 7–8 Hours",
        details: [
          "Face the Jomolhari Trek's most demanding day: 19 km of walking over approximately 7–8 hours, testing both physical endurance and mental resolve across the highest terrain of the entire route.",
          "Depart Lingzhi early in the morning, climbing steadily toward Yale La at 4,942m – the highest pass on the entire Jomolhari Trek – where the trail narrows and the air grows measurably thinner with every upward step.",
          "As altitude increases through the long ascent, the panoramic Himalayan views that unfold become progressively more breathtaking – vast ridgelines, distant snow peaks, and open blue sky in all directions.",
          "Reach the summit of Yale La, where a raw and untouched mountain energy fills the air and the visceral sensation of standing on the very spine of the Himalayas is entirely unmistakable.",
          "Take a moment at the pass to absorb the silence, the prayer flags, and the scale of the Eastern Himalayan landscape stretching away in every direction from this extraordinary high-altitude vantage point.",
          "Begin the long, gradual descent from Yale La into the remote Shodu valley, where the terrain softens slowly from jagged rocky passes into rolling alpine meadows and wide-open mountain silence.",
          "Feel the deep physical satisfaction of completing the trek's most challenging passage as the valley floor eventually comes into view and the campsite appears beside the river at 4,100m.",
          "Settle into camp as evening closes in with a powerful sense of personal accomplishment – the hardest day behind you, the mountains still majestic on every side. Overnight Shodu Camp.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Shodu to Thimphu – Final Trekking Day via Barshong Dzong Ruins | 16 km | 5–6 Hours",
        details: [
          "Begin the final trekking day of the Jomolhari route with a gentle, rewarding descent alongside the Thimphu Chhu, the river's steady current guiding the trail back down through progressively lush and welcoming valley landscapes.",
          "Walk through mixed forests, past cascading waterfalls, and into greener, warmer terrain that feels almost tropical in its richness after days spent in the spare, high-altitude wilderness above.",
          "Cover approximately 16 km over 5–6 hours, with a bittersweet, reflective rhythm to each step – the distant summits of Jomolhari still visible through gaps in the forest canopy as the familiar comforts of lower altitude slowly return.",
          "Pause at the atmospheric ruins of Barshong Dzong en route, its weathered stone walls rising quietly from the forest floor as a final, moving reminder of Bhutan's deep and layered history in these remote highland valleys.",
          "As the trail draws to its end and a waiting vehicle marks the transition back to the world of roads and towns, allow a moment to fully acknowledge the magnitude of what has been accomplished on the trail.",
          "Drive into Thimphu as the capital city reappears gradually – its familiar warmth, gentle activity, and everyday sounds providing a soft and welcome re-entry after nine days of mountain silence.",
          "Check in to the hotel, savour a long hot shower and a proper bed, and allow both body and spirit to begin absorbing the full weight of what has been experienced across nine extraordinary days on the Jomolhari Trek. Overnight Thimphu.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Thimphu Sightseeing – Buddha Dordenma, Dochula Pass (108 Chortens) & Punakha Valley",
        details: [
          "Begin the morning with a gentle exploration of Thimphu, starting at the peaceful National Memorial Chorten where devoted locals circle in continuous prayer – a timeless daily ritual that offers an intimate window into living Bhutanese Buddhism.",
          "Visit the grand Buddha Dordenma statue at Kuensel Phodrang, one of the largest bronze Buddha statues in the world at 51.5 metres, looking out over the entire Thimphu Valley in serene and commanding silence.",
          "Stop at the Motithang Takin Preserve, home to the takin – Bhutan's wonderfully unique national animal, a creature so unusual that legend attributes its creation to a 15th-century divine madman saint.",
          "Drive up to Dochula Pass at 3,100m, where 108 sacred Druk Wangyal Chortens stand in neat, atmospheric rows and on clear days a sweeping panorama of Eastern Himalayan peaks stretches endlessly toward the Tibet border.",
          "Descend from Dochula into the warm subtropical Punakha Valley, where the air softens immediately, rice fields appear along the roadside, and the lush riverside landscape feels like a generous contrast to the high terrain of the past week.",
          "Take a gentle walk through golden rice paddies to reach Chimi Lhakhang, the charming hilltop fertility temple dedicated to the revered Divine Madman Drukpa Kuenley – a deeply loved and spiritually significant pilgrimage site.",
          "Arrive in Punakha by evening, checking in to the hotel and settling into the comforting warmth and greenery of one of Bhutan's most historically important and agriculturally beautiful valleys. Overnight Punakha.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title:
          "Punakha Dzong, Suspension Bridge & Drive to Paro via Thimphu Market",
        details: [
          "Begin the morning at the magnificent Punakha Dzong, standing gracefully at the sacred confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River) – widely regarded as the most beautiful fortress monastery in all of Bhutan.",
          "Explore the richly decorated interior courtyards, painted corridors, and towering lhakhangs of Punakha Dzong, each space layered with centuries of royal Bhutanese history including the first coronation and the royal wedding of the Fourth Druk Gyalpo.",
          "Cross the Punakha Suspension Bridge directly adjacent to the dzong, where strings of prayer flags flutter above the rushing Pho Chhu below – a final, photogenic touch of adventure to close the Punakha chapter.",
          "Depart toward Paro, retracing the scenic mountain route through Thimphu where a pause at the weekend market or local handicraft shops offers the perfect opportunity to select last-minute souvenirs and traditional Bhutanese treasures.",
          "Browse through stalls for traditional Bhutanese textiles (kishuthara), handcrafted wooden bowls, thangka paintings, prayer flags, and locally made incense – a colourful and lively farewell to Thimphu's artisan culture.",
          "Continue the 4–5 hour scenic drive through familiar mountain passes and pine-clad valleys, the journey carrying a natural reflective quality as Bhutan's landscapes pass by with a new, deeper familiarity.",
          "Arrive in Paro by evening with a calm, full-circle sense of completion – the same valley where this extraordinary 12-day adventure first began now welcoming you back for one final, peaceful night. Overnight Paro.",
        ],
      },
      {
        day: 12,
        date: "Day 12",
        title:
          "Departure from Paro International Airport – End of Jomolhari Trek Bhutan",
        details: [
          "Wake to a final quiet morning in Paro, where the crisp mountain air, pine-scented valley, and unhurried Bhutanese rhythm make the idea of departing feel almost reluctant after twelve days of immersive Himalayan experience.",
          "Enjoy a last breakfast in Bhutan, taking a reflective moment to absorb what has been accomplished – Tiger's Nest, Jomolhari Base Camp, two high-altitude passes, Lingzhi Dzong, Punakha, and the rare privilege of trekking one of the Himalayas' most celebrated routes.",
          "Complete final packing and check out of the hotel, carrying not just carefully chosen Bhutanese souvenirs but a fundamentally deeper connection to the spirit, landscape, and people of this extraordinary mountain kingdom.",
          "Transfer to Paro International Airport (PBH), the same serene gateway through which this remarkable 12-day Bhutan trekking journey first began – the Paro Valley one final time framing the whitewashed walls of Rinpung Dzong in the morning light.",
          "As the flight lifts off and the valleys, prayer-flag-lined ridges, and snow-capped peaks of Bhutan slowly dissolve beneath the clouds, allow the memories of Jomolhari, Yale La, Lingzhi, and the open Himalayan sky to settle into something permanent and deeply personal.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "12 Days / 11 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Shingkharap · Soi Thangkha · Jangothang · Lingzhi · Shodu · Thimphu · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-JOM-PBH-12" },
      {
        label: "Meals Included",
        value:
          "Breakfast, lunch & dinner daily; all meals fully included during trek days at camp",
      },
      {
        label: "Best Time to Visit",
        value: "April–June & September–November",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      {
        label: "Total Trek Distance",
        value: "Approximately 94 km total trekking distance across 6 days",
      },
      {
        label: "Maximum Altitude",
        value: "Yale La Pass at 4,942m – Highest Pass on the Jomolhari Route",
      },
    ],
  },
  {
    id: 514,
    country: "Bhutan",
    place: "Paro",
    title:
      "Dagala Thousand Lakes Trek Bhutan – 9 Days Alpine Highland Adventure",
    type: "trekking",
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
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.7,
    reviews: 31,
    badge: "Adventure",
    badgeColor: "bg-green-700",
    mode: "Trek",
    src: "/doc3.jpg",
    popular: true,

    seoMeta: {
      slug: "dagala-thousand-lakes-trek-bhutan-9-days",
      metaTitle:
        "Dagala Thousand Lakes Trek Bhutan | 9 Days | Paro · Geynekha · Thimphu",
      metaDescription:
        "Trek Bhutan's Dagala Highlands in 9 days — glacial alpine lakes, Pagalabtsa La Pass at 4,170m, optional climb near Jomo Peak at 4,716m, Tiger's Nest hike, and Thimphu sightseeing. Small group adventure from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/dagala-thousand-lakes-trek-bhutan-9-days",
      keywords: [
        "Dagala Thousand Lakes Trek Bhutan",
        "Dagala Trek",
        "Bhutan trekking tour",
        "Bhutan alpine lakes trek",
        "Dagala Highlands",
        "Pagalabtsa La Pass",
        "Bhutan adventure trek",
        "Bhutan hiking tour",
        "Tiger's Nest Trek",
        "Bhutan trekking package",
        "Paro trekking tour",
        "Thimphu trekking tour",
        "Bhutan guided trek",
        "Bhutan mountain trekking",
        "Bhutan high altitude trek",
        "Dagala Lakes Trek 9 days",
        "Bhutan trekking holiday",
        "Best trek in Bhutan",
        "Small group Bhutan trek",
        "Bhutan nature tour"
      ]
    },

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
        title: "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Altitude",
      },
      {
        title:
          "Dagala Highlands – A Thousand Glacial Alpine Lakes Scattered Across a Remote High-Altitude Plateau",
      },
      {
        title:
          "Pagalabtsa La Pass (4,170m) – Panoramic Views of the Dagala Range & Eastern Himalayas",
      },
      {
        title:
          "Optional Climb Near Jomo Peak (4,716m) – Highest Viewpoint on the Entire Trek",
      },
      {
        title:
          "Sacred Serbho Tsho & Neighbouring Lakes – Revered Highland Waters in Bhutan's Most Isolated Alpine Basin",
      },
      {
        title:
          "Buddha Dordenma & Tashichho Dzong – Thimphu's Most Iconic Landmarks Before Departure",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/doc3.jpg",
      alt: "Dagala Thousand Lakes Trek Bhutan – Glacial Alpine Lakes on the Dagala Highland Plateau Above Thimphu",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/doc3.jpg",
        alt: "Dagala Highlands Bhutan – Sacred Glacial Lake Reflecting Himalayan Sky on the Dagala Thousand Lakes Trek",
      },
      {
        id: 2,
        src: "/vaishno-Hima8.jpg",
        alt: "Pagalabtsa La Pass Bhutan – Trekkers at 4,170m with Panoramic Dagala Range Views",
      },
      {
        id: 3,
        src: "/Dagala6.jpg",
        alt: "Dagala Trek Campsite Bhutan – Alpine Tent Camp Beside Glacial Lake at 4,350m in the Dagala Highlands",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      {
        label:
          "Dagala Thousand Lakes Trek Bhutan – 9 Days Alpine Highland Adventure",
      },
    ],

    badges: [
      { label: "ADVENTURE", variant: "solid" as const, color: "green" },
      { label: "9 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome, Rinpung Dzong & Kichu Lhakhang",
        details: [
          "Arrive at Paro International Airport (PBH) at 2,280m, greeted by one of the most dramatic flight approaches anywhere on earth – the Himalayan range unfolds in spectacular fashion through the aircraft window, and on clear days the legendary peaks of Everest and Kanchenjunga are visible as the flight descends into the narrow Paro Valley.",
          "Complete immigration and customs formalities at an airport framed immediately by the iconic silhouette of Paro Dzong rising above the Pa Chu River – a first, vivid glimpse of Bhutan's timeless monastic architecture and highland serenity.",
          "Receive a warm traditional welcome from your local guide before transferring through pine-covered valley roads to your hotel, where whitewashed farmhouses, fluttering prayer flags, and the unhurried pace of Bhutanese life line every stretch of the route.",
          "After a relaxed welcome lunch and a first taste of Bhutanese cuisine, begin a gentle afternoon exploration of Paro Valley – a town that quietly and immediately sets both the spiritual and visual tone for the nine days ahead.",
          "Visit Rinpung Dzong (Paro Dzong), the impressive whitewashed fortress standing proudly above the Paro River on a sloping hillside – an architectural masterpiece layered with over four centuries of royal history, monastic life, and strategic significance in Bhutanese heritage.",
          "Continue to Kichu Lhakhang, one of the oldest and most sacred temples in Bhutan, believed to have been built in the 7th century by Tibetan Emperor Songtsen Gampo – the air inside carrying a deep, reverent stillness unique to ancient sacred sites.",
          "Visit the historic ruins of Drukgyal Dzong, a fortress built to celebrate Bhutanese victories against Tibetan invasions, now a quietly evocative silhouette against the Himalayan ridgeline as the valley light softens toward evening.",
          "End the day with a leisurely stroll through Paro town, absorbing its traditional wooden shopfronts, local rhythm, and soft valley ambience before a well-rested first night in preparation for tomorrow's iconic hike. Overnight Paro.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang (3,120m) | 4–5 Hours Round Trip",
        details: [
          "Begin the morning with a short drive to the Taktsang trailhead, where the path immediately enters a world of fluttering prayer flags, fragrant blue pine forest, and the distant silhouette of Paro Taktsang – the Tiger's Nest Monastery – clinging impossibly to the sheer granite cliff face above.",
          "Ascend steadily over 4–5 hours round trip to reach Paro Taktsang (Taktsang Palphug Monastery) at 3,120m – Bhutan's most iconic and universally recognised sacred site, perched 900 metres above the Paro Valley floor on a vertical rock face.",
          "Rest at the Taktsang Cafeteria viewpoint approximately halfway up, one of the most photographed vantage points in Bhutan, where the monastery's reflection against the sheer cliff creates a view unlike anywhere else in the Himalayan world.",
          "Continue the final ascent to the monastery complex, where Guru Rinpoche (Padmasambhava) is believed to have arrived on the back of a tigress in the 8th century and meditated in the sacred caves below – one of the most spiritually significant sites in all of Bhutanese Buddhism.",
          "Explore the interconnected sacred halls, altar rooms, and prayer chambers within the complex, each space carrying centuries of unbroken devotion and a spiritual energy deeply rooted in the mountain granite itself.",
          "Descend along the same forest trail, the downward path noticeably easier on the legs and equally beautiful, returning to the valley with a well-earned sense of accomplishment and a memory that defines any visit to Bhutan.",
          "Spend the remainder of the afternoon resting or exploring Paro town at leisure – a final evening of comfort before the Dagala Thousand Lakes Trek officially begins at dawn tomorrow. Overnight Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Trek Begins – Paro to Gur (3,350m) via Geynekha | Approx. 10 km | 4–5 Hours",
        details: [
          "Depart Paro after breakfast and begin the two-hour scenic drive toward Geynekha at approximately 2,900m, passing the sacred iron chain bridge of Tachog Lhakhang and the historically significant Chhuzom confluence, where the Paro Chhu and Wang Chhu rivers meet – each junction marked by chortens of three distinct architectural styles representing Bhutanese, Tibetan, and Nepali traditions.",
          "On reaching Geynekha, the Dagala Thousand Lakes Trek formally begins with a steady and forgiving initial ascent, weaving first through open meadows before pulling deeper into shaded oak and rhododendron forest where the air grows noticeably cooler, richer, and alive with birdsong.",
          "Pass the quiet ruins of Genye Dzong standing beside the trail, a weathered remnant of Bhutan's layered history in these highland valleys, before the path continues climbing through increasingly open terrain.",
          "Gain elevation steadily to a ridgeline viewpoint at approximately 3,200m, where sweeping views of the surrounding highland ranges offer the first real sense of the scale and remoteness of the Dagala region that lies ahead.",
          "Continue through open pastureland where yaks graze quietly and the sound of cowbells drifts across the hillsides, before a final steady push delivers the campsite at Gur at 3,350m.",
          "As evening descends, the surrounding mountains glow softly in the fading light, and the profound silence of the Bhutanese highlands settles in – a first, deeply satisfying night beneath an open Himalayan sky on the Dagala trail. Overnight Gur Camp.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Gur to Labatama (4,050m) – Crossing Pagalabtsa La Pass (4,170m) | Approx. 12 km | 5–6 Hours",
        details: [
          "Depart Gur and begin the day on a gentle rolling trail through wide alpine pastures at approximately 3,440m, where yaks graze lazily across open hillsides and the landscape opens into a wild, expansive panorama of ridgelines and sky.",
          "Climb steadily through the shepherd huts of Gibze Kebze at 3,710m, where the air begins to thin perceptibly and the pace naturally settles into a measured, rhythmic stride in tune with the increasing altitude.",
          "The defining moment of the day arrives at the ascent to Pagalabtsa La Pass at 4,170m – a sustained, rewarding climb that delivers one of the most spectacular panoramic viewpoints on the entire Dagala trek, with the full sweep of the Dagala highland range stretching endlessly across the horizon like waves of rock and snow frozen in time.",
          "Strings of prayer flags at the pass snap in the cool highland wind, framing a view that on clear days extends toward distant Himalayan giants far beyond the immediate ridgelines.",
          "From the pass, the trail descends purposefully into a hidden highland world of extraordinary beauty, where the first glacial lakes of the Dagala region begin to appear below – shimmering quietly in the vast alpine basin like scattered mirrors reflecting the open sky.",
          "Continue the descent to the campsite at Labatama at 4,050m, tucked within a remote and sheltered section of this high-altitude plateau, where temperatures drop sharply after sunset and the overwhelming sense of being genuinely far from the ordinary world is both humbling and exhilarating. Overnight Labatama Camp.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Labatama to Kheri Khewa (4,350m) – Heart of the Dagala Lakes & Optional Jomo Peak Viewpoint (4,716m) | Approx. 10 km | 5–6 Hours",
        details: [
          "Enter the true heart of the Dagala Thousand Lakes region today, as the trail leads deeper into a surreal and otherworldly high-altitude landscape dotted with glacial lakes that shimmer like mirrors to the sky in every direction across the plateau.",
          "Walk past Serbho Tsho and its neighbouring sacred lakes, where the water holds a deep stillness that feels genuinely blessed – these highland waters are revered in Bhutanese Buddhist tradition, and a quiet, instinctive reverence fills the air at their shores.",
          "Climb steadily toward the day's highest pass at approximately 4,520m, where the views reward the effort in dramatic fashion – a jaw-dropping panorama stretching all the way to Jomolhari (7,326m) to the north and, on exceptionally clear days, Kanchenjunga (8,586m) shimmering on the far horizon.",
          "For those with strong acclimatization and the energy to push further, an optional side climb to a viewpoint near the sacred Jomo Peak at 4,716m offers one of the most memorable and rarely experienced high-altitude perspectives anywhere on the Dagala route.",
          "Return from the viewpoint and continue the traverse across the alpine plateau, with the landscape shifting between rocky ridges, wind-scoured meadows, and the reflecting surfaces of countless glacial lakes that give this trekking route its legendary name.",
          "Descend to the campsite at Kheri Khewa at 4,350m, tucked into a quiet, windswept valley where the lakes catch the fading afternoon light and the surrounding mountains turn through shades of amber and gold as evening settles over the Dagala highlands. Overnight Kheri Khewa Camp.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Kheri Khewa to Tshokam – Descending the Dagala Highlands | Approx. 11 km | 4–5 Hours",
        details: [
          "The morning opens in Kheri Khewa with the mountains still holding their crisp, untouched highland stillness – the kind of silence that has become the defining soundtrack of the Dagala trek over the past days.",
          "The trail ahead is noticeably gentler than those before it, easing into a steady, contemplative rhythm across open highland terrain where broad rolling ridges stretch endlessly beneath vast, uninterrupted Bhutanese skies.",
          "A soft but rewarding climb leads to a final pass at approximately 4,200m – not the most demanding ascent of the route, but delivering one last sweeping view of the surrounding Dagala range before the gradual descent to lower ground begins in earnest.",
          "From the pass, the journey transitions into a long, meditative descent through progressively warmer and greener terrain, the scenery becoming calmer and more expansive with every downward kilometre.",
          "The landscape invites quiet reflection on the extraordinary days spent deep within the Dagala highland wilderness – the sacred lakes, the high passes, the remote campsites, and the rare privilege of traversing one of Bhutan's least-visited trekking routes.",
          "Arrive at the campsite at Tshokam – whose name translates evocatively as 'Dried Lake' in the local Dzongkha dialect – a wide-open highland clearing that feels like a natural and fitting location for the final night in the mountains.",
          "As the fading light brushes the Dagala highlands in soft amber tones, the atmosphere carries a quiet sense of beautiful closure to one of Bhutan's finest alpine trekking experiences. Overnight Tshokam Camp.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Tshokam to Thimphu via Chamgang – Final Trekking Day & Return to the Capital | Approx. 10 km | 4 Hours",
        details: [
          "The final trekking morning carries a natural mix of deep satisfaction and quiet nostalgia, as the trail begins its last steady descent from the Dagala highlands toward Chamgang over approximately four hours of walking through shifting mountain terrain.",
          "The path winds gradually downward through a succession of changing landscapes – open alpine terrain slowly giving way to denser forested slopes, warmer air, and the familiar sounds of lower-altitude Bhutan returning after days of highland silence.",
          "Notice the subtle transition in vegetation and birdsong as the elevation drops, the mountain world that has been home for the past four days releasing its hold gently and generously.",
          "Reach Chamgang, where a heartfelt farewell takes place with the trekking support crew – the horsemen, cook, and camp staff whose quiet expertise, warm hospitality, and mountain knowledge made the entire Dagala experience possible.",
          "Board the waiting vehicle for the drive into Thimphu, Bhutan's capital city reappearing gradually after days of mountain immersion – its familiar warmth, gentle activity, and everyday urban sounds providing a soft and welcome re-entry.",
          "Check in to the Thimphu hotel, enjoy a hot shower and a proper dinner, and allow both body and spirit to decompress gently as the full weight of the Dagala traverse begins to settle into lasting memory. Overnight Thimphu.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Thimphu Sightseeing – Buddha Dordenma, Tashichho Dzong & Drive to Paro",
        details: [
          "Begin the final full day in Bhutan with a morning of relaxed Thimphu sightseeing, starting at the towering Buddha Dordenma statue at Kuensel Phodrang – one of the largest bronze Buddha statues in the world at 51.5 metres, looking serenely over the entire Thimphu Valley from its hilltop position.",
          "Learn that the Buddha Dordenma shelters 125,000 smaller gold and silver Buddha statues within its interior – a layer of spiritual depth that makes this one of Bhutan's most extraordinary and symbolically layered landmarks.",
          "Descend into the city centre and explore Norzin Lam, Thimphu's main street, where local shops, Bhutanese cafés, and the gentle unhurried rhythm of everyday capital life offer a warm and grounding contrast to the remote highland wilderness of the past week.",
          "Browse the nearby handicraft market for traditional Bhutanese textiles (kishuthara and yathra), handmade wooden bowls, thangka paintings, locally produced incense, and intricately crafted jewelry – each piece a tangible connection to Bhutanese artisan heritage.",
          "Visit the magnificent Tashichho Dzong beside the Wang Chhu River, the official seat of the Bhutanese government and the King's throne room – its whitewashed walls, gilded roofs, and manicured courtyards standing with quiet authority as the administrative and ceremonial heart of the kingdom.",
          "Conclude Thimphu exploration with a brief stop at the National Memorial Chorten, where devoted locals circle the monument in continuous prayer – a timeless daily ritual that offers one of the most intimate windows into living Bhutanese Buddhist practice.",
          "Depart Thimphu in the afternoon for the scenic 90-minute drive back to Paro, the familiar valley landscape carrying a new depth of familiarity and affection after nine remarkable days in the kingdom. Overnight Paro.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Departure from Paro International Airport – End of Dagala Thousand Lakes Trek Bhutan",
        details: [
          "Wake to a final quiet morning in Paro, where the crisp mountain air, pine-scented valley, and unhurried Bhutanese rhythm make the prospect of departing feel almost reluctant after nine days of immersive Himalayan trekking and cultural experience.",
          "Enjoy a last breakfast in Bhutan, taking a reflective moment to absorb the full arc of what has been accomplished – Tiger's Nest, the Dagala highland plateau, sacred glacial lakes, Pagalabtsa La Pass, the optional Jomo Peak viewpoint, and the rare privilege of trekking one of Bhutan's most off-the-beaten-path wilderness routes.",
          "Complete final packing and check out, carrying not only carefully chosen Bhutanese souvenirs but a fundamentally deeper connection to the spirit, landscape, and people of this extraordinary mountain kingdom that will linger long after departure.",
          "Transfer to Paro International Airport (PBH), the same serene and scenic gateway through which this nine-day Dagala adventure first began – the Paro Valley framing Rinpung Dzong one final time in the soft morning light.",
          "As the flight lifts off and the valleys, prayer-flag-lined ridges, glacial lakes, and snow-capped peaks of Bhutan slowly dissolve beneath the clouds, allow the memories of the Dagala Thousand Lakes, the open highland sky, and the warmth of Bhutanese hospitality to settle into something permanent and deeply personal.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Geynekha · Gur · Labatama · Kheri Khewa · Tshokam · Thimphu",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-DAG-PBH-09" },
      {
        label: "Meals Included",
        value:
          "Breakfast, lunch & dinner daily; all meals fully included during trek days at camp",
      },
      {
        label: "Best Time to Visit",
        value: "April–June & September–November",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      {
        label: "Maximum Altitude",
        value: "Near Jomo Peak at 4,716m – Optional Viewpoint Climb",
      },
    ],
  },

  {
    id: 515,
    country: "Bhutan",
    place: "Paro",
    title:
      "Glimpse of Bhutan Tour – 6 Days Paro, Thimphu & Punakha Cultural Package",
    type: "family",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Paro → Thimphu → Punakha → Paro",
    destinations: ["Paro", "Thimphu", "Dochula Pass", "Punakha"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1499,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.8,
    reviews: 74,
    badge: "Family",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/punakhadzong.jpg",
    popular: true,

    seoMeta: {
      slug: "glimpse-of-bhutan-tour-6-days-paro-thimphu-punakha",
      metaTitle:
        "Glimpse of Bhutan Tour | 6 Days | Paro · Thimphu · Dochula Pass · Punakha",
      metaDescription:
        "Explore Bhutan in 6 days — Tiger's Nest hike at 3,120m, Punakha Dzong at the river confluence, 108 chortens at Dochula Pass, Buddha Dordenma, and Chimi Lhakhang fertility temple. Small group cultural tour from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/glimpse-of-bhutan-tour-6-days-paro-thimphu-punakha",
      keywords: [
        "Glimpse of Bhutan tour",
        "Bhutan 6 day tour package",
        "Paro Thimphu Punakha tour",
        "Bhutan cultural tour package",
        "Tiger's Nest Punakha Dzong tour",
        "Dochula Pass tour Bhutan",
        "Buddha Dordenma tour Thimphu",
        "Chimi Lhakhang tour Punakha",
      ],
    },

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
          "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Above the Paro Valley",
      },
      {
        title:
          "Punakha Dzong – Bhutan's Most Majestic Fortress at the Confluence of Two Sacred Rivers",
      },
      {
        title:
          "Dochula Pass (3,050m) – 108 Druk Wangyal Chortens & Panoramic Eastern Himalayan Views",
      },
      {
        title:
          "Buddha Dordenma – 51.5m Bronze Buddha Statue Overlooking the Entire Thimphu Valley",
      },
      {
        title:
          "Chimi Lhakhang – The Revered Temple of Fertility in Bhutan's Lobesa Valley",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten – Scenic Four-Storey Ridge Temple with Sweeping Punakha Valley Views",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/punakhadzong.jpg",
      alt: "Punakha Dzong Bhutan – Fortress Monastery at the Confluence of Pho Chhu and Mo Chhu Rivers in Punakha Valley",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/vaishno-Hima2.jpg",
        alt: "Paro Valley Bhutan – Aerial View of Paro Valley with Rinpung Dzong and Pa Chhu River at Sunrise",
      },
      {
        id: 2,
        src: "/thimphu5.jpg",
        alt: "Thimphu Bhutan – Buddha Dordenma Statue at Kuensel Phodrang Overlooking the Thimphu Valley",
      },
      {
        id: 3,
        src: "/paro6.jpg",
        alt: "Paro Taktsang Tiger's Nest Monastery Bhutan – Sacred Monastery Perched on Granite Cliff at 3,120m",
      },
      {
        id: 3,
        src: "/paro6.jpg",
        alt: "Paro Taktsang Tiger's Nest Monastery Bhutan – Sacred Monastery Perched on Granite Cliff at 3,120m",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      {
        label:
          "Glimpse of Bhutan Tour – 6 Days Paro, Thimphu & Punakha Cultural Package",
      },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome, Tachog Lhakhang Iron Bridge & Drive to Thimphu",
        details: [
          "Arrive at Paro International Airport (PBH) at 2,280m, where the flight into Bhutan provides one of the most spectacular aerial approaches on earth – the Himalayan range unfolds dramatically through the aircraft window, with the glittering glaciers and summits of some of the world's highest peaks visible as the aircraft descends into the narrow Paro Valley.",
          "As the flight approaches the runway, the silvery Pa Chhu river winds through the valley alongside the striking silhouette of Paro Dzong and the historic Ta Dzong watchtower rising above the treeline – a first, vivid impression of Bhutan's timeless monastic architecture.",
          "Complete immigration and customs formalities before receiving a warm traditional welcome from your local guide, beginning the scenic drive eastward toward Thimphu, Bhutan's capital city.",
          "En route, stop at the sacred Tachog Lhakhang (Tachogang Lhakhang), meaning 'Temple of the Hill of the Excellent Horse' – a revered 14th-century temple reached by crossing the Pa Chhu on a traditional iron chain bridge, a masterpiece attributed to the legendary Bhutanese saint, engineer, and bridge-builder Thangtong Gyalpo.",
          "Learn how this extraordinary figure is credited with constructing 108 iron chain bridges across Bhutan and Tibet, and how the original Tachog Lhakhang structure – washed away by floods in 1969 – was faithfully restored in 2005, preserving one of Bhutan's most important examples of medieval engineering and sacred architecture.",
          "Continue the scenic drive to Thimphu through pine-covered valley roads, arriving in the capital by evening to check in and begin settling into the unhurried rhythm of Bhutanese life. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing – Memorial Chorten, Buddha Dordenma, Takin Preserve & Tashichho Dzong",
        details: [
          "Begin the day at the National Memorial Chorten, a beautifully ornamented stupa built in 1974 in memory of Bhutan's beloved Third King, His Majesty Jigme Dorji Wangchuck – where devoted locals circle in continuous morning prayer in a timeless ritual that offers one of the most intimate windows into living Bhutanese Buddhism.",
          "Drive to Kuensel Phodrang to visit the iconic Buddha Dordenma statue, one of the largest bronze Buddha statues in the world at 51.5 metres, gazing serenely over the entire Thimphu Valley from its hilltop position and sheltering over 125,000 smaller gold and silver Buddha statues within its interior.",
          "For those feeling active, an optional two-hour scenic hike from Buddha Point through the forest trail to Changangkha Lhakhang can be arranged, offering stunning ridge views across Thimphu Valley and a rewarding, uncrowded perspective of the capital.",
          "Visit the Motithang Takin Preserve before lunch, home to the takin – Bhutan's wonderfully unique national animal, a creature so unusual in appearance that local legend attributes its creation to a 15th-century divine madman saint through an act of spiritual alchemy.",
          "Explore the local vegetable market in the heart of Thimphu, where vendors, produce, and the easy conversational rhythm of daily Bhutanese life offer a colourful and authentic snapshot of the capital away from its monuments.",
          "In the evening, visit the magnificent Tashichho Dzong beside the Wang Chhu River – the official seat of Bhutan's government and the summer residence of the Je Khenpo (Chief Abbot), its grand whitewashed walls, gilded roofs, and intricately carved woodwork standing with quiet authority as the administrative and ceremonial heart of the kingdom.",
          "Originally constructed in 1216 and extensively expanded under the Fourth King in the 1960s, Tashichho Dzong represents the finest example of traditional Bhutanese dzong architecture at its most imposing and beautiful scale. Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Punakha via Dochula Pass (3,050m) – 108 Chortens, Chimi Lhakhang & Punakha Dzong",
        details: [
          "Depart Thimphu after breakfast and begin the climb toward Dochula Pass at 3,050m, one of Bhutan's most iconic high-altitude viewpoints and a highlight of any cultural tour itinerary in the kingdom.",
          "Arrive at the pass to find the 108 Druk Wangyal Chortens standing in neat, atmospheric rows – a memorial commissioned by Her Majesty the Queen Mother Ashi Dorji Wangmo Wangchuck – and, on clear days, a sweeping panoramic view of the Eastern Himalayan range including Masagang, Terigang, Kangphugang, and the majestic Gangkar Puensum at 7,497m, Bhutan's highest peak.",
          "Continue the descent along winding mountain roads into the warm, subtropical Wangduephodrang Valley, where the air softens immediately and rice fields begin to appear along the roadside as the landscape shifts from cool highland to lush riverside terrain.",
          "Pause at Wangdue Phodrang Dzong, a historic fortress perched dramatically on a ridge overlooking the sacred confluence of the Punatsang Chhu and Dang Chhu rivers, before continuing toward Punakha.",
          "Take a pleasant 30-minute walk through scenic rice paddies and farm fields to reach Chimi Lhakhang, a charming hilltop fertility temple set on a knoll in the Lobesa Valley, dedicated to the revered 15th-century saint Lama Drukpa Kuenley – the 'Divine Madman' – and one of Bhutan's most beloved and visited pilgrimage sites for couples seeking blessings.",
          "Arrive in the afternoon at the magnificent Punakha Dzong, beautifully positioned at the sacred confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River) – widely regarded as the most beautiful dzong in Bhutan, serving as the country's capital until 1955, and still the winter residence of the Central Monastic Body.",
          "Explore its richly decorated courtyards, painted corridors, and historic lhakhangs, where the first coronation of Bhutan's royal Wangchuck dynasty took place in 1907 – and where the country's most sacred statue has survived centuries of fires, earthquakes, and floods. Overnight Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Punakha – Khamsum Yulley Namgyal Chorten Hike, Punakha Dzong Revisit & Drive to Paro",
        details: [
          "Begin the morning with a scenic one-hour hike through golden rice paddies and quiet pine forests to reach Khamsum Yulley Namgyal Chorten, standing majestically on a ridge overlooking the full sweep of the Punakha Valley from its elevated hilltop position.",
          "Built over nine years by skilled Bhutanese artisans using traditional methods guided entirely by sacred Buddhist scriptures, this impressive four-storey temple was commissioned by Her Majesty the Queen Mother and dedicated to the peace, stability, and well-being of the kingdom and all sentient beings.",
          "Explore the temple's interior, richly decorated with traditional Bhutanese thangkas, murals, and religious iconography, before descending back to the valley with sweeping views of the Punakha landscape in every direction.",
          "Return to Punakha Dzong for a deeper, more leisurely exploration of its historical significance – including its role as the site where the First King of Bhutan, Ugyen Wangchuck, received the title of Druk Gyalpo (Dragon King) in 1907, and its miraculous preservation of the sacred statue of Zhabdrung Ngawang Namgyal through centuries of natural disasters.",
          "Enjoy lunch in Punakha before departing on the scenic drive back toward Paro, the mountain roads familiar now but carrying a new depth of appreciation after four days exploring Bhutan's most visited and culturally significant valley regions.",
          "Arrive in Paro by early evening with time for a relaxed stroll through the town's traditional wooden shopfronts and quiet streets before a peaceful overnight stay in preparation for tomorrow's iconic Tiger's Nest hike. Overnight Paro.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang (3,120m), Ta Dzong National Museum & Paro Town",
        details: [
          "Begin Bhutan's most iconic and universally celebrated hike with an early morning start toward the Taktsang trailhead, where the path immediately enters a world of fragrant blue pine forest, fluttering prayer flags, and the distant silhouette of Paro Taktsang clinging impossibly to the sheer granite cliff face 900 metres above the valley floor.",
          "Ascend steadily over 2–3 hours to reach Taktsang Palphug Monastery (Tiger's Nest) at 3,120m – Bhutan's most sacred and visually iconic landmark, where Guru Rinpoche (Padmasambhava) is believed to have arrived on the back of a tigress in the 8th century and meditated in the caves below before establishing Buddhism across the kingdom.",
          "The Taktsang Cafeteria viewpoint at the halfway mark offers one of the most photographed and breathtaking views in Bhutan, where the monastery's white walls and golden rooftops against the sheer rock face create an image unlike anywhere else in the Himalayan world – a stopping point worth the journey in itself.",
          "Continue the final ascent to the monastery complex and explore its interconnected sacred halls, altar rooms, and prayer chambers, each space filled with centuries of unbroken devotion, rare religious art, and a profound spiritual stillness deeply rooted in the mountain rock.",
          "Descend over 1.5–2 hours, completing the full round-trip hike in approximately 4–5 hours and returning to the valley with a well-earned sense of accomplishment and a memory that defines any visit to Bhutan.",
          "In the afternoon, visit Ta Dzong (National Museum of Bhutan), originally constructed in 1646 as a watchtower to protect Rinpung Dzong, now housing a remarkable collection of Bhutanese art, armour, textiles, coins, and natural history spanning over a thousand years of the kingdom's heritage.",
          "End the day with a leisurely evening stroll through Paro town's traditional wooden-fronted shops, local cafés, and artisan stalls – a final, gentle immersion in the everyday warmth and charm of Bhutanese valley life. Overnight Paro.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Departure from Paro International Airport – End of Glimpse of Bhutan Tour",
        details: [
          "Wake to a final quiet morning in Paro, where the crisp valley air, soft light on the surrounding ridges, and the unhurried Bhutanese rhythm make the prospect of departing feel gently reluctant after six deeply immersive days in the kingdom.",
          "Enjoy a last breakfast in Bhutan, taking a moment to reflect on the full arc of the journey – Tiger's Nest, Punakha Dzong, the 108 chortens at Dochula Pass, the sacred fertility temple of Chimi Lhakhang, Buddha Dordenma above Thimphu, and the Khamsum Yulley Namgyal Chorten above the Punakha Valley.",
          "Complete final packing and check out, carrying not only carefully chosen Bhutanese souvenirs but a genuine and lasting connection to the spirit, landscape, and people of this extraordinary Himalayan kingdom.",
          "Transfer to Paro International Airport (PBH) for your onward flight – the same peaceful valley gateway through which this six-day Bhutan cultural journey first began, with Rinpung Dzong still watching over the Pa Chhu river in the soft morning light.",
          "As the flight lifts off and the golden dzongs, pine-covered ridges, prayer-flag-lined passes, and Himalayan peaks of Bhutan slowly dissolve beneath the clouds, allow the warmth, serenity, and timeless beauty of the Kingdom of the Thunder Dragon to settle into something permanent. Departure from Paro.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations Covered",
        value: "Paro · Thimphu · Dochula Pass · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-GLM-PBH-06" },
      {
        label: "Meals Included",
        value: "Breakfast daily throughout the tour",
      },
      {
        label: "Best Time to Visit Bhutan",
        value: "March–May & September–November",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Sightseeing" },
    ],
  },
  {
    id: 516,
    country: "Bhutan",
    place: "Paro",
    title: "Bhutan Short Trip – 4 Days Paro & Thimphu Cultural Tour Package",
    type: "cultural",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Paro → Thimphu → Paro",
    destinations: ["Paro", "Thimphu"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 1065,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.7,
    reviews: 52,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/thimphu.jpg",
    popular: true,

    seoMeta: {
      slug: "bhutan-short-trip-4-days-paro-thimphu",
      metaTitle:
        "Bhutan Short Trip | 4 Days | Paro · Thimphu | Tiger's Nest & Buddha Dordenma",
      metaDescription:
        "Explore Bhutan in 4 days — Tiger's Nest hike at 3,120m, Buddha Dordenma above Thimphu Valley, Tashichho Dzong, Ta Dzong National Museum, and a traditional Bhutanese dinner. Perfect short Bhutan cultural tour from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/bhutan-short-trip-4-days-paro-thimphu",
      keywords: [
        "Bhutan short trip",
        "Bhutan 4 day tour",
        "Bhutan 4 day tour package",
        "Paro Thimphu tour",
        "Bhutan cultural tour",
        "Bhutan sightseeing package",
        "Tiger's Nest tour Bhutan",
        "Bhutan vacation package",
        "Bhutan holiday package",
        "Paro tour package",
        "Thimphu sightseeing tour",
        "Bhutan family tour",
        "Bhutan travel package",
        "Bhutan itinerary 4 days",
        "Bhutan group tour",
        "Bhutan guided tour",
        "Tiger's Nest hike package",
        "Buddha Dordenma tour",
        "Tashichho Dzong tour",
        "Best Bhutan tour package",
        "Short Bhutan holiday",
        "Bhutan trip from India",
        "Bhutan trip from Singapore",
        "Bhutan trip from Australia",
        "Bhutan trip from USA"
      ]
    },

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
          "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Above the Paro Valley Floor",
      },
      {
        title:
          "Paro Dzong (Rinpung Dzong) – Iconic 17th-Century Fortress Rising Above the Pa Chhu River",
      },
      {
        title:
          "Buddha Dordenma – 51.5m Bronze Buddha Statue Overlooking the Entire Thimphu Valley",
      },
      {
        title:
          "Tashichho Dzong – Official Seat of Bhutan's Government on the Banks of the Wang Chhu",
      },
      {
        title:
          "Ta Dzong National Museum – Bhutan's Finest Traditional Watchtower Architecture Since 1646",
      },
      {
        title:
          "Traditional Bhutanese Dinner – Authentic Himalayan Cuisine Experience in Paro or Thimphu",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/thimphu1.jpg",
      alt: "Thimphu Valley Bhutan – Aerial View of Bhutan's Capital City Thimphu with Tashichho Dzong and Wang Chhu River",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/thimphu2.jpg",
        alt: "Tashichho Dzong Thimphu Bhutan – Whitewashed Fortress Monastery on the Banks of the Wang Chhu River at Dusk",
      },
      {
        id: 2,
        src: "/thimphu3.jpg",
        alt: "Buddha Dordenma Statue Thimphu Bhutan – 51.5m Bronze Buddha at Kuensel Phodrang Overlooking the Thimphu Valley",
      },
      {
        id: 3,
        src: "/thimphu4.jpg",
        alt: "Memorial Chorten Thimphu Bhutan – Devotees Circumambulating the National Memorial Stupa in Morning Prayer",
      },
      {
        id: 4,
        src: "/dochula_overview.jpg",
        alt: "Dochula Pass Bhutan – 108 Druk Wangyal Chortens with Panoramic Eastern Himalayan Mountain Views on Clear Day",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      {
        label:
          "Bhutan Short Trip – 4 Days Paro & Thimphu Cultural Tour Package",
      },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "4 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome, Tachog Lhakhang Iron Bridge & Tashichho Dzong Thimphu",
        details: [
          "Arrive at Paro International Airport (PBH) at 2,280m, where the flight into Bhutan delivers one of the most spectacular aerial approaches on earth – the Himalayan range unfolds dramatically through the aircraft window, with the shimmering glaciers and summits of some of the world's highest peaks visible as the aircraft descends into the narrow Paro Valley.",
          "As the plane approaches the runway, the silvery Pa Chhu river winds through the valley floor alongside the iconic silhouette of Paro Dzong (Rinpung Dzong) and the historic Ta Dzong watchtower rising above the treeline – an immediate and unforgettable first impression of Bhutan's monastic architecture and highland serenity.",
          "Complete immigration and customs formalities before receiving a warm traditional welcome from your local guide, then begin the scenic drive eastward toward Thimphu, Bhutan's capital city, through pine-covered valley roads lined with whitewashed farmhouses and fluttering prayer flags.",
          "En route, stop at the sacred Tachog Lhakhang (Tachogang Lhakhang), meaning 'Temple of the Hill of the Excellent Horse' – a revered 14th-century temple reached by crossing the Pa Chhu on a traditional iron chain bridge, a masterpiece attributed to the legendary Bhutanese saint, engineer, and bridge-builder Thangtong Gyalpo.",
          "Learn how this extraordinary figure is credited with constructing 108 iron chain bridges across Bhutan and Tibet, and how the original structure – washed away by floods in 1969 – was faithfully restored in 2005, preserving one of the most remarkable examples of medieval Himalayan sacred engineering and spiritual architecture.",
          "Arrive in Thimphu and visit the magnificent Tashichho Dzong beside the Wang Chhu River in the evening – the official seat of Bhutan's government and the summer residence of the Je Khenpo (Chief Abbot), its grand whitewashed walls, gilded rooftops, and intricately carved woodwork standing with quiet authority as the administrative and ceremonial heart of the kingdom.",
          "Originally constructed in 1216 and extensively expanded under the Fourth King in the 1960s, Tashichho Dzong represents traditional Bhutanese dzong architecture at its most imposing scale and finest detail. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu to Paro – Memorial Chorten, Buddha Dordenma, Takin Preserve & Ta Dzong National Museum",
        details: [
          "Begin the day at the National Memorial Chorten, a beautifully ornamented stupa built in 1974 in memory of Bhutan's beloved Third King, His Majesty Jigme Dorji Wangchuck – where devoted locals circle in continuous morning prayer, offering one of the most intimate and moving windows into living Bhutanese Buddhist practice.",
          "Drive to Kuensel Phodrang to visit the iconic Buddha Dordenma statue, one of the largest bronze Buddha statues in the world at 51.5 metres, gazing serenely over the entire Thimphu Valley from its hilltop position and sheltering over 125,000 smaller gold and silver Buddha statues within its vast interior.",
          "For those feeling active, an optional two-hour scenic hike from Buddha Point through the forested ridge trail to Changangkha Lhakhang can be arranged – offering stunning panoramic views across the Thimphu Valley and a rewarding, uncrowded perspective of the capital far from its busier monuments.",
          "Visit the Motithang Takin Preserve before lunch, home to the takin – Bhutan's wonderfully unique national animal, a creature so unusual in appearance that local legend attributes its creation to a 15th-century divine madman saint through an act of spiritual alchemy.",
          "Stroll through the local vegetable market in central Thimphu, where vendors, seasonal produce, and the easy conversational rhythm of everyday Bhutanese life offer a colourful and authentic snapshot of the capital beyond its famous dzongs and monuments.",
          "After lunch, depart Thimphu on the scenic 1.5-hour drive back to Paro, stopping at Ta Dzong (National Museum of Bhutan), originally constructed in 1646 as a cylindrical watchtower to protect Rinpung Dzong – now housing a remarkable collection of Bhutanese art, armour, textiles, coins, thangkas, and natural history spanning over a thousand years of the kingdom's cultural heritage.",
          "End the day with a relaxed evening stroll through Paro town's traditional wooden-fronted shops and quiet streets, soaking up the valley's last light before an overnight rest in preparation for tomorrow's iconic Tiger's Nest hike. Overnight Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang (3,120m) & Traditional Bhutanese Dinner | 4–5 Hours Round Trip",
        details: [
          "Begin Bhutan's most iconic and universally celebrated hike with an early morning start toward the Taktsang trailhead, where the path immediately enters a world of fragrant blue pine forest, colourful prayer flags, and the distant silhouette of Paro Taktsang clinging impossibly to the sheer granite cliff face 900 metres above the Paro Valley floor.",
          "Ascend steadily over 2–3 hours to reach Taktsang Palphug Monastery (Tiger's Nest) at 3,120m – Bhutan's most sacred and globally recognised landmark, where Guru Rinpoche (Padmasambhava) is believed to have arrived on the back of a tigress in the 8th century and meditated in the caves below before establishing Vajrayana Buddhism across the kingdom.",
          "The Taktsang Cafeteria viewpoint at the halfway mark offers one of the most photographed perspectives in all of Bhutan, where the monastery's white walls and golden rooftops against the vertical cliff face create a view that has become the defining image of the kingdom worldwide – an unforgettable stopping point worth the journey in itself.",
          "For those who prefer a lighter experience, the cafeteria viewpoint provides a complete and deeply rewarding encounter with this sacred site without requiring the full climb to the monastery complex.",
          "Continue the final ascent to the monastery and explore its interconnected sacred halls, altar rooms, and prayer chambers – each space filled with centuries of unbroken devotion, rare religious murals, and a profound spiritual stillness that is deeply rooted in the mountain granite.",
          "Descend over 1.5–2 hours, completing the full round-trip hike in approximately 4–5 hours and returning to the Paro Valley with a well-earned sense of accomplishment and a memory that defines any visit to Bhutan.",
          "In the evening, enjoy a traditional Bhutanese dinner featuring authentic Himalayan dishes including ema datshi (chilli and cheese), red rice, momos, and other local specialties – a warm and fitting culinary celebration of six extraordinary days in the Kingdom of the Thunder Dragon. Overnight Paro.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Departure from Paro International Airport – End of Bhutan Short Trip",
        details: [
          "Wake to a final quiet morning in Paro, where the crisp valley air, soft light on the surrounding pine ridges, and the unhurried rhythm of Bhutanese life make the prospect of departing feel gently reluctant after four immersive days in the kingdom.",
          "Enjoy a last breakfast in Bhutan, taking a reflective moment to absorb the full journey – the Tiger's Nest hike, the golden walls of Tashichho Dzong, Buddha Dordenma above the Thimphu Valley, the ancient iron bridge of Tachog Lhakhang, and the warmth of Bhutanese hospitality throughout.",
          "Complete final packing and check out of the hotel, carrying not only carefully chosen Bhutanese souvenirs but a genuine and lasting connection to the spirit, landscape, and culture of this extraordinary Himalayan kingdom.",
          "Transfer to Paro International Airport (PBH) for your onward flight – the same serene and scenic gateway through which this four-day Bhutan short trip first began, with Rinpung Dzong watching over the Pa Chhu river one final time in the soft morning light.",
          "As the flight lifts off and the ancient dzongs, prayer-flag-lined ridges, and snow-capped Himalayan peaks of Bhutan slowly dissolve beneath the clouds, allow the warmth, serenity, and timeless beauty of the Kingdom of the Thunder Dragon to settle into something permanent and deeply personal.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations Covered",
        value: "Paro · Thimphu",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-SHT-PBH-04" },
      {
        label: "Meals Included",
        value:
          "Breakfast daily; Traditional Bhutanese Dinner included on Day 3",
      },
      {
        label: "Best Time to Visit Bhutan",
        value: "March–May & September–November",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Sightseeing" },
    ],
  },
  {
    id: 517,
    country: "Bhutan",
    place: "Paro",
    title:
      "Paro Festival Tour Bhutan – 8 Days Paro Tsechu, Thimphu & Punakha Cultural Package",
    type: "festivals",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Paro → Thimphu → Punakha → Paro",
    destinations: ["Paro", "Thimphu", "Dochula Pass", "Punakha"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2399,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.9,
    reviews: 88,
    badge: "Festivals",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/paro-festival.jpg",
    popular: true,

    seoMeta: {
      slug: "paro-festival-tour-bhutan-8-days-tsechu",
      metaTitle:
        "Paro Festival Tour Bhutan | 8 Days | Paro Tsechu · Thimphu · Punakha | Sacred Mask Dances",
      metaDescription:
        "Experience the Paro Tsechu Festival in 8 days — sacred mask dances at Rinpung Dzong, Tiger's Nest hike at 3,120m, Punakha Dzong at the river confluence, 108 chortens at Dochula Pass, and Simtokha Dzong. Small group cultural festival tour from Paro.",
      canonicalUrl:
        "https://indrukatours.com/tours/bhutan/cultural/paro-festival-tour-bhutan-8-days-tsechu",
      keywords: [
        "Paro Tsechu Festival Tour",
        "Bhutan Festival Tour",
        "Paro Tsechu Package",
        "Bhutan Cultural Festival",
        "Paro Festival Bhutan",
        "Bhutan 8 Day Tour",
        "Bhutan Cultural Package",
        "Tiger's Nest Festival Tour",
        "Punakha and Paro Tour",
        "Bhutan Heritage Tour",
        "Bhutan Buddhist Festival",
        "Bhutan Religious Festival",
        "Paro Tsechu 2026",
        "Bhutan Spring Festival",
        "Bhutan Monastery Tour",
        "Bhutan Small Group Tour",
        "Bhutan Luxury Festival Tour",
        "Bhutan Photography Tour",
        "Paro Cultural Tour",
        "Bhutan Sightseeing Package",
        "Australia to Bhutan Festival Tour",
        "USA to Bhutan Festival Package",
        "UK to Bhutan Festival Tour",
        "India to Bhutan Festival Tour",
        "Singapore to Bhutan Tour",
        "Thailand to Bhutan Tour",
        "Canada to Bhutan Festival Tour",
        "Germany to Bhutan Cultural Tour",
        "France to Bhutan Festival Package",
        "Malaysia to Bhutan Tour",
        "UAE to Bhutan Tour",
        "Japan to Bhutan Festival Tour",
        "South Korea to Bhutan Tour",
        "New Zealand to Bhutan Package",
        "Bhutan Travel Package 2026",
        "Best Bhutan Festival Tour",
        "Bhutan Holiday Package",
        "Bhutan Group Tour",
        "Paro Tsechu Mask Dance Festival",
        "Bhutan Traditional Festival"
      ],
    },

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
          "Paro Tsechu Festival – Sacred Cham Mask Dances & Traditional Costumes at Historic Rinpung Dzong",
      },
      {
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Above the Paro Valley Floor",
      },
      {
        title:
          "Punakha Dzong – Bhutan's Most Majestic Fortress at the Confluence of Pho Chhu & Mo Chhu Rivers",
      },
      {
        title:
          "Dochula Pass (3,050m) – 108 Druk Wangyal Chortens & Panoramic Eastern Himalayan Views",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten – Four-Storey Hilltop Temple with Sweeping Punakha Valley Views",
      },
      {
        title:
          "Simtokha Dzong – One of Bhutan's Oldest Fortress Monasteries Built in 1629",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/paro-festival1.jpg",
      alt: "Paro Tsechu Festival Bhutan – Monks Performing Sacred Cham Mask Dances in the Courtyard of Rinpung Dzong, Paro",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/paro-festival2.jpg",
        alt: "Paro Tsechu Festival Bhutan – Colourfully Costumed Dancers Performing Traditional Cham at Rinpung Dzong Courtyard",
      },
      {
        id: 2,
        src: "/paro-festival3.jpg",
        alt: "Paro Tsechu Thongdrel Bhutan – Sacred Giant Thangka Silk Appliqué Unfurled at Dawn at Rinpung Dzong During Paro Festival",
      },
      {
        id: 3,
        src: "/paro.jpg",
        alt: "Paro Valley Bhutan – Aerial View of Paro Valley with Rinpung Dzong and Pa Chhu River on a Clear Himalayan Morning",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      {
        label:
          "Paro Festival Tour Bhutan – 8 Days Paro Tsechu, Thimphu & Punakha Cultural Package",
      },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome, Tachog Lhakhang Iron Bridge, Memorial Chorten & Thimphu",
        details: [
          "Arrive at Paro International Airport (PBH) at 2,280m, where the flight into Bhutan delivers one of the most breathtaking aerial approaches on earth – the Himalayan range unfolds dramatically through the aircraft window as the plane descends into the narrow Paro Valley, with the iconic silhouette of Rinpung Dzong rising above the Pa Chhu river marking the very first impression of the kingdom.",
          "Complete immigration and customs formalities before receiving a warm traditional welcome from your local guide, then begin the scenic one-hour drive eastward toward Thimphu through pine-covered valley roads where whitewashed farmhouses, fluttering prayer flags, and the unhurried pace of Bhutanese life line every kilometre of the route.",
          "Stop en route at the sacred Tachog Lhakhang (Tachogang Lhakhang), a revered 14th-century temple reached by crossing the Pa Chhu on a traditional iron chain bridge – a masterpiece attributed to the legendary Bhutanese saint and bridge-builder Thangtong Gyalpo, who is credited with constructing 108 such iron bridges across Bhutan and Tibet.",
          "Learn how the original structure was washed away by floods in 1969 and faithfully restored in 2005, preserving one of the most significant examples of medieval Himalayan sacred engineering and monastic architecture in the kingdom.",
          "Arrive in Thimphu and visit the National Memorial Chorten in the afternoon, a beautifully ornamented stupa built in 1974 in memory of Bhutan's beloved Third King, His Majesty Jigme Dorji Wangchuck – where devoted locals circle in continuous morning and evening prayer in a deeply moving and timeless spiritual ritual.",
          "Explore the Centenary Farmers Market nearby, where seasonal produce, local snacks, hand-woven textiles, and the easy conversational rhythm of everyday Bhutanese life create a colourful and authentic first evening in the capital.",
          "Check in to the Thimphu hotel and settle in for a well-rested first night in Bhutan's capital city, in preparation for a full day of exploration tomorrow. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Full Day – Buddha Dordenma, Takin Preserve, National Textile Museum & Tashichho Dzong",
        details: [
          "Begin the day with a drive to Kuensel Phodrang to visit the iconic Buddha Dordenma statue, one of the largest bronze Buddha statues in the world at 51.5 metres, gazing serenely over the entire Thimphu Valley from its hilltop position and sheltering over 125,000 smaller gold and silver Buddha statues within its vast interior.",
          "For those feeling active, an optional two-hour scenic hike from Buddha Point through the forested ridge trail to Changangkha Lhakhang can be arranged, offering stunning panoramic views across the Thimphu Valley and a rewarding, uncrowded perspective of the capital far from its more visited monuments.",
          "Visit the Motithang Takin Preserve, home to the takin – Bhutan's wonderfully unique national animal, a creature so unusual in appearance that local legend attributes its creation to a 15th-century divine madman saint through an act of spiritual alchemy.",
          "Explore the National Textile Museum, where the extraordinary craftsmanship of Bhutanese weaving traditions is displayed through rare fabrics, looms, and historical textiles that represent one of the most sophisticated and living artisan cultures in the Himalayan world.",
          "Visit the Folk Heritage Museum nearby for an immersive encounter with traditional Bhutanese rural life – a faithfully reconstructed three-storey rammed-earth farmhouse revealing the domestic customs, tools, agricultural practices, and daily rhythms of Bhutan's highland communities across the centuries.",
          "In the evening, visit the magnificent Tashichho Dzong beside the Wang Chhu River – the official seat of Bhutan's government and the summer residence of the Je Khenpo (Chief Abbot), its grand whitewashed walls, gilded rooftops, and intricately carved woodwork standing with quiet authority as the administrative and ceremonial heart of the kingdom.",
          "Conclude with a relaxed evening stroll through Thimphu town, absorbing the local café culture, artisan shops, and the gentle urban rhythm of Bhutan's capital before retiring for the night. Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Punakha via Dochula Pass (3,050m) – 108 Chortens, Chimi Lhakhang & Wangdue Phodrang Dzong",
        details: [
          "Depart Thimphu after breakfast and begin the scenic climb toward Dochula Pass at 3,050m, one of Bhutan's most iconic high-altitude viewpoints and a defining landmark on any cultural tour itinerary through the kingdom.",
          "Arrive at the pass to find the 108 Druk Wangyal Chortens standing in neat, atmospheric rows – a memorial commissioned by Her Majesty the Queen Mother – and on clear days a sweeping panorama of the Eastern Himalayan range stretching endlessly toward the Tibet border, including Bhutan's highest peak Gangkar Puensum at 7,497m.",
          "For those seeking an additional highland experience, an optional Lungchutse Hike begins just above the chortens, ascending through rhododendron forest to Lungchutse Temple on a ridge at approximately 3,600m – a rewarding 5–6 km round-trip walk of 3–4 hours with outstanding Himalayan views.",
          "Continue the descent along winding mountain roads into the warm subtropical Wangduephodrang Valley, pausing at the historically significant Wangdue Phodrang Dzong, a fortress monastery perched dramatically on a ridge above the confluence of the Punatsang Chhu and Dang Chhu rivers.",
          "Take a pleasant 30-minute walk through golden rice paddies and farmland to reach Chimi Lhakhang, the charming hilltop fertility temple in the Lobesa Valley dedicated to the revered 15th-century saint Lama Drukpa Kuenley – the 'Divine Madman' – one of Bhutan's most beloved pilgrimage sites for couples seeking blessings.",
          "Arrive in Punakha by evening, checking in to the hotel and settling into the warmth and greenery of Bhutan's former royal capital – one of the most historically significant and naturally beautiful valley regions in the entire kingdom. Overnight Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Punakha – Khamsum Yulley Namgyal Chorten Hike, Punakha Dzong & Suspension Bridge",
        details: [
          "Begin the morning with a scenic one-hour hike through golden rice paddies and quiet pine forest to reach Khamsum Yulley Namgyal Chorten, a remarkable four-storey temple standing majestically on a ridge above the Punakha Valley with sweeping panoramic views of the terraced fields, river plains, and surrounding mountain ranges.",
          "Built over nine years by skilled Bhutanese artisans using traditional methods guided entirely by sacred Buddhist scriptures, this impressive temple was commissioned by Her Majesty the Queen Mother and dedicated to the peace, stability, and well-being of the kingdom and all sentient beings.",
          "Explore the richly decorated interior with its traditional thangkas, murals, and religious iconography before descending back to the valley, the full sweep of the Punakha landscape unfolding in every direction from the ridgeline.",
          "In the afternoon, visit the magnificent Punakha Dzong, beautifully positioned at the sacred confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River) – widely regarded as the most beautiful dzong in Bhutan, serving as the country's capital until 1955, and the historic site of the first royal coronation of the Wangchuck dynasty in 1907.",
          "Explore the richly decorated courtyards, painted corridors, and historic lhakhangs of Punakha Dzong, where centuries of royal Bhutanese heritage are layered into every stone, woodcarving, and sacred fresco within the complex.",
          "Conclude the day with a walk across the Punakha Suspension Bridge, one of the longest traditional suspension bridges in Bhutan, where prayer flags flutter above the rushing Pho Chhu below and scenic valley views stretch in both directions – a memorable and photogenic close to a full day in Punakha. Overnight Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Punakha to Paro via Simtokha Dzong (1629) – One of Bhutan's Oldest Fortress Monasteries",
        details: [
          "Depart Punakha after breakfast and begin the scenic drive back westward toward the enchanting Paro Valley, with a significant cultural stop at Simtokha Dzong along the route.",
          "Arrive at Simtokha Dzong, standing approximately 5 km south of Thimphu – built in 1629 by the unifier of Bhutan, Zhabdrung Ngawang Namgyal, it is widely regarded as one of the oldest and most historically significant dzongs in the entire kingdom.",
          "Explore its remarkable exterior stone bas-reliefs depicting Buddhist saints and deities – an artistic tradition almost unique among Bhutanese dzong architecture – and its interior shrines, thangkas, and monastic halls that carry nearly four centuries of unbroken religious life.",
          "Learn how Simtokha Dzong served as the model for all subsequent dzong architecture across Bhutan, making it not only a place of deep spiritual significance but also the founding template of the kingdom's most distinctive and iconic architectural heritage.",
          "Continue the scenic mountain drive through familiar highland passes and pine-covered valley roads toward Paro, the landscape carrying a new depth of familiarity and appreciation after five days exploring Bhutan's most celebrated cultural sites.",
          "Arrive in Paro Valley by evening, checking in to the hotel with a growing sense of anticipation for the Paro Tsechu Festival that awaits tomorrow – one of the most spectacular and spiritually significant cultural events in the Himalayan Buddhist world. Overnight Paro.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Paro Tsechu Festival – Sacred Cham Mask Dances at Rinpung Dzong, Ta Dzong Museum & Kichu Lhakhang",
        details: [
          "The cultural heart of the entire journey arrives today at the spectacular Paro Tsechu Festival, held annually in the spring at the historic Rinpung Dzong – one of the most vibrant, visually extraordinary, and spiritually significant religious festivals in the entire Bhutanese calendar.",
          "Witness the sacred Cham mask dances (chhams) performed by monks and lay dancers in the dzong's main courtyard, each dance a living expression of Vajrayana Buddhist cosmology, representing the subjugation of evil spirits and the triumph of dharma – a tradition believed to bestow blessings and liberation on all who witness it with pure intention.",
          "Observe the sea of colour as local Bhutanese families, monks, and officials arrive in their finest traditional attire – the women in elegant kiras and the men in ghos – creating a living tableau of Bhutanese cultural identity at its most vibrant and ceremonial.",
          "On the final morning of the festival, if timing aligns, witness the unfurling of the sacred Thongdrel – a massive silk appliqué thangka of Guru Rinpoche revealed at dawn and believed to grant liberation through sight alone – one of the most sacred and emotionally powerful moments in the Bhutanese religious year.",
          "In the afternoon, visit Ta Dzong (National Museum of Bhutan), originally constructed in 1646 as a watchtower to protect Rinpung Dzong, now housing a remarkable collection spanning Bhutanese art, armour, textiles, coins, thangkas, and natural history across over a thousand years of the kingdom's cultural heritage.",
          "Continue to Kichu Lhakhang (Kyichu Lhakhang), one of the oldest and most sacred temples in Bhutan, believed to have been built in the 7th century by Tibetan Emperor Songtsen Gampo – its atmosphere of deep, unbroken devotion offering a quietly powerful contrast to the festival's vibrant courtyard spectacle.",
          "End the evening with a leisurely stroll through Paro town's traditional wooden-fronted shops and artisan stalls, the festival energy still lingering warmly in the mountain air. Overnight Paro.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang (3,120m) | 4–5 Hours Round Trip",
        details: [
          "Begin Bhutan's most iconic and universally celebrated hike with an early morning start toward the Taktsang trailhead, where the path immediately enters a world of fragrant blue pine forest, colourful prayer flags, and the distant silhouette of Paro Taktsang clinging impossibly to the sheer granite cliff face 900 metres above the Paro Valley floor.",
          "Ascend steadily over 2–3 hours to reach Taktsang Palphug Monastery (Tiger's Nest) at 3,120m – Bhutan's most sacred and globally recognised landmark, where Guru Rinpoche (Padmasambhava) is believed to have arrived on the back of a tigress in the 8th century and meditated in the caves below before establishing Vajrayana Buddhism throughout the kingdom.",
          "The Taktsang Cafeteria viewpoint at the halfway mark offers one of the most photographed perspectives in all of Bhutan, where the monastery's white walls and golden rooftops against the vertical cliff face create a defining image of the kingdom – an unforgettable stopping point that rewards even those who choose not to climb further.",
          "Continue the final ascent to the monastery complex and explore its interconnected sacred halls, altar rooms, and prayer chambers, each space filled with centuries of unbroken devotion, rare religious murals, and a profound spiritual stillness rooted deep within the mountain granite.",
          "Descend over 1.5–2 hours, completing the full round-trip hike in approximately 4–5 hours and returning to the valley with a deep sense of accomplishment and a memory that perfectly caps this eight-day Bhutan festival and cultural experience.",
          "Spend the afternoon at leisure – a final, gentle stroll through Paro town's local shops and cafés, perhaps picking up handcrafted Bhutanese souvenirs, incense, or traditional textiles as a last tangible connection to the kingdom before tomorrow's departure. Overnight Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Departure from Paro International Airport – End of Paro Festival Tour Bhutan",
        details: [
          "Wake to a final quiet morning in Paro, where the crisp valley air, soft light on the surrounding pine ridges, and the unhurried Bhutanese rhythm make the prospect of departing feel gently reluctant after eight deeply immersive days of festival, culture, and Himalayan landscape.",
          "Enjoy a last breakfast in Bhutan, taking a moment to reflect on the full arc of this extraordinary journey – the Paro Tsechu sacred mask dances, Tiger's Nest at dawn, Punakha Dzong at the river confluence, the 108 chortens above the clouds at Dochula Pass, Simtokha Dzong's ancient stone bas-reliefs, and the warmth of Bhutanese hospitality at every step.",
          "Complete final packing and check out, carrying not only carefully chosen Bhutanese souvenirs but a genuine and lasting connection to the living culture, spiritual landscape, and extraordinary people of this remarkable Himalayan kingdom.",
          "Transfer to Paro International Airport (PBH) for your onward flight – the same serene and scenic gateway through which this eight-day Paro Festival Tour first began, with Rinpung Dzong watching over the Pa Chhu river one final time in the soft morning light.",
          "As the flight lifts off and the festival courtyards, prayer-flag-lined ridges, ancient dzongs, and snow-capped Himalayan peaks of Bhutan slowly dissolve beneath the clouds, allow the colour, devotion, and timeless beauty of the Kingdom of the Thunder Dragon to settle into something permanent and deeply personal.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations Covered",
        value: "Paro · Thimphu · Dochula Pass · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-PFT-PBH-08" },
      {
        label: "Meals Included",
        value: "Breakfast daily throughout the tour",
      },
      {
        label: "Best Time to Visit",
        value: "March–April (Paro Tsechu Festival Season)",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Festival & Cultural Sightseeing" },
    ],
  },
  {
    id: 518,
    country: "Bhutan",
    place: "Paro",
    title:
      "Best of Bhutan Tour – 9 Days Paro, Thimphu, Phobjikha Valley & Punakha",
    type: "family",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Paro → Thimphu → Phobjikha → Punakha → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Dochula Pass",
      "Phobjikha Valley",
      "Punakha",
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2499,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.9,
    reviews: 96,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Tour",
    src: "/pobjikha-bird.jpg",
    popular: true,

    seoMeta: {
      slug: "best-of-bhutan-tour-9-days-paro-thimphu-phobjikha-punakha",
      metaTitle:
        "Best of Bhutan Tour | 9 Days | Paro · Thimphu · Phobjikha Valley · Punakha",
      metaDescription:
        "Discover Bhutan in 9 days — Tiger's Nest hike at 3,120m, black-necked cranes at Phobjikha Valley, Gangtey Monastery, Punakha Dzong at the river confluence, 108 chortens at Dochula Pass, and Rinpung Dzong. Small group cultural tour from Paro.",
      canonicalUrl:
        "https://indrukatours.com/tours/bhutan/cultural/best-of-bhutan-tour-9-days-paro-thimphu-phobjikha-punakha",
      keywords: [
        "Bhutan tour package",
        "Bhutan holiday package",
        "Bhutan travel package",
        "Bhutan cultural tour",
        "Bhutan itinerary 9 days",
        "Bhutan vacation package",
        "Best Bhutan tour",
        "Bhutan sightseeing tour",
        "Tiger's Nest tour Bhutan",
        "Paro tour package",
        "Phobjikha Valley tour",
        "Black necked crane Bhutan",
        "Gangtey monastery tour",
        "Punakha Dzong tour",
        "Dochula Pass Bhutan",
        "Bhutan luxury tour",
        "Bhutan family tour",
        "Bhutan guided tour",
        "Bhutan small group tour",
        "Bhutan honeymoon package",
        "Bhutan nature tour",
        "Bhutan adventure tour",
        "Bhutan trip from USA",
        "Bhutan trip from Australia",
        "Bhutan trip from India",
        "Bhutan trip from UK",
        "Bhutan visa package",
        "Bhutan travel agency",
        "Bhutan vacation from Singapore",
        "Bhutan travel from Thailand"
      ]
    },

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
          "Tiger's Nest Monastery Hike – Paro Taktsang at 3,120m Above the Paro Valley Floor",
      },
      {
        title:
          "Phobjikha Valley – UNESCO-Recognized Glacial Valley & Winter Home of the Black-Necked Crane",
      },
      {
        title:
          "Gangtey Monastery – 17th-Century Nyingma Monastery Overlooking the Phobjikha Valley Floor",
      },
      {
        title:
          "Punakha Dzong – Bhutan's Most Majestic Fortress at the Confluence of Pho Chhu & Mo Chhu Rivers",
      },
      {
        title:
          "Dochula Pass (3,088m) – 108 Druk Wangyal Chortens & Panoramic Eastern Himalayan Views",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten – Unique 4-Storey Hilltop Temple Above the Punakha Valley",
      },
    ],

    tourManagerCompany: "",

    heroImage: {
      src: "/pobjikha.jpg",
      alt: "Phobjikha Valley Bhutan – Black-Necked Cranes in the Glacial Phobjikha Valley with Gangtey Monastery on the Ridge Above",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/Phobjikha2.jpg",
        alt: "Phobjikha Valley Bhutan – Wide Glacial U-Shaped Valley with Traditional Bhutanese Farmhouses and Marshland Wetlands",
      },
      {
        id: 2,
        src: "/thimphu.jpg",
        alt: "Thimphu Bhutan – Tashichho Dzong Fortress Monastery on the Banks of the Wang Chhu River at Dusk",
      },
      {
        id: 3,
        src: "/paro.jpg",
        alt: "Paro Valley Bhutan – Rinpung Dzong and Pa Chhu River with Pine-Covered Himalayan Ridges in the Background",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      {
        label:
          "Best of Bhutan Tour – 9 Days Paro, Thimphu, Phobjikha Valley & Punakha",
      },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "9 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Airport Welcome, Tachog Lhakhang Iron Bridge & Transfer to Thimphu",
        details: [
          "Arrive at Paro International Airport (PBH) at 2,280m, where the flight into Bhutan delivers one of the most spectacular aerial approaches on earth – the Himalayan range unfolds dramatically through the aircraft window, sweeping past forested ridges and the silvery Pa Chhu river as the aircraft descends into the narrow Paro Valley.",
          "Complete immigration and customs formalities before a representative meets you with a warm traditional welcome, beginning the scenic one-hour drive eastward toward Thimphu through pine-covered valley roads where whitewashed farmhouses, prayer flags, and the unhurried pace of Bhutanese life line every kilometre of the route.",
          "Stop en route at the sacred Tachog Lhakhang (Tachogang Lhakhang), meaning 'Temple of the Hill of the Excellent Horse' – a revered 14th-century temple reached by crossing the Paro Chhu on a traditional iron chain bridge, a masterpiece attributed to the legendary Bhutanese saint, engineer, and bridge-builder Thangtong Gyalpo.",
          "Learn how this extraordinary figure is credited with constructing 108 iron chain bridges across Bhutan and Tibet, and how the original Tachog Lhakhang structure – washed away by floods in 1969 – was faithfully restored in 2005, preserving one of the most significant examples of medieval Himalayan sacred engineering and monastic architecture in the kingdom.",
          "Arrive in Thimphu by evening and check in to the hotel, beginning a gentle immersion into the capital city's unhurried rhythm before a full day of Thimphu sightseeing tomorrow. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing – Memorial Chorten, Buddha Dordenma & Changangkha Lhakhang Hike",
        details: [
          "Begin the day at the National Memorial Chorten, a beautifully ornamented stupa completed in 1974 in memory of Bhutan's beloved Third King, His Majesty Jigme Dorji Wangchuck, as a monument to world peace and prosperity – where devoted locals circle in continuous morning prayer in one of the most moving and intimate expressions of living Bhutanese Buddhism.",
          "Drive to Kuensel Phodrang to visit the iconic Buddha Dordenma statue, one of the largest Shakyamuni Buddha statues in the world at 51.5 metres, sited amid the ruins of the old Kuensel Phodrang palace and gazing serenely over the entire southern approach to the Thimphu Valley.",
          "From Buddha Dordenma, follow the scenic two-hour forest hike up to Changangkha Lhakhang (Changjangkha Temple), one of Thimphu's oldest and most revered hilltop temples, rewarding the gentle ascent with sweeping panoramic views across the full breadth of the Thimphu Valley and surrounding ridge system.",
          "Explore Changangkha Lhakhang's atmospheric interiors, where Bhutanese families bring newborn children to receive traditional names and blessings from the resident monks – a deeply personal and living spiritual tradition that has continued unbroken for centuries.",
          "Return to Thimphu in the afternoon for a relaxed exploration of the city at leisure – the Centenary Farmers Market, local artisan shops along Norzin Lam, or simply absorbing the gentle pace of daily life in Bhutan's capital. Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Phobjikha Valley via Dochula Pass (3,088m) – 108 Chortens & Gangtey Monastery",
        details: [
          "Depart Thimphu after an early breakfast and begin the scenic climb toward Dochula Pass at 3,088m, one of Bhutan's most iconic high-altitude viewpoints and a highlight of any cultural tour itinerary through the kingdom.",
          "Arrive at the pass to find the 108 Druk Wangyal Chortens standing in neat, atmospheric rows, and on clear days a sweeping panoramic view of the Eastern Himalayan range stretching endlessly toward the Tibet border – including Gangkar Puensum at 7,497m, the highest unclimbed peak on earth and Bhutan's highest summit.",
          "Continue the descent from Dochula into the warm subtropical Wangduephodrang Valley approximately 1,700m below the pass, pausing in Wangduephodrang town for lunch before climbing back eastward into cooler mountain terrain.",
          "Arrive in the beautiful Phobjikha Valley, a vast U-shaped glacial basin also known as Gangteng Valley, famed as the protected winter refuge of the endangered black-necked crane (Grus nigricollis), which migrates annually from the arid Tibetan Plateau to spend the colder months in this remote and tranquil highland sanctuary.",
          "Visit Gangtey Monastery (Gangtey Gonpa), a centuries-old Nyingma tradition monastery established in the 17th century and perched dramatically on a forested ridge above the valley floor, offering commanding views of the entire Phobjikha basin below.",
          "Settle into the hotel and spend the evening absorbing the extraordinary stillness and natural beauty of Phobjikha – one of Bhutan's most ecologically significant and visually pristine valley environments. Overnight Phobjikha Valley.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Phobjikha Valley Full Day – Gangtey Nature Trail, Black-Necked Crane Information Centre & Valley Exploration",
        details: [
          "Spend a full and deeply rewarding day exploring Phobjikha, a vast glacial valley of approximately 163 square kilometres that has been declared a protected wildlife zone managed by the Royal Society for the Protection of Nature (RSPN), sheltering 14 globally threatened species including the iconic black-necked crane.",
          "Begin with a morning walk along the Gangtey Nature Trail, looping through open marshland, ancient pine forest, and traditional village settlements at the heart of the valley floor – one of the finest easy walking experiences available anywhere in Bhutan.",
          "Visit the Black-Necked Crane Information Centre, where a comprehensive and beautifully presented exhibition explains the remarkable annual migration of Grus nigricollis from the Tibetan Plateau – including the extraordinary local tradition that the cranes are said to circle Gangtey Monastery three times upon arriving each October, and repeat the ritual before departing in spring.",
          "Explore the deeper reaches of the Phobjikha valley on foot or by vehicle, where traditional Bhutanese farmhouses, grazing yaks, and the vast open sky create a landscape of rare and unhurried beauty that feels entirely removed from the modern world.",
          "Return to Gangtey Monastery in the afternoon for a more leisurely second visit, exploring its decorated prayer halls, resident monk community, and the elevated ridge views that stretch across the entire protected valley below.",
          "Spend the evening in quiet reflection at the hotel, surrounded by the natural silence of Phobjikha – a stillness punctuated only by the distant calls of birds and the soft sound of wind moving through the pine forest. Overnight Phobjikha Valley.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Phobjikha Valley to Punakha via Chimi Lhakhang – Fertility Temple in Lobesa Valley",
        details: [
          "Depart Phobjikha after breakfast and begin the scenic drive westward toward Punakha, Bhutan's former royal capital and one of the most historically significant and naturally beautiful valley regions in the entire kingdom.",
          "Stop en route at Chimi Lhakhang, a charming hilltop fertility temple set on a knoll in the Lobesa Valley and dedicated to the revered 15th-century saint Lama Drukpa Kuenley – the 'Divine Madman' – who used humour, unconventional teachings, and unexpected methods to spread Vajrayana Buddhism across the region in a manner that remains deeply loved and celebrated in Bhutanese culture.",
          "Reach Chimi Lhakhang via a pleasant 30-minute walk across scenic rice paddies and farm fields, the gentle path through agricultural Bhutan offering a beautifully grounded contrast to the highland wilderness of the previous two days.",
          "The temple is widely revered as Bhutan's most significant fertility pilgrimage site, believed to bless childless couples who pray here with children – its atmosphere carrying a warmth and intimacy quite different from the more ceremonial dzong architecture encountered elsewhere on the tour.",
          "Continue the drive to Punakha, arriving in the warm, subtropical valley by early afternoon with time to settle in before a full day of Punakha exploration tomorrow. Overnight Punakha.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Punakha – Khamsum Yulley Namgyal Chorten Hike, Punakha Dzong & Suspension Bridge",
        details: [
          "Begin the morning with a scenic one-hour hike through golden rice paddies and quiet pine forest to reach Khamsum Yulley Namgyal Chorten, a magnificent four-storey temple standing on a strategic ridge above the Punakha Valley with sweeping panoramic views of the terraced river plains, farmland, and surrounding Himalayan ranges.",
          "Built over nine years by skilled Bhutanese artisans who consulted sacred Buddhist scriptures rather than conventional engineering references, this unique architectural masterpiece was commissioned by Her Majesty the Queen Mother and dedicated to the peace, stability, and well-being of Bhutan and all sentient beings.",
          "Explore the richly decorated interior with its traditional thangkas, painted murals, and religious iconography before descending to the valley, the full sweep of the Punakha landscape unfolding in every direction from the ridgeline.",
          "In the afternoon, visit the magnificent Punakha Dzong, built at the sacred junction of the Pho Chhu (Father River) and Mo Chhu (Mother River) – widely regarded as the most beautiful dzong in Bhutan, serving as the country's royal capital until 1955 and the historic site of the first coronation of the Wangchuck dynasty in 1907.",
          "Explore the richly decorated courtyards, painted corridors, and historic lhakhangs of Punakha Dzong, where the most sacred statue has survived centuries of fires, earthquakes, and floods and where the full weight of Bhutan's royal and monastic history is palpably present in every carved beam and painted wall.",
          "Conclude the day with a walk across the Punakha Suspension Bridge, one of the longest traditional suspension bridges in Bhutan, where prayer flags flutter above the rushing Pho Chhu below and sweeping valley views stretch in both directions. Overnight Punakha.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Punakha to Paro – Ta Dzong National Museum, Rinpung Dzong & Traditional Bhutanese Dress",
        details: [
          "Depart Punakha after breakfast and begin the scenic drive back toward the Paro Valley, the familiar mountain roads carrying a new depth of appreciation after six days of immersive Bhutanese cultural and natural experience.",
          "Arrive in Paro and begin with a visit to Ta Dzong (National Museum of Bhutan), originally constructed in 1646 as a cylindrical watchtower by Zhabdrung Ngawang Namgyal to protect Rinpung Dzong – now housing a remarkable and wide-ranging collection of Bhutanese art, armour, textiles, coins, thangkas, and natural history spanning over a thousand years of the kingdom's heritage.",
          "Descend from Ta Dzong along the traditional stone-inlaid trail to the magnificent Rinpung Dzong (Paro Dzong), built in 1646 and housing both the monastic body of Paro and the district's administrative offices – the approach made through the covered traditional Nemi Zam bridge with beautiful views of the dzong's whitewashed walls and layered rooftops from below.",
          "Take advantage of a special cultural opportunity to wear traditional Bhutanese dress – the kira for women and gho for men – for photographs against the stunning backdrop of Rinpung Dzong and its historic wooden bridge, an experience that provides a genuinely personal connection to Bhutanese living heritage.",
          "Spend the evening on a leisurely stroll through Paro town's traditional wooden-fronted shops, local cafés, and artisan stalls, browsing Bhutanese handicrafts, woven textiles, and locally made products in preparation for tomorrow's Tiger's Nest hike. Overnight Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Tiger's Nest Monastery Hike – Paro Taktsang (3,120m) | 4–5 Hours Round Trip",
        details: [
          "Begin Bhutan's most iconic and universally celebrated hike with an early morning start toward the Taktsang trailhead, where the path immediately enters a world of fragrant blue pine forest, colourful prayer flags, and the distant silhouette of Paro Taktsang clinging impossibly to the sheer granite cliff face 900 metres above the Paro Valley floor.",
          "Ascend steadily over 2–3 hours to reach Taktsang Palphug Monastery (Tiger's Nest) at 3,120m – Bhutan's most sacred and globally recognised landmark, where Guru Rinpoche (Padmasambhava) is believed to have arrived on the back of a tigress in the 8th century and meditated in the caves below before establishing Vajrayana Buddhism throughout the kingdom.",
          "The Taktsang Cafeteria viewpoint at the halfway mark offers one of the most photographed perspectives in all of Bhutan, where the monastery's white walls and golden rooftops against the vertical cliff face create the defining image of the kingdom – an unforgettable stopping point that rewards even those who choose not to climb further.",
          "Continue the final ascent to the monastery complex and explore its interconnected sacred halls, altar rooms, and prayer chambers, each space filled with centuries of unbroken devotion, rare religious murals, and a profound spiritual stillness rooted deep within the mountain granite itself.",
          "Descend over 1.5–2 hours, completing the full round-trip in approximately 4–5 hours and returning to the valley with a well-earned sense of accomplishment and a memory that perfectly caps this nine-day Best of Bhutan cultural and nature journey.",
          "Spend the afternoon at leisure in Paro for final shopping, exploration, or simply resting in the valley before tomorrow's departure. Overnight Paro.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Departure from Paro International Airport – End of Best of Bhutan Tour",
        details: [
          "Wake to a final quiet morning in Paro, where the crisp valley air, soft light on the surrounding pine ridges, and the unhurried Bhutanese rhythm make the prospect of departing feel gently reluctant after nine deeply immersive days of culture, nature, and Himalayan landscape.",
          "Enjoy a last breakfast in Bhutan, taking a reflective moment to absorb the full arc of the journey – Tiger's Nest at dawn, the black-necked cranes of Phobjikha Valley, Gangtey Monastery above the glacial basin, Punakha Dzong at the river confluence, the 108 chortens at Dochula Pass, and the warmth of Bhutanese hospitality at every step.",
          "Complete final packing and check out, carrying not only carefully chosen Bhutanese souvenirs but a genuine and lasting connection to the extraordinary spirit, landscape, wildlife, and people of this remarkable Himalayan kingdom.",
          "Transfer to Paro International Airport (PBH) for your onward flight – the same serene and scenic gateway through which this nine-day Best of Bhutan Tour first began, with Rinpung Dzong watching over the Pa Chhu river one final time in the soft morning light.",
          "As the flight lifts off and the ancient dzongs, glacial valleys, prayer-flag-lined passes, and snow-capped Himalayan peaks of Bhutan slowly dissolve beneath the clouds, allow the memories of ancient monasteries, misty mountain passes, and the warm hospitality of the Bhutanese people to settle into something permanent and deeply personal.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations Covered",
        value: "Paro · Thimphu · Dochula Pass · Phobjikha Valley · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-BOB-PBH-09" },
      {
        label: "Meals Included",
        value: "Breakfast daily throughout the tour",
      },
      {
        label: "Best Time to Visit Bhutan",
        value: "October–April (Black-Necked Crane Season: October–February)",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Nature Sightseeing" },
    ],
  },
  {
    id: 519,
    country: "Bhutan",
    place: "Paro",
    title: "Punakha Festival Tour – 8 Days Bhutan Cultural & Dzong Experience",
    type: "cultural",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Paro → Thimphu → Punakha → Paro",
    destinations: ["Paro", "Thimphu", "Dochula Pass", "Punakha"],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2399,
    priceRegional: 85000,
    rating: 4.8,
    reviews: 42,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/punakha-dzong.jpg",
    popular: true,

    seoMeta: {
      slug: "punakha-festival-tour-bhutan-8-days",
      metaTitle:
        "Punakha Festival Tour Bhutan | 8 Days | Paro · Thimphu · Dochula Pass · Punakha",
      metaDescription:
        "Join the Punakha Tshechu Festival in Bhutan on this 8-day cultural tour. Visit Punakha Dzong, Tiger's Nest, Dochula Pass & Khamsum Chorten. Small group departures from Paro.",
      canonicalUrl:
        "https://indrukatours.com/tours/bhutan/cultural/punakha-festival-tour-bhutan-8-days",
      keywords: [
        "Punakha Tshechu Festival",
        "Punakha Festival Tour Bhutan",
        "Bhutan Festival Tour",
        "Bhutan Cultural Tour",
        "Punakha Dzong Festival",
        "Bhutan Tshechu Tour",
        "Punakha Drubchen Festival",
        "Tiger's Nest Hike Bhutan",
        "Dochula Pass Bhutan",
        "Khamsum Yulley Namgyal Chorten",
        "Paro Thimphu Punakha Tour",
        "Bhutan Tour Package",
        "Bhutan Cultural Holiday",
        "Bhutan Small Group Tour",
        "Bhutan Festival Package",
        "Best Bhutan Festival Tour",
        "Bhutan Travel Package 2026",
        "Bhutan Heritage Tour",
        "Punakha Valley Tour",
        "Bhutan Monastery Tour"
      ],
    },

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
          "Punakha Drubchen – Sacred Warrior Dances & Historical Reenactments at Punakha Dzong",
      },
      {
        title:
          "Punakha Tshechu Festival – Traditional Mask Dances & Living Buddhist Ceremonies",
      },
      {
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery Perched at 3,120m Above the Paro Valley",
      },
      {
        title:
          "Punakha Dzong – Bhutan's Most Majestic Fortress at the Confluence of Pho Chhu & Mo Chhu",
      },
      {
        title:
          "Dochula Pass – Panoramic Eastern Himalayan Views & 108 Druk Wangyal Chortens at 3,050m",
      },
      {
        title:
          "Khamsum Yulley Namgyal Chorten – Hilltop Temple Overlooking the Rice Fields of Punakha Valley",
      },
    ],

    tourManagerCompany: "Indruka Tours and Travels",

    heroImage: {
      src: "/paro-festival.jpg",
      alt: "Punakha Tshechu Festival Bhutan – Sacred Mask Dances at Punakha Dzong Courtyard",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/paro-festival2.jpg",
        alt: "Punakha Dzong Bhutan – Majestic Fortress Monastery at Confluence of Pho Chhu and Mo Chhu Rivers",
      },
      {
        id: 2,
        src: "/punakha-festivals.jpg",
        alt: "Punakha Tshechu Festival – Monks in Ceremonial Mask Dance Costumes at Punakha Dzong",
      },
      {
        id: 3,
        src: "/paro-festval1.jpg",
        alt: "Tiger's Nest Monastery Paro Taktsang – Cliffside Buddhist Temple at 3120m Bhutan",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Punakha Festival Tour – 8 Days" },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Scenic Mountain Flight, Tachog Lhakhang & Transfer to Thimphu",
        details: [
          "Arrive at Paro International Airport (PBH) on one of the world's most breathtaking mountain approaches, with sweeping aerial views of the snow-capped Eastern Himalayas before the aircraft descends into the narrow, emerald Paro Valley.",
          "Clear immigration and customs at an airport framed by the silhouettes of Paro Dzong and Ta Dzong along the Pa Chu River – your first encounter with Bhutan's extraordinary built heritage.",
          "Receive a warm traditional welcome from your Indruka Tours guide before beginning the scenic drive eastward to Thimphu, Bhutan's uniquely unhurried capital city.",
          "En route, stop at the sacred Tachog Lhakhang near Chhuzom – a revered 14th-century temple attributed to the legendary Bhutanese saint and master bridge-builder Thangtong Gyalpo, reached via a dramatic traditional iron chain bridge over the Paro Chhu river.",
          "Hear stories of how this remarkable temple has withstood devastating floods across the centuries and was meticulously restored, standing today as a powerful symbol of Bhutanese faith, resilience, and sacred heritage.",
          "Continue to Thimphu and explore the National Memorial Chorten, where devoted locals gather daily to spin prayer wheels and circumambulate – followed by a colorful visit to the Centenary Farmers Market.",
          "Check in to your hotel in Thimphu as evening settles over the valley, marking the beginning of an unforgettable Bhutan journey. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing – Buddha Dordenma, Takin Preserve, Folk Heritage Museum & Tashichho Dzong",
        details: [
          "Begin the morning at Kuensel Phodrang Nature Park to visit the towering Buddha Dordenma statue – one of the largest bronze Buddha statues in the world at 51.5 meters – with sweeping panoramic views across the entire Thimphu Valley and surrounding ridgelines.",
          "Discover that the interior of the Buddha Dordenma houses 125,000 smaller gilded Buddha statues, making this one of Bhutan's most spiritually layered and visually dramatic landmarks.",
          "Visit the Motithang Takin Preserve, home to the takin – Bhutan's extraordinary national animal – a unique bovid found only in the Eastern Himalayan region and deeply embedded in Bhutanese mythology.",
          "Explore the Folk Heritage Museum, a beautifully preserved traditional Bhutanese farmhouse offering an intimate window into rural domestic life across generations.",
          "Visit the National Institute for Zorig Chusum, where Bhutan's Thirteen Arts and Crafts are preserved and actively taught – a living tradition of thangka painting, weaving, woodcarving, and more.",
          "Conclude the evening with a visit to the magnificent Tashichho Dzong along the Wang Chhu River – the seat of Bhutan's central government and monastic body – its whitewashed walls and golden roofs glowing richly in the last light of day.",
          "Take a relaxed evening stroll through Thimphu town before dinner. Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Punakha via Dochula Pass – 108 Chortens, Himalayan Panoramas & Chimi Lhakhang",
        details: [
          "Depart Thimphu and ascend steadily toward Dochula Pass at 3,050 meters – one of Bhutan's most iconic high-altitude viewpoints and a highlight of every Bhutan cultural tour itinerary.",
          "On clear days, the pass rewards with breathtaking 180-degree panoramas of the Eastern Himalayan range, including Gangkar Puensum – the world's highest unclimbed peak – and a sweeping arc of snow-capped peaks stretching along the Bhutan-Tibet border.",
          "Explore the 108 Druk Wangyal Chortens, each a memorial to the brave soldiers who fell in the 2003 military campaign against Assamese militants, set against the Himalayan skyline in one of Bhutan's most photographed compositions.",
          "For those seeking a more active experience, an optional hike to Lungchutse Temple offers a rewarding forest trail through rhododendron woodland and prayer-flag-lined ridges with spectacular Himalayan views.",
          "Descend dramatically into the warmer, subtropical Punakha Valley – Bhutan's former royal capital – where the road drops through dense forest into fertile river lowlands rich with rice paddies and banana groves.",
          "Walk through golden paddy fields to visit Chimi Lhakhang, the charming hilltop Fertility Temple dedicated to the beloved 'Divine Madman' Drukpa Kuenley – a deeply spiritual pilgrimage site for couples seeking blessings.",
          "Make a brief stop at the historic Wangdue Phodrang Dzong before arriving in Punakha. Overnight Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Punakha Tshechu Festival – Sacred Mask Dances, Buddhist Ceremonies & Punakha Dzong",
        details: [
          "Experience one of Bhutan's most celebrated and spiritually charged cultural events – the Punakha Tshechu Festival – held within the magnificent courtyards of Punakha Dzong at the confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River).",
          "Watch as elaborately costumed monks and lay performers take to the courtyard in sacred Cham mask dances – an ancient ritual art form believed to dispel negative energies, protect communities, and transmit Buddhist teachings through movement and symbolism.",
          "The Punakha Tshechu precedes the Punakha Drubchen, Bhutan's only festival featuring full historical reenactments of 17th-century battles, when Zhabdrung Ngawang Namgyal unified Bhutan and repelled Tibetan invaders – a living commemoration unique to this dzong.",
          "Observe Bhutanese families arriving in their finest traditional Kira and Gho attire, carrying offerings and gathering to receive blessings from resident lamas – a profoundly moving glimpse into Bhutan's living spiritual culture.",
          "Between festival events, explore Punakha Dzong itself, widely regarded as the most beautiful dzong in Bhutan – its whitewashed walls, gilded spires, and riverine setting forming an incomparable architectural masterpiece.",
          "Learn about the dzong's role in Bhutanese history, including the first coronation of Bhutan's monarchs and the royal wedding of the beloved Fourth Druk Gyalpo. Overnight Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Punakha Valley Exploration – Khamsum Yulley Namgyal Chorten Hike & Punakha Suspension Bridge",
        details: [
          "Begin the morning with a rewarding hike to Khamsum Yulley Namgyal Chorten, a four-storey hilltop temple rising above the Punakha Valley and offering spectacular views of the Mo Chhu River, emerald rice terraces, and the surrounding Himalayan foothills.",
          "Built in the Nyingma Buddhist tradition and consecrated to protect Bhutan from harmful spirits and negative energies, the chorten is an architectural jewel with every internal wall covered in richly painted deities and mandalas.",
          "The 45-minute uphill walk through rice paddies and farm trails is itself a meditative experience – unhurried, scenic, and deeply rewarding for anyone seeking to understand rural Bhutanese life.",
          "After descending, visit the Punakha Suspension Bridge – one of the longest traditional suspension bridges in Bhutan at approximately 160 meters – strung over the Pho Chhu River and adorned with prayer flags, offering a light adventure and superb riverside photography.",
          "Spend the afternoon at leisure in Punakha – perhaps visiting a local farmstead, relaxing riverside, or browsing traditional Bhutanese textiles in the market near the dzong.",
          "Overnight Punakha.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Punakha to Paro via Simtokha Dzong – Ta Dzong, Rinpung Dzong & Paro Town",
        details: [
          "Depart Punakha and drive westward, stopping at Simtokha Dzong on the outskirts of Thimphu – one of the oldest dzongs in Bhutan, built in 1629 by Zhabdrung Ngawang Namgyal to guard the valley approach to his capital.",
          "Explore Simtokha Dzong's beautifully preserved frescoes and carved slate panels depicting the life of Guru Rinpoche – among the finest examples of early 17th-century Bhutanese religious art still in their original setting.",
          "Continue the drive through the Paro Valley, one of Bhutan's most fertile and historically significant regions, arriving to the sight of Rinpung Dzong and Ta Dzong framed against a backdrop of pine-covered ridges.",
          "Visit Ta Dzong, the National Museum of Bhutan, housed in a striking circular watchtower above Paro town, where collections of thangkas, weapons, natural history specimens, and royal artifacts tell the story of Bhutan across the centuries.",
          "Descend to the majestic Rinpung Dzong ('Heap of Jewels') standing above the Paro Chhu River – an active monastery and administrative center whose whitewashed walls and wooden bridges make it one of the kingdom's most photographed landmarks.",
          "Spend the evening exploring Paro's charming main street – lined with traditional painted wooden shopfronts, local cafés, and handicraft stalls – before a relaxed dinner. Overnight Paro.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery at 3,120m & Afternoon at Leisure in Paro",
        details: [
          "Begin Bhutan's most iconic trek with an early start toward Paro Taktsang – the Tiger's Nest Monastery (Taktsang Palphug) – clinging dramatically to a sheer granite cliff face at 3,120 meters above the Paro Valley floor.",
          "The ascent winds through fragrant blue pine forest and corridors of colorful prayer flags, with each switchback revealing increasingly dramatic views of the monastery's gilded spires against the vertical rock face – arguably the single most iconic image in Himalayan travel.",
          "Rest at the Taktsang Cafeteria viewpoint at the halfway point – one of the finest photography positions in all of Bhutan – before completing the final ascent to the monastery complex itself.",
          "Enter the sacred site where Guru Rinpoche (Padmasambhava) is said to have arrived astride a flying tigress in the 8th century, meditating in the mountain caves before establishing Vajrayana Buddhism throughout the Himalayan kingdoms.",
          "Explore the interconnected temples and meditation halls of the Taktsang complex, each one reverberating with the deep resonance of centuries of devotion – a place of both physical achievement and profound spiritual atmosphere.",
          "The full round-trip hike takes 4–5 hours and is widely regarded as the single most memorable activity on any Bhutan travel itinerary; a horse can be arranged to the halfway point for those preferring a gentler ascent.",
          "Return to Paro for a relaxed afternoon of shopping and exploration – picking up handwoven textiles, hand-painted thangkas, or locally made Bhutanese crafts as keepsakes of this extraordinary journey. Overnight Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Departure from Paro International Airport – End of Bhutan Tour",
        details: [
          "Enjoy a final breakfast in Paro, taking a quiet moment to reflect on eight extraordinary days – the festival drums of Punakha, the mist-wrapped silhouette of Tiger's Nest, the prayer-flag panoramas of Dochula Pass, and the warmth of Bhutanese hospitality that has defined every day.",
          "Complete last-minute packing and check out of your hotel, carrying memories of sacred festivals, fortress monasteries, Himalayan vistas, and a kingdom that measures its prosperity not in GDP but in Gross National Happiness.",
          "Transfer to Paro International Airport (PBH) for your onward flight, departing Bhutan with a deep sense of wonder and gratitude for one of the world's most extraordinary cultural experiences.",
        ],
      },
    ],

    tourDetails: [
      { label: "Tour Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations Covered",
        value: "Paro · Thimphu · Dochula Pass · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-PFT-PBH-08" },
      {
        label: "Meals Included",
        value: "Breakfast, lunch & dinner daily",
      },
      {
        label: "Best Time to Visit",
        value: "February–March (Punakha Festival Season)",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Festival" },
    ],
  },
  {
    id: 5920,
    country: "Bhutan",
    place: "Paro",
    title: "Thimphu Tshechu Festival Tour – 8 Days Bhutan Cultural Journey",
    type: "festivals",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Paro → Thimphu → Phobjikha → Punakha → Paro",
    destinations: [
      "Paro",
      "Thimphu",
      "Dochula Pass",
      "Phobjikha Valley",
      "Punakha",
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2399,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.8,
    reviews: 36,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/thimphu-festival.jpg",
    popular: true,

    seoMeta: {
      slug: "thimphu-tshechu-festival-tour-bhutan-8-days",
      metaTitle:
        "Thimphu Tshechu Festival Tour Bhutan | 8 Days | Paro · Thimphu · Phobjikha · Punakha",
      metaDescription:
        "Experience the Thimphu Tshechu Festival with sacred mask dances at Tashichho Dzong on this 8-day Bhutan cultural tour. Includes Tiger's Nest hike, Phobjikha Valley, Punakha Dzong & Dochula Pass. Small group departures from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/thimphu-tshechu-festival-tour-bhutan-8-days",
      keywords: [
        "Thimphu Tshechu festival tour",
        "Thimphu festival Bhutan",
        "Bhutan festival tour package",
        "Phobjikha Valley black-necked crane",
        "Tiger's Nest hike Paro",
        "Punakha Dzong tour",
        "Bhutan cultural tour 8 days",
        "Tashichho Dzong festival",
        "Australia to Bhutan",
        "New South Wales to Bhutan",
        "Queensland to Bhutan",
        "Victoria to Bhutan",
        "Western Australia to Bhutan",
        "Sydney to Bhutan",
        "Melbourne to Bhutan",
        "Brisbane to Bhutan",
        "how to go to Bhutan from Australia",
        "Bhutan travel from Australia",
        "Bhutan trip from Sydney",
        "can I travel to Bhutan from Australia",
        "Bhutan visa from Australia",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Australia",
        "Bhutan 11 day tour from Australia",
        "Tiger's Nest trek from Australia",
        "best Bhutan tour from Sydney",
        "Bhutan holiday package Australia",
        "Bhutan travel package 11 days",
        "India to Bhutan",
        "West Bengal to Bhutan",
        "Delhi to Bhutan",
        "Maharashtra to Bhutan",
        "South India to Bhutan",
        "Kolkata to Bhutan",
        "Delhi to Bhutan",
        "Mumbai to Bhutan",
        "how to go to Bhutan from India",
        "Bhutan travel from India",
        "Bhutan trip from Kolkata",
        "can I travel to Bhutan from India",
        "Bhutan visa from India",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package India",
        "Bhutan 11 day tour from India",
        "Tiger's Nest trek from India",
        "best Bhutan tour from Kolkata",
        "Bhutan holiday package India",
        "Bhutan travel package 11 days",
        "England to Bhutan",
        "UK to Bhutan",
        "United Kingdom to Bhutan",
        "Britain to Bhutan",
        "Scotland to Bhutan",
        "Wales to Bhutan",
        "London to Bhutan",
        "Manchester to Bhutan",
        "Edinburgh to Bhutan",
        "how to go to Bhutan from England",
        "Bhutan travel from England",
        "Bhutan trip from London",
        "can I travel to Bhutan from England",
        "Bhutan visa from England",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package ,England",
        "Bhutan 11 day tour from England",
        "Tiger's Nest trek from England",
        "best Bhutan tour from London",
        "Bhutan holiday package England",
        "Bhutan travel package 11 days",
        "USA to Bhutan",
        "United States to Bhutan",
        "America to Bhutan",
        "California to Bhutan",
        "New York to Bhutan",
        "New York to Bhutan",
        "Los Angeles to Bhutan",
        "San Francisco to Bhutan",
        "how to go to Bhutan from USA",
        "Bhutan travel from USA",
        "Bhutan trip from New York",
        "can I travel to Bhutan from USA",
        "Bhutan visa from USA",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package USA",
        "Bhutan 11 day tour from USA",
        "Tiger's Nest trek from USA",
        "best Bhutan tour from New York",
        "Bhutan holiday package USA",
        "Bhutan travel package 11 days",
        "Thailand to Bhutan",
        "Bangkok to Bhutan",
        "Chiang Mai to Bhutan",
        "Phuket to Bhutan",
        "how to go to Bhutan from Thailand",
        "Bhutan travel from Thailand",
        "Bhutan trip from Bangkok",
        "can I travel to Bhutan from Thailand",
        "Bhutan visa from Thailand",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Thailand",
        "Bhutan 11 day tour from Thailand",
        "Tiger's Nest trek from Thailand",
        "best Bhutan tour from Bangkok",
        "Bhutan holiday package Thailand",
        "Bhutan travel package 11 days",
        "Singapore to Bhutan",
        "Singapore to Bhutan",
        "how to go to Bhutan from Singapore",
        "Bhutan travel from Singapore",
        "Bhutan trip from Singapore",
        "can I travel to Bhutan from Singapore",
        "Bhutan visa from Singapore",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Singapore",
        "Bhutan 11 day tour from Singapore",
        "Tiger's Nest trek from Singapore",
        "best Bhutan tour from Singapore",
        "Bhutan holiday package Singapore",
        "Bhutan travel package 11 days",
        "Germany to Bhutan",
        "Deutschland to Bhutan",
        "Bavaria to Bhutan",
        "Berlin to Bhutan",
        "Munich to Bhutan",
        "Frankfurt to Bhutan",
        "how to go to Bhutan from Germany",
        "Bhutan travel from Germany",
        "Bhutan trip from Berlin",
        "can I travel to Bhutan from Germany",
        "Bhutan visa from Germany",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Germany",
        "Bhutan 11 day tour from Germany",
        "Tiger's Nest trek from Germany",
        "best Bhutan tour from Berlin",
        "Bhutan holiday package Germany",
        "Bhutan travel package 11 days",
        "France to Bhutan",
        "Paris to Bhutan",
        "Lyon to Bhutan",
        "Marseille to Bhutan",
        "how to go to Bhutan from France",
        "Bhutan travel from France",
        "Bhutan trip from Paris",
        "can I travel to Bhutan from France",
        "Bhutan visa from France",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package France",
        "Bhutan 11 day tour from France",
        "Tiger's Nest trek from France",
        "best Bhutan tour from Paris",
        "Bhutan holiday package France",
        "Bhutan travel package 11 days",
        "Japan to Bhutan",
        "Tokyo to Bhutan",
        "Osaka to Bhutan",
        "Kyoto to Bhutan",
        "how to go to Bhutan from Japan",
        "South Korea to Bhutan",
        "Korea to Bhutan",
        "Seoul to Bhutan",
        "Busan to Bhutan",
        "how to go to Bhutan from South Korea",
        "Bhutan travel from South Korea",
        "Bhutan trip from Seoul",
        "can I travel to Bhutan from South Korea",
        "Canada to Bhutan",
        "Toronto to Bhutan",
        "Vancouver to Bhutan",
        "Calgary to Bhutan",
        "how to go to Bhutan from Canada",
        "Bhutan travel from Canada",
        "Bhutan trip from Toronto",
        "can I travel to Bhutan from Canada",
        "Bhutan visa from Canada",
        "UAE to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "how to go to Bhutan from UAE",
        "Bhutan travel from UAE",
        "Bhutan trip from Dubai",
        "can I travel to Bhutan from UAE",
        "Bhutan visa from UAE",
        "Malaysia to Bhutan",
        "Kuala Lumpur to Bhutan",
        "Penang to Bhutan",
        "how to go to Bhutan from Malaysia",
        "Bhutan travel from Malaysia",
        "Bhutan trip from Kuala Lumpur",
        "can I travel to Bhutan from Malaysia",
        "Bhutan visa from Malaysia",
        "China to Bhutan",
        "Beijing to Bhutan",
        "Shanghai to Bhutan",
        "Guangzhou to Bhutan",
        "how to go to Bhutan from China",
        "Bhutan travel from China",
        "Bhutan trip from Beijing",
        "can I travel to Bhutan from China",
        "New Zealand to Bhutan",
        "Auckland to Bhutan",
        "Wellington to Bhutan",
        "Christchurch to Bhutan",
        "how to go to Bhutan from New Zealand",
        "Bhutan travel from New Zealand",
        "Bhutan trip from Auckland",
        "can I travel to Bhutan from New Zealand",

        "Italy to Bhutan",
        "Rome to Bhutan",
        "Milan to Bhutan",
        "how to go to Bhutan from Italy",
        "Bhutan travel from Italy",
        "Bhutan trip from Rome",
        "can I travel to Bhutan from Italy",
      ],
    },

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
          "Thimphu Tshechu Festival – Sacred Cham Mask Dances & Religious Ceremonies at Tashichho Dzong",
      },
      {
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery Dramatically Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Phobjikha Valley – UNESCO-Recognized Glacial Valley & Winter Sanctuary of the Black-Necked Crane",
      },
      {
        title:
          "Gangtey Monastery – 17th-Century Nyingmapa Monastery Overlooking the Phobjikha Wetlands",
      },
      {
        title:
          "Punakha Dzong – Bhutan's Most Beautiful Fortress at the Confluence of Pho Chhu & Mo Chhu Rivers",
      },
      {
        title:
          "Dochula Pass – Sweeping Eastern Himalayan Panoramas at 3,050m with 108 Druk Wangyal Chortens",
      },
    ],

    tourManagerCompany: "Indruka Tours and Travels",

    heroImage: {
      src: "/thimphu-festival1.jpg",
      alt: "Thimphu Tshechu Festival Bhutan – Sacred Mask Dance Performers at Tashichho Dzong Courtyard",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/thimphu.jpg",
        alt: "Tashichho Dzong Thimphu Bhutan – Whitewashed Fortress Monastery Along Wang Chhu River",
      },
      {
        id: 2,
        src: "/paro-festival1.jpg",
        alt: "Thimphu Tshechu Festival – Monks in Traditional Cham Mask Dance Costumes at Tashichho Dzong",
      },
      {
        id: 3,
        src: "/paro-festival3.jpg",
        alt: "Phobjikha Valley Gangtey Bhutan – Glacial Valley with Black-Necked Crane Wetland Reserve",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Thimphu Tshechu Festival Tour – 8 Days" },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Himalayan Mountain Flight, Tachog Lhakhang & Transfer to Thimphu",
        details: [
          "Arrive at Paro International Airport (PBH) on one of the world's most breathtaking mountain approaches, with sweeping aerial views of the Eastern Himalayas – including some of the highest unclimbed peaks on earth – before the aircraft descends into the lush, narrow Paro Valley.",
          "As the runway comes into view, the iconic silhouettes of Paro Dzong and Ta Dzong emerge along the Pa Chu River below, offering a dramatic first glimpse of Bhutan's extraordinary architectural heritage.",
          "Clear immigration and customs before being warmly welcomed by your Indruka Tours guide, and begin the scenic one-hour drive eastward to Thimphu, Bhutan's capital and one of the world's few capital cities without a single traffic light.",
          "En route, stop at the sacred Tachog Lhakhang along the Paro–Thimphu highway – a revered 14th-century temple accessible via a traditional iron chain bridge over the Paro Chhu River, attributed to the legendary Tibetan saint and bridge-builder Thangtong Gyalpo, who constructed dozens of such iron bridges across the Himalayan kingdoms.",
          "Arrive in Thimphu and visit the National Memorial Chorten, built in memory of Bhutan's beloved Third King, where devoted locals gather daily to spin prayer wheels and circumambulate in a profoundly moving expression of living Buddhist practice.",
          "Stop at the colossal Buddha Dordenma statue at Kuensel Phodrang – 51.5 meters of gilded bronze overlooking the entire Thimphu Valley – before a colorful late-afternoon visit to the Centenary Farmers Market, the best place in Bhutan to encounter the full sensory richness of local produce, dried meats, chillies, and traditional textiles.",
          "Check in to your hotel in Thimphu as the valley lights begin to glow. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Tshechu Festival – Sacred Mask Dances & Buddhist Ceremonies at Tashichho Dzong",
        details: [
          "This is the day the entire journey has been building toward: the Thimphu Tshechu – one of the most important and visually spectacular religious festivals in the Himalayan Buddhist world, held annually in the courtyard of Tashichho Dzong.",
          "The Tshechu (meaning 'tenth day') is celebrated on the tenth day of the eighth month of the Bhutanese lunar calendar and draws thousands of Bhutanese from across the kingdom, all dressed in their finest traditional Kira and Gho, gathering to receive blessings and witness sacred performances.",
          "Watch as elaborately costumed monks and lay performers present the Cham – sacred mask dances rooted in 8th-century Vajrayana Buddhist traditions – each dance a living scripture, dramatizing the triumph of good over evil, the life of Guru Rinpoche, and the protection of the Dharma.",
          "The Thimphu Tshechu is one of the few festivals in Bhutan where the Thongdrel – an enormous sacred appliqué thangka – is unfurled before dawn at the final day, believed to confer liberation upon all who behold it.",
          "Between dances, explore the magnificent Tashichho Dzong itself: the seat of Bhutan's royal government and central monastic body, with whitewashed walls, golden roofs, and courtyards that hold the weight of the kingdom's unbroken spiritual tradition.",
          "The atmosphere of color, devotion, music, and community at the Thimphu Tshechu offers a depth of cultural immersion that remains one of the most memorable experiences in all of Bhutanese travel. Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Phobjikha Valley via Dochula Pass – 108 Chortens, Himalayan Views & Gangtey Monastery",
        details: [
          "Depart Thimphu and ascend steadily to Dochula Pass at 3,050 meters, one of Bhutan's most celebrated high-altitude viewpoints and an unmissable landmark on any Bhutan cultural tour itinerary.",
          "On clear days, the pass delivers breathtaking 180-degree panoramas of the Eastern Himalayan range – a sweeping arc of snow-capped peaks including Gangkar Puensum, the world's highest unclimbed mountain, stretching magnificently along the Bhutan–Tibet border.",
          "Explore the 108 Druk Wangyal Chortens – memorial stupas commissioned by the Royal Queen Mother to honor soldiers who gave their lives in the 2003 military campaign – set against one of the finest Himalayan skylines in the country.",
          "Continue the descent through subtropical valleys and subtropical forest, where the road drops through increasingly dramatic highland terrain before opening into the wide, peaceful expanse of Phobjikha Valley.",
          "Arrive in Phobjikha (Gangtey) Valley – a UNESCO-recognized glacial valley and one of Bhutan's most ecologically sensitive conservation zones, protected as the winter habitat of the endangered Black-Necked Crane (Grus nigricollis) migrating annually from the Tibetan Plateau.",
          "Visit Gangtey Monastery (Gangtey Gonpa) – a magnificent 17th-century Nyingmapa monastery perched on a forested ridge above the valley floor, founded by Pema Trinley and home to one of the most important Nyingma lineages in Bhutan.",
          "Stop at the Black-Necked Crane Information Centre to learn about the remarkable ecology of the valley and the deep cultural reverence Bhutanese people hold for these rare migratory birds. Overnight Phobjikha Valley.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Phobjikha Valley Morning Walk & Gangtey Nature Trail – Drive to Punakha via Chimi Lhakhang",
        details: [
          "Begin the morning with the Gangtey Nature Trail – one of the most rewarding short hikes in central Bhutan – looping through open marshland, ancient pine forest, and traditional farming villages at the heart of the Black-Necked Crane Reserve.",
          "The trail offers sweeping views across the full breadth of the glacial valley, with mist often still clinging to the ridgelines at dawn, creating an atmosphere of extraordinary natural calm and remoteness.",
          "Depart Phobjikha and drive toward Wangdue Phodrang for a visit to Wangdue Phodrang Dzong, an ancient fortress perched dramatically on a narrow ridge at the confluence of the Puna Tsang Chhu and Dang Chhu rivers – one of Bhutan's most strategically positioned dzongs, commanding the valley below.",
          "Continue into the warmer, subtropical Punakha Valley, stopping at Chimi Lhakhang – the beloved Fertility Temple dedicated to the eccentric 15th-century saint Drukpa Kuenley, the 'Divine Madman', reached by a 30-minute walk through golden paddy fields and mustard flower meadows.",
          "Learn how Drukpa Kuenley's unconventional methods – humor, song, and radical behavior – became a uniquely Bhutanese expression of enlightened compassion, and why couples from across the region still make pilgrimages here to seek his blessings.",
          "Arrive in Punakha Valley by late afternoon, once Bhutan's royal capital and still one of its most historically significant and agriculturally lush regions. Overnight Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Punakha Sightseeing – Khamsum Yulley Namgyal Chorten Hike & Punakha Dzong",
        details: [
          "Begin the morning with a rewarding hike to Khamsum Yulley Namgyal Chorten, a beautifully crafted four-storey hilltop temple commissioned by Her Majesty the Royal Queen Mother and built over eight years to ensure the peace, prosperity, and spiritual protection of Bhutan.",
          "The 45-minute trail through paddy fields and farmland leads to a ridge offering sweeping views of the Mo Chhu River, Punakha Valley's patchwork of rice terraces, and the surrounding forested hills – among the most photographed vantage points in the region.",
          "The temple's interior walls are richly adorned with painted deities, mandalas, and Buddhist imagery executed in the finest Bhutanese traditional style, offering a quiet and contemplative counterpoint to the grandeur of Punakha Dzong below.",
          "After descending, visit Punakha Dzong – widely regarded as the most beautiful dzong in Bhutan – standing at the confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River), its whitewashed walls and gilded spires rising from the water like a vision from another century.",
          "Explore the dzong's richly decorated courtyards, assembly halls, and temples, layered with centuries of Bhutanese royal and religious history – including the site of the first coronation of Bhutan's monarchs and the historic royal wedding of the Fourth Druk Gyalpo.",
          "Spend the evening by the riverside in Punakha, one of Bhutan's warmest and most fertile valleys, before a peaceful overnight. Overnight Punakha.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Punakha to Paro via Simtokha Dzong – Ta Dzong, Rinpung Dzong & Paro Town",
        details: [
          "Depart Punakha and drive westward toward Paro, stopping en route at Simtokha Dzong on the outskirts of Thimphu – one of the oldest surviving dzongs in Bhutan, built in 1629 by Zhabdrung Ngawang Namgyal to guard the valley approaches to his newly unified capital.",
          "Explore Simtokha Dzong's exquisitely preserved frescoes and carved slate relief panels depicting the life of Guru Rinpoche – among the finest examples of early 17th-century Bhutanese sacred art still displayed in their original architectural setting.",
          "Continue to Paro Valley, arriving to the iconic sight of Rinpung Dzong and Ta Dzong framed against a backdrop of pine-covered ridges and the meandering Paro Chhu River below.",
          "Visit Ta Dzong – the National Museum of Bhutan – housed in a striking circular watchtower originally built to defend Paro Dzong, its galleries now holding superb collections of ancient thangkas, royal artefacts, natural history specimens, and Bhutanese weapons tracing the kingdom's history across the centuries.",
          "Descend to the majestic Rinpung Dzong ('Fortress on a Heap of Jewels'), built in 1646 and still an active monastery and district administrative center, its whitewashed walls, wooden cantilever bridges, and mountain backdrop making it one of the most photographed landmarks in Bhutan.",
          "Spend the evening exploring Paro's charming main street, lined with traditional painted wooden shopfronts, local handicraft stalls, cozy cafés, and galleries selling handwoven textiles and ceremonial arts. Overnight Paro.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery at 3,120m & Afternoon at Leisure in Paro",
        details: [
          "Begin Bhutan's most iconic trek with an early morning start toward Paro Taktsang – the Tiger's Nest Monastery (Taktsang Palphug) – clinging to a sheer granite cliff at 3,120 meters above the Paro Valley floor in one of the most dramatic settings of any religious site on earth.",
          "The ascent winds through fragrant blue pine forest and winding corridors of colorful prayer flags, with each switchback opening increasingly dramatic views of the monastery's gilded rooftops against the vertical rock face – the single most iconic image in Himalayan travel.",
          "Rest at the Taktsang Cafeteria viewpoint at the halfway point – one of the finest photography positions in all of Bhutan – before continuing the final ascent to the monastery complex itself, crossing a dramatic suspension bridge above a waterfall-fed gorge.",
          "Enter the sacred complex where Guru Rinpoche (Padmasambhava) is said to have flown from Tibet on the back of a tigress in the 8th century and meditated in the mountain caves before establishing Vajrayana Buddhism throughout the Himalayan kingdoms.",
          "Explore the interconnected temples, meditation halls, and sacred caves of the Taktsang complex, each resonating with centuries of unbroken devotional practice and offering a profound sense of both physical achievement and spiritual arrival.",
          "The full round-trip hike takes approximately 4–5 hours; a horse can be arranged to the halfway cafeteria for those preferring a gentler ascent, making the Tiger's Nest accessible at any fitness level.",
          "Return to Paro for a relaxed afternoon of shopping and exploration – browsing handwoven Bhutanese textiles, hand-painted thangkas, wooden prayer bowls, and locally crafted ceremonial items as lasting keepsakes of an extraordinary journey. Overnight Paro.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Departure from Paro International Airport – End of Bhutan Tour",
        details: [
          "Enjoy a final breakfast in Paro, taking a quiet moment to reflect on eight extraordinary days – the sacred dances of the Thimphu Tshechu, the crane-watched stillness of Phobjikha Valley, the riverside grandeur of Punakha Dzong, and the soaring climb to Tiger's Nest that brought the journey to its unforgettable peak.",
          "Complete last-minute packing and check out of your hotel, carrying the warmth of Bhutanese hospitality and the quiet wonder of a kingdom that has chosen meaning over speed, and happiness over growth.",
          "Transfer to Paro International Airport (PBH) for your onward flight, departing Bhutan with a deep and lasting sense of gratitude for one of the world's most extraordinary cultural travel experiences.",
        ],
      },
    ],

    inclusions: [
      "All meals daily (breakfast, lunch & dinner)",
      "Daily mineral water",
      "Bhutan Sustainable Development Fee (SDF)",
      "English-speaking licensed Bhutanese guide",
      "Accommodation on twin-sharing basis",
      "Comfortable private vehicles with experienced drivers",
      "Minimum 3-star accommodation (4-star & 5-star upgrades available at premium)",
      "All monument and site entrance fees as per itinerary",
    ],

    exclusions: [
      "International and domestic airfare",
      "Personal shopping and souvenirs",
      "Gratuities for guide and driver",
      "Travel insurance",
      "Laundry services",
      "Alcoholic beverages",
    ],

    tourDetails: [
      { label: "Tour Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations Covered",
        value: "Paro · Thimphu · Dochula Pass · Phobjikha Valley · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-TFT-PBH-08" },
      {
        label: "Meals Included",
        value: "Breakfast, lunch & dinner daily",
      },
      {
        label: "Best Time to Visit",
        value: "September–October (Thimphu Tshechu Festival Season)",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Festival" },
    ],
  },
  {
    id: 521,
    country: "Bhutan",
    place: "Paro",
    title:
      "Druk Path Trek – 10 Days Paro to Thimphu High-Altitude Trekking in Bhutan",
    type: "trekking",
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
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.9,
    reviews: 28,
    badge: "Trekking",
    badgeColor: "bg-green-600",
    mode: "Trek",
    src: "/huge-complex.jpg",
    popular: true,

    seoMeta: {
      slug: "druk-path-trek-bhutan-10-days-paro-thimphu",
      metaTitle:
        "Druk Path Trek Bhutan | 10 Days | Paro to Thimphu High-Altitude Trek with Alpine Lakes",
      metaDescription:
        "Trek the legendary Druk Path from Paro to Thimphu in 10 days. Hike past pristine alpine lakes, yak herder camps, rhododendron forests, and Phajoding Monastery at 3,870m. Includes Tiger's Nest hike and Thimphu sightseeing. Small group departures from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/druk-path-trek-bhutan-10-days-paro-thimphu",
      keywords: [
        "Thimphu Tshechu Festival Tour",
        "Bhutan Festival Tour",
        "Bhutan Cultural Tour",
        "Thimphu Festival Package",
        "Thimphu Tshechu Bhutan",
        "Bhutan Tour Package",
        "Bhutan 10 Day Tour",
        "Tiger's Nest Hike",
        "Paro Taktsang Tour",
        "Phobjikha Valley Tour",
        "Gangtey Monastery",
        "Black Necked Crane Bhutan",
        "Punakha Dzong Tour",
        "Dochula Pass Bhutan",
        "Bhutan Sightseeing Tour",
        "Bhutan Holiday Package",
        "Bhutan Travel Package",
        "Small Group Bhutan Tour",
        "Best Bhutan Festival Tour",
        "Bhutan Cultural Journey"
      ],
    },

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
          "Pristine Alpine Lakes – Jimi Langtso (3,880m) & Simkota Tsho (4,110m) Along the Druk Path Trail",
      },
      {
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery Dramatically Perched at 3,120m Above the Paro Valley",
      },
      {
        title:
          "Himalayan Peak Panoramas – Unobstructed Views of Chomolhari, Jichu Drakey, Tsrim Gang & Gangkar Puensum",
      },
      {
        title:
          "Yak Herder Camps – Authentic Encounters with Traditional High-Altitude Nomadic Communities",
      },
      {
        title:
          "Rhododendron & Juniper Forests – Vibrant Alpine Flora Lining the Full Length of the Druk Path",
      },
      {
        title:
          "Phajoding Monastery – Ancient Meditation Retreat Complex at 3,870m Overlooking Thimphu Valley",
      },
    ],

    tourManagerCompany: "Indruka Tours and Travels",

    heroImage: {
      src: "/druk-path2.jpg",
      alt: "Druk Path Trek Bhutan – High-Altitude Alpine Lake Along the Paro to Thimphu Trekking Route",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/druk-path3.jpg",
        alt: "Druk Path Trek Bhutan – Trekker on High-Altitude Ridge with Himalayan Peaks and Prayer Flags",
      },
      {
        id: 2,
        src: "/paro1.webp",
        alt: "Paro Valley Bhutan – Rinpung Dzong and Paro Chhu River Viewed from the Trek Starting Point",
      },
      {
        id: 3,
        src: "/paro2.webp",
        alt: "Tiger's Nest Monastery Paro Taktsang – Cliffside Buddhist Temple at 3,120m Above Paro Valley",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Druk Path Trek – 10 Days Paro to Thimphu" },
    ],

    badges: [
      { label: "TREKKING", variant: "solid" as const, color: "green" },
      { label: "10 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Himalayan Mountain Flight, Ta Dzong National Museum & Rinpung Dzong",
        details: [
          "Arrive at Paro International Airport (PBH) on one of the most extraordinary mountain flights in the world – offering aerial views of Mt. Everest, Kangchenjunga, Makalu, and the distinctive Bhutanese peaks of Jumolhari, Jichu Drakey, and Tsrim Gang as the aircraft descends into the narrow, forested Paro Valley.",
          "As the runway comes into view, the iconic silhouettes of Paro Dzong and Ta Dzong emerge along the Pa Chu River – a first, unforgettable glimpse of Bhutan's timeless architectural heritage and the valley that will serve as the starting point of your Druk Path Trek.",
          "Clear immigration and customs before being warmly welcomed by your Indruka Tours guide and escorted to your hotel in Paro for check-in and rest after the journey.",
          "In the afternoon, visit Ta Dzong – the National Museum of Bhutan – originally built as a circular watchtower in the 17th century to defend Paro Dzong against Tibetan invasions, and now home to one of the finest collections of Bhutanese art, artefacts, and natural history specimens in the kingdom, spanning back to the 6th century.",
          "Descend to the majestic Rinpung Dzong (Paro Dzong) – 'Fortress on a Heap of Jewels' – still operating as both the religious and administrative headquarters of Paro District, its whitewashed walls, wooden cantilever bridges, and dramatic mountain backdrop making it one of the most photographed landmarks in Bhutan.",
          "Spend the evening exploring Paro's charming painted-shopfront main street, picking up any final trekking supplies before an early start tomorrow. Overnight Paro.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery at 3,120m & Paro Town Exploration",
        details: [
          "Begin Bhutan's most iconic hike with an early morning start toward Paro Taktsang – the Tiger's Nest Monastery (Taktsang Palphug) – clinging to a sheer granite cliff face at 3,120 meters above the Paro Valley floor, one of the most dramatic sacred sites anywhere in the Himalayan world.",
          "The ascent winds through fragrant blue pine forest and winding corridors of colorful prayer flags, with each switchback opening increasingly breathtaking views of the monastery's gilded rooftops set against the sheer rock face – the single most iconic image in Bhutanese travel and a powerful warm-up for the high-altitude days ahead.",
          "Rest at the Taktsang Cafeteria viewpoint at the halfway mark – one of the finest photography positions in all of Bhutan – before completing the final ascent to the monastery complex itself, crossing a suspension bridge above a dramatic waterfall-fed gorge.",
          "Explore the interconnected temples and meditation caves of the Taktsang complex, where Guru Rinpoche (Padmasambhava) is said to have arrived astride a flying tigress in the 8th century and meditated before establishing Vajrayana Buddhism throughout the Himalayan kingdoms – a site of profound historical and spiritual significance.",
          "The full round-trip hike takes approximately 4–5 hours and serves as excellent acclimatization for the Druk Path Trek beginning tomorrow; a horse can be arranged to the halfway cafeteria for those preferring a gentler ascent.",
          "Return to Paro in the afternoon for a leisurely town stroll – browsing local handicraft shops, traditional wooden-fronted stores, and Bhutanese cafés – before an early dinner and rest ahead of Day 3. Overnight Paro.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Druk Path Trek Begins – Ta Dzong to Jele Dzong Camp | 10 km · 3–4 Hours · 3,450m",
        details: [
          "The Druk Path Trek – one of Bhutan's most celebrated and historically significant trekking routes, connecting Paro to Thimphu through a chain of pristine alpine lakes, high-altitude passes, and ancient monastic sites – begins today with an early start to beat the midday heat on exposed uphill sections.",
          "The trail departs from above Ta Dzong (National Museum), ascending gradually at first through mixed temperate forest of oak, rhododendron, and blue pine, passing occasional traditional farmhouses where the rhythm of Bhutanese rural life remains entirely unchanged from centuries past.",
          "By mid-morning the route enters a dense coniferous belt – one of the best sections of the trail for wildlife and birdwatching, with possibilities of encountering blood pheasants, red pandas, barking deer, and the rustling movements of unseen forest creatures in the undergrowth.",
          "The trail climbs steadily through open alpine meadow toward Jelela Pass at approximately 2,600 meters, where views of the Paro Valley begin to open dramatically behind the trekking party.",
          "The campsite at Jele Dzong sits in a wide, grassy meadow just below the pass at 3,450 meters – a site traditionally used by yak herders during seasonal upward migration and still carrying the faint traces of centuries of high-altitude pastoral life.",
          "Your trekking crew will have camp fully set up on arrival: tents, dining tent, and a hot meal waiting as the temperature drops and the first stars appear above the Himalayan ridgeline. Overnight Jele Dzong Camp (3,450m).",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Druk Path Trek – Jele Dzong to Tshokham Camp | 10 km · 4–5 Hours · 3,780m",
        details: [
          "Break camp at Jele Dzong and begin today's stage with a 200-meter climb to the ancient Jeli Dzong structure – a historic royal rest house used during the reign of Bhutan's Second King and now operating as a small monastic institute, its stone walls and butter lamp niches a quiet testament to the route's centuries-long significance.",
          "Beyond Jeli Dzong the trail becomes mostly undulating, contouring along high ridges through a landscape of high-temperate forest, open alpine grassland, and scattered boulders draped in grey-green lichen – an environment of extraordinary stillness and natural beauty.",
          "The route offers excellent ridge-walk views of the Paro Valley stretching far to the left below, with the town of Paro, Rinpung Dzong, and the Pa Chu River visible on clear mornings – a reminder of how quickly the trek has carried the group into true high-altitude terrain.",
          "Tshokham Camp sits at 3,780 meters – a gain of approximately 330 meters from yesterday's camp – in a broad, sheltered meadow surrounded by ancient rhododendron trees whose twisted limbs indicate the altitude and age of this exposed alpine environment.",
          "Evenings at Tshokham are among the finest on the Druk Path, with clear nights offering an unobstructed Himalayan sky of extraordinary depth and darkness. Overnight Tshokham Camp (3,780m).",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Druk Path Trek – Tshokham to Jimi Langtso Lake | 11 km · 5–6 Hours · 3,880m",
        details: [
          "Today is one of the most rewarding stages of the entire Druk Path Trek, culminating at Jimi Langtso – the highest campsite on the route at 3,880 meters and one of the most pristine alpine lakes in Bhutan, its still surface reflecting the surrounding ridgelines and Himalayan sky.",
          "The stage begins with a significant 500-meter ascent through increasingly sparse coniferous forest, with rhododendron bushes lining the trail in vivid bursts of pink, crimson, and white when in bloom during spring – one of the most spectacular natural displays on any Bhutan trekking itinerary.",
          "As the forest thins above the treeline, the trail passes through open barren hillsides dotted with wild onions, alpine herbs, and scattered boulders, where the air grows noticeably thinner and the silence of the high mountains deepens.",
          "After the first high pass, the route becomes mostly undulating – those riding ponies should exercise extra care and dismount on steeper descents where loose shale can make footing uncertain.",
          "Before crossing the final pass of the day, the trail follows an extraordinary open ridge where, on clear days, the full arc of the Eastern Himalayan range comes into view: Mt. Kangchenjunga, Chomolhari, Jichu Drakey, and Tsrim Gang rising in a magnificent frozen panorama along the Bhutan–Tibet border.",
          "After the final pass, Jimi Langtso Lake appears below to the left, and the trail descends steeply to the lakeside camp where the water is glacially cold and perfectly clear. Overnight Jimi Langtso Camp (3,880m).",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Druk Path Trek – Jimi Langtso to Simkota Tsho Lake | 11 km · 4–5 Hours · 4,110m",
        details: [
          "Depart Jimi Langtso in the early morning light, when the lake surface is at its most mirror-like and the surrounding peaks glow with the first warmth of the Himalayan dawn – one of the most photogenic moments of the entire Druk Path experience.",
          "The trail traverses through dwarf rhododendron scrub and open high-altitude moorland, bypassing the smaller lake of Janetso nestled in a hollow to the right, before climbing steadily along a wide, undulating ridge toward the upper reaches of the route.",
          "This stage offers the highest probability of encountering yak herder camps – semi-permanent shelters of stone and yak-hair felt erected by nomadic Bhutanese pastoralists who bring their herds to these high pastures during the summer months.",
          "Spend time at a herder camp if the opportunity arises: sharing butter tea, learning about the traditional transhumance lifestyle that has sustained these communities for centuries, and gaining an understanding of Bhutan's high-altitude pastoral culture that very few visitors ever witness.",
          "After crossing one final rocky spur, Simkota Tsho Lake comes into view at 4,110 meters – the highest camp on the Druk Path – its waters a deep, cold blue surrounded by open yak pasture and the raw, elemental landscape of Bhutan's highest trekking country.",
          "Arrive at the yak pasture campsite beside Simkota Tsho as the afternoon light shifts across the Himalayan ridges – a location of extraordinary remoteness and natural grandeur. Overnight Simkota Camp (4,110m).",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Druk Path Trek – Simkota to Phajoding Monastery & Descent to Thimphu | 14 km · 7–8 Hours · 3,870m",
        details: [
          "Today is the final trekking day of the Druk Path and the longest stage, beginning with a gradual climb from Simkota to a small saddle at 4,150 meters where, on clear mornings, the hulking mass of Gangkar Puensum – the world's highest unclimbed peak at 7,570 meters – and a sweep of adjacent Himalayan summits fill the entire northern horizon.",
          "Descend briefly to a small unnamed lake before the final climb to Phume La Pass at 4,220 meters – the highest point on the Druk Path Trek – where a dense forest of colorful prayer flags frames one of the most extraordinary panoramic views in Bhutan: the entire Thimphu Valley laid out far below, the capital city a distant cluster of white buildings in the valley floor.",
          "The descent from Phume La drops through ancient juniper woodland – the trees gnarled and wind-shaped by centuries of altitude exposure – passing through the atmospheric grounds of Phajoding Monastery at 3,870 meters, one of Bhutan's most important high-altitude meditation retreat complexes, established in the 13th century and still actively used by monks and hermits in solitary retreat.",
          "Trekkers are advised to carry a walking stick through the monastery area where dogs may be present; take time to visit the small temples and meditation huts of the Phajoding complex before continuing the final descent.",
          "The trail drops steeply through mixed temperate forest below the monastery, a knee-testing 2-hour descent through pine and fir to the trek endpoint on the outskirts of Thimphu, where vehicles await to transfer the group to their hotel.",
          "Bid a heartfelt Tashi Delek farewell to the trekking crew – the cooks, horse handlers, and camp staff who have made five days of wilderness comfort possible in one of the world's most demanding high-altitude environments. Overnight Thimphu.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Thimphu Sightseeing – Buddha Dordenma, Changangkha Temple, Tashichho Dzong & Arts & Crafts",
        details: [
          "Begin the first rest day after the trek with a well-earned leisurely breakfast before embarking on a full day of Thimphu sightseeing – Bhutan's uniquely unhurried capital city and one of the few national capitals in the world without a single traffic light.",
          "Visit the National Memorial Chorten, built in 1974 in memory of the beloved Third King Jigme Dorji Wangchuk – where devoted locals gather throughout the day to circumambulate and spin prayer wheels in an expression of living Buddhist faith that has continued unbroken for five decades.",
          "Drive to Kuensel Phodrang to visit the colossal Buddha Dordenma statue – 51.5 meters of gilded bronze housing 125,000 smaller Buddha statues within – offering sweeping panoramic views across the entire Thimphu Valley and the forested ridgelines that enclose it.",
          "Visit the 15th-century Changangkha Lhakhang, a fortress-like temple on a ridge above the city and one of Thimphu's oldest and most beloved places of worship, followed by the Motithang Takin Preserve – home to the takin, Bhutan's extraordinary national animal, a unique bovid found only in the Eastern Himalayan region.",
          "Explore Bhutan's living artistic traditions at the National Institute for Zorig Chusum (School of Arts and Crafts), where students master the Thirteen Traditional Arts including thangka painting, weaving, woodcarving, and lacquerwork – followed by visits to the National Library, Traditional Handmade Paper Factory, and the Goldsmith & Silversmith unit.",
          "On the descent through the city, stop at Zilukha Nunnery and Dechenphodrang Monastic School before concluding the day with an evening visit to the magnificent Tashichho Dzong – seat of Bhutan's royal government – its golden rooftops glowing warmly in the fading light. Overnight Thimphu.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Thimphu to Paro – Scenic Drive via Chhuzom Confluence & Three-Style Chortens",
        details: [
          "Enjoy a relaxed free morning in Thimphu – time to browse the weekend market if open, visit any remaining sights, purchase Bhutanese handicrafts as souvenirs, or simply sit at a café and absorb the unhurried rhythm of Bhutan's capital for the last time.",
          "After lunch, begin the scenic drive westward from Thimphu toward Paro, following the Wang Chhu River as the road descends through forested gorges and riverside villages toward the valley floor.",
          "Reach Chhuzom – the confluence of the Wangchuk and Pa Chu rivers – one of the most geographically and culturally significant road junctions in Bhutan, serving simultaneously as a vehicle checkpoint and immigration point for the western valleys.",
          "At the river confluence, observe three distinct styles of chorten standing in close proximity: a Tibetan-style chorten, a classical Bhutanese chorten, and a Nepalese stupa – each architectural tradition represented at this single riverbank crossroads, a quiet reflection of the intersecting cultural currents that have shaped Bhutanese civilization.",
          "Cross the bridge at Chhuzom and turn right toward Paro, following the Pa Chu upstream as the valley widens into the familiar landscape of the Paro Valley – the fertile paddy fields, whitewashed farmhouses, and ridge-top monasteries that welcomed you on Day 1.",
          "Check in to your Paro hotel for a final night in the valley, with time for a last evening stroll through Paro town before dinner. Overnight Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Departure from Paro International Airport – End of Druk Path Trek",
        details: [
          "Enjoy a final breakfast in Paro, taking a quiet moment to reflect on ten extraordinary days – the soaring approach into the Himalayan valley, the ascent to Tiger's Nest, five days of wild high-altitude trekking through pristine alpine lakes and yak pastures, the sacred solitude of Phajoding Monastery, and the warmth of Bhutanese hospitality that has accompanied every step.",
          "Complete final packing and check out of your hotel, carrying the deep physical and spiritual satisfaction of having walked one of the Himalayan world's finest point-to-point treks from Paro to Thimphu – a journey that connects two of Bhutan's most historically significant valleys through some of its most pristine and rarely visited high-altitude wilderness.",
          "Transfer to Paro International Airport (PBH) for your onward flight, where your guide bids a final Tashi Delek farewell – departing Bhutan with aching legs, a full heart, and memories of an extraordinary kingdom that has chosen happiness over speed, and meaning over growth.",
        ],
      },
    ],

    inclusions: [
      "All meals daily (breakfast, lunch & dinner) – hotel nights and full trekking camp catering",
      "Daily mineral water throughout the tour and trek",
      "Bhutan Sustainable Development Fee (SDF)",
      "English-speaking licensed Bhutanese trekking guide",
      "Experienced trekking crew (cook, kitchen assistant, camp staff)",
      "Full camping equipment (sleeping tents, dining tent, kitchen tent, toilet tent)",
      "Pack animals / ponies for luggage transport on all trekking days",
      "Accommodation on twin-sharing basis (hotel nights in Paro and Thimphu)",
      "Comfortable private vehicles with experienced drivers (non-trekking days)",
      "Minimum 3-star hotel accommodation (4-star & 5-star upgrades available at premium)",
      "All monument and site entrance fees as per itinerary",
    ],

    exclusions: [
      "International and domestic airfare",
      "Personal trekking gear, clothing, and footwear",
      "Personal shopping and souvenirs",
      "Gratuities for guide, driver, and trekking crew",
      "Travel insurance (trekking cover strongly recommended)",
      "Laundry services",
      "Alcoholic beverages",
      "Optional horse riding fees on Tiger's Nest trail",
    ],

    tourDetails: [
      { label: "Tour Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Jele Dzong · Tshokham · Jimi Langtso · Simkota · Phajoding · Thimphu",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-DPT-PBH-10" },
      {
        label: "Meals Included",
        value:
          "All meals daily – full board throughout hotel nights and trekking camps",
      },
      {
        label: "Best Time to Visit",
        value:
          "March–May (Spring Rhododendrons) & September–November (Autumn Clarity)",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Trekking & Cultural" },
      {
        label: "Trek Distance",
        value: "Approximately 56 km over 5 trekking days",
      },
      { label: "Maximum Altitude", value: "4,220m – Phume La Pass (Day 7)" },
      { label: "Trekking Grade", value: "Moderate to Strenuous" },
    ],
  },

  {
    id: 522,
    country: "Bhutan",
    place: "Paro",
    title:
      "Bhutan Cultural Journey – 10 Days Paro · Thimphu · Phobjikha · Bumthang · Punakha",
    type: "cultural",
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
    ],
    amenities: ["Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 2799,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.8,
    reviews: 44,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/DGkalipong2.jpg",
    popular: true,

    seoMeta: {
      slug: "bhutan-cultural-journey-10-days-paro-thimphu-bumthang-punakha",
      metaTitle:
        "Bhutan Cultural Journey | 10 Days | Paro · Thimphu · Phobjikha · Bumthang · Punakha",
      metaDescription:
        "Explore Bhutan's spiritual and cultural heartland on this 10-day journey. Visit Tiger's Nest, Trongsa Dzong, Bumthang temples, Phobjikha Valley, Punakha Dzong & Dochula Pass. Small group cultural tour from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/bhutan-cultural-journey-10-days-paro-thimphu-bumthang-punakha",
      keywords: [
        "Bhutan cultural tour package",
        "Bhutan cultural tour 10 days",
        "Bhutan tour package",
        "Bhutan travel package",
        "Bhutan holiday package",
        "Paro Thimphu Bumthang tour",
        "Tiger's Nest Bhutan",
        "Punakha Dzong tour",
        "Phobjikha Valley tour",
        "Bumthang cultural tour",
        "Bhutan monastery tour",
        "Bhutan heritage tour",
        "Bhutan sightseeing package",
        "Bhutan guided tour",
        "Bhutan vacation package",
        "Bhutan tour from Australia",
        "Bhutan tour from USA",
        "Bhutan tour from UK",
        "Bhutan tour from India",
        "Best Bhutan tour package"
      ],
    },

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
          "Himalayan Scenic Flight – Panoramic Aerial Views of the World's Highest Glacial Peaks on Arrival into Paro",
      },
      {
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery Dramatically Perched at 3,120m Above Paro Valley",
      },
      {
        title:
          "Thimphu Cultural Sights – Memorial Chorten, Buddha Dordenma, Traditional Archery & Farmers Market",
      },
      {
        title:
          "Dochula Pass Panorama – 360° Views of the Eastern Himalayan Range Including Gangkar Puensum at 3,050m",
      },
      {
        title:
          "Phobjikha Valley – UNESCO-Recognized Glacial Valley & Winter Home of the Rare Black-Necked Crane",
      },
      {
        title:
          "Central Bhutan Heartland – Trongsa Dzong, Bumthang Tang Valley, Ogyen Choling Palace & Kurje Lhakhang",
      },
    ],

    tourManagerCompany: "Indruka Tours and Travels",

    heroImage: {
      src: "/DGkalipong2.jpg",
      alt: "Bhutan Cultural Journey – Bumthang Valley Temples and Traditional Whitewashed Farmhouses Against Himalayan Backdrop",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/DGkalipong2.jpg",
        alt: "Bhutan Cultural Tour – Traditional Bhutanese Architecture and Painted Farmhouses in Bumthang Valley",
      },
      {
        id: 2,
        src: "/bhutanCulture4.jpg",
        alt: "Trongsa Dzong Bhutan – Historic Fortress Monastery Perched Above the Mangde Chhu River Gorge",
      },
      {
        id: 3,
        src: "/paro-festival2.jpg",
        alt: "Punakha Dzong Bhutan – Majestic Fortress at the Confluence of Pho Chhu and Mo Chhu Rivers",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Bhutan Cultural Journey – 10 Days" },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "10 DAYS", variant: "outlined" as const, color: "cyan" },
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
        title:
          "Arrive in Paro, Bhutan – Himalayan Scenic Flight, Tachog Lhakhang Iron Chain Bridge & Transfer to Thimphu",
        details: [
          "Experience one of the world's most breathtaking mountain approaches as the aircraft descends into Bhutan, offering sweeping panoramic views of the Eastern Himalayas – some of the highest and most remote glacial peaks on earth – before touching down at Paro International Airport (PBH).",
          "Clear immigration and customs before being warmly received by your Indruka Tours guide and driver, and begin the scenic one-hour transfer westward toward Thimphu, Bhutan's uniquely unhurried capital.",
          "En route, shortly after Isuna village and before reaching Chhuzom confluence, stop at the historic Tachog Lhakhang – a sacred 14th-century temple set gracefully at the base of a mountain along the Paro–Thimphu highway, accessible via a traditional iron chain bridge over the Paro River.",
          "The temple was founded by the revered Tibetan saint and master engineer Thangtong Gyalpo following his vision of Balaha – the spiritual horse and an emanation of Avalokiteshvara – the same legendary figure credited with constructing 108 iron chain bridges across the Himalayan kingdoms, revolutionizing travel and trade across the high passes of Bhutan, Tibet, and Nepal.",
          "The present bridge was reconstructed in traditional style in 2005 after the original was lost to floods, and the temple remains privately maintained to this day by descendants of Thangtong Gyalpo – a living thread of hereditary custodianship spanning six centuries.",
          "Arrive in Thimphu by early evening and check in to your hotel, beginning your immersion into the remarkable cultural world of the Kingdom of Happiness. Overnight Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Sightseeing – Memorial Chorten, Buddha Dordenma, Traditional Archery & Vegetable Market",
        details: [
          "Begin the morning at the National Memorial Chorten – an iconic stupa built in 1974 in honor of Bhutan's beloved Third King Jigme Dorji Wangchuk – where devoted locals gather daily to circumambulate and spin prayer wheels in a deeply moving expression of living Buddhist faith unchanged across generations.",
          "Drive to Kuensel Phodrang to visit the colossal Buddha Dordenma statue – a 51.5-meter gilded bronze Shakyamuni Buddha overlooking the entire Thimphu Valley from its hilltop throne, housing 125,000 smaller Buddha statues within its interior and offering sweeping panoramic views of the capital and surrounding ridgelines.",
          "For those seeking a more active morning, an optional forest hike from Buddha Point to Changangkha Lhakhang winds through quiet pine trails and open ridgelines, taking approximately two hours and offering intimate, uncrowded views of Thimphu rarely seen by visitors.",
          "In the afternoon, visit the bustling Centenary Vegetable Market – one of the most colorful, authentic snapshots of everyday Bhutanese life available in Thimphu – where farmers from surrounding valleys sell seasonal produce, dried chilies, yak cheese, local spirits, and traditional handicrafts.",
          "Conclude the afternoon at the traditional archery ground, where Bhutan's national sport is played with a uniquely Bhutanese blend of extraordinary skill, boisterous team rivalry, and deeply rooted community spirit – one of the most entertaining and culturally revealing sights in the capital.",
          "Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Phobjikha Valley via Dochula Pass – 108 Chortens, Himalayan Panoramas & Gangtey Monastery",
        details: [
          "Depart Thimphu and ascend to Dochula Pass at 3,050 meters – one of Bhutan's most celebrated high-altitude viewpoints – where, on clear days, a breathtaking panoramic arc of the Eastern Himalayan range unfolds: Masagang, Tsendagang, Terigang, Jejegangphugang, Kangphugang, Zongphugang, and the supreme Gangkar Puensum (7,570m) – the world's highest unclimbed peak – stretching in an unbroken chain along the Bhutan–Tibet border.",
          "Explore the 108 Druk Wangyal Chortens set against the Himalayan skyline before continuing the descent through subtropical forest and winding mountain roads into the broad Wangduephodrang Valley, arriving in time for a riverside lunch.",
          "Continue climbing into the cooler highlands, arriving in the tranquil Phobjikha Valley – also known as Gangtey Valley – a wide, open U-shaped glacial valley of extraordinary ecological and cultural importance, spanning approximately 163 square kilometres and managed as a protected conservation area by the Royal Society for the Protection of Nature (RSPN).",
          "Phobjikha is the designated winter sanctuary of the endangered Black-Necked Crane (Grus nigricollis), which migrates annually from the Tibetan Plateau and is deeply revered in Bhutanese culture – the cranes are believed to perform a traditional circling ritual over the monastery upon arrival and departure each season.",
          "Visit Gangtey Monastery (Gangtey Gonpa) – a magnificent 17th-century Nyingmapa monastery perched on a forested ridge above the valley floor, one of the most important centers of the Nyingma Buddhist lineage in Bhutan.",
          "Stop at the Black-Necked Crane Information Centre to learn about the valley's extraordinary ecology and the conservation efforts that have made Phobjikha one of Bhutan's most celebrated natural heritage sites. Overnight Phobjikha Valley.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Phobjikha to Bumthang Tang Valley via Chendebji Chorten & Trongsa Dzong – Bhutan's Historic Seat of Power",
        details: [
          "Depart Phobjikha and begin the long scenic drive eastward into Bhutan's dramatic central highlands, stopping first at Chendebji Chorten – a striking whitewashed stupa modeled on the eyes-painted style of Kathmandu's Swayambhunath, built in the 18th century by Lama Shida from Tibet to subdue an evil spirit believed to have been defeated at this valley junction.",
          "Arrive after lunch at Trongsa Dzong – built in 1648 and for centuries the absolute seat of power over central and eastern Bhutan, the historic base from which Bhutan's first two Kings governed the kingdom before unifying it under a single monarchy.",
          "Explore its extraordinary multi-level architecture cascading dramatically along the ridge above the Mangde Chhu gorge – a fortress of layered courtyards, secret corridors, and sacred temples that still carries the full weight of Bhutan's political and spiritual legacy, and from which all four of Bhutan's Kings held the title of Trongsa Penlop before ascending the throne.",
          "Continue eastward into the warmer, wider valleys of Bumthang – Bhutan's spiritual heartland – arriving at Tang Valley by late afternoon.",
          "Visit Ogyen Choling Palace – originally built in the 16th century by Deb Tsokye Dorje, with the present structure comprising a temple, servants' quarters, and main residential building reconstructed following the devastating 1897 earthquake, now operating as a heritage guesthouse whose revenue directly supports the property's ongoing preservation.",
          "If available, a rare opportunity may arise to dine with Dr. Walter Roder, former Country Director of Helvetas Swiss Cooperation, for a deeply insightful conversation on Bhutan's rural development and cultural heritage. Overnight Tang Valley.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Bumthang Tang Valley – Ogyen Choling Museum, Kurje Lhakhang & Jakar Dzong",
        details: [
          "Begin the morning with a visit to the Ogyen Choling Museum, housed within the palace complex itself – where centuries-old thangkas, royal artefacts, ceremonial costumes, and domestic implements bring the noble history of Bumthang's aristocratic families vividly and intimately to life.",
          "Return to Bumthang Valley and visit the sacred Kurje Lhakhang – one of the most revered pilgrimage sites in all of Bhutan, marking the place where Guru Rinpoche (Padmasambhava) is believed to have subdued a local demon and left the imprint of his body on a rock in the 8th century, the earliest physical trace of the master's presence in Bhutan.",
          "Explore the three interconnected temples of the Kurje Lhakhang complex, the oldest of which dates to the 8th century and contains the sacred rock imprint within a shrine – layers of devotional history accumulating across thirteen centuries of unbroken pilgrimage.",
          "Visit Jakar Dzong – the 'Castle of the White Bird' – a striking 17th-century fortress gracefully perched on a ridge above Bumthang Valley with panoramic views of the surrounding farmland, its whitewashed walls, intricate carved woodwork, and tiered golden roofs representing one of Bhutan's finest examples of dzong architecture in a highland setting.",
          "Spend the evening absorbing the deep, quiet atmosphere of Bumthang – a valley where the concentration of ancient temples, sacred springs, and meditation sites per square kilometer is higher than almost anywhere else in the Himalayan Buddhist world. Overnight Jakar, Bumthang.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Bumthang to Punakha via Wangdue Phodrang Dzong & Chimi Lhakhang – Temple of Fertility",
        details: [
          "Depart Bumthang and begin the long scenic drive westward back through Bhutan's central mountain spine – passing Trongsa Dzong once more on the ridge above the gorge – and descending gradually toward the warmer subtropical valleys of the west.",
          "Stop at Wangdue Phodrang Dzong, perched on a narrow strategic ridge at the confluence of the Puna Tsang Chhu and Dang Chhu rivers – one of Bhutan's most dramatically positioned fortresses, its commanding height above the valley reflecting its centuries-long role as a defensive and administrative stronghold for the western districts.",
          "Continue to Chimi Lhakhang in the Lobesa Valley – the beloved Fertility Temple dedicated to Lama Drukpa Kuenley, the 15th-century 'Divine Madman' whose unconventional methods of enlightened teaching through humor, song, and radical behavior became a uniquely Bhutanese expression of Buddhist compassion.",
          "Reach the temple via a 30-minute walk through golden paddy fields and flowering farmland – one of the most pleasant and scenic short walks in Bhutan – with an option to drive closer and enjoy a traditional Bhutanese farmhouse lunch in the valley.",
          "Arrive in the magnificent Punakha Valley by late afternoon – once Bhutan's royal capital and still one of its most historically significant regions – checking in to your hotel as the evening light plays across the river. Overnight Punakha.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Punakha Sightseeing – Khamsum Yulley Namgyal Chorten Hike & Punakha Dzong",
        details: [
          "Begin the morning with a scenic hike to Khamsum Yulley Namgyal Chorten – a four-storey hilltop temple commissioned by Her Majesty the Royal Queen Mother and built over nine years by skilled traditional artisans following precise Buddhist scriptures, dedicated to the peace, prosperity, and spiritual protection of Bhutan and all sentient beings.",
          "The 45-minute trail ascends through terraced rice paddies and farmland to a ridge offering some of the finest views in the Punakha Valley – the Mo Chhu River below, emerald fields stretching in every direction, and the distant silhouettes of Himalayan ridgelines framing the horizon.",
          "The temple's interior walls are lavishly adorned with painted deities, guardian figures, and intricate mandalas executed in the finest Bhutanese traditional style, offering a contemplative and visually extraordinary counterpoint to the grandeur of the dzong below.",
          "In the afternoon, visit Punakha Dzong – widely regarded as the most beautiful dzong in Bhutan – standing majestically at the confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River), its whitewashed walls, gilded spires, and riverine setting forming an architectural masterpiece of incomparable elegance.",
          "Learn the dzong's extraordinary history: built in 1637 by Zhabdrung Ngawang Namgyal, it served as Bhutan's capital until 1955, hosted the first coronation of Bhutan's monarchs, and has withstood fires, earthquakes, and floods – including a catastrophic glacial lake outburst flood in 1994 – standing today as a symbol of Bhutanese spiritual resilience. Overnight Punakha.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Punakha to Paro via Ta Dzong National Museum & Rinpung Dzong – Paro Valley Arrival",
        details: [
          "Depart Punakha and drive westward toward the Paro Valley, one of Bhutan's most fertile, historically significant, and scenically beautiful regions, following the river valleys through forested gorges and traditional farming communities.",
          "Arrive in Paro for afternoon sightseeing beginning at Ta Dzong – the National Museum of Bhutan – a striking circular watchtower originally constructed in the 17th century to defend Paro Dzong against Tibetan invasions, its galleries now displaying an outstanding collection of ancient thangkas, royal artefacts, natural history specimens, weapons, and ceremonial objects tracing Bhutanese civilization across more than fourteen centuries.",
          "Descend to the majestic Rinpung Dzong – 'Fortress on a Heap of Jewels' – built in 1646 by Zhabdrung Ngawang Namgyal and still functioning as both the religious and administrative headquarters of Paro District, its whitewashed walls, wooden cantilever bridges over the Paro Chhu, and mountain backdrop making it one of the most photographed and architecturally refined dzongs in the kingdom.",
          "Spend the evening on a leisurely stroll through Paro's charming main street, lined with traditional painted wooden shopfronts, handicraft galleries, local cafés, and textile vendors – a gentle, unhurried reintroduction to Paro's particular brand of Bhutanese hospitality. Overnight Paro.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery at 3,120m & Paro Town Exploration",
        details: [
          "Begin Bhutan's most iconic hike with an early morning start toward Paro Taktsang – the Tiger's Nest Monastery (Taktsang Palphug) – dramatically clinging to a sheer granite cliff at 3,120 meters above the Paro Valley floor, one of the most extraordinary sacred sites in the entire Himalayan world.",
          "The trail ascends through fragrant blue pine forest and colorful corridors of prayer flags, each switchback revealing increasingly breathtaking views of the monastery's gilded rooftops against the vertical rock face – the single most iconic image in Bhutanese travel and a sight of genuinely transformative visual power.",
          "Rest at the Taktsang Cafeteria viewpoint at the halfway point – one of the finest photography positions in all of Bhutan – before completing the final ascent across a suspension bridge above a dramatic waterfall-fed gorge to the monastery entrance.",
          "Explore the interconnected temples and meditation caves where Guru Rinpoche is said to have arrived on the back of a flying tigress in the 8th century, meditating in the cliffside caves before spreading Vajrayana Buddhism across the Himalayan kingdoms – a place of profound spiritual depth and physical drama in equal measure.",
          "The full round-trip hike takes approximately 4–5 hours; a horse can be arranged to the halfway cafeteria for those preferring a gentler ascent.",
          "If time allows in the afternoon, revisit Ta Dzong National Museum for a deeper exploration of its collections before a final evening stroll through Paro town for shopping and last-day exploration. Overnight Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Departure from Paro International Airport – End of Bhutan Cultural Journey",
        details: [
          "Enjoy a final breakfast in Paro, taking a quiet moment to reflect on ten extraordinary days – the Himalayan panorama from Dochula Pass, the ancient temples of Bumthang, the commanding ridge of Trongsa Dzong, the crane-watched stillness of Phobjikha Valley, the riverside grandeur of Punakha Dzong, and the soaring climb to Tiger's Nest that brought the journey to its unforgettable crescendo.",
          "Complete final packing and check out of your hotel, carrying the warmth of Bhutanese hospitality and the quiet wonder of a kingdom that has preserved its sacred landscape, living culture, and architectural heritage with extraordinary care and intention.",
          "Transfer to Paro International Airport (PBH) for your onward flight, departing Bhutan with a deep sense of gratitude for one of the world's most spiritually and culturally rich travel experiences.",
        ],
      },
    ],

    inclusions: [
      "All meals daily (breakfast, lunch & dinner)",
      "Daily mineral water throughout the tour",
      "Bhutan Sustainable Development Fee (SDF)",
      "English-speaking licensed Bhutanese guide",
      "Accommodation on twin-sharing basis",
      "Comfortable private vehicles with experienced drivers",
      "Minimum 3-star hotel accommodation (4-star & 5-star upgrades available at premium)",
      "All monument and site entrance fees as per itinerary",
    ],

    exclusions: [
      "International and domestic airfare",
      "Personal shopping and souvenirs",
      "Gratuities for guide and driver",
      "Travel insurance",
      "Laundry services",
      "Alcoholic beverages",
      "Optional horse riding fees on Tiger's Nest trail",
    ],

    tourDetails: [
      { label: "Tour Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Thimphu · Dochula Pass · Phobjikha Valley · Trongsa · Bumthang · Punakha",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-BCJ-PBH-10" },
      {
        label: "Meals Included",
        value: "All meals daily – breakfast, lunch & dinner throughout",
      },
      {
        label: "Best Time to Visit",
        value: "March–May (Spring) & September–November (Autumn)",
      },
      { label: "Group Size", value: "Small Group – Max 16 Guests" },
      { label: "Tour Type", value: "Cultural & Sightseeing" },
    ],
  },
  {
    id: 523,
    country: "Bhutan",
    place: "Paro",
    title:
      "Bhutan Luxury Tour – 11 Days Private Cultural Journey with Heritage Stays & Exclusive Experiences",
    type: "family",
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
    ],
    amenities: [
      "Luxury Hotels",
      "Meals",
      "Transfers",
      "Sightseeing",
      "Private Guide",
    ],
    price: 3799,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.9,
    reviews: 19,
    badge: "Luxury",
    badgeColor: "bg-yellow-600",
    mode: "Road",
    src: "/bhutan-lux.jpg",
    popular: true,

    seoMeta: {
      slug: "bhutan-luxury-tour-11-days-heritage-stays-private-experiences",
      metaTitle:
        "Bhutan Luxury Tour | 11 Days | Zhiwaling Heritage · Gangtey Lodge · Amankora Bumthang",
      metaDescription:
        "Experience Bhutan in ultimate luxury on this 11-day private cultural journey. Stay at Zhiwaling Heritage Paro, Gangtey Lodge & Amankora Bumthang. Includes Tiger's Nest hike, private lama meditation session, GNH talk, village cooking class & exclusive farewell dinner with a Bhutanese dignitary.",
      canonicalUrl:
        "https://indrukatours.com/view-details/bhutan-luxury-tour-11-days-heritage-stays-private-experiences",
      keywords: [
        "Bhutan luxury tour",
        "Bhutan luxury travel",
        "Zhiwaling Heritage Paro",
        "Gangtey Lodge Phobjikha",
        "Amankora Bumthang",
        "Bhutan private tour 11 days",
        "Bhutan luxury package",
        "Gross National Happiness tour",
        "Bhutan meditation retreat tour",
        "Bumthang spiritual tour luxury",
        "Australia to Bhutan",
        "New South Wales to Bhutan",
        "Queensland to Bhutan",
        "Victoria to Bhutan",
        "Western Australia to Bhutan",
        "Sydney to Bhutan",
        "Melbourne to Bhutan",
        "Brisbane to Bhutan",
        "how to go to Bhutan from Australia",
        "Bhutan travel from Australia",
        "Bhutan trip from Sydney",
        "can I travel to Bhutan from Australia",
        "Bhutan visa from Australia",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Australia",
        "Bhutan 11 day tour from Australia",
        "Tiger's Nest trek from Australia",
        "best Bhutan tour from Sydney",
        "Bhutan holiday package Australia",
        "Bhutan travel package 11 days",
        "India to Bhutan",
        "West Bengal to Bhutan",
        "Delhi to Bhutan",
        "Maharashtra to Bhutan",
        "South India to Bhutan",
        "Kolkata to Bhutan",
        "Delhi to Bhutan",
        "Mumbai to Bhutan",
        "how to go to Bhutan from India",
        "Bhutan travel from India",
        "Bhutan trip from Kolkata",
        "can I travel to Bhutan from India",
        "Bhutan visa from India",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package India",
        "Bhutan 11 day tour from India",
        "Tiger's Nest trek from India",
        "best Bhutan tour from Kolkata",
        "Bhutan holiday package India",
        "Bhutan travel package 11 days",
        "England to Bhutan",
        "UK to Bhutan",
        "United Kingdom to Bhutan",
        "Britain to Bhutan",
        "Scotland to Bhutan",
        "Wales to Bhutan",
        "London to Bhutan",
        "Manchester to Bhutan",
        "Edinburgh to Bhutan",
        "how to go to Bhutan from England",
        "Bhutan travel from England",
        "Bhutan trip from London",
        "can I travel to Bhutan from England",
        "Bhutan visa from England",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package ,England",
        "Bhutan 11 day tour from England",
        "Tiger's Nest trek from England",
        "best Bhutan tour from London",
        "Bhutan holiday package England",
        "Bhutan travel package 11 days",
        "USA to Bhutan",
        "United States to Bhutan",
        "America to Bhutan",
        "California to Bhutan",
        "New York to Bhutan",
        "New York to Bhutan",
        "Los Angeles to Bhutan",
        "San Francisco to Bhutan",
        "how to go to Bhutan from USA",
        "Bhutan travel from USA",
        "Bhutan trip from New York",
        "can I travel to Bhutan from USA",
        "Bhutan visa from USA",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package USA",
        "Bhutan 11 day tour from USA",
        "Tiger's Nest trek from USA",
        "best Bhutan tour from New York",
        "Bhutan holiday package USA",
        "Bhutan travel package 11 days",
        "Thailand to Bhutan",
        "Bangkok to Bhutan",
        "Chiang Mai to Bhutan",
        "Phuket to Bhutan",
        "how to go to Bhutan from Thailand",
        "Bhutan travel from Thailand",
        "Bhutan trip from Bangkok",
        "can I travel to Bhutan from Thailand",
        "Bhutan visa from Thailand",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Thailand",
        "Bhutan 11 day tour from Thailand",
        "Tiger's Nest trek from Thailand",
        "best Bhutan tour from Bangkok",
        "Bhutan holiday package Thailand",
        "Bhutan travel package 11 days",
        "Singapore to Bhutan",
        "Singapore to Bhutan",
        "how to go to Bhutan from Singapore",
        "Bhutan travel from Singapore",
        "Bhutan trip from Singapore",
        "can I travel to Bhutan from Singapore",
        "Bhutan visa from Singapore",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Singapore",
        "Bhutan 11 day tour from Singapore",
        "Tiger's Nest trek from Singapore",
        "best Bhutan tour from Singapore",
        "Bhutan holiday package Singapore",
        "Bhutan travel package 11 days",
        "Germany to Bhutan",
        "Deutschland to Bhutan",
        "Bavaria to Bhutan",
        "Berlin to Bhutan",
        "Munich to Bhutan",
        "Frankfurt to Bhutan",
        "how to go to Bhutan from Germany",
        "Bhutan travel from Germany",
        "Bhutan trip from Berlin",
        "can I travel to Bhutan from Germany",
        "Bhutan visa from Germany",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Germany",
        "Bhutan 11 day tour from Germany",
        "Tiger's Nest trek from Germany",
        "best Bhutan tour from Berlin",
        "Bhutan holiday package Germany",
        "Bhutan travel package 11 days",
        "France to Bhutan",
        "Paris to Bhutan",
        "Lyon to Bhutan",
        "Marseille to Bhutan",
        "how to go to Bhutan from France",
        "Bhutan travel from France",
        "Bhutan trip from Paris",
        "can I travel to Bhutan from France",
        "Bhutan visa from France",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package France",
        "Bhutan 11 day tour from France",
        "Tiger's Nest trek from France",
        "best Bhutan tour from Paris",
        "Bhutan holiday package France",
        "Bhutan travel package 11 days",
        "Japan to Bhutan",
        "Tokyo to Bhutan",
        "Osaka to Bhutan",
        "Kyoto to Bhutan",
        "how to go to Bhutan from Japan",
        "South Korea to Bhutan",
        "Korea to Bhutan",
        "Seoul to Bhutan",
        "Busan to Bhutan",
        "how to go to Bhutan from South Korea",
        "Bhutan travel from South Korea",
        "Bhutan trip from Seoul",
        "can I travel to Bhutan from South Korea",
        "Canada to Bhutan",
        "Toronto to Bhutan",
        "Vancouver to Bhutan",
        "Calgary to Bhutan",
        "how to go to Bhutan from Canada",
        "Bhutan travel from Canada",
        "Bhutan trip from Toronto",
        "can I travel to Bhutan from Canada",
        "Bhutan visa from Canada",
        "UAE to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "how to go to Bhutan from UAE",
        "Bhutan travel from UAE",
        "Bhutan trip from Dubai",
        "can I travel to Bhutan from UAE",
        "Bhutan visa from UAE",
        "Malaysia to Bhutan",
        "Kuala Lumpur to Bhutan",
        "Penang to Bhutan",
        "how to go to Bhutan from Malaysia",
        "Bhutan travel from Malaysia",
        "Bhutan trip from Kuala Lumpur",
        "can I travel to Bhutan from Malaysia",
        "Bhutan visa from Malaysia",
        "China to Bhutan",
        "Beijing to Bhutan",
        "Shanghai to Bhutan",
        "Guangzhou to Bhutan",
        "how to go to Bhutan from China",
        "Bhutan travel from China",
        "Bhutan trip from Beijing",
        "can I travel to Bhutan from China",
        "New Zealand to Bhutan",
        "Auckland to Bhutan",
        "Wellington to Bhutan",
        "Christchurch to Bhutan",
        "how to go to Bhutan from New Zealand",
        "Bhutan travel from New Zealand",
        "Bhutan trip from Auckland",
        "can I travel to Bhutan from New Zealand",

        "Italy to Bhutan",
        "Rome to Bhutan",
        "Milan to Bhutan",
        "how to go to Bhutan from Italy",
        "Bhutan travel from Italy",
        "Bhutan trip from Rome",
        "can I travel to Bhutan from Italy",
      ],
    },

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
          "Zhiwaling Heritage Stay – Bhutan's Only All-Bhutanese Luxury Heritage Property in Paro, Built & Designed by Local Artisans",
      },
      {
        title:
          "Tiger's Nest Hike & Meditation – Paro Taktsang Monastery at 3,120m with Private Reflective Session",
      },
      {
        title:
          "Private Lama Meditation Session – Rare Intimate Audience & Spiritual Teaching with a Reincarnate Lama",
      },
      {
        title:
          "Gross National Happiness Evening Talk – Expert-Led Session on Bhutan's Guiding Philosophy of Happiness",
      },
      {
        title:
          "Gangtey Lodge Stay – Award-Winning Luxury Lodge Overlooking the Mystical Phobjikha Valley",
      },
      {
        title:
          "Bumthang Sacred Temples & Nuns' Drum Ceremony – Jambay Lhakhang, Kurje Lhakhang & Private Prayer Session",
      },
      {
        title:
          "Village Cooking Class & Community Immersion – Authentic Bhutanese Ema Datshi, Red Rice & Butter Tea in a Local Home",
      },
      {
        title:
          "Private Farewell Dinner with a Bhutanese Dignitary – Exclusive Cultural Performances & Fine Dining Celebration",
      },
    ],

    tourManagerCompany: "Indruka Tours and Travels",

    heroImage: {
      src: "/bhutan-lux2.jpg",
      alt: "Bhutan Luxury Tour – Gangtey Lodge Phobjikha Valley with Himalayan Mountain Views at Dusk",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/bhutan-lux3.jpg",
        alt: "Zhiwaling Heritage Hotel Paro Bhutan – Traditional Hand-Carved Bhutanese Architecture and Luxury Interior",
      },
      {
        id: 2,
        src: "/bhutan-lux4.jpg",
        alt: "Gangtey Lodge Phobjikha Valley Bhutan – Award-Winning Luxury Lodge Overlooking Black-Necked Crane Wetlands",
      },
      {
        id: 3,
        src: "/bhutan-lux5.jpg",
        alt: "Amankora Bumthang Bhutan – Luxury Lodge in Bhutan's Spiritual Heartland Surrounded by Pine Forest",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Bhutan Luxury Tour – 11 Days" },
    ],

    badges: [
      { label: "LUXURY", variant: "solid" as const, color: "yellow" },
      { label: "11 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 11,
    countryCount: 1,
    cityCount: 6,
    region: "Kingdom of Bhutan",
    maxGuests: 8,

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
          "Arrive in Paro, Bhutan – Himalayan Scenic Flight with Views of Everest & Gangkar Puensum, Transfer to Thimphu Luxury Lodge",
        details: [
          "Arrive at Paro International Airport (PBH) on one of the most extraordinary flight approaches in the world – descending through a narrow mountain valley with sweeping aerial views of the Eastern Himalayas including Mount Everest, Kanchenjunga, and Bhutan's own sacred peaks: Jomolhari (7,326m) and Gangkar Puensum (7,570m), the world's highest unclimbed mountain.",
          "As the aircraft banks into the Paro Valley, the ancient silhouettes of Paro Dzong and Ta Dzong come into view along the Pa Chu River – a first glimpse of the timeless architectural heritage that defines Bhutan's extraordinary cultural landscape.",
          "Be warmly welcomed on arrival by your dedicated Indruka Tours guide and driver, and begin the leisurely approximately 55 km drive to Thimphu – Bhutan's charming capital and one of the world's only national capitals without a traffic light – with sightseeing en route depending on arrival time.",
          "Check in to your luxury lodge in Thimphu and settle into the refined comfort that will accompany you throughout this exceptional journey – each property on this itinerary selected for its architectural distinction, soulful service, and deep connection to Bhutanese heritage.",
          "Enjoy a welcome dinner at the lodge and a first evening introduction from your guide to the Bhutanese way of life, the philosophy of Gross National Happiness, and the cultural experiences that await across the days ahead. Overnight Luxury Lodge, Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Thimphu Cultural Immersion – Buddha Dordenma, Folk Heritage Museum, GNH Talk & Fine Dining Evening",
        details: [
          "Begin the morning with Thimphu's most significant cultural landmarks: the National Memorial Chorten where locals circumambulate in daily devotion; the colossal Buddha Dordenma statue at Kuensel Phodrang – 51.5 meters of gilded bronze housing 125,000 smaller Buddha statues, overlooking the full breadth of the Thimphu Valley; and the Folk Heritage Museum, a beautifully preserved traditional farmhouse offering an intimate window into multi-generational rural Bhutanese domestic life.",
          "Visit the Motithang Takin Preserve – home to the takin, Bhutan's extraordinary national animal found only in the Eastern Himalayan region – followed by a cultural immersion at Chari Monastery with a picnic lunch in the monastery grounds and an inspiring visit to the Choki Traditional Arts School, where Bhutan's Thirteen Classical Arts are actively taught and preserved by young artisans.",
          "The afternoon takes on a more urban character: stroll through Changyul Park alongside Thimphu locals, browse the vibrant Centenary Farmers Market, and observe traditional archery at the city's archery ground – Bhutan's national sport, played with extraordinary skill and even more extraordinary competitive banter.",
          "The evening is reserved for one of the most intellectually distinctive experiences on any Bhutan itinerary: a thought-provoking expert-led talk on Gross National Happiness – Bhutan's guiding national philosophy that measures prosperity through psychological wellbeing, cultural preservation, environmental health, and good governance – followed by an exceptional fine dining experience at the lodge.",
          "Overnight Luxury Lodge, Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu to Punakha via Dochula Pass – 108 Chortens, Himalayan Panoramas & Punakha Dzong",
        details: [
          "Depart Thimphu and ascend the winding mountain road to Dochula Pass at 3,140 meters – one of Bhutan's most iconic high-altitude viewpoints – where on clear days a 180-degree panorama of the Eastern Himalayan range stretches magnificently along the Bhutan–Tibet border, including Gangkar Puensum, Masagang, Terigang, and a sweeping chain of snow-capped peaks.",
          "Explore the 108 Druk Wangyal Chortens – a memorial commissioned by the Royal Queen Mother – set against one of the finest Himalayan skylines in the country before the road begins its dramatic descent into the subtropical warmth of the Punakha Valley at 1,300 meters, where banana groves and rice paddies replace the rhododendron forests of the highlands.",
          "Arrive in the magnificent Punakha Valley and visit Punakha Dzong – widely regarded as the most beautiful dzong in Bhutan – standing at the precise confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River), its whitewashed walls and gilded spires rising from the water in a vision of architectural perfection that has graced Bhutanese royal history since 1637.",
          "Cross the longest suspension bridge in Bhutan south of the dzong, where the two rivers merge and flow southward through the valley – one of the most peaceful and picturesque short walks in the western valleys, with the dzong framed behind you against a ridgeline of subtropical forest.",
          "Check in to your luxury lodge in Punakha and enjoy the warm evening air of this lower-altitude valley after the cool highlands of Thimphu. Overnight Luxury Lodge, Punakha.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Punakha Valley – Chimi Lhakhang Hike, Khamsum Chorten, Private Monastery Blessing & Optional Rafting",
        details: [
          "Begin the morning with a walk through golden rice paddies and flowering farmland to Chimi Lhakhang – the beloved Fertility Temple dedicated to the 'Divine Madman' Lama Drukpa Kuenley, whose unconventional enlightened teachings through humor, song, and radical spontaneity became one of Bhutan's most distinctive and revered spiritual traditions.",
          "Continue with a scenic hike to Khamsum Yulley Namgyal Chorten – the King's temple – perched on a ridge above the Punakha Valley with outstanding views of the Mo Chhu River, rice terraces, and surrounding Himalayan foothills, its interior walls richly painted with guardian deities and intricate mandalas in the finest traditional Bhutanese style.",
          "For those seeking a light adventure, optional white-water rafting along the Mo Chhu (Mother River) is available – a gentle, scenic float through the subtropical Punakha Valley with the dzong visible on its riverbank promontory above – one of the most pleasurable ways to experience Punakha's extraordinary landscape.",
          "The afternoon brings one of the most rare and intimate experiences on this luxury itinerary: a private blessing ceremony with resident monks at the centuries-old Chorten Nyebu Monastic School – a deeply moving encounter with Bhutanese living religious tradition, arranged exclusively for small private groups.",
          "Return to the lodge for a sunset cocktail on the terrace before a fine dinner in the valley. Overnight Luxury Lodge, Punakha.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Punakha to Gangtey Lodge – Mystical Phobjikha Valley, Nature Walk, Buddhism Talk & Guided Meditation",
        details: [
          "Depart Punakha and drive the approximately 75 km scenic mountain road to Phobjikha Valley at 2,990 meters – ascending from subtropical river valley back into cool highland terrain and arriving at one of the most spiritually atmospheric destinations in Bhutan.",
          "Check in to Gangtey Lodge – one of the most celebrated luxury properties in Bhutan, perched on the valley rim with floor-to-ceiling views over the entire glacial expanse of Phobjikha – winter sanctuary of the endangered Black-Necked Crane migrating annually from the Tibetan Plateau.",
          "Spend the afternoon on a leisurely stroll through traditional farming villages at the heart of the valley, where the absence of vehicular noise, electric fencing, and modern development creates an atmosphere of extraordinary natural and cultural authenticity rarely encountered anywhere in the Himalayan region.",
          "Follow a section of the valley's 360-degree panoramic hike trail as the light shifts across the wetland – one of the finest easy walks in Bhutan for birdwatching, open skies, and the particular quality of highland silence that defines Phobjikha.",
          "The evening features a deeply engaging Buddhism talk with a Bhutanese Buddhist scholar or senior practitioner, followed by a guided meditation session drawing on Himalayan contemplative traditions – a rare opportunity to encounter Bhutan's spiritual heritage not as spectacle but as living practice. Overnight Gangtey Lodge.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Gangtey – Monastery Visit, Community Immersion, Crane Research Centre & Village Cooking Class",
        details: [
          "Begin the morning with a visit to Gangtey Monastery (Gangtey Gonpa) – one of the most important Nyingma Buddhist centers in Bhutan, founded in the 17th century on a forested knoll above the valley floor, its ancient temples, prayer halls, and resident monk community providing a living example of Himalayan monastic culture at its most authentic.",
          "Continue with a guided forest-bathing hike along the Gangtey Nature Trail through silver fir and rhododendron forest – a meditative walk through one of the most biodiverse highland ecosystems in Bhutan, with the valley spreading peacefully below.",
          "The afternoon is dedicated to community immersion: joining a meaningful social project alongside local Phobjikha residents, an experience arranged in partnership with valley conservation initiatives that gives visitors a genuine, non-voyeuristic understanding of rural Bhutanese life and the challenges of preserving it.",
          "Visit the Black-Necked Crane Research Centre to learn about the ecology, migration patterns, and conservation status of these sacred birds before the day's most hands-on highlight: a village cooking class in a traditional farmhouse kitchen, learning to prepare ema datshi (Bhutan's beloved chilli-and-cheese national dish), red rice, momos, and homemade butter tea alongside a local family.",
          "Return to Gangtey Lodge for a final dinner overlooking the valley as darkness settles over the wetland. Overnight Gangtey Lodge.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Gangtey to Bumthang – Bhutan's Most Scenic Mountain Drive & Arrival in Bhutan's Spiritual Heartland",
        details: [
          "Embark on one of the most scenic long drives in Bhutan – approximately 188 km through the country's dramatic central mountain spine, crossing high passes, descending through deep river gorges, and ascending once more into the wide, forested valleys of the east.",
          "The drive passes through some of Bhutan's most remote and visually extraordinary highland terrain: yak herder settlements at altitude, ancient chortens at mountain passes draped in prayer flags, and the occasional monastery glimpsed through forest on a distant ridge – a panoramic landscape unfolding across seven hours of unhurried travel.",
          "Stop for lunch in Trongsa, where the magnificent Trongsa Dzong cascades along its ridge above the Mangde Chhu gorge – the historic seat of power from which Bhutan's royal Wangchuck dynasty first unified the kingdom.",
          "Arrive in Bumthang at approximately 2,600 meters – Bhutan's spiritual heartland and the valley with the highest concentration of sacred sites, ancient temples, and Guru Rinpoche-linked pilgrimage destinations in the entire kingdom.",
          "Enjoy a leisurely evening walk through Jakar town and its traditional market, absorbing the distinct atmosphere of a valley where the weight of Buddhist history feels palpably present in every whitewashed wall and butter-lamp-lit shrine. Overnight Amankora Bumthang.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Bumthang Sacred Temples – Jambay Lhakhang, Kurje Lhakhang, Nuns' Drum Ceremony & Bushman's Trail Hike",
        details: [
          "Spend the full day immersed in Bumthang's extraordinary sacred landscape, beginning with Jambay Lhakhang – one of the oldest temples in Bhutan, believed to have been founded in the 7th century by Tibetan Emperor Songtsen Gampo as one of 108 temples built simultaneously across the Himalayan region to pin down a demoness threatening the spread of Buddhism.",
          "Visit Kurje Lhakhang – among the most revered pilgrimage sites in all of Bhutan – where Guru Rinpoche (Padmasambhava) is said to have meditated in the cliffside caves in the 8th century and left the sacred imprint of his body on the rock within the innermost shrine, the earliest physical trace of the master's presence in the kingdom.",
          "Continue to Tamshing Monastery – founded in 1501 by Pema Lingpa, one of Bhutan's most celebrated treasure-discoverers – whose walls bear some of the oldest and finest Buddhist murals in Bhutan, painted by Pema Lingpa himself according to tradition.",
          "Join nuns at a local nunnery for a deeply moving private prayer ceremony accompanied by the resonant chanting of drums – an intimate spiritual encounter of the kind rarely accessible to visitors and one of the most memorable experiences on the entire Bhutan luxury itinerary.",
          "The afternoon brings an adventurous 3-hour hike along the Bushman's Trail through Bumthang's open highland meadows, forested ridges, and ancient farm tracks – a physically engaging counterpoint to the morning's contemplative pace. Overnight Amankora Bumthang.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Domestic Flight Bumthang to Paro – Ta Dzong, Rinpung Dzong & Check-in to Zhiwaling Heritage (optional/Excluded from Package)",
        details: [
          "Board the short 30-minute domestic flight from Bumthang to Paro – one of the most spectacular intra-country flights in Asia, offering aerial views of Gangkar Puensum, the Bumthang river valleys, and the entire central Himalayan chain – a final bird's-eye perspective of the landscapes traversed over the past week.",
          "Arrive in Paro and visit Ta Dzong – the National Museum of Bhutan – housing one of the finest collections of Bhutanese sacred art, royal artefacts, natural history specimens, and historical treasures in the kingdom, spanning fourteen centuries of cultural continuity.",
          "Descend to the majestic Rinpung Dzong (Paro Dzong) – built in 1646 by Zhabdrung Ngawang Namgyal – exploring its exquisitely painted assembly halls, covered cantilever bridges, and ancient courtyards that have framed Paro's cultural life for nearly four centuries.",
          "Check in to Zhiwaling Heritage – Bhutan's first and only luxury hotel wholly conceived, designed, and constructed by Bhutanese artisans using traditional hand-carved wood, stone, and painted plasterwork techniques passed down through generations – a property that represents the pinnacle of living Bhutanese craftsmanship in a contemporary hospitality setting.",
          "Spend the evening at leisure in Zhiwaling's refined surroundings – perhaps a spa treatment, a private cultural performance, or simply a quiet walk through its gardens as Paro Valley settles into dusk. Overnight Zhiwaling Heritage, Paro.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery, Private Meditation & Exclusive Farewell Dinner",
        details: [
          "Begin the final full day with Bhutan's most iconic and spiritually significant experience: the hike to Paro Taktsang – the Tiger's Nest Monastery – clinging to a sheer granite cliff at 3,120 meters above the Paro Valley floor, the most visited and most revered sacred site in Bhutan.",
          "The ascent through blue pine forest and corridors of prayer flags takes approximately 2–3 hours, with each switchback opening wider views of the monastery against the cliff face – a sight of genuinely transformative visual and spiritual power that rewards every step of the climb.",
          "Upon reaching the monastery, your guide will arrange a private, unhurried meditation session within the sacred complex – time to sit in stillness in one of the meditation halls or outdoor viewpoints where Guru Rinpoche is said to have practiced over 1,200 years ago, and to absorb the full profundity of the site beyond the reach of tourist groups.",
          "Descend at leisure and return to Zhiwaling Heritage for rest and preparation for the evening's culminating experience: a private farewell dinner with a senior Bhutanese dignitary – an intimate celebration of the journey in the company of someone who carries the living heritage of this remarkable kingdom.",
          "The evening unfolds with traditional cultural performances – masked dance, classical Bhutanese music, and perhaps a demonstration of the country's ancient courtly arts – in a setting arranged exclusively for the group, bringing the entire journey to its most memorable and fitting close. Overnight Zhiwaling Heritage, Paro.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title:
          "Departure from Paro International Airport – End of Bhutan Luxury Journey",
        details: [
          "Rise for a final morning in Bhutan – perhaps a quiet walk through Paro town before breakfast, or simply a last cup of butter tea on the Zhiwaling terrace as the valley fills with morning light and the peaks of the Himalayan range catch the first sun above the ridgeline.",
          "Your guide and driver bid a heartfelt farewell at Paro International Airport, offering traditional white scarves and blessings for safe and happy travels onward – a gesture of Bhutanese warmth that has accompanied every arrival and departure in this kingdom for centuries.",
          "Board your flight for one final glimpse of the Himalayas through the aircraft window – a reminder that Bhutan, the Kingdom of Happiness, is a place that changes everyone who visits it, and that the journey home is already the beginning of the journey back.",
        ],
      },
    ],

    inclusions: [
      "All meals daily including fine dining at luxury properties",
      "Daily mineral water throughout the tour",
      "Bhutan Sustainable Development Fee (SDF)",
      "Dedicated English-speaking licensed Bhutanese expert guide",
      "Luxury private vehicles with professional drivers",
      "Accommodation at Zhiwaling Heritage Paro, Gangtey Lodge, Amankora Bumthang & equivalent luxury properties",
      "Domestic flight – Bumthang to Paro (included)",
      "Gross National Happiness expert evening talk",
      "Private blessing ceremony at Chorten Nyebu Monastic School",
      "Private Buddhism talk & guided meditation session with a reincarnate lama",
      "Hands-on village cooking class in a traditional Bhutanese home",
      "Community immersion & social project engagement in Phobjikha Valley",
      "Traditional Bhutanese hot stone bath (menchu)",
      "Traditional archery experience",
      "Private farewell dinner with a Bhutanese dignitary & cultural performances",
      "All monument and site entrance fees as per itinerary",
    ],

    exclusions: [
      "International airfare",
      "Personal shopping and souvenirs",
      "Gratuities for guide, driver, and support staff",
      "Travel insurance",
      "Laundry services",
      "Alcoholic beverages (unless specified at inclusions)",
      "Optional white-water rafting along Mo Chhu river",
      "Optional horse riding on Tiger's Nest trail",
    ],

    tourDetails: [
      { label: "Tour Duration", value: "11 Days / 10 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Thimphu · Dochula Pass · Punakha · Gangtey (Phobjikha Valley) · Bumthang",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-BLT-PBH-11" },
      {
        label: "Meals Included",
        value: "All meals daily including fine dining at all luxury properties",
      },
      {
        label: "Best Time to Visit",
        value: "March–May (Spring) & September–November (Autumn)",
      },
      { label: "Tour Type", value: "Luxury & Cultural" },
      { label: "Tour Operator", value: "Indruka Tours and Travels" },
      {
        label: "Signature Stays",
        value:
          "Zhiwaling Heritage Paro · Gangtey Lodge Phobjikha · Amankora Bumthang",
      },
      {
        label: "Domestic Flight",
        value: "Bumthang → Paro (30 minutes, included)",
      },
    ],
  },
  {
    id: 524,
    country: "Bhutan",
    place: "Paro",
    title:
      "Happiness Trek – 14 Days Central Bhutan Trekking & Village Immersion Journey",
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
    price: 5599,
          priceRegional: 85000, // 👈 your India/Bangladesh price in INR

    rating: 4.9,
    reviews: 22,
    badge: "Trekking",
    badgeColor: "bg-green-600",
    mode: "Trek",
    src: "/The lake.jpg",
    popular: true,

    seoMeta: {
      slug: "happiness-trek-bhutan-14-days-central-bhutan-village-immersion",
      metaTitle:
        "Happiness Trek Bhutan | 14 Days | Bumthang · Trongsa · Drongthang Village · Phobjikha · Punakha",
      metaDescription:
        "Trek the remote Mangdi Chu River valley on Bhutan's 14-day Happiness Trek. Explore Bumthang's sacred temples, trek through hidden Drongthang village, visit Bemji Nagtshang manor, Phobjikha Valley & Punakha Dzong. Includes domestic flight and farewell Tiger's Nest hike. Small group departures from Paro.",
      canonicalUrl:
        "https://indrukatours.com/view-details/happiness-trek-bhutan-14-days-central-bhutan-village-immersion",
      keywords: [
        "Happiness Trek Bhutan",
        "central Bhutan trek",
        "Mangdi Chu River trek",
        "Drongthang village trek",
        "Bumthang temple tour trek",
        "Bemji Nagtshang Bhutan",
        "Bhutan village immersion trek",
        "Bhutan trekking 14 days",
        "Phobjikha Valley black-necked crane",
        "Mebartsho Burning Lake Bhutan",
        "Australia to Bhutan",
        "New South Wales to Bhutan",
        "Queensland to Bhutan",
        "Victoria to Bhutan",
        "Western Australia to Bhutan",
        "Sydney to Bhutan",
        "Melbourne to Bhutan",
        "Brisbane to Bhutan",
        "how to go to Bhutan from Australia",
        "Bhutan travel from Australia",
        "Bhutan trip from Sydney",
        "can I travel to Bhutan from Australia",
        "Bhutan visa from Australia",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Australia",
        "Bhutan 11 day tour from Australia",
        "Tiger's Nest trek from Australia",
        "best Bhutan tour from Sydney",
        "Bhutan holiday package Australia",
        "Bhutan travel package 11 days",
        "India to Bhutan",
        "West Bengal to Bhutan",
        "Delhi to Bhutan",
        "Maharashtra to Bhutan",
        "South India to Bhutan",
        "Kolkata to Bhutan",
        "Delhi to Bhutan",
        "Mumbai to Bhutan",
        "how to go to Bhutan from India",
        "Bhutan travel from India",
        "Bhutan trip from Kolkata",
        "can I travel to Bhutan from India",
        "Bhutan visa from India",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package India",
        "Bhutan 11 day tour from India",
        "Tiger's Nest trek from India",
        "best Bhutan tour from Kolkata",
        "Bhutan holiday package India",
        "Bhutan travel package 11 days",
        "England to Bhutan",
        "UK to Bhutan",
        "United Kingdom to Bhutan",
        "Britain to Bhutan",
        "Scotland to Bhutan",
        "Wales to Bhutan",
        "London to Bhutan",
        "Manchester to Bhutan",
        "Edinburgh to Bhutan",
        "how to go to Bhutan from England",
        "Bhutan travel from England",
        "Bhutan trip from London",
        "can I travel to Bhutan from England",
        "Bhutan visa from England",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package ,England",
        "Bhutan 11 day tour from England",
        "Tiger's Nest trek from England",
        "best Bhutan tour from London",
        "Bhutan holiday package England",
        "Bhutan travel package 11 days",
        "USA to Bhutan",
        "United States to Bhutan",
        "America to Bhutan",
        "California to Bhutan",
        "New York to Bhutan",
        "New York to Bhutan",
        "Los Angeles to Bhutan",
        "San Francisco to Bhutan",
        "how to go to Bhutan from USA",
        "Bhutan travel from USA",
        "Bhutan trip from New York",
        "can I travel to Bhutan from USA",
        "Bhutan visa from USA",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package USA",
        "Bhutan 11 day tour from USA",
        "Tiger's Nest trek from USA",
        "best Bhutan tour from New York",
        "Bhutan holiday package USA",
        "Bhutan travel package 11 days",
        "Thailand to Bhutan",
        "Bangkok to Bhutan",
        "Chiang Mai to Bhutan",
        "Phuket to Bhutan",
        "how to go to Bhutan from Thailand",
        "Bhutan travel from Thailand",
        "Bhutan trip from Bangkok",
        "can I travel to Bhutan from Thailand",
        "Bhutan visa from Thailand",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Thailand",
        "Bhutan 11 day tour from Thailand",
        "Tiger's Nest trek from Thailand",
        "best Bhutan tour from Bangkok",
        "Bhutan holiday package Thailand",
        "Bhutan travel package 11 days",
        "Singapore to Bhutan",
        "Singapore to Bhutan",
        "how to go to Bhutan from Singapore",
        "Bhutan travel from Singapore",
        "Bhutan trip from Singapore",
        "can I travel to Bhutan from Singapore",
        "Bhutan visa from Singapore",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Singapore",
        "Bhutan 11 day tour from Singapore",
        "Tiger's Nest trek from Singapore",
        "best Bhutan tour from Singapore",
        "Bhutan holiday package Singapore",
        "Bhutan travel package 11 days",
        "Germany to Bhutan",
        "Deutschland to Bhutan",
        "Bavaria to Bhutan",
        "Berlin to Bhutan",
        "Munich to Bhutan",
        "Frankfurt to Bhutan",
        "how to go to Bhutan from Germany",
        "Bhutan travel from Germany",
        "Bhutan trip from Berlin",
        "can I travel to Bhutan from Germany",
        "Bhutan visa from Germany",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Germany",
        "Bhutan 11 day tour from Germany",
        "Tiger's Nest trek from Germany",
        "best Bhutan tour from Berlin",
        "Bhutan holiday package Germany",
        "Bhutan travel package 11 days",
        "France to Bhutan",
        "Paris to Bhutan",
        "Lyon to Bhutan",
        "Marseille to Bhutan",
        "how to go to Bhutan from France",
        "Bhutan travel from France",
        "Bhutan trip from Paris",
        "can I travel to Bhutan from France",
        "Bhutan visa from France",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package France",
        "Bhutan 11 day tour from France",
        "Tiger's Nest trek from France",
        "best Bhutan tour from Paris",
        "Bhutan holiday package France",
        "Bhutan travel package 11 days",
        "Japan to Bhutan",
        "Tokyo to Bhutan",
        "Osaka to Bhutan",
        "Kyoto to Bhutan",
        "how to go to Bhutan from Japan",
        "South Korea to Bhutan",
        "Korea to Bhutan",
        "Seoul to Bhutan",
        "Busan to Bhutan",
        "how to go to Bhutan from South Korea",
        "Bhutan travel from South Korea",
        "Bhutan trip from Seoul",
        "can I travel to Bhutan from South Korea",
        "Canada to Bhutan",
        "Toronto to Bhutan",
        "Vancouver to Bhutan",
        "Calgary to Bhutan",
        "how to go to Bhutan from Canada",
        "Bhutan travel from Canada",
        "Bhutan trip from Toronto",
        "can I travel to Bhutan from Canada",
        "Bhutan visa from Canada",
        "UAE to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "how to go to Bhutan from UAE",
        "Bhutan travel from UAE",
        "Bhutan trip from Dubai",
        "can I travel to Bhutan from UAE",
        "Bhutan visa from UAE",
        "Malaysia to Bhutan",
        "Kuala Lumpur to Bhutan",
        "Penang to Bhutan",
        "how to go to Bhutan from Malaysia",
        "Bhutan travel from Malaysia",
        "Bhutan trip from Kuala Lumpur",
        "can I travel to Bhutan from Malaysia",
        "Bhutan visa from Malaysia",
        "China to Bhutan",
        "Beijing to Bhutan",
        "Shanghai to Bhutan",
        "Guangzhou to Bhutan",
        "how to go to Bhutan from China",
        "Bhutan travel from China",
        "Bhutan trip from Beijing",
        "can I travel to Bhutan from China",
        "New Zealand to Bhutan",
        "Auckland to Bhutan",
        "Wellington to Bhutan",
        "Christchurch to Bhutan",
        "how to go to Bhutan from New Zealand",
        "Bhutan travel from New Zealand",
        "Bhutan trip from Auckland",
        "can I travel to Bhutan from New Zealand",

        "Italy to Bhutan",
        "Rome to Bhutan",
        "Milan to Bhutan",
        "how to go to Bhutan from Italy",
        "Bhutan travel from Italy",
        "Bhutan trip from Rome",
        "can I travel to Bhutan from Italy",
      ],
    },

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
          "Central Bhutan Trek – Follow the Mangdi Chu River Through Remote Villages, Pine Forests & Hidden Valleys",
      },
      {
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery at 3,120m, 13.2 km Round Trip with Sacred Meditation Caves",
      },
      {
        title:
          "Drongthang Village Immersion – Traditional Folk Dances, Ara Moonshine Tasting & Farmhouse Evening by Butter Lamps",
      },
      {
        title:
          "Bumthang Sacred Sites – Jambay Lhakhang (7th Century), Kurje Lhakhang, Tamshing Monastery & Mebartsho Burning Lake",
      },
      {
        title:
          "Phobjikha Valley – UNESCO-Recognized Glacial Wetlands & Winter Sanctuary of the Endangered Black-Necked Crane",
      },
      {
        title:
          "Bemji Nagtshang – Ancestral Noble Manor of Bhutan's Revered Gangtey Tulku Reincarnate Lama Lineage",
      },
    ],

    tourManagerCompany: "Indruka Tours and Travels",

    heroImage: {
      src: "/The lake.jpg",
      alt: "Happiness Trek Bhutan – Alpine Lake Along the Mangdi Chu River Valley Trekking Route in Central Bhutan",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/adikalesh.jpg",
        alt: "Drongthang Village Bhutan – Traditional Farmhouse and Terraced Fields Along the Mangdi Chu River Trek",
      },
      {
        id: 2,
        src: "/happiness-trek3.jpg",
        alt: "Bemji Nagtshang Manor Bhutan – Historic Noble Manor House and Ancestral Home of the Gangtey Tulku Lineage",
      },
      {
        id: 3,
        src: "/happiness-trek4.jpg",
        alt: "Kasiphey Monastery Camp Bhutan – Trekking Campsite Below Remote Monastery Founded by Gangtey Tulku Rinpoche",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Paro Tour Packages", href: "/bhutan/paro" },
      { label: "Happiness Trek – 14 Days Central Bhutan" },
    ],

    badges: [
      { label: "TREKKING", variant: "solid" as const, color: "green" },
      { label: "14 DAYS", variant: "outlined" as const, color: "cyan" },
      { label: "MODERATE", variant: "outlined" as const, color: "amber" },
    ],

    durationDays: 14,
    countryCount: 1,
    cityCount: 7,
    region: "Kingdom of Bhutan",
    maxGuests: 12,

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
        title:
          "Arrive in Paro, Bhutan – Himalayan Scenic Flight, Welcome Orientation & Journey Briefing",
        details: [
          "Arrive at Paro International Airport (PBH) on one of the world's most breathtaking mountain approaches, with sweeping aerial views of the Eastern Himalayas – including some of the highest and most remote glacial peaks on earth – before touching down in the narrow, forested Paro Valley.",
          "Be warmly received on arrival by your dedicated Indruka Tours guide and driver, and transfer to your hotel for check-in and a chance to rest after the journey.",
          "The evening begins with a comprehensive orientation briefing covering the full arc of the 14-day Happiness Trek – the sacred temples of Bumthang, the remote Mangdi Chu River valley, the historic manor of Bemji Nagtshang, the wetlands of Phobjikha, and the iconic finale at Tiger's Nest.",
          "Enjoy a welcome dinner with your guide, establishing the warm relationship that will sustain the group through two weeks of extraordinary shared experience in the Kingdom of Happiness.",
          "Overnight Paro or Thimphu.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Domestic Flight to Bumthang – Sacred Temples of Chamkhar Valley: Jambay Lhakhang, Kurje Lhakhang & Tamshing Monastery",
        details: [
          "Board the spectacular domestic flight to Bumthang (weather permitting) – approximately 30 minutes of extraordinary aerial views over the Himalayan peaks, the Black Mountain Range (4,922m), and the deep river gorges of central Bhutan before descending into the wide, forested Jakar Valley at 2,800 meters.",
          "Begin a spiritual hiking tour of 6–8 km through the Chamkhar Valley, following trails that link the most sacred sites in Bumthang – a valley revered as Bhutan's spiritual heartland, with the highest concentration of ancient temples and Guru Rinpoche-linked pilgrimage sites in the entire kingdom.",
          "Visit Jambay Lhakhang at 2,700m – one of the oldest temples in Bhutan, founded in the 7th century by Tibetan Emperor Songtsen Gampo as one of 108 temples built simultaneously across the Himalayan region to pin down a demoness obstructing the spread of Buddhism.",
          "Continue to Kurje Lhakhang at 2,750m – among the most revered pilgrimage destinations in Bhutan – where Guru Rinpoche (Padmasambhava) is said to have meditated in the cliffside caves in the 8th century, leaving the sacred imprint of his body on the rock visible within the innermost shrine of the oldest temple.",
          "An optional 2 km extension reaches Tamshing Monastery at 2,700m – founded in 1501 by treasure-discoverer Pema Lingpa – whose walls bear some of the oldest and finest Buddhist murals in Bhutan, painted according to tradition by Pema Lingpa himself, alongside a sacred chainmail vest used in purification rituals.",
          "The afternoon includes a visit to a Swiss agricultural project site to sample Bhutanese artisan products – Red Panda beer, farmhouse cheese, apple juice, and wildflower honey – before a relaxed stroll through Chamkhar town for local handicrafts. Overnight Bumthang.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Ogyen Choling Palace Museum, Pemacholing Nunnery Drum Ceremony & Mebartsho Burning Lake Pilgrimage",
        details: [
          "Begin the day at Ogyen Choling – the 'Palace of Bliss' – once home to the 14th-century Buddhist scholar Longchen Rabjam and now a private heritage museum preserving Bhutan's noble history through royal artefacts, ancient thangkas, ceremonial objects, and manuscripts that bring the aristocratic world of Bumthang vividly to life.",
          "If fortunate, meet Azhi Kunzang Choden – a distinguished Bhutanese historian, author, and direct descendant of the palace's noble lineage – whose personal insights transform historical facts into living family memory and offer a depth of cultural encounter rarely accessible to visitors.",
          "On the return from Tang Valley (approximately 25 km), stop at Pemacholing Nunnery at 2,700m, home to over 300 Buddhist nuns who have dedicated their lives to prayer and contemplative practice – one of the largest nunneries in Bhutan.",
          "Witness the sacred Choed Drum Ceremony: a deeply moving ritual of synchronized chants, drums, and bells performed by the nuns, believed in the Vajrayana tradition to purify negative karma and generate powerful blessings for all who attend.",
          "Complete the day with a short 1 km pilgrimage hike to Mebartsho – the Burning Lake – where the revered 15th-century treasure-discoverer Pema Lingpa is said to have plunged into the river holding a burning butter lamp and emerged with sacred relics submerged by Guru Rinpoche centuries before, the lamp still miraculously alight.",
          "The site remains one of the most spiritually charged pilgrimage destinations in Bumthang, adorned with prayer flags, butter lamp offerings, and the quiet reverence of Bhutanese devotees. Overnight Bumthang.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Trek Day 1 – Trongsa to Kasiphey Monastery Camp | 14.4 km · 5–6 Hours · 3,050m",
        details: [
          "Transfer by vehicle on a 2-hour scenic drive to Trongsa – passing the commanding Trongsa Dzong on its forested ridge above the Mangde Chhu gorge – where the trekking crew, pack animals, and camp equipment are assembled for the handover of luggage and the formal beginning of the wilderness phase of the Happiness Trek.",
          "The first trekking stage begins with a gradual ascent through dense oak and mixed temperate forest, where filtered light falls through ancient canopy and the sounds of the valley below fade into birdsong and the crunch of trail underfoot.",
          "The trail climbs steadily to Dhemlay La Pass at approximately 3,050m – a high-altitude threshold where the landscape opens dramatically and a breathtaking panoramic view of the remote Nubchutey region unfolds across a wide arc of Bhutanese highland terrain.",
          "After crossing the pass, the trail descends to the first campsite, positioned just below Kasiphey Monastery – a serene monastic institution founded in 1999 by Gangtey Tulku Rinpoche, home to over 50 young monks immersed in Buddhist studies, debate, and daily practice in one of central Bhutan's most remote settings.",
          "Your trekking crew will have camp fully prepared on arrival: tents, dining shelter, and a hot cooked meal waiting as the temperature drops and the monastery's evening prayers drift quietly across the meadow.",
          "Trek details: 14.4 km · 5–6 hours · Elevation gain 485m. Overnight Kasiphey Monastery Camp (3,050m).",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Trek Day 2 – Kasiphey to Drongthang Village | 14.4 km · 4–5 Hours · 2,590m",
        details: [
          "Descend from the pass toward the Mangdi Chu River – the central artery of this trek – following a trail that winds through terraced farmland and past ancient Bhutanese farmhouses whose wooden shutters and painted mud walls have looked down on this valley floor for centuries.",
          "The gentle rhythm of flowing water, birdsong, and rustling forest accompanies the route as it follows the valley floor, ascending gently past an ancient stone chorten before climbing to the remote village of Drongthang at 2,590 meters.",
          "Drongthang carries deep spiritual significance: it is believed to mark the site where the Bodhisattva Gyalpo Drimed Kuenden journeyed from India as early as the 3rd century and established a temple in this hidden valley – making it one of the oldest spiritually recognized sites on the entire trekking route.",
          "The surrounding forest is home to the takin – Bhutan's extraordinary national animal – which roams these highland slopes in small groups and may be encountered on quieter sections of the trail.",
          "Settle into camp and spend the early evening with the village headman and elders, gaining a rare, unhurried insight into the traditions, beliefs, and daily rhythms of one of central Bhutan's most remote farming communities.",
          "Trek details: 14.4 km · 4–5 hours · Elevation gain 300m · Elevation loss 360m. Overnight Drongthang Village Camp (2,590m).",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Day Hike to Mangdiphu – Bhutan's Hidden Shangri-La, Farm Activities, Ara Moonshine Tasting & Village Folk Dance Celebration",
        details: [
          "Today's hike leads into one of the most extraordinary hidden corners of the entire Happiness Trek: Mangdiphu – a secret Baeyul (hidden Shangri-La) in the upper reaches of the Mangdi Chu River, consisting of just four traditional farmhouses and believed to be the last inhabited settlement upstream, untouched by roads, electricity, or modernity.",
          "The trail meanders through whispering pine forest, emerald highland meadows, and gently cascading streams, with dark rocky peaks embracing the valley on all sides – an atmosphere of profound natural and spiritual seclusion unlike anything encountered elsewhere on the route.",
          "Enjoy lunch at Mangdiphu alongside immersive farm activities: milking cows by hand, churning butter in wooden barrels, and pressing farmhouse cheese – learning the ancient, labor-intensive food practices that have sustained these highland communities across centuries of self-sufficient mountain life.",
          "Hike back to Drongthang in the afternoon and visit a traditional farmhouse to learn the centuries-old process of brewing Ara – Bhutan's traditional grain-based moonshine – with the option to sample a warm glass by the hearth as the family shares stories of valley life.",
          "As twilight settles over Drongthang, the village gathers in honor of their guests: flickering butter lamps illuminate a courtyard where traditional folk dances are performed under the full Himalayan sky, the music and laughter building to a shared feast of stories, ara, and the particular joy of being made genuinely welcome in a place that receives very few visitors.",
          "Overnight Drongthang Village Camp.",
        ],
      },
      {
        day: 7,
        date: "Day 7",
        title:
          "Trek Day 3 – Drongthang to Bemji Nagtshang Historic Manor | 16 km · 4–5 Hours",
        details: [
          "Depart Drongthang on a trail that descends gently toward the Mangdi Chu River, passing through quiet hamlets, stone-walled field boundaries, and ancient terraced farmland – a landscape where the timeless rhythms of rural Bhutanese life play out in full view: farmers tending crops, prayer flags animated by valley wind, and the river carving its way south through the gorge below.",
          "The route follows the river for a comfortable stretch before ascending gradually to Bemji – a historically significant village whose most remarkable landmark is Bemji Nagtshang, an ancient manor house that served as the ancestral home of Bhutan's past temporal rulers and as the hereditary seat of descendants of the revered Gyalsey Tenzin Rabgyal lineage, closely connected to the Gangtey Tulku reincarnate lama tradition.",
          "Camp is set up in the schoolyard of Bemji's small community school – a position of sweeping views across the village and valley, offering one of the most atmospheric overnight settings of the entire trek.",
          "If the school is in session, the children of Bemji gather in the early evening to perform traditional Bhutanese songs – a spontaneous, genuinely moving performance of the kind that no amount of itinerary-planning can replicate and that travelers remember for the rest of their lives.",
          "Trek details: 16 km · 4–5 hours · Elevation loss 90m. Overnight Bemji Nagtshang Village Camp.",
        ],
      },
      {
        day: 8,
        date: "Day 8",
        title:
          "Trek Day 4 (Final) – Bemji to Bjizam Village & Drive to Phobjikha Valley via Pele La Pass (3,353m)",
        details: [
          "Begin the final trekking morning with an optional visit to the school's morning assembly – one of the most quietly moving experiences on the entire Happiness Trek: students standing in rows singing the Bhutanese national anthem, followed by a collective meditation session, before the school day begins in classrooms lined with hand-painted educational murals.",
          "The final descent follows the Mangdi Chu River to its crossing point, where the trail winds along the mountainside above the opposite bank before reaching the village of Bjizam – a moment of genuine triumph as the awaiting vehicle marks the end of four days of remote trekking through central Bhutan's most rarely visited valleys.",
          "Celebrate the trekking achievement with a scenic picnic lunch prepared by the camp kitchen crew before bidding a heartfelt Tashi Delek farewell to the trekking team – the cooks, handlers, and camp staff whose expertise and warmth have made wilderness comfort possible in one of Bhutan's most remote regions.",
          "Board the vehicle and drive toward Phobjikha Valley, crossing Pele La Pass at 3,353 meters (11,000 ft) – where prayer flags flutter against a wide Himalayan sky and the road descends into the cooler, open plateau of the western highlands.",
          "Arrive in Phobjikha Valley by evening and check in to your hotel or guesthouse. Overnight Phobjikha Valley.",
        ],
      },
      {
        day: 9,
        date: "Day 9",
        title:
          "Phobjikha Valley – Black-Necked Crane Centre, Gangtey Monastery & Panoramic Nature Trail",
        details: [
          "Spend a full rest and exploration day in Phobjikha – a wide, open glacial valley of ethereal beauty and extraordinary ecological importance, designated as a protected conservation area managed by the Royal Society for the Protection of Nature (RSPN) in partnership with WWF.",
          "Visit the Black-Necked Crane Information Centre to learn about the endangered Black-Necked Crane (Grus nigricollis), which migrates annually from the Tibetan Plateau to spend the winter in Phobjikha's marshy wetlands – a bird deeply revered in Bhutanese culture and believed to perform a ceremonial circling ritual over Gangtey Monastery upon arrival and departure each season.",
          "Visit Gangtey Monastery (Gangtey Gonpa) – a magnificent 17th-century Nyingmapa monastery perched on a forested knoll above the valley floor, one of the most important centers of the Nyingma Buddhist lineage in Bhutan, its ancient prayer halls and butter lamp shrines offering a deep sense of living spiritual continuity.",
          "Follow the optional Gangtey Nature Trail along the valley ridge (approximately 2.99 km · ~1.5 hours easy) through fragrant silver fir and pine forest, with panoramic views of the wetland below and – in season – the sight of black-necked cranes gliding gracefully over the marsh in the golden afternoon light.",
          "Spend the evening in quiet reflection, allowing the preceding four days of remote trekking to settle into the kind of deep, unhurried contentment that Bhutan's landscapes tend to produce. Overnight Phobjikha Valley.",
        ],
      },
      {
        day: 10,
        date: "Day 10",
        title:
          "Phobjikha to Punakha via Lawala Pass – Punakha Dzong & Khamsum Yulley Namgyal Chorten Hike",
        details: [
          "Depart Phobjikha and begin the 85 km descent of 1,830 meters from Lawala Pass through increasingly subtropical forest and river valleys, arriving in the warm, fertile Punakha Valley – once Bhutan's royal capital and still the winter residence of the Central Monk Body.",
          "After lunch, visit Punakha Dzong – built in 1637 by Zhabdrung Ngawang Namgyal at the precise confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River) – an architectural masterpiece housing sacred relics and the spiritual legacy of Bhutan's unification, and still the venue of the kingdom's grandest festivals: Punakha Drubchen and Punakha Tshechu.",
          "In the afternoon, complete a 3.5 km hike through rice fields and pine forest to Khamsum Yulley Namgyal Chorten – a four-storey hilltop temple commissioned by Her Majesty the Royal Queen Mother and built over nine years for the peace and prosperity of Bhutan – whose rooftop offers sweeping panoramic views of the Mo Chhu River, rice terraces, and the surrounding Himalayan foothills.",
          "Return to Punakha for dinner and a well-earned rest in the warmth of the valley. Overnight Punakha.",
        ],
      },
      {
        day: 11,
        date: "Day 11",
        title:
          "Punakha to Thimphu via Dochula Pass & Chimi Lhakhang – Capital City Arrival & Free Afternoon",
        details: [
          "Depart Punakha and ascend to Dochula Pass at 3,100 meters, where the 108 Druk Wangyal Chortens stand against a panoramic Eastern Himalayan skyline – on clear days including Gangkar Puensum (7,570m), the world's highest unclimbed peak – one of the most iconic high-altitude viewpoints in all of Bhutan.",
          "Before descending toward Thimphu, make a short detour for a 1.5 km walk through golden paddy fields to Chimi Lhakhang – the beloved Fertility Temple built in the 15th century by disciples of the 'Divine Madman' Lama Drukpa Kuenley – a pilgrimage site drawing couples from across Bhutan seeking blessings for children, reached through some of the valley's most picturesque farmland.",
          "Arrive in Thimphu at 2,320 meters by early afternoon and enjoy the first taste of Bhutan's charming, unhurried capital – a city unlike any other, where traditional Bhutanese architecture codes govern every building and the national sport is archery.",
          "Spend the free afternoon on a self-guided stroll along Norzin Lam lined with handicraft stores, thangka galleries, and local cafés; visit the Centenary Farmers Market; and stop at Clock Tower Square for butter tea and momos in the company of Thimphu locals.",
          "Overnight Thimphu.",
        ],
      },
      {
        day: 12,
        date: "Day 12",
        title:
          "Thimphu Sightseeing – Weekend Market, Weaving Centre, Takin Preserve & Scenic Drive to Paro",
        details: [
          "If visiting on a weekend, begin at Thimphu's vibrant weekly market – where farmers and artisans from surrounding valleys gather to sell seasonal produce, handmade textiles, hand-carved wooden masks, medicinal herbs, and traditional crafts – one of the most authentic and visually rich public spaces in Bhutan.",
          "Visit the Green Weaving Centre and National Textile Museum to discover Bhutan's extraordinary weaving heritage – a living tradition in which intricate patterns carry encoded messages of identity, region, and social standing, and where master weavers still produce cloth on hand-operated looms using techniques unchanged for centuries.",
          "Tour the Traditional Handmade Paper Factory where Deh-sho paper is crafted from the bark of the Daphne tree and dried herbs – a 15th-century technique producing some of the most durable natural paper in the world – followed by the Archery Grounds, where Bhutan's national sport unfolds with a particular blend of extraordinary skill and theatrical banter.",
          "Visit the Motithang Takin Preserve at 2,600m to see Bhutan's extraordinary national animal – the takin, a unique bovid found only in the Eastern Himalayan region and connected in Bhutanese mythology to the Divine Madman who allegedly created the creature by combining a goat skull with a cow's body.",
          "In the late afternoon, embark on the 2-hour scenic drive to Paro – winding through pine forest, terraced farmland, and traditional villages before arriving to sweeping views of Rinpung Dzong and the Pa Chu River in the valley below. Overnight Paro.",
        ],
      },
      {
        day: 13,
        date: "Day 13",
        title:
          "Tiger's Nest Hike – Paro Taktsang Monastery at 3,120m, Kyichu Lhakhang & Farewell Dinner",
        details: [
          "Begin Bhutan's most iconic and spiritually significant hike with an early start: Paro Taktsang – the Tiger's Nest Monastery – clings to a sheer granite cliff at 3,120 meters above the Paro Valley floor, the single most revered sacred site in Bhutan and one of the most dramatic religious landmarks on earth, founded in 747 CE when Guru Rinpoche is said to have arrived on a flying tigress to subdue evil spirits before establishing Buddhism across the Himalayan kingdoms.",
          "The trail ascends through fragrant blue pine forest and prayer-flag corridors for approximately 2–3 hours, reaching the Taktsang Cafeteria viewpoint at 2,800m – one of the finest photography positions in all of Bhutan – before the final climb across a suspension bridge above a dramatic waterfall gorge to the monastery entrance.",
          "Explore the monastery's interconnected sacred temples, meditation caves, and thangka-hung shrines in a round trip of approximately 13.2 km over 5–6 hours – a fitting physical and spiritual culmination for a group that has trekked 56 km through central Bhutan's most remote valleys over the preceding days.",
          "In the afternoon, visit Kyichu Lhakhang at 2,250m – one of Bhutan's oldest temples, built in 659 CE by Tibetan Emperor Songtsen Gampo as part of his 108-temple campaign – its two shrines representing seven centuries of active devotion and remaining among the most atmospherically intimate sacred spaces in the Paro Valley.",
          "Optionally, end the afternoon with a traditional Bhutanese hot stone bath (menchu) – heated river stones lowered into a wooden tub of mineral-rich water – a centuries-old restorative ritual that eases tired muscles and marks the journey's end with appropriate ceremony.",
          "The evening is marked by a special farewell dinner celebrating 14 extraordinary days through the heart of Bhutan – a meal of traditional cuisine shared with the guide and celebrating the memories, landscapes, and human connections that have defined this remarkable journey. Overnight Paro.",
        ],
      },
      {
        day: 14,
        date: "Day 14",
        title:
          "Departure from Paro International Airport – Tashi Delek, Bhutan",
        details: [
          "Rise for a final Bhutanese morning – perhaps a last walk through Paro's painted-shopfront main street, a final cup of butter tea, or simply a quiet moment in the valley as the peaks of the Himalayan range catch the early light above the ridgeline.",
          "Your guide and driver accompany you to Paro International Airport (PBH), offering heartfelt farewells and traditional white scarves as blessings for safe and happy travels – the same warmth of Bhutanese hospitality that has accompanied every step of the past 14 days.",
          "Board your flight for one final glimpse of Bhutan's rolling pine-covered hills and snow-capped Himalayan peaks through the aircraft window – the Land of the Thunder Dragon receding below, carrying the quiet certainty that it will welcome you back.",
          "Tashi Delek – may the path ahead be filled with happiness, peace, and endless discovery.",
        ],
      },
    ],

    inclusions: [
      "All meals daily (hotels, guesthouses, homestays & full camp kitchen catering)",
      "Daily mineral water throughout the tour and trek",
      "Bhutan Sustainable Development Fee (SDF)",
      "Expert English-speaking licensed Bhutanese trek guide (Indruka Tours and Travels)",
      "Experienced trekking crew – cook, kitchen assistant, and camp staff",
      "Full camping equipment (sleeping tents, dining tent, kitchen tent, toilet tent)",
      "Pack animals for luggage transport on all trekking days",
      "Domestic flight – Paro/Thimphu to Bumthang (included, weather permitting)",
      "Hotel, guesthouse & homestay accommodation as per itinerary",
      "Comfortable private vehicles with experienced drivers (non-trekking days)",
      "All monument and monastery entrance fees as per itinerary",
      "Traditional Ara moonshine tasting in Drongthang village",
      "Hands-on farm activities at Mangdiphu (butter churning, cheese making, cow milking)",
      "Folk dance evening with Drongthang village community",
    ],

    exclusions: [
      "International airfare",
      "Personal trekking gear, clothing, and footwear",
      "Personal shopping and souvenirs",
      "Gratuities for guide, driver, and trekking crew",
      "Travel insurance (trekking cover strongly recommended)",
      "Laundry services",
      "Alcoholic beverages beyond cultural tastings included in the program",
      "Traditional hot stone bath at Tiger's Nest day (optional extra)",
      "Any activities explicitly marked as optional",
    ],

    tourDetails: [
      { label: "Tour Duration", value: "14 Days / 13 Nights" },
      {
        label: "Destinations Covered",
        value:
          "Paro · Bumthang · Trongsa · Kasiphey · Drongthang · Mangdiphu · Bemji · Phobjikha · Punakha · Thimphu",
      },
      {
        label: "Departure & Return Airport",
        value:
          "Paro International Airport (PBH) → Paro International Airport (PBH)",
      },
      { label: "Tour Code", value: "BHU-HT-PBH-14" },
      {
        label: "Meals Included",
        value:
          "All meals daily – full board throughout hotel nights, guesthouses, homestays & trekking camps",
      },
      {
        label: "Best Time to Visit",
        value: "All year round (optimal: March–May & September–November)",
      },
      { label: "Group Size", value: "Small Group – Max 12 Guests" },
      { label: "Tour Type", value: "Trekking, Cultural & Village Immersion" },
      { label: "Trekking Grade", value: "Easy to Moderate" },
      {
        label: "Daily Trek Distance",
        value: "8–16 km per trekking day (56 km total over 4 trekking days)",
      },
      { label: "Maximum Altitude", value: "3,353m – Pele La Pass (Day 8)" },
      { label: "Tour Operator", value: "Indruka Tours and Travels" },
      {
        label: "Accommodation Types",
        value: "Hotels · Guesthouses · Homestays · Signature Camping",
      },
      {
        label: "Domestic Flight",
        value: "Paro/Thimphu → Bumthang (included, weather permitting)",
      },
    ],
  },
  {
    id: 525,
    country: "Bhutan",
    place: "Phuentsholing",
    title:
      "From Historical to Modern Day Bhutan – 6 Days Phuentsholing · Thimphu · Paro Cultural Tour",
    type: "family",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Phuentsholing → Thimphu → Paro → Phuentsholing → NJP / IXB",
    destinations: ["Phuentsholing", "Thimphu", "Paro"],
    amenities: ["Hotels", "Meals", "Cab Transfer", "Sightseeing"],
    price: 1599,
    priceRegional: 85000,
    oldPrice: 1833,
    discount: "10% OFF",
    currency: "INR",
    rating: 4.7,
    reviews: 31,
    badge: "Cultural",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/darjeeling11.jpg",
    popular: true,

    seoMeta: {
      slug: "bhutan-tour-phuentsholing-thimphu-paro-6-days-historical-cultural",
      metaTitle:
        "Bhutan Tour from Phuentsholing | 6 Days | Phuentsholing · Thimphu · Paro Cultural Tour",
      metaDescription:
        "Explore Bhutan in 6 days on a cultural journey from Phuentsholing through Thimphu to Paro. Visit Tashichho Dzong, Buddha Dordenma, Rinpung Dzong, Drukgyel Dzong ruins & Kyichu Lhakhang. Ideal Bhutan tour from NJP / IXB. 10% discount available.",
      canonicalUrl:
        "https://indrukatours.com/view-details/bhutan-tour-phuentsholing-thimphu-paro-6-days-historical-cultural",
      keywords: [
        "Bhutan tour from Phuentsholing",
        "Bhutan tour package from NJP",
        "Phuentsholing Thimphu Paro tour",
        "Bhutan cultural tour 6 days",
        "Tashichho Dzong Thimphu",
        "Drukgyel Dzong Paro",
        "Kyichu Lhakhang Paro",
        "Bhutan tour from Siliguri",
        "Bhutan land tour package",
        "Australia to Bhutan",
        "New South Wales to Bhutan",
        "Queensland to Bhutan",
        "Victoria to Bhutan",
        "Western Australia to Bhutan",
        "Sydney to Bhutan",
        "Melbourne to Bhutan",
        "Brisbane to Bhutan",
        "how to go to Bhutan from Australia",
        "Bhutan travel from Australia",
        "Bhutan trip from Sydney",
        "can I travel to Bhutan from Australia",
        "Bhutan visa from Australia",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Australia",
        "Bhutan 11 day tour from Australia",
        "Tiger's Nest trek from Australia",
        "best Bhutan tour from Sydney",
        "Bhutan holiday package Australia",
        "Bhutan travel package 11 days",
        "India to Bhutan",
        "West Bengal to Bhutan",
        "Delhi to Bhutan",
        "Maharashtra to Bhutan",
        "South India to Bhutan",
        "Kolkata to Bhutan",
        "Delhi to Bhutan",
        "Mumbai to Bhutan",
        "how to go to Bhutan from India",
        "Bhutan travel from India",
        "Bhutan trip from Kolkata",
        "can I travel to Bhutan from India",
        "Bhutan visa from India",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package India",
        "Bhutan 11 day tour from India",
        "Tiger's Nest trek from India",
        "best Bhutan tour from Kolkata",
        "Bhutan holiday package India",
        "Bhutan travel package 11 days",
        "England to Bhutan",
        "UK to Bhutan",
        "United Kingdom to Bhutan",
        "Britain to Bhutan",
        "Scotland to Bhutan",
        "Wales to Bhutan",
        "London to Bhutan",
        "Manchester to Bhutan",
        "Edinburgh to Bhutan",
        "how to go to Bhutan from England",
        "Bhutan travel from England",
        "Bhutan trip from London",
        "can I travel to Bhutan from England",
        "Bhutan visa from England",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package ,England",
        "Bhutan 11 day tour from England",
        "Tiger's Nest trek from England",
        "best Bhutan tour from London",
        "Bhutan holiday package England",
        "Bhutan travel package 11 days",
        "USA to Bhutan",
        "United States to Bhutan",
        "America to Bhutan",
        "California to Bhutan",
        "New York to Bhutan",
        "New York to Bhutan",
        "Los Angeles to Bhutan",
        "San Francisco to Bhutan",
        "how to go to Bhutan from USA",
        "Bhutan travel from USA",
        "Bhutan trip from New York",
        "can I travel to Bhutan from USA",
        "Bhutan visa from USA",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package USA",
        "Bhutan 11 day tour from USA",
        "Tiger's Nest trek from USA",
        "best Bhutan tour from New York",
        "Bhutan holiday package USA",
        "Bhutan travel package 11 days",
        "Thailand to Bhutan",
        "Bangkok to Bhutan",
        "Chiang Mai to Bhutan",
        "Phuket to Bhutan",
        "how to go to Bhutan from Thailand",
        "Bhutan travel from Thailand",
        "Bhutan trip from Bangkok",
        "can I travel to Bhutan from Thailand",
        "Bhutan visa from Thailand",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Thailand",
        "Bhutan 11 day tour from Thailand",
        "Tiger's Nest trek from Thailand",
        "best Bhutan tour from Bangkok",
        "Bhutan holiday package Thailand",
        "Bhutan travel package 11 days",
        "Singapore to Bhutan",
        "Singapore to Bhutan",
        "how to go to Bhutan from Singapore",
        "Bhutan travel from Singapore",
        "Bhutan trip from Singapore",
        "can I travel to Bhutan from Singapore",
        "Bhutan visa from Singapore",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Singapore",
        "Bhutan 11 day tour from Singapore",
        "Tiger's Nest trek from Singapore",
        "best Bhutan tour from Singapore",
        "Bhutan holiday package Singapore",
        "Bhutan travel package 11 days",
        "Germany to Bhutan",
        "Deutschland to Bhutan",
        "Bavaria to Bhutan",
        "Berlin to Bhutan",
        "Munich to Bhutan",
        "Frankfurt to Bhutan",
        "how to go to Bhutan from Germany",
        "Bhutan travel from Germany",
        "Bhutan trip from Berlin",
        "can I travel to Bhutan from Germany",
        "Bhutan visa from Germany",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package Germany",
        "Bhutan 11 day tour from Germany",
        "Tiger's Nest trek from Germany",
        "best Bhutan tour from Berlin",
        "Bhutan holiday package Germany",
        "Bhutan travel package 11 days",
        "France to Bhutan",
        "Paris to Bhutan",
        "Lyon to Bhutan",
        "Marseille to Bhutan",
        "how to go to Bhutan from France",
        "Bhutan travel from France",
        "Bhutan trip from Paris",
        "can I travel to Bhutan from France",
        "Bhutan visa from France",
        "Bhutan Tour Package with Haa Valley",
        "Bhutan tour package France",
        "Bhutan 11 day tour from France",
        "Tiger's Nest trek from France",
        "best Bhutan tour from Paris",
        "Bhutan holiday package France",
        "Bhutan travel package 11 days",
        "Japan to Bhutan",
        "Tokyo to Bhutan",
        "Osaka to Bhutan",
        "Kyoto to Bhutan",
        "how to go to Bhutan from Japan",
        "South Korea to Bhutan",
        "Korea to Bhutan",
        "Seoul to Bhutan",
        "Busan to Bhutan",
        "how to go to Bhutan from South Korea",
        "Bhutan travel from South Korea",
        "Bhutan trip from Seoul",
        "can I travel to Bhutan from South Korea",
        "Canada to Bhutan",
        "Toronto to Bhutan",
        "Vancouver to Bhutan",
        "Calgary to Bhutan",
        "how to go to Bhutan from Canada",
        "Bhutan travel from Canada",
        "Bhutan trip from Toronto",
        "can I travel to Bhutan from Canada",
        "Bhutan visa from Canada",
        "UAE to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "Dubai to Bhutan",
        "Abu Dhabi to Bhutan",
        "how to go to Bhutan from UAE",
        "Bhutan travel from UAE",
        "Bhutan trip from Dubai",
        "can I travel to Bhutan from UAE",
        "Bhutan visa from UAE",
        "Malaysia to Bhutan",
        "Kuala Lumpur to Bhutan",
        "Penang to Bhutan",
        "how to go to Bhutan from Malaysia",
        "Bhutan travel from Malaysia",
        "Bhutan trip from Kuala Lumpur",
        "can I travel to Bhutan from Malaysia",
        "Bhutan visa from Malaysia",
        "China to Bhutan",
        "Beijing to Bhutan",
        "Shanghai to Bhutan",
        "Guangzhou to Bhutan",
        "how to go to Bhutan from China",
        "Bhutan travel from China",
        "Bhutan trip from Beijing",
        "can I travel to Bhutan from China",
        "New Zealand to Bhutan",
        "Auckland to Bhutan",
        "Wellington to Bhutan",
        "Christchurch to Bhutan",
        "how to go to Bhutan from New Zealand",
        "Bhutan travel from New Zealand",
        "Bhutan trip from Auckland",
        "can I travel to Bhutan from New Zealand",

        "Italy to Bhutan",
        "Rome to Bhutan",
        "Milan to Bhutan",
        "how to go to Bhutan from Italy",
        "Bhutan travel from Italy",
        "Bhutan trip from Rome",
        "can I travel to Bhutan from Italy",
      ],
    },

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
          "Tashichho Dzong – Fortress of Buddhist Religion & Seat of the Bhutanese Government and Royal Throne Since 1952",
      },
      {
        title:
          "Buddha Dordenma (Kuensel Phodrang) – One of the World's Largest Buddha Statues Overlooking Thimphu Valley",
      },
      {
        title:
          "Ta Dzong & Rinpung Dzong – 450-Year-Old Fortresses Housing Bhutanese Antiquities & Living Monastic Communities",
      },
      {
        title:
          "Drukgyel Dzong – UNESCO-Recognized Historic Fortress Ruins & Primary Defence Site of the Paro Valley Until 1951",
      },
      {
        title:
          "Kyichu Lhakhang – One of Bhutan's Oldest Active Temples, Founded in 659 CE by Tibetan Emperor Songtsen Gampo",
      },
      {
        title:
          "Phuentsholing – Gateway City to Bhutan & Commercial Crossroads of the Indo-Bhutanese Border Region",
      },
    ],

    tourManagerCompany: "Indruka Tourism",

    heroImage: {
      src: "/thimphu4.jpg",
      alt: "Bhutan Cultural Tour from Phuentsholing – Tashichho Dzong Thimphu Whitewashed Fortress Along Wang Chhu River",
    },

    testimonials: [],

    thumbnails: [
      {
        id: 1,
        src: "/happiness-trek2.jpg",
        alt: "Rinpung Dzong Paro Bhutan – Fortress Monastery Above Paro Chhu River with Pine-Covered Mountain Backdrop",
      },
      {
        id: 2,
        src: "/happiness-trek3.jpg",
        alt: "Buddha Dordenma Thimphu Bhutan – Giant Gilded Buddha Statue at Kuensel Phodrang Overlooking Thimphu Valley",
      },
      {
        id: 3,
        src: "/happiness-trek4.jpg",
        alt: "Drukgyel Dzong Paro Bhutan – Historic UNESCO-Recognized Fortress Ruins in the Upper Paro Valley",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Bhutan Tours", href: "/bhutan" },
      { label: "Phuentsholing Tour Packages", href: "/bhutan/phuentsholing" },
      { label: "From Historical to Modern Day Bhutan – 6 Days" },
    ],

    badges: [
      { label: "CULTURAL", variant: "solid" as const, color: "orange" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
      { label: "10% OFF", variant: "solid" as const, color: "green" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 3,
    region: "Kingdom of Bhutan",
    maxGuests: 6,

    itineraryStops: [
      { city: "Phuentsholing", nights: 2 },
      { city: "Thimphu", nights: 1 },
      { city: "Paro", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title:
          "Arrive at Phuentsholing – Gateway to Bhutan, Check-in & Welcome Evening",
        details: [
          "Arrive at Phuentsholing – Bhutan's main land entry point from India and the commercial heart of the Indo-Bhutanese border region – where the vibrant frontier atmosphere of the town immediately signals the transition between two very different worlds.",
          "Be received at Phuentsholing by your Indruka Tourism representative, who will assist with hotel check-in and provide a briefing on the immigration and border permit procedures to be completed the following morning.",
          "Spend the evening exploring Phuentsholing's busy market streets, where Indian and Bhutanese traders, goods, and languages interweave in a lively commercial crossroads unlike anything encountered deeper in the kingdom.",
          "Overnight Phuentsholing.",
        ],
      },
      {
        day: 2,
        date: "Day 2",
        title:
          "Phuentsholing to Thimphu – Border Immigration, 176 km Scenic Drive & Tashichho Dzong",
        details: [
          "After a Bhutanese breakfast, complete immigration formalities at the Phuentsholing border crossing – your official entry into the Kingdom of Bhutan and the beginning of a journey into one of Asia's most carefully preserved cultural landscapes.",
          "Begin the approximately 176 km drive to Thimphu – Bhutan's capital at 2,350 meters above sea level – a 6-hour journey that ascends through deep subtropical river gorges, forested mountain switchbacks, and traditional farming villages before emerging into the wide, pine-ringed Thimphu Valley.",
          "The drive itself is an introduction to Bhutan: prayer flags on every ridge, dzongs on every hilltop, and a road that follows river valleys carved by snowmelt from peaks whose names appear in no atlas available outside the kingdom.",
          "Check in to your Thimphu hotel and, for those with energy remaining after the drive, make an optional early evening visit to Tashichho Dzong – the seat of Bhutan's royal government and central monastic body since 1952, its whitewashed walls and golden roofs glowing magnificently in the fading light along the Wang Chhu River.",
          "Overnight Thimphu.",
        ],
      },
      {
        day: 3,
        date: "Day 3",
        title:
          "Thimphu Sightseeing – Buddha Dordenma, Memorial Chorten, Folk Heritage Museum & Drive to Paro",
        details: [
          "Begin the morning at Kuensel Phodrang to visit the Buddha Dordenma – one of the largest and most photogenic Buddha statues in the world at 51.5 meters of gilded bronze – seated on a forested hilltop above the Thimphu Valley with sweeping panoramic views of the capital and surrounding ridgelines in every direction.",
          "Visit the National Memorial Chorten – a revered stupa built in 1974 in memory of Bhutan's Third King – where devoted locals gather throughout the day to circumambulate, spin prayer wheels, and perform morning rituals in an expression of living Buddhist faith that has continued uninterrupted for five decades.",
          "Explore the Folk Heritage Museum, a beautifully preserved traditional Bhutanese farmhouse where guided demonstrations, interactive exhibits, and documentary materials bring the full arc of Bhutanese rural domestic life across multiple generations vividly and accessibly to life.",
          "After the morning sightseeing, begin the scenic 65 km drive to Paro at 2,280 meters – approximately 2 hours along a winding mountain road through tall pine forest, riverside farmland, and traditional villages – arriving in the valley celebrated throughout Bhutan for its particularly elegant combination of natural beauty and architectural heritage.",
          "Overnight Paro.",
        ],
      },
      {
        day: 4,
        date: "Day 4",
        title:
          "Paro Sightseeing – Ta Dzong National Museum, Rinpung Dzong, Drukgyel Dzong Ruins & Kyichu Lhakhang",
        details: [
          "Begin the full Paro sightseeing day at Ta Dzong – the National Museum of Bhutan – a striking circular watchtower originally built approximately four and a half centuries ago to defend Paro Dzong against Tibetan invasions, its galleries now housing a priceless collection of Bhutanese thangkas, royal artefacts, ceremonial weapons, natural history specimens, and sacred objects spanning fourteen centuries of cultural continuity, having survived a major earthquake in 2011 with its collections intact.",
          "Descend to the majestic Rinpung Dzong – 'Fortress on a Heap of Jewels' – built in 1646 by Zhabdrung Ngawang Namgyal and still functioning as both the religious and administrative headquarters of Paro District, its whitewashed walls, wooden cantilever bridges over the Paro Chhu, and serene mountain backdrop creating an atmosphere of spiritual splendour that travelers consistently describe as among the most powerful experiences in Bhutan.",
          "Drive up the valley to Drukgyel Dzong – a UNESCO World Heritage-recognized historic fortress built in 1649 to commemorate Bhutan's victory over a Tibetan invasion, which served as the valley's primary defensive stronghold until it was tragically destroyed by accidental fire in 1951.",
          "Though now evocative ruins, Drukgyel Dzong continues to speak powerfully of Bhutan's history of independence and resistance – its broken walls framing views of the Paro Valley and, on the clearest days, the sacred peak of Jomolhari (7,326m) on the horizon.",
          "Complete the day at Kyichu Lhakhang – one of Bhutan's oldest and most intimately beautiful temples, built in 659 CE by Tibetan Emperor Songtsen Gampo as part of his 108-temple campaign to pin down a demoness obstructing the establishment of Buddhism across the Himalayan region – its two shrines representing fourteen centuries of active, unbroken devotion.",
          "Return to Paro for dinner and overnight.",
        ],
      },
      {
        day: 5,
        date: "Day 5",
        title:
          "Paro to Phuentsholing – 200 km Scenic Return Drive & Evening Market Exploration",
        details: [
          "After breakfast and hotel check-out, begin the return journey of approximately 200 km from the Paro Valley back down to Phuentsholing – a 7-hour scenic drive that retraces the route through mountain switchbacks, subtropical river gorges, and the gradually warming lowland terrain of the Indo-Bhutanese border region.",
          "The descending drive offers a distinct perspective on the landscapes traversed on the way up: the pine forests thinning into tropical broadleaf, the air warming perceptibly as altitude drops, and the architecture transitioning from traditional painted Bhutanese dzong-style to the commercial frontier streetscape of the border town.",
          "Upon arrival in Phuentsholing, spend the evening at leisure browsing the local market – a lively commercial space where Bhutanese crafts, textiles, traditional medicines, and border-trade goods make for a colorful and affordable final opportunity to find souvenirs and gifts.",
          "Overnight Phuentsholing.",
        ],
      },
      {
        day: 6,
        date: "Day 6",
        title:
          "Departure from Phuentsholing – Journey to NJP / IXB & Farewell to Bhutan",
        details: [
          "Enjoy a final breakfast in Phuentsholing, taking a quiet moment to reflect on six days in one of Asia's most extraordinary cultural kingdoms – the gilded rooftops of Tashichho Dzong, the broken silhouette of Drukgyel Dzong against the mountain sky, and the ancient serenity of Kyichu Lhakhang's butter-lamp-lit shrines.",
          "Complete final check-out before your Indruka Tourism representative arranges the transfer to New Jalpaiguri Railway Station (NJP) or Bagdogra Airport (IXB), bidding a heartfelt farewell and offering blessings for safe travels onward.",
          "The journey is a chance to rewind and relive every memory gathered across five nights in the Kingdom of Happiness – a country that has chosen meaning over speed, happiness over growth, and cultural heritage over unchecked development.",
        ],
      },
    ],

    inclusions: [
      "Accommodation in base category hotel rooms (twin-sharing basis)",
      "Meals on MAP basis – breakfast and dinner daily throughout",
      "One non-AC cab for arrival, departure, and all sightseeing transfers",
      "Porterage at hotels",
      "All applicable luxury tax and road tax",
      "Bhutan Innerline Permit (immigration documentation)",
    ],

    exclusions: [
      "Lunch throughout the tour",
      "Personal shopping and souvenirs",
      "Gratuities for guide and driver",
      "Travel insurance",
      "Laundry services",
      "Alcoholic beverages and personal beverages",
      "Entry tickets and monument fees not mentioned in the itinerary",
      "Any expenses arising from natural calamity, roadblock, or unforeseen circumstances",
    ],

    tourDetails: [
      { label: "Tour Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations Covered",
        value: "Phuentsholing · Thimphu · Paro",
      },
      {
        label: "Departure & Return",
        value: "Phuentsholing (Entry) → NJP / IXB (Exit)",
      },
      { label: "Tour Code", value: "BHU-HMB-PHU-06" },
      {
        label: "Meals Included",
        value: "MAP basis – breakfast and dinner daily",
      },
      {
        label: "Best Time to Visit",
        value: "March–May (Spring) & September–November (Autumn)",
      },
      { label: "Transport", value: "Private non-AC cab throughout" },
      { label: "Tour Type", value: "Cultural & Heritage" },
      { label: "Tour Operator", value: "Indruka Tourism" },
      {
        label: "Special Offer",
        value: "10% discount – ₹2,100 per person (regular price ₹2,333)",
      },
    ],
  },
  
];
