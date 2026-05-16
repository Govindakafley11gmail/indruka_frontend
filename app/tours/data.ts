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

export const tours = [
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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

    onViewItinerary: () => console.log("view itinerary clicked"),
  },


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
    price: 3370,
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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
    price: 0, // To be filled
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

    onViewItinerary: () => console.log("view itinerary clicked"),
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 0,
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
    price: 21000,
    oldPrice: 23334,
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
