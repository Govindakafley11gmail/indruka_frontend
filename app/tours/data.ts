import {
  Building2,
  UtensilsCrossed,
  Helicopter,
  Camera,
  Bus,
  Plane,
  Fish,
  Car,
  Waves,
  Bike,
  Heart,
  Leaf,
  Mountain,
  Tent,
  Train,
  Crown,
  Sailboat,
  Landmark,
  Home,
} from "lucide-react";

export const indiaTours = [
  // ─── INDIA ────────────────────────────────────────────────
  {
    id: 1,
    country: "India",
    place: "Uttarakhand",
    title: "Char Dham Yatra By Helicopter",
    type: "Religious yatras",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Dehradun → Dehradun",
    destinations: ["Gangotri", "Yamunotri", "Kedarnath", "Badrinath"],
    amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
    price: 230000,
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    mode: "Helicopter",
    src: "/chardham.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: "Helicopter",
        label: "Helicopter",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
    ],

    tourHighlights: [
      { title: "Yamunotri Temple Darshan" },
      { title: "Gangotri Temple & Bhagirathi River Views" },
      { title: "Kedarnath Temple VIP Darshan" },
      { title: "Badrinath Temple & Tapt Kund" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/chardham1.jpg",
      alt: "Char Dham Yatra By Helicopter — Uttarakhand",
    },

    testimonials: [
      {
        id: 1,
        text: "Planning our Chardham Yatra was stressing me out until we chose Indruka Trips and Trip. It was a very perfect family bonding and the best experience.",
        author: "Rakesh Sharma",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Me along with my family hired Indruka Trips and Trip for our Badrinath Tour. After completing the tour, we saw they kept all their commitments. Definitely I will suggest everyone to hire them.",
        author: "Manoj Patel",
        date: "Travelled Jun 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
            src: "/chardham2.jpg",
        alt: "Char Dham Yatra Helicopter",
      },
      {
        id: 2,
            src: "/chardham3.jpg",
        alt: "Kedarnath by Helicopter",
      },
      {
        id: 3,
            src: "/chardham4.jpg",
        alt: "Badrinath by Helicopter",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Char Dham Yatra By Helicopter" },
    ],

    badges: [
      { label: "BESTSELLER", variant: "solid" as const, color: "amber" },
      { label: "HELICOPTER TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Dehradun", nights: 1 },
      { city: "Yamunotri / Kharsali", nights: 1 },
      { city: "Gangotri / Harsil", nights: 1 },
      { city: "Kedarnath / Guptkashi", nights: 1 },
      { city: "Badrinath", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Dehradun",
        details: [
          "Arrive at Dehradun. Transfer to hotel. Welcome briefing, overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Dehradun → Kharsali → Yamunotri",
        details: [
          "Fly to Kharsali helipad. Visit Yamunotri Temple, Surya Kund hot springs, and Divya Shila. Return to overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kharsali → Harsil → Gangotri",
        details: [
          "Fly to Harsil. Visit Gangotri Temple dedicated to Goddess Ganga. View Bhagirath Shila. Overnight at Harsil."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Harsil → Guptkashi → Kedarnath",
        details: [
          "Fly to Sersi/Guptkashi helipad. Visit Kedarnath Temple and Adi Shankaracharya Samadhi. VIP Darshan arranged. Overnight at Guptkashi."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Guptkashi → Badrinath",
        details: [
          "Fly to Badrinath. Visit Badrinath Temple, Tapt Kund, Mana Village (last village before Tibet). Overnight at Badrinath."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Badrinath → Dehradun — Departure",
        details: [
          "Morning Aarti at Badrinath Temple. Fly back to Sahastradhara Helipad, Dehradun. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Yamunotri · Gangotri · Kedarnath · Badrinath",
      },
      { label: "Departure & Return", value: "Sahastradhara Helipad, Dehradun" },
      { label: "Tour Code", value: "CDH-HELI-DEH-26" },
      { label: "Meals", value: "All meals included (vegetarian)" },
      { label: "Best Time", value: "May–June & September–October" },
      { label: "Group Size", value: "Customised — 2 to 10+ passengers" },
    ],

    onViewItinerary: () => {},
  },
  {
    id: 2,
    country: "India",
    place: "Uttarakhand",
    title: "Chardham Yatra Package from Delhi",
    type: "Religious yatras",
    duration: "11 Days / 12 Nights",
    durationTag: "12 Days",
    startEnd: "Delhi → Badrinath",
    destinations: ["Gangotri", "Yamunotri", "Kedarnath", "Badrinath"],
    amenities: ["Hotel", "Meals", "Transfers", "Kumbh Snan"],
    price: 43900,
    rating: 4.9,
    reviews: 428,
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    mode: "Road",
    src: "/badrinath1.jpg",
    popular: true,
    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: "Helicopter",
        label: "Helicopter",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
    ],

    tourHighlights: [
      { title: "Yamunotri Temple Darshan" },
      { title: "Gangotri Temple & Bhagirathi River Views" },
      { title: "Kedarnath Temple VIP Darshan" },
      { title: "Badrinath Temple & Tapt Kund" },
      { title: "Badrinath Temple & Tapt Kund" },

      { title: "Badrinath Temple & Tapt Kund" },
      { title: "Badrinath Temple & Tapt Kund" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
       src: "/badrinath2.jpg",

      alt: "Char Dham Yatra By Helicopter — Uttarakhand",
    },

    testimonials: [
      {
        id: 1,
        text: "Planning our Chardham Yatra was stressing me out until we chose Indruka Trips and Trip. It was a very perfect family bonding and the best experience.",
        author: "Rakesh Sharma",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Me along with my family hired Indruka Trips and Trip for our Badrinath Tour. After completing the tour, we saw they kept all their commitments. Definitely I will suggest everyone to hire them.",
        author: "Manoj Patel",
        date: "Travelled Jun 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
    src: "/badrinath3.jpg",
        alt: "Char Dham Yatra Helicopter",
      },
      {
        id: 2,
    src: "/badrinath4.jpg",
        alt: "Kedarnath by Helicopter",
      },
      {
        id: 1,
    src: "/badrinath5.jpg",
        alt: "Char Dham Yatra Helicopter",
      },
      {
        id: 2,
    src: "/badrinath6.jpg",
        alt: "Kedarnath by Helicopter",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Char Dham Yatra By Helicopter" },
    ],

    badges: [
      { label: "BESTSELLER", variant: "solid" as const, color: "blue" },
      { label: "HELICOPTER TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Dehradun", nights: 1 },
      { city: "Yamunotri / Kharsali", nights: 1 },
      { city: "Gangotri / Harsil", nights: 1 },
      { city: "Kedarnath / Guptkashi", nights: 1 },
      { city: "Badrinath", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Dehradun",
        details: [
          "Arrive at Dehradun. Transfer to hotel. Welcome briefing, overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Dehradun → Kharsali → Yamunotri",
        details: [
          "Fly to Kharsali helipad. Visit Yamunotri Temple, Surya Kund hot springs, and Divya Shila. Return to overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kharsali → Harsil → Gangotri",
        details: [
          "Fly to Harsil. Visit Gangotri Temple dedicated to Goddess Ganga. View Bhagirath Shila. Overnight at Harsil."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Harsil → Guptkashi → Kedarnath",
        details: [
          "Fly to Sersi/Guptkashi helipad. Visit Kedarnath Temple and Adi Shankaracharya Samadhi. VIP Darshan arranged. Overnight at Guptkashi."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Guptkashi → Badrinath",
        details: [
          "Fly to Badrinath. Visit Badrinath Temple, Tapt Kund, Mana Village (last village before Tibet). Overnight at Badrinath."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Badrinath → Dehradun — Departure",
        details: [
          "Morning Aarti at Badrinath Temple. Fly back to Sahastradhara Helipad, Dehradun. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Yamunotri · Gangotri · Kedarnath · Badrinath",
      },
      { label: "Departure & Return", value: "Sahastradhara Helipad, Dehradun" },
      { label: "Tour Code", value: "CDH-HELI-DEH-26" },
      { label: "Meals", value: "All meals included (vegetarian)" },
      { label: "Best Time", value: "May–June & September–October" },
      { label: "Group Size", value: "Customised — 2 to 10+ passengers" },
    ],

    
  },
  {
    id: 3,
    country: "India",
    place: "Srinagar",
    title: "Amarnath Yatra Packages",
    type: "Religious yatras",
    duration: "6 Nights / 7 Days",
    durationTag: "7 Days",
    startEnd: "Srinagar → Amarnath Cave",
    destinations: ["Srinagar", "Pahalgam", "Panjtarni", "Amarnath Cave"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 25900,
    rating: 4.8,
    reviews: 197,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
      src: "amarnath5.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Amarnath Holy Cave Darshan" },
      { title: "Shikara Ride on Dal Lake, Srinagar" },
      { title: "Sheshnag Lake & Mahagunas Pass Trek" },
      { title: "Pahalgam Valley & Betaab Valley Visit" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "amarnath.jpg",
      alt: "Amarnath Yatra Packages — Jammu & Kashmir",
    },

    testimonials: [
      {
        id: 1,
        text: "The Amarnath Yatra arranged by Indruka Trips and Trip was a truly divine experience. Every detail — from permits to camps — was handled perfectly. Baba Barfani's darshan was life-changing.",
        author: "Suresh Tiwari",
        date: "Travelled Aug 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We were a group of 8 pilgrims and the trek coordination was flawless. The guides were experienced and the accommodation at Pahalgam was very comfortable. Highly recommended!",
        author: "Anjali Mehta",
        date: "Travelled Jul 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "amarnath2.jpg",
    alt: "Amarnath Holy Cave",
      },
      {
        id: 2,
        src: "amarnath3.jpg",
        alt: "Dal Lake Srinagar",
      },
      {
        id: 3,
        src:  "amarnath4.jpg",
        alt: "Pahalgam Valley",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kashmir", href: "/india/kashmir" },
      { label: "Amarnath Yatra Packages" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "PILGRIMAGE TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 4,
    region: "Jammu & Kashmir, India",

    itineraryStops: [
      { city: "Srinagar", nights: 2 },
      { city: "Pahalgam", nights: 1 },
      { city: "Sheshnag", nights: 1 },
      { city: "Panjtarni", nights: 1 },
      { city: "Baltal", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Srinagar",
        details: [
          "Arrive at Srinagar Airport and transfer to hotel. Welcome briefing by the tour manager covering the yatra schedule, permits, and trekking guidelines. Evening leisurely stroll along the banks of Dal Lake. Overnight Srinagar."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar Sightseeing",
        details: [
          "Morning Shikara ride on the iconic Dal Lake passing floating gardens and houseboats. Visit Shankaracharya Temple perched on the hilltop, Mughal Gardens (Shalimar Bagh and Nishat Bagh), and the revered Hazratbal Shrine. Overnight Srinagar."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Pahalgam",
        details: [
          "Scenic drive to Pahalgam (95 km / approx. 3 hrs) through the lush Lidder Valley and Awantipora ruins. Afternoon excursion to Betaab Valley and Aru Valley. Rest and acclimatisation before the trek. Overnight Pahalgam."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Pahalgam → Chandanwari → Sheshnag",
        details: [
          "Trek begins from Chandanwari base (16 km). Ascend through pine forests, cross Pissu Top ridge, and descend to the magnificent Sheshnag Lake at 3,590 m — surrounded by snow-clad peaks. Overnight at tented camps, Sheshnag."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Sheshnag → Mahagunas Pass → Panjtarni",
        details: [
          "Trek over the mighty Mahagunas Pass at 4,890 m — the highest point of the entire yatra route. Gradual descent through alpine meadows to Panjtarni (14 km). Rest and prepare with prayers ahead of the holy cave darshan. Overnight camps, Panjtarni."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Panjtarni → Amarnath Cave Darshan → Baltal",
        details: [
          "Early morning trek to the sacred Amarnath Holy Cave at 3,888 m (6 km). Darshan of the naturally formed Shiva Lingam of ice — a deeply spiritual and unforgettable experience. Return to Panjtarni and drive to Baltal. Overnight Baltal."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Baltal → Srinagar — Departure",
        details: [
          "Morning drive from Baltal to Srinagar (93 km / approx. 3 hrs) through scenic Sindh Valley. Freshen up and collect souvenirs at the local market before transfer to Srinagar Airport. Tour concludes with the divine blessings of Baba Amarnath."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Nights / 7 Days" },
      {
        label: "Destinations",
        value: "Srinagar · Pahalgam · Sheshnag · Panjtarni · Amarnath Cave",
      },
      { label: "Departure & Return", value: "Srinagar Airport" },
      { label: "Tour Code", value: "AMR-TREK-SRN-26" },
      { label: "Meals", value: "All meals included (vegetarian)" },
      { label: "Best Time", value: "July–August (Yatra Season)" },
      { label: "Group Size", value: "Customised — 2 to 15+ pilgrims" },
    ],

    
  },

  {
    id: 4,
    country: "India",
    place: "Uttarakhand",
    title: "Adi Kailash & Om Parvat Yatra",
    type: "Religious yatras",
    duration: "9 Nights / 10 Days",
    durationTag: "10 Days",
    startEnd: "Haldwani → Adi Kailash",
    destinations: ["Haldwani", "Dharchula", "Gunji", "Kalapani", "Adi Kailash"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 48500,
    rating: 4.8,
    reviews: 83,
    badge: "Premium",
    badgeColor: "bg-sky-600",
    mode: "Road",
    src: "/adikalesh.jpeg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Om Parvat Natural OM Snow Symbol Darshan" },
      { title: "Adi Kailash Parikrama at 6,310 m" },
      { title: "Parvati Sarovar Sacred Glacial Lake" },
      { title: "Kalapani — Source of the Kali River" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/adikalesh7.jpeg",
      alt: "Adi Kailash & Om Parvat Yatra — Uttarakhand",
    },

    testimonials: [
      {
        id: 1,
        text: "Indruka Trips and Trip made our Adi Kailash Yatra smooth and spiritually enriching. The guides were incredibly knowledgeable and the logistics for this remote trek were perfectly managed.",
        author: "Vikram Nair",
        date: "Travelled Jun 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Seeing the natural OM symbol on Om Parvat was a moment I will carry for a lifetime. Every camp, every meal, every guide — all first class. Truly a premium spiritual journey.",
        author: "Priya Joshi",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/adikalesh.jpg",
        alt: "Adi Kailash Peak",
      },
      {
        id: 2,
  src: "/adikalesh4.jpg",        alt: "Om Parvat Snow OM",
      },
      {
        id: 3,
  src: "/adikalesh.jpg",        alt: "Kalapani Kali River",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Adi Kailash & Om Parvat Yatra" },
    ],

    badges: [
      { label: "PREMIUM", variant: "solid" as const, color: "blue" },
      { label: "PILGRIMAGE TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 5,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Haldwani / Pithoragarh", nights: 1 },
      { city: "Dharchula", nights: 2 },
      { city: "Gunji", nights: 2 },
      { city: "Navidhang (Om Parvat)", nights: 1 },
      { city: "Jollingkong (Adi Kailash)", nights: 2 },
      { city: "Dharchula (Return)", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival at Haldwani / Kathgodam",
        details: [
          "Arrive at Haldwani or Kathgodam railway station. Transfer by road to Pithoragarh (200 km / approx. 7 hrs) through scenic Kumaon hills. Check-in at hotel and welcome briefing. Overnight Pithoragarh."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Pithoragarh → Dharchula — ILP Formalities",
        details: [
          "Scenic drive to Dharchula (92 km / approx. 4 hrs) along the Kali River, which forms the natural border between India and Nepal. Inner Line Permit (ILP) registration completed here — mandatory for the yatra. Overnight Dharchula."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Dharchula → Tawaghat → Budhi",
        details: [
          "Drive to Tawaghat where the road ends, then begin the trek through dense Himalayan forests and traditional Bhotiya villages. Pass through Sirkha and Dar. Overnight guesthouse at Budhi."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Budhi → Gala → Gunji",
        details: [
          "Trek continues through Gala village with sweeping views of Panchachuli peaks. Arrive at Gunji — the key base camp and supply hub for the yatra region. Rest and acclimatisation. Overnight Gunji."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Gunji → Kalapani → Navidhang (Om Parvat Darshan)",
        details: [
          "Trek to Kalapani — the sacred origin point of the Kali River venerated in mythology. Ascend to Navidhang (4,750 m) for a breathtaking view of Om Parvat, where a natural formation of snow creates the divine OM symbol on the peak. Overnight camps, Navidhang."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Navidhang → Gunji → Kuti Village",
        details: [
          "Descend from Navidhang back to Gunji. Proceed onward to the remote and serene Kuti Village (3,740 m) — a traditional Bhotiya settlement with spectacular Himalayan vistas. Overnight guesthouse, Kuti."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Kuti → Jollingkong (Adi Kailash Base Camp)",
        details: [
          "Trek from Kuti to Jollingkong (15 km) through high-altitude meadows and glacial terrain. First dramatic views of Adi Kailash peak (6,310 m) — revered as the Himalayan abode of Lord Shiva. Overnight tented camps, Jollingkong."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Adi Kailash Parikrama & Parvati Sarovar",
        details: [
          "Full day dedicated to the sacred Adi Kailash Parikrama (circumambulation of the holy peak). Visit the pristine Parvati Sarovar glacial lake and offer prayers at the Shiva Mandir. A deeply meditative and spiritually profound experience. Overnight Jollingkong."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Jollingkong → Kuti → Gunji → Dharchula",
        details: [
          "Begin the return trek to Kuti, then continue driving back through Gunji to Dharchula. Debrief with the tour manager. A celebratory dinner to mark the completion of this rare Himalayan pilgrimage. Overnight Dharchula."
          ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Dharchula → Haldwani — Departure",
        details: [
          "Early morning drive from Dharchula to Haldwani / Kathgodam (280 km / approx. 8 hrs) through the Kumaon valleys. Drop at Kathgodam Railway Station or Haldwani Bus Stand. Tour concludes with the divine blessings of Adi Kailash."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "9 Nights / 10 Days" },
      {
        label: "Destinations",
        value: "Dharchula · Gunji · Om Parvat · Kuti · Adi Kailash",
      },
      { label: "Departure & Return", value: "Haldwani / Kathgodam" },
      { label: "Tour Code", value: "ADK-TREK-HDW-26" },
      { label: "Meals", value: "All meals included (vegetarian)" },
      { label: "Best Time", value: "May–June & September–October" },
      { label: "Group Size", value: "Customised — 2 to 12 pilgrims" },
    ],

    
  },

  {
    id: 5,
    country: "India",
    place: "Delhi",
    title: "Golden Triangle Tour Package",
    type: "Religious yatras",
    duration: "7 Nights / 8 Days",
    durationTag: "8 Days",
    startEnd: "Delhi → Amritsar",
    destinations: ["Delhi", "Agra", "Mathura", "Jaipur", "Amritsar"],
    amenities: ["Hotel", "Meals", "Transfers", "Guided Tours"],
    price: 12500,
    rating: 4.7,
    reviews: 534,
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    mode: "Road",
    src: "golden2.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Taj Mahal Sunrise Visit, Agra" },
      { title: "Golden Temple Darshan, Amritsar" },
      { title: "Amber Fort Elephant Ride, Jaipur" },
      { title: "Wagah Border Flag-Lowering Ceremony" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "golden1.jpg",
      alt: "Golden Triangle Tour Package — Delhi Agra Jaipur Amritsar",
    },

    testimonials: [
      {
        id: 1,
        text: "An absolutely perfect introduction to India! The Golden Triangle plus Amritsar extension was flawlessly organised. From the Taj Mahal at dawn to the Golden Temple — every moment was memorable.",
        author: "Ramesh Kapoor",
        date: "Travelled Nov 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We visited with our family of six and everything was taken care of — hotels, guides, meals. The Wagah Border ceremony was the absolute highlight of our trip. Will definitely book again!",
        author: "Sunita Agarwal",
        date: "Travelled Dec 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/golden3.jpg",
        alt: "Taj Mahal Agra",
      },
      {
        id: 2,
      src: "/golden4.jpg",
        alt: "Amber Fort Jaipur",
      },
      {
        id: 3,
      src: "/golden3.jpg",
        alt: "Golden Temple Amritsar",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Delhi", href: "/india/delhi" },
      { label: "Golden Triangle Tour Package" },
    ],

    badges: [
      { label: "BESTSELLER", variant: "solid" as const, color: "amber" },
      { label: "CULTURAL TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "North India",

    itineraryStops: [
      { city: "Delhi", nights: 2 },
      { city: "Agra", nights: 1 },
      { city: "Mathura / Vrindavan", nights: 1 },
      { city: "Jaipur", nights: 2 },
      { city: "Amritsar", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Delhi",
        details: [
          "Arrive at Indira Gandhi International Airport and transfer to hotel. Welcome briefing with the tour manager. Evening visit to India Gate, Rajpath, and the vibrant Connaught Place market. Welcome dinner. Overnight Delhi."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Delhi City Tour",
        details: [
          "Old Delhi exploration — rickshaw ride through Chandni Chowk, Jama Masjid, and Red Fort. New Delhi highlights — Qutub Minar, Humayun's Tomb, Lotus Temple, and Raj Ghat (Gandhi Memorial). Overnight Delhi."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Delhi → Agra — Taj Mahal",
        details: [
          "Drive to Agra (200 km / approx. 4 hrs). Visit the Taj Mahal — one of the Seven Wonders of the World — followed by the imposing Agra Fort and serene Mehtab Bagh. En route stop at the UNESCO-listed Fatehpur Sikri. Overnight Agra."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Agra → Mathura → Vrindavan",
        details: [
          "Morning drive to Mathura — the sacred birthplace of Lord Krishna. Visit Krishna Janmabhoomi Temple, Dwarkadhish Temple, and Vishram Ghat on the Yamuna River. Explore the holy town of Vrindavan and ISKCON temple. Overnight Mathura."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Mathura → Jaipur",
        details: [
          "Drive to the 'Pink City' of Jaipur (180 km / approx. 4 hrs). Check-in at hotel. Evening experience at Chokhi Dhani cultural village — traditional Rajasthani folk performances, cuisine, and crafts. Overnight Jaipur."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jaipur Sightseeing",
        details: [
          "Visit the majestic Amber Fort with an optional elephant ride up the ramp. Explore City Palace, Jantar Mantar (UNESCO), the iconic Hawa Mahal facade, and Nahargarh Fort with panoramic city views. Evening shopping at Johri Bazaar for gems, textiles, and handicrafts. Overnight Jaipur."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Jaipur → Amritsar — Golden Temple",
        details: [
          "Fly or drive to Amritsar. Check-in and freshen up. Visit the Golden Temple (Harmandir Sahib) — the holiest shrine of Sikhism, glittering in gold over the sacred Amrit Sarovar pool. Tour Jallianwala Bagh memorial. Attend the electric Wagah Border flag-lowering ceremony at sunset. Overnight Amritsar."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Amritsar — Departure",
        details: [
          "Begin the morning with a peaceful visit to Durgiana Temple, the silver-domed Sikh shrine modelled after the Golden Temple. Explore the historic Gobindgarh Fort, an 18th-century military fortress at the heart of Amritsar. After breakfast, transfer to Sri Guru Ram Dass Jee International Airport for your onward journey. Tour concludes with the blessings of the Golden City."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "7 Nights / 8 Days" },
      {
        label: "Destinations",
        value: "Delhi · Agra · Mathura · Jaipur · Amritsar",
      },
      { label: "Departure & Return", value: "New Delhi Airport" },
      { label: "Tour Code", value: "GT-CULT-DEL-26" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ guests" },
    ],

    
  },

  {
    id: 6,
    country: "India",
    place: "Bhubaneswar",
    title: "Bhubaneswar Puri Konark Tour",
    type: "Religious yatras",
    duration: "3 Nights / 4 Days",
    durationTag: "4 Days",
    startEnd: "Bhubaneswar → Puri",
    destinations: ["Bhubaneswar", "Konark", "Puri"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 12900,
    rating: 4.6,
    reviews: 142,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/bhuPk.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Jagannath Temple Darshan, Puri" },
      { title: "Konark Sun Temple (UNESCO World Heritage)" },
      { title: "Chilika Lake Boat Ride & Bird Sanctuary" },
      { title: "Lingaraj Temple, Bhubaneswar" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/bhuPK1.jpg",
      alt: "Bhubaneswar Puri Konark Tour — Odisha",
    },

    testimonials: [
      {
        id: 1,
        text: "The Odisha triangle tour was a beautiful blend of history, spirituality, and nature. Konark at golden hour was absolutely stunning and the Jagannath Temple darshan was deeply moving.",
        author: "Deepak Mishra",
        date: "Travelled Jan 2026",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "A wonderfully compact yet richly packed tour. The Chilika Lake boat ride was a surprise highlight — thousands of migratory birds and the Irrawaddy dolphins! Highly organised trip.",
        author: "Kavita Rao",
        date: "Travelled Feb 2026",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/bhuPK2.jpg",
        alt: "Konark Sun Temple",
      },
      {
        id: 2,
        src: "/bhuPK3.jpg",
        alt: "Jagannath Temple Puri",
      },
      {
        id: 3,
        src: "/bhuPK6.jpg",
        alt: "Chilika Lake Odisha",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Odisha", href: "/india/odisha" },
      { label: "Bhubaneswar Puri Konark Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "TEMPLE TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 3,
    region: "Odisha, India",

    itineraryStops: [
      { city: "Bhubaneswar", nights: 1 },
      { city: "Puri", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Bhubaneswar",
        details: [
          "Arrive at Bhubaneswar Airport / Railway Station and check-in at hotel. Visit the magnificent Lingaraj Temple (11th-century Shiva shrine), Mukteshwar Temple, and the ornately carved Rajarani Temple. Explore the ancient Udayagiri and Khandagiri Caves. Overnight Bhubaneswar."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Bhubaneswar → Konark → Puri",
        details: [
          "Drive to Konark (65 km) and visit the awe-inspiring Sun Temple — a UNESCO World Heritage Site shaped like the chariot of the Sun God, adorned with intricate erotic sculptures. Continue to Puri for darshan at the sacred Jagannath Temple, one of the four Char Dhams of India. Stroll along the golden Puri Beach at sunset. Overnight Puri."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Puri — Chilika Lake Excursion",
        details: [
          "Full-day excursion to Chilika Lake — Asia's largest brackish water lagoon and a Ramsar Wetland. Scenic boat ride through the lake to Nalbana Bird Sanctuary and the serene Kalijai Island Temple. Return to Puri for evening prayers on the beach. Overnight Puri."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Puri → Bhubaneswar — Departure",
        details: [
          "Morning visit to Sudarshana Crafts Village to witness Pattachitra painting artists and Odisha's traditional handloom weavers at work. Drive to Bhubaneswar Airport / Station for onward journey. Tour concludes with the blessings of Lord Jagannath."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "3 Nights / 4 Days" },
      {
        label: "Destinations",
        value: "Bhubaneswar · Konark · Puri · Chilika Lake",
      },
      {
        label: "Departure & Return",
        value: "Bhubaneswar Airport / Railway Station",
      },
      { label: "Tour Code", value: "BPK-TMPL-BBS-26" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ guests" },
    ],

    
  },

  {
    id: 140,
    country: "India",
    place: "Himachal Pradesh",
    title: "Dharamshala Weekend Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Dharamshala"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 10000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/himchalpardesh-banner.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Dalai Lama Temple & Tibetan Monastery in McLeodGanj" },
      { title: "Bhagsu Nag Temple & Bhagsu Waterfall" },
      { title: "Dal Lake & Naddi Village viewpoint" },
      { title: "St. John's Church — colonial heritage gem" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/himachal2.jpg",
      alt: "Dharamshala Weekend Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "A wonderful weekend escape to Dharamshala. McLeodGanj has such a peaceful vibe and the Bhagsu Waterfall trek was amazing. Indruka Trips and Trip handled everything perfectly.",
        author: "Neha Kapoor",
        date: "Travelled September 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Loved the Tibetan culture, the monastery, and the stunning mountain views from Naddi Village. Great value for a 4-day package!",
        author: "Amit Joshi",
        date: "Travelled October 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/himachal3.jpeg",
        alt: "Dharamshala Weekend Tour",
      },
       {
        id: 2,
      src: "/himachal4.jpg",
        alt: "Dharamshala Weekend Tour",
      },
      {
        id: 3,
      src: "/himachal6.jpg",
        alt: "Dharamshala Weekend Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Dharamshala Weekend Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      {
        label: "WEEKEND GETAWAY",
        variant: "outlined" as const,
        color: "green",
      },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 1,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Dharamshala / McLeodGanj", nights: 3 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Dharamshala",
        details: [
          "Depart Delhi by overnight bus/cab. Arrive Dharamshala by morning, check in to hotel and freshen up. Evening free to explore the local market. Overnight stay in Dharamshala."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "McLeodGanj Sightseeing",
        details: [
          "After breakfast, explore McLeodGanj — visit the Dalai Lama Temple (Tsuglagkhang Complex), Namgyal Monastery, Tibetan Museum, and souvenir shops. Trek to Bhagsu Nag Temple and Bhagsu Waterfall. Evening stroll through McLeodGanj market. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Dharamshala Local Sightseeing",
        details: [
          "After breakfast, visit Dal Lake (holy lake in the deodar forest), St. John's Church in the Wilderness (colonial heritage), Naddi Village viewpoint for panoramic Dhauladhar mountain views, and the War Memorial. Evening at leisure. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Dharamshala → Delhi — Departure",
        details: [
          "After breakfast, check out from hotel. Drive back to Delhi. Arrive Delhi by evening/night. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "Dharamshala · McLeodGanj" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-DHRM-WKD-140" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 141 — Exotic Himachal Tour Package
  // ─────────────────────────────────────────────
  {
    id: 141,
    country: "India",
    place: "Himachal Pradesh",
    title: "Exotic Himachal Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "5 Days / 4 Nights",
    durationTag: "5 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Shimla", "Kullu", "Manali", "Rohtang Pass"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 25000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/himaExoctic.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla Mall Road & Christ Church" },
      { title: "Kufri snow activities & Jakhu Temple" },
      { title: "Hadimba Temple & Vashisht Hot Springs, Manali" },
      { title: "Rohtang Pass snow excursion" },
    ],

    tourManagerCompany: "Indruka Trips and ",

    heroImage: {
      src: "/himaExoctic3.png",
      alt: "Exotic Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "From Shimla's colonial charm to Rohtang's snow, this 5-day tour packed in everything. Indruka Trips and Trip's planning was flawless.",
        author: "Rohit Agarwal",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Rohtang Pass was the highlight! Seeing snow for the first time was magical. Our driver was professional and the hotels were very comfortable.",
        author: "Sunita Sharma",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/himaExoctic5.jpg",
        alt: "Exotic Himachal Tour",
      },
        {
        id: 2,
        src: "/himaExoctic2.jpg",
        alt: "Exotic Himachal Tour",
      },
        {
        id: 3,
        src: "/himaExoctic.jpg",
        alt: "Exotic Himachal Tour",
      },
        {
        id: 4,
        src: "/himaExoctic4.jpg",
        alt: "Exotic Himachal Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Exotic Himachal Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 5,
    countryCount: 1,
    cityCount: 3,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 1 },
      { city: "Manali", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi early morning and drive to Shimla. Arrive and check in to hotel. Evening stroll on Mall Road, visit Christ Church and the Ridge. Overnight stay in Shimla."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing → Manali",
        details: [
          "After breakfast, visit Kufri (snow activities, Himalayan Zoo), Jakhu Temple, and Viceregal Lodge. Post lunch drive to Manali via Kullu — stop at Pandoh Dam and Hanogi Mata Temple. Arrive Manali, check in, overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Manali Local Sightseeing",
        details: [
          "After breakfast, explore Manali — visit Hadimba Devi Temple (built 1553), Vashisht Temple & sulphur hot springs, Tibetan Monastery, Club House, and Van Vihar. Evening free to shop at Mall Road. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Rohtang Pass Excursion",
        details: [
          "Full day excursion to Rohtang Pass — gateway to Lahaul & Spiti. En route stop at Nehru Kund, Kothi Gorge, Gulaba, Rahalla Falls, and Marhi. Enjoy snow activities at Rohtang. Return to Manali by evening. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Manali → Delhi — Departure",
        details: [
          "After breakfast, check out and drive back to Delhi. Arrive Delhi late evening. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      {
        label: "Destinations",
        value: "Shimla · Kullu · Manali · Rohtang Pass",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-EXO-141" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 142 — Shimla Manali Tour Package
  // ─────────────────────────────────────────────
  {
    id: 800,
    country: "India",
    place: "Himachal Pradesh",
    title: "Shimla Manali Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Manali", "Shimla"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 18000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/shimla-manali.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla Mall Road, Christ Church & Scandal Point" },
      { title: "Kufri — Himalayan Zoo & snow activities" },
      { title: "Kullu river rafting on Beas River" },
      { title: "Rohtang Pass & Manali local sightseeing" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/shim.png",
      alt: "Shimla Manali Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Best trip of our life! Shimla's colonial beauty and Manali's adventure were the perfect combo. Everything was well organised by Indruka Trips and Trip.",
        author: "Deepak Gupta",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Rohtang Pass experience was unforgettable. Our family had a wonderful time and we will definitely book again with Indruka Trips and Trip.",
        author: "Kavita Singh",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/shim.jpg",
        alt: "Shimla Manali Tour",
      },
        {
        id: 2,
        src: "/shim2.jpg",
        alt: "Shimla Manali Tour",
      },
        {
        id: 3,
        src: "/shim3.jpg",
        alt: "Shimla Manali Tour",
      },
        {
        id:4,
        src: "/shim7.jpg",
        alt: "Shimla Manali Tour",
      },
        
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Shimla Manali Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 2,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 2 },
      { city: "Manali", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi early morning, drive to Shimla. Arrive, check in to hotel. Evening at Mall Road — stroll past Christ Church and the Ridge. Overnight stay in Shimla."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details: [
          "After breakfast, full-day sightseeing — Kufri (Himalayan Zoo, horse riding, snow activities), Jakhu Temple, Viceregal Lodge, Scandal Point, Sankat Mochan Temple, and Christ Church. Evening free on Mall Road. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details: [
          "After breakfast, check out and drive to Manali via Kullu. En route visit Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and enjoy river rafting on Beas River at Kullu (optional). Arrive Manali, check in. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details: [
          "After breakfast, visit Hadimba Devi Temple, Club House, Vashisht Temple & sulphur hot springs, Tibetan Monastery, and Van Vihar. Evening free at Manali Mall Road for shopping. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Rohtang Pass Excursion",
        details: [
          "Full day excursion to Rohtang Pass — stopping at Nehru Kund, Kothi Gorge, Gulaba, Rahalla Falls, Marhi, and Rani Nala. Enjoy snow scooter rides and skiing at Rohtang (up to snow line if closed). Return to Manali. Overnight stay."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Manali → Delhi — Departure",
        details: [
          "After breakfast, check out and drive back to Delhi. Arrive Delhi late evening/night. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Shimla · Kullu · Manali · Rohtang Pass",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-SHM-MNL-142" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 143 — Enchanting Himachal Tour Package
  // ─────────────────────────────────────────────
  {
    id: 143,
    country: "India",
    place: "Himachal Pradesh",
    title: "Enchanting Himachal Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Shimla", "Manali", "Rohtang Pass"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 22000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/EnchantingHimachal.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Queen of Hills & Naldehra Golf Course" },
      { title: "Solang Valley adventure sports" },
      { title: "Rohtang Pass — snow-capped peaks & glaciers" },
      { title: "Hadimba Temple & Vashisht Hot Springs, Manali" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/EnchantingHimachal2.jpg",
      alt: "Enchanting Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Seven days of pure magic! Shimla and Manali exceeded all our expectations. The Solang Valley adventure was an absolute highlight.",
        author: "Vikas Malhotra",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Indruka Trips and Trip took care of every detail. Comfortable hotels, amazing sightseeing, and a very professional driver. Would book again!",
        author: "Anjali Rawat",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/EnchantingHimachal3.jpg",
        alt: "Enchanting Himachal Tour",
      },
        {
        id: 1,
        src: "/himachal2.jpg",
        alt: "Enchanting Himachal Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Enchanting Himachal Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 2,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 2 },
      { city: "Manali", nights: 3 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi, drive to Shimla. Check in to hotel. Evening stroll on Mall Road and visit Christ Church. Overnight stay in Shimla."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details: [
          "After breakfast, full-day sightseeing — Kufri, Naldehra Golf Course, Indira Tourist Bungalow, Jakhu Temple, Viceregal Lodge, Scandal Point, and Christ Church. Evening at Mall Road. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details: [
          "After breakfast, check out and drive to Manali via Kullu — en route Pandoh Dam, Sundernagar Lake, and Hanogi Mata Temple. Arrive Manali, check in. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details: [
          "After breakfast, explore Manali — Hadimba Temple, Vashisht Temple & hot springs, Tibetan Monastery, Club House, Van Vihar, and Mall Road shopping. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details: [
          "After breakfast, full day at Solang Valley — enjoy paragliding, zorbing, ropeway, and horse riding amidst snow-capped peaks. Return to Manali by evening. Overnight stay."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details: [
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Enjoy snow scooter rides and glacier views. Return to Manali. Overnight stay."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Delhi — Departure",
        details: [
          "After breakfast, check out and drive back to Delhi. Arrive late evening. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      {
        label: "Destinations",
        value: "Shimla · Kullu · Manali · Rohtang Pass",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-ENC-143" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 144 — Himachal Vaishno Devi Darshan Tour
  // ─────────────────────────────────────────────
  {
    id: 144,
    country: "India",
    place: "Himachal Pradesh",
    title: "Himachal Vaishno Devi Darshan Tour",
    type: "Hill Stations & Nature Destinations",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Amritsar → Jammu",
    destinations: ["Amritsar", "Dharamshala", "Katra", "Vaishno Devi"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 30000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/vaishno-Hima-banner.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Golden Temple & Wagah Border, Amritsar" },
      { title: "Dalai Lama Temple & McLeodGanj, Dharamshala" },
      { title: "Sacred trek to Vaishno Devi Shrine, Katra" },
      { title: "Bhagsu Waterfall & Tibetan Monastery" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/vaishno-Hima.jpg",
      alt: "Himachal Vaishno Devi Darshan Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "A deeply spiritual journey. The Vaishno Devi darshan was a life-changing experience and Dharamshala's peaceful monasteries added another dimension to our trip.",
        author: "Sanjay Tiwari",
        date: "Travelled October 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Golden Temple at Amritsar was divine, and the Wagah Border ceremony was thrilling. Indruka Trips and Trip organised everything seamlessly.",
        author: "Meena Chauhan",
        date: "Travelled September 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/vaishno-Hima1.jpg",
        alt: "Himachal Vaishno Devi Tour",
      },
      {
        id:2,
      src: "/vaishno-Hima6.jpg",
        alt: "Himachal Vaishno Devi Tour",
      },
      {
        id: 3,
      src: "/vaishno-Hima7.jpg",
        alt: "Himachal Vaishno Devi Tour",
      },
      {
        id: 4,
      src: "/vaishno-Hima8.jpg",
        alt: "Himachal Vaishno Devi Tour",
      },
      
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Himachal Vaishno Devi Darshan Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "PILGRIMAGE", variant: "outlined" as const, color: "amber" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 4,
    region: "Punjab & Himachal Pradesh & Jammu, India",

    itineraryStops: [
      { city: "Amritsar", nights: 2 },
      { city: "Dharamshala / McLeodGanj", nights: 2 },
      { city: "Katra", nights: 2 },
      { city: "Jammu (Drop)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Amritsar",
        details: [
          "Arrive Amritsar, check in to hotel. Evening visit the magnificent Golden Temple — attend Palki Sahib Ceremony. Overnight stay in Amritsar."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Amritsar Sightseeing",
        details: [
          "After breakfast, visit Jallianwala Bagh, Durgiana Temple, and Gobindgarh Fort. Evening at the Wagah Border for the Beating Retreat ceremony. Overnight stay in Amritsar."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Amritsar → Dharamshala",
        details: [
          "After breakfast, drive to Dharamshala (approx. 5 hrs). Check in to hotel, freshen up. Evening explore local market. Overnight stay in Dharamshala."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Dharamshala / McLeodGanj Sightseeing",
        details: [
          "After breakfast, explore McLeodGanj — Dalai Lama Temple (Tsuglagkhang), Namgyal Monastery, Tibet Museum, Bhagsu Nag Temple, Bhagsu Waterfall, and Dal Lake. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Dharamshala → Katra",
        details: [
          "After breakfast, drive to Katra (base camp for Vaishno Devi, approx. 5–6 hrs). Check in to hotel. Obtain yatra slip for Vaishno Devi darshan. Overnight stay in Katra."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Vaishno Devi Darshan",
        details: [
          "Early morning, commence the holy trek to Vaishno Devi Shrine (approx. 14 km one way via Banganga, Charan Paduka, Adhkwari). Seek blessings at the Trikuta cave shrine. Return to Katra by evening. Overnight stay."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Katra Local Sightseeing",
        details: [
          "After breakfast and rest, visit Shiv Khori Temple and Bhairavnath Temple. Evening leisure time in Katra market. Overnight stay."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Katra → Jammu — Departure",
        details: [
          "After breakfast, drive to Jammu (approx. 1.5 hrs). Enroute visit Raghunath Temple. Drop at Jammu Airport / Railway Station for onward journey. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Amritsar · Dharamshala · Katra · Vaishno Devi",
      },
      { label: "Departure & Return", value: "Amritsar → Jammu" },
      { label: "Tour Code", value: "HP-VDV-144" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 145 — Himachal Delhi Darshan Tour Package
  // ─────────────────────────────────────────────

  // ─────────────────────────────────────────────
  // ID 146 — Scenic Himachal Tour Package
  // ─────────────────────────────────────────────
  {
    id: 146,
    country: "India",
    place: "Himachal Pradesh",
    title: "Scenic Himachal Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 28000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/Hima-Scene7.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Kufri, Jakhu Temple & Viceregal Lodge" },
      { title: "Rohtang Pass & Solang Valley, Manali" },
      { title: "McLeodGanj — Dalai Lama Temple & Bhagsu Waterfall" },
      { title: "Dharamshala — Little Lhasa & Tibetan culture" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src:  "/Hima-Scene6.jpg",
      alt: "Scenic Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Three iconic destinations — Shimla, Manali, and Dharamshala — all in one perfect trip. Indruka Trips and Trip gave us memories we'll cherish forever.",
        author: "Gaurav Khanna",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The diversity of this tour was incredible — snow at Rohtang, spirituality at McLeodGanj, and colonial charm at Shimla. Perfectly organised.",
        author: "Ritu Sharma",
        date: "Travelled October 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src:  "/Hima-Scene5.jpg",
        alt: "Scenic Himachal Tour",
      },
        {
        id: 2,
      src:  "/Hima-Scene3.jpg",
        alt: "Scenic Himachal Tour",
      },
        {
        id: 3,
      src:  "/Hima-Scene4.jpg",
        alt: "Scenic Himachal Tour",
      },
        {
        id: 4,
      src:  "/Hima-Scene5.jpg",
        alt: "Scenic Himachal Tour",
      },
        {
        id: 6,
      src:  "/Hima-Scene2.jpg",
        alt: "Scenic Himachal Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Scenic Himachal Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 9,
    countryCount: 1,
    cityCount: 3,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 2 },
      { city: "Manali", nights: 3 },
      { city: "Dharamshala", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi, drive to Shimla. Check in to hotel. Evening at Mall Road, Christ Church, and the Ridge. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details: [
          "After breakfast, visit Kufri, Jakhu Temple, Naldehra Golf Course, Viceregal Lodge, Scandal Point, Sankat Mochan Temple, and Christ Church. Evening free at Mall Road. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details: [
          "After breakfast, drive to Manali via Kullu — en route Pandoh Dam, Hanogi Mata Temple, river rafting on Beas (optional). Arrive Manali, check in. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details: [
          "After breakfast, visit Hadimba Temple, Vashisht Hot Springs, Club House, Tibetan Monastery, Van Vihar, and Mall Road. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details: [
          "After breakfast, full day at Solang Valley — paragliding, zorbing, ropeway, and horse riding. Breathtaking views of snow-capped peaks. Return to Manali. Overnight stay."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details: [
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Snow activities and glacier views. Return to Manali. Overnight stay."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Dharamshala",
        details: [
          "After breakfast, drive to Dharamshala via Palampur (approx. 7–8 hrs). Check in to hotel. Evening at leisure. Overnight stay."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Dharamshala / McLeodGanj Sightseeing",
        details: [
          "After breakfast, explore McLeodGanj — Dalai Lama Temple, Namgyal Monastery, Tibet Museum, Bhagsu Nag Temple, Bhagsu Waterfall, Dal Lake, and Naddi Village viewpoint. Overnight stay."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Dharamshala → Delhi — Departure",
        details: [
          "After breakfast, check out and drive back to Delhi. Arrive Delhi by evening/night. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      { label: "Destinations", value: "Shimla · Manali · Dharamshala" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-SCN-146" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 147 — Incredible Himachal Tour Package
  // ─────────────────────────────────────────────
  {
    id: 147,
    country: "India",
    place: "Himachal Pradesh",
    title: "Incredible Himachal Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Shimla", "Manali", "Dalhousie", "Khajjiar"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 45000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Mall Road, Kufri & Viceregal Lodge" },
      { title: "Manali — Rohtang Pass & Solang Valley" },
      { title: "Dalhousie — Panchpula & Kalatop Wildlife Sanctuary" },
      { title: "Khajjiar — Mini Switzerland of India" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
      alt: "Incredible Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "10 days covering the best of Himachal — Shimla, Manali, Dalhousie, and Khajjiar. This is the most comprehensive and well-priced package we found.",
        author: "Arjun Mehta",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Khajjiar was the surprise of the trip — such a magical meadow. Combined with Rohtang's snow, it was an unforgettable 10 days with Indruka Trips and Trip.",
        author: "Vandana Sood",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
        alt: "Incredible Himachal Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Incredible Himachal Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 4,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 2 },
      { city: "Manali", nights: 3 },
      { city: "Dalhousie", nights: 2 },
      { city: "Khajjiar", nights: 1 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi, drive to Shimla. Check in, stroll Mall Road and Christ Church. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details: [
          "Kufri (Himalayan Zoo, snow activities), Jakhu Temple, Viceregal Lodge, Scandal Point, and Mall Road. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details: [
          "Drive to Manali via Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and Kullu (river rafting optional). Arrive Manali, check in. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details: [
          "Hadimba Temple, Vashisht Hot Springs, Club House, Tibetan Monastery, Van Vihar, and Mall Road shopping. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details: [
          "Full day at Solang Valley — paragliding, zorbing, ropeway, horse riding amidst snow-capped peaks. Overnight stay in Manali."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details: [
          "Kothi Gorge, Gulaba, Rahalla Falls, Marhi, Rani Nala, and Rohtang Pass — snow activities and glacier views. Return to Manali. Overnight stay."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Dalhousie",
        details: [
          "After breakfast, drive to Dalhousie via Pathankot (approx. 8–9 hrs). Check in, explore colonial town at leisure. Overnight stay."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Dalhousie Sightseeing",
        details: [
          "Panchpula waterfalls, Subhash Baoli, Bhulwani Mata Mandir, Kalatop Wildlife Sanctuary nature walk, and Satdhara Falls. Overnight stay."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Khajjiar Excursion",
        details: [
          "After breakfast, excursion to Khajjiar — lush green meadow, Khajjiar Lake, horse riding and zorbing. Return to Dalhousie. Overnight stay."
          ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Dalhousie → Delhi — Departure",
        details: [
          "After breakfast, drive back to Delhi. Arrive Delhi late evening. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value: "Shimla · Manali · Dalhousie · Khajjiar",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-INC-147" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 148 — Himachal Honeymoon Tour Package
  // ─────────────────────────────────────────────
  {
    id: 148,
    country: "India",
    place: "Himachal Pradesh",
    title: "Himachal Honeymoon Tour Package",
    type: "Honeymoon packages",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 30000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/himaExoctic.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Romantic evenings on Shimla's Mall Road & Scandal Point" },
      { title: "Couples' snow activities at Solang Valley, Manali" },
      { title: "Scenic Rohtang Pass — snow-capped peaks together" },
      { title: "Peaceful walks at McLeodGanj & Bhagsu Waterfall" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/himachal.jpg",
      alt: "Himachal Honeymoon Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Our honeymoon was absolutely dreamy! Shimla's sunsets, Manali's snow, and Dharamshala's peace — Indruka Trips and Trip made every moment magical for us.",
        author: "Rahul & Priya Verma",
        date: "Travelled March 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The honeymoon suite upgrades and special room decorations were a lovely surprise. Indruka Trips and Trip clearly goes the extra mile for couples.",
        author: "Karan & Simran Sethi",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/himaExoctic3.png",
        alt: "Himachal Honeymoon Tour",
      },
        {
        id: 2,
        src: "/Hima-Scence.jpg",
        alt: "Himachal Honeymoon Tour",
      },
      {
        id: 3,
        src: "/Hima-Scence2.jpg",
        alt: "Himachal Honeymoon Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Himachal Honeymoon Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "HONEYMOON", variant: "outlined" as const, color: "pink" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 3,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 2 },
      { city: "Manali", nights: 4 },
      { city: "Dharamshala", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi, drive to Shimla. Check in, romantic evening walk on Mall Road and Christ Church. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details: [
          "Kufri (snow activities & horse riding), Jakhu Temple, Viceregal Lodge, Scandal Point at sunset. Evening at Mall Road. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details: [
          "Drive through scenic Kullu valley — Pandoh Dam, Hanogi Mata Temple. Optional river rafting at Beas, Kullu. Arrive Manali, check in. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details: [
          "Hadimba Temple (romantic forest setting), Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and leisurely evening at Mall Road. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley — Couple's Adventure",
        details: [
          "Full day at Solang Valley — enjoy paragliding, zorbing, ropeway rides together. Snow-capped peak backdrop perfect for couple photos. Overnight stay."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details: [
          "Scenic snow excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls. Snow walk and panoramic Himalayan views. Return to Manali. Overnight stay."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali Leisure Day",
        details: [
          "Leisurely day at leisure — optional spa, café hopping in Old Manali, or nature walk along Beas River. Candlelit dinner at a riverside restaurant. Overnight stay."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Manali → Dharamshala",
        details: [
          "Drive to Dharamshala via Palampur (approx. 7–8 hrs). Check in to hotel. Evening stroll in McLeodGanj. Overnight stay."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Dharamshala / McLeodGanj Sightseeing",
        details: [
          "Dalai Lama Temple, Bhagsu Nag Temple & Bhagsu Waterfall trek, Dal Lake, and Naddi Village viewpoint. Romantic sunset view of Dhauladhar range. Overnight stay."
          ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Dharamshala → Delhi — Departure",
        details: [
          "After breakfast, check out and drive back to Delhi. Arrive Delhi by evening/night. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      { label: "Destinations", value: "Shimla · Manali · Dharamshala" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-HNY-148" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Couples / Small Groups" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 149 — Fascinating Himachal Tour Package
  // ─────────────────────────────────────────────
  {
    id: 149,
    country: "India",
    place: "Himachal Pradesh",
    title: "Fascinating Himachal Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "11 Days / 10 Nights",
    durationTag: "11 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Shimla", "Manali", "Dalhousie"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 40000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/himachal6.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Kufri, Naldehra & Mall Road" },
      { title: "Manali — Solang Valley adventure & Rohtang Pass" },
      { title: "Dalhousie — Panchpula & Kalatop Sanctuary" },
      { title: "Khajjiar — Mini Switzerland meadows" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/himachal2.jpg",
      alt: "Fascinating Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "11 days that felt like a lifetime of memories. From Shimla's colonial lanes to Dalhousie's misty evenings — every destination was stunning. Brilliant package!",
        author: "Nitin Goel",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The most comprehensive Himachal tour we could find. Indruka Trips and Trip's team was always a call away. The hotels were great and drivers were punctual.",
        author: "Swati Bhatt",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/EnchantingHimachal3.jpg",
        alt: "Fascinating Himachal Tour",
      },
      {
        id: 2,
      src: "/himaExoctic4.jpg",
        alt: "Fascinating Himachal Tour",
      },
      {
        id: 3,
      src: "/himaExoctic2.jpg",
        alt: "Fascinating Himachal Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Fascinating Himachal Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 11,
    countryCount: 1,
    cityCount: 3,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Shimla", nights: 3 },
      { city: "Manali", nights: 4 },
      { city: "Dalhousie / Khajjiar", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details: [
          "Depart Delhi early morning, drive to Shimla. Check in to hotel. Evening stroll on Mall Road. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Local Sightseeing",
        details: [
          "Kufri (Himalayan Zoo, snow activities, horse riding), Jakhu Temple, and Viceregal Lodge. Evening at Scandal Point. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla Extended Sightseeing",
        details: [
          "Naldehra Golf Course, Indira Tourist Bungalow, Chail (optional drive), Christ Church, and afternoon free at Mall Road market. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Shimla → Manali via Kullu",
        details: [
          "After breakfast, drive to Manali via Kullu — Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and Kullu river rafting (optional). Check in Manali. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Manali Local Sightseeing",
        details: [
          "Hadimba Devi Temple, Vashisht Temple & hot springs, Tibetan Monastery, Club House, and Van Vihar. Evening at Mall Road. Overnight stay."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Solang Valley Adventure",
        details: [
          "Full day at Solang Valley — paragliding, zorbing, ropeway, and horse riding. Return to Manali by evening. Overnight stay."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Rohtang Pass Excursion",
        details: [
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Snow sports and glacier views. Return to Manali. Overnight stay."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Manali Leisure / Departure to Dalhousie",
        details: [
          "After leisure morning in Manali (optional Old Manali walk), drive towards Dalhousie via Pathankot. Arrive Dalhousie by evening, check in. Overnight stay."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Dalhousie Sightseeing",
        details: [
          "Panchpula waterfalls & Sardar Ajit Singh monument, Subhash Baoli, Bhulwani Mata Mandir, Kalatop Wildlife Sanctuary, and Satdhara Falls. Overnight stay."
          ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Khajjiar Excursion",
        details: [
          "After breakfast, excursion to Khajjiar — the 'Mini Switzerland of India'. Lush meadows, Khajjiar Lake, and horse riding. Return to Dalhousie. Overnight stay."
          ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Dalhousie → Delhi — Departure",
        details: [
          "After breakfast, check out and drive back to Delhi via Pathankot. Arrive Delhi late evening. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "11 Days / 10 Nights" },
      {
        label: "Destinations",
        value: "Shimla · Manali · Dalhousie · Khajjiar",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-FAS-149" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },
  // ─────────────────────────────────────────────
  // ID 150 — Goa Weekend Tour Package
  // ─────────────────────────────────────────────
  {
    id: 150,
    country: "India",
    place: "Goa",
    title: "Goa Weekend Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Panaji", "North Goa", "South Goa"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 10900,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/goa-trip-banner.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "North Goa — Mapusa Market, Vagator & Anjuna Beach" },
      { title: "Fort Aguada — iconic 17th-century Portuguese fort" },
      { title: "South Goa — Dona Paula, Miramar & Colva Beach" },
      { title: "Basilica of Bom Jesus — UNESCO World Heritage Site" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/goa6.jpg",
      alt: "Goa Weekend Tour Package — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "The perfect weekend escape! Indruka Trips and Trip covered all the best beaches and sights in Goa. The hotel was beachside and the food was amazing.",
        author: "Neeraj Kapoor",
        date: "Travelled December 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We had a blast exploring North and South Goa. Very well-organised package with comfortable transfers and a great guide. Highly recommend!",
        author: "Sneha Joshi",
        date: "Travelled November 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
 src: "/goa1.jpg",        
 alt: "Goa Weekend Tour",
      },
      {
        id: 2,
 src: "/goa3.jpg",        
 alt: "Goa Weekend Tour",
      },
      {
        id: 1,
 src: "/goa7.jpg",        
 alt: "Goa Weekend Tour",
      },
     
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Goa", href: "/india/goa" },
      { label: "Goa Weekend Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      {
        label: "WEEKEND GETAWAY",
        variant: "outlined" as const,
        color: "green",
      },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 2,
    region: "Goa, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Goa / Panaji", nights: 3 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Goa",
        details: [
          "Arrive at Goa airport/railway station. Our representative will transfer you to your hotel. Check in, freshen up, and enjoy breakfast. Evening drive to the nearest beach to enjoy the sunset and Goa's famous nightlife scene. Dinner at a beach shack. Overnight stay in Goa."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Sightseeing",
        details: [
          "After breakfast, full-day North Goa tour — visit Mapusa city (vibrant market, St. Jerome Church, Hanuman Temple), Vagator Beach, Anjuna Beach, Calangute Beach, and Fort Aguada (17th-century Portuguese fort overlooking the Arabian Sea). Evening at leisure at the beach. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa Sightseeing",
        details: [
          "After breakfast, explore South Goa — tranquil beaches of Dona Paula, Miramar, and Colva. Visit the UNESCO World Heritage Site Basilica of Bom Jesus (housing the body of St. Francis Xavier), Se Cathedral, and Shri Mangeshi Temple. Mandovi River Cruise in the evening. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details: [
          "After breakfast, enjoy leisure time at the beach or explore the local market for souvenirs (cashews, feni, spices). Transfer to Goa airport/railway station for your onward journey. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "North Goa · South Goa · Panaji" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "GOA-WKD-150" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 151 — Goa Honeymoon Special Tour
  // ─────────────────────────────────────────────
  {
    id: 151,
    country: "India",
    place: "Goa",
    title: "Goa Honeymoon Special Tour",
    type: "Honeymoon packages",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 16900,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/goa-honey.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Romantic beachside stay in North Goa" },
      { title: "Anjuna, Vagator & Calangute beaches — couple's retreat" },
      { title: "South Goa — peaceful Dona Paula & Colva Beach" },
      { title: "Candlelit dinner & Mandovi River evening cruise" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/goa-honeymoon.jpg",
      alt: "Goa Honeymoon Special Tour — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "Our honeymoon in Goa was absolutely magical! The beachside hotel, the candlelit dinner, and the Mandovi cruise — Indruka Trips and Trip made everything special for us.",
        author: "Rahul & Divya Sharma",
        date: "Travelled January 2026",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The room was beautifully decorated for our honeymoon arrival. Goa's beaches are just stunning and the South Goa churches add a lovely heritage touch. Perfect trip!",
        author: "Aryan & Simran Malhotra",
        date: "Travelled December 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/goa10.jpg",
        alt: "Goa Honeymoon Special Tour",
      },
      {
        id: 1,
      src: "/goa11.jpg",
        alt: "Goa Honeymoon Special Tour",
      },
      {
        id: 1,
      src: "/goa12.jpg",
        alt: "Goa Honeymoon Special Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Goa", href: "/india/goa" },
      { label: "Goa Honeymoon Special Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "HONEYMOON", variant: "outlined" as const, color: "pink" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 2,
    region: "Goa, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "North Goa", nights: 2 },
      { city: "South Goa", nights: 1 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Goa — Honeymoon Check-In",
        details: [
          "Arrive at Goa airport/railway station. Transfer to your beachside hotel. Check in to your specially decorated honeymoon room. Freshen up and head to the nearest beach for a romantic sunset walk. Candlelit dinner at a beach shack. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Sightseeing",
        details: [
          "After breakfast, explore North Goa — Mapusa market (St. Jerome Church, Bodgeshwar Mandir, Maruti Mandir), then relax at Anjuna, Vagator, and Calangute beaches. Visit Fort Aguada for panoramic sea views. Evening at leisure on the beach with cocktails at a sunset shack. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa & Mandovi River Cruise",
        details: [
          "After breakfast, tour South Goa — Miramar Beach, Dona Paula viewpoint, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Evening scenic Mandovi River Cruise with live Goan music, dance, and dinner. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details: [
          "After breakfast, leisure time for a last beach walk or shopping for souvenirs (spices, cashews, feni). Transfer to Goa airport/railway station. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "North Goa · South Goa · Panaji" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "GOA-HNY-151" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Couples / Small Groups" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 152 — Goa Adventure Tour Package
  // ─────────────────────────────────────────────
 
  // ─────────────────────────────────────────────
  // ID 153 — Most Wanted Goa Package
  // ─────────────────────────────────────────────
  {
    id: 153,
    country: "India",
    place: "Goa",
    title: "Most Wanted Goa Package",
    type: "Honeymoon packages",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 24900,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/goa-wanted.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Luxury beachside resort stay in North Goa" },
      { title: "North Goa — Fort Aguada, Calangute & Baga Beach" },
      { title: "South Goa — Basilica of Bom Jesus & Shri Mangeshi Temple" },
      { title: "Mandovi River Cruise with live Goan folk music" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/goa14.jpg",
      alt: "Most Wanted Goa Package — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "Premium experience at a great price. The resort was stunning, the food was delicious, and the Mandovi River cruise was the cherry on top. Truly the 'most wanted' Goa experience!",
        author: "Vivek Reddy",
        date: "Travelled January 2026",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Worth every rupee! Indruka Trips and Trip made sure we had the best of Goa — beaches, heritage, nightlife, and great food. Absolutely loved it.",
        author: "Ritika Bose",
        date: "Travelled December 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/goa15.jpg",
        alt: "Most Wanted Goa Package",
      },
      {
        id: 2,
      src: "/goa16.jpg",
        alt: "Most Wanted Goa Package",
      },
      {
        id: 3,
      src: "/goa7.jpg",
        alt: "Most Wanted Goa Package",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Goa", href: "/india/goa" },
      { label: "Most Wanted Goa Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "PREMIUM", variant: "outlined" as const, color: "amber" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 2,
    region: "Goa, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "North Goa", nights: 2 },
      { city: "South Goa / Panaji", nights: 1 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Goa — Premium Check-In",
        details: [
          "Arrive at Goa airport/railway station. Transfer to your premium beachside resort. Check in, welcome drink, and leisure time to explore the resort and beach. Enjoy a lavish dinner at the resort restaurant. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Premium Sightseeing",
        details: [
          "After breakfast, explore the best of North Goa — Mapusa market, St. Jerome Church, Vagator Beach, Anjuna Beach, Calangute Beach (water sports optional), and iconic Fort Aguada. Exclusive evening cocktails at a beachfront bar with live music. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa & Panaji Heritage + Cruise",
        details: [
          "After breakfast, tour South Goa — Miramar Beach, Dona Paula, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Explore Panaji's colourful Fontainhas Latin Quarter. Evening Mandovi River Cruise with Goan folk music, dance, and dinner. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details: [
          "After a leisurely breakfast, enjoy a final walk on the beach. Shop for Goan specialities — cashews, spices, feni, and handicrafts. Transfer to Goa airport/railway station. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "North Goa · South Goa · Panaji" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "GOA-MWP-153" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Customised — 2 to 10 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 154 — Goa Tour Package with Flight
  // ─────────────────────────────────────────────
  {
    id: 154,
    country: "India",
    place: "Goa",
    title: "Goa Tour Package with Flight",
    type: "Honeymoon packages",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 32500,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Flight",
    src: "/goa-flight.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Plane", label: "Flight", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Return flights Delhi ↔ Goa included" },
      { title: "North Goa — Fort Aguada, Calangute & Baga Beach" },
      { title: "South Goa — Basilica of Bom Jesus & Dona Paula" },
      { title: "Mandovi River Cruise & Goan spice plantation visit" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/goa-flight1.jpg",
      alt: "Goa Tour Package with Flight — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "The all-inclusive flight package was such great value. No stress about booking flights separately. Indruka Trips and Trip handled everything from Delhi to Goa and back perfectly.",
        author: "Suresh Pillai",
        date: "Travelled February 2026",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Seamless experience — flight, hotel, transfers, and sightseeing all in one package. Goa's beaches were stunning and the guide was very knowledgeable.",
        author: "Ananya Desai",
        date: "Travelled January 2026",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/goa-flight2.jpg",
        alt: "Goa Tour Package with Flight",
      },
      {
        id:2,
      src: "/goa1.jpg",
        alt: "Goa Tour Package with Flight",
      },
      {
        id: 3,
      src: "/goa3.jpg",
        alt: "Goa Tour Package with Flight",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Goa", href: "/india/goa" },
      { label: "Goa Tour Package with Flight" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "FLIGHT INCLUDED", variant: "outlined" as const, color: "teal" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 2,
    region: "Goa, India",

    itineraryStops: [
      { city: "Delhi Airport (Departure)", nights: 0 },
      { city: "North Goa", nights: 2 },
      { city: "South Goa / Panaji", nights: 1 },
      { city: "Delhi Airport (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Fly to Goa — Arrival",
        details: [
          "Depart Delhi by morning flight to Goa (Dabolim/Mopa Airport). On arrival, our representative meets you and transfers you to your hotel. Check in, freshen up, and enjoy breakfast. Evening at the nearest beach for sunset and Goan seafood dinner. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Sightseeing",
        details: [
          "After breakfast, full-day North Goa tour — Mapusa market, St. Jerome Church, Vagator Beach, Anjuna Beach, Calangute & Baga Beach (water sports available at own cost), and Fort Aguada. Evening at leisure — flea market or beach shack. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa, Panaji & Mandovi Cruise",
        details: [
          "After breakfast, South Goa tour — Miramar Beach, Dona Paula, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Afternoon: Goan spice plantation visit (optional). Evening Mandovi River Cruise with live folk dance and dinner. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Fly back to Delhi — Departure",
        details: [
          "After breakfast, leisure time for shopping (cashews, spices, feni). Transfer to Goa airport for your return flight to Delhi. Arrive Delhi by evening. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "North Goa · South Goa · Panaji" },
      { label: "Departure & Return", value: "Delhi (Flight Included)" },
      { label: "Tour Code", value: "GOA-FLT-154" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 155 — Amazing Goa Fiesta Tour
  // ─────────────────────────────────────────────
  {
    id: 155,
    country: "India",
    place: "Goa",
    title: "Amazing Goa Fiesta Tour",
    type: "Honeymoon packages",
    duration: "5 Days / 4 Nights",
    durationTag: "5 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 25900,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/goa-fiesta.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "North Goa — beaches, Fort Aguada & Anjuna flea market" },
      { title: "Water sports — Jet Ski, Parasailing & Banana Boat" },
      { title: "South Goa — UNESCO churches, Mangeshi Temple & Colva Beach" },
      { title: "Mandovi River Cruise & Goan spice plantation visit" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/goa-fiesta1.jpg",
      alt: "Amazing Goa Fiesta Tour — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "5 days packed with beaches, adventure, heritage, and nightlife — the Goa Fiesta package truly has it all! Indruka Trips and Trip organised everything flawlessly.",
        author: "Rohan Tiwari",
        date: "Travelled December 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The spice plantation visit was a wonderful surprise — so much to learn and taste! Combined with the beach days and the Mandovi cruise, this was a perfect 5-day Goa holiday.",
        author: "Priya Iyer",
        date: "Travelled November 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
src: "/goa-fiesta3.jpg",
        alt: "Amazing Goa Fiesta Tour",
      },
      {
        id: 1,
src: "/goa-fiesta5.jpg",
        alt: "Amazing Goa Fiesta Tour",
      },
       {
        id: 1,
src: "/goa.jpg",
        alt: "Amazing Goa Fiesta Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Goa", href: "/india/goa" },
      { label: "Amazing Goa Fiesta Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "BEST VALUE", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 5,
    countryCount: 1,
    cityCount: 2,
    region: "Goa, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "North Goa", nights: 3 },
      { city: "South Goa / Panaji", nights: 1 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Goa",
        details: [
          "Arrive at Goa airport/railway station. Transfer to hotel, check in and freshen up. Afternoon leisure at the beach. Evening explore Panaji — Fontainhas Latin Quarter and local seafood restaurants. Overnight stay."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Beaches & Sightseeing",
        details: [
          "After breakfast, explore North Goa — Mapusa market, St. Jerome Church, Vagator, Anjuna, and Calangute beaches. Visit Fort Aguada for panoramic sea views. Evening at Anjuna or Arpora flea market for shopping and street food. Overnight stay."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "North Goa Water Sports Day",
        details: [
          "After breakfast, full water sports session at Baga/Calangute — Jet Ski, Parasailing, Banana Boat Ride, Speed Boat, and Water Skiing. Afternoon: optional Bungee Jumping or ATV rides. Evening at leisure — beach shack, cocktails, and live music. Overnight stay."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "South Goa & Mandovi River Cruise",
        details: [
          "After breakfast, South Goa tour — Miramar Beach, Dona Paula, Colva Beach, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Afternoon: Goan spice plantation visit. Evening Mandovi River Cruise with live Goan music and dinner. Overnight stay."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Goa → Delhi — Departure",
        details: [
          "After a relaxed breakfast, last stroll on the beach and shopping for Goan specialities — cashews, kokum, feni, spices, and handicrafts. Transfer to Goa airport/railway station. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      { label: "Destinations", value: "North Goa · South Goa · Panaji" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "GOA-FIE-155" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    
  },

 



  {
    id: 179,
    country: "India",
    place: "Nainital",
    title: "Nainital Tour Package from Delhi",
    type: "Hill Stations & Nature Destinations",
    duration: "3 Days / 2 Nights",
    durationTag: "3 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Nainital"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 13300,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/nainital.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Mall Road Stroll" },
      { title: "Naina Devi Temple Darshan" },
      { title: "Snow View Point (Cable Car Ride)" },
      { title: "Eco Cave Gardens & Tiffin Top Visit" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/nainital2.jpg",
      alt: "Nainital Tour Package from Delhi",
    },

    testimonials: [
      {
        id: 1,
        text: "A perfect 3-day getaway from Delhi! Nainital's lake and misty mountains were breathtaking. Indruka Trips and Trip's arrangements were seamless — hotel was great, transfers on time.",
        author: "Ananya Kapoor",
        date: "Travelled October 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The cable car ride to Snow View Point was the highlight! Everything was well organized by Indruka Trips and Trip. Ideal short trip for families.",
        author: "Rajat Sinha",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
      src: "/nainital4.jpg",
        alt: "Nainital Lake View",
      },
      {
        id: 2,
      src: "/nainital5.jpg",
        alt: "Snow View Point Nainital",
      },
      {
        id: 3,
      src: "/nainital6.jpg",
        alt: "Nainital Mall Road",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Nainital Tour Package from Delhi" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "3 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 3,
    countryCount: 1,
    cityCount: 2,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi (Departure)", nights: 0 },
      { city: "Nainital", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Nainital",
        details: [
          "Depart Delhi early morning by coach (approx. 6–7 hrs). Arrive Nainital; check-in to hotel. Evening stroll on Mall Road and Naini Lake. Enjoy a peaceful lakeside dinner. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Full-Day Nainital Sightseeing",
        details: [
          "Morning visit Naina Devi Temple on the northern shore of Naini Lake. Take a cable car to Snow View Point for panoramic Himalayan vistas. Explore Eco Cave Gardens and visit Tiffin Top (Dorothy's Seat) for sunset views. Evening boating on Naini Lake. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Delhi",
        details: [
          "Morning at leisure — visit Bara Bazaar for local woolens and handicrafts. Post-breakfast, drive back to Delhi. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Destinations", value: "Delhi · Nainital" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "NNT-DEL-3D-01" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  {
    id: 181,
    country: "India",
    place: "Nainital",
    title: "Nainital Corbett Weekend Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Nainital", "Corbett"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 14900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/nainital-corb-banner.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Snow View Point" },
      { title: "Jim Corbett National Park Jeep Safari" },
      { title: "Tiger & Wildlife Spotting in Corbett" },
      { title: "Corbett Museum & Garjia Devi Temple" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src:  "/nainital-corb-banner.jpg",
      alt: "Nainital Corbett Weekend Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Two incredible experiences in one trip — the misty lakes of Nainital and the thrilling Corbett jeep safari! Indruka Trips and Trip planned it perfectly.",
        author: "Kunal Mehta",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We spotted a tiger on the Corbett safari — a life memory! The Nainital portion was equally beautiful. Great value 4-day package.",
        author: "Nisha Joshi",
        date: "Travelled October 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/nainital-corb-banner2.jpg",
        alt: "src",
      },
      {
        id: 2,
        src: "/nainital7.jpg",
        alt: "src",
      },
      {
        id: 3,
        src: "/nainital8.jpg",
        alt: "src",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Nainital Corbett Weekend Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "WILDLIFE", variant: "outlined" as const, color: "orange" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 3,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Nainital", nights: 1 },
      { city: "Jim Corbett", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Nainital",
        details: [
          "Depart Delhi by coach. Arrive Nainital; check-in. Evening at Naini Lake and Mall Road. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing → Corbett",
        details: [
          "Morning: Naina Devi Temple and Snow View Point (cable car). Post-lunch drive to Jim Corbett National Park. Check-in to jungle resort. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jim Corbett Jeep Safari",
        details: [
          "Early morning jeep safari into Dhikala or Bijrani zone — spot tigers, elephants, leopards, and diverse birdlife. Afternoon visit Garjia Devi Temple and Corbett Museum. Overnight at resort."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Corbett → Delhi",
        details: [
          "Optional early morning nature walk. Post-breakfast drive to Delhi. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Nainital · Jim Corbett National Park",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "NNT-CORB-DEL-03" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "November–June (Corbett Safari Season)" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },


  {
    id: 182,
    country: "India",
    place: "Nainital",
    title: "Uttarakhand Bird Watching Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "5 Days / 4 Nights",
    durationTag: "5 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Corbett", "Sat Tal", "Nainital"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 18900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/nainital-bird.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Corbett National Park — Over 600 Bird Species" },
      { title: "Sat Tal Lakes — Migratory Bird Hotspot" },
      { title: "Nainital Bird Watching at High Altitude" },
      { title: "Expert Naturalist-Led Bird Walks" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/nainital-bird.jpg",
      alt: "Uttarakhand Bird Watching Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "A birder's paradise! We spotted over 120 species in 5 days across Corbett and Sat Tal. The expert guide from Indruka Trips and Trip was phenomenal.",
        author: "Dr. Suresh Nair",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Sat Tal in winter is magical — hundreds of migratory birds! The itinerary was perfectly crafted for serious birders. Highly recommended.",
        author: "Geeta Krishnan",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/nainital-bird2.jpg",
        alt: "Bird Watching Uttarakhand",
      },
      {
        id: 2,
        src:  "/nainital-bird3.jpg",
        alt: "Sat Tal Lake Birdwatching",
      },
      {
        id: 3,
        src:  "/nainital-bird4.jpg",
        alt: "Corbett National Park Birds",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Uttarakhand Bird Watching Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "WILDLIFE", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 5,
    countryCount: 1,
    cityCount: 4,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Jim Corbett", nights: 2 },
      { city: "Sat Tal", nights: 1 },
      { city: "Nainital", nights: 1 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Jim Corbett",
        details: [
          "Depart Delhi by coach. Arrive Jim Corbett; check-in to birding resort. Afternoon nature walk with expert naturalist guide. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Corbett Birding — Full Day",
        details: [
          "Early morning bird walk along Ramganga riverine forest — spot Pallas's fish eagle, great hornbill, and hundreds of resident Himalayan species. Afternoon rest and evening riverside bird watch. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Corbett → Sat Tal",
        details: [
          "Post-breakfast drive to Sat Tal (Seven Lakes). Afternoon birding around the seven interconnected lakes — a premier winter migratory bird destination. Spot Oriental turtle dove, common teal, and kingfishers. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Sat Tal → Nainital",
        details: [
          "Dawn bird walk at Sat Tal. Drive to Nainital. Afternoon birding at Kilbury Bird Sanctuary — one of Kumaon's top high-altitude birding spots. Overnight in Nainital."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Nainital → Delhi",
        details: [
          "Morning birding at Pangot village (a top birding village near Nainital). Post-breakfast drive to Delhi. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jim Corbett · Sat Tal · Nainital · Pangot",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "NNT-BIRD-DEL-04" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "October–March (Winter migratory season)" },
      { label: "Group Size", value: "Small group — 2 to 12 passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 183 — Hills of Kumaon Tour Package
  // ─────────────────────────────────────────────
  {
    id: 183,
    country: "India",
    place: "Nainital",
    title: "Hills of Kumaon Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Nainital", "Ranikhet", "Almora"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 28900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/kumaon.webp",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Snow View Point" },
      { title: "Ranikhet Golf Course & Chaubatia Orchards" },
      { title: "Almora — Kasar Devi Temple & Bright End Corner" },
      { title: "Chitai Golu Devta Temple & Binsar Views" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/kumaon.webp",
      alt: "Hills of Kumaon Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The most authentic Uttarakhand experience! Ranikhet and Almora are hidden gems — unspoilt, peaceful, and stunning. Indruka Trips and Trip curated a brilliant 7-day route.",
        author: "Vinod Chauhan",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Almora's Kasar Devi temple and the Himalayan panorama from Bright End Corner were unforgettable. A truly off-the-beaten-path Kumaon tour.",
        author: "Ritu Pandey",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/KumaonTour.jpg",
        alt: "Hills of Kumaon",
      },
      {
        id: 2,
        src: "/KumaonTour2.jpg",
        alt: "Ranikhet Chaubatia Orchards",
      },
      {
        id: 3,
        src: "/nainital12.jpg",
        alt: "Almora Bright End Corner",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Hills of Kumaon Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "7 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 4,
    region: "Kumaon, Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Nainital", nights: 2 },
      { city: "Ranikhet", nights: 2 },
      { city: "Almora", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Nainital",
        details: [
          "Depart Delhi. Arrive Nainital; check-in. Evening at Naini Lake and Mall Road. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing",
        details: [
          "Visit Snow View Point (cable car), Naina Devi Temple, Eco Cave Gardens, Tiffin Top, and High Altitude Zoo. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Ranikhet",
        details: [
          "Drive to Ranikhet (approx. 2 hrs). Check-in. Explore Chaubatia Orchards (apple, apricot, peach), the Jhula Devi Temple, and the famous Ranikhet Golf Course (one of Asia's highest). Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Ranikhet Sightseeing",
        details: [
          "Visit Kalika Temple, Binsar Mahadev Temple, Upat & Kalika golf courses, and Majhkhali viewpoint. Panoramic Himalayan views including Nanda Devi. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Ranikhet → Almora",
        details: [
          "Drive to Almora (approx. 2 hrs). Check-in. Explore Lala Bazaar for traditional Kumaoni sweets and brassware. Overnight."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Almora Sightseeing",
        details: [
          "Visit Kasar Devi Temple (once home to Swami Vivekananda), Chitai Golu Devta Temple (famous for petition bells), Bright End Corner sunset, and Almora Deer Park. Overnight."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Almora → Delhi",
        details: [
          "Post-breakfast drive to Delhi (approx. 9 hrs). Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Destinations", value: "Delhi · Nainital · Ranikhet · Almora" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "KUM-HILLS-DEL-05" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 184 — Wonders of Kumaon Tour Package
  // ─────────────────────────────────────────────
  

  // ─────────────────────────────────────────────
  // ID 185 — Uttarakhand Delights Tour Package
  // ─────────────────────────────────────────────
  {
    id: 185,
    country: "India",
    place: "Nainital",
    title: "Uttarakhand Delights Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Nainital", "Ranikhet", "Corbett", "Mussoorie"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 32900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/UDelight.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Nainital Lakes & Snow View Point" },
      { title: "Ranikhet — Queen's Meadow Cantonement Town" },
      { title: "Corbett National Park Jeep Safari" },
      { title: "Mussoorie — Queen of Hill Stations & Kempty Falls" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/UUDelight.jpg",
      alt: "Uttarakhand Delights Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Covering Nainital, Ranikhet, Corbett and Mussoorie in one trip was fantastic. Each destination was so different. Indruka Trips and Trip made the logistics seamless.",
        author: "Sanjay Tripathi",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Mussoorie's Kempty Falls and Corbett's safari were the highlights of our trip! Great 8-day Uttarakhand package at an excellent price.",
        author: "Meena Rawat",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/Udelight1.jpg",
        alt: "Uttarakhand Delights",
      },
      {
        id: 2,
        src:  "/UDelight2.jpg",
        alt: "Kempty Falls Mussoorie",
      },
      {
        id: 3,
        src:  "/UDelight3.jpg",
        alt: "Mussoorie Mall Road",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Uttarakhand Delights Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "8 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Nainital", nights: 2 },
      { city: "Ranikhet", nights: 1 },
      { city: "Jim Corbett", nights: 2 },
      { city: "Mussoorie", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Nainital",
        details: [
          "Depart Delhi. Arrive Nainital. Check-in. Evening at Naini Lake. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing",
        details: [
          "Snow View Point, Naina Devi Temple, Eco Cave Gardens, High Altitude Zoo. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Ranikhet",
        details: [
          "Drive to Ranikhet. Visit Chaubatia Orchards and Jhula Devi Temple. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Ranikhet → Corbett",
        details: [
          "Drive to Corbett. Check-in to jungle resort. Evening nature walk. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Corbett Jeep Safari",
        details: [
          "Morning and afternoon jeep safaris — spot tigers, elephants, and diverse birds. Overnight."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Corbett → Mussoorie",
        details: [
          "Drive to Mussoorie (approx. 4 hrs). Check-in. Evening at Mall Road and Gun Hill Point (cable car). Overnight."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Mussoorie Sightseeing",
        details: [
          "Visit Kempty Falls, Lal Tibba (highest point in Mussoorie), Camel's Back Road, Landour Clock Tower, and Cloud's End. Overnight."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Mussoorie → Delhi",
        details:[ "Post-breakfast drive to Delhi. Tour concludes."],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Nainital · Ranikhet · Corbett · Mussoorie",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "UK-DELIGHT-DEL-07" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  {
    id: 201,
    country: "India",
    place: "Darjeeling",
    title: "Darjeeling Heritage Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "3 Days / 2 Nights",
    durationTag: "3 Days",
    startEnd: "Bagdogra → Bagdogra",
    destinations: ["Darjeeling"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 9999,
    rating: 4.6,
    reviews: 84,
    badge: "Budget",
    badgeColor: "bg-green-600",
    mode: "Road",
    src: "/darjeeling-banner.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Tiger Hill Sunrise over Kanchenjunga" },
      { title: "Darjeeling Himalayan Railway (Toy Train) Ride" },
      { title: "Batasia Loop & War Memorial" },
      { title: "Happy Valley Tea Estate & Himalayan Zoo" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/darjeeling-banner.jpg",
      alt: "Darjeeling Heritage Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The toy train ride and Tiger Hill sunrise were two bucket list experiences in one trip! Darjeeling is magical and Indruka Trips and Trip made it very affordable.",
        author: "Kaveri Sen",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Perfect 3-day getaway! The tea estate tour was fascinating and the Kanchenjunga views from Tiger Hill at sunrise were absolutely breathtaking.",
        author: "Arnab Ghosh",
        date: "Travelled October 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/darjeeling.jpg",
        alt: "Darjeeling Heritage",
      },
      {
        id: 2,
        src: "/darjeeling1.jpg",
        alt: "Darjeeling Toy Train",
      },
      {
        id: 3,
        src: "/darjeeling4.jpg",
        alt: "Tiger Hill Sunrise",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Darjeeling", href: "/india/darjeeling" },
      { label: "Darjeeling Heritage Tour Package" },
    ],

    badges: [
      { label: "BUDGET", variant: "solid" as const, color: "green" },
      { label: "3 DAYS", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 3,
    countryCount: 1,
    cityCount: 1,
    region: "West Bengal, India",

    itineraryStops: [
      { city: "Bagdogra (Arrival)", nights: 0 },
      { city: "Darjeeling", nights: 2 },
      { city: "Bagdogra (Departure)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Bagdogra → Darjeeling",
        details: [
          "Arrive Bagdogra airport. Transfer to Darjeeling (approx. 3 hrs via NH10). Check-in to hotel. Evening at Mall Road — enjoy hot Darjeeling tea. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Tiger Hill Sunrise & Darjeeling Sightseeing",
        details: [
          "Pre-dawn drive to Tiger Hill for the legendary sunrise view over Kanchenjunga and Mt. Everest. Return via Ghoom Monastery and Batasia Loop. Breakfast at hotel. Visit Himalayan Mountaineering Institute & Zoo, Happy Valley Tea Estate, Padmaja Naidu Zoological Park, Tibetan Refugee Self-Help Centre. Afternoon toy train ride (joy ride). Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Darjeeling → Bagdogra — Departure",
        details: [
          "Morning at leisure — browse Chowrasta market for teas and handicrafts. Transfer to Bagdogra airport. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Destinations", value: "Bagdogra · Darjeeling" },
      { label: "Departure & Return", value: "Bagdogra Airport" },
      { label: "Tour Code", value: "DRJ-HERITAGE-BGD-01" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–May & October–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 202 — Darjeeling with Gangtok Tour Package
  // ─────────────────────────────────────────────
  {
    id: 202,
    country: "India",
    place: "Darjeeling",
    title: "Darjeeling with Gangtok Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "5 Days / 4 Nights",
    durationTag: "5 Days",
    startEnd: "Bagdogra → Bagdogra",
    destinations: ["Gangtok", "Nathula Pass", "Darjeeling"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 13999,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/dar-gangtok.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Nathula Pass (14,140 ft) — India-China Border" },
      { title: "Rumtek Monastery & Ganesh Tok, Gangtok" },
      { title: "Tiger Hill Sunrise & Darjeeling Toy Train" },
      { title: "Happy Valley Tea Estate & Himalayan Zoo" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/dar-gangtok.jpg",
      alt: "Darjeeling with Gangtok Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Nathula Pass was surreal — standing at the India-China border at 14,000 ft! Gangtok and Darjeeling both had their own unique charm. A brilliant 5-day tour.",
        author: "Rohit Banerjee",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Combining Gangtok and Darjeeling in one package was the best decision. Indruka Trips and Trip managed the Nathula Pass permits efficiently — highly recommended!",
        author: "Divya Krishnamurthy",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/dar-gangtok1.jpg",
        alt: "Darjeeling Gangtok Tour",
      },
      {
        id: 2,
        src:"/dar-gangtok2.jpg",
        alt: "Nathula Pass",
      },
      {
        id: 3,
        src: "/dar-gangtok3.jpg",
        alt: "Rumtek Monastery",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Darjeeling", href: "/india/darjeeling" },
      { label: "Darjeeling with Gangtok Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "5 DAYS", variant: "outlined" as const, color: "purple" },
    ],

    durationDays: 5,
    countryCount: 1,
    cityCount: 3,
    region: "Sikkim & West Bengal, India",

    itineraryStops: [
      { city: "Bagdogra", nights: 0 },
      { city: "Gangtok", nights: 2 },
      { city: "Darjeeling", nights: 2 },
      { city: "Bagdogra (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Bagdogra → Gangtok",
        details: [
          "Arrive Bagdogra. Drive to Gangtok (approx. 4 hrs). Check-in. Evening at MG Marg. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nathula Pass & Gangtok Sightseeing",
        details: [
          "Morning excursion to Nathula Pass (permit required). Return to Gangtok. Afternoon: Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, and Flower Show (seasonal). Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Gangtok → Darjeeling",
        details: [
          "Drive to Darjeeling (approx. 4 hrs). Check-in. Evening stroll at Mall Road and Chowrasta. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Tiger Hill & Darjeeling Sightseeing",
        details: [
          "Pre-dawn Tiger Hill sunrise drive. Ghoom Monastery, Batasia Loop, Himalayan Zoo, Tea Estate, and toy train joy ride. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Darjeeling → Bagdogra",
        details: ["Morning at leisure. Transfer to Bagdogra. Tour concludes."],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      {
        label: "Destinations",
        value: "Bagdogra · Gangtok · Nathula Pass · Darjeeling",
      },
      { label: "Departure & Return", value: "Bagdogra Airport" },
      { label: "Tour Code", value: "DRJ-GANGTOK-BGD-02" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–May & October–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 203 — Darjeeling Honeymoon Package
  // ─────────────────────────────────────────────
  {
    id: 203,
    country: "India",
    place: "Darjeeling",
    title: "Darjeeling Honeymoon Package",
    type: "Hill Stations & Nature Destinations",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Bagdogra → Bagdogra",
    destinations: ["Bagdogra", "Darjeeling", "Gangtok"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 16999,
    rating: 4.8,
    reviews: 97,
    badge: "Honeymoon",
    badgeColor: "bg-pink-600",
    mode: "Road",
    src: "/darjeeling4.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Romantic Tiger Hill Sunrise — Kanchenjunga Views" },
      { title: "Darjeeling Toy Train Couple Ride" },
      { title: "Gangtok MG Marg Evening & Ropeway Ride" },
      { title: "Tsomgo Lake Excursion — High-Altitude Glacial Lake" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/darjeeling4.jpg",
      alt: "Darjeeling Honeymoon Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The most romantic honeymoon destination! Darjeeling's misty mornings and Gangtok's vibrant evenings were perfect contrasts. Every detail was taken care of by Indruka Trips and Trip.",
        author: "Aman & Shreya Kapoor",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Watching sunrise over Kanchenjunga together from Tiger Hill was the most beautiful moment of our honeymoon. Indruka Trips and Trip made it a dream come true!",
        author: "Nitin & Pooja Sharma",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/darjeeling5.jpg",
        alt: "Darjeeling Honeymoon",
      },
      {
        id: 2,
        src: "/darjeeling6.jpg",
        alt: "Tsomgo Lake Gangtok",
      },
      {
        id: 3,
        src: "/darjeeling6.jpg",
        alt: "Darjeeling Tea Garden Couple",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Darjeeling", href: "/india/darjeeling" },
      { label: "Darjeeling Honeymoon Package" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "6 DAYS", variant: "outlined" as const, color: "purple" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 3,
    region: "West Bengal & Sikkim, India",

    itineraryStops: [
      { city: "Bagdogra", nights: 0 },
      { city: "Darjeeling", nights: 3 },
      { city: "Gangtok", nights: 2 },
      { city: "Bagdogra (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Bagdogra → Darjeeling",
        details: [
          "Arrive Bagdogra. Transfer to Darjeeling. Check-in to romantic hill-view hotel. Evening at Chowrasta with hot Darjeeling tea. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Tiger Hill Sunrise & Sightseeing",
        details: [
          "Pre-dawn Tiger Hill sunrise drive — Kanchenjunga and Mt. Everest views. Ghoom Monastery, Batasia Loop, Zoo, Tea Estate, toy train joy ride. Romantic dinner. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Darjeeling Leisure",
        details: [
          "Morning walk through tea gardens. Visit Rock Garden and Gorkha Rangit Valley Ropeway (cable car). Evening at leisure. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Darjeeling → Gangtok",
        details: [
          "Drive to Gangtok (approx. 4 hrs). Check-in. Evening stroll at MG Marg. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Tsomgo Lake & Gangtok Sightseeing",
        details: [
          "Morning excursion to Tsomgo Lake (12,400 ft glacial lake) and Baba Mandir. Return to Gangtok. Afternoon: Rumtek Monastery, Ganesh Tok, and Ropeway ride. Romantic dinner. Overnight."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Gangtok → Bagdogra",
        details: [
          "Morning at leisure. Transfer to Bagdogra airport. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Bagdogra · Darjeeling · Gangtok · Tsomgo Lake",
      },
      { label: "Departure & Return", value: "Bagdogra Airport" },
      { label: "Tour Code", value: "DRJ-HONEY-BGD-03" },
      {
        label: "Meals",
        value: "Breakfast & Dinner included (Candle-light dinner on request)",
      },
      { label: "Best Time", value: "October–December & February–May" },
      { label: "Group Size", value: "Couples — Private Tour" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 204 — Darjeeling Kalimpong Gangtok Tour
  // ─────────────────────────────────────────────
  {
    id: 204,
    country: "India",
    place: "Darjeeling",
    title: "Darjeeling Kalimpong Gangtok Tour",
    type: "Hill Stations & Nature Destinations",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Bagdogra → Bagdogra",
    destinations: ["Kalimpong", "Gangtok", "Darjeeling"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 15999,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/DGkalipong-banner.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Kalimpong — Flower Nurseries & Deolo Hill Viewpoint" },
      { title: "Gangtok MG Marg & Rumtek Monastery" },
      { title: "Tiger Hill Sunrise & Darjeeling Toy Train" },
      { title: "Three Distinct Himalayan Hill Towns in One Tour" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/DGkalipong-banner.jpg",
      alt: "Darjeeling Kalimpong Gangtok Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "Three beautiful hill towns in 6 days — Kalimpong was the most underrated! The flower nurseries and Deolo Hill views were incredible. Great itinerary by Indruka Trips and Trip.",
        author: "Sudha Rao",
        date: "Travelled October 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Each town had its own unique personality. Kalimpong was artsy, Gangtok buzzing, and Darjeeling serene. Wonderfully balanced 6-day trip.",
        author: "Vivek Das",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/DGkalipong1.jpg",
        alt: "Darjeeling Kalimpong Gangtok",
      },
      {
        id: 2,
        src: "/DGkalipong2.jpg",
        alt: "Kalimpong Deolo Hill",
      },
      {
        id: 3,
        src: "/DGkalipong3.jpg",
        alt: "Kalimpong Flower Nurseries",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Darjeeling", href: "/india/darjeeling" },
      { label: "Darjeeling Kalimpong Gangtok Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "6 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "West Bengal & Sikkim, India",

    itineraryStops: [
      { city: "Bagdogra", nights: 0 },
      { city: "Kalimpong", nights: 1 },
      { city: "Gangtok", nights: 2 },
      { city: "Darjeeling", nights: 2 },
      { city: "Bagdogra (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Bagdogra → Kalimpong",
        details: [
          "Arrive Bagdogra. Drive to Kalimpong (approx. 3 hrs). Check-in. Explore Deolo Hill for panoramic views of Kanchenjunga. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Kalimpong → Gangtok",
        details: [
          "Morning visit Kalimpong's famous flower nurseries, Zang Dhok Palri Phodang Monastery, and Morgan House. Drive to Gangtok. Check-in. Evening at MG Marg. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Gangtok Sightseeing",
        details: [
          "Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, Sikkim State Museum, and Ropeway ride. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gangtok → Darjeeling",
        details: [
          "Drive to Darjeeling (approx. 4 hrs). Check-in. Evening at Mall Road and Chowrasta. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Tiger Hill & Darjeeling Sightseeing",
        details: [
          "Pre-dawn Tiger Hill drive. Batasia Loop, Ghoom Monastery, Happy Valley Tea Estate, Himalayan Mountaineering Institute, Zoo, and toy train ride. Overnight."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Darjeeling → Bagdogra",
        details: [
          "Morning shopping at Chowrasta. Transfer to Bagdogra. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Bagdogra · Kalimpong · Gangtok · Darjeeling",
      },
      { label: "Departure & Return", value: "Bagdogra Airport" },
      { label: "Tour Code", value: "DRJ-KAL-GANGTOK-BGD-04" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–May & October–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 205 — Darjeeling Gangtok Lachung Tour
  // ─────────────────────────────────────────────
  {
    id: 205,
    country: "India",
    place: "Darjeeling",
    title: "Darjeeling Gangtok Lachung Tour",
    type: "Hill Stations & Nature Destinations",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Bagdogra → Bagdogra",
    destinations: ["Gangtok", "Darjeeling", "Lachung", "Lachen"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 27000,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/DGlachung2.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Lachung — Remote North Sikkim Alpine Village" },
      { title: "Yumthang Valley (Valley of Flowers)" },
      { title: "Lachen & Gurudongmar Lake (17,800 ft)" },
      { title: "Tiger Hill Sunrise & Darjeeling Toy Train" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/DGlachung2.jpg",
      alt: "Darjeeling Gangtok Lachung Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "Gurudongmar Lake at 17,800 ft was the most awe-inspiring moment of our lives! Indruka Trips and Trip managed all the high-altitude permits and logistics seamlessly.",
        author: "Manish Agarwal",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Yumthang Valley in bloom was like a painting — thousands of rhododendrons everywhere! This North Sikkim extension made our Darjeeling tour truly epic.",
        author: "Shalini Bose",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/DGlachung1.jpg",
        alt: "Lachung Sikkim",
      },
      {
        id: 2,
        src: "/DGlachung4.jpg",
        alt: "Yumthang Valley of Flowers",
      },
      {
        id: 3,
        src: "/DGlachung4.jpg",
        alt: "Gurudongmar Lake",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Darjeeling", href: "/india/darjeeling" },
      { label: "Darjeeling Gangtok Lachung Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "8 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Sikkim & West Bengal, India",

    itineraryStops: [
      { city: "Bagdogra", nights: 0 },
      { city: "Gangtok", nights: 2 },
      { city: "Lachung", nights: 1 },
      { city: "Lachen", nights: 1 },
      { city: "Darjeeling", nights: 2 },
      { city: "Bagdogra (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Bagdogra → Gangtok",
        details: [
          "Arrive Bagdogra. Drive to Gangtok (4 hrs). Check-in. Evening MG Marg. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Gangtok Sightseeing",
        details: [
          "Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, Ropeway ride. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Gangtok → Lachung",
        details: [
          "Drive to Lachung (4–5 hrs) through North Sikkim — stunning gorge and waterfall scenery. Check-in to homestay. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Yumthang Valley Excursion",
        details: [
          "Morning excursion to Yumthang Valley (Valley of Flowers, 11,800 ft) — rhododendrons, hot springs, and glacial streams. Return to Lachung. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Lachung → Lachen",
        details: [
          "Drive to Lachen village. En-route visit Chungthang confluence. Overnight at Lachen."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Gurudongmar Lake → Gangtok",
        details: [
          "Pre-dawn drive to Gurudongmar Lake (17,800 ft) — one of the world's highest lakes, sacred to both Buddhists and Hindus. Return and drive to Gangtok. Overnight."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Gangtok → Darjeeling",
        details: [
          "Drive to Darjeeling. Check-in. Evening at Mall Road. Overnight."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Tiger Hill & Departure",
        details: [
          "Pre-dawn Tiger Hill sunrise. Batasia Loop, Ghoom Monastery. Transfer to Bagdogra airport. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value:
          "Bagdogra · Gangtok · Lachung · Yumthang · Lachen · Gurudongmar · Darjeeling",
      },
      { label: "Departure & Return", value: "Bagdogra Airport" },
      { label: "Tour Code", value: "DRJ-LACHUNG-BGD-05" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "March–May & October–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  // ─────────────────────────────────────────────
  // ID 206 — Eastern Himalayas Tour Package
  // ─────────────────────────────────────────────
  {
    id: 206,
    country: "India",
    place: "Darjeeling",
    title: "Eastern Himalayas Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Bagdogra → Bagdogra",
    destinations: ["Bagdogra", "Kalimpong", "Gangtok", "Darjeeling"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 25999,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/darjeeling10.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Kalimpong Flower Nurseries & Deolo Hill" },
      { title: "Gangtok — Nathula Pass & Tsomgo Lake" },
      { title: "Tiger Hill Sunrise & Toy Train, Darjeeling" },
      { title: "9-Day Comprehensive Eastern Himalaya Coverage" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/darjeeling10.jpg",
      alt: "Eastern Himalayas Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The most comprehensive Eastern Himalaya tour available. 9 days covering Kalimpong, Gangtok and Darjeeling — each with its own unique beauty. Indruka Trips and Trip was exceptional.",
        author: "Priya Chakraborty",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From Nathula Pass to Kanchenjunga sunrise — this tour had it all! Brilliant value for 9 days covering the best of East India's hill stations.",
        author: "Sunil Mukherjee",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/darjeeling11",
        alt: "Eastern Himalayas",
      },
      {
        id: 2,
        src: "/darjeeling12",
        alt: "Tsomgo Lake",
      },
      {
        id: 3,
        src: "/darjeeling13",
        alt: "Kanchenjunga Sunrise",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Darjeeling", href: "/india/darjeeling" },
      { label: "Eastern Himalayas Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "9 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 9,
    countryCount: 1,
    cityCount: 4,
    region: "West Bengal & Sikkim, India",

    itineraryStops: [
      { city: "Bagdogra", nights: 0 },
      { city: "Kalimpong", nights: 2 },
      { city: "Gangtok", nights: 3 },
      { city: "Darjeeling", nights: 3 },
      { city: "Bagdogra (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Bagdogra → Kalimpong",
        details: [
          "Arrive Bagdogra. Transfer to Kalimpong (3 hrs). Check-in. Evening Deolo Hill. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Kalimpong Sightseeing",
        details: [
          "Flower nurseries (Kalimpong is Asia's top orchid exporter), Zang Dhok Palri Monastery, Morgan House, and Durpin Dara Hill. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kalimpong → Gangtok",
        details: [
          "Drive to Gangtok via Teesta River gorge. Check-in. Evening MG Marg. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gangtok Sightseeing",
        details: [
          "Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, Flower Show (seasonal), Ropeway ride. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Nathula Pass & Tsomgo Lake",
        details: [
          "Morning excursion to Nathula Pass (14,140 ft) — India-China border. Afternoon at Tsomgo (Changu) Lake (12,400 ft). Overnight Gangtok."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Gangtok → Darjeeling",
        details: [
          "Drive to Darjeeling (4 hrs). Check-in. Evening stroll at Mall Road. Overnight."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Tiger Hill & Darjeeling Sightseeing",
        details: [
          "Pre-dawn Tiger Hill sunrise drive. Ghoom Monastery, Batasia Loop, Tea Estate, Himalayan Zoo, and toy train joy ride. Overnight."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Darjeeling Day Excursion",
        details: [
          "Excursion to Mirik — serene lake and tea gardens on the Nepal border. Return to Darjeeling. Overnight."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Darjeeling → Bagdogra",
        details: [
          "Morning shopping at Chowrasta. Transfer to Bagdogra. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations",
        value:
          "Bagdogra · Kalimpong · Gangtok · Nathula Pass · Tsomgo Lake · Darjeeling · Mirik",
      },
      { label: "Departure & Return", value: "Bagdogra Airport" },
      { label: "Tour Code", value: "EHIM-FULL-BGD-06" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–May & October–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },


  {
    id: 207,
    country: "India",
    place: "Munnar",
    title: "Munnar Thekkady Alleppey Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Cochin → Cochin",
    destinations: ["Cochin", "Munnar", "Thekkady", "Alleppey"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 18999,
    rating: 4.7,
    reviews: 108,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/Munnar.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Munnar Tea Plantations & Eravikulam National Park" },
      { title: "Thekkady Periyar Wildlife Sanctuary Boat Ride" },
      { title: "Alleppey Backwaters Houseboat Stay" },
      { title: "Kathakali Dance Performance, Cochin" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src:  "/Munnar.jpg",
      alt: "Munnar Thekkady Alleppey Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The Alleppey houseboat night was the most unique experience! Waking up in the Kerala backwaters was magical. Munnar's tea gardens and Thekkady's wildlife were equally stunning.",
        author: "Siddharth Nair",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kerala in 6 days — absolutely incredible! The houseboat on the backwaters was the highlight but every day had something special. Brilliant package by Indruka Trips and Trip.",
        author: "Radha Menon",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src:  "/Munnar1.jpg",
        alt: "Munnar Tea Plantation",
      },
      {
        id: 2,
        src:  "/Munnar2.jpg",
        alt: "Alleppey Houseboat",
      },
      {
        id: 3,
        src:  "/Munnar3.jpg",
        alt: "Thekkady Periyar Boat Ride",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kerala", href: "/india/kerala" },
      { label: "Munnar Thekkady Alleppey Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "6 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "Kerala, India",

    itineraryStops: [
      { city: "Cochin", nights: 1 },
      { city: "Munnar", nights: 2 },
      { city: "Thekkady", nights: 1 },
      { city: "Alleppey", nights: 1 },
      { city: "Cochin (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Cochin",
        details: [
          "Arrive Cochin airport. Cochin city tour — Fort Kochi, Chinese Fishing Nets, St. Francis Church, Mattancherry Palace, and Jewish Synagogue. Evening Kathakali dance performance. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin → Munnar",
        details: [
          "Drive to Munnar (approx. 4 hrs) through spice plantations. Check-in. Visit Attukal Waterfalls and Echo Point. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Munnar Sightseeing",
        details: [
          "Visit Eravikulam National Park (home of Nilgiri tahr), Tea Museum, Mattupetty Dam, Kundala Lake, and Rajamala. Overnight Munnar."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Munnar → Thekkady",
        details: [
          "Drive to Thekkady (approx. 3 hrs). Spice Plantation visit. Afternoon Periyar Wildlife Sanctuary boat ride — spot elephants, deer, and birds. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Thekkady → Alleppey Houseboat",
        details: [
          "Drive to Alleppey (approx. 4 hrs). Board a traditional Kerala houseboat for an overnight stay on the backwaters — complete with onboard meals and sunset views."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Alleppey → Cochin — Departure",
        details: [
          "Disembark houseboat morning. Drive to Cochin airport. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Cochin · Munnar · Thekkady · Alleppey Backwaters",
      },
      { label: "Departure & Return", value: "Cochin (Kochi) Airport" },
      { label: "Tour Code", value: "KER-MUN-THEK-COC-01" },
      {
        label: "Meals",
        value: "Breakfast & Dinner included (All meals on houseboat)",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  {
    id: 208,
    country: "India",
    place: "Munnar",
    title: "Kerala Hill Stations Tour – Munnar & Wayanad",
    type: "Honeymoon packages",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Cochin → Cochin",
    destinations: ["Cochin", "Munnar", "Wayanad", "Calicut"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 22999,
    rating: 4.6,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/Kerala-Munnar.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Munnar Tea Estates & Eravikulam National Park" },
      { title: "Wayanad Edakkal Caves & Soochipara Waterfalls" },
      { title: "Wayanad Wildlife Sanctuary Jeep Safari" },
      { title: "Calicut Beach & Kozhikode Heritage Walk" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/Kerala-Munnar.jpg",
      alt: "Kerala Hill Stations Tour – Munnar & Wayanad",
    },

    testimonials: [
      {
        id: 1,
        text: "Wayanad was the highlight — the Edakkal Caves with ancient rock art were fascinating! Munnar's tea gardens were spectacular. A perfect Kerala hill stations tour.",
        author: "Aditya Kumar",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We loved exploring both Munnar and Wayanad in one trip. Two very different green landscapes. The Wayanad wildlife safari was thrilling. Excellent trip planning!",
        author: "Sangeetha Pillai",
        date: "Travelled March 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/Kerala-Munnar1.jpg",
        alt: "Wayanad Soochipara Falls",
      },
      {
        id: 2,
        src: "/Kerala-Munnar2.jpg",
        alt: "Edakkal Caves Wayanad",
      },
      {
        id: 3,
        src: "/Kerala-Munnar3.jpg",
        alt: "Calicut Beach",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kerala", href: "/india/kerala" },
      { label: "Kerala Hill Stations Tour – Munnar & Wayanad" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "7 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 4,
    region: "Kerala, India",

    itineraryStops: [
      { city: "Cochin", nights: 1 },
      { city: "Munnar", nights: 2 },
      { city: "Wayanad", nights: 2 },
      { city: "Calicut", nights: 1 },
      { city: "Cochin (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Cochin",
        details: [
          "Arrive Cochin. Fort Kochi sightseeing — Chinese Fishing Nets, St. Francis Church, Mattancherry Palace. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin → Munnar",
        details: [
          "Drive to Munnar (4 hrs). Check-in. Attukal Waterfalls and Echo Point. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Munnar Sightseeing",
        details: [
          "Eravikulam National Park, Tea Museum, Mattupetty Dam, Kundala Lake. Overnight Munnar."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Munnar → Wayanad",
        details: [
          "Scenic drive to Wayanad (approx. 5 hrs) through winding forested roads. Check-in to jungle resort. Afternoon at leisure. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Wayanad Sightseeing",
        details: [
          "Visit Edakkal Caves (prehistoric rock engravings), Soochipara/Sentinel Rock Waterfalls, Chembra Peak viewpoint, and Muthanga Wildlife Sanctuary jeep safari. Overnight."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Wayanad → Calicut",
        details: [
          "Drive to Calicut (Kozhikode) — approx. 3 hrs. Check-in. Visit Kappad Beach (where Vasco da Gama landed in 1498), Pazhassiraja Museum, and local food street. Overnight."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Calicut → Cochin — Departure",
        details: [
          "Morning drive to Cochin airport (approx. 4 hrs). Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Destinations", value: "Cochin · Munnar · Wayanad · Calicut" },
      { label: "Departure & Return", value: "Cochin (Kochi) Airport" },
      { label: "Tour Code", value: "KER-MUN-WAY-COC-02" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  // ════════════════════════════════════════════════════════════
  // ─── OOTY (IDs 209–210) ───────────────────────────────────
  // ════════════════════════════════════════════════════════════

  {
    id: 209,
    country: "India",
    place: "Ooty",
    title: "Ooty Kodaikanal Hill Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Chennai → Chennai",
    destinations: ["Chennai", "Ooty", "Kodaikanal", "Coimbatore"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 17500,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/ooty.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Bus", label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Ooty Nilgiri Mountain Railway (Toy Train) UNESCO Ride" },
      { title: "Ooty Botanical Gardens & Ooty Lake" },
      { title: "Kodaikanal Lake Boating & Coaker's Walk" },
      { title: "Dolphin's Nose & Silver Cascade Falls, Kodaikanal" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/ooty.jpg",
      alt: "Ooty Kodaikanal Hill Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The Nilgiri Mountain Railway toy train ride through mist-covered forests was pure magic! Kodaikanal's lake and Coaker's Walk were equally breathtaking. Wonderful tour!",
        author: "Arjun Venkataraman",
        date: "Travelled March 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Ooty and Kodaikanal are like two pearls of Tamil Nadu. Both uniquely beautiful! Indruka Trips and Trip's itinerary balanced them perfectly. Very smooth travel experience.",
        author: "Leena Subramaniam",
        date: "Travelled April 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/ooty1.jpg",
        alt: "Ooty Botanical Gardens",
      },
      {
        id: 2,
        src: "/ooty3.jpg",
        alt: "Nilgiri Toy Train",
      },
      {
        id: 3,
        src: "/Ooty3.jpg",
        alt: "Kodaikanal Lake",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Tamil Nadu", href: "/india/tamil-nadu" },
      { label: "Ooty Kodaikanal Hill Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "6 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "Tamil Nadu, India",

    itineraryStops: [
      { city: "Chennai", nights: 0 },
      { city: "Ooty", nights: 2 },
      { city: "Kodaikanal", nights: 2 },
      { city: "Coimbatore", nights: 1 },
      { city: "Chennai (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Chennai → Ooty",
        details: [
          "Fly or train to Coimbatore; drive to Ooty (Mettupalayam). Or take the iconic Nilgiri Mountain Railway (toy train) from Mettupalayam to Ooty (UNESCO World Heritage). Check-in Ooty. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Ooty Sightseeing",
        details: [
          "Botanical Gardens (Government Rose Garden), Ooty Lake boating, Doddabetta Peak (highest in Nilgiris — 2,637 m), Wax World, and Deer Park. Overnight Ooty."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Ooty → Kodaikanal",
        details: [
          "Scenic drive to Kodaikanal (approx. 4 hrs) via Palani Hills. Check-in. Evening Kodaikanal Lake boating. Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Kodaikanal Sightseeing",
        details: [
          "Visit Coaker's Walk (stunning valley views), Bear Shola Falls, Pillar Rocks, Guna Caves, Green Valley View (formerly Suicide Point), and Dolphin's Nose. Overnight."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Kodaikanal → Coimbatore",
        details: [
          "Morning drive to Coimbatore (approx. 4 hrs). Visit Marudamalai Temple and Perur Pateeswarar Temple. Check-in. Overnight."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Coimbatore → Chennai — Departure",
        details: [
          "Morning at leisure. Fly/train back to Chennai. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Chennai · Ooty · Doddabetta · Kodaikanal · Coimbatore",
      },
      { label: "Departure & Return", value: "Chennai" },
      { label: "Tour Code", value: "TN-OOTY-KODAI-CHE-01" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–June" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },


  {
    id: 211,
    country: "India",
    place: "Andaman and Nicobar Islands",
    title: "Andaman Beach Tour Package",
    type: "Beach Holidays",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Port Blair → Port Blair",
    destinations: ["Port Blair", "Havelock Island", "Neil Island"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 38500,
    rating: 4.7,
    reviews: 134,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Flight",
    src: "/nicobarand.jpeg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Plane", label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Radhanagar Beach (Asia's #7 Beach) — Havelock Island" },
      { title: "Snorkeling at Elephant Beach, Havelock" },
      { title: "Cellular Jail & Light & Sound Show, Port Blair" },
      { title: "Neil Island Beaches — Bharatpur & Laxmanpur" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/nicobarand.jpeg",
      alt: "Andaman Beach Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Radhanagar Beach is everything they say and more — crystal clear turquoise water, white sand, and dramatic sunsets. The Cellular Jail sound and light show was emotionally powerful.",
        author: "Gaurav Mehta",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Snorkeling at Elephant Beach was the best underwater experience of our lives! The coral reefs were pristine. Indruka Trips and Trip arranged everything flawlessly.",
        author: "Smita Rao",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/nicobarand2.jpg",
        alt: "Andaman Beach Tour",
      },
      {
        id: 2,
        src: "/nicobarand2.jpg",
        alt: "Radhanagar Beach Havelock",
      },
      {
        id: 3,
        src: "/nicobarand3.jpg",
        alt: "Elephant Beach Snorkeling",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Andaman & Nicobar", href: "/india/andaman-nicobar" },
      { label: "Andaman Beach Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "BEACH HOLIDAY", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 3,
    region: "Andaman & Nicobar Islands, India",

    itineraryStops: [
      { city: "Port Blair", nights: 1 },
      { city: "Havelock Island", nights: 1 },
      { city: "Neil Island", nights: 1 },
      { city: "Port Blair (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Port Blair",
        details: [
          "Arrive Port Blair airport. Visit Cellular Jail (Kala Pani) and the evening Light & Sound Show. Check-in. Overnight."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Port Blair → Havelock Island",
        details: [
          "Morning ferry to Havelock Island (approx. 2 hrs). Check-in to beach resort. Afternoon visit Radhanagar Beach (Beach No. 7 — one of Asia's best). Sunset swim. Overnight."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Havelock → Neil Island",
        details: [
          "Morning snorkeling at Elephant Beach. Afternoon ferry to Neil Island. Check-in. Visit Bharatpur Beach and Laxmanpur Beach (natural rock arch formation). Overnight."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Neil Island → Port Blair — Departure",
        details: [
          "Morning ferry to Port Blair. Shopping at Aberdeen Bazaar. Transfer to airport. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Port Blair · Havelock Island · Neil Island",
      },
      {
        label: "Departure & Return",
        value: "Port Blair (Veer Savarkar International Airport)",
      },
      { label: "Tour Code", value: "AND-BEACH-PB-01" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  {
    id: 212,
    country: "India",
    place: "Andaman and Nicobar Islands",
    title: "Andaman Short Tour Package",
    type: "Beach Holidays",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Port Blair → Port Blair",
    destinations: ["Port Blair", "Havelock"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 34500,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Flight",
    src: "/andaman1.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Plane", label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Cellular Jail & Evening Sound & Light Show" },
      { title: "Ross Island — British-Era Heritage Ruins" },
      { title: "Radhanagar Beach Sunset, Havelock Island" },
      { title: "Corbyn's Cove Beach & Water Sports, Port Blair" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/andaman1.jpg",
      alt: "Andaman Short Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Perfect short escape to Andaman! 4 days felt complete covering Port Blair and Havelock. The Ross Island ruins were fascinating and Radhanagar was paradise.",
        author: "Tanya Kapoor",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Best 4-day holiday we've had in years! The Andaman water is like nothing we've seen before. Indruka Trips and Trip's ferry and hotel arrangements were seamless.",
        author: "Ravi Sharma",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/Andaman2.jpg",
        alt: "Andaman Short Visit",
      },
      {
        id: 2,
        src: "/Andaman3.jpg",
        alt: "Ross Island Andaman",
      },
      {
        id: 3,
        src: "/Andaman4.jpg",
        alt: "Corbyn's Cove Beach",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Andaman & Nicobar", href: "/india/andaman-nicobar" },
      { label: "Andaman Short Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "SHORT GETAWAY", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 2,
    region: "Andaman & Nicobar Islands, India",

    itineraryStops: [
      { city: "Port Blair", nights: 2 },
      { city: "Havelock Island", nights: 1 },
      { city: "Port Blair (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Port Blair",
        details:[
          "Arrive Port Blair. Check-in. Visit Cellular Jail and evening Light & Sound Show. Overnight.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Port Blair Sightseeing",
        details:[
          "Morning visit Ross Island and North Bay Island (glass-bottom boat ride). Afternoon at Corbyn's Cove Beach for water sports. Overnight Port Blair.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Port Blair → Havelock Island",
        details:[
          "Ferry to Havelock. Check-in to beach resort. Explore Radhanagar Beach and Kala Pathar Beach at sunset. Overnight.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Havelock → Port Blair — Departure",
        details:[
          "Morning leisure at beach. Ferry back to Port Blair. Transfer to airport. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Port Blair · Ross Island · Havelock Island",
      },
      { label: "Departure & Return", value: "Port Blair Airport" },
      { label: "Tour Code", value: "AND-SHORT-PB-02" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },

  {
    id: 213,
    country: "India",
    place: "Andaman and Nicobar Islands",
    title: "Andaman Scuba Diving Tour Package",
    type: "Adventure",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Port Blair → Port Blair",
    destinations: ["Port Blair", "Havelock Island", "Long Island"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 52500,
    rating: 4.8,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Flight",
    src: "/andamanScuba.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Fish", label: "Diving", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Certified Scuba Diving at Havelock — Pristine Coral Reefs" },
      { title: "Long Island — Remote Merk Bay Beach Snorkeling" },
      { title: "North Bay Island — Glass-Bottom Boat & Sea Walking" },
      { title: "Expert PADI-Certified Dive Instructors" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/andamanScuba.jpg",
      alt: "Andaman Scuba Diving Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "My first scuba dive at Havelock and I was completely hooked! The coral gardens and tropical fish were unbelievable. Our dive instructor was patient and professional.",
        author: "Vikram Malhotra",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Long Island's Merk Bay is untouched and incredible — felt like we had the island to ourselves! The scuba diving at Havelock completed a perfect adventure trip.",
        author: "Nadia Sharma",
        date: "Travelled March 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src:  "/AndamanScuba1.jpg",
        alt: "Andaman Scuba Diving",
      },
      {
        id: 2,
        src:  "/AndamanScuba2.jpg",
        alt: "Havelock Coral Reef Scuba",
      },
      {
        id: 3,
        src:  "/AndamanScuba3.jpg",
        alt: "Long Island Merk Bay",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Andaman & Nicobar", href: "/india/andaman-nicobar" },
      { label: "Andaman Scuba Diving Tour Package" },
    ],

    badges: [
      { label: "ADVENTURE", variant: "solid" as const, color: "orange" },
      { label: "SCUBA DIVING", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 3,
    region: "Andaman & Nicobar Islands, India",

    itineraryStops: [
      { city: "Port Blair", nights: 1 },
      { city: "Havelock Island", nights: 1 },
      { city: "Long Island", nights: 1 },
      { city: "Port Blair (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Port Blair",
        details:[
          "Arrive Port Blair. North Bay Island excursion — glass-bottom boat ride and sea walking experience. Cellular Jail evening show. Check-in. Overnight.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Havelock Island — Scuba Diving",
        details:[
          "Ferry to Havelock Island. Check-in to dive resort. Afternoon certified scuba diving session at Elephant Beach (beginners welcome — PADI-certified instructors). Radhanagar Beach sunset. Overnight.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Havelock → Long Island",
        details:[
          "Morning second scuba dive or advanced dive at Nemo Reef. Ferry to Long Island. Check-in. Explore pristine Merk Bay Beach (hike through jungle to reach). Overnight.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Long Island → Port Blair — Departure",
        details:[
          "Ferry to Port Blair. Aberdeen Bazaar souvenir shopping. Transfer to airport. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Port Blair · Havelock Island · Long Island",
      },
      { label: "Departure & Return", value: "Port Blair Airport" },
      { label: "Tour Code", value: "AND-SCUBA-PB-03" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      {
        label: "Best Time",
        value: "October–May (best visibility: November–April)",
      },
      { label: "Group Size", value: "Small group — 2 to 10 passengers" },
    ],

    
  },

  {
    id: 214,
    country: "India",
    place: "Andaman and Nicobar Islands",
    title: "Andaman Honeymoon Tour Package",
    type: "Honeymoon packages",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Port Blair → Port Blair",
    destinations: ["Port Blair", "Havelock Island", "Elephant Beach"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 48500,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Flight",
    src: "/AndamanHooneyB.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Plane", label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Radhanagar Beach Romantic Sunset — Havelock Island" },
      { title: "Couple Snorkeling at Elephant Beach" },
      { title: "Private Beach Dinners & Beach Bonfires" },
      { title: "Ross Island Sunset Cruise & Neil Island Escape" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/AndamanHooneyB.jpg",
      alt: "Andaman Honeymoon Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Our Andaman honeymoon was absolutely dreamy! Private beach dinners, turquoise water, and stunning sunsets — Indruka Trips and Trip planned every romantic detail to perfection.",
        author: "Rohit & Priya Sharma",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Radhanagar Beach at sunset with my partner was the most beautiful moment of our lives! The Andaman waters are genuinely paradise. Best honeymoon destination in India.",
        author: "Anil & Sunita Verma",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/AndamanHoney1.jpg",
        alt: "Romantic Andaman",
      },
      {
        id: 2,
        src: "/AndamanHoney2.jpg",
        alt: "Radhanagar Beach Couple Sunset",
      },
      {
        id: 3,
       src: "/AndamanHoney.jpg",
        alt: "Andaman Beach Dinner",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Andaman & Nicobar", href: "/india/andaman-nicobar" },
      { label: "Andaman Honeymoon Tour Package" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 3,
    region: "Andaman & Nicobar Islands, India",

    itineraryStops: [
      { city: "Port Blair", nights: 2 },
      { city: "Havelock Island", nights: 2 },
      { city: "Neil Island", nights: 1 },
      { city: "Port Blair (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Port Blair",
        details:[
          "Arrive Port Blair. Check-in to boutique hotel. Evening at Cellular Jail Light & Sound Show — emotionally stirring. Romantic dinner. Overnight.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Port Blair Sightseeing",
        details:[
          "Morning Ross Island excursion (British-era ruins surrounded by deer and peacocks). Afternoon Corbyn's Cove Beach for water sports. Sunset cruise. Overnight Port Blair.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Port Blair → Havelock Island",
        details:[
          "Ferry to Havelock. Check-in to romantic beach resort. Afternoon walk on Radhanagar Beach. Sunset candle-light beach dinner. Overnight.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Havelock — Couple's Beach Day",
        details:[
          "Morning couple snorkeling at Elephant Beach. Afternoon at Kala Pathar Beach — serene and secluded. Optional kayaking. Romantic bonfire dinner. Overnight.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Havelock → Neil Island",
        details:[
          "Morning ferry to Neil Island. Check-in. Explore Bharatpur Beach, Natural Bridge (rock arch at Laxmanpur), and Sitapur Beach sunrise point. Romantic dinner. Overnight.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Neil Island → Port Blair — Departure",
        details:[
          "Ferry to Port Blair. Shopping at Aberdeen Bazaar for pearl jewelry. Transfer to airport. Honeymoon tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value:
          "Port Blair · Ross Island · Havelock Island · Elephant Beach · Neil Island",
      },
      { label: "Departure & Return", value: "Port Blair Airport" },
      { label: "Tour Code", value: "AND-HONEY-PB-04" },
      {
        label: "Meals",
        value: "Breakfast & Dinner (Candle-light beach dinner included)",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Couples — Private Tour" },
    ],

    
  },

  {
    id: 215,
    country: "India",
    place: "Andaman and Nicobar Islands",
    title: "Port Blair Complete Andaman Experience",
    type: "Luxury stays",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Port Blair → Port Blair",
    destinations: [
      "Port Blair",
      "Havelock Island",
      "Ross Island",
      "Jolly Buoy",
    ],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 62500,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Flight",
    src: "/PortBAndaman.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Plane", label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Cellular Jail, Ross Island & Mahatma Gandhi Marine National Park",
      },
      { title: "Jolly Buoy Island — Pristine Snorkeling & Coral" },
      { title: "Havelock Island — Radhanagar Beach & Scuba Diving" },
      { title: "Semi-Submarine Ride at Port Blair" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/PortBAndaman.jpg",
      alt: "Port Blair Complete Andaman Experience",
    },

    testimonials: [
      {
        id: 1,
        text: "The most comprehensive Andaman tour available! Jolly Buoy Island was like swimming in an aquarium — the most vibrant coral reefs I've ever seen. 8 days was perfect.",
        author: "Ashish Tandon",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We did everything — Cellular Jail, Ross Island, Havelock scuba, Jolly Buoy snorkeling, and the semi-submarine! Indruka Trips and Trip managed the complex island-hopping logistics perfectly.",
        author: "Rekha Jain",
        date: "Travelled March 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "PortBAndaman1.jpg",
        alt: "Port Blair Andaman Package",
      },
      {
        id: 2,
        src: "/PortBAndaman3.jpg",
        alt: "Jolly Buoy Island Coral",
      },
      {
        id: 3,
        src: "/Andaman4.jpeg",
        alt: "Mahatma Gandhi Marine National Park",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Andaman & Nicobar", href: "/india/andaman-nicobar" },
      { label: "Port Blair Complete Andaman Experience" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "COMPLETE TOUR", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Andaman & Nicobar Islands, India",

    itineraryStops: [
      { city: "Port Blair", nights: 3 },
      { city: "Havelock Island", nights: 2 },
      { city: "Neil Island", nights: 1 },
      { city: "Port Blair", nights: 1 },
      { city: "Departure", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Port Blair",
        details:[
          "Arrive Port Blair. Check-in. Cellular Jail visit and evening Light & Sound Show. Overnight.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Ross Island & North Bay",
        details:[
          "Morning Ross Island excursion (ruined British-era buildings, peacocks and deer). Afternoon North Bay Island — sea walking and glass-bottom boat ride. Semi-submarine experience. Overnight.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Jolly Buoy Island",
        details:[
          "Full-day excursion to Jolly Buoy Island (Mahatma Gandhi Marine National Park) — snorkeling in crystal-clear water with pristine coral gardens. Return Port Blair. Overnight.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Port Blair → Havelock Island",
        details:[
          "Ferry to Havelock. Check-in. Explore Radhanagar Beach (Beach No. 7). Overnight.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Havelock — Scuba & Elephant Beach",
        details:[
          "Morning beginner scuba diving session. Afternoon explore Elephant Beach via boat — snorkeling and water sports. Overnight.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Havelock → Neil Island",
        details:[
          "Ferry to Neil Island. Bharatpur Beach, Laxmanpur Natural Rock Bridge, Sitapur Beach sunrise point. Overnight.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Neil Island → Port Blair — Baratang",
        details:[
          "Ferry to Port Blair. Afternoon excursion to Baratang Island — mangrove creeks, limestone caves, and mud volcanoes. Overnight Port Blair.",
      ]},
      {
        day: 8,
        date: "Day 8",
        title: "Port Blair — Departure",
        details:[
          "Morning at Corbyn's Cove Beach. Souvenir shopping at Aberdeen Bazaar. Transfer to airport. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value:
          "Port Blair · Ross Island · Jolly Buoy · Havelock · Neil Island · Baratang",
      },
      { label: "Departure & Return", value: "Port Blair Airport" },
      { label: "Tour Code", value: "AND-COMPLETE-PB-05" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    
  },
  // ─── PONDICHERRY ────────────────────────────────────────────────────────────

  {
    id: 216,
    country: "India",
    place: "Pondicherry",
    title: "Tamil Nadu Temple Tour from Chennai",
    type: "School/college trips",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Chennai → Chennai",
    destinations: [
      "Chennai",
      "Pondicherry",
      "Chidambaram",
      "Rameswaram",
      "Kanyakumari",
      "Madurai",
      "Trichy",
    ],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 38900,
    rating: 4.7,
    reviews: 102,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/TamilTemple.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "VIP Darshan at Ramanathaswamy Temple, Rameswaram & 22 Sacred Theerthams",
      },
      { title: "Witness Meenakshi Amman Temple's Night Ceremony in Madurai" },
      { title: "Sunrise at Kanyakumari — Confluence of Three Seas" },
      { title: "French Quarter Walk & Promenade Beach Stroll in Pondicherry" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/TamilTemple.jpg",
      alt: "Tamil Nadu Temple Tour from Chennai",
    },

    testimonials: [
      {
        id: 1,
        text: "An extraordinary temple circuit! The Meenakshi Amman night ceremony in Madurai was deeply moving. Indruka Trips and Trip arranged VIP darshan at every temple — no queues, all devotion.",
        author: "Suresh & Lakshmi Rajan",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the French streets of Pondicherry to the sacred shores of Rameswaram, every day was a new discovery. The itinerary was perfectly paced for our family with senior citizens.",
        author: "Vijay & Meena Krishnaswamy",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/TamilTemple1.jpg",
        alt: "Tamil Nadu Temple Tour",
      },
      {
        id: 2,
        src:  "/TamilTemple3.jpg",
        alt: "Meenakshi Amman Temple Madurai",
      },
      {
        id: 3,
        src:  "/TamilTemple3.jpg",
        alt: "Kanyakumari Sunrise",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Tamil Nadu", href: "/india/tamil-nadu" },
      { label: "Tamil Nadu Temple Tour from Chennai" },
    ],

    badges: [
      { label: "TEMPLE CIRCUIT", variant: "solid" as const, color: "orange" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 7,
    region: "Tamil Nadu, India",

    itineraryStops: [
      { city: "Chennai", nights: 1 },
      { city: "Pondicherry", nights: 1 },
      { city: "Chidambaram", nights: 1 },
      { city: "Rameswaram", nights: 1 },
      { city: "Kanyakumari", nights: 1 },
      { city: "Madurai", nights: 1 },
      { city: "Trichy", nights: 1 },
      { city: "Chennai (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Chennai",
        details:[
          "Arrive Chennai, India's gateway to the South. Check-in to hotel. Evening visit to Marina Beach — one of the longest urban beaches in the world. Welcome dinner. Overnight Chennai.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Chennai → Pondicherry",
        details:[
          "Drive to Pondicherry (3 hrs). Explore the charming French Quarter — colonial heritage buildings, Rue Dumas, and French-style cafés. Visit Sri Aurobindo Ashram and the peaceful Auroville. Evening stroll along Promenade Beach. Overnight Pondicherry.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Pondicherry → Chidambaram",
        details:[
          "Drive to Chidambaram. Visit the magnificent Nataraja Temple — one of the Pancha Bootha Stalams (five elemental Shiva shrines). Witness the elaborate puja rituals dedicated to Lord Shiva as the Cosmic Dancer. Drive onwards to Rameswaram. Overnight en route / Rameswaram.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Rameswaram — Sacred Island",
        details:[
          "Full day at the sacred Pamban Island. VIP Darshan at Ramanathaswamy Temple — sacred dip at the 22 Theerthams (holy water bodies). Visit Dhanushkodi beach ruins and enjoy the surreal landscape. Sunset at the tip of the Indian subcontinent. Overnight Rameswaram.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Rameswaram → Kanyakumari",
        details:[
          "Drive to Kanyakumari — the southernmost tip of India. Witness the iconic confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean. Visit Kumari Amman Temple and Vivekananda Rock Memorial. Famous Kanyakumari sunset. Overnight Kanyakumari.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Kanyakumari → Madurai",
        details:[
          "Drive to Madurai — the Temple City of South India. Afternoon visit to the awe-inspiring Meenakshi Amman Temple with 14 Gopurams. Attend the special night ceremony where deities are put to sleep — Palliyarai Pooja. Overnight Madurai.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Madurai → Trichy",
        details:[
          "Morning visit to Thiruparankundram Murugan Temple. Drive to Trichy. Climb Rock Fort Temple at sunset for panoramic views of the city. Visit Sri Ranganathaswamy Temple at Srirangam — one of the largest functioning Hindu temples in the world. Overnight Trichy.",
      ]},
      {
        day: 8,
        date: "Day 8",
        title: "Trichy → Chennai — Departure",
        details:[
          "Morning at leisure. Drive back to Chennai (4–5 hrs) or take a train. Shopping at Chennai's T. Nagar for silk sarees, temple jewellery, and Tanjore art pieces. Transfer to airport / railway station. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value:
          "Chennai · Pondicherry · Chidambaram · Rameswaram · Kanyakumari · Madurai · Trichy",
      },
      { label: "Departure & Return", value: "Chennai" },
      { label: "Tour Code", value: "TN-TEMPLE-CHN-08" },
      { label: "Meals", value: "Breakfast , lunch & Dinner daily" },
      { label: "Best Time", value: "November–February" },
      {
        label: "Group Size",
        value: "Flexible — Private & Group options available",
      },
    ],

    
  },

  {
    id: 217,
    country: "India",
    place: "Pondicherry",
    title: "Pondicherry Short Getaway Package",
    type: "School/college trips",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Chennai → Chennai",
    destinations: ["Chennai", "Pondicherry", "Auroville"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 16999,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/pondicherry.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "French Quarter Heritage Walk — Colonial Cafés & Rue Dumas" },
      {
        title:
          "Auroville Matri Mandir — Spiritual Sanctuary & Universal Township",
      },
      { title: "Promenade Beach Sunrise & Sri Aurobindo Ashram Visit" },
      { title: "French Bakery Hopping — Baker Street, Zuka & Bouche Sucrée" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/pondicherry.jpg",
      alt: "Pondicherry Short Getaway Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Pondicherry is magical — the French cafés, the peaceful ashram, and that golden promenade at sunrise. Perfect 4-day escape from the city. Indruka Trips and Trip got every detail right.",
        author: "Arjun & Deepa Nair",
        date: "Travelled March 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Auroville was a revelation — unlike anywhere in India. The colonial streets of White Town felt like stepping into French history. A truly unique short getaway!",
        author: "Ramesh & Pritha Bose",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/pondicherry1.jpg",
        alt: "Pondicherry French Quarter",
      },
      {
        id: 2,
        src:"/pondicherry4.jpg",
        alt: "Chennai City Sightseeing",
      },
      {
        id: 3,
        src: "/pondicherry5.jpg",
        alt: "Auroville Pondicherry",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Tamil Nadu", href: "/india/tamil-nadu" },
      { label: "Pondicherry Short Getaway Package" },
    ],

    badges: [
      { label: "SHORT BREAK", variant: "solid" as const, color: "blue" },
      { label: "4 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 3,
    region: "Tamil Nadu, India",

    itineraryStops: [
      { city: "Chennai", nights: 1 },
      { city: "Pondicherry", nights: 2 },
      { city: "Chennai (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Chennai → Pondicherry",
        details: [
          "Arrive Chennai and transfer to Pondicherry (3 hrs by road). Check in to a boutique French-quarter hotel. Evening stroll along Promenade Beach. Dinner at a beachside restaurant. Overnight Pondicherry."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Pondicherry — French Quarter & Ashram",
        details:[
          "Morning visit to Sri Aurobindo Ashram — a centre of spiritual learning and peace. Heritage walk through White Town (French Quarter) — colourful colonial buildings, Rue Dumas, Rue Romain Rolland. Visit Puducherry Museum. Afternoon French bakery trail — Baker Street, Zuka, Bouche Sucrée. Overnight Pondicherry.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Auroville & Pondicherry Beaches",
        details:[
          "Morning visit to Auroville — the universal township and the golden Matri Mandir (meditation centre). Afternoon at Serenity Beach and Paradise Beach. Optional watersports at Promenade Beach. Sunset at Rock Beach. Overnight Pondicherry.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Pondicherry → Chennai — Departure",
        details:[
          "Morning at leisure; coffee at a French café. Drive back to Chennai. Shopping at Pondy Bazaar or T. Nagar for souvenirs. Transfer to Chennai airport / railway station. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "Chennai · Pondicherry · Auroville" },
      { label: "Departure & Return", value: "Chennai" },
      { label: "Tour Code", value: "TN-PONDY-CHN-04" },
      { label: "Meals", value: "Breakfast , lunch & Dinner daily" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Couples, Families, Solo — Private Tour" },
    ],

    
  },

  // ─── KOVALAM ────────────────────────────────────────────────────────────────

  {
    id: 220,
    country: "India",
    place: "Kovalam",
    title: "Kovalam Varkala Beach Holiday Package",
    type: "Beach Holidays",
    duration: "5 Days / 4 Nights",
    durationTag: "5 Days",
    startEnd: "Trivandrum → Trivandrum",
    destinations: ["Trivandrum", "Kovalam", "Varkala", "Poovar"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 16999,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/kovalam1.jpg",
    popular: false,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Waves", label: "Beach", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Kovalam Lighthouse Beach — Crystal Waters & Golden Sands" },
      {
        title:
          "Varkala Cliff Walk — Unique Red Laterite Cliffs above Arabian Sea",
      },
      { title: "Poovar Backwater Boat Ride — Mangroves & Golden Island Beach" },
      { title: "Ayurvedic Spa & Kathakali Dance Performance in Trivandrum" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/kovalam1.jpg",
      alt: "Kovalam Varkala Beach Holiday",
    },

    testimonials: [
      {
        id: 1,
        text: "Varkala's cliffs above the sea are unlike anything in India — dramatic, peaceful, breathtaking. The Poovar backwater cruise was the hidden gem of the trip. Loved every moment.",
        author: "Nikhil & Priya Menon",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kovalam is paradise for beach lovers. The Lighthouse Beach sunset and fresh seafood made it unforgettable. NIT's planning was seamless from start to finish.",
        author: "Sanjay & Anitha Pillai",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/Kovalam.jpg",
        alt: "Kovalam Beach Kerala",
      },
      {
        id: 2,
        src: "/kovalam2.jpg",
        alt: "Varkala Cliff Beach",
      },
      
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kerala", href: "/india/kerala" },
      { label: "Kovalam Varkala Beach Holiday Package" },
    ],

    badges: [
      { label: "BEACH HOLIDAY", variant: "solid" as const, color: "blue" },
      { label: "5 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 5,
    countryCount: 1,
    cityCount: 4,
    region: "Kerala, India",

    itineraryStops: [
      { city: "Trivandrum", nights: 1 },
      { city: "Kovalam", nights: 1 },
      { city: "Varkala", nights: 1 },
      { city: "Poovar", nights: 1 },
      { city: "Trivandrum (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Trivandrum",
        details:[
          "Arrive Trivandrum (TRV). Check-in to hotel. Visit Padmanabhaswamy Temple, Napier Museum, and Kuthiramalika Palace. Evening Kathakali dance performance. Overnight Trivandrum.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Trivandrum → Kovalam",
        details:[
          "Transfer to Kovalam Beach (16 km). Check-in to a beach resort. Spend the day at Lighthouse Beach and Hawa Beach. Sunset at the iconic Kovalam Lighthouse. Fresh seafood dinner by the sea. Overnight Kovalam.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Kovalam → Varkala",
        details:[
          "Drive to Varkala (54 km). Check-in to a cliff-top resort. Explore the dramatic red laterite cliffs with views of the Arabian Sea. Visit Janardhanaswamy Temple (2000-year-old coastal temple). Cliff walk at sunset. Overnight Varkala.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Varkala → Poovar",
        details:[
          "Drive to Poovar (50 km). Boat cruise through Poovar backwaters — mangroves, estuary, and Golden Island beach (accessible only by boat). Ayurvedic massage at the resort. Evening at leisure by the sea. Overnight Poovar.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Poovar → Trivandrum — Departure",
        details:[
          "Morning at leisure on Golden Island beach. Transfer back to Trivandrum. Shopping at Chalai Bazaar for spices, handicrafts, and Kerala textiles. Transfer to airport / railway station. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      {
        label: "Destinations",
        value: "Trivandrum · Kovalam · Varkala · Poovar",
      },
      { label: "Departure & Return", value: "Trivandrum Airport (TRV)" },
      { label: "Tour Code", value: "KER-BEACH-TRV-05" },
      { label: "Meals", value: "Breakfast , lunch & Dinner daily" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Couples, Families, Solo — Private Tour" },
    ],

    
  },

  {
    id: 221,
    country: "India",
    place: "Kovalam",
    title: "Kerala Beaches & Backwaters Tour",
    type: "Beach Holiday",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Cochin → Trivandrum",
    destinations: ["Cochin", "Alleppey", "Varkala", "Kovalam", "Trivandrum"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 24999,
    rating: 4.7,
    reviews: 112,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    src: "/kerala-black5.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Waves", label: "Beach", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Alleppey Houseboat Cruise — Kerala's Famous Backwaters" },
      { title: "Kathakali Performance in Cochin — Classical Kerala Dance" },
      { title: "Varkala Cliff Sunset & Kovalam Lighthouse Beach" },
      { title: "Chinese Fishing Nets of Fort Kochi — Iconic Kerala Heritage" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/kerala-black6.jpg",
      alt: "Kerala Beaches and Backwaters Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "The Alleppey houseboat was the highlight of our trip — sleeping on the backwaters with nothing but stars above you. Kerala is truly God's Own Country. NIT made it effortless.",
        author: "Ravi & Sunita Chandran",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the Chinese fishing nets of Kochi to the cliff-top sunsets of Varkala — 7 days, 5 destinations, and countless memories. Expertly planned by Indruka Trips and Trip.",
        author: "Anand & Kavitha Iyer",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/kerala-black7.jpg",
        alt: "Kerala Backwaters Houseboat",
      },
      {
        id: 2,
        src: "/kerala-black8.jpg",
        alt: "Alleppey Backwaters Kerala",
      },
      {
        id: 3,
        src: "/kerala-black9.jpg",
        alt: "Kovalam Beach Kerala",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kerala", href: "/india/kerala" },
      { label: "Kerala Beaches & Backwaters Tour" },
    ],

    badges: [
      {
        label: "BEACHES & BACKWATERS",
        variant: "solid" as const,
        color: "blue",
      },
      { label: "7 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 5,
    region: "Kerala, India",

    itineraryStops: [
      { city: "Cochin", nights: 2 },
      { city: "Alleppey", nights: 1 },
      { city: "Varkala", nights: 1 },
      { city: "Kovalam", nights: 1 },
      { city: "Trivandrum", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Cochin",
        details:[
          "Arrive Cochin (COK). Check-in to hotel. Evening visit to Fort Kochi — Chinese fishing nets, Santa Cruz Basilica, and Mattancherry Dutch Palace. Kathakali dance performance. Overnight Cochin.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Cochin Sightseeing",
        details:[
          "Morning cruise of the Cochin harbour. Visit Cherai Beach, Bolghatty Palace, and Willingdon Island. Afternoon at the famous Jew Town antique shops and Paradesi Synagogue. Overnight Cochin.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Cochin → Alleppey — Houseboat",
        details:[
          "Drive to Alleppey (1.5 hrs). Board a traditional Kerala houseboat — cruise through the famous backwaters, paddy fields, village life, coconut groves, and canals. Enjoy Kerala meals on board. Overnight on houseboat.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Alleppey → Varkala",
        details:[
          "Disembark houseboat. Drive to Varkala (2 hrs). Check-in to cliff-top resort. Explore North Cliff, Janardhanaswamy Temple, and unique mineral springs. Sunset from the dramatic laterite cliffs above the Arabian Sea. Overnight Varkala.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Varkala → Kovalam",
        details:[
          "Drive to Kovalam (54 km). Check-in to beach resort. Spend the afternoon at Lighthouse Beach and Samudra Beach. Optional water sports — jet ski, parasailing, surfing. Overnight Kovalam.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Kovalam → Trivandrum",
        details:[
          "Drive to Trivandrum (16 km). Visit Padmanabhaswamy Temple, Napier Museum, and Kuthiramalika Palace Museum. Evening Ayurvedic massage. Farewell dinner. Overnight Trivandrum.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Trivandrum — Departure",
        details:[
          "Morning at leisure. Shopping at Chalai Bazaar for Kerala spices, cashews, and handicrafts. Transfer to Trivandrum airport. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      {
        label: "Destinations",
        value: "Cochin · Alleppey · Varkala · Kovalam · Trivandrum",
      },
      { label: "Departure & Return", value: "Cochin (COK) → Trivandrum (TRV)" },
      { label: "Tour Code", value: "KER-BEACH-COK-07" },
      {
        label: "Meals",
        value: "Breakfast , lunch & Dinner daily; All meals on houseboat",
      },
      { label: "Best Time", value: "November–February" },
      {
        label: "Group Size",
        value: "Couples, Families — Private & Group options",
      },
    ],

    
  },

  // ─── PILGRIMAGE TOURS ───────────────────────────────────────────────────────


  // ─── UDAIPUR / RAJASTHAN ────────────────────────────────────────────────────

  {
    id: 401,
    country: "India",
    place: "Udaipur",
    title: "Majestic Royal Rajasthan Tour — Udaipur",
    type: "Luxury stays",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Delhi → Udaipur",
    destinations: ["Delhi", "Jaipur", "Jodhpur", "Udaipur"],
    amenities: ["Palace Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 78000,
    rating: 4.9,
    reviews: 187,
    badge: "Luxury",
    badgeColor: "bg-yellow-600",
    mode: "Road",
    src: "/rajasthan-banner.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: "Building2",
        label: "Palace Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Lake Palace & City Palace Udaipur — City of Lakes at Sunset" },
      { title: "Amber Fort Jaipur — Elephant Ride & Mirror Palace" },
      { title: "Mehrangarh Fort Jodhpur — The Mighty Blue City Fortress" },
      {
        title:
          "Camel Safari at Sam Sand Dunes — Rajasthani Folk Dance Under the Stars",
      },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/rajasthan.jpg",
      alt: "Majestic Royal Rajasthan Tour Udaipur",
    },

    testimonials: [
      {
        id: 1,
        text: "Udaipur at sunset from a boat on Lake Pichola — one of the most beautiful sights I have ever seen. The palace hotel stay was extraordinary. NIT's Royal Rajasthan tour is truly worthy of its name.",
        author: "Manisha Dalvi & Family",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the pink city of Jaipur to the blue city of Jodhpur and the lake city of Udaipur — this tour is Rajasthan at its absolute finest. The elephant ride at Amber Fort and the camel safari were unforgettable.",
        author: "Kanchan Jorwal",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/rajasthan2.jpg",
        alt: "Royal Rajasthan Udaipur",
      },
      {
        id: 2,
       src: "/rajasthan3.jpg",
        alt: "Hawa Mahal Jaipur",
      },
      {
        id: 3,
        src: "/rajasthan4.jpg",
        alt: "Mehrangarh Fort Jodhpur",
      },
       {
        id: 4,
        src: "/rajasthan5.jpg",
        alt: "Mehrangarh Fort Jodhpur",
      },
       {
        id: 5,
        src: "/rajasthan26.jpg",
        alt: "Mehrangarh Fort Jodhpur",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Majestic Royal Rajasthan Tour — Udaipur" },
    ],

    badges: [
      { label: "LUXURY HERITAGE", variant: "solid" as const, color: "yellow" },
      { label: "10 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 4,
    region: "Rajasthan, India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Jaipur", nights: 3 },
      { city: "Jodhpur", nights: 2 },
      { city: "Udaipur", nights: 3 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Delhi",
        details:[
          "Arrive Delhi. Transfer to hotel. Evening at leisure — optional visit to India Gate, Rajpath, or Connaught Place. Welcome dinner. Overnight Delhi.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Delhi → Jaipur — Pink City",
        details:[
          "Drive to Jaipur (280 km / ~5 hrs). Check-in to palace/heritage hotel. Afternoon visit Hawa Mahal (Palace of Winds) and Jantar Mantar (UNESCO astronomical observatory). Evening at Chokhi Dhani — Rajasthani village experience, folk dances, and dinner. Overnight Jaipur.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur — Amber Fort & City Palace",
        details:[
          "Morning elephant ride to Amber Fort — explore the Sheesh Mahal (Mirror Palace) and Diwan-i-Khas. Visit Jaigarh Fort and panoramic views of Jaipur. Afternoon at City Palace Museum and Maharaja's art collection. Evening at Johari Bazaar for gems and jewellery shopping. Overnight Jaipur.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Jaipur — Day at Leisure / Pushkar Excursion",
        details:[
          "Option A: Day at leisure in Jaipur — visit Nahargarh Fort at sunset. Option B: Full-day excursion to Pushkar (150 km) — visit the only Brahma Temple in India, bathe at Pushkar Lake Ghats. Return to Jaipur. Overnight Jaipur.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Jaipur → Jodhpur — Blue City",
        details:[
          "Drive to Jodhpur (340 km / ~5 hrs). Check-in. Afternoon visit Mehrangarh Fort — one of India's largest and most majestic forts, with sweeping views of the Blue City. Explore Jaswant Thada cenotaph. Overnight Jodhpur.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Jodhpur — Old City & Clock Tower",
        details:[
          "Morning visit Umaid Bhawan Palace (part-royal residence, part-museum, part-luxury hotel). Explore the vibrant Sardar Market at Ghanta Ghar (Clock Tower). Spice market and blue-house walking tour of Old Jodhpur. Rajasthani thali dinner. Overnight Jodhpur.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Jodhpur → Udaipur — City of Lakes",
        details:[
          "Drive to Udaipur (250 km / ~4.5 hrs). Check-in to lake-view heritage hotel. Evening boat ride on Lake Pichola — views of the Lake Palace and City Palace at sunset. Dinner at a rooftop restaurant overlooking the lake. Overnight Udaipur.",
      ]},
      {
        day: 8,
        date: "Day 8",
        title: "Udaipur — City Palace & Jagdish Temple",
        details:[
          "Morning visit City Palace Museum — the largest palace complex in Rajasthan. Visit Jagdish Temple (17th century Indo-Aryan architecture). Afternoon Saheliyon Ki Bari (Garden of the Maids of Honour). Evening cultural show at Bagore Ki Haveli — Rajasthani folk dances and puppetry. Overnight Udaipur.",
      ]},
      {
        day: 9,
        date: "Day 9",
        title: "Udaipur — Chittorgarh Excursion",
        details:[
          "Full-day excursion to Chittorgarh Fort (110 km) — India's largest fort complex. Visit Vijay Stambha (Tower of Victory), Kirti Stambha, Padmini Palace, and Meera Temple. Return to Udaipur in the evening. Farewell dinner at a palace restaurant. Overnight Udaipur.",
      ]},
      {
        day: 10,
        date: "Day 10",
        title: "Udaipur — Departure",
        details:[
          "Morning at leisure. Shopping at Udaipur's Hathi Pol Bazaar for miniature paintings, silver jewellery, and block-printed textiles. Transfer to Udaipur airport (UDR) or railway station. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jaipur · Pushkar · Jodhpur · Udaipur · Chittorgarh",
      },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RJ-ROYAL-DEL-10" },
      { label: "Meals", value: "Breakfast , lunch & Dinner daily" },
      { label: "Best Time", value: "October–March" },
      {
        label: "Group Size",
        value: "Couples, Families, Small Groups — Private Luxury Tour",
      },
    ],

    
  },

  {
    id: 402,
    country: "India",
    place: "Udaipur",
    title: "Rajasthan Honeymoon Tour — Jaipur Pushkar Udaipur",
    type: "Honeymoon packages",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Delhi → Udaipur → Delhi",
    destinations: ["Delhi", "Jaipur", "Pushkar", "Udaipur"],
    amenities: ["Luxury Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 32000,
    rating: 4.8,
    reviews: 142,
    badge: "Romantic",
    badgeColor: "bg-pink-600",
    mode: "Road",
    src: "/jaipur.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: "Building2",
        label: "Luxury Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Heart", label: "Honeymoon", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Lake Palace Udaipur — Sunset Boat Ride & Candlelight Lakeside Dinner",
      },
      { title: "Amber Fort Jaipur — Romantic Elephant Ride & Sheesh Mahal" },
      { title: "Pushkar Lake — Sacred Sunset Walk & Brahma Temple Visit" },
      {
        title: "Chokhi Dhani Folk Evening — Rajasthani Dinner Under the Stars",
      },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/jaipur.jpg",
      alt: "Rajasthan Honeymoon Tour Jaipur Pushkar Udaipur",
    },

    testimonials: [
      {
        id: 1,
        text: "Our Rajasthan honeymoon was a dream come true — the Lake Palace boat ride at sunset, the rooftop dinners in Udaipur, and the romantic Amber Fort elephant ride. NIT planned every romantic detail to perfection.",
        author: "Arjun & Priya Mehta",
        date: "Travelled February 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Pushkar's sacred lake at dusk, Jaipur's pink palaces, and Udaipur's shimmering Lake Pichola — Rajasthan is the most romantic destination in India. Our NIT honeymoon package exceeded every expectation.",
        author: "Rahul & Deepika Singhania",
        date: "Travelled December 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
       src: "/jaipur1.jpg",
        alt: "Hawa Mahal Jaipur Honeymoon",
      },
      {
        id: 2,
        src: "/jaipur2.jpg",
        alt: "Udaipur Lake Palace",
      },
      {
        id: 3,
       src: "/jaipur3.jpg",
        alt: "Pushkar Lake Rajasthan",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Rajasthan Honeymoon Tour" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 4,
    region: "Rajasthan, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Jaipur", nights: 2 },
      { city: "Pushkar", nights: 1 },
      { city: "Udaipur", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Jaipur — Pink City Arrival",
        details:[
          "Drive / fly from Delhi to Jaipur. Check-in to luxury boutique hotel. Evening visit Hawa Mahal and Jantar Mantar. Candlelight dinner at a rooftop restaurant. Overnight Jaipur.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Jaipur — Amber Fort & City Palace",
        details:[
          "Sunrise visit to Nahargarh Fort for panoramic views. Morning elephant ride to Amber Fort — explore the Sheesh Mahal and Sheesh Mahal. Afternoon City Palace and Hawa Mahal photo session. Romantic dinner at a palace restaurant. Overnight Jaipur.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur → Pushkar — Sacred Romantic Town",
        details:[
          "Drive to Pushkar (150 km). Check-in to a lake-view boutique hotel. Visit the only Brahma Temple in India. Couple walk around the sacred Pushkar Lake at sunset — 52 ghats and evening lamps. Camel ride at the desert dunes. Romantic dinner. Overnight Pushkar.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Pushkar → Udaipur — City of Lakes",
        details:[
          "Drive to Udaipur (270 km). Check-in to luxury lake-view hotel. Sunset boat ride on Lake Pichola — floating by the legendary Lake Palace. Candlelight dinner at a rooftop lakeside restaurant. Overnight Udaipur.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Udaipur — City Palace & Romantic Sightseeing",
        details:[
          "Morning visit City Palace and Jagdish Temple. Afternoon Saheliyon Ki Bari gardens. Evening Bagore Ki Haveli cultural show — Rajasthani folk dances and puppetry. Private spa and Ayurvedic couple's massage. Farewell dinner by the lake. Overnight Udaipur.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Udaipur — Departure",
        details:[
          "Morning at leisure — sunrise views of Lake Pichola from the hotel terrace. Shopping for Rajasthani silver jewellery and miniature paintings. Transfer to Udaipur airport (UDR) or railway station. Fly or drive back to Delhi. Honeymoon tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Destinations", value: "Delhi · Jaipur · Pushkar · Udaipur" },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RJ-HONEY-DEL-06" },
      {
        label: "Meals",
        value: "Breakfast , lunch & Dinner daily; Candlelight dinner included",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    
  },



  // ─── JAISALMER / LUXURY TRAIN ────────────────────────────────────────────────

  {
    id: 406,
    country: "India",
    place: "Jaisalmer",
    title: "Indian Splendour Luxury Train Tour — Rajasthan",
    type: "Luxury stays",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Delhi → Udaipur",
    destinations: [
      "Delhi",
      "Agra",
      "Ranthambore",
      "Jaipur",
      "Bikaner",
      "Jaisalmer",
      "Jodhpur",
      "Udaipur",
    ],
    amenities: ["Train Suite", "All Meals", "Sightseeing", "Transfers"],
    price: 220000,
    rating: 4.9,
    reviews: 89,
    badge: "Premium",
    badgeColor: "bg-purple-700",
    mode: "Train",
    src: "/jaisalmer.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Train", label: "Train Suite", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "All Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Camera", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Taj Mahal Agra Visit & Exclusive Dinner at a Private Heritage Venue",
      },
      {
        title:
          "Tiger Safari in Ranthambore National Park — Spot the Elusive Royal Bengal Tiger",
      },
      {
        title:
          "Sundowner Cocktails on the Sam Sand Dunes in Bikaner / Jaisalmer",
      },
      { title: "Royal Lunch in Udaipur & Gala Dinner in Jodhpur" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src:  "/jaisalmer1.jpg",
      alt: "Indian Splendour Luxury Train Tour Rajasthan",
    },

    testimonials: [
      {
        id: 1,
        text: "The Indian Splendour luxury train is the most extraordinary way to experience Rajasthan. Waking up to a new royal destination each morning, dining in style, and watching the tiger in Ranthambore — absolutely peerless.",
        author: "Prashant Singh",
        date: "Travelled January 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Every meal, every excursion, every sunrise from the train window was a luxury experience. The gala dinner in Jodhpur and the royal lunch in Udaipur were highlights we will never forget. Worth every rupee.",
        author: "Yatthra Karunaratne",
        date: "Travelled November 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src:  "/jaisalmer3.jpg",
        alt: "Indian Splendour Luxury Train",
      },
      {
        id: 2,
        src:  "/jaisalmer4.jpg",
        alt: "Taj Mahal Agra",
      },
      {
        id: 3,
       src:  "/jaisalmer5.jpg",
        alt: "Ranthambore Tiger Safari",
      },
     
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Indian Splendour Luxury Train Tour" },
    ],

    badges: [
      { label: "PREMIUM TRAIN", variant: "solid" as const, color: "purple" },
      { label: "7 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 8,
    region: "Rajasthan & North India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Agra (Train)", nights: 0 },
      { city: "Ranthambore (Train)", nights: 0 },
      { city: "Jaipur (Train)", nights: 0 },
      { city: "Bikaner (Train)", nights: 0 },
      { city: "Jaisalmer (Train)", nights: 0 },
      { city: "Jodhpur (Train)", nights: 0 },
      { city: "Udaipur", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Board Indian Splendour — Delhi Departure",
        details:[
          "Board the Indian Splendour luxury train at Safdarjung Railway Station, Delhi. Welcome reception, cocktails, and orientation. Gourmet dinner in the dining car. Train departs overnight towards Agra. Overnight on train.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Agra — Taj Mahal & Exclusive Dinner",
        details:[
          "Arrive Agra. Morning Taj Mahal visit at sunrise — the greatest monument to love. Agra Fort tour. Exclusive dinner at a private heritage venue in Agra. Return to train. Overnight on train.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Ranthambore — Tiger Safari",
        details:[
          "Arrive Ranthambore. Shared Jeep Safari in Ranthambore National Park with naturalist — spot tigers, leopards, and crocodiles. Sundowners at a heritage property. Return to train. Overnight on train.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Jaipur — Elephant Ride & City",
        details:[
          "Arrive Jaipur. Elephant ride to Amber Fort. City Palace and Hawa Mahal. Rajasthani craft shopping. Gourmet dinner on board. Train departs for Bikaner. Overnight on train.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Bikaner → Jaisalmer — Sundowners at Sand Dunes",
        details:[
          "Arrive Bikaner. Junagarh Fort and Karni Mata Temple. Continue to Jaisalmer. Afternoon Jaisalmer Fort and Patwon Ki Haveli. Sundowner cocktails and camel ride at Sam Sand Dunes. Rajasthani folk music under the stars. Overnight on train.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Jodhpur — Blue City & Gala Dinner",
        details:[
          "Arrive Jodhpur. Visit Mehrangarh Fort and Jaswant Thada. Blue city walking tour. Gala dinner at a Jodhpur heritage property. Train departs for Udaipur. Overnight on train.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Udaipur — Royal Lunch & Departure",
        details:[
          "Arrive Udaipur. Boat ride on Lake Pichola. City Palace Museum. Royal lunch at a lake-view palace restaurant. Visit Saheliyon Ki Bari. Transfer to Udaipur airport (UDR) for onward travel. Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      {
        label: "Destinations",
        value:
          "Delhi · Agra · Ranthambore · Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur",
      },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RJ-TRAIN-DEL-07" },
      {
        label: "Meals",
        value: "All Meals Included (on train + excursion meals)",
      },
      { label: "Best Time", value: "October–March" },
      {
        label: "Group Size",
        value:
          "Couples, Families, Small Groups — Luxury Train (Private Cabins)",
      },
    ],

    
  },

  // ─── KERALA BACKWATERS / ALLEPPEY ────────────────────────────────────────────

 

  

  // ─── LEH LADAKH ─────────────────────────────────────────────────────────────

  {
    id: 501,
    country: "India",
    place: "Leh",
    title: "Leh Ladakh Adventure Tour Package",
    type: "Adventure",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Srinagar → Leh → Manali",
    destinations: [
      "Srinagar",
      "Gulmarg",
      "Sonamarg",
      "Leh",
      "Pangong Tso",
      "Nubra Valley",
      "Manali",
    ],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 70000,
    rating: 4.9,
    reviews: 234,
    badge: "Trending",
    badgeColor: "bg-green-600",
    mode: "Road",
    src: "/ladak.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Building2", label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Car", label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Pangong Tso Lake — Stunning Blue-Green High-Altitude Lake at 4,350 m",
      },
      {
        title:
          "Nubra Valley & Khardung La Pass — World's One of the Highest Motorable Roads",
      },
      { title: "Gulmarg Gondola — Asia's Highest Cable Car & Snow Adventure" },
      {
        title:
          "Magnetic Hill Leh & Shanti Stupa — Sunset over the Ladakhi Himalayas",
      },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/ladak.jpg",
      alt: "Leh Ladakh Adventure Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Pangong Tso at sunrise — the water changing from turquoise to sapphire to silver — is one of the most otherworldly sights on earth. NIT's Ladakh tour was meticulously planned with excellent acclimatization built in.",
        author: "Rallabandi Srinivasa",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Crossing Khardung La on the way to Nubra Valley and watching Bactrian camels against the Karakoram backdrop — Ladakh is unlike anywhere on earth. Every detail was handled perfectly by NIT's team.",
        author: "Krishan Bhardwaj",
        date: "Travelled September 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/ladak1.jpg",
        alt: "Leh Ladakh Adventure",
      },
      {
        id: 2,
        src: "/ladak2.jpg",
        alt: "Pangong Tso Ladakh",
      },
      {
        id: 3,
        src:"/ladak3.jpg",
        alt: "Nubra Valley Camel Safari",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Ladakh", href: "/india/ladakh" },
      { label: "Leh Ladakh Adventure Tour Package" },
    ],

    badges: [
      { label: "ADVENTURE", variant: "solid" as const, color: "green" },
      { label: "10 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 7,
    region: "Ladakh & Kashmir, India",

    itineraryStops: [
      { city: "Srinagar", nights: 2 },
      { city: "Gulmarg", nights: 1 },
      { city: "Sonamarg", nights: 0 },
      { city: "Leh", nights: 3 },
      { city: "Pangong Tso", nights: 1 },
      { city: "Nubra Valley", nights: 1 },
      { city: "Manali", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Srinagar — Dal Lake & Shikara",
        details: [
          "Arrive Srinagar (SXR). Transfer to houseboat on Dal Lake. Evening Shikara ride — floating gardens, lotus blooms, and Himalayan reflections on the lake. Welcome dinner on houseboat. Overnight Srinagar."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Old City",
        details: [
          "Morning visit Shalimar Bagh, Nishat Bagh (Mughal Gardens), and Chashme Shahi. Afternoon Hazratbal Shrine and Jamia Masjid. Old city bazaars — Pashmina shawls, Kashmiri embroidery, saffron. Overnight Srinagar."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Gulmarg — Snow & Gondola",
        details: [
          "Drive to Gulmarg (56 km). Board the Gulmarg Gondola — Asia's highest cable car (Phase 1: 2,650 m; Phase 2: 3,980 m). Snow activities, skiing, and panoramic Himalayan views. Overnight Gulmarg."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gulmarg → Sonamarg → Leh",
        details: [
          "Drive through Sonamarg (Meadow of Gold) — stunning glacier views. Continue on the Srinagar-Leh Highway via Zoji La Pass, Drass, Kargil. Arrive Leh (3,500 m). Check-in. Rest for acclimatization. Overnight Leh."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Leh — Acclimatization & Local Sightseeing",
        details: [
          "Easy day for acclimatization. Visit Leh Palace, Shanti Stupa, and Leh Market. Walk through the old town. Visit Namgyal Tsemo Monastery. Magnetic Hill afternoon. Sangam (Indus-Zanskar confluence) drive-by. Overnight Leh."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Monasteries Tour",
        details: [
          "Full day monastery circuit: Thiksey Monastery (resembles Potala Palace), Hemis Monastery (largest in Ladakh), Shey Palace, and Rancho School (3 Idiots filming location). Sunset at Stakna Monastery. Overnight Leh."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Leh → Pangong Tso — Blue Lake",
        details: [
          "Early drive to Pangong Tso Lake (160 km) via Chang La Pass (5,360 m — third highest motorable road in the world). First sight of the stunning blue-green lake (4,350 m). Afternoon at leisure by the lake. Overnight at Pangong camp."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Pangong Tso → Nubra Valley via Khardung La",
        details: [
          "Sunrise at Pangong Tso. Drive back to Leh via Chang La. Continue via Khardung La Pass (one of the world's highest motorable roads at 5,359 m). Descend to Nubra Valley — the valley of flowers. Bactrian double-humped camel safari at Hunder Sand Dunes. Overnight Nubra."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Nubra → Leh → Manali Highway",
        details: [
          "Morning at Diskit Monastery — giant Maitreya Buddha statue overlooking the valley. Drive back to Leh (120 km). Afternoon start on the legendary Manali-Leh Highway. Overnight Sarchu / Jispa."
          ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Sarchu → Manali — Departure",
        details: [
          "Drive through Baralacha La, Rohtang Pass, and descend into the Kullu Valley. Arrive Manali — the end of the Ladakh adventure. Transfer to Manali bus stand or Bhuntar airport. Tour concludes."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value:
          "Srinagar · Gulmarg · Sonamarg · Leh · Pangong Tso · Nubra Valley · Manali",
      },
      { label: "Departure & Return", value: "Srinagar (SXR) → Manali" },
      { label: "Tour Code", value: "LAD-ADV-SXR-10" },
      { label: "Meals", value: "Breakfast , lunch & Dinner daily" },
      { label: "Best Time", value: "June–September" },
      {
        label: "Group Size",
        value: "Adventure Travellers, Families, Couples — Private & Group",
      },
    ],

    
  },

  {
    id: 502,
    country: "India",
    place: "Leh",
    title: "Leh Ladakh Bike Tour — Manali to Leh Highway",
    type: "Adventure",
    duration: "12 Days / 11 Nights",
    durationTag: "12 Days",
    startEnd: "Manali → Leh",
    destinations: [
      "Manali",
      "Rohtang Pass",
      "Keylong",
      "Sarchu",
      "Leh",
      "Khardung La",
      "Pangong Tso",
    ],
    amenities: ["Camp Stay", "Meals", "Bike Rental", "Sightseeing"],
    price: 42000,
    rating: 4.8,
    reviews: 176,
    badge: "Adventure",
    badgeColor: "bg-orange-600",
    mode: "Bike",
    src: "/ladak4.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Bike", label: "Bike Rental", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Tent", label: "Camp Stay", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Manali to Leh Highway — One of the World's Most Legendary Motorcycle Roads",
      },
      {
        title:
          "Rohtang Pass & Baralacha La — High Altitude Mountain Passes on Two Wheels",
      },
      {
        title:
          "Khardung La Pass (5,359 m) — World's One of the Highest Motorable Roads",
      },
      { title: "Pangong Tso Overnight Camp — Stargazing at 4,350 m Altitude" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/ladak4.jpg",
      alt: "Leh Ladakh Bike Tour Manali to Leh",
    },

    testimonials: [
      {
        id: 1,
        text: "Riding through Rohtang Pass, Baralacha La, and Khardung La on a Royal Enfield — this is the adventure of a lifetime. NIT provided top-maintained bikes, a support vehicle, and brilliant route guidance throughout.",
        author: "Vikram & Sanjay Khanna",
        date: "Travelled July 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Manali-Leh highway is the most spectacular road I have ever ridden. Camping at Pangong Tso under the Milky Way was indescribable. This bike tour is for anyone who wants to live fully.",
        author: "Anirudh & Prateek Sharma",
        date: "Travelled August 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/ladak5.jpg",
        alt: "Ladakh Bike Tour",
      },
      {
        id: 2,
        src: "/ladak6.jpg",
        alt: "Manali to Leh Highway",
      },
      {
        id: 3,
        src: "/ladak7.jpg",
        alt: "Pangong Tso Camp",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Ladakh", href: "/india/ladakh" },
      { label: "Leh Ladakh Bike Tour — Manali to Leh" },
    ],

    badges: [
      { label: "BIKE ADVENTURE", variant: "solid" as const, color: "orange" },
      { label: "12 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 12,
    countryCount: 1,
    cityCount: 7,
    region: "Himachal Pradesh & Ladakh, India",

    itineraryStops: [
      { city: "Manali", nights: 2 },
      { city: "Rohtang Pass", nights: 0 },
      { city: "Keylong", nights: 1 },
      { city: "Sarchu", nights: 1 },
      { city: "Leh", nights: 4 },
      { city: "Khardung La", nights: 0 },
      { city: "Pangong Tso", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Manali — Bike Briefing",
        details: [
          "Arrive Manali. Check-in. Afternoon bike collection, safety briefing, and gear check. Test ride in Manali. Evening route briefing and acclimatization walk. Overnight Manali."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Manali — Acclimatization & Local Ride",
        details: [
          "Easy local ride to Solang Valley and Hadimba Temple. Afternoon at leisure for acclimatization. Gear check and final preparations. Overnight Manali."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Manali → Rohtang Pass → Keylong",
        details: [
          "Ride over Rohtang Pass (3,978 m) — first high-altitude pass of the trip. Descend into the Lahaul Valley. Continue to Keylong (110 km). Overnight Keylong."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Keylong → Baralacha La → Sarchu",
        details: [
          "Ride through Sissu, Tandi, and up to the dramatic Baralacha La Pass (4,890 m). Descend to Sarchu (140 km) — camped at the Himachal-Ladakh border plateau. Overnight camp Sarchu."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Sarchu → Lachulung La → Pang → Leh",
        details: [
          "Ride through the incredible Gata Loops (21 consecutive hairpin bends), Lachulung La (5,059 m), More Plains — the world's highest plateau. Arrive Leh (260 km). Overnight Leh."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Acclimatization & Rest",
        details: [
          "Rest day in Leh for acclimatization. Light walk to Leh Palace, Leh Market, and Shanti Stupa. Gear maintenance. Overnight Leh."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Leh — Monastery Circuit Ride",
        details: [
          "Ride to Thiksey, Hemis, and Shey Monasteries. Visit the Sangam (Indus-Zanskar confluence). Magnetic Hill experience. Overnight Leh."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Leh → Khardung La → Nubra Valley",
        details: [
          "Ride up to Khardung La Pass (5,359 m) — one of the highest motorable roads in the world. Descend to Nubra Valley (120 km). Camel ride at Hunder Sand Dunes. Overnight Nubra camp."
          ],
      },
      {
        day: 9,
        date: "Day 9",
        title: "Nubra → Leh → Pangong Tso",
        details: [
          "Ride back to Leh via Khardung La. Continue to Pangong Tso (160 km) via Chang La Pass (5,360 m). Arrive at the iconic blue lake. Overnight camp at Pangong Tso."
          ],
      },
      {
        day: 10,
        date: "Day 10",
        title: "Pangong Tso — Sunrise & Lake Day",
        details: [
          "Sunrise at Pangong — the colours shifting from gold to silver to blue. Day at leisure by the lake. Evening campfire under the Ladakhi stars. Overnight Pangong camp."
          ],
      },
      {
        day: 11,
        date: "Day 11",
        title: "Pangong Tso → Leh — Return Ride",
        details: [
          "Return ride from Pangong to Leh via Chang La. Bike handover. Farewell dinner in Leh. Overnight Leh."
          ],
      },
      {
        day: 12,
        date: "Day 12",
        title: "Leh — Departure",
        details: [
          "Transfer to Leh Kushok Bakula Rimpochhe Airport (IXL). Fly to Delhi or Srinagar. Ladakh Bike Tour concludes — a journey of a lifetime complete."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "12 Days / 11 Nights" },
      {
        label: "Destinations",
        value:
          "Manali · Rohtang Pass · Keylong · Sarchu · Leh · Khardung La · Nubra Valley · Pangong Tso",
      },
      { label: "Departure & Return", value: "Manali → Leh" },
      { label: "Tour Code", value: "LAD-BIKE-MNL-12" },
      { label: "Meals", value: "Breakfast , lunch & Dinner daily" },
      { label: "Best Time", value: "June–September" },
      {
        label: "Group Size",
        value: "Adventure Bikers — Small Groups (max 10 riders)",
      },
    ],

    
  },

  {
    id: 503,
    country: "India",
    place: "Leh",
    title: "Ladakh Honeymoon Tour — Pangong Lake & Nubra Valley",
    type: "Honeymoon packages",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Leh → Pangong",
    destinations: [
      "Leh",
      "Nubra Valley",
      "Pangong Tso",
      "Magnetic Hill",
      "Khardung La",
    ],
    amenities: ["Luxury Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 55000,
    rating: 4.9,
    reviews: 143,
    badge: "Romantic",
    badgeColor: "bg-pink-600",
    mode: "Road",
    src: "/ladak8.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: "Building2",
        label: "Luxury Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Heart", label: "Honeymoon", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Pangong Tso Sunrise — Romantic Camp Stay by the World's Highest Saltwater Lake",
      },
      {
        title:
          "Nubra Valley Bactrian Camel Safari — Double-Humped Camels on Himalayan Sand Dunes",
      },
      {
        title:
          "Khardung La Pass — Couple's Drive on One of the World's Highest Motorable Roads",
      },
      { title: "Shanti Stupa Sunset & Leh Palace — Romantic Ladakhi Evening" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/ladak8.jpg",
      alt: "Ladakh Honeymoon Tour Pangong Lake and Nubra Valley",
    },

    testimonials: [
      {
        id: 1,
        text: "Watching the sunrise together over Pangong Tso — the lake turning from deep blue to blazing gold in minutes — was the most romantic moment of our lives. Ladakh is an extraordinary honeymoon destination. NIT made it flawless.",
        author: "Rohit & Priya Kapoor",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We had never imagined honeymooning in Ladakh but it surpassed every beach destination we have ever visited. The Nubra Valley camel ride and the Pangong lake camp were moments we will cherish forever. Thank you NIT.",
        author: "Aakash & Sneha Bhatia",
        date: "Travelled July 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/ladak9.jpg",
        alt: "Ladakh Honeymoon Pangong Lake",
      },
      {
        id: 2,
        src: "/ladak10.jpg",
        alt: "Nubra Valley Romantic",
      },
      {
        id: 3,
        src: "/ladak1.jpg",
        alt: "Leh Palace Ladakh Sunset",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Ladakh", href: "/india/ladakh" },
      { label: "Ladakh Honeymoon Tour — Pangong Lake & Nubra Valley" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Ladakh, India",

    itineraryStops: [
      { city: "Leh", nights: 3 },
      { city: "Nubra Valley", nights: 1 },
      { city: "Pangong Tso", nights: 2 },
      { city: "Leh (Return)", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Leh — Rest & Acclimatization",
        details: [
          "Arrive Leh (IXL). Transfer to luxury hotel. Complete rest for acclimatization (altitude 3,500 m). Evening light walk to Leh Market. Welcome dinner. Overnight Leh."
          ],
      },
      {
        day: 2,
        date: "Day 2",
        title: "Leh — Monastery & Shanti Stupa",
        details: [
          "Acclimatization continues. Visit Shanti Stupa at sunset — panoramic views of Leh and the Ladakhi Himalayas. Explore Leh Palace (17th-century royal residence) and Namgyal Tsemo Monastery. Romantic dinner at a Leh rooftop restaurant. Overnight Leh."
          ],
      },
      {
        day: 3,
        date: "Day 3",
        title: "Leh — Monastery Circuit",
        details: [
          "Visit Thiksey Monastery (resembles Tibet's Potala Palace), Hemis Monastery (largest in Ladakh), and Shey Palace. Sangam — the confluence of the Indus and Zanskar rivers. Magnetic Hill. Overnight Leh."
          ],
      },
      {
        day: 4,
        date: "Day 4",
        title: "Leh → Khardung La → Nubra Valley",
        details: [
          "Drive over Khardung La Pass (5,359 m) — couples photo stop at one of the world's highest motorable roads. Descend to Nubra Valley (120 km). Check-in to camp/resort. Bactrian camel safari at Hunder Sand Dunes — double-humped camels against the Karakoram backdrop. Campfire dinner. Overnight Nubra."
          ],
      },
      {
        day: 5,
        date: "Day 5",
        title: "Nubra → Pangong Tso — Blue Lake",
        details: [
          "Drive to Pangong Tso Lake (150 km) via Shyok River route. First view of the legendary blue-green lake (4,350 m). Check-in to luxury lake-side camp. Afternoon at the lakeside — the turquoise waters, white peaks, and changing light. Candlelight dinner by the lake. Overnight Pangong camp."
          ],
      },
      {
        day: 6,
        date: "Day 6",
        title: "Pangong Tso — Sunrise & Romantic Day",
        details: [
          "Wake up before dawn for the Pangong Tso sunrise — one of nature's most spectacular colour shows. Morning walk along the lakeshore. Afternoon at leisure — photography, kayaking (optional), or simply sitting together by the lake. Overnight Pangong camp."
          ],
      },
      {
        day: 7,
        date: "Day 7",
        title: "Pangong Tso → Leh",
        details: [
          "Drive back to Leh via Chang La Pass (5,360 m). Afternoon free for shopping at Leh Market — Pashmina, turquoise jewellery, Ladakhi handicrafts. Farewell dinner at a Leh heritage restaurant. Overnight Leh."
          ],
      },
      {
        day: 8,
        date: "Day 8",
        title: "Leh — Departure",
        details: [
          "Sunrise moment from the hotel. Transfer to Leh Kushok Bakula Rimpochhe Airport (IXL). Fly to Delhi. Ladakh Honeymoon Tour concludes with memories that will last a lifetime."
          ],
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Leh · Khardung La · Nubra Valley · Hunder Dunes · Pangong Tso",
      },
      { label: "Departure & Return", value: "Leh (IXL) → Leh (IXL)" },
      { label: "Tour Code", value: "LAD-HONEY-LEH-08" },
      {
        label: "Meals",
        value:
          "Breakfast , lunch & Dinner daily; Candlelight dinner at Pangong included",
      },
      { label: "Best Time", value: "June–September" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    
  },
  {
    id: 511,
    country: "India",
    place: "Leh",
    title: "Kashmir to Ladakh Grand Tour",
    type: "Adventure",
    duration: "14 Days / 13 Nights",
    durationTag: "14 Days",
    startEnd: "Srinagar → Kargil → Leh → Manali",
    destinations: [
      "Srinagar",
      "Gulmarg",
      "Sonamarg",
      "Kargil",
      "Leh",
      "Nubra Valley",
      "Pangong Tso",
      "Manali",
    ],
    amenities: ["Hotel & Camp", "Meals", "Transfers", "Sightseeing"],
    price: 75000,
    rating: 4.9,
    reviews: 189,
    badge: "Premium",
    badgeColor: "bg-purple-700",
    mode: "Road",
    src: "/ladak10.jpg",
    popular: true,

    tourFeatures: [
      { icon: "Bike", label: "Bike Rental", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Tent", label: "Camp Stay", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: "Mountain", label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Dal Lake Shikara Ride — Floating Gardens & Houseboat Stay in Srinagar",
      },
      {
        title:
          "Gulmarg Gondola — World's 2nd Highest Cable Car over the Kashmir Valley",
      },
      {
        title:
          "Zoji La & Kargil — Drass War Memorial & the Coldest Town in India",
      },
      {
        title:
          "Khardung La Pass — Drive over One of the World's Highest Motorable Roads",
      },
      {
        title:
          "Nubra Valley Camel Safari — Bactrian Camels on Himalayan Sand Dunes",
      },
      {
        title:
          "Pangong Tso Sunrise — World's Highest Saltwater Lake on the Indo-China Border",
      },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/ladak10.jpg",
      alt: "Kashmir to Ladakh Grand Tour — Srinagar to Manali via Kargil and Pangong",
    },

    testimonials: [
      {
        id: 1,
        text: "14 days, two worlds — lush Kashmir and barren Ladakh. From Dal Lake's floating gardens to Pangong's blue silence, this grand tour is the ultimate Indian road journey. NIT handled every pass and valley flawlessly.",
        author: "Vikram & Ananya Sharma",
        date: "Travelled July 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kargil and Lamayuru were unexpected highlights nobody talks about. The Leh–Manali highway finale through Rohtang was surreal. One trip, every landscape India has to offer. Thank you NIT.",
        author: "Rajesh & Pooja Mehta",
        date: "Travelled August 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src:"/ladak11.jpg",
        alt: "Pangong Tso Ladakh Grand Tour",
      },
      {
        id: 2,
        src: "/ladak12.jpg",
        alt: "Dal Lake Srinagar Kashmir",
      },
      {
        id: 3,
        src: "/ladak13.jpg",
        alt: "Nubra Valley Khardung La Ladakh",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Ladakh", href: "/india/ladakh" },
      { label: "Kashmir to Ladakh Grand Tour" },
    ],

    badges: [
      { label: "PREMIUM", variant: "solid" as const, color: "purple" },
      { label: "14 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 14,
    countryCount: 1,
    cityCount: 8,
    region: "Kashmir & Ladakh, India",

    itineraryStops: [
      { city: "Srinagar", nights: 3 },
      { city: "Kargil", nights: 1 },
      { city: "Leh", nights: 3 },
      { city: "Nubra Valley", nights: 1 },
      { city: "Pangong Tso", nights: 2 },
      { city: "Leh (Return)", nights: 1 },
      { city: "Manali", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Srinagar — Shikara Ride on Dal Lake",
        details:[
          "Arrive Srinagar airport. Transfer to houseboat on Dal Lake. 2-hour Shikara ride past Char Chinar Island, Floating Gardens, and the lake bazaar. Welcome dinner on the houseboat. Overnight Srinagar.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Pahalgam Excursion",
        details:[
          "Morning visit to Nishat Bagh, Shalimar Bagh, and Chashma Shahi Mughal Gardens. Full-day excursion to Pahalgam (88 km) — Betaab Valley, Aru Valley, and Chandanwari. Return for dinner on houseboat. Overnight Srinagar.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar — Gulmarg Gondola Ride",
        details:[
          "Full-day excursion to Gulmarg (50 km). Ride the world's 2nd highest cable car — Gulmarg Gondola — for sweeping Himalayan views. Optional skiing and snow activities. Return to houseboat for dinner. Overnight Srinagar.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Srinagar → Sonamarg → Kargil",
        details:[
          "Checkout and drive to Kargil (200 km) via Sonamarg — the 'Meadow of Gold'. Cross Zoji La Pass. Stop at Drass — India's coldest town and site of the 1999 Kargil War. Visit Kargil War Memorial. Overnight Kargil.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Kargil → Lamayuru → Leh",
        details:[
          "Drive to Leh (200 km) via Lamayuru — Ladakh's oldest monastery perched above the surreal Moonland landscape. Visit Alchi Monastery and Magnetic Hill en route. Arrive Leh, check-in and rest. Overnight Leh.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Acclimatization & Local Sightseeing",
        details:[
          "Rest morning for high-altitude acclimatization (3,500 m). Afternoon visit to Shanti Stupa at sunset, 17th-century Leh Palace, and Namgyal Tsemo Monastery. Evening walk through Leh Market. Overnight Leh.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Leh — Monastery Circuit & Sangam",
        details:[
          "Visit Thiksey Monastery (resembles Tibet's Potala Palace), Hemis Monastery (largest in Ladakh), and Shey Palace. Sangam — confluence of the Indus and Zanskar rivers. Magnetic Hill stop. Overnight Leh.",
      ]},
      {
        day: 8,
        date: "Day 8",
        title: "Leh → Khardung La → Nubra Valley",
        details:[
          "Drive over Khardung La Pass (5,359 m) — photo stop at one of the world's highest motorable roads. Descend to Nubra Valley (120 km). Bactrian camel safari at Hunder Sand Dunes. Campfire dinner under Himalayan skies. Overnight Nubra Valley.",
      ]},
      {
        day: 9,
        date: "Day 9",
        title: "Nubra Valley → Shyok River → Pangong Tso",
        details:[
          "Drive to Pangong Tso (140 km) via the scenic Shyok River Valley. First view of the legendary blue-green lake at 4,350 m. Check-in to lakeside camp. Candlelight dinner by the water. Overnight Pangong Tso.",
      ]},
      {
        day: 10,
        date: "Day 10",
        title: "Pangong Tso — Sunrise & Full Day at the Lake",
        details:[
          "Wake before dawn for the Pangong Tso sunrise — the lake shifts from deep cobalt to blazing gold. Morning walk along the shore. Afternoon at leisure — photography, optional kayaking, or quiet time by the Indo-China border lake. Overnight Pangong Tso.",
      ]},
      {
        day: 11,
        date: "Day 11",
        title: "Pangong Tso → Leh via Chang La Pass",
        details:[
          "Drive back to Leh (220 km) over Chang La Pass (5,360 m). Afternoon free for Leh Market shopping — Pashmina, turquoise jewellery, Ladakhi handicrafts. Farewell dinner at a Leh heritage restaurant. Overnight Leh.",
      ]},
      {
        day: 12,
        date: "Day 12",
        title: "Leh → Sarchu — Leh–Manali Highway Begins",
        details:[
          "Begin the legendary Leh–Manali Highway (Day 1 of 2). Drive through Upshi and cross Tanglang La Pass (5,328 m). Descend into the high plains of Morey. Arrive Sarchu (4,290 m) camp by evening. Overnight Sarchu camp.",
      ]},
      {
        day: 13,
        date: "Day 13",
        title: "Sarchu → Rohtang Pass → Manali",
        details:[
          "Cross Baralacha La (4,890 m) and Rohtang Pass (3,978 m) — a dramatic shift from barren desert to pine-forested Kullu Valley. Arrive Manali by evening. Celebration dinner. Overnight Manali.",
      ]},
      {
        day: 14,
        date: "Day 14",
        title: "Manali — Solang Valley & Departure",
        details:[
          "Morning excursion to Solang Valley and Hadimba Devi Temple (16th-century pagoda in cedar forest). Last souvenir browse at Manali Mall Road. Transfer to Bhuntar Airport or bus stand. Kashmir to Ladakh Grand Tour concludes.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "14 Days / 13 Nights" },
      {
        label: "Destinations",
        value:
          "Srinagar · Pahalgam · Gulmarg · Sonamarg · Kargil · Lamayuru · Leh · Nubra Valley · Pangong Tso · Manali",
      },
      {
        label: "Departure & Return",
        value: "Srinagar (SXR) → Manali / Bhuntar (KUU)",
      },
      { label: "Tour Code", value: "KAL-GRAND-SXR-14" },
      {
        label: "Meals",
        value:
          "Breakfast , lunch & Dinner daily; Campfire dinner at Nubra & Pangong included",
      },
      { label: "Best Time", value: "June–September" },
      { label: "Group Size", value: "Private & Small Group Tours available" },
    ],

    
  },



  {
    id: 509,
    country: "India",
    place: "Srinagar",
    title: "Kashmir Tour Package — Srinagar Gulmarg Pahalgam",
    type: "Scenic Holiday Tour",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Srinagar → Pahalgam → Gulmarg → Srinagar",
    destinations: ["Srinagar", "Dal Lake", "Pahalgam", "Gulmarg", "Sonamarg"],
    amenities: ["Houseboat & Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 22000,
    rating: 4.9,
    reviews: 318,
    badge: "Bestseller",
    badgeColor: "bg-orange-600",
    mode: "Road",
    src: "/kashmir-scene4.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: "Building2",
        label: "Houseboat Stay",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: "Sailboat",
        label: "Shikara Ride",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: "Mountain", label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Dal Lake Shikara Ride — Floating Gardens, Char Chinar & the Lake Bazaar",
      },
      {
        title:
          "Gulmarg Gondola — World's 2nd Highest Cable Car over Kashmir's Snow Peaks",
      },
      {
        title:
          "Pahalgam Betaab Valley — Lush Meadows on the Banks of the Lidder River",
      },
      { title: "Sonamarg — The Meadow of Gold at the Gateway to Ladakh" },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src: "/kashmir-scene.jpg",
      alt: "Kashmir Tour Package — Srinagar Dal Lake Gulmarg Pahalgam",
    },

    testimonials: [
      {
        id: 1,
        text: "Dal Lake from a houseboat at dawn, with mist over the mountains and a Shikara bringing fresh lotus flowers — Kashmir is truly heaven on earth. NIT made every day smooth and memorable.",
        author: "Suresh & Kavita Nair",
        date: "Travelled June 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Gulmarg Gondola was worth the entire trip alone. Snow in June! Pahalgam's Betaab Valley is stunning. This is the Kashmir tour everyone should do at least once. Excellent arrangements by NIT.",
        author: "Amit & Shruti Joshi",
        date: "Travelled July 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "/kashmir-scene2.jpg",
        alt: "Dal Lake Srinagar Kashmir Houseboat",
      },
      {
        id: 2,
        src: "/kashmir-scene3.jpg",
        alt: "Gulmarg Gondola Snow Kashmir",
      },
      {
        id: 3,
        src: "/kashmir-scene5.jpg",
        alt: "Pahalgam Betaab Valley Kashmir",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kashmir", href: "/india/kashmir" },
      { label: "Kashmir Tour Package — Srinagar Gulmarg Pahalgam" },
    ],

    badges: [
      { label: "BESTSELLER", variant: "solid" as const, color: "orange" },
      { label: "7 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 5,
    region: "Kashmir, India",

    itineraryStops: [
      { city: "Srinagar", nights: 2 },
      { city: "Pahalgam", nights: 1 },
      { city: "Gulmarg", nights: 1 },
      { city: "Sonamarg", nights: 1 },
      { city: "Srinagar (Return)", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Srinagar — Shikara Ride on Dal Lake",
        details:[
          "Arrive Srinagar airport. Transfer to luxury houseboat on Dal Lake. 2-hour Shikara ride — Char Chinar Island, Floating Gardens, and the lake bazaar. Welcome Wazwan dinner on the houseboat. Overnight Srinagar.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Local Sightseeing",
        details:[
          "Visit the Mughal Gardens — Nishat Bagh, Shalimar Bagh, and Chashma Shahi. Explore Shankaracharya Temple hilltop for panoramic views of the valley. Evening shopping at Lal Chowk for Pashmina and Kashmiri handicrafts. Overnight Srinagar.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Pahalgam — Valley of Shepherds",
        details:[
          "Drive to Pahalgam (88 km, ~2.5 hrs). Visit Betaab Valley, Aru Valley, and Chandanwari along the banks of the Lidder River. Optional pony ride in the meadows. Check-in to hotel. Overnight Pahalgam.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Pahalgam → Gulmarg — Meadow of Flowers",
        details:[
          "Drive to Gulmarg (140 km). Ride the Gulmarg Gondola — world's 2nd highest cable car — for sweeping views of Nanga Parbat and the Kashmir peaks. Optional skiing or snow activities. Check-in to hotel. Overnight Gulmarg.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Gulmarg → Sonamarg — Meadow of Gold",
        details:[
          "Drive to Sonamarg (100 km) — the golden meadow at the gateway to Ladakh. Visit Thajiwas Glacier by pony or on foot — snow even in summer. Dramatic views of the Sindh River valley. Check-in to hotel. Overnight Sonamarg.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Sonamarg → Srinagar — Return & Leisure",
        details:[
          "Drive back to Srinagar (80 km). Afternoon free for last-minute shopping — Kashmiri carpets, crewel embroidery, and dry fruits. Evening Shikara ride at sunset on Dal Lake. Farewell dinner. Overnight Srinagar.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Srinagar — Departure",
        details:[
          "Morning sunrise over Dal Lake from the houseboat deck. Transfer to Srinagar airport (SXR). Kashmir Tour concludes — the valley, the lake, and the mountains will stay with you forever.",
      ]},
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      {
        label: "Destinations",
        value: "Srinagar · Dal Lake · Pahalgam · Gulmarg · Sonamarg",
      },
      { label: "Departure & Return", value: "Srinagar (SXR) → Srinagar (SXR)" },
      { label: "Tour Code", value: "KSH-SCENIC-SXR-07" },
      {
        label: "Meals",
        value:
          "Breakfast , lunch & Dinner daily; Traditional Wazwan welcome dinner included",
      },
      { label: "Best Time", value: "April–October" },
      { label: "Group Size", value: "Private & Small Group Tours available" },
    ],

    
  },

  // ─────────────────────────────────────────────────────────

  {
    id: 510,
    country: "India",
    place: "Srinagar",
    title: "Kashmir Honeymoon Package — Dal Lake Shikara Stay",
    type: "Honeymoon Tour",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Srinagar → Gulmarg → Pahalgam → Srinagar",
    destinations: [
      "Srinagar",
      "Dal Lake",
      "Gulmarg",
      "Pahalgam",
      "Betaab Valley",
    ],
    amenities: ["Luxury Houseboat", "Meals", "Shikara Ride", "Sightseeing"],
    price: 28000,
    rating: 4.9,
    reviews: 241,
    badge: "Romantic",
    badgeColor: "bg-pink-600",
    mode: "Road",
    src: "/kashmir-honey.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: "Building2",
        label: "Luxury Houseboat",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: "UtensilsCrossed",
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: "Heart", label: "Honeymoon", color: "#1AADA0", bg: "#E8F7F3" },
      {
        icon: "Sailboat",
        label: "Shikara Ride",
        color: "#E8508A",
        bg: "#FFF0F4",
      },
    ],

    tourHighlights: [
      {
        title:
          "Dal Lake Luxury Houseboat — Waking Up to Misty Himalayan Reflections on the Water",
      },
      {
        title:
          "Private Shikara Ride at Sunset — Floating Through Kashmir's Lotus-Lined Lake",
      },
      {
        title:
          "Gulmarg Gondola — Snow-Capped Romance at the World's 2nd Highest Cable Car",
      },
      {
        title:
          "Betaab Valley Pahalgam — Couple's Walk through Kashmir's Most Scenic Meadow",
      },
    ],

    tourManagerCompany: "Indruka Trips and Trip",

    heroImage: {
      src:  "/kashmir-honey.jpg",
      alt: "Kashmir Honeymoon Package — Dal Lake Shikara Houseboat Stay",
    },

    testimonials: [
      {
        id: 1,
        text: "Waking up on the houseboat with mountains reflected on Dal Lake, breakfast served by a floating Shikara, the smell of saffron in the air — Kashmir is the world's most romantic destination, period. NIT was perfect.",
        author: "Rohan & Simran Khanna",
        date: "Travelled May 2025",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We honeymooned in Kashmir after everyone said go to Maldives. Best decision ever. The private Shikara ride at sunset and the snow at Gulmarg in June were moments from a dream. Thank you NIT.",
        author: "Nikhil & Aarti Desai",
        date: "Travelled June 2024",
        manager: "Indruka Trips and ",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src:  "/kashmir-honey2.jpg",
        alt: "Dal Lake Houseboat Honeymoon Kashmir",
      },
      {
        id: 2,
        src: "/kashmir-honey3.png",
        alt: "Shikara Ride Sunset Dal Lake",
      },
      {
        id: 3,
        src:  "/kashmir-honey5.jpg",
        alt: "Betaab Valley Pahalgam Honeymoon",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kashmir", href: "/india/kashmir" },
      { label: "Kashmir Honeymoon Package — Dal Lake Shikara Stay" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "7 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 5,
    region: "Kashmir, India",

    itineraryStops: [
      { city: "Srinagar", nights: 3 },
      { city: "Gulmarg", nights: 1 },
      { city: "Pahalgam", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Srinagar — Luxury Houseboat Welcome",
        details:[
          "Arrive Srinagar airport. Transfer to your luxury houseboat on Dal Lake. Private Shikara welcome ride across the lake — Floating Gardens, Char Chinar, and lotus beds. Candlelight Wazwan dinner on the houseboat. Overnight Srinagar.",
      ]},
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Sunset Shikara",
        details:[
          "Morning visit to Nishat Bagh and Shalimar Bagh — the Mughal emperor's love letters to Kashmir. Afternoon at Shankaracharya Temple hilltop. Private sunset Shikara ride on Dal Lake. Romantic dinner on the houseboat deck. Overnight Srinagar.",
      ]},
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Gulmarg — Snow & Gondola Romance",
        details:[
          "Drive to Gulmarg (50 km). Ride the Gulmarg Gondola — 2nd highest cable car in the world — for sweeping snow-peak views. Couple's walk through the flower meadows. Check-in to boutique Gulmarg hotel. Overnight Gulmarg.",
      ]},
      {
        day: 4,
        date: "Day 4",
        title: "Gulmarg → Pahalgam — Valley of Shepherds",
        details:[
          "Drive to Pahalgam (140 km) through the Wular Lake region. Check-in to a riverside resort on the Lidder River. Evening stroll along the river banks — snow-melt waters, pine forests, and mountain air. Overnight Pahalgam.",
      ]},
      {
        day: 5,
        date: "Day 5",
        title: "Pahalgam — Betaab Valley & Aru Valley",
        details:[
          "Full day in Pahalgam's valleys. Betaab Valley — the lush meadow made famous by Bollywood's most iconic scenes. Aru Valley — a quiet hamlet surrounded by glaciers and alpine flowers. Optional pony ride. Romantic picnic lunch. Overnight Pahalgam.",
      ]},
      {
        day: 6,
        date: "Day 6",
        title: "Pahalgam → Srinagar — Return & Farewell",
        details:[
          "Drive back to Srinagar (88 km). Afternoon at Lal Chowk market — Kashmiri carpets, Pashmina shawls, and crewel embroidery. Final private Shikara ride at dusk. Farewell dinner on the houseboat. Overnight Srinagar.",
      ]},
      {
        day: 7,
        date: "Day 7",
        title: "Srinagar — Departure",
        details:[
          "Wake to a last Dal Lake sunrise from the houseboat deck. Transfer to Srinagar Airport (SXR). Kashmir Honeymoon Tour concludes — the mountains, the lake, and the love story stay with you forever.",
    ]
        },
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      {
        label: "Destinations",
        value: "Srinagar · Dal Lake · Gulmarg · Pahalgam · Betaab Valley",
      },
      { label: "Departure & Return", value: "Srinagar (SXR) → Srinagar (SXR)" },
      { label: "Tour Code", value: "KSH-HONEY-SXR-07" },
      {
        label: "Meals",
        value:
          "Breakfast , lunch & Dinner daily; Candlelight Wazwan dinner & private Shikara ride included",
      },
      { label: "Best Time", value: "April–October" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    
  },


];
export const SPECIALITY_TO_TYPES: Record<string, string[]> = {
  // India
  "Honeymoon packages":                  ["Honeymoon"],
  "Religious yatras":                    ["Pilgrimage", "Pilgrimage Tour", "Yoga & Spiritual", "Do Dham Yatra", "Char Dham"],
  "Luxury stays":                        ["Luxury", "Heritage", "Royal Heritage", "Luxury Camp", "Luxury Train"],
  "Budget backpacking trips":            ["Adventure", "Adventure Tour"],
  "Hill Stations & Nature Destinations": ["Hill Station", "Scenic Holiday"],
  "Beach Holidays":                      ["Beach", "Backwaters", "Houseboat", "Island Tour"],
  "Corporate tours":                     ["Corporate"],
  "School/college trips":                ["School", "College"],
  "Weekend Delhi-to-hills tours":        ["Weekend"],

  // Bhutan
  "Cultural":     ["Cultural"],
  "Festival":     ["Festival", "Festival Tour"],
  "Trekking":     ["Trekking"],
  "Luxury":       ["Luxury", "Luxury stays"],  // ← matches both Bhutan + India luxury
  "Birdwatching": ["Birdwatching"],
  "Private Tour": ["Private Tour"],
};

export const SPECIALITIES_BY_COUNTRY: Record<string, string[]> = {
  India: [
    "Honeymoon packages",
    "Religious yatras",
    "Luxury stays",
    "Budget backpacking trips",
    "Hill Stations & Nature Destinations",
    "Beach Holidays",
    "Corporate tours",
    "School/college trips",
    "Weekend Delhi-to-hills tours",
  ],
  Bhutan: [
    "Cultural",
    "Festival",
    "Trekking",
    "Luxury",
    "Birdwatching",
    "Private Tour",
  ],
};
export const DURATIONS = [
  "1 Day",
  "2–3 Days",
  "4–5 Days",
  "6–8 Days",
  "9+ Days",
];
export const DESTINATIONS = [
  "Delhi",
  "Dehradun",
  "Haridwar",
  "Kedarnath",
  "Badrinath",
  "Gangotri",
  "Yamunotri",
  "Chardham",
];
export const MODES = ["Helicopter", "Road", "Trek"];

export const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");
