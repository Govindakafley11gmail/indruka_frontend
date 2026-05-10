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
} from "lucide-react";

export const tourData = {
  North: [
    {
      id: 1,
      name: "Himachal Pradesh Tour Data",
      tours: 33,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    },
    {
      id: 2,
      name: "Jammu And Kashmir Tour Data",
      tours: 24,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    },
    {
      id: 3,
      name: "Leh Ladakh Tour Data",
      tours: 23,
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&q=80",
    },
    {
      id: 4,
      name: "Nainital Mussoorie Corbett Tour Data",
      tours: 17,
      image:
        "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=600&q=80",
    },
    {
      id: 5,
      name: "Amritsar Tour Data",
      tours: 13,
      image:
        "https://images.unsplash.com/photo-1588416498473-da72fb5e3e9c?w=600&q=80",
    },
    {
      id: 6,
      name: "Agra Tour Data",
      tours: 15,
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
    },
    {
      id: 7,
      name: "Delhi Tour Data",
      tours: 30,
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    },
    {
      id: 8,
      name: "Uttarakhand Tour Data",
      tours: 21,
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80",
    },
  ],
  South: [
    {
      id: 1,
      name: "Kerala Tour Data",
      tours: 40,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    },
    {
      id: 2,
      name: "Tamil Nadu Tour Data",
      tours: 28,
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    },
    {
      id: 3,
      name: "Karnataka Tour Data",
      tours: 22,
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    },
    {
      id: 4,
      name: "Andhra Pradesh Tour Data",
      tours: 18,
      image:
        "https://images.unsplash.com/photo-1563135893-bcd95c13e74f?w=600&q=80",
    },
  ],
  "West & Central": [
    {
      id: 1,
      name: "Rajasthan Tour Data",
      tours: 45,
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
    },
    {
      id: 2,
      name: "Goa Tour Data",
      tours: 32,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    },
    {
      id: 3,
      name: "Maharashtra Tour Data",
      tours: 26,
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    },
    {
      id: 4,
      name: "Gujarat Tour Data",
      tours: 19,
      image:
        "https://images.unsplash.com/photo-1563135893-bcd95c13e74f?w=600&q=80",
    },
  ],
  "East & North East": [
    {
      id: 1,
      name: "West Bengal Tour Data",
      tours: 20,
      image:
        "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80",
    },
    {
      id: 2,
      name: "Sikkim Tour Data",
      tours: 16,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    },
    {
      id: 3,
      name: "Assam Tour Data",
      tours: 14,
      image:
        "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=600&q=80",
    },
    {
      id: 4,
      name: "Meghalaya Tour Data",
      tours: 12,
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&q=80",
    },
  ],
};

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2026/01/chardham-yatra-by-helicopter-2026.webp",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: Helicopter,
        label: "Helicopter",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
    ],

    tourHighlights: [
      { title: "Yamunotri Temple Darshan" },
      { title: "Gangotri Temple & Bhagirathi River Views" },
      { title: "Kedarnath Temple VIP Darshan" },
      { title: "Badrinath Temple & Tapt Kund" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2026/01/chardham-yatra-by-helicopter-2026.webp",
      alt: "Char Dham Yatra By Helicopter — Uttarakhand",
    },

    testimonials: [
      {
        id: 1,
        text: "Planning our Chardham Yatra was stressing me out until we chose Namaste India Trip. It was a very perfect family bonding and the best experience.",
        author: "Rakesh Sharma",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Me along with my family hired Namaste India Trip for our Badrinath Tour. After completing the tour, we saw they kept all their commitments. Definitely I will suggest everyone to hire them.",
        author: "Manoj Patel",
        date: "Travelled Jun 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/char-dham-yatra-by-helicopter.jpg",
        alt: "Char Dham Yatra Helicopter",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kedarnath-yatra-by-helicopter.jpg",
        alt: "Kedarnath by Helicopter",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/badrinath-yatra-by-helicopter.jpg",
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
        details:
          "Arrive at Dehradun. Transfer to hotel. Welcome briefing, overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Dehradun → Kharsali → Yamunotri",
        details:
          "Fly to Kharsali helipad. Visit Yamunotri Temple, Surya Kund hot springs, and Divya Shila. Return to overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kharsali → Harsil → Gangotri",
        details:
          "Fly to Harsil. Visit Gangotri Temple dedicated to Goddess Ganga. View Bhagirath Shila. Overnight at Harsil.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Harsil → Guptkashi → Kedarnath",
        details:
          "Fly to Sersi/Guptkashi helipad. Visit Kedarnath Temple and Adi Shankaracharya Samadhi. VIP Darshan arranged. Overnight at Guptkashi.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Guptkashi → Badrinath",
        details:
          "Fly to Badrinath. Visit Badrinath Temple, Tapt Kund, Mana Village (last village before Tibet). Overnight at Badrinath.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Badrinath → Dehradun — Departure",
        details:
          "Morning Aarti at Badrinath Temple. Fly back to Sahastradhara Helipad, Dehradun. Tour concludes.",
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
    img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=640&q=80",
    popular: true,
    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: Helicopter,
        label: "Helicopter",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2026/01/chardham-yatra-by-helicopter-2026.webp",
      alt: "Char Dham Yatra By Helicopter — Uttarakhand",
    },

    testimonials: [
      {
        id: 1,
        text: "Planning our Chardham Yatra was stressing me out until we chose Namaste India Trip. It was a very perfect family bonding and the best experience.",
        author: "Rakesh Sharma",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Me along with my family hired Namaste India Trip for our Badrinath Tour. After completing the tour, we saw they kept all their commitments. Definitely I will suggest everyone to hire them.",
        author: "Manoj Patel",
        date: "Travelled Jun 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/char-dham-yatra-by-helicopter.jpg",
        alt: "Char Dham Yatra Helicopter",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kedarnath-yatra-by-helicopter.jpg",
        alt: "Kedarnath by Helicopter",
      },
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/char-dham-yatra-by-helicopter.jpg",
        alt: "Char Dham Yatra Helicopter",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kedarnath-yatra-by-helicopter.jpg",
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
        details:
          "Arrive at Dehradun. Transfer to hotel. Welcome briefing, overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Dehradun → Kharsali → Yamunotri",
        details:
          "Fly to Kharsali helipad. Visit Yamunotri Temple, Surya Kund hot springs, and Divya Shila. Return to overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kharsali → Harsil → Gangotri",
        details:
          "Fly to Harsil. Visit Gangotri Temple dedicated to Goddess Ganga. View Bhagirath Shila. Overnight at Harsil.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Harsil → Guptkashi → Kedarnath",
        details:
          "Fly to Sersi/Guptkashi helipad. Visit Kedarnath Temple and Adi Shankaracharya Samadhi. VIP Darshan arranged. Overnight at Guptkashi.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Guptkashi → Badrinath",
        details:
          "Fly to Badrinath. Visit Badrinath Temple, Tapt Kund, Mana Village (last village before Tibet). Overnight at Badrinath.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Badrinath → Dehradun — Departure",
        details:
          "Morning Aarti at Badrinath Temple. Fly back to Sahastradhara Helipad, Dehradun. Tour concludes.",
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
    img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Amarnath Holy Cave Darshan" },
      { title: "Shikara Ride on Dal Lake, Srinagar" },
      { title: "Sheshnag Lake & Mahagunas Pass Trek" },
      { title: "Pahalgam Valley & Betaab Valley Visit" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
      alt: "Amarnath Yatra Packages — Jammu & Kashmir",
    },

    testimonials: [
      {
        id: 1,
        text: "The Amarnath Yatra arranged by Namaste India Trip was a truly divine experience. Every detail — from permits to camps — was handled perfectly. Baba Barfani's darshan was life-changing.",
        author: "Suresh Tiwari",
        date: "Travelled Aug 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We were a group of 8 pilgrims and the trek coordination was flawless. The guides were experienced and the accommodation at Pahalgam was very comfortable. Highly recommended!",
        author: "Anjali Mehta",
        date: "Travelled Jul 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/amarnath-tour.jpg",
        alt: "Amarnath Holy Cave",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1569325485879-56a56e1f0de1?w=640&q=80",
        alt: "Dal Lake Srinagar",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80",
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
        details:
          "Arrive at Srinagar Airport and transfer to hotel. Welcome briefing by the tour manager covering the yatra schedule, permits, and trekking guidelines. Evening leisurely stroll along the banks of Dal Lake. Overnight Srinagar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar Sightseeing",
        details:
          "Morning Shikara ride on the iconic Dal Lake passing floating gardens and houseboats. Visit Shankaracharya Temple perched on the hilltop, Mughal Gardens (Shalimar Bagh and Nishat Bagh), and the revered Hazratbal Shrine. Overnight Srinagar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Pahalgam",
        details:
          "Scenic drive to Pahalgam (95 km / approx. 3 hrs) through the lush Lidder Valley and Awantipora ruins. Afternoon excursion to Betaab Valley and Aru Valley. Rest and acclimatisation before the trek. Overnight Pahalgam.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Pahalgam → Chandanwari → Sheshnag",
        details:
          "Trek begins from Chandanwari base (16 km). Ascend through pine forests, cross Pissu Top ridge, and descend to the magnificent Sheshnag Lake at 3,590 m — surrounded by snow-clad peaks. Overnight at tented camps, Sheshnag.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Sheshnag → Mahagunas Pass → Panjtarni",
        details:
          "Trek over the mighty Mahagunas Pass at 4,890 m — the highest point of the entire yatra route. Gradual descent through alpine meadows to Panjtarni (14 km). Rest and prepare with prayers ahead of the holy cave darshan. Overnight camps, Panjtarni.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Panjtarni → Amarnath Cave Darshan → Baltal",
        details:
          "Early morning trek to the sacred Amarnath Holy Cave at 3,888 m (6 km). Darshan of the naturally formed Shiva Lingam of ice — a deeply spiritual and unforgettable experience. Return to Panjtarni and drive to Baltal. Overnight Baltal.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Baltal → Srinagar — Departure",
        details:
          "Morning drive from Baltal to Srinagar (93 km / approx. 3 hrs) through scenic Sindh Valley. Freshen up and collect souvenirs at the local market before transfer to Srinagar Airport. Tour concludes with the divine blessings of Baba Amarnath.",
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
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Om Parvat Natural OM Snow Symbol Darshan" },
      { title: "Adi Kailash Parikrama at 6,310 m" },
      { title: "Parvati Sarovar Sacred Glacial Lake" },
      { title: "Kalapani — Source of the Kali River" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
      alt: "Adi Kailash & Om Parvat Yatra — Uttarakhand",
    },

    testimonials: [
      {
        id: 1,
        text: "Namaste India Trip made our Adi Kailash Yatra smooth and spiritually enriching. The guides were incredibly knowledgeable and the logistics for this remote trek were perfectly managed.",
        author: "Vikram Nair",
        date: "Travelled Jun 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Seeing the natural OM symbol on Om Parvat was a moment I will carry for a lifetime. Every camp, every meal, every guide — all first class. Truly a premium spiritual journey.",
        author: "Priya Joshi",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-1.jpg",
        alt: "Adi Kailash Peak",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1585016495481-8c30a6b05586?w=640&q=80",
        alt: "Om Parvat Snow OM",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
        alt: "Kalapani Kali River",
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
        details:
          "Arrive at Haldwani or Kathgodam railway station. Transfer by road to Pithoragarh (200 km / approx. 7 hrs) through scenic Kumaon hills. Check-in at hotel and welcome briefing. Overnight Pithoragarh.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Pithoragarh → Dharchula — ILP Formalities",
        details:
          "Scenic drive to Dharchula (92 km / approx. 4 hrs) along the Kali River, which forms the natural border between India and Nepal. Inner Line Permit (ILP) registration completed here — mandatory for the yatra. Overnight Dharchula.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Dharchula → Tawaghat → Budhi",
        details:
          "Drive to Tawaghat where the road ends, then begin the trek through dense Himalayan forests and traditional Bhotiya villages. Pass through Sirkha and Dar. Overnight guesthouse at Budhi.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Budhi → Gala → Gunji",
        details:
          "Trek continues through Gala village with sweeping views of Panchachuli peaks. Arrive at Gunji — the key base camp and supply hub for the yatra region. Rest and acclimatisation. Overnight Gunji.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Gunji → Kalapani → Navidhang (Om Parvat Darshan)",
        details:
          "Trek to Kalapani — the sacred origin point of the Kali River venerated in mythology. Ascend to Navidhang (4,750 m) for a breathtaking view of Om Parvat, where a natural formation of snow creates the divine OM symbol on the peak. Overnight camps, Navidhang.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Navidhang → Gunji → Kuti Village",
        details:
          "Descend from Navidhang back to Gunji. Proceed onward to the remote and serene Kuti Village (3,740 m) — a traditional Bhotiya settlement with spectacular Himalayan vistas. Overnight guesthouse, Kuti.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Kuti → Jollingkong (Adi Kailash Base Camp)",
        details:
          "Trek from Kuti to Jollingkong (15 km) through high-altitude meadows and glacial terrain. First dramatic views of Adi Kailash peak (6,310 m) — revered as the Himalayan abode of Lord Shiva. Overnight tented camps, Jollingkong.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Adi Kailash Parikrama & Parvati Sarovar",
        details:
          "Full day dedicated to the sacred Adi Kailash Parikrama (circumambulation of the holy peak). Visit the pristine Parvati Sarovar glacial lake and offer prayers at the Shiva Mandir. A deeply meditative and spiritually profound experience. Overnight Jollingkong.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Jollingkong → Kuti → Gunji → Dharchula",
        details:
          "Begin the return trek to Kuti, then continue driving back through Gunji to Dharchula. Debrief with the tour manager. A celebratory dinner to mark the completion of this rare Himalayan pilgrimage. Overnight Dharchula.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Dharchula → Haldwani — Departure",
        details:
          "Early morning drive from Dharchula to Haldwani / Kathgodam (280 km / approx. 8 hrs) through the Kumaon valleys. Drop at Kathgodam Railway Station or Haldwani Bus Stand. Tour concludes with the divine blessings of Adi Kailash.",
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
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Taj Mahal Sunrise Visit, Agra" },
      { title: "Golden Temple Darshan, Amritsar" },
      { title: "Amber Fort Elephant Ride, Jaipur" },
      { title: "Wagah Border Flag-Lowering Ceremony" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
      alt: "Golden Triangle Tour Package — Delhi Agra Jaipur Amritsar",
    },

    testimonials: [
      {
        id: 1,
        text: "An absolutely perfect introduction to India! The Golden Triangle plus Amritsar extension was flawlessly organised. From the Taj Mahal at dawn to the Golden Temple — every moment was memorable.",
        author: "Ramesh Kapoor",
        date: "Travelled Nov 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We visited with our family of six and everything was taken care of — hotels, guides, meals. The Wagah Border ceremony was the absolute highlight of our trip. Will definitely book again!",
        author: "Sunita Agarwal",
        date: "Travelled Dec 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
        alt: "Taj Mahal Agra",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=640&q=80",
        alt: "Amber Fort Jaipur",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=640&q=80",
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
        details:
          "Arrive at Indira Gandhi International Airport and transfer to hotel. Welcome briefing with the tour manager. Evening visit to India Gate, Rajpath, and the vibrant Connaught Place market. Welcome dinner. Overnight Delhi.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Delhi City Tour",
        details:
          "Old Delhi exploration — rickshaw ride through Chandni Chowk, Jama Masjid, and Red Fort. New Delhi highlights — Qutub Minar, Humayun's Tomb, Lotus Temple, and Raj Ghat (Gandhi Memorial). Overnight Delhi.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Delhi → Agra — Taj Mahal",
        details:
          "Drive to Agra (200 km / approx. 4 hrs). Visit the Taj Mahal — one of the Seven Wonders of the World — followed by the imposing Agra Fort and serene Mehtab Bagh. En route stop at the UNESCO-listed Fatehpur Sikri. Overnight Agra.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Agra → Mathura → Vrindavan",
        details:
          "Morning drive to Mathura — the sacred birthplace of Lord Krishna. Visit Krishna Janmabhoomi Temple, Dwarkadhish Temple, and Vishram Ghat on the Yamuna River. Explore the holy town of Vrindavan and ISKCON temple. Overnight Mathura.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Mathura → Jaipur",
        details:
          "Drive to the 'Pink City' of Jaipur (180 km / approx. 4 hrs). Check-in at hotel. Evening experience at Chokhi Dhani cultural village — traditional Rajasthani folk performances, cuisine, and crafts. Overnight Jaipur.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jaipur Sightseeing",
        details:
          "Visit the majestic Amber Fort with an optional elephant ride up the ramp. Explore City Palace, Jantar Mantar (UNESCO), the iconic Hawa Mahal facade, and Nahargarh Fort with panoramic city views. Evening shopping at Johri Bazaar for gems, textiles, and handicrafts. Overnight Jaipur.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Jaipur → Amritsar — Golden Temple",
        details:
          "Fly or drive to Amritsar. Check-in and freshen up. Visit the Golden Temple (Harmandir Sahib) — the holiest shrine of Sikhism, glittering in gold over the sacred Amrit Sarovar pool. Tour Jallianwala Bagh memorial. Attend the electric Wagah Border flag-lowering ceremony at sunset. Overnight Amritsar.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Amritsar — Departure",
        details:
          "Begin the morning with a peaceful visit to Durgiana Temple, the silver-domed Sikh shrine modelled after the Golden Temple. Explore the historic Gobindgarh Fort, an 18th-century military fortress at the heart of Amritsar. After breakfast, transfer to Sri Guru Ram Dass Jee International Airport for your onward journey. Tour concludes with the blessings of the Golden City.",
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
    img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=640&q=80",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Jagannath Temple Darshan, Puri" },
      { title: "Konark Sun Temple (UNESCO World Heritage)" },
      { title: "Chilika Lake Boat Ride & Bird Sanctuary" },
      { title: "Lingaraj Temple, Bhubaneswar" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
      alt: "Bhubaneswar Puri Konark Tour — Odisha",
    },

    testimonials: [
      {
        id: 1,
        text: "The Odisha triangle tour was a beautiful blend of history, spirituality, and nature. Konark at golden hour was absolutely stunning and the Jagannath Temple darshan was deeply moving.",
        author: "Deepak Mishra",
        date: "Travelled Jan 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "A wonderfully compact yet richly packed tour. The Chilika Lake boat ride was a surprise highlight — thousands of migratory birds and the Irrawaddy dolphins! Highly organised trip.",
        author: "Kavita Rao",
        date: "Travelled Feb 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-6.jpg",
        alt: "Konark Sun Temple",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=640&q=80",
        alt: "Jagannath Temple Puri",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=640&q=80",
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
        details:
          "Arrive at Bhubaneswar Airport / Railway Station and check-in at hotel. Visit the magnificent Lingaraj Temple (11th-century Shiva shrine), Mukteshwar Temple, and the ornately carved Rajarani Temple. Explore the ancient Udayagiri and Khandagiri Caves. Overnight Bhubaneswar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Bhubaneswar → Konark → Puri",
        details:
          "Drive to Konark (65 km) and visit the awe-inspiring Sun Temple — a UNESCO World Heritage Site shaped like the chariot of the Sun God, adorned with intricate erotic sculptures. Continue to Puri for darshan at the sacred Jagannath Temple, one of the four Char Dhams of India. Stroll along the golden Puri Beach at sunset. Overnight Puri.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Puri — Chilika Lake Excursion",
        details:
          "Full-day excursion to Chilika Lake — Asia's largest brackish water lagoon and a Ramsar Wetland. Scenic boat ride through the lake to Nalbana Bird Sanctuary and the serene Kalijai Island Temple. Return to Puri for evening prayers on the beach. Overnight Puri.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Puri → Bhubaneswar — Departure",
        details:
          "Morning visit to Sudarshana Crafts Village to witness Pattachitra painting artists and Odisha's traditional handloom weavers at work. Drive to Bhubaneswar Airport / Station for onward journey. Tour concludes with the blessings of Lord Jagannath.",
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
    id: 7,
    country: "India",
    place: "Guwahati",
    title: "Kamakhya Devi Temple Tour",
    type: "Religious yatras",
    duration: "2 Nights / 3 Days",
    durationTag: "3 Days",
    startEnd: "Guwahati → Guwahati",
    destinations: ["Guwahati", "Kamakhya Temple"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 13500,
    rating: 4.7,
    reviews: 118,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=640&q=80",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Kamakhya Devi Temple Darshan (Shakti Peetha)" },
      { title: "Brahmaputra River Evening Cruise" },
      { title: "Umananda Temple on Peacock Island" },
      { title: "Navagraha Temple of Nine Planetary Deities" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1200&q=80",
      alt: "Kamakhya Devi Temple Tour — Guwahati, Assam",
    },

    testimonials: [
      {
        id: 1,
        text: "A beautifully arranged short pilgrimage. The Kamakhya Temple darshan was a profound spiritual experience. The Brahmaputra cruise in the evening was the perfect way to end the day.",
        author: "Ananya Das",
        date: "Travelled Mar 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Namaste India Trip managed everything impeccably — hotel, transfers, and priority darshan at Kamakhya Devi. This 3-day tour is perfect for a short but deeply spiritual getaway to Assam.",
        author: "Gopal Sharma",
        date: "Travelled Feb 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-7.jpg",
        alt: "Kamakhya Devi Temple Guwahati",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=640&q=80",
        alt: "Brahmaputra River Guwahati",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1606298246064-53af4f9c8c2b?w=640&q=80",
        alt: "Umananda Temple Peacock Island",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Assam", href: "/india/assam" },
      { label: "Kamakhya Devi Temple Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "PILGRIMAGE TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 3,
    countryCount: 1,
    cityCount: 1,
    region: "Assam, India",

    itineraryStops: [{ city: "Guwahati", nights: 2 }],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Guwahati",
        details:
          "Arrive at Guwahati Airport / Railway Station and transfer to hotel. Evening boat ride on the mighty Brahmaputra River — one of the great rivers of Asia — with views of Nilachal Hill. Visit the Umananda Temple situated on Peacock Island midstream in the Brahmaputra. Overnight Guwahati.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Kamakhya Devi Temple Darshan",
        details:
          "Early morning darshan at the Kamakhya Devi Temple — one of the 51 Shakti Peethas of India, perched atop Nilachal Hill with panoramic city views. Visit the sacred Navagraha Temple dedicated to the nine planetary deities. Afternoon at Assam State Zoo and Botanical Garden. Overnight Guwahati.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Guwahati — Cultural Visit & Departure",
        details:
          "Morning visit to Srimanta Sankardev Kalakshetra — a vast cultural institution showcasing Assamese history, art, manuscripts, and traditional performing arts. Browse local market for Assam silk and tea. Transfer to Guwahati Airport / Station for onward journey. Tour concludes with the blessings of Maa Kamakhya.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "2 Nights / 3 Days" },
      {
        label: "Destinations",
        value:
          "Guwahati · Kamakhya Temple · Navagraha Temple · Umananda Island",
      },
      {
        label: "Departure & Return",
        value: "Guwahati Airport / Railway Station",
      },
      { label: "Tour Code", value: "KMK-PLGM-GUW-26" },
      { label: "Meals", value: "All meals included" },
      { label: "Best Time", value: "October–April" },
      { label: "Group Size", value: "Customised — 2 to 20+ guests" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 8,
    country: "India",
    place: "Varanasi",
    title: "Varanasi Ayodhya Bodhgaya Chitrakoot Tour",
    type: "Religious yatras",
    duration: "6 Nights / 7 Days",
    durationTag: "7 Days",
    startEnd: "Varanasi → Chitrakoot",
    destinations: ["Varanasi", "Bodhgaya", "Ayodhya", "Chitrakoot"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 32500,
    rating: 4.7,
    reviews: 176,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&q=80",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Ganga Aarti at Dashashwamedh Ghat, Varanasi" },
      { title: "Kashi Vishwanath Jyotirlinga Darshan" },
      { title: "Ram Mandir Darshan, Ayodhya" },
      { title: "Mahabodhi Temple, Bodhgaya (UNESCO)" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
      alt: "Varanasi Ayodhya Bodhgaya Chitrakoot Tour — Sacred India",
    },

    testimonials: [
      {
        id: 1,
        text: "This tour touched the soul. From the Ganga Aarti in Varanasi to the Ram Mandir in Ayodhya — every destination was sacred and the arrangements by Namaste India Trip were impeccable throughout.",
        author: "Rajendra Pandey",
        date: "Travelled Apr 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Covering four of India's most spiritually powerful cities in one tour was a dream come true. The Mahabodhi Temple at Bodhgaya and Kamadgiri Parikrama at Chitrakoot were deeply moving.",
        author: "Meena Verma",
        date: "Travelled Jan 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&q=80",
        alt: "Varanasi Ghats",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-8.jpg",
        alt: "Mahabodhi Temple Bodhgaya",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?w=640&q=80",
        alt: "Ram Mandir Ayodhya",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttar Pradesh", href: "/india/uttar-pradesh" },
      { label: "Varanasi Ayodhya Bodhgaya Chitrakoot Tour" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "PILGRIMAGE TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 4,
    region: "Uttar Pradesh & Bihar, India",

    itineraryStops: [
      { city: "Varanasi", nights: 2 },
      { city: "Bodhgaya", nights: 1 },
      { city: "Ayodhya", nights: 1 },
      { city: "Chitrakoot", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Varanasi",
        details:
          "Arrive at Varanasi Airport / Cantt Railway Station and transfer to hotel. Evening visit to Dashashwamedh Ghat for the spectacular Ganga Aarti — a mesmerising fire ritual performed by priests to the chanting of Vedic hymns. Overnight Varanasi.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Varanasi — Kashi Vishwanath & Sarnath",
        details:
          "Pre-dawn boat ride on the Ganges past the ancient ghats as the city awakens. Darshan at Kashi Vishwanath Jyotirlinga (one of the 12 sacred Jyotirlingas) and Sankat Mochan Hanuman Temple. Afternoon excursion to Sarnath — where the Buddha delivered his first sermon — and visit the Dhamek Stupa. Overnight Varanasi.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Varanasi → Bodhgaya",
        details:
          "Drive to Bodhgaya (250 km / approx. 5 hrs) — the most sacred site in Buddhism. Visit the Mahabodhi Temple Complex (UNESCO World Heritage Site) and the Bodhi Tree under which Gautama Buddha attained enlightenment. Attend evening meditation prayers at the temple. Overnight Bodhgaya.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Bodhgaya → Ayodhya",
        details:
          "Morning visit to Dungeshwari Cave Temples (Mahakala Caves) and the monasteries of Japan, China, and Thailand. Drive to Ayodhya (350 km / approx. 7 hrs) — the birthplace of Lord Ram. Check-in and evening aarti at Saryu River Ghat. Overnight Ayodhya.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Ayodhya — Ram Mandir Darshan",
        details:
          "Darshan at the newly built Ram Mandir (Ram Janmabhoomi) — a landmark of Hindu faith and heritage. Visit Hanuman Garhi, Kanak Bhavan Temple, and Nageshwarnath Temple. Evening boat ride on the Saryu River and Aarti ceremony on the ghats. Overnight Ayodhya.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Ayodhya → Chitrakoot",
        details:
          "Drive to Chitrakoot (180 km / approx. 4 hrs) — the sacred forest where Lord Ram, Sita, and Lakshmana spent 11 of their 14 years of exile. Visit Kamadgiri Parikrama (holy hill circumambulation), Sphatik Shila, and the serene Ramghat on the Mandakini River. Overnight Chitrakoot.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Chitrakoot Sightseeing — Departure",
        details:
          "Morning visit to Gupt Godavari Caves, Janaki Kund, and Bharat Milap Temple — marking the sacred reunion of Ram and Bharat. Transfer to Allahabad / Prayagraj Airport or Chitrakoot Railway Station for onward journey. Tour concludes with divine blessings of Shri Ram.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Nights / 7 Days" },
      {
        label: "Destinations",
        value: "Varanasi · Bodhgaya · Ayodhya · Chitrakoot",
      },
      {
        label: "Departure & Return",
        value: "Varanasi Airport / Railway Station",
      },
      { label: "Tour Code", value: "VABC-PLGM-VNS-26" },
      { label: "Meals", value: "All meals included (vegetarian)" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ pilgrims" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 9,
    country: "India",
    place: "Ahmedabad",
    title: "Pancha Dwaraka Tour from Ahmedabad",
    type: "Religious yatras",
    duration: "9 Nights / 10 Days",
    durationTag: "10 Days",
    startEnd: "Ahmedabad → Somnath",
    destinations: ["Ahmedabad", "Dwarka", "Porbandar", "Somnath"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 42900,
    rating: 4.6,
    reviews: 93,
    badge: "Heritage",
    badgeColor: "bg-orange-500",
    mode: "Road",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=640&q=80",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Dwarkadhish Temple Darshan (Char Dham)" },
      { title: "Somnath Jyotirlinga — First of 12 Jyotirlingas" },
      { title: "Nageshwar Jyotirlinga & Beyt Dwarka" },
      { title: "Palitana Jain Temples, Shatrunjaya Hill" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
      alt: "Pancha Dwaraka Tour from Ahmedabad — Gujarat",
    },

    testimonials: [
      {
        id: 1,
        text: "An extraordinary pilgrimage across Gujarat covering Dwarka, Somnath, and Palitana. Namaste India Trip handled every detail superbly — comfortable hotels, timely transfers, and knowledgeable guides.",
        author: "Haresh Shah",
        date: "Travelled Dec 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Somnath Temple at the edge of the Arabian Sea at sunset was breathtaking. Climbing Shatrunjaya Hill to the Palitana Jain temples was challenging but spiritually rewarding. Wonderful tour!",
        author: "Sonal Desai",
        date: "Travelled Nov 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-9.jpg",
        alt: "Dwarkadhish Temple",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=640&q=80",
        alt: "Somnath Temple Gujarat",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1606141689920-8c8e21f6f70c?w=640&q=80",
        alt: "Palitana Jain Temples",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Gujarat", href: "/india/gujarat" },
      { label: "Pancha Dwaraka Tour from Ahmedabad" },
    ],

    badges: [
      { label: "HERITAGE", variant: "solid" as const, color: "amber" },
      { label: "PILGRIMAGE TOUR", variant: "outlined" as const, color: "blue" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 4,
    region: "Gujarat, India",

    itineraryStops: [
      { city: "Ahmedabad", nights: 1 },
      { city: "Dwarka", nights: 2 },
      { city: "Porbandar", nights: 1 },
      { city: "Somnath / Junagadh", nights: 2 },
      { city: "Palitana", nights: 1 },
      { city: "Ahmedabad (Return)", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Ahmedabad",
        details:
          "Arrive at Ahmedabad Airport / Railway Station and transfer to hotel. Visit the grand Swaminarayan Temple at Kalupur and the spectacular Akshardham Temple complex. Welcome dinner. Overnight Ahmedabad.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Ahmedabad → Dwarka",
        details:
          "Drive to Dwarka (450 km / approx. 7 hrs) through the Saurashtra heartland. Evening darshan at the sacred Dwarkadhish Temple — one of the four Char Dhams — dedicated to Lord Krishna, rising magnificently beside the Gomti River. Attend the sunset aarti. Overnight Dwarka.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Dwarka — Beyt Dwarka & Nageshwar Jyotirlinga",
        details:
          "Morning darshan at Dwarkadhish Temple and Rukmini Devi Temple (2 km from Dwarka). Boat ride to Beyt Dwarka Island, believed to be Lord Krishna's actual residence. Visit Nageshwar Jyotirlinga — one of the 12 sacred Jyotirlingas. Overnight Dwarka.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Dwarka → Porbandar",
        details:
          "Drive to Porbandar (100 km / approx. 2 hrs) — birthplace of Mahatma Gandhi on the Saurashtra coast. Visit Sudama Mandir (honouring Krishna's dearest devotee), Kirti Mandir (Gandhi's ancestral home), and the tranquil Porbandar Beach. Overnight Porbandar.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Porbandar → Somnath",
        details:
          "Drive to Somnath (170 km / approx. 3 hrs). Darshan at the Somnath Jyotirlinga Temple — the first and most revered of the 12 Jyotirlingas, standing at the Triveni Sangam of three rivers on the Arabian Sea coast. Visit Bhalka Tirth — where Lord Krishna left the mortal world. Overnight Somnath.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Somnath → Junagadh",
        details:
          "Drive to Junagadh. Take the rope-way up Girnar Hill to visit ancient Jain temples at the summit. Explore the medieval Uparkot Fort with its ancient Buddhist caves and stepwells. Optional jeep safari to Gir National Park — the last wild habitat of Asiatic lions. Overnight Junagadh.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Junagadh → Palitana",
        details:
          "Drive to Palitana (180 km / approx. 4 hrs). Ascend the 3,500+ steps of Shatrunjaya Hill to the spectacular cluster of 863 Jain temples — one of the holiest Jain pilgrimage sites in the world, with panoramic views of the Gulf of Khambhat. Overnight Palitana.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Palitana → Vadodara → Champaner",
        details:
          "Drive toward Vadodara. En route visit the UNESCO-listed Champaner-Pavagadh Archaeological Park — a remarkable blend of Hindu and Islamic heritage. Ascend Pavagadh Hill (rope-way available) for darshan at Kalika Mata Temple. Overnight Vadodara.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Vadodara → Ahmedabad — City Sightseeing",
        details:
          "Drive to Ahmedabad (110 km / approx. 2 hrs). Visit Sabarmati Ashram — Mahatma Gandhi's historic residence and nerve centre of India's independence movement — the exquisitely carved Adalaj Vav Stepwell, and the latticed Sidi Saiyyed Mosque. Overnight Ahmedabad.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Ahmedabad — Departure",
        details:
          "Morning visit to the Hutheesing Jain Temple — a masterpiece of white marble craftsmanship. Browse the local handicraft market for Patola silk, Bandhani fabric, and Gujarati embroidery as mementos of this sacred journey. Transfer to Ahmedabad Airport for onward travel. Tour concludes with blessings of Lord Dwarkadhish.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "9 Nights / 10 Days" },
      {
        label: "Destinations",
        value: "Dwarka · Porbandar · Somnath · Junagadh · Palitana · Ahmedabad",
      },
      {
        label: "Departure & Return",
        value: "Ahmedabad Airport / Railway Station",
      },
      { label: "Tour Code", value: "PDW-PLGM-AMD-26" },
      { label: "Meals", value: "All meals included (vegetarian)" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ pilgrims" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },
  // ─────────────────────────────────────────────
  // ID 139 — Dalhousie Khajjiar Tour Package
  // ─────────────────────────────────────────────
  // {
  //   id: 139,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Dalhousie Khajjiar Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Pathankot", "Dalhousie", "Khajjiar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dalhousie-khajjiar-tour.webp",
  //   popular: false,

  //   tourFeatures: [
  //     { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
  //     { icon: UtensilsCrossed, label: "Meals", color: "#F4884A", bg: "#FEF0E8" },
  //     { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
  //     { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
  //   ],

  //   tourHighlights: [
  //     { title: "Colonial charm of Dalhousie hill town" },
  //     { title: "Panchpula waterfalls & Subhash Baoli" },
  //     { title: "Khajjiar — Mini Switzerland of India" },
  //     { title: "Khajjiar Lake & lush green meadows" },
  //   ],

  //   tourManagerCompany: "Namaste India Trip",

  //   heroImage: {
  //     src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dalhousie-khajjiar-tour.webp",
  //     alt: "Dalhousie Khajjiar Tour Package — Himachal Pradesh",
  //   },

  //   testimonials: [
  //     {
  //       id: 1,
  //       text: "The Dalhousie trip was beautifully organised. Khajjiar truly felt like Switzerland — lush green and peaceful. Namaste India Trip made every moment special.",
  //       author: "Priya Mehta",
  //       date: "Travelled October 2025",
  //       manager: "Namaste India Trip Team",
  //       managerRole: "Tour Manager",
  //     },
  //     {
  //       id: 2,
  //       text: "A perfect short getaway for our family. The transfers were smooth, hotels were comfortable, and Khajjiar was breathtaking. Highly recommended!",
  //       author: "Sandeep Verma",
  //       date: "Travelled November 2025",
  //       manager: "Namaste India Trip Team",
  //       managerRole: "Tour Manager",
  //     },
  //   ],

  //   thumbnails: [
  //     {
  //       id: 1,
  //       src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dalhousie-khajjiar-tour.webp",
  //       alt: "Dalhousie Khajjiar Tour",
  //     },
  //   ],

  //   breadcrumbs: [
  //     { label: "Home", href: "/" },
  //     { label: "India", href: "/india" },
  //     { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
  //     { label: "Dalhousie Khajjiar Tour Package" },
  //   ],

  //   badges: [
  //     { label: "POPULAR", variant: "solid" as const, color: "blue" },
  //     { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
  //   ],

  //   durationDays: 3,
  //   countryCount: 1,
  //   cityCount: 2,
  //   region: "Himachal Pradesh, India",

  //   itineraryStops: [
  //     { city: "Delhi / Pathankot", nights: 0 },
  //     { city: "Dalhousie", nights: 1 },
  //     { city: "Khajjiar", nights: 1 },
  //   ],

  //   days: [
  //     {
  //       day: 1,
  //       date: "Day 1",
  //       title: "Delhi → Pathankot → Dalhousie",
  //       details:
  //         "Depart Delhi early morning and drive towards Pathankot. On arrival at Pathankot, meet our representative and proceed to Dalhousie. Check in to hotel, freshen up, and explore the colonial town at leisure. Overnight stay in Dalhousie.",
  //     },
  //     {
  //       day: 2,
  //       date: "Day 2",
  //       title: "Dalhousie Sightseeing",
  //       details:
  //         "After breakfast, full-day sightseeing of Dalhousie — visit Panchpula (natural water pools & Sardar Ajit Singh monument), Subhash Baoli (where Netaji spent contemplative time), and Bhulwani Mata Mandir at Bara Pathar. Evening stroll on Mall Road. Overnight stay in Dalhousie.",
  //     },
  //     {
  //       day: 3,
  //       date: "Day 3",
  //       title: "Dalhousie → Khajjiar → Delhi",
  //       details:
  //         "After breakfast, excursion to Khajjiar — the 'Mini Switzerland of India'. Explore the lush green meadow, Khajjiar Lake, and enjoy horse riding. Post lunch, drive back towards Delhi. Arrive Delhi late evening; tour concludes.",
  //     },
  //   ],

  //   tourDetails: [
  //     { label: "Duration", value: "3 Days / 2 Nights" },
  //     { label: "Destinations", value: "Dalhousie · Khajjiar" },
  //     { label: "Departure & Return", value: "Delhi" },
  //     { label: "Tour Code", value: "HP-DAL-KHJ-139" },
  //     { label: "Meals", value: "Breakfast & Dinner included" },
  //     { label: "Best Time", value: "March–June & September–November" },
  //     { label: "Group Size", value: "Customised — 2 to 15 passengers" },
  //   ],

  //   onViewItinerary: () => console.log("view itinerary clicked"),
  // },

  // ─────────────────────────────────────────────
  // ID 140 — Dharamshala Weekend Tour Package
  // ─────────────────────────────────────────────
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dharamshala-weekend-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Dalai Lama Temple & Tibetan Monastery in McLeodGanj" },
      { title: "Bhagsu Nag Temple & Bhagsu Waterfall" },
      { title: "Dal Lake & Naddi Village viewpoint" },
      { title: "St. John's Church — colonial heritage gem" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dharamshala-weekend-tour.webp",
      alt: "Dharamshala Weekend Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "A wonderful weekend escape to Dharamshala. McLeodGanj has such a peaceful vibe and the Bhagsu Waterfall trek was amazing. Namaste India Trip handled everything perfectly.",
        author: "Neha Kapoor",
        date: "Travelled September 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Loved the Tibetan culture, the monastery, and the stunning mountain views from Naddi Village. Great value for a 4-day package!",
        author: "Amit Joshi",
        date: "Travelled October 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dharamshala-weekend-tour.webp",
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
        details:
          "Depart Delhi by overnight bus/cab. Arrive Dharamshala by morning, check in to hotel and freshen up. Evening free to explore the local market. Overnight stay in Dharamshala.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "McLeodGanj Sightseeing",
        details:
          "After breakfast, explore McLeodGanj — visit the Dalai Lama Temple (Tsuglagkhang Complex), Namgyal Monastery, Tibetan Museum, and souvenir shops. Trek to Bhagsu Nag Temple and Bhagsu Waterfall. Evening stroll through McLeodGanj market. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Dharamshala Local Sightseeing",
        details:
          "After breakfast, visit Dal Lake (holy lake in the deodar forest), St. John's Church in the Wilderness (colonial heritage), Naddi Village viewpoint for panoramic Dhauladhar mountain views, and the War Memorial. Evening at leisure. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Dharamshala → Delhi — Departure",
        details:
          "After breakfast, check out from hotel. Drive back to Delhi. Arrive Delhi by evening/night. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla Mall Road & Christ Church" },
      { title: "Kufri snow activities & Jakhu Temple" },
      { title: "Hadimba Temple & Vashisht Hot Springs, Manali" },
      { title: "Rohtang Pass snow excursion" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
      alt: "Exotic Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "From Shimla's colonial charm to Rohtang's snow, this 5-day tour packed in everything. Namaste India Trip's planning was flawless.",
        author: "Rohit Agarwal",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Rohtang Pass was the highlight! Seeing snow for the first time was magical. Our driver was professional and the hotels were very comfortable.",
        author: "Sunita Sharma",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
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
        details:
          "Depart Delhi early morning and drive to Shimla. Arrive and check in to hotel. Evening stroll on Mall Road, visit Christ Church and the Ridge. Overnight stay in Shimla.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing → Manali",
        details:
          "After breakfast, visit Kufri (snow activities, Himalayan Zoo), Jakhu Temple, and Viceregal Lodge. Post lunch drive to Manali via Kullu — stop at Pandoh Dam and Hanogi Mata Temple. Arrive Manali, check in, overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Manali Local Sightseeing",
        details:
          "After breakfast, explore Manali — visit Hadimba Devi Temple (built 1553), Vashisht Temple & sulphur hot springs, Tibetan Monastery, Club House, and Van Vihar. Evening free to shop at Mall Road. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Rohtang Pass Excursion",
        details:
          "Full day excursion to Rohtang Pass — gateway to Lahaul & Spiti. En route stop at Nehru Kund, Kothi Gorge, Gulaba, Rahalla Falls, and Marhi. Enjoy snow activities at Rohtang. Return to Manali by evening. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Manali → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi. Arrive Delhi late evening. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla Mall Road, Christ Church & Scandal Point" },
      { title: "Kufri — Himalayan Zoo & snow activities" },
      { title: "Kullu river rafting on Beas River" },
      { title: "Rohtang Pass & Manali local sightseeing" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
      alt: "Shimla Manali Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Best trip of our life! Shimla's colonial beauty and Manali's adventure were the perfect combo. Everything was well organised by Namaste India Trip.",
        author: "Deepak Gupta",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Rohtang Pass experience was unforgettable. Our family had a wonderful time and we will definitely book again with Namaste India Trip.",
        author: "Kavita Singh",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
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
        details:
          "Depart Delhi early morning, drive to Shimla. Arrive, check in to hotel. Evening at Mall Road — stroll past Christ Church and the Ridge. Overnight stay in Shimla.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details:
          "After breakfast, full-day sightseeing — Kufri (Himalayan Zoo, horse riding, snow activities), Jakhu Temple, Viceregal Lodge, Scandal Point, Sankat Mochan Temple, and Christ Church. Evening free on Mall Road. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details:
          "After breakfast, check out and drive to Manali via Kullu. En route visit Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and enjoy river rafting on Beas River at Kullu (optional). Arrive Manali, check in. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "After breakfast, visit Hadimba Devi Temple, Club House, Vashisht Temple & sulphur hot springs, Tibetan Monastery, and Van Vihar. Evening free at Manali Mall Road for shopping. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Rohtang Pass Excursion",
        details:
          "Full day excursion to Rohtang Pass — stopping at Nehru Kund, Kothi Gorge, Gulaba, Rahalla Falls, Marhi, and Rani Nala. Enjoy snow scooter rides and skiing at Rohtang (up to snow line if closed). Return to Manali. Overnight stay.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Manali → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi. Arrive Delhi late evening/night. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/enchanting-himachal.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Queen of Hills & Naldehra Golf Course" },
      { title: "Solang Valley adventure sports" },
      { title: "Rohtang Pass — snow-capped peaks & glaciers" },
      { title: "Hadimba Temple & Vashisht Hot Springs, Manali" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/enchanting-himachal.webp",
      alt: "Enchanting Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Seven days of pure magic! Shimla and Manali exceeded all our expectations. The Solang Valley adventure was an absolute highlight.",
        author: "Vikas Malhotra",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Namaste India Trip took care of every detail. Comfortable hotels, amazing sightseeing, and a very professional driver. Would book again!",
        author: "Anjali Rawat",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/enchanting-himachal.webp",
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
        details:
          "Depart Delhi, drive to Shimla. Check in to hotel. Evening stroll on Mall Road and visit Christ Church. Overnight stay in Shimla.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details:
          "After breakfast, full-day sightseeing — Kufri, Naldehra Golf Course, Indira Tourist Bungalow, Jakhu Temple, Viceregal Lodge, Scandal Point, and Christ Church. Evening at Mall Road. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details:
          "After breakfast, check out and drive to Manali via Kullu — en route Pandoh Dam, Sundernagar Lake, and Hanogi Mata Temple. Arrive Manali, check in. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "After breakfast, explore Manali — Hadimba Temple, Vashisht Temple & hot springs, Tibetan Monastery, Club House, Van Vihar, and Mall Road shopping. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details:
          "After breakfast, full day at Solang Valley — enjoy paragliding, zorbing, ropeway, and horse riding amidst snow-capped peaks. Return to Manali by evening. Overnight stay.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details:
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Enjoy snow scooter rides and glacier views. Return to Manali. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi. Arrive late evening. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himanchal-with-vaishno-devi-darshan.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Golden Temple & Wagah Border, Amritsar" },
      { title: "Dalai Lama Temple & McLeodGanj, Dharamshala" },
      { title: "Sacred trek to Vaishno Devi Shrine, Katra" },
      { title: "Bhagsu Waterfall & Tibetan Monastery" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himanchal-with-vaishno-devi-darshan.webp",
      alt: "Himachal Vaishno Devi Darshan Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "A deeply spiritual journey. The Vaishno Devi darshan was a life-changing experience and Dharamshala's peaceful monasteries added another dimension to our trip.",
        author: "Sanjay Tiwari",
        date: "Travelled October 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Golden Temple at Amritsar was divine, and the Wagah Border ceremony was thrilling. Namaste India Trip organised everything seamlessly.",
        author: "Meena Chauhan",
        date: "Travelled September 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himanchal-with-vaishno-devi-darshan.webp",
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
        details:
          "Arrive Amritsar, check in to hotel. Evening visit the magnificent Golden Temple — attend Palki Sahib Ceremony. Overnight stay in Amritsar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Amritsar Sightseeing",
        details:
          "After breakfast, visit Jallianwala Bagh, Durgiana Temple, and Gobindgarh Fort. Evening at the Wagah Border for the Beating Retreat ceremony. Overnight stay in Amritsar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Amritsar → Dharamshala",
        details:
          "After breakfast, drive to Dharamshala (approx. 5 hrs). Check in to hotel, freshen up. Evening explore local market. Overnight stay in Dharamshala.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Dharamshala / McLeodGanj Sightseeing",
        details:
          "After breakfast, explore McLeodGanj — Dalai Lama Temple (Tsuglagkhang), Namgyal Monastery, Tibet Museum, Bhagsu Nag Temple, Bhagsu Waterfall, and Dal Lake. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Dharamshala → Katra",
        details:
          "After breakfast, drive to Katra (base camp for Vaishno Devi, approx. 5–6 hrs). Check in to hotel. Obtain yatra slip for Vaishno Devi darshan. Overnight stay in Katra.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Vaishno Devi Darshan",
        details:
          "Early morning, commence the holy trek to Vaishno Devi Shrine (approx. 14 km one way via Banganga, Charan Paduka, Adhkwari). Seek blessings at the Trikuta cave shrine. Return to Katra by evening. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Katra Local Sightseeing",
        details:
          "After breakfast and rest, visit Shiv Khori Temple and Bhairavnath Temple. Evening leisure time in Katra market. Overnight stay.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Katra → Jammu — Departure",
        details:
          "After breakfast, drive to Jammu (approx. 1.5 hrs). Enroute visit Raghunath Temple. Drop at Jammu Airport / Railway Station for onward journey. Tour concludes.",
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
  {
    id: 145,
    country: "India",
    place: "Himachal Pradesh",
    title: "Himachal Delhi Darshan Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Manali", "Rohtang Pass", "Shimla"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 35000,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-pradesh-with-delhi-darshan.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Delhi Darshan — India Gate, Red Fort & Qutub Minar" },
      { title: "Manali — Hadimba Temple & Solang Valley" },
      { title: "Rohtang Pass snow excursion" },
      { title: "Shimla — Queen of Hills & Mall Road" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-pradesh-with-delhi-darshan.webp",
      alt: "Himachal Delhi Darshan Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The Delhi Darshan combined with Himachal was a brilliant itinerary. Saw iconic Delhi monuments and then the majestic Himalayas — perfect for our family tour.",
        author: "Rajesh Bhatia",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Excellent arrangements throughout. Rohtang Pass was simply breathtaking. Namaste India Trip's team was always responsive and helpful.",
        author: "Pooja Nair",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-pradesh-with-delhi-darshan.webp",
        alt: "Himachal Delhi Darshan Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Himachal Pradesh", href: "/india/himachal-pradesh" },
      { label: "Himachal Delhi Darshan Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ROAD TRIP", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 9,
    countryCount: 1,
    cityCount: 3,
    region: "Delhi & Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi", nights: 2 },
      { city: "Manali", nights: 3 },
      { city: "Shimla", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrival in Delhi",
        details:
          "Arrive Delhi, check in to hotel. Welcome briefing. Evening at leisure. Overnight stay in Delhi.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Delhi Darshan",
        details:
          "After breakfast, full day Delhi sightseeing — India Gate, Humayun's Tomb, Qutub Minar, Red Fort, Jama Masjid, Lotus Temple, Akshardham, and Connaught Place. Overnight stay in Delhi.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Delhi → Manali",
        details:
          "After breakfast, drive to Manali via Kullu (approx. 12–14 hrs). En route stop at Pandoh Dam, Sundernagar Lake, and Hanogi Mata Temple. Arrive Manali, check in. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "After breakfast, visit Hadimba Devi Temple, Club House, Vashisht Temple & sulphur hot springs, Tibetan Monastery, and Van Vihar. Evening shopping at Mall Road. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details:
          "After breakfast, full day at Solang Valley — paragliding, zorbing, ropeway, and skiing amidst stunning mountain scenery. Return to Manali. Overnight stay.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details:
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Enjoy snow sports and panoramic glacier views. Return to Manali. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Shimla",
        details:
          "After breakfast, drive to Shimla via Kullu (approx. 7–8 hrs). Arrive Shimla, check in. Evening stroll on Mall Road. Overnight stay.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Shimla Sightseeing",
        details:
          "After breakfast, visit Kufri, Jakhu Temple, Viceregal Lodge, Scandal Point, and Christ Church. Afternoon free to explore the famous Shimla Mall Road market. Overnight stay.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Shimla → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi. Arrive Delhi by evening. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Manali · Rohtang Pass · Shimla",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-DEL-145" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scenic-himachal.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Kufri, Jakhu Temple & Viceregal Lodge" },
      { title: "Rohtang Pass & Solang Valley, Manali" },
      { title: "McLeodGanj — Dalai Lama Temple & Bhagsu Waterfall" },
      { title: "Dharamshala — Little Lhasa & Tibetan culture" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scenic-himachal.webp",
      alt: "Scenic Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Three iconic destinations — Shimla, Manali, and Dharamshala — all in one perfect trip. Namaste India Trip gave us memories we'll cherish forever.",
        author: "Gaurav Khanna",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The diversity of this tour was incredible — snow at Rohtang, spirituality at McLeodGanj, and colonial charm at Shimla. Perfectly organised.",
        author: "Ritu Sharma",
        date: "Travelled October 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scenic-himachal.webp",
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
        details:
          "Depart Delhi, drive to Shimla. Check in to hotel. Evening at Mall Road, Christ Church, and the Ridge. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details:
          "After breakfast, visit Kufri, Jakhu Temple, Naldehra Golf Course, Viceregal Lodge, Scandal Point, Sankat Mochan Temple, and Christ Church. Evening free at Mall Road. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details:
          "After breakfast, drive to Manali via Kullu — en route Pandoh Dam, Hanogi Mata Temple, river rafting on Beas (optional). Arrive Manali, check in. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "After breakfast, visit Hadimba Temple, Vashisht Hot Springs, Club House, Tibetan Monastery, Van Vihar, and Mall Road. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details:
          "After breakfast, full day at Solang Valley — paragliding, zorbing, ropeway, and horse riding. Breathtaking views of snow-capped peaks. Return to Manali. Overnight stay.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details:
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Snow activities and glacier views. Return to Manali. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Dharamshala",
        details:
          "After breakfast, drive to Dharamshala via Palampur (approx. 7–8 hrs). Check in to hotel. Evening at leisure. Overnight stay.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Dharamshala / McLeodGanj Sightseeing",
        details:
          "After breakfast, explore McLeodGanj — Dalai Lama Temple, Namgyal Monastery, Tibet Museum, Bhagsu Nag Temple, Bhagsu Waterfall, Dal Lake, and Naddi Village viewpoint. Overnight stay.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Dharamshala → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi. Arrive Delhi by evening/night. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Mall Road, Kufri & Viceregal Lodge" },
      { title: "Manali — Rohtang Pass & Solang Valley" },
      { title: "Dalhousie — Panchpula & Kalatop Wildlife Sanctuary" },
      { title: "Khajjiar — Mini Switzerland of India" },
    ],

    tourManagerCompany: "Namaste India Trip",

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
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Khajjiar was the surprise of the trip — such a magical meadow. Combined with Rohtang's snow, it was an unforgettable 10 days with Namaste India Trip.",
        author: "Vandana Sood",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
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
        details:
          "Depart Delhi, drive to Shimla. Check in, stroll Mall Road and Christ Church. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details:
          "Kufri (Himalayan Zoo, snow activities), Jakhu Temple, Viceregal Lodge, Scandal Point, and Mall Road. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details:
          "Drive to Manali via Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and Kullu (river rafting optional). Arrive Manali, check in. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "Hadimba Temple, Vashisht Hot Springs, Club House, Tibetan Monastery, Van Vihar, and Mall Road shopping. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley Adventure",
        details:
          "Full day at Solang Valley — paragliding, zorbing, ropeway, horse riding amidst snow-capped peaks. Overnight stay in Manali.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details:
          "Kothi Gorge, Gulaba, Rahalla Falls, Marhi, Rani Nala, and Rohtang Pass — snow activities and glacier views. Return to Manali. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali → Dalhousie",
        details:
          "After breakfast, drive to Dalhousie via Pathankot (approx. 8–9 hrs). Check in, explore colonial town at leisure. Overnight stay.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Dalhousie Sightseeing",
        details:
          "Panchpula waterfalls, Subhash Baoli, Bhulwani Mata Mandir, Kalatop Wildlife Sanctuary nature walk, and Satdhara Falls. Overnight stay.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Khajjiar Excursion",
        details:
          "After breakfast, excursion to Khajjiar — lush green meadow, Khajjiar Lake, horse riding and zorbing. Return to Dalhousie. Overnight stay.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Dalhousie → Delhi — Departure",
        details:
          "After breakfast, drive back to Delhi. Arrive Delhi late evening. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-lovers-paradise.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Romantic evenings on Shimla's Mall Road & Scandal Point" },
      { title: "Couples' snow activities at Solang Valley, Manali" },
      { title: "Scenic Rohtang Pass — snow-capped peaks together" },
      { title: "Peaceful walks at McLeodGanj & Bhagsu Waterfall" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-lovers-paradise.webp",
      alt: "Himachal Honeymoon Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Our honeymoon was absolutely dreamy! Shimla's sunsets, Manali's snow, and Dharamshala's peace — Namaste India Trip made every moment magical for us.",
        author: "Rahul & Priya Verma",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The honeymoon suite upgrades and special room decorations were a lovely surprise. Namaste India Trip clearly goes the extra mile for couples.",
        author: "Karan & Simran Sethi",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-lovers-paradise.webp",
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
        details:
          "Depart Delhi, drive to Shimla. Check in, romantic evening walk on Mall Road and Christ Church. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing",
        details:
          "Kufri (snow activities & horse riding), Jakhu Temple, Viceregal Lodge, Scandal Point at sunset. Evening at Mall Road. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla → Manali via Kullu",
        details:
          "Drive through scenic Kullu valley — Pandoh Dam, Hanogi Mata Temple. Optional river rafting at Beas, Kullu. Arrive Manali, check in. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "Hadimba Temple (romantic forest setting), Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and leisurely evening at Mall Road. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Solang Valley — Couple's Adventure",
        details:
          "Full day at Solang Valley — enjoy paragliding, zorbing, ropeway rides together. Snow-capped peak backdrop perfect for couple photos. Overnight stay.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rohtang Pass Excursion",
        details:
          "Scenic snow excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls. Snow walk and panoramic Himalayan views. Return to Manali. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Manali Leisure Day",
        details:
          "Leisurely day at leisure — optional spa, café hopping in Old Manali, or nature walk along Beas River. Candlelit dinner at a riverside restaurant. Overnight stay.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Manali → Dharamshala",
        details:
          "Drive to Dharamshala via Palampur (approx. 7–8 hrs). Check in to hotel. Evening stroll in McLeodGanj. Overnight stay.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Dharamshala / McLeodGanj Sightseeing",
        details:
          "Dalai Lama Temple, Bhagsu Nag Temple & Bhagsu Waterfall trek, Dal Lake, and Naddi Village viewpoint. Romantic sunset view of Dhauladhar range. Overnight stay.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Dharamshala → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi. Arrive Delhi by evening/night. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/fascinating-himachal.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla — Kufri, Naldehra & Mall Road" },
      { title: "Manali — Solang Valley adventure & Rohtang Pass" },
      { title: "Dalhousie — Panchpula & Kalatop Sanctuary" },
      { title: "Khajjiar — Mini Switzerland meadows" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/fascinating-himachal.webp",
      alt: "Fascinating Himachal Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "11 days that felt like a lifetime of memories. From Shimla's colonial lanes to Dalhousie's misty evenings — every destination was stunning. Brilliant package!",
        author: "Nitin Goel",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The most comprehensive Himachal tour we could find. Namaste India Trip's team was always a call away. The hotels were great and drivers were punctual.",
        author: "Swati Bhatt",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/fascinating-himachal.webp",
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
        details:
          "Depart Delhi early morning, drive to Shimla. Check in to hotel. Evening stroll on Mall Road. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Local Sightseeing",
        details:
          "Kufri (Himalayan Zoo, snow activities, horse riding), Jakhu Temple, and Viceregal Lodge. Evening at Scandal Point. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Shimla Extended Sightseeing",
        details:
          "Naldehra Golf Course, Indira Tourist Bungalow, Chail (optional drive), Christ Church, and afternoon free at Mall Road market. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Shimla → Manali via Kullu",
        details:
          "After breakfast, drive to Manali via Kullu — Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and Kullu river rafting (optional). Check in Manali. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Manali Local Sightseeing",
        details:
          "Hadimba Devi Temple, Vashisht Temple & hot springs, Tibetan Monastery, Club House, and Van Vihar. Evening at Mall Road. Overnight stay.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Solang Valley Adventure",
        details:
          "Full day at Solang Valley — paragliding, zorbing, ropeway, and horse riding. Return to Manali by evening. Overnight stay.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Rohtang Pass Excursion",
        details:
          "Full day excursion to Rohtang Pass — Kothi Gorge, Gulaba, Rahalla Falls, Marhi. Snow sports and glacier views. Return to Manali. Overnight stay.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Manali Leisure / Departure to Dalhousie",
        details:
          "After leisure morning in Manali (optional Old Manali walk), drive towards Dalhousie via Pathankot. Arrive Dalhousie by evening, check in. Overnight stay.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Dalhousie Sightseeing",
        details:
          "Panchpula waterfalls & Sardar Ajit Singh monument, Subhash Baoli, Bhulwani Mata Mandir, Kalatop Wildlife Sanctuary, and Satdhara Falls. Overnight stay.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Khajjiar Excursion",
        details:
          "After breakfast, excursion to Khajjiar — the 'Mini Switzerland of India'. Lush meadows, Khajjiar Lake, and horse riding. Return to Dalhousie. Overnight stay.",
      },
      {
        day: 11,
        date: "Day 11",
        title: "Dalhousie → Delhi — Departure",
        details:
          "After breakfast, check out and drive back to Delhi via Pathankot. Arrive Delhi late evening. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-weekend-tour-package.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "North Goa — Mapusa Market, Vagator & Anjuna Beach" },
      { title: "Fort Aguada — iconic 17th-century Portuguese fort" },
      { title: "South Goa — Dona Paula, Miramar & Colva Beach" },
      { title: "Basilica of Bom Jesus — UNESCO World Heritage Site" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-weekend-tour-package.webp",
      alt: "Goa Weekend Tour Package — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "The perfect weekend escape! Namaste India Trip covered all the best beaches and sights in Goa. The hotel was beachside and the food was amazing.",
        author: "Neeraj Kapoor",
        date: "Travelled December 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We had a blast exploring North and South Goa. Very well-organised package with comfortable transfers and a great guide. Highly recommend!",
        author: "Sneha Joshi",
        date: "Travelled November 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-weekend-tour-package.webp",
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
        details:
          "Arrive at Goa airport/railway station. Our representative will transfer you to your hotel. Check in, freshen up, and enjoy breakfast. Evening drive to the nearest beach to enjoy the sunset and Goa's famous nightlife scene. Dinner at a beach shack. Overnight stay in Goa.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Sightseeing",
        details:
          "After breakfast, full-day North Goa tour — visit Mapusa city (vibrant market, St. Jerome Church, Hanuman Temple), Vagator Beach, Anjuna Beach, Calangute Beach, and Fort Aguada (17th-century Portuguese fort overlooking the Arabian Sea). Evening at leisure at the beach. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa Sightseeing",
        details:
          "After breakfast, explore South Goa — tranquil beaches of Dona Paula, Miramar, and Colva. Visit the UNESCO World Heritage Site Basilica of Bom Jesus (housing the body of St. Francis Xavier), Se Cathedral, and Shri Mangeshi Temple. Mandovi River Cruise in the evening. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details:
          "After breakfast, enjoy leisure time at the beach or explore the local market for souvenirs (cashews, feni, spices). Transfer to Goa airport/railway station for your onward journey. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-honeymoon-special-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Romantic beachside stay in North Goa" },
      { title: "Anjuna, Vagator & Calangute beaches — couple's retreat" },
      { title: "South Goa — peaceful Dona Paula & Colva Beach" },
      { title: "Candlelit dinner & Mandovi River evening cruise" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-honeymoon-special-tour.webp",
      alt: "Goa Honeymoon Special Tour — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "Our honeymoon in Goa was absolutely magical! The beachside hotel, the candlelit dinner, and the Mandovi cruise — Namaste India Trip made everything special for us.",
        author: "Rahul & Divya Sharma",
        date: "Travelled January 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The room was beautifully decorated for our honeymoon arrival. Goa's beaches are just stunning and the South Goa churches add a lovely heritage touch. Perfect trip!",
        author: "Aryan & Simran Malhotra",
        date: "Travelled December 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-honeymoon-special-tour.webp",
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
        details:
          "Arrive at Goa airport/railway station. Transfer to your beachside hotel. Check in to your specially decorated honeymoon room. Freshen up and head to the nearest beach for a romantic sunset walk. Candlelit dinner at a beach shack. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Sightseeing",
        details:
          "After breakfast, explore North Goa — Mapusa market (St. Jerome Church, Bodgeshwar Mandir, Maruti Mandir), then relax at Anjuna, Vagator, and Calangute beaches. Visit Fort Aguada for panoramic sea views. Evening at leisure on the beach with cocktails at a sunset shack. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa & Mandovi River Cruise",
        details:
          "After breakfast, tour South Goa — Miramar Beach, Dona Paula viewpoint, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Evening scenic Mandovi River Cruise with live Goan music, dance, and dinner. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details:
          "After breakfast, leisure time for a last beach walk or shopping for souvenirs (spices, cashews, feni). Transfer to Goa airport/railway station. Tour concludes.",
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
  {
    id: 152,
    country: "India",
    place: "Goa",
    title: "Goa Adventure Tour Package",
    type: "Honeymoon packages",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 9900,
    rating: 4.7,
    reviews: 96,
    badge: "popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-adventure-tour-package.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Water sports — Jet Ski, Parasailing & Banana Boat Ride" },
      { title: "Scuba Diving & Snorkelling at Grand Island" },
      { title: "Bungee Jumping & ATV rides in North Goa" },
      { title: "Dudhsagar Waterfall jeep safari excursion" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-adventure-tour-package.webp",
      alt: "Goa Adventure Tour Package — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "The water sports day at Baga was incredible — parasailing, banana boat, and jet ski all in one morning! Namaste India Trip planned the adventure perfectly.",
        author: "Karan Mehta",
        date: "Travelled October 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Dudhsagar waterfall jeep safari was a highlight — stunning! The scuba diving experience at Grand Island was also world-class. Great adventure package!",
        author: "Prateek Singh",
        date: "Travelled November 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-adventure-tour-package.webp",
        alt: "Goa Adventure Tour",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Goa", href: "/india/goa" },
      { label: "Goa Adventure Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "ADVENTURE", variant: "outlined" as const, color: "orange" },
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
        title: "Arrival in Goa",
        details:
          "Arrive at Goa airport/railway station, transfer to hotel. Check in, freshen up. Evening explore the beach and enjoy Goa's famous shack culture — seafood dinner and nightlife. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Water Sports Day",
        details:
          "After breakfast, head to Baga/Calangute Beach for a full water sports session — Jet Ski, Parasailing, Banana Boat Ride, Water Skiing, and Speed Boat. Afternoon: Bungee Jumping and ATV rides (at own cost). Visit Fort Aguada. Evening flea market at Anjuna or Arpora. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Grand Island Scuba Diving & Dudhsagar Excursion",
        details:
          "Morning: Grand Island boat trip for Scuba Diving and Snorkelling — explore vibrant coral reefs and marine life. Afternoon: Optional Dudhsagar Waterfall jeep safari through the jungle (seasonal, at own cost). Evening at leisure. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details:
          "After breakfast, last-minute shopping at the local market (cashews, handicrafts). Transfer to Goa airport/railway station. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "North Goa · South Goa · Grand Island" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "GOA-ADV-152" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 15 passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/most-wanted-goa-package.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Luxury beachside resort stay in North Goa" },
      { title: "North Goa — Fort Aguada, Calangute & Baga Beach" },
      { title: "South Goa — Basilica of Bom Jesus & Shri Mangeshi Temple" },
      { title: "Mandovi River Cruise with live Goan folk music" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/most-wanted-goa-package.webp",
      alt: "Most Wanted Goa Package — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "Premium experience at a great price. The resort was stunning, the food was delicious, and the Mandovi River cruise was the cherry on top. Truly the 'most wanted' Goa experience!",
        author: "Vivek Reddy",
        date: "Travelled January 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Worth every rupee! Namaste India Trip made sure we had the best of Goa — beaches, heritage, nightlife, and great food. Absolutely loved it.",
        author: "Ritika Bose",
        date: "Travelled December 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/most-wanted-goa-package.webp",
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
        details:
          "Arrive at Goa airport/railway station. Transfer to your premium beachside resort. Check in, welcome drink, and leisure time to explore the resort and beach. Enjoy a lavish dinner at the resort restaurant. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Premium Sightseeing",
        details:
          "After breakfast, explore the best of North Goa — Mapusa market, St. Jerome Church, Vagator Beach, Anjuna Beach, Calangute Beach (water sports optional), and iconic Fort Aguada. Exclusive evening cocktails at a beachfront bar with live music. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa & Panaji Heritage + Cruise",
        details:
          "After breakfast, tour South Goa — Miramar Beach, Dona Paula, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Explore Panaji's colourful Fontainhas Latin Quarter. Evening Mandovi River Cruise with Goan folk music, dance, and dinner. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Delhi — Departure",
        details:
          "After a leisurely breakfast, enjoy a final walk on the beach. Shop for Goan specialities — cashews, spices, feni, and handicrafts. Transfer to Goa airport/railway station. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-tour-package-with-flight.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Plane, label: "Flight", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Return flights Delhi ↔ Goa included" },
      { title: "North Goa — Fort Aguada, Calangute & Baga Beach" },
      { title: "South Goa — Basilica of Bom Jesus & Dona Paula" },
      { title: "Mandovi River Cruise & Goan spice plantation visit" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-tour-package-with-flight.webp",
      alt: "Goa Tour Package with Flight — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "The all-inclusive flight package was such great value. No stress about booking flights separately. Namaste India Trip handled everything from Delhi to Goa and back perfectly.",
        author: "Suresh Pillai",
        date: "Travelled February 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Seamless experience — flight, hotel, transfers, and sightseeing all in one package. Goa's beaches were stunning and the guide was very knowledgeable.",
        author: "Ananya Desai",
        date: "Travelled January 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-tour-package-with-flight.webp",
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
        details:
          "Depart Delhi by morning flight to Goa (Dabolim/Mopa Airport). On arrival, our representative meets you and transfers you to your hotel. Check in, freshen up, and enjoy breakfast. Evening at the nearest beach for sunset and Goan seafood dinner. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Sightseeing",
        details:
          "After breakfast, full-day North Goa tour — Mapusa market, St. Jerome Church, Vagator Beach, Anjuna Beach, Calangute & Baga Beach (water sports available at own cost), and Fort Aguada. Evening at leisure — flea market or beach shack. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "South Goa, Panaji & Mandovi Cruise",
        details:
          "After breakfast, South Goa tour — Miramar Beach, Dona Paula, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Afternoon: Goan spice plantation visit (optional). Evening Mandovi River Cruise with live folk dance and dinner. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Goa → Fly back to Delhi — Departure",
        details:
          "After breakfast, leisure time for shopping (cashews, spices, feni). Transfer to Goa airport for your return flight to Delhi. Arrive Delhi by evening. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/amazing-goa-fiesta-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "North Goa — beaches, Fort Aguada & Anjuna flea market" },
      { title: "Water sports — Jet Ski, Parasailing & Banana Boat" },
      { title: "South Goa — UNESCO churches, Mangeshi Temple & Colva Beach" },
      { title: "Mandovi River Cruise & Goan spice plantation visit" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/amazing-goa-fiesta-tour.webp",
      alt: "Amazing Goa Fiesta Tour — Goa, India",
    },

    testimonials: [
      {
        id: 1,
        text: "5 days packed with beaches, adventure, heritage, and nightlife — the Goa Fiesta package truly has it all! Namaste India Trip organised everything flawlessly.",
        author: "Rohan Tiwari",
        date: "Travelled December 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The spice plantation visit was a wonderful surprise — so much to learn and taste! Combined with the beach days and the Mandovi cruise, this was a perfect 5-day Goa holiday.",
        author: "Priya Iyer",
        date: "Travelled November 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/amazing-goa-fiesta-tour.webp",
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
        details:
          "Arrive at Goa airport/railway station. Transfer to hotel, check in and freshen up. Afternoon leisure at the beach. Evening explore Panaji — Fontainhas Latin Quarter and local seafood restaurants. Overnight stay.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "North Goa Beaches & Sightseeing",
        details:
          "After breakfast, explore North Goa — Mapusa market, St. Jerome Church, Vagator, Anjuna, and Calangute beaches. Visit Fort Aguada for panoramic sea views. Evening at Anjuna or Arpora flea market for shopping and street food. Overnight stay.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "North Goa Water Sports Day",
        details:
          "After breakfast, full water sports session at Baga/Calangute — Jet Ski, Parasailing, Banana Boat Ride, Speed Boat, and Water Skiing. Afternoon: optional Bungee Jumping or ATV rides. Evening at leisure — beach shack, cocktails, and live music. Overnight stay.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "South Goa & Mandovi River Cruise",
        details:
          "After breakfast, South Goa tour — Miramar Beach, Dona Paula, Colva Beach, Basilica of Bom Jesus (UNESCO Heritage), Se Cathedral, and Shri Mangeshi Temple. Afternoon: Goan spice plantation visit. Evening Mandovi River Cruise with live Goan music and dinner. Overnight stay.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Goa → Delhi — Departure",
        details:
          "After a relaxed breakfast, last stroll on the beach and shopping for Goan specialities — cashews, kokum, feni, spices, and handicrafts. Transfer to Goa airport/railway station. Tour concludes.",
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
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Shimla Mall Road & Jakhu Temple" },
      { title: "Rohtang Pass Snow Adventure (Subject to Permit)" },
      { title: "Solang Valley Skiing & Paragliding" },
      { title: "Kullu River Rafting & Valley Views" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
      alt: "Exotic Himachal Tour Package — Shimla Manali",
    },

    testimonials: [
      {
        id: 1,
        text: "The Rohtang Pass experience was breathtaking! Namaste India Trip handled all permits and arrangements flawlessly. Highly recommended for first-time Himachal visitors.",
        author: "Sunita Joshi",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "A wonderful 5-day trip covering the best of Himachal. The Solang Valley paragliding was a highlight. Very professional team and comfortable hotels.",
        author: "Rajan Kapoor",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
        alt: "Himachal Pradesh Scenic View",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/rohtang-pass-manali.jpg",
        alt: "Rohtang Pass",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/solang-valley-manali.jpg",
        alt: "Solang Valley",
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
    cityCount: 4,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Shimla", nights: 1 },
      { city: "Kullu", nights: 0 },
      { city: "Manali", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Shimla",
        details:
          "Depart Delhi by coach (approx. 9 hrs). Arrive Shimla; check-in to hotel. Evening stroll on the iconic Mall Road. Overnight in Shimla.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Shimla Sightseeing → Drive to Manali",
        details:
          "Morning sightseeing: Jakhu Temple (dedicated to Lord Hanuman), Christ Church, and Kalbadevi Mandir. Post-lunch, begin scenic drive to Manali via Kullu valley. Overnight in Manali.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Rohtang Pass & Solang Valley",
        details:
          "Early morning excursion to Rohtang Pass (13,050 ft) — subject to permit availability and weather. Enjoy snow activities, photography, and stunning Himalayan vistas. Return via Solang Valley for skiing, paragliding, and zorbing. Overnight in Manali.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Manali Local Sightseeing",
        details:
          "Visit Hadimba Devi Temple (a 16th-century wood temple), Vashisht Hot Water Springs, Old Manali village, and a Tibetan Monastery. Evening leisure. Depart for Delhi by overnight coach.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Arrive Delhi — Tour Concludes",
        details:
          "Arrive Delhi in the morning. Transfer to your home/hotel. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Shimla · Kullu · Manali · Rohtang Pass",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-EXOT-DEL-02" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────
  // ID 142 — Shimla Manali Tour Package
  // ─────────────────────────────────────────────
  {
    id: 142,
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
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Hadimba Devi Temple & Vashisht Hot Springs, Manali" },
      { title: "Rohtang Pass & Solang Valley Snow Activities" },
      { title: "Jakhu Hill & Tara Devi Temple, Shimla" },
      { title: "Kufri Horse Riding in Apple Orchards" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
      alt: "Shimla Manali Tour Package — Himachal Pradesh",
    },

    testimonials: [
      {
        id: 1,
        text: "Best value Shimla-Manali package we could find! The Kufri horse riding and apple orchard visit was a unique experience. Everything was well organized.",
        author: "Deepak Sharma",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Namaste India Trip made our Himachal dream come true. Hotels were comfortable, food was great, and the driver was very experienced on mountain roads.",
        author: "Kavita Singh",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
        alt: "Shimla Manali Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/shimla-mall-road.jpg",
        alt: "Shimla Mall Road",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/hadimba-temple-manali.jpg",
        alt: "Hadimba Devi Temple",
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
    cityCount: 3,
    region: "Himachal Pradesh, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Manali", nights: 2 },
      { city: "Shimla", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Manali Arrival",
        details:
          "Depart Delhi by overnight coach. Arrive Manali; check-in. Visit Hadimba Devi Temple, Vashisht Hot Water Bath, and Tibetan Monastery. Overnight in Manali.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Rohtang Pass & Solang Valley Excursion",
        details:
          "Full-day excursion to Rohtang Pass (permit required) for snow activities and panoramic Himalayan views. En-route enjoy Solang Valley — skiing, paragliding, zorbing. Return to Manali. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Manali → Shimla Drive",
        details:
          "After breakfast, drive to Shimla (approx. 7–8 hrs) via the scenic Kullu Valley. En-route stop at Pandoh Dam and Sundernagar. Check-in to hotel. Evening walk on Mall Road.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Shimla Sightseeing",
        details:
          "Visit Jakhu Hill (Hanuman Temple), Tara Devi Temple, Institute of Advanced Study (Viceregal Lodge), Christ Church, and the famous Mall Road. Overnight in Shimla.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Kufri Excursion & Departure",
        details:
          "Morning excursion to Kufri — horse riding through scenic apple orchards and snow-capped hills. Return to Shimla. Board overnight coach to Delhi.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Arrive Delhi — Tour Concludes",
        details:
          "Arrive Delhi in the morning. Tour concludes with wonderful memories of the Queen of Hills and the Valley of Gods.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Destinations", value: "Delhi · Manali · Shimla · Kufri" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "HP-SHIM-MAN-03" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // {
  //   id: 3,
  //   country: "India",
  //   place: "Srinagar",
  //   title: "Amarnath Yatra Packages",
  //   type: "Pilgrimage Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Srinagar → Amarnath Cave",
  //   destinations: ["Srinagar", "Pahalgam", "Panjtarni", "Amarnath Cave"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25900,
  //   rating: 4.8,
  //   reviews: 197,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 4,
  //   country: "India",
  //   place: "Uttarakhand",
  //   title: "Adi Kailash & Om Parvat Yatra",
  //   type: "Pilgrimage Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Haldwani → Adi Kailash",
  //   destinations: ["Haldwani", "Dharchula", "Gunji", "Kalapani", "Adi Kailash"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 48500,
  //   rating: 4.8,
  //   reviews: 83,
  //   badge: "Premium",
  //   badgeColor: "bg-sky-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 5,
  //   country: "India",
  //   place: "Delhi",
  //   title: "Golden Triangle Tour Package",
  //   type: "Cultural Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Delhi → Amritsar",
  //   destinations: ["Delhi", "Agra", "Mathura", "Jaipur", "Amritsar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Guided Tours"],
  //   price: 12500,
  //   rating: 4.7,
  //   reviews: 534,
  //   badge: "Bestseller",
  //   badgeColor: "bg-amber-500",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 6,
  //   country: "India",
  //   place: "Bhubaneswar",
  //   title: "Bhubaneswar Puri Konark Tour",
  //   type: "Temple Tour",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Bhubaneswar → Puri",
  //   destinations: ["Bhubaneswar", "Konark", "Puri"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12900,
  //   rating: 4.6,
  //   reviews: 142,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 7,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Kamakhya Devi Temple Tour",
  //   type: "Pilgrimage Tour",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kamakhya Temple"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 13500,
  //   rating: 4.7,
  //   reviews: 118,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 8,
  //   country: "India",
  //   place: "Varanasi",
  //   title: "Varanasi Ayodhya Bodhgaya Chitrakoot Tour",
  //   type: "Pilgrimage Tour",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Varanasi → Chitrakoot",
  //   destinations: ["Varanasi", "Bodhgaya", "Ayodhya", "Chitrakoot"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 32500,
  //   rating: 4.7,
  //   reviews: 176,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 9,
  //   country: "India",
  //   place: "Ahmedabad",
  //   title: "Pancha Dwaraka Tour from Ahmedabad",
  //   type: "Pilgrimage Tour",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Ahmedabad → Somnath",
  //   destinations: ["Ahmedabad", "Dwarka", "Porbandar", "Somnath"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 42900,
  //   rating: 4.6,
  //   reviews: 93,
  //   badge: "Heritage",
  //   badgeColor: "bg-orange-500",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 10,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Tamil Nadu Temple Tour from Chennai",
  //   type: "Temple Tour",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Chennai → Trichy",
  //   destinations: [
  //     "Chennai",
  //     "Pondicherry",
  //     "Chidambaram",
  //     "Rameswaram",
  //     "Kanyakumari",
  //     "Madurai",
  //     "Trichy",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 38900,
  //   rating: 4.7,
  //   reviews: 214,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 11,
  //   country: "India",
  //   place: "Port Blair",
  //   title: "Andaman Island Retreat",
  //   type: "Island Tour",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Port Blair → Havelock",
  //   destinations: ["Port Blair", "Havelock Island", "Elephant Beach"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 39000,
  //   rating: 4.8,
  //   reviews: 267,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Ferry",
  //   img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 12,
  //   country: "India",
  //   place: "Leh",
  //   title: "Ladakh Adventure Tour",
  //   type: "Adventure Tour",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Srinagar → Leh",
  //   destinations: ["Srinagar", "Gulmarg", "Sonmarg", "Leh", "Pangong Tso"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 70000,
  //   rating: 4.9,
  //   reviews: 189,
  //   badge: "Adventure",
  //   badgeColor: "bg-emerald-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 13,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "Sikkim & Darjeeling Holiday",
  //   type: "Hill Station Tour",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Kalimpong → Darjeeling",
  //   destinations: ["Kalimpong", "Gangtok", "Darjeeling"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 35000,
  //   rating: 4.7,
  //   reviews: 154,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 14,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Royal Rajasthan Tour",
  //   type: "Heritage Tour",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Jaipur → Pushkar",
  //   destinations: [
  //     "Jaipur",
  //     "Bikaner",
  //     "Jaisalmer",
  //     "Jodhpur",
  //     "Udaipur",
  //     "Mount Abu",
  //     "Pushkar",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 78000,
  //   rating: 4.8,
  //   reviews: 302,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 15,
  //   country: "India",
  //   place: "Shirdi",
  //   title: "Shirdi – Bhimashankar Pilgrimage Tour",
  //   type: "Pilgrimage Tour",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Shirdi → Bhimashankar",
  //   destinations: ["Shirdi", "Bhimashankar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 26000,
  //   rating: 4.6,
  //   reviews: 107,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 16,
  //   country: "India",
  //   place: "Pan India",
  //   title: "Jyotirlinga Darshan Yatra",
  //   type: "Pilgrimage Tour",
  //   duration: "20 Days / 19 Nights",
  //   durationTag: "20 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Somnath",
  //     "Mallikarjuna",
  //     "Mahakaleshwar",
  //     "Omkareshwar",
  //     "Kedarnath",
  //     "Bhimashankar",
  //     "Kashi",
  //     "Trimbakeshwar",
  //     "Vaidyanath",
  //     "Nageshwar",
  //     "Rameshwaram",
  //     "Grishneshwar",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 110000,
  //   rating: 4.9,
  //   reviews: 241,
  //   badge: "Bestseller",
  //   badgeColor: "bg-amber-500",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 17,
  //   country: "India",
  //   place: "Khajuraho",
  //   title: "Khajuraho – Orchha Temple Tour",
  //   type: "Heritage Tour",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Khajuraho → Jhansi",
  //   destinations: ["Khajuraho", "Orchha", "Jhansi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 21000,
  //   rating: 4.6,
  //   reviews: 88,
  //   badge: "Heritage",
  //   badgeColor: "bg-orange-500",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 18,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Rameshwaram Madurai Kanyakumari Tour",
  //   type: "Temple Tour",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Chennai → Trivandrum",
  //   destinations: [
  //     "Chennai",
  //     "Mahabalipuram",
  //     "Tanjore",
  //     "Trichy",
  //     "Madurai",
  //     "Rameshwaram",
  //     "Kanyakumari",
  //     "Trivandrum",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 42000,
  //   rating: 4.7,
  //   reviews: 196,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=640&q=80",
  //   popular: true,
  // },

  // // ─── INTERNATIONAL ────────────────────────────────────────
  // {
  //   id: 19,
  //   country: "Vietnam",
  //   place: "Hanoi",
  //   title: "Vietnam Tour Packages",
  //   type: "Cultural Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Hanoi → Ho Chi Minh City",
  //   destinations: [
  //     "Hanoi",
  //     "Ninh Binh",
  //     "Halong Bay",
  //     "Da Nang",
  //     "Hoi An",
  //     "Ho Chi Minh City",
  //     "Mekong Delta",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18500,
  //   rating: 4.7,
  //   reviews: 143,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 20,
  //   country: "Sri Lanka",
  //   place: "Colombo",
  //   title: "Sri Lanka Ramayana Tour",
  //   type: "Cultural Tour",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Anuradhapura → Colombo",
  //   destinations: [
  //     "Anuradhapura",
  //     "Trincomalee",
  //     "Kandy",
  //     "Nuwara Eliya",
  //     "Kataragama",
  //     "Colombo",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 34900,
  //   rating: 4.8,
  //   reviews: 178,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 21,
  //   country: "Indonesia",
  //   place: "Bali",
  //   title: "Bali Tour Packages",
  //   type: "Beach Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Ubud → Seminyak",
  //   destinations: [
  //     "Ubud",
  //     "Kuta",
  //     "Denpasar",
  //     "Seminyak",
  //     "Tegalalang Rice Terrace",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16500,
  //   rating: 4.7,
  //   reviews: 389,
  //   badge: "Bestseller",
  //   badgeColor: "bg-amber-500",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 22,
  //   country: "UAE",
  //   place: "Dubai",
  //   title: "Dubai Tour Packages",
  //   type: "Luxury Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Dubai → Abu Dhabi",
  //   destinations: ["Dubai", "Desert Safari", "Dhow Cruise", "Abu Dhabi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 26500,
  //   rating: 4.8,
  //   reviews: 456,
  //   badge: "Bestseller",
  //   badgeColor: "bg-amber-500",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 23,
  //   country: "Egypt",
  //   place: "Cairo",
  //   title: "Egypt Tour Packages",
  //   type: "Heritage Tour",
  //   duration: "Multi-Day",
  //   durationTag: "Multi-Day",
  //   startEnd: "Cairo → Sinai Peninsula",
  //   destinations: ["Cairo", "Nile River Valley", "Red Sea", "Sinai Peninsula"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 45500,
  //   rating: 4.8,
  //   reviews: 162,
  //   badge: "Premium",
  //   badgeColor: "bg-sky-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 24,
  //   country: "Nepal",
  //   place: "Kathmandu",
  //   title: "Muktinath Yatra (Nepal)",
  //   type: "Pilgrimage Tour",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Kathmandu → Muktinath",
  //   destinations: ["Kathmandu", "Pokhara", "Jomsom", "Muktinath"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 51000,
  //   rating: 4.8,
  //   reviews: 134,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 25,
  //   country: "Nepal/Tibet",
  //   place: "Tibet",
  //   title: "Kailash Mansarovar Yatra",
  //   type: "Pilgrimage Tour",
  //   duration: "12 Days / 11 Nights",
  //   durationTag: "12 Days",
  //   startEnd: "Delhi → Mansarovar",
  //   destinations: ["Delhi", "Kathmandu", "Nyalam", "Kailash", "Mansarovar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 220000,
  //   rating: 4.9,
  //   reviews: 97,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 26,
  //   country: "Maldives",
  //   place: "Male",
  //   title: "Maldives Honeymoon & Leisure",
  //   type: "Honeymoon Tour",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Male → Resort Island",
  //   destinations: ["Male", "Resort Island"],
  //   amenities: ["Resort", "Meals", "Transfers", "Sightseeing"],
  //   price: 87000,
  //   rating: 4.9,
  //   reviews: 278,
  //   badge: "Honeymoon",
  //   badgeColor: "bg-pink-500",
  //   mode: "Speedboat",
  //   img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 27,
  //   country: "Singapore",
  //   place: "Singapore",
  //   title: "Singapore Family Tour",
  //   type: "Family Tour",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Singapore → Sentosa Island",
  //   destinations: ["Singapore City", "Sentosa Island"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 60000,
  //   rating: 4.8,
  //   reviews: 213,
  //   badge: "Family",
  //   badgeColor: "bg-teal-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 28,
  //   country: "Thailand",
  //   place: "Bangkok",
  //   title: "Thailand Holiday Tour",
  //   type: "Beach Tour",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Bangkok → Pattaya",
  //   destinations: ["Bangkok", "Pattaya"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 46000,
  //   rating: 4.7,
  //   reviews: 341,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 29,
  //   country: "Japan",
  //   place: "Tokyo",
  //   title: "Japan Experience Tour",
  //   type: "Cultural Tour",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Tokyo → Osaka",
  //   destinations: ["Tokyo", "Hakone", "Kyoto", "Osaka"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 133000,
  //   rating: 4.9,
  //   reviews: 187,
  //   badge: "Premium",
  //   badgeColor: "bg-sky-600",
  //   mode: "Train",
  //   img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 30,
  //   country: "Mauritius",
  //   place: "Mauritius",
  //   title: "Mauritius Luxury Tour",
  //   type: "Luxury Tour",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "North Island → South Island",
  //   destinations: ["North Island", "South Island"],
  //   amenities: ["Resort", "Meals", "Transfers", "Sightseeing"],
  //   price: 100000,
  //   rating: 4.8,
  //   reviews: 156,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80",
  //   popular: true,
  // },

  // // ─── HELICOPTER PACKAGES ──────────────────────────────────
  // {
  //   id: 31,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Chardham Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Gangotri", "Yamunotri", "Kedarnath", "Badrinath"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 230000,
  //   rating: 4.9,
  //   reviews: 298,
  //   badge: "Bestseller",
  //   badgeColor: "bg-amber-500",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1545552987-720aa18145ca?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 32,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Chardham Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Gangotri", "Yamunotri", "Kedarnath", "Badrinath"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 43000,
  //   rating: 4.9,
  //   reviews: 298,
  //   badge: "Bestseller",
  //   badgeColor: "bg-amber-500",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1545552987-720aa18145ca?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 33,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Badri Kedar Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Dehradun", "Kedarnath", "Badrinath"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 140000,
  //   rating: 4.8,
  //   reviews: 164,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 34,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Badri Kedar Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Dehradun", "Kedarnath", "Badrinath"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 43000,
  //   rating: 4.8,
  //   reviews: 164,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 35,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Badrinath Kedarnath Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Dehradun", "Badrinath", "Kedarnath"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 135000,
  //   rating: 4.9,
  //   reviews: 186,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 36,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Badrinath Kedarnath Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Dehradun", "Badrinath", "Kedarnath"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 48000,
  //   rating: 4.9,
  //   reviews: 186,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 37,
  //   country: "India",
  //   place: "Haridwar",
  //   title: "Badrinath Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Haridwar → Haridwar",
  //   destinations: ["Haridwar", "Dehradun", "Badrinath"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 85000,
  //   rating: 4.7,
  //   reviews: 112,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 38,
  //   country: "India",
  //   place: "Haridwar",
  //   title: "Badrinath Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Haridwar → Haridwar",
  //   destinations: ["Haridwar", "Dehradun", "Badrinath"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 39000,
  //   rating: 4.7,
  //   reviews: 112,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 39,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Kedarnath Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Phata", "Guptkashi", "Kedarnath"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 85000,
  //   rating: 4.8,
  //   reviews: 231,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 40,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Kedarnath Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Phata", "Guptkashi", "Kedarnath"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.8,
  //   reviews: 231,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 41,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Gangotri Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Dehradun", "Gangotri"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 80000,
  //   rating: 4.7,
  //   reviews: 89,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 42,
  //   country: "India",
  //   place: "Dehradun",
  //   title: "Gangotri Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Dehradun → Dehradun",
  //   destinations: ["Dehradun", "Gangotri"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 22000,
  //   rating: 4.7,
  //   reviews: 89,
  //   badge: "Same Day",
  //   badgeColor: "bg-orange-500",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 43,
  //   country: "India",
  //   place: "Jammu",
  //   title: "Vaishno Devi Yatra By Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Jammu → Jammu",
  //   destinations: ["Jammu", "Sanji Chatti", "Vaishno Devi"],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 320000,
  //   rating: 4.9,
  //   reviews: 143,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 44,
  //   country: "India",
  //   place: "Jammu",
  //   title: "Vaishno Devi Yatra By Caps",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "Same Day (1 Day)",
  //   durationTag: "1 Day",
  //   startEnd: "Jammu → Jammu",
  //   destinations: ["Jammu", "Sanji Chatti", "Vaishno Devi"],
  //   amenities: ["Hotel", "Meals", "Caps", "Sightseeing"],
  //   price: 18000,
  //   rating: 4.9,
  //   reviews: 143,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Caps",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 45,
  //   country: "India",
  //   place: "Amarnath",
  //   title: "Amarnath Yatra by Helicopter from Baltal",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Srinagar → Srinagar",
  //   destinations: ["Srinagar", "Sonmarg", "Baltal", "Panchtarni", "Amarnath"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.8,
  //   reviews: 98,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 46,
  //   country: "India",
  //   place: "Amarnath",
  //   title: "Amarnath Yatra with Kashmir Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Jammu → Jammu",
  //   destinations: ["Jammu", "Srinagar", "Sonmarg", "Amarnath", "Vaishno Devi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 45000,
  //   rating: 4.7,
  //   reviews: 76,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 47,
  //   country: "India",
  //   place: "Amarnath",
  //   title: "Amarnath Yatra by Helicopter from Pahalgam",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Srinagar → Srinagar",
  //   destinations: ["Srinagar", "Pahalgam", "Panchtarni", "Amarnath"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.8,
  //   reviews: 85,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 48,
  //   country: "India",
  //   place: "Amarnath",
  //   title: "Amarnath Yatra with Vaishno Devi Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Jammu",
  //     "Vaishno Devi",
  //     "Srinagar",
  //     "Patnitop",
  //     "Amarnath",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 55000,
  //   rating: 4.9,
  //   reviews: 62,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 49,
  //   country: "India",
  //   place: "Pithoragarh",
  //   title: "Adi Kailash Helicopter Tour with Om Parvat",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Pithoragarh → Pithoragarh",
  //   destinations: [
  //     "Pithoragarh",
  //     "Gunji",
  //     "Nabhidhang",
  //     "Kalapani",
  //     "Parvati Sarovar",
  //     "Adi Kailash",
  //   ],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 58500,
  //   rating: 4.9,
  //   reviews: 54,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 50,
  //   country: "India",
  //   place: "Pithoragarh",
  //   title: "Adi Kailash, Om Parvat & Mt. Kailash Yatra by Helicopter",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Pithoragarh → Pithoragarh",
  //   destinations: [
  //     "Pithoragarh",
  //     "Gunji",
  //     "Adi Kailash",
  //     "Om Parvat",
  //     "Kailash Mansarovar",
  //     "Old Lipulekh Pass",
  //   ],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 65500,
  //   rating: 4.9,
  //   reviews: 41,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Helicopter",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 51,
  //   country: "India",
  //   place: "Pithoragarh",
  //   title: "Adi Kailash & Om Parvat Yatra Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Lucknow → Lucknow",
  //   destinations: [
  //     "Lucknow",
  //     "Haldwani",
  //     "Kathgodam",
  //     "Dharchula",
  //     "Gunji",
  //     "Kalapani",
  //     "Nabhidhang",
  //     "Adi Kailash",
  //   ],
  //   amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
  //   price: 48500,
  //   rating: 4.8,
  //   reviews: 67,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 52,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14700,
  //   rating: 4.8,
  //   reviews: 210,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 53,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 19500,
  //   rating: 4.8,
  //   reviews: 187,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 54,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Ajmer & Pushkar",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Agra",
  //     "Fatehpur Sikri",
  //     "Jaipur",
  //     "Ajmer",
  //     "Pushkar",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 21100,
  //   rating: 4.7,
  //   reviews: 134,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 55,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Ajmer and Pushkar",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Agra",
  //     "Fatehpur Sikri",
  //     "Jaipur",
  //     "Ajmer",
  //     "Pushkar",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16500,
  //   rating: 4.7,
  //   reviews: 98,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 56,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Amritsar",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur", "Amritsar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16500,
  //   rating: 4.8,
  //   reviews: 112,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 57,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Ranthambore",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur", "Ranthambore"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 19500,
  //   rating: 4.8,
  //   reviews: 89,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 58,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Haridwar and Rishikesh",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Jaipur",
  //     "Fatehpur Sikri",
  //     "Agra",
  //     "Haridwar",
  //     "Rishikesh",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22500,
  //   rating: 4.8,
  //   reviews: 76,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 59,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Jodhpur and Udaipur",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Agra",
  //     "Fatehpur Sikri",
  //     "Jaipur",
  //     "Jodhpur",
  //     "Udaipur",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 24500,
  //   rating: 4.8,
  //   reviews: 93,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 60,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Khajuraho and Varanasi",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Jaipur",
  //     "Fatehpur Sikri",
  //     "Agra",
  //     "Khajuraho",
  //     "Varanasi",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 27500,
  //   rating: 4.7,
  //   reviews: 68,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 61,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Rajasthan (15 Days)",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "15 Days / 14 Nights",
  //   durationTag: "15 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Agra",
  //     "Fatehpur Sikri",
  //     "Jaipur",
  //     "Ajmer",
  //     "Pushkar",
  //     "Udaipur",
  //     "Jodhpur",
  //     "Jaisalmer",
  //     "Bikaner",
  //     "Mandawa",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 42500,
  //   rating: 4.9,
  //   reviews: 57,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 62,
  //   country: "India",
  //   place: "Golden Triangle",
  //   title: "Golden Triangle Tour with Rajasthan (18 Days)",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "18 Days / 17 Nights",
  //   durationTag: "18 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Agra",
  //     "Fatehpur Sikri",
  //     "Jaipur",
  //     "Ajmer",
  //     "Pushkar",
  //     "Udaipur",
  //     "Jodhpur",
  //     "Jaisalmer",
  //     "Bikaner",
  //     "Mandawa",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 49500,
  //   rating: 4.9,
  //   reviews: 44,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 63,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Kamakhya Temple Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "2 Days / 1 Night",
  //   durationTag: "2 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kamakhya Temple"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 5650,
  //   rating: 4.8,
  //   reviews: 174,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 64,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Guwahati Temple Tour With Meghalaya",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Shillong", "Cherrapunji"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10700,
  //   rating: 4.7,
  //   reviews: 108,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 65,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Assam Tour Package for 3 Days",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kamakhya Temple"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 13500,
  //   rating: 4.7,
  //   reviews: 92,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 66,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Kaziranga National Park Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kaziranga National Park"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10800,
  //   rating: 4.9,
  //   reviews: 136,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 67,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Guwahati Kamakhya Shillong Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kamakhya Temple", "Shillong"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14500,
  //   rating: 4.8,
  //   reviews: 119,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 68,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Jorhat Majuli Kaziranga Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: [
  //     "Guwahati",
  //     "Jorhat",
  //     "Majuli Island",
  //     "Kaziranga National Park",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 15200,
  //   rating: 4.8,
  //   reviews: 87,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 69,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Special Package for Northeast India",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Dimapur → Kohima",
  //   destinations: ["Dimapur", "Benreu", "Dzuleke", "Khonoma", "Kohima"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 13500,
  //   rating: 4.7,
  //   reviews: 63,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 70,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Glimpses of Assam Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kaziranga National Park", "Shillong"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 24900,
  //   rating: 4.8,
  //   reviews: 75,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 71,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Shillong Cherrapunji Kamakhya Darshan Trip",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: ["Guwahati", "Kamakhya Temple", "Shillong", "Cherrapunji"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22450,
  //   rating: 4.8,
  //   reviews: 94,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 72,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Assam Meghalaya Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: [
  //     "Guwahati",
  //     "Cherrapunji",
  //     "Shillong",
  //     "Mawlynnong",
  //     "Dawki",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 34900,
  //   rating: 4.9,
  //   reviews: 82,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 73,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Best of North East India Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Jalpaiguri → Jalpaiguri",
  //   destinations: [
  //     "Jalpaiguri",
  //     "Bagdogra",
  //     "Kalimpong",
  //     "Darjeeling",
  //     "Gangtok",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 32500,
  //   rating: 4.8,
  //   reviews: 101,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 74,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Best of Sikkim Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Bagdogra → Bagdogra",
  //   destinations: ["Bagdogra", "Gangtok", "Lachen", "Lachung"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 38900,
  //   rating: 4.9,
  //   reviews: 88,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 75,
  //   country: "India",
  //   place: "Guwahati",
  //   title: "Assam Meghalaya Arunachal Pradesh Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Guwahati → Guwahati",
  //   destinations: [
  //     "Guwahati",
  //     "Kaziranga",
  //     "Bomdila",
  //     "Tawang",
  //     "Dirang",
  //     "Cherrapunji",
  //     "Shillong",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 44200,
  //   rating: 4.9,
  //   reviews: 57,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 76,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Chennai Temple Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Chennai → Chennai",
  //   destinations: ["Chennai", "Kanchipuram", "Mahabalipuram"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14999,
  //   rating: 4.8,
  //   reviews: 132,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 77,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Chennai Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Chennai → Chennai",
  //   destinations: ["Chennai"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14999,
  //   rating: 4.7,
  //   reviews: 98,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 78,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Thanjavur Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Madurai → Madurai",
  //   destinations: ["Madurai", "Trichy", "Thanjavur", "Kumbakonam"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 15500,
  //   rating: 4.8,
  //   reviews: 87,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 79,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Chennai Pondicherry Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Chennai → Chennai",
  //   destinations: ["Chennai", "Pondicherry"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16999,
  //   rating: 4.8,
  //   reviews: 114,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 80,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Rameshwaram Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Madurai → Madurai",
  //   destinations: ["Madurai", "Rameshwaram", "Kanyakumari", "Trivandrum"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 19500,
  //   rating: 4.9,
  //   reviews: 143,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 81,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Enchanting Tamil Nadu Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Chennai → Trivandrum",
  //   destinations: [
  //     "Tirupati",
  //     "Mahabalipuram",
  //     "Thanjavur",
  //     "Madurai",
  //     "Rameshwaram",
  //     "Kanyakumari",
  //     "Trivandrum",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 34500,
  //   rating: 4.8,
  //   reviews: 176,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 82,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Best of Tamil Nadu Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Chennai → Trivandrum",
  //   destinations: [
  //     "Chennai",
  //     "Mahabalipuram",
  //     "Thanjavur",
  //     "Trichy",
  //     "Madurai",
  //     "Rameshwaram",
  //     "Kanyakumari",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 35500,
  //   rating: 4.9,
  //   reviews: 208,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 83,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Chennai Trichy Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Chennai → Chennai",
  //   destinations: ["Chennai", "Mahabalipuram", "Thanjavur", "Trichy"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 49500,
  //   rating: 4.8,
  //   reviews: 91,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 84,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Tamil Nadu Beach Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Chennai → Chennai",
  //   destinations: [
  //     "Chennai",
  //     "Mahabalipuram",
  //     "Trichy",
  //     "Madurai",
  //     "Rameshwaram",
  //     "Thanjavur",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 55500,
  //   rating: 4.8,
  //   reviews: 73,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 85,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Tamil Nadu Pilgrimage Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Chennai → Chennai",
  //   destinations: [
  //     "Mahabalipuram",
  //     "Pondicherry",
  //     "Chidambaram",
  //     "Kumbakonam",
  //     "Thanjavur",
  //     "Trichy",
  //     "Rameshwaram",
  //     "Madurai",
  //     "Kodaikanal",
  //     "Palani",
  //     "Ooty",
  //     "Tiruvannamalai",
  //     "Kanchipuram",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 55500,
  //   rating: 4.9,
  //   reviews: 118,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 86,
  //   country: "India",
  //   place: "Chennai",
  //   title: "Tamil Nadu Cultural Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "22 Days / 21 Nights",
  //   durationTag: "22 Days",
  //   startEnd: "Chennai → Hyderabad",
  //   destinations: [
  //     "Chennai",
  //     "Mahabalipuram",
  //     "Trichy",
  //     "Pondicherry",
  //     "Madurai",
  //     "Mysore",
  //     "Hyderabad",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 85500,
  //   rating: 4.9,
  //   reviews: 44,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 87,
  //   country: "India",
  //   place: "PortBlair",
  //   title: "Andaman Short Tour Package",
  //   type: "Short Getaway",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Port Blair → Port Blair",
  //   destinations: ["Port Blair", "Havelock Island"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 34500,
  //   rating: 4.7,
  //   reviews: 143,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Ferry",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 88,
  //   country: "India",
  //   place: "PortBlair",
  //   title: "Andaman Beach Tour Package",
  //   type: "Beach Holiday",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Port Blair → Port Blair",
  //   destinations: ["Port Blair", "Havelock Island", "Neil Island"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 38500,
  //   rating: 4.8,
  //   reviews: 198,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Ferry",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 89,
  //   country: "India",
  //   place: "PortBlair",
  //   title: "Andaman Scuba Diving Tour Package",
  //   type: "Adventure Sports",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Port Blair → Port Blair",
  //   destinations: ["Port Blair", "Havelock Island", "Long Island"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 52500,
  //   rating: 4.9,
  //   reviews: 112,
  //   badge: "Adventure",
  //   badgeColor: "bg-green-600",
  //   mode: "Ferry",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 90,
  //   country: "India",
  //   place: "PortBlair",
  //   title: "Andaman Honeymoon Tour Package",
  //   type: "Romantic Getaway",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Port Blair → Port Blair",
  //   destinations: ["Port Blair", "Havelock Island", "Elephant Beach"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 48500,
  //   rating: 4.9,
  //   reviews: 167,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Ferry",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 91,
  //   country: "India",
  //   place: "PortBlair",
  //   title: "Port Blair Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Port Blair → Port Blair",
  //   destinations: [
  //     "Port Blair",
  //     "Havelock Island",
  //     "Ross Island",
  //     "Jolly Buoy",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 62500,
  //   rating: 4.9,
  //   reviews: 89,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Ferry",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 92,
  //   country: "India",
  //   place: "Leh",
  //   title: "Glimpses of Ladakh Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Leh → Leh",
  //   destinations: ["Leh", "Sham Valley", "Pangong Tso", "Khardung La"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 20500,
  //   rating: 4.8,
  //   reviews: 156,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 93,
  //   country: "India",
  //   place: "Leh",
  //   title: "Kashmir Honeymoon Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Srinagar → Srinagar",
  //   destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 27000,
  //   rating: 4.9,
  //   reviews: 213,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 94,
  //   country: "India",
  //   place: "Leh",
  //   title: "Magical Ladakh with Kashmir Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Srinagar → Leh",
  //   destinations: ["Srinagar", "Gulmarg", "Sonmarg", "Leh", "Pangong Tso"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 28500,
  //   rating: 4.8,
  //   reviews: 124,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 95,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "Darjeeling Gangtok Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Gangtok → Darjeeling",
  //   destinations: ["Gangtok", "Nathula Pass", "Darjeeling"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 13999,
  //   rating: 4.8,
  //   reviews: 187,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 96,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "Darjeeling Kalimpong Gangtok Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Kalimpong → Darjeeling",
  //   destinations: ["Kalimpong", "Gangtok", "Darjeeling"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 15999,
  //   rating: 4.8,
  //   reviews: 143,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 97,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "Best of Sikkim Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Gangtok → Gangtok",
  //   destinations: ["Gangtok", "Lachen", "Lachung"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16999,
  //   rating: 4.9,
  //   reviews: 162,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 98,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "Darjeeling Gangtok Lachung Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Gangtok → Darjeeling",
  //   destinations: ["Gangtok", "Darjeeling", "Lachung", "Lachen"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 27000,
  //   rating: 4.9,
  //   reviews: 118,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 99,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "North East India Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Jalpaiguri → Gangtok",
  //   destinations: ["Jalpaiguri", "Kalimpong", "Darjeeling", "Gangtok"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25999,
  //   rating: 4.8,
  //   reviews: 96,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 100,
  //   country: "India",
  //   place: "Gangtok",
  //   title: "Fascinating Eastern Himalaya Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Kalimpong → Darjeeling",
  //   destinations: ["Kalimpong", "Gangtok", "Pelling", "Darjeeling"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25999,
  //   rating: 4.8,
  //   reviews: 79,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 101,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Golden Triangle Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Agra", "Jaipur", "Ajmer", "Pushkar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16000,
  //   rating: 4.8,
  //   reviews: 224,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 102,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Majestic Rajasthan Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Jaipur → Udaipur",
  //   destinations: ["Jaipur", "Jodhpur", "Udaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18000,
  //   rating: 4.8,
  //   reviews: 176,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 103,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Honeymoon Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Jaipur → Delhi",
  //   destinations: ["Jaipur", "Pushkar", "Udaipur", "Delhi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 20000,
  //   rating: 4.9,
  //   reviews: 198,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 104,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Wildlife Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Jaipur → Jaipur",
  //   destinations: ["Jaipur", "Sariska", "Bharatpur", "Ranthambore"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.8,
  //   reviews: 132,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 105,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Group Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: [
  //     "Delhi",
  //     "Mathura",
  //     "Jaipur",
  //     "Bikaner",
  //     "Jodhpur",
  //     "Pushkar",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 28000,
  //   rating: 4.7,
  //   reviews: 109,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 106,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Heritage Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Jaipur",
  //   destinations: ["Delhi", "Mandawa", "Khimsar", "Jodhpur", "Jaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 32000,
  //   rating: 4.9,
  //   reviews: 87,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 107,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Shining Rajasthan Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Jaipur → Jaipur",
  //   destinations: ["Jaipur", "Bikaner", "Udaipur", "Pushkar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 35000,
  //   rating: 4.8,
  //   reviews: 96,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 108,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Desert Safari Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Udaipur",
  //   destinations: ["Delhi", "Mandawa", "Jaisalmer", "Jodhpur", "Udaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 36000,
  //   rating: 4.9,
  //   reviews: 143,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 109,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Colorful Rajasthan Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "13 Days / 12 Nights",
  //   durationTag: "13 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Jaipur", "Bikaner", "Jaisalmer", "Udaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 48000,
  //   rating: 4.9,
  //   reviews: 78,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 110,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Forts & Palaces Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "15 Days / 14 Nights",
  //   durationTag: "15 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Bikaner", "Udaipur", "Jaipur", "Bharatpur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 55000,
  //   rating: 4.9,
  //   reviews: 62,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 111,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Incredible Rajasthan Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "15 Days / 14 Nights",
  //   durationTag: "15 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Bikaner", "Jodhpur", "Ajmer", "Jaipur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 56000,
  //   rating: 4.9,
  //   reviews: 54,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 112,
  //   country: "India",
  //   place: "Jaipur",
  //   title: "Rajasthan Cultural Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "15 Days / 14 Nights",
  //   durationTag: "15 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Bikaner", "Jaisalmer", "Udaipur", "Chittorgarh"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 57000,
  //   rating: 4.9,
  //   reviews: 47,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 113,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai Honeymoon Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "2 Days / 1 Night",
  //   durationTag: "2 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10000,
  //   rating: 4.7,
  //   reviews: 134,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 114,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Aurangabad Sightseeing Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "2 Days / 1 Night",
  //   durationTag: "2 Days",
  //   startEnd: "Aurangabad → Aurangabad",
  //   destinations: ["Aurangabad"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 9500,
  //   rating: 4.6,
  //   reviews: 88,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 115,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Lonavala Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "2 Days / 1 Night",
  //   durationTag: "2 Days",
  //   startEnd: "Lonavala → Lonavala",
  //   destinations: ["Lonavala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 8500,
  //   rating: 4.6,
  //   reviews: 97,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 116,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Nashik Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "2 Days / 1 Night",
  //   durationTag: "2 Days",
  //   startEnd: "Nashik → Nashik",
  //   destinations: ["Nashik"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 9000,
  //   rating: 4.6,
  //   reviews: 76,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 117,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Nagpur Shirdi Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "2 Days / 1 Night",
  //   durationTag: "2 Days",
  //   startEnd: "Nagpur → Nagpur",
  //   destinations: ["Nagpur", "Shirdi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10500,
  //   rating: 4.7,
  //   reviews: 83,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 118,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Ajanta Ellora Caves Tour Package (3D)",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Aurangabad → Aurangabad",
  //   destinations: ["Aurangabad", "Ajanta", "Ellora"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10900,
  //   rating: 4.9,
  //   reviews: 198,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 119,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12500,
  //   rating: 4.8,
  //   reviews: 221,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 120,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Maharashtra Jyotirlinga Yatra Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai", "Bhimashankar", "Trimbakeshwar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 15650,
  //   rating: 4.8,
  //   reviews: 143,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 121,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Shirdi Nashik Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai", "Shirdi", "Nashik"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 13500,
  //   rating: 4.8,
  //   reviews: 176,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 122,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Cordelia Cruise Mumbai to Goa",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Mumbai → Goa",
  //   destinations: ["Mumbai", "Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 28000,
  //   rating: 4.9,
  //   reviews: 162,
  //   badge: "Luxury",
  //   badgeColor: "bg-purple-600",
  //   mode: "Cruise",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 123,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai Lonavala Weekend Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai", "Lonavala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12000,
  //   rating: 4.7,
  //   reviews: 118,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 124,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Lonavala Khandala Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Lonavala → Lonavala",
  //   destinations: ["Lonavala", "Khandala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 11500,
  //   rating: 4.7,
  //   reviews: 104,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 125,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Nashik Shirdi Bhimashankar Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Nashik → Nashik",
  //   destinations: ["Nashik", "Shirdi", "Bhimashankar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14500,
  //   rating: 4.8,
  //   reviews: 132,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 126,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Pune Nashik Weekend Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Pune → Pune",
  //   destinations: ["Pune", "Nashik"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 13000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 127,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Nagpur Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Nagpur → Nagpur",
  //   destinations: ["Nagpur"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12500,
  //   rating: 4.6,
  //   reviews: 71,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 128,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Kanha Nagpur Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Nagpur → Nagpur",
  //   destinations: ["Nagpur", "Kanha"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 15500,
  //   rating: 4.8,
  //   reviews: 89,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 129,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Nagpur Pachmarhi Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Nagpur → Nagpur",
  //   destinations: ["Nagpur", "Pachmarhi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14000,
  //   rating: 4.7,
  //   reviews: 77,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 130,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Aurangabad Nashik Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Aurangabad → Aurangabad",
  //   destinations: ["Aurangabad", "Nashik"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 17000,
  //   rating: 4.7,
  //   reviews: 82,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 131,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai Cochin Beach Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Mumbai → Cochin",
  //   destinations: ["Mumbai", "Cochin"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18500,
  //   rating: 4.7,
  //   reviews: 94,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 132,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "5 Jyotirlinga Tour Package Maharashtra",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: [
  //     "Mumbai",
  //     "Bhimashankar",
  //     "Trimbakeshwar",
  //     "Grishneshwar",
  //     "Aundha Nagnath",
  //     "Parli Vaijnath",
  //   ],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22500,
  //   rating: 4.9,
  //   reviews: 167,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 133,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Ajanta Ellora Caves Tour Package (5D)",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Aurangabad → Aurangabad",
  //   destinations: ["Aurangabad", "Ajanta", "Ellora"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 20500,
  //   rating: 4.9,
  //   reviews: 152,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 134,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Aurangabad Ajanta Ellora Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Aurangabad → Aurangabad",
  //   destinations: ["Aurangabad", "Ajanta", "Ellora"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 21000,
  //   rating: 4.8,
  //   reviews: 109,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 135,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Lonavala Mahabaleshwar Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Lonavala → Lonavala",
  //   destinations: ["Lonavala", "Mahabaleshwar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 20000,
  //   rating: 4.8,
  //   reviews: 113,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 136,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai Nashik Shirdi Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai", "Nashik", "Shirdi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22500,
  //   rating: 4.8,
  //   reviews: 138,
  //   badge: "Spiritual",
  //   badgeColor: "bg-orange-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },
  // {
  //   id: 137,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai to Goa Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Mumbai → Goa",
  //   destinations: ["Mumbai", "Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.8,
  //   reviews: 187,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: true,
  // },
  // {
  //   id: 138,
  //   country: "India",
  //   place: "Mumbai",
  //   title: "Mumbai Aurangabad Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Mumbai → Mumbai",
  //   destinations: ["Mumbai", "Aurangabad"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 24000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "Popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=640&q=80",
  //   popular: false,
  // },

  // {
  //   id: 139,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Dalhousie Khajjiar Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Pathankot", "Dalhousie", "Khajjiar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dalhousie-khajjiar-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 140,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Dharamshala Weekend Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/dharamshala-weekend-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 141,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Exotic Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Kullu", "Manali", "Rohtang Pass"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
  //   popular: false,
  // },
  // {
  //   id: 142,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Shimla Manali Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 143,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Enchanting Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Rohtang Pass"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/enchanting-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 144,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Himachal Vaishno Devi Darshan Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "8 Days / 7 Nights",
  //   durationTag: "8 Days",
  //   startEnd: "Amritsar → Jammu",
  //   destinations: ["Amritsar", "Dharamshala", "Katra", "Vaishno Devi"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 30000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himanchal-with-vaishno-devi-darshan.webp",
  //   popular: false,
  // },
  // {
  //   id: 145,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Himachal Delhi Darshan Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Rohtang Pass", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 35000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-pradesh-with-delhi-darshan.webp",
  //   popular: false,
  // },
  // {
  //   id: 146,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Scenic Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 28000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scenic-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 147,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Incredible Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dalhousie", "Khajjiar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 45000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 148,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Himachal Honeymoon Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 30000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-lovers-paradise.webp",
  //   popular: false,
  // },
  // {
  //   id: 149,
  //   country: "India",
  //   place: "Himachal Pradesh",
  //   title: "Fascinating Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dalhousie"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 40000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/fascinating-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 150,
  //   country: "India",
  //   place: "Goa",
  //   title: "Goa Weekend Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Panaji", "North Goa", "South Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 10900,
  //      rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-weekend-tour-package.webp",
  //   popular: false,
  // },
  // {
  //   id: 151,
  //   country: "India",
  //   place: "Goa",
  //   title: "Goa Honeymoon Special Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 16900,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-honeymoon-special-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 152,
  //   country: "India",
  //   place: "Goa",
  //   title: "Goa Adventure Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 9900,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-adventure-tour-package.webp",
  //   popular: false,
  // },
  // {
  //   id: 153,
  //   country: "India",
  //   place: "Goa",
  //   title: "Most Wanted Goa Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 24900,
  //      rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/most-wanted-goa-package.webp",
  //   popular: false,
  // },
  // {
  //   id: 154,
  //   country: "India",
  //   place: "Goa",
  //   title: "Goa Tour Package with Flight",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "4 Days / 3 Nights",
  //   durationTag: "4 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 32500,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Flight",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/goa-tour-package-with-flight.webp",
  //   popular: false,
  // },
  // {
  //   id: 155,
  //   country: "India",
  //   place: "Goa",
  //   title: "Amazing Goa Fiesta Tour",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Panaji", "Goa", "North Goa", "South Goa"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25900,
  //      rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/amazing-goa-fiesta-tour.webp",
  //   popular: false,
  // },
  //  {
  //   id: 156,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Shimla Sightseeing Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "3 Days / 2 Nights",
  //   durationTag: "3 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 157,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Shimla Manali Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 158,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Exotic Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Kullu", "Manali", "Rohtang Pass"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 25000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/exotic-himachal-pardesh.webp",
  //   popular: false,
  // },
  // {
  //   id: 159,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Enchanting Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Rohtang Pass"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/enchanting-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 160,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Himachal Delhi Darshan Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Rohtang Pass", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 35000,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-pradesh-with-delhi-darshan.webp",
  //   popular: false,
  // },
  // {
  //   id: 161,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Scenic Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 28000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scenic-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 162,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Incredible Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dalhousie", "Khajjiar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 45000,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
  //   popular: false,
  // },
  // {
  //   id:167,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Himachal Honeymoon Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 30000,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-lovers-paradise.webp",
  //   popular: false,
  // },
  // {
  //   id: 168,
  //   country: "India",
  //   place: "Shimla",
  //   title: "Fascinating Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dalhousie"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 40000,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/fascinating-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 169,
  //   country: "India",
  //   place: "Manali",
  //   title: "Manali Weekend Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Manali", "Kullu", "Manikaran"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 12000,
  //   rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/manali-weekend-tour.webp",
  //   popular: false,
  // },
  // {
  //   id:170,
  //   country: "India",
  //   place: "Manali",
  //   title: "Manali Honeymoon Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "5 Days / 4 Nights",
  //   durationTag: "5 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Solang Valley", "Kullu", "Manikaran"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 14000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/manali-honeymoon-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 171,
  //   country: "India",
  //   place: "Manali",
  //   title: "Manali Volvo Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Rohtang Pass", "Kullu"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 15000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/manali-volvo-package.webp",
  //   popular: false,
  // },
  // {
  //   id:172,
  //   country: "India",
  //   place: "Manali",
  //   title: "Shimla Manali Honeymoon Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Chandigarh → Chandigarh",
  //   destinations: ["Shimla", "Manali", "Solang Valley", "Chandigarh"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18000,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-honeymoon-package.webp",
  //   popular: false,
  // },
  // {
  //   id:173,
  //   country: "India",
  //   place: "Manali",
  //   title: "Shimla Manali Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "6 Days / 5 Nights",
  //   durationTag: "6 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 18000,
  //    rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/shimla-manali-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 174,
  //   country: "India",
  //   place: "Manali",
  //   title: "Enchanting Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "7 Days / 6 Nights",
  //   durationTag: "7 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Rohtang Pass"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 22000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/enchanting-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 175,
  //   country: "India",
  //   place: "Manali",
  //   title: "Himachal Delhi Darshan Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Manali", "Rohtang Pass", "Shimla"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 35000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-pradesh-with-delhi-darshan.webp",
  //   popular: false,
  // },
  // {
  //   id: 176,
  //   country: "India",
  //   place: "Manali",
  //   title: "Scenic Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "9 Days / 8 Nights",
  //   durationTag: "9 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 28000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scenic-himachal.webp",
  //   popular: false,
  // },
  // {
  //   id: 177,
  //   country: "India",
  //   place: "Manali",
  //   title: "Incredible Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dalhousie", "Khajjiar"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 45000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/incredible-himachal-tour.webp",
  //   popular: false,
  // },
  // {
  //   id: 177,
  //   country: "India",
  //   place: "Manali",
  //   title: "Himachal Honeymoon Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "10 Days / 9 Nights",
  //   durationTag: "10 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dharamshala"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 30000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/himachal-lovers-paradise.webp",
  //   popular: false,
  // },
  // {
  //   id: 178,
  //   country: "India",
  //   place: "Manali",
  //   title: "Fascinating Himachal Tour Package",
  //   type: "Hill Stations & Nature Destinations",
  //   duration: "11 Days / 10 Nights",
  //   durationTag: "11 Days",
  //   startEnd: "Delhi → Delhi",
  //   destinations: ["Delhi", "Shimla", "Manali", "Dalhousie"],
  //   amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
  //   price: 40000,
  //     rating: 4.7,
  //   reviews: 96,
  //   badge: "popular",
  //   badgeColor: "bg-blue-600",
  //   mode: "Road",
  //   img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/fascinating-himachal.webp",
  //   popular: false,
  // },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nainital-tour-package-from-delhi-nits9.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Mall Road Stroll" },
      { title: "Naina Devi Temple Darshan" },
      { title: "Snow View Point (Cable Car Ride)" },
      { title: "Eco Cave Gardens & Tiffin Top Visit" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nainital-tour-package-from-delhi-nits9.jpg",
      alt: "Nainital Tour Package from Delhi",
    },

    testimonials: [
      {
        id: 1,
        text: "A perfect 3-day getaway from Delhi! Nainital's lake and misty mountains were breathtaking. Namaste India Trip's arrangements were seamless — hotel was great, transfers on time.",
        author: "Ananya Kapoor",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The cable car ride to Snow View Point was the highlight! Everything was well organized by Namaste India Trip. Ideal short trip for families.",
        author: "Rajat Sinha",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nainital-tour-package-from-delhi-nits9.jpg",
        alt: "Nainital Lake View",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nainital-snow-view-point.jpg",
        alt: "Snow View Point Nainital",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nainital-mall-road.jpg",
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
        details:
          "Depart Delhi early morning by coach (approx. 6–7 hrs). Arrive Nainital; check-in to hotel. Evening stroll on Mall Road and Naini Lake. Enjoy a peaceful lakeside dinner. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Full-Day Nainital Sightseeing",
        details:
          "Morning visit Naina Devi Temple on the northern shore of Naini Lake. Take a cable car to Snow View Point for panoramic Himalayan vistas. Explore Eco Cave Gardens and visit Tiffin Top (Dorothy's Seat) for sunset views. Evening boating on Naini Lake. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Delhi",
        details:
          "Morning at leisure — visit Bara Bazaar for local woolens and handicrafts. Post-breakfast, drive back to Delhi. Tour concludes.",
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

  // ─────────────────────────────────────────────
  // ID 180 — Nainital Weekend Tour Package
  // ─────────────────────────────────────────────
  {
    id: 180,
    country: "India",
    place: "Nainital",
    title: "Nainital Weekend Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "3 Days / 2 Nights",
    durationTag: "3 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Nainital"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 10900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/nainital-weekend-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Sunset Views" },
      { title: "Naina Devi Temple & Mall Road" },
      { title: "Snow View Point Cable Car Ride" },
      { title: "Bara Bazaar Shopping for Local Woolens" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/nainital-weekend-tour.webp",
      alt: "Nainital Weekend Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Best budget weekend trip from Delhi! The hotel had a lovely lake view and Namaste India Trip handled everything perfectly. Will definitely book again.",
        author: "Priya Rawat",
        date: "Travelled September 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Quick escape from the city — Nainital in 3 days was just what we needed. Well priced, smooth transfers, and beautiful hotel. Recommended!",
        author: "Akash Verma",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/nainital-weekend-tour.webp",
        alt: "Nainital Weekend",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/naini-lake-boating.jpg",
        alt: "Naini Lake Boating",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nainital-naina-devi-temple.jpg",
        alt: "Naina Devi Temple",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Nainital Weekend Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "WEEKEND", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 3,
    countryCount: 1,
    cityCount: 2,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Nainital", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Nainital",
        details:
          "Depart Delhi by coach. Arrive Nainital; check-in. Evening at Mall Road and Naini Lake boat ride. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing",
        details:
          "Visit Naina Devi Temple, Snow View Point (cable car), Eco Cave Gardens, and Tiffin Top. Evening lakeside leisure. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Delhi",
        details:
          "Morning shopping at Bara Bazaar. Post-breakfast drive back to Delhi. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Destinations", value: "Delhi · Nainital" },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "NNT-WKND-DEL-02" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────
  // ID 181 — Nainital Corbett Weekend Tour Package
  // ─────────────────────────────────────────────
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/corbett-nainital-weekend.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Snow View Point" },
      { title: "Jim Corbett National Park Jeep Safari" },
      { title: "Tiger & Wildlife Spotting in Corbett" },
      { title: "Corbett Museum & Garjia Devi Temple" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/corbett-nainital-weekend.webp",
      alt: "Nainital Corbett Weekend Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Two incredible experiences in one trip — the misty lakes of Nainital and the thrilling Corbett jeep safari! Namaste India Trip planned it perfectly.",
        author: "Kunal Mehta",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We spotted a tiger on the Corbett safari — a life memory! The Nainital portion was equally beautiful. Great value 4-day package.",
        author: "Nisha Joshi",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/corbett-nainital-weekend.webp",
        alt: "Corbett Nainital Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/jim-corbett-national-park-jeep-safari.jpg",
        alt: "Corbett Jeep Safari",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/garjia-devi-temple-corbett.jpg",
        alt: "Garjia Devi Temple",
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
        details:
          "Depart Delhi by coach. Arrive Nainital; check-in. Evening at Naini Lake and Mall Road. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing → Corbett",
        details:
          "Morning: Naina Devi Temple and Snow View Point (cable car). Post-lunch drive to Jim Corbett National Park. Check-in to jungle resort. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jim Corbett Jeep Safari",
        details:
          "Early morning jeep safari into Dhikala or Bijrani zone — spot tigers, elephants, leopards, and diverse birdlife. Afternoon visit Garjia Devi Temple and Corbett Museum. Overnight at resort.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Corbett → Delhi",
        details:
          "Optional early morning nature walk. Post-breakfast drive to Delhi. Tour concludes.",
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

  // ─────────────────────────────────────────────
  // ID 182 — Uttarakhand Bird Watching Tour Package
  // ─────────────────────────────────────────────
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/uttarakhand-bird-watching-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Corbett National Park — Over 600 Bird Species" },
      { title: "Sat Tal Lakes — Migratory Bird Hotspot" },
      { title: "Nainital Bird Watching at High Altitude" },
      { title: "Expert Naturalist-Led Bird Walks" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/uttarakhand-bird-watching-tour.webp",
      alt: "Uttarakhand Bird Watching Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "A birder's paradise! We spotted over 120 species in 5 days across Corbett and Sat Tal. The expert guide from Namaste India Trip was phenomenal.",
        author: "Dr. Suresh Nair",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Sat Tal in winter is magical — hundreds of migratory birds! The itinerary was perfectly crafted for serious birders. Highly recommended.",
        author: "Geeta Krishnan",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/uttarakhand-bird-watching-tour.webp",
        alt: "Bird Watching Uttarakhand",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/sattal-lake-bird-watching.jpg",
        alt: "Sat Tal Lake Birdwatching",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/corbett-birds.jpg",
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
        details:
          "Depart Delhi by coach. Arrive Jim Corbett; check-in to birding resort. Afternoon nature walk with expert naturalist guide. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Corbett Birding — Full Day",
        details:
          "Early morning bird walk along Ramganga riverine forest — spot Pallas's fish eagle, great hornbill, and hundreds of resident Himalayan species. Afternoon rest and evening riverside bird watch. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Corbett → Sat Tal",
        details:
          "Post-breakfast drive to Sat Tal (Seven Lakes). Afternoon birding around the seven interconnected lakes — a premier winter migratory bird destination. Spot Oriental turtle dove, common teal, and kingfishers. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Sat Tal → Nainital",
        details:
          "Dawn bird walk at Sat Tal. Drive to Nainital. Afternoon birding at Kilbury Bird Sanctuary — one of Kumaon's top high-altitude birding spots. Overnight in Nainital.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Nainital → Delhi",
        details:
          "Morning birding at Pangot village (a top birding village near Nainital). Post-breakfast drive to Delhi. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/hills-of-kumaon-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Naini Lake Boating & Snow View Point" },
      { title: "Ranikhet Golf Course & Chaubatia Orchards" },
      { title: "Almora — Kasar Devi Temple & Bright End Corner" },
      { title: "Chitai Golu Devta Temple & Binsar Views" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/hills-of-kumaon-tour.webp",
      alt: "Hills of Kumaon Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The most authentic Uttarakhand experience! Ranikhet and Almora are hidden gems — unspoilt, peaceful, and stunning. Namaste India Trip curated a brilliant 7-day route.",
        author: "Vinod Chauhan",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Almora's Kasar Devi temple and the Himalayan panorama from Bright End Corner were unforgettable. A truly off-the-beaten-path Kumaon tour.",
        author: "Ritu Pandey",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/hills-of-kumaon-tour.webp",
        alt: "Hills of Kumaon",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ranikhet-chaubatia-orchards.jpg",
        alt: "Ranikhet Chaubatia Orchards",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/almora-bright-end-corner.jpg",
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
        details:
          "Depart Delhi. Arrive Nainital; check-in. Evening at Naini Lake and Mall Road. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing",
        details:
          "Visit Snow View Point (cable car), Naina Devi Temple, Eco Cave Gardens, Tiffin Top, and High Altitude Zoo. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Ranikhet",
        details:
          "Drive to Ranikhet (approx. 2 hrs). Check-in. Explore Chaubatia Orchards (apple, apricot, peach), the Jhula Devi Temple, and the famous Ranikhet Golf Course (one of Asia's highest). Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Ranikhet Sightseeing",
        details:
          "Visit Kalika Temple, Binsar Mahadev Temple, Upat & Kalika golf courses, and Majhkhali viewpoint. Panoramic Himalayan views including Nanda Devi. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Ranikhet → Almora",
        details:
          "Drive to Almora (approx. 2 hrs). Check-in. Explore Lala Bazaar for traditional Kumaoni sweets and brassware. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Almora Sightseeing",
        details:
          "Visit Kasar Devi Temple (once home to Swami Vivekananda), Chitai Golu Devta Temple (famous for petition bells), Bright End Corner sunset, and Almora Deer Park. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Almora → Delhi",
        details:
          "Post-breakfast drive to Delhi (approx. 9 hrs). Tour concludes.",
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
  {
    id: 184,
    country: "India",
    place: "Nainital",
    title: "Wonders of Kumaon Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Corbett", "Ranikhet", "Nainital"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 32900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/wonders-of-kumaon-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Jim Corbett Jeep Safari — Tigers & Elephants" },
      { title: "Ranikhet Chaubatia Orchards & Golf Course" },
      { title: "Naini Lake Boating & Snow View Point" },
      { title: "Bhimtal & Sat Tal Scenic Lake Drive" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/wonders-of-kumaon-tour.webp",
      alt: "Wonders of Kumaon Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "8 days covering Corbett, Ranikhet and Nainital — a perfect blend of wildlife, mountains and lakes. Namaste India Trip's planning was excellent from start to finish.",
        author: "Arun Sharma",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Corbett safari was thrilling and Ranikhet was so peaceful. Sat Tal on the way to Nainital was a beautiful surprise. A wonderful Kumaon adventure!",
        author: "Pallavi Gupta",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/wonders-of-kumaon-tour.webp",
        alt: "Wonders of Kumaon",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/bhimtal-lake.jpg",
        alt: "Bhimtal Lake",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ranikhet-himalayan-view.jpg",
        alt: "Ranikhet Himalayan View",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Wonders of Kumaon Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "8 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Kumaon, Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Jim Corbett", nights: 2 },
      { city: "Ranikhet", nights: 2 },
      { city: "Nainital", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Corbett",
        details:
          "Depart Delhi. Arrive Jim Corbett; check-in to jungle resort. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Corbett Safari",
        details:
          "Morning and evening jeep safaris in Dhikala/Bijrani zones. Spot tigers, elephants, and leopards. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Corbett → Ranikhet",
        details:
          "Post-breakfast drive to Ranikhet. Visit Garjia Devi Temple en-route. Check-in. Evening at leisure. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Ranikhet Sightseeing",
        details:
          "Chaubatia Orchards, Jhula Devi Temple, Golf Course, Kalika Temple, and Majhkhali viewpoint. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Ranikhet → Nainital",
        details:
          "Drive to Nainital via Bhimtal and Sat Tal Lakes — scenic stops for photography. Check-in. Evening on Mall Road.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Nainital Sightseeing",
        details:
          "Snow View Point (cable car), Naina Devi Temple, Eco Cave Gardens, Tiffin Top, and High Altitude Zoo. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Nainital Leisure & Excursion",
        details:
          "Day excursion to Mukteshwar — stunning Himalayan views and Chauli Ki Jali cliff. Evening boat ride on Naini Lake. Overnight.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Nainital → Delhi",
        details: "Post-breakfast drive to Delhi. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Corbett · Ranikhet · Nainital · Bhimtal · Sat Tal",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "KUM-WOND-DEL-06" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "November–June" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/uttarakhand-delights-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Nainital Lakes & Snow View Point" },
      { title: "Ranikhet — Queen's Meadow Cantonement Town" },
      { title: "Corbett National Park Jeep Safari" },
      { title: "Mussoorie — Queen of Hill Stations & Kempty Falls" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/uttarakhand-delights-tour.webp",
      alt: "Uttarakhand Delights Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Covering Nainital, Ranikhet, Corbett and Mussoorie in one trip was fantastic. Each destination was so different. Namaste India Trip made the logistics seamless.",
        author: "Sanjay Tripathi",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Mussoorie's Kempty Falls and Corbett's safari were the highlights of our trip! Great 8-day Uttarakhand package at an excellent price.",
        author: "Meena Rawat",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/uttarakhand-delights-tour.webp",
        alt: "Uttarakhand Delights",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/mussoorie-kempty-falls.jpg",
        alt: "Kempty Falls Mussoorie",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/mussoorie-mall-road.jpg",
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
        details:
          "Depart Delhi. Arrive Nainital. Check-in. Evening at Naini Lake. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing",
        details:
          "Snow View Point, Naina Devi Temple, Eco Cave Gardens, High Altitude Zoo. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Ranikhet",
        details:
          "Drive to Ranikhet. Visit Chaubatia Orchards and Jhula Devi Temple. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Ranikhet → Corbett",
        details:
          "Drive to Corbett. Check-in to jungle resort. Evening nature walk. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Corbett Jeep Safari",
        details:
          "Morning and afternoon jeep safaris — spot tigers, elephants, and diverse birds. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Corbett → Mussoorie",
        details:
          "Drive to Mussoorie (approx. 4 hrs). Check-in. Evening at Mall Road and Gun Hill Point (cable car). Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Mussoorie Sightseeing",
        details:
          "Visit Kempty Falls, Lal Tibba (highest point in Mussoorie), Camel's Back Road, Landour Clock Tower, and Cloud's End. Overnight.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Mussoorie → Delhi",
        details: "Post-breakfast drive to Delhi. Tour concludes.",
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

  // ─────────────────────────────────────────────
  // ID 186 — Majestic Kumaon Tour Package
  // ─────────────────────────────────────────────
  {
    id: 186,
    country: "India",
    place: "Nainital",
    title: "Majestic Kumaon Tour Package",
    type: "Hill Stations & Nature Destinations",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Delhi → Delhi",
    destinations: ["Delhi", "Nainital", "Ranikhet", "Corbett"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 32900,
    rating: 4.7,
    reviews: 96,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/majestic-kumaon-tour.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Nainital Lakes, Zoo & Snow View Point" },
      { title: "Kausani — Sunrise over Nanda Devi & Trishul" },
      { title: "Ranikhet Golf Course & Chaubatia Gardens" },
      { title: "Jim Corbett Jeep Safari — India's Oldest National Park" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/majestic-kumaon-tour.webp",
      alt: "Majestic Kumaon Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Kausani's sunrise was worth the entire trip! The Himalayan panorama from Kausani is something you never forget. Namaste India Trip added this gem to our itinerary.",
        author: "Deepika Joshi",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Majestic indeed! Every single destination on this tour felt regal — especially Ranikhet with its alpine meadows and Corbett with its wild beauty.",
        author: "Harish Bisht",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/09/majestic-kumaon-tour.webp",
        alt: "Majestic Kumaon",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kausani-sunrise-nanda-devi.jpg",
        alt: "Kausani Sunrise Nanda Devi",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ranikhet-forest-trail.jpg",
        alt: "Ranikhet Forest Trail",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Majestic Kumaon Tour Package" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "8 DAYS", variant: "outlined" as const, color: "purple" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Kumaon, Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Nainital", nights: 2 },
      { city: "Kausani", nights: 1 },
      { city: "Ranikhet", nights: 2 },
      { city: "Jim Corbett", nights: 2 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Nainital",
        details:
          "Depart Delhi. Arrive Nainital. Check-in. Evening at Naini Lake. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nainital Sightseeing",
        details:
          "Snow View Point (cable car), Naina Devi Temple, Eco Cave Gardens, High Altitude Zoo, Tiffin Top. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Nainital → Kausani",
        details:
          "Scenic drive to Kausani (approx. 3 hrs). Check-in. Evening witness stunning sunset over the Himalayan range from Anasakti Ashram (where Mahatma Gandhi stayed). Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Kausani Sunrise → Ranikhet",
        details:
          "Early morning sunrise view of Nanda Devi, Trishul, and Panchchuli peaks. Drive to Ranikhet. Sightseeing: Chaubatia Orchards and Jhula Devi Temple. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Ranikhet Sightseeing",
        details:
          "Kalika Temple, Binsar Mahadev, Golf Course, Majhkhali Viewpoint, and Rani Lake. Overnight Ranikhet.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Ranikhet → Corbett",
        details:
          "Drive to Jim Corbett. Check-in to jungle resort. Afternoon nature walk. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Corbett Jeep Safari",
        details:
          "Morning and afternoon jeep safaris. Spot tigers, leopards, elephants, and over 600 bird species. Overnight.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Corbett → Delhi",
        details: "Post-breakfast drive to Delhi. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Nainital · Kausani · Ranikhet · Jim Corbett",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "KUM-MAJESTIC-DEL-08" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "March–June & September–November" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ════════════════════════════════════════════════════════════
  // ─── DARJEELING (IDs 201–206) ─────────────────────────────
  // ════════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────
  // ID 201 — Darjeeling Heritage Tour Package
  // ─────────────────────────────────────────────
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Heritage-Tour-Package.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Tiger Hill Sunrise over Kanchenjunga" },
      { title: "Darjeeling Himalayan Railway (Toy Train) Ride" },
      { title: "Batasia Loop & War Memorial" },
      { title: "Happy Valley Tea Estate & Himalayan Zoo" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Heritage-Tour-Package.jpg",
      alt: "Darjeeling Heritage Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The toy train ride and Tiger Hill sunrise were two bucket list experiences in one trip! Darjeeling is magical and Namaste India Trip made it very affordable.",
        author: "Kaveri Sen",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Perfect 3-day getaway! The tea estate tour was fascinating and the Kanchenjunga views from Tiger Hill at sunrise were absolutely breathtaking.",
        author: "Arnab Ghosh",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Heritage-Tour-Package.jpg",
        alt: "Darjeeling Heritage",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/darjeeling-toy-train.jpg",
        alt: "Darjeeling Toy Train",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/tiger-hill-sunrise-darjeeling.jpg",
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
        details:
          "Arrive Bagdogra airport. Transfer to Darjeeling (approx. 3 hrs via NH10). Check-in to hotel. Evening at Mall Road — enjoy hot Darjeeling tea. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Tiger Hill Sunrise & Darjeeling Sightseeing",
        details:
          "Pre-dawn drive to Tiger Hill for the legendary sunrise view over Kanchenjunga and Mt. Everest. Return via Ghoom Monastery and Batasia Loop. Breakfast at hotel. Visit Himalayan Mountaineering Institute & Zoo, Happy Valley Tea Estate, Padmaja Naidu Zoological Park, Tibetan Refugee Self-Help Centre. Afternoon toy train ride (joy ride). Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Darjeeling → Bagdogra — Departure",
        details:
          "Morning at leisure — browse Chowrasta market for teas and handicrafts. Transfer to Bagdogra airport. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Gangtok-Tour-Package.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Nathula Pass (14,140 ft) — India-China Border" },
      { title: "Rumtek Monastery & Ganesh Tok, Gangtok" },
      { title: "Tiger Hill Sunrise & Darjeeling Toy Train" },
      { title: "Happy Valley Tea Estate & Himalayan Zoo" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Gangtok-Tour-Package.jpg",
      alt: "Darjeeling with Gangtok Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Nathula Pass was surreal — standing at the India-China border at 14,000 ft! Gangtok and Darjeeling both had their own unique charm. A brilliant 5-day tour.",
        author: "Rohit Banerjee",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Combining Gangtok and Darjeeling in one package was the best decision. Namaste India Trip managed the Nathula Pass permits efficiently — highly recommended!",
        author: "Divya Krishnamurthy",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Gangtok-Tour-Package.jpg",
        alt: "Darjeeling Gangtok Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/nathula-pass-gangtok.jpg",
        alt: "Nathula Pass",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/rumtek-monastery-gangtok.jpg",
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
        details:
          "Arrive Bagdogra. Drive to Gangtok (approx. 4 hrs). Check-in. Evening at MG Marg. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Nathula Pass & Gangtok Sightseeing",
        details:
          "Morning excursion to Nathula Pass (permit required). Return to Gangtok. Afternoon: Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, and Flower Show (seasonal). Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Gangtok → Darjeeling",
        details:
          "Drive to Darjeeling (approx. 4 hrs). Check-in. Evening stroll at Mall Road and Chowrasta. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Tiger Hill & Darjeeling Sightseeing",
        details:
          "Pre-dawn Tiger Hill sunrise drive. Ghoom Monastery, Batasia Loop, Himalayan Zoo, Tea Estate, and toy train joy ride. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Darjeeling → Bagdogra",
        details: "Morning at leisure. Transfer to Bagdogra. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/09/Darjeeling-Gangtok-Honeymoon-Tour-Package.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Romantic Tiger Hill Sunrise — Kanchenjunga Views" },
      { title: "Darjeeling Toy Train Couple Ride" },
      { title: "Gangtok MG Marg Evening & Ropeway Ride" },
      { title: "Tsomgo Lake Excursion — High-Altitude Glacial Lake" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/09/Darjeeling-Gangtok-Honeymoon-Tour-Package.jpg",
      alt: "Darjeeling Honeymoon Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The most romantic honeymoon destination! Darjeeling's misty mornings and Gangtok's vibrant evenings were perfect contrasts. Every detail was taken care of by Namaste India Trip.",
        author: "Aman & Shreya Kapoor",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Watching sunrise over Kanchenjunga together from Tiger Hill was the most beautiful moment of our honeymoon. Namaste India Trip made it a dream come true!",
        author: "Nitin & Pooja Sharma",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/09/Darjeeling-Gangtok-Honeymoon-Tour-Package.jpg",
        alt: "Darjeeling Honeymoon",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/tsomgo-lake-gangtok.jpg",
        alt: "Tsomgo Lake Gangtok",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/darjeeling-couple-tea-garden.jpg",
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
        details:
          "Arrive Bagdogra. Transfer to Darjeeling. Check-in to romantic hill-view hotel. Evening at Chowrasta with hot Darjeeling tea. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Tiger Hill Sunrise & Sightseeing",
        details:
          "Pre-dawn Tiger Hill sunrise drive — Kanchenjunga and Mt. Everest views. Ghoom Monastery, Batasia Loop, Zoo, Tea Estate, toy train joy ride. Romantic dinner. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Darjeeling Leisure",
        details:
          "Morning walk through tea gardens. Visit Rock Garden and Gorkha Rangit Valley Ropeway (cable car). Evening at leisure. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Darjeeling → Gangtok",
        details:
          "Drive to Gangtok (approx. 4 hrs). Check-in. Evening stroll at MG Marg. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Tsomgo Lake & Gangtok Sightseeing",
        details:
          "Morning excursion to Tsomgo Lake (12,400 ft glacial lake) and Baba Mandir. Return to Gangtok. Afternoon: Rumtek Monastery, Ganesh Tok, and Ropeway ride. Romantic dinner. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Gangtok → Bagdogra",
        details:
          "Morning at leisure. Transfer to Bagdogra airport. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Kalimpong-Gangtok-Tour-Package.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Kalimpong — Flower Nurseries & Deolo Hill Viewpoint" },
      { title: "Gangtok MG Marg & Rumtek Monastery" },
      { title: "Tiger Hill Sunrise & Darjeeling Toy Train" },
      { title: "Three Distinct Himalayan Hill Towns in One Tour" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Kalimpong-Gangtok-Tour-Package.jpg",
      alt: "Darjeeling Kalimpong Gangtok Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "Three beautiful hill towns in 6 days — Kalimpong was the most underrated! The flower nurseries and Deolo Hill views were incredible. Great itinerary by Namaste India Trip.",
        author: "Sudha Rao",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Each town had its own unique personality. Kalimpong was artsy, Gangtok buzzing, and Darjeeling serene. Wonderfully balanced 6-day trip.",
        author: "Vivek Das",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Kalimpong-Gangtok-Tour-Package.jpg",
        alt: "Darjeeling Kalimpong Gangtok",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kalimpong-deolo-hill.jpg",
        alt: "Kalimpong Deolo Hill",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kalimpong-flower-nurseries.jpg",
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
        details:
          "Arrive Bagdogra. Drive to Kalimpong (approx. 3 hrs). Check-in. Explore Deolo Hill for panoramic views of Kanchenjunga. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Kalimpong → Gangtok",
        details:
          "Morning visit Kalimpong's famous flower nurseries, Zang Dhok Palri Phodang Monastery, and Morgan House. Drive to Gangtok. Check-in. Evening at MG Marg. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Gangtok Sightseeing",
        details:
          "Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, Sikkim State Museum, and Ropeway ride. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gangtok → Darjeeling",
        details:
          "Drive to Darjeeling (approx. 4 hrs). Check-in. Evening at Mall Road and Chowrasta. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Tiger Hill & Darjeeling Sightseeing",
        details:
          "Pre-dawn Tiger Hill drive. Batasia Loop, Ghoom Monastery, Happy Valley Tea Estate, Himalayan Mountaineering Institute, Zoo, and toy train ride. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Darjeeling → Bagdogra",
        details:
          "Morning shopping at Chowrasta. Transfer to Bagdogra. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Heritage-Tour-Package.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Lachung — Remote North Sikkim Alpine Village" },
      { title: "Yumthang Valley (Valley of Flowers)" },
      { title: "Lachen & Gurudongmar Lake (17,800 ft)" },
      { title: "Tiger Hill Sunrise & Darjeeling Toy Train" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Heritage-Tour-Package.jpg",
      alt: "Darjeeling Gangtok Lachung Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "Gurudongmar Lake at 17,800 ft was the most awe-inspiring moment of our lives! Namaste India Trip managed all the high-altitude permits and logistics seamlessly.",
        author: "Manish Agarwal",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Yumthang Valley in bloom was like a painting — thousands of rhododendrons everywhere! This North Sikkim extension made our Darjeeling tour truly epic.",
        author: "Shalini Bose",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Darjeeling-Heritage-Tour-Package.jpg",
        alt: "Lachung Sikkim",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/yumthang-valley-flowers.jpg",
        alt: "Yumthang Valley of Flowers",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/gurudongmar-lake-sikkim.jpg",
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
        details:
          "Arrive Bagdogra. Drive to Gangtok (4 hrs). Check-in. Evening MG Marg. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Gangtok Sightseeing",
        details:
          "Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, Ropeway ride. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Gangtok → Lachung",
        details:
          "Drive to Lachung (4–5 hrs) through North Sikkim — stunning gorge and waterfall scenery. Check-in to homestay. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Yumthang Valley Excursion",
        details:
          "Morning excursion to Yumthang Valley (Valley of Flowers, 11,800 ft) — rhododendrons, hot springs, and glacial streams. Return to Lachung. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Lachung → Lachen",
        details:
          "Drive to Lachen village. En-route visit Chungthang confluence. Overnight at Lachen.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Gurudongmar Lake → Gangtok",
        details:
          "Pre-dawn drive to Gurudongmar Lake (17,800 ft) — one of the world's highest lakes, sacred to both Buddhists and Hindus. Return and drive to Gangtok. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Gangtok → Darjeeling",
        details:
          "Drive to Darjeeling. Check-in. Evening at Mall Road. Overnight.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Tiger Hill & Departure",
        details:
          "Pre-dawn Tiger Hill sunrise. Batasia Loop, Ghoom Monastery. Transfer to Bagdogra airport. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Eastern-Himalayas-Tour-Package.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Kalimpong Flower Nurseries & Deolo Hill" },
      { title: "Gangtok — Nathula Pass & Tsomgo Lake" },
      { title: "Tiger Hill Sunrise & Toy Train, Darjeeling" },
      { title: "9-Day Comprehensive Eastern Himalaya Coverage" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Eastern-Himalayas-Tour-Package.jpg",
      alt: "Eastern Himalayas Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The most comprehensive Eastern Himalaya tour available. 9 days covering Kalimpong, Gangtok and Darjeeling — each with its own unique beauty. Namaste India Trip was exceptional.",
        author: "Priya Chakraborty",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From Nathula Pass to Kanchenjunga sunrise — this tour had it all! Brilliant value for 9 days covering the best of East India's hill stations.",
        author: "Sunil Mukherjee",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/10/Eastern-Himalayas-Tour-Package.jpg",
        alt: "Eastern Himalayas",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/tsomgo-lake.jpg",
        alt: "Tsomgo Lake",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kanchenjunga-sunrise.jpg",
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
        details:
          "Arrive Bagdogra. Transfer to Kalimpong (3 hrs). Check-in. Evening Deolo Hill. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Kalimpong Sightseeing",
        details:
          "Flower nurseries (Kalimpong is Asia's top orchid exporter), Zang Dhok Palri Monastery, Morgan House, and Durpin Dara Hill. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kalimpong → Gangtok",
        details:
          "Drive to Gangtok via Teesta River gorge. Check-in. Evening MG Marg. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gangtok Sightseeing",
        details:
          "Rumtek Monastery, Ganesh Tok, Hanuman Tok, Enchey Monastery, Flower Show (seasonal), Ropeway ride. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Nathula Pass & Tsomgo Lake",
        details:
          "Morning excursion to Nathula Pass (14,140 ft) — India-China border. Afternoon at Tsomgo (Changu) Lake (12,400 ft). Overnight Gangtok.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Gangtok → Darjeeling",
        details:
          "Drive to Darjeeling (4 hrs). Check-in. Evening stroll at Mall Road. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Tiger Hill & Darjeeling Sightseeing",
        details:
          "Pre-dawn Tiger Hill sunrise drive. Ghoom Monastery, Batasia Loop, Tea Estate, Himalayan Zoo, and toy train joy ride. Overnight.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Darjeeling Day Excursion",
        details:
          "Excursion to Mirik — serene lake and tea gardens on the Nepal border. Return to Darjeeling. Overnight.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Darjeeling → Bagdogra",
        details:
          "Morning shopping at Chowrasta. Transfer to Bagdogra. Tour concludes.",
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

  // ════════════════════════════════════════════════════════════
  // ─── MUNNAR (IDs 207–208) ─────────────────────────────────
  // ════════════════════════════════════════════════════════════

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Munnar Tea Plantations & Eravikulam National Park" },
      { title: "Thekkady Periyar Wildlife Sanctuary Boat Ride" },
      { title: "Alleppey Backwaters Houseboat Stay" },
      { title: "Kathakali Dance Performance, Cochin" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
      alt: "Munnar Thekkady Alleppey Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The Alleppey houseboat night was the most unique experience! Waking up in the Kerala backwaters was magical. Munnar's tea gardens and Thekkady's wildlife were equally stunning.",
        author: "Siddharth Nair",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kerala in 6 days — absolutely incredible! The houseboat on the backwaters was the highlight but every day had something special. Brilliant package by Namaste India Trip.",
        author: "Radha Menon",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/munnar-tea-plantation.jpg",
        alt: "Munnar Tea Plantation",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/alleppey-houseboat-backwaters.jpg",
        alt: "Alleppey Houseboat",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/thekkady-periyar-boat.jpg",
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
        details:
          "Arrive Cochin airport. Cochin city tour — Fort Kochi, Chinese Fishing Nets, St. Francis Church, Mattancherry Palace, and Jewish Synagogue. Evening Kathakali dance performance. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin → Munnar",
        details:
          "Drive to Munnar (approx. 4 hrs) through spice plantations. Check-in. Visit Attukal Waterfalls and Echo Point. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Munnar Sightseeing",
        details:
          "Visit Eravikulam National Park (home of Nilgiri tahr), Tea Museum, Mattupetty Dam, Kundala Lake, and Rajamala. Overnight Munnar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Munnar → Thekkady",
        details:
          "Drive to Thekkady (approx. 3 hrs). Spice Plantation visit. Afternoon Periyar Wildlife Sanctuary boat ride — spot elephants, deer, and birds. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Thekkady → Alleppey Houseboat",
        details:
          "Drive to Alleppey (approx. 4 hrs). Board a traditional Kerala houseboat for an overnight stay on the backwaters — complete with onboard meals and sunset views.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Alleppey → Cochin — Departure",
        details:
          "Disembark houseboat morning. Drive to Cochin airport. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Munnar Tea Estates & Eravikulam National Park" },
      { title: "Wayanad Edakkal Caves & Soochipara Waterfalls" },
      { title: "Wayanad Wildlife Sanctuary Jeep Safari" },
      { title: "Calicut Beach & Kozhikode Heritage Walk" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
      alt: "Kerala Hill Stations Tour – Munnar & Wayanad",
    },

    testimonials: [
      {
        id: 1,
        text: "Wayanad was the highlight — the Edakkal Caves with ancient rock art were fascinating! Munnar's tea gardens were spectacular. A perfect Kerala hill stations tour.",
        author: "Aditya Kumar",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We loved exploring both Munnar and Wayanad in one trip. Two very different green landscapes. The Wayanad wildlife safari was thrilling. Excellent trip planning!",
        author: "Sangeetha Pillai",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/wayanad-soochipara-falls.jpg",
        alt: "Wayanad Soochipara Falls",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/wayanad-edakkal-caves.jpg",
        alt: "Edakkal Caves Wayanad",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/calicut-beach-kozhikode.jpg",
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
        details:
          "Arrive Cochin. Fort Kochi sightseeing — Chinese Fishing Nets, St. Francis Church, Mattancherry Palace. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin → Munnar",
        details:
          "Drive to Munnar (4 hrs). Check-in. Attukal Waterfalls and Echo Point. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Munnar Sightseeing",
        details:
          "Eravikulam National Park, Tea Museum, Mattupetty Dam, Kundala Lake. Overnight Munnar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Munnar → Wayanad",
        details:
          "Scenic drive to Wayanad (approx. 5 hrs) through winding forested roads. Check-in to jungle resort. Afternoon at leisure. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Wayanad Sightseeing",
        details:
          "Visit Edakkal Caves (prehistoric rock engravings), Soochipara/Sentinel Rock Waterfalls, Chembra Peak viewpoint, and Muthanga Wildlife Sanctuary jeep safari. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Wayanad → Calicut",
        details:
          "Drive to Calicut (Kozhikode) — approx. 3 hrs. Check-in. Visit Kappad Beach (where Vasco da Gama landed in 1498), Pazhassiraja Museum, and local food street. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Calicut → Cochin — Departure",
        details:
          "Morning drive to Cochin airport (approx. 4 hrs). Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Ooty Nilgiri Mountain Railway (Toy Train) UNESCO Ride" },
      { title: "Ooty Botanical Gardens & Ooty Lake" },
      { title: "Kodaikanal Lake Boating & Coaker's Walk" },
      { title: "Dolphin's Nose & Silver Cascade Falls, Kodaikanal" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
      alt: "Ooty Kodaikanal Hill Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "The Nilgiri Mountain Railway toy train ride through mist-covered forests was pure magic! Kodaikanal's lake and Coaker's Walk were equally breathtaking. Wonderful tour!",
        author: "Arjun Venkataraman",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Ooty and Kodaikanal are like two pearls of Tamil Nadu. Both uniquely beautiful! Namaste India Trip's itinerary balanced them perfectly. Very smooth travel experience.",
        author: "Leena Subramaniam",
        date: "Travelled April 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ooty-botanical-gardens.jpg",
        alt: "Ooty Botanical Gardens",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ooty-nilgiri-toy-train.jpg",
        alt: "Nilgiri Toy Train",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/kodaikanal-lake.jpg",
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
        details:
          "Fly or train to Coimbatore; drive to Ooty (Mettupalayam). Or take the iconic Nilgiri Mountain Railway (toy train) from Mettupalayam to Ooty (UNESCO World Heritage). Check-in Ooty. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Ooty Sightseeing",
        details:
          "Botanical Gardens (Government Rose Garden), Ooty Lake boating, Doddabetta Peak (highest in Nilgiris — 2,637 m), Wax World, and Deer Park. Overnight Ooty.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Ooty → Kodaikanal",
        details:
          "Scenic drive to Kodaikanal (approx. 4 hrs) via Palani Hills. Check-in. Evening Kodaikanal Lake boating. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Kodaikanal Sightseeing",
        details:
          "Visit Coaker's Walk (stunning valley views), Bear Shola Falls, Pillar Rocks, Guna Caves, Green Valley View (formerly Suicide Point), and Dolphin's Nose. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Kodaikanal → Coimbatore",
        details:
          "Morning drive to Coimbatore (approx. 4 hrs). Visit Marudamalai Temple and Perur Pateeswarar Temple. Check-in. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Coimbatore → Chennai — Departure",
        details:
          "Morning at leisure. Fly/train back to Chennai. Tour concludes.",
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
    id: 210,
    country: "India",
    place: "Ooty",
    title: "Best of Tamil Nadu – Ooty & Kodaikanal",
    type: "Hill Stations & Nature Destinations",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Chennai → Chennai",
    destinations: ["Chennai", "Mahabalipuram", "Ooty", "Kodaikanal", "Madurai"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 28900,
    rating: 4.7,
    reviews: 94,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bus, label: "Transfers", color: "#5CAE22", bg: "#EDF6E8" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Mahabalipuram — UNESCO Shore Temple & Rock Sculptures" },
      { title: "Ooty Toy Train Ride & Botanical Gardens" },
      { title: "Kodaikanal Lake & Pillar Rocks" },
      { title: "Madurai Meenakshi Amman Temple — Divine Darshan" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/kanchipuram-temple.jpg",
      alt: "Best of Tamil Nadu – Ooty & Kodaikanal",
    },

    testimonials: [
      {
        id: 1,
        text: "This tour was the perfect Tamil Nadu summary — ancient temples, colonial hill stations, and vibrant culture all in 8 days. Namaste India Trip was outstanding throughout.",
        author: "Balaji Rajan",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Mahabalipuram's shore temple at sunrise and Meenakshi temple's evening Aarthi were the most spiritual moments of our lives. Excellent 8-day coverage of Tamil Nadu!",
        author: "Chitra Anand",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/mahabalipuram-shore-temple.jpg",
        alt: "Mahabalipuram Shore Temple",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/madurai-meenakshi-temple.jpg",
        alt: "Madurai Meenakshi Temple",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ooty-gardens.jpg",
        alt: "Ooty Botanical Gardens",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Tamil Nadu", href: "/india/tamil-nadu" },
      { label: "Best of Tamil Nadu – Ooty & Kodaikanal" },
    ],

    badges: [
      { label: "POPULAR", variant: "solid" as const, color: "blue" },
      { label: "8 DAYS", variant: "outlined" as const, color: "green" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Tamil Nadu, India",

    itineraryStops: [
      { city: "Chennai / Mahabalipuram", nights: 1 },
      { city: "Ooty", nights: 2 },
      { city: "Kodaikanal", nights: 2 },
      { city: "Madurai", nights: 2 },
      { city: "Chennai (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Chennai → Mahabalipuram",
        details:
          "Arrive Chennai. Drive to Mahabalipuram (60 km). Visit Shore Temple, Arjuna's Penance, Five Rathas, and Krishna's Butter Ball. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Mahabalipuram → Ooty",
        details:
          "Drive to Ooty via Coimbatore (approx. 6 hrs) or take the iconic toy train from Mettupalayam. Check-in Ooty. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Ooty Sightseeing",
        details:
          "Botanical Gardens, Ooty Lake, Doddabetta Peak, Wax World, Rose Garden. Overnight Ooty.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Ooty → Kodaikanal",
        details:
          "Drive to Kodaikanal (4 hrs). Check-in. Evening lake boating. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Kodaikanal Sightseeing",
        details:
          "Coaker's Walk, Bear Shola Falls, Pillar Rocks, Guna Caves, Dolphin's Nose, Green Valley View. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Kodaikanal → Madurai",
        details:
          "Drive to Madurai (approx. 4 hrs). Check-in. Evening Meenakshi Amman Temple — breathtaking Gopurams and evening Aarthi. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Madurai Sightseeing",
        details:
          "Thirumalai Nayak Palace, Alagar Kovil, Gandhi Memorial Museum, and local market. Overnight Madurai.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Madurai → Chennai — Departure",
        details: "Fly or train to Chennai. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Chennai · Mahabalipuram · Ooty · Kodaikanal · Madurai",
      },
      { label: "Departure & Return", value: "Chennai" },
      { label: "Tour Code", value: "TN-BEST-CHE-02" },
      { label: "Meals", value: "Breakfast & Dinner included" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Customised — 2 to 20+ passengers" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ════════════════════════════════════════════════════════════
  // ─── ANDAMAN AND NICOBAR (IDs 211–215) ────────────────────
  // ════════════════════════════════════════════════════════════

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/andaman-beach-tour.webp",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Plane, label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Radhanagar Beach (Asia's #7 Beach) — Havelock Island" },
      { title: "Snorkeling at Elephant Beach, Havelock" },
      { title: "Cellular Jail & Light & Sound Show, Port Blair" },
      { title: "Neil Island Beaches — Bharatpur & Laxmanpur" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/andaman-beach-tour.webp",
      alt: "Andaman Beach Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Radhanagar Beach is everything they say and more — crystal clear turquoise water, white sand, and dramatic sunsets. The Cellular Jail sound and light show was emotionally powerful.",
        author: "Gaurav Mehta",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Snorkeling at Elephant Beach was the best underwater experience of our lives! The coral reefs were pristine. Namaste India Trip arranged everything flawlessly.",
        author: "Smita Rao",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/andaman-beach-tour.webp",
        alt: "Andaman Beach Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/radhanagar-beach-havelock.jpg",
        alt: "Radhanagar Beach Havelock",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/elephant-beach-snorkeling.jpg",
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
        details:
          "Arrive Port Blair airport. Visit Cellular Jail (Kala Pani) and the evening Light & Sound Show. Check-in. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Port Blair → Havelock Island",
        details:
          "Morning ferry to Havelock Island (approx. 2 hrs). Check-in to beach resort. Afternoon visit Radhanagar Beach (Beach No. 7 — one of Asia's best). Sunset swim. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Havelock → Neil Island",
        details:
          "Morning snorkeling at Elephant Beach. Afternoon ferry to Neil Island. Check-in. Visit Bharatpur Beach and Laxmanpur Beach (natural rock arch formation). Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Neil Island → Port Blair — Departure",
        details:
          "Morning ferry to Port Blair. Shopping at Aberdeen Bazaar. Transfer to airport. Tour concludes.",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/andaman-a-short-visit.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Plane, label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Cellular Jail & Evening Sound & Light Show" },
      { title: "Ross Island — British-Era Heritage Ruins" },
      { title: "Radhanagar Beach Sunset, Havelock Island" },
      { title: "Corbyn's Cove Beach & Water Sports, Port Blair" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/andaman-a-short-visit.webp",
      alt: "Andaman Short Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Perfect short escape to Andaman! 4 days felt complete covering Port Blair and Havelock. The Ross Island ruins were fascinating and Radhanagar was paradise.",
        author: "Tanya Kapoor",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Best 4-day holiday we've had in years! The Andaman water is like nothing we've seen before. Namaste India Trip's ferry and hotel arrangements were seamless.",
        author: "Ravi Sharma",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/andaman-a-short-visit.webp",
        alt: "Andaman Short Visit",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/ross-island-andaman.jpg",
        alt: "Ross Island Andaman",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/corbyns-cove-beach.jpg",
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
        details:
          "Arrive Port Blair. Check-in. Visit Cellular Jail and evening Light & Sound Show. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Port Blair Sightseeing",
        details:
          "Morning visit Ross Island and North Bay Island (glass-bottom boat ride). Afternoon at Corbyn's Cove Beach for water sports. Overnight Port Blair.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Port Blair → Havelock Island",
        details:
          "Ferry to Havelock. Check-in to beach resort. Explore Radhanagar Beach and Kala Pathar Beach at sunset. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Havelock → Port Blair — Departure",
        details:
          "Morning leisure at beach. Ferry back to Port Blair. Transfer to airport. Tour concludes.",
      },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scuba-diving-andaman.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Fish, label: "Diving", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Certified Scuba Diving at Havelock — Pristine Coral Reefs" },
      { title: "Long Island — Remote Merk Bay Beach Snorkeling" },
      { title: "North Bay Island — Glass-Bottom Boat & Sea Walking" },
      { title: "Expert PADI-Certified Dive Instructors" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scuba-diving-andaman.webp",
      alt: "Andaman Scuba Diving Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "My first scuba dive at Havelock and I was completely hooked! The coral gardens and tropical fish were unbelievable. Our dive instructor was patient and professional.",
        author: "Vikram Malhotra",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Long Island's Merk Bay is untouched and incredible — felt like we had the island to ourselves! The scuba diving at Havelock completed a perfect adventure trip.",
        author: "Nadia Sharma",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/scuba-diving-andaman.webp",
        alt: "Andaman Scuba Diving",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/havelock-scuba-coral.jpg",
        alt: "Havelock Coral Reef Scuba",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/long-island-merk-bay.jpg",
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
        details:
          "Arrive Port Blair. North Bay Island excursion — glass-bottom boat ride and sea walking experience. Cellular Jail evening show. Check-in. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Havelock Island — Scuba Diving",
        details:
          "Ferry to Havelock Island. Check-in to dive resort. Afternoon certified scuba diving session at Elephant Beach (beginners welcome — PADI-certified instructors). Radhanagar Beach sunset. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Havelock → Long Island",
        details:
          "Morning second scuba dive or advanced dive at Nemo Reef. Ferry to Long Island. Check-in. Explore pristine Merk Bay Beach (hike through jungle to reach). Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Long Island → Port Blair — Departure",
        details:
          "Ferry to Port Blair. Aberdeen Bazaar souvenir shopping. Transfer to airport. Tour concludes.",
      },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/romantic-andman.webp",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Plane, label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Radhanagar Beach Romantic Sunset — Havelock Island" },
      { title: "Couple Snorkeling at Elephant Beach" },
      { title: "Private Beach Dinners & Beach Bonfires" },
      { title: "Ross Island Sunset Cruise & Neil Island Escape" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/romantic-andman.webp",
      alt: "Andaman Honeymoon Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Our Andaman honeymoon was absolutely dreamy! Private beach dinners, turquoise water, and stunning sunsets — Namaste India Trip planned every romantic detail to perfection.",
        author: "Rohit & Priya Sharma",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Radhanagar Beach at sunset with my partner was the most beautiful moment of our lives! The Andaman waters are genuinely paradise. Best honeymoon destination in India.",
        author: "Anil & Sunita Verma",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/romantic-andman.webp",
        alt: "Romantic Andaman",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/radhanagar-sunset-couple.jpg",
        alt: "Radhanagar Beach Couple Sunset",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/andaman-beach-dinner.jpg",
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
        details:
          "Arrive Port Blair. Check-in to boutique hotel. Evening at Cellular Jail Light & Sound Show — emotionally stirring. Romantic dinner. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Port Blair Sightseeing",
        details:
          "Morning Ross Island excursion (British-era ruins surrounded by deer and peacocks). Afternoon Corbyn's Cove Beach for water sports. Sunset cruise. Overnight Port Blair.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Port Blair → Havelock Island",
        details:
          "Ferry to Havelock. Check-in to romantic beach resort. Afternoon walk on Radhanagar Beach. Sunset candle-light beach dinner. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Havelock — Couple's Beach Day",
        details:
          "Morning couple snorkeling at Elephant Beach. Afternoon at Kala Pathar Beach — serene and secluded. Optional kayaking. Romantic bonfire dinner. Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Havelock → Neil Island",
        details:
          "Morning ferry to Neil Island. Check-in. Explore Bharatpur Beach, Natural Bridge (rock arch at Laxmanpur), and Sitapur Beach sunrise point. Romantic dinner. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Neil Island → Port Blair — Departure",
        details:
          "Ferry to Port Blair. Shopping at Aberdeen Bazaar for pearl jewelry. Transfer to airport. Honeymoon tour concludes.",
      },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/port-blair-package.webp",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Plane, label: "Flights", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/port-blair-package.webp",
      alt: "Port Blair Complete Andaman Experience",
    },

    testimonials: [
      {
        id: 1,
        text: "The most comprehensive Andaman tour available! Jolly Buoy Island was like swimming in an aquarium — the most vibrant coral reefs I've ever seen. 8 days was perfect.",
        author: "Ashish Tandon",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We did everything — Cellular Jail, Ross Island, Havelock scuba, Jolly Buoy snorkeling, and the semi-submarine! Namaste India Trip managed the complex island-hopping logistics perfectly.",
        author: "Rekha Jain",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/10/port-blair-package.webp",
        alt: "Port Blair Andaman Package",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/jolly-buoy-island-coral.jpg",
        alt: "Jolly Buoy Island Coral",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/07/mahatma-gandhi-marine-park.jpg",
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
        details:
          "Arrive Port Blair. Check-in. Cellular Jail visit and evening Light & Sound Show. Overnight.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Ross Island & North Bay",
        details:
          "Morning Ross Island excursion (ruined British-era buildings, peacocks and deer). Afternoon North Bay Island — sea walking and glass-bottom boat ride. Semi-submarine experience. Overnight.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jolly Buoy Island",
        details:
          "Full-day excursion to Jolly Buoy Island (Mahatma Gandhi Marine National Park) — snorkeling in crystal-clear water with pristine coral gardens. Return Port Blair. Overnight.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Port Blair → Havelock Island",
        details:
          "Ferry to Havelock. Check-in. Explore Radhanagar Beach (Beach No. 7). Overnight.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Havelock — Scuba & Elephant Beach",
        details:
          "Morning beginner scuba diving session. Afternoon explore Elephant Beach via boat — snorkeling and water sports. Overnight.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Havelock → Neil Island",
        details:
          "Ferry to Neil Island. Bharatpur Beach, Laxmanpur Natural Rock Bridge, Sitapur Beach sunrise point. Overnight.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Neil Island → Port Blair — Baratang",
        details:
          "Ferry to Port Blair. Afternoon excursion to Baratang Island — mangrove creeks, limestone caves, and mud volcanoes. Overnight Port Blair.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Port Blair — Departure",
        details:
          "Morning at Corbyn's Cove Beach. Souvenir shopping at Aberdeen Bazaar. Transfer to airport. Tour concludes.",
      },
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
    img: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-10.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-10.jpg",
      alt: "Tamil Nadu Temple Tour from Chennai",
    },

    testimonials: [
      {
        id: 1,
        text: "An extraordinary temple circuit! The Meenakshi Amman night ceremony in Madurai was deeply moving. Namaste India Trip arranged VIP darshan at every temple — no queues, all devotion.",
        author: "Suresh & Lakshmi Rajan",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the French streets of Pondicherry to the sacred shores of Rameswaram, every day was a new discovery. The itinerary was perfectly paced for our family with senior citizens.",
        author: "Vijay & Meena Krishnaswamy",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-10.jpg",
        alt: "Tamil Nadu Temple Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/12/tamilnadu-tour.jpg",
        alt: "Meenakshi Amman Temple Madurai",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/include/footer/tamil-nadu-tour-packages.jpg",
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
        details:
          "Arrive Chennai, India's gateway to the South. Check-in to hotel. Evening visit to Marina Beach — one of the longest urban beaches in the world. Welcome dinner. Overnight Chennai.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Chennai → Pondicherry",
        details:
          "Drive to Pondicherry (3 hrs). Explore the charming French Quarter — colonial heritage buildings, Rue Dumas, and French-style cafés. Visit Sri Aurobindo Ashram and the peaceful Auroville. Evening stroll along Promenade Beach. Overnight Pondicherry.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Pondicherry → Chidambaram",
        details:
          "Drive to Chidambaram. Visit the magnificent Nataraja Temple — one of the Pancha Bootha Stalams (five elemental Shiva shrines). Witness the elaborate puja rituals dedicated to Lord Shiva as the Cosmic Dancer. Drive onwards to Rameswaram. Overnight en route / Rameswaram.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Rameswaram — Sacred Island",
        details:
          "Full day at the sacred Pamban Island. VIP Darshan at Ramanathaswamy Temple — sacred dip at the 22 Theerthams (holy water bodies). Visit Dhanushkodi beach ruins and enjoy the surreal landscape. Sunset at the tip of the Indian subcontinent. Overnight Rameswaram.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Rameswaram → Kanyakumari",
        details:
          "Drive to Kanyakumari — the southernmost tip of India. Witness the iconic confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean. Visit Kumari Amman Temple and Vivekananda Rock Memorial. Famous Kanyakumari sunset. Overnight Kanyakumari.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Kanyakumari → Madurai",
        details:
          "Drive to Madurai — the Temple City of South India. Afternoon visit to the awe-inspiring Meenakshi Amman Temple with 14 Gopurams. Attend the special night ceremony where deities are put to sleep — Palliyarai Pooja. Overnight Madurai.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Madurai → Trichy",
        details:
          "Morning visit to Thiruparankundram Murugan Temple. Drive to Trichy. Climb Rock Fort Temple at sunset for panoramic views of the city. Visit Sri Ranganathaswamy Temple at Srirangam — one of the largest functioning Hindu temples in the world. Overnight Trichy.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Trichy → Chennai — Departure",
        details:
          "Morning at leisure. Drive back to Chennai (4–5 hrs) or take a train. Shopping at Chennai's T. Nagar for silk sarees, temple jewellery, and Tanjore art pieces. Transfer to airport / railway station. Tour concludes.",
      },
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
      { label: "Meals", value: "Breakfast & Dinner daily" },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2024/12/chennai-pondicherry-tour.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/12/chennai-pondicherry-tour.jpg",
      alt: "Pondicherry Short Getaway Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Pondicherry is magical — the French cafés, the peaceful ashram, and that golden promenade at sunrise. Perfect 4-day escape from the city. Namaste India Trip got every detail right.",
        author: "Arjun & Deepa Nair",
        date: "Travelled March 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Auroville was a revelation — unlike anywhere in India. The colonial streets of White Town felt like stepping into French history. A truly unique short getaway!",
        author: "Ramesh & Pritha Bose",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/12/chennai-pondicherry-tour.jpg",
        alt: "Pondicherry French Quarter",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/12/chennai-sightseeing-tour.jpg",
        alt: "Chennai City Sightseeing",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/include/footer/tamil-nadu-tour-packages.jpg",
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
        details:
          "Arrive Chennai and transfer to Pondicherry (3 hrs by road). Check in to a boutique French-quarter hotel. Evening stroll along Promenade Beach. Dinner at a beachside restaurant. Overnight Pondicherry.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Pondicherry — French Quarter & Ashram",
        details:
          "Morning visit to Sri Aurobindo Ashram — a centre of spiritual learning and peace. Heritage walk through White Town (French Quarter) — colourful colonial buildings, Rue Dumas, Rue Romain Rolland. Visit Puducherry Museum. Afternoon French bakery trail — Baker Street, Zuka, Bouche Sucrée. Overnight Pondicherry.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Auroville & Pondicherry Beaches",
        details:
          "Morning visit to Auroville — the universal township and the golden Matri Mandir (meditation centre). Afternoon at Serenity Beach and Paradise Beach. Optional watersports at Promenade Beach. Sunset at Rock Beach. Overnight Pondicherry.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Pondicherry → Chennai — Departure",
        details:
          "Morning at leisure; coffee at a French café. Drive back to Chennai. Shopping at Pondy Bazaar or T. Nagar for souvenirs. Transfer to Chennai airport / railway station. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      { label: "Destinations", value: "Chennai · Pondicherry · Auroville" },
      { label: "Departure & Return", value: "Chennai" },
      { label: "Tour Code", value: "TN-PONDY-CHN-04" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
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
    img: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
    popular: false,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Waves, label: "Beach", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
      alt: "Kovalam Varkala Beach Holiday",
    },

    testimonials: [
      {
        id: 1,
        text: "Varkala's cliffs above the sea are unlike anything in India — dramatic, peaceful, breathtaking. The Poovar backwater cruise was the hidden gem of the trip. Loved every moment.",
        author: "Nikhil & Priya Menon",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kovalam is paradise for beach lovers. The Lighthouse Beach sunset and fresh seafood made it unforgettable. NIT's planning was seamless from start to finish.",
        author: "Sanjay & Anitha Pillai",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
        alt: "Kovalam Beach Kerala",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Beaches-Tour-Package.png",
        alt: "Varkala Cliff Beach",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Incredible-Kerala-Tour-Package.png",
        alt: "Poovar Backwaters",
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
        details:
          "Arrive Trivandrum (TRV). Check-in to hotel. Visit Padmanabhaswamy Temple, Napier Museum, and Kuthiramalika Palace. Evening Kathakali dance performance. Overnight Trivandrum.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Trivandrum → Kovalam",
        details:
          "Transfer to Kovalam Beach (16 km). Check-in to a beach resort. Spend the day at Lighthouse Beach and Hawa Beach. Sunset at the iconic Kovalam Lighthouse. Fresh seafood dinner by the sea. Overnight Kovalam.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Kovalam → Varkala",
        details:
          "Drive to Varkala (54 km). Check-in to a cliff-top resort. Explore the dramatic red laterite cliffs with views of the Arabian Sea. Visit Janardhanaswamy Temple (2000-year-old coastal temple). Cliff walk at sunset. Overnight Varkala.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Varkala → Poovar",
        details:
          "Drive to Poovar (50 km). Boat cruise through Poovar backwaters — mangroves, estuary, and Golden Island beach (accessible only by boat). Ayurvedic massage at the resort. Evening at leisure by the sea. Overnight Poovar.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Poovar → Trivandrum — Departure",
        details:
          "Morning at leisure on Golden Island beach. Transfer back to Trivandrum. Shopping at Chalai Bazaar for spices, handicrafts, and Kerala textiles. Transfer to airport / railway station. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      {
        label: "Destinations",
        value: "Trivandrum · Kovalam · Varkala · Poovar",
      },
      { label: "Departure & Return", value: "Trivandrum Airport (TRV)" },
      { label: "Tour Code", value: "KER-BEACH-TRV-05" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Beaches-Tour-Package.png",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Waves, label: "Beach", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      { title: "Alleppey Houseboat Cruise — Kerala's Famous Backwaters" },
      { title: "Kathakali Performance in Cochin — Classical Kerala Dance" },
      { title: "Varkala Cliff Sunset & Kovalam Lighthouse Beach" },
      { title: "Chinese Fishing Nets of Fort Kochi — Iconic Kerala Heritage" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Beaches-Tour-Package.png",
      alt: "Kerala Beaches and Backwaters Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "The Alleppey houseboat was the highlight of our trip — sleeping on the backwaters with nothing but stars above you. Kerala is truly God's Own Country. NIT made it effortless.",
        author: "Ravi & Sunita Chandran",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the Chinese fishing nets of Kochi to the cliff-top sunsets of Varkala — 7 days, 5 destinations, and countless memories. Expertly planned by Namaste India Trip.",
        author: "Anand & Kavitha Iyer",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Beaches-Tour-Package.png",
        alt: "Kerala Backwaters Houseboat",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Incredible-Kerala-Tour-Package.png",
        alt: "Alleppey Backwaters Kerala",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
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
        details:
          "Arrive Cochin (COK). Check-in to hotel. Evening visit to Fort Kochi — Chinese fishing nets, Santa Cruz Basilica, and Mattancherry Dutch Palace. Kathakali dance performance. Overnight Cochin.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin Sightseeing",
        details:
          "Morning cruise of the Cochin harbour. Visit Cherai Beach, Bolghatty Palace, and Willingdon Island. Afternoon at the famous Jew Town antique shops and Paradesi Synagogue. Overnight Cochin.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Cochin → Alleppey — Houseboat",
        details:
          "Drive to Alleppey (1.5 hrs). Board a traditional Kerala houseboat — cruise through the famous backwaters, paddy fields, village life, coconut groves, and canals. Enjoy Kerala meals on board. Overnight on houseboat.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Alleppey → Varkala",
        details:
          "Disembark houseboat. Drive to Varkala (2 hrs). Check-in to cliff-top resort. Explore North Cliff, Janardhanaswamy Temple, and unique mineral springs. Sunset from the dramatic laterite cliffs above the Arabian Sea. Overnight Varkala.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Varkala → Kovalam",
        details:
          "Drive to Kovalam (54 km). Check-in to beach resort. Spend the afternoon at Lighthouse Beach and Samudra Beach. Optional water sports — jet ski, parasailing, surfing. Overnight Kovalam.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Kovalam → Trivandrum",
        details:
          "Drive to Trivandrum (16 km). Visit Padmanabhaswamy Temple, Napier Museum, and Kuthiramalika Palace Museum. Evening Ayurvedic massage. Farewell dinner. Overnight Trivandrum.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Trivandrum — Departure",
        details:
          "Morning at leisure. Shopping at Chalai Bazaar for Kerala spices, cashews, and handicrafts. Transfer to Trivandrum airport. Tour concludes.",
      },
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
        value: "Breakfast & Dinner daily; All meals on houseboat",
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

  {
    id: 302,
    country: "India",
    place: "Kedarnath",
    title: "Badrinath Kedarnath Do Dham Yatra Tour Package",
    type: "Religious yatras",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Haridwar → Haridwar",
    destinations: ["Haridwar", "Kedarnath", "Badrinath"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 24900,
    rating: 4.8,
    reviews: 210,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Badri-kedar_t78tkd.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Darshan at Kedarnath Temple — One of the 12 Sacred Jyotirlingas of Lord Shiva",
      },
      { title: "Darshan of Badri Vishal — Atop the Himalayas at 3,133 m" },
      {
        title:
          "Ganga Aarti at Haridwar Har Ki Pauri Ghat — Spectacular Evening Ritual",
      },
      {
        title:
          "Scenic Himalayan Drive through Rishikesh, Devprayag & Rudraprayag Confluences",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Badri-kedar_t78tkd.jpg",
      alt: "Badrinath Kedarnath Do Dham Yatra",
    },

    testimonials: [
      {
        id: 1,
        text: "The Kedarnath darshan in the early morning fog was one of the most spiritually profound moments of my life. NIT's team handled the entire trek logistics, aarti passes, and stay without a single hitch.",
        author: "Sudhir & Malati Joshi",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Attending Ganga Aarti at Har Ki Pauri and then doing Badri Vishal darshan at sunset — this Do Dham tour touched my soul. Well organized and very comfortable even for seniors.",
        author: "Krishnamurthy & Saroja Rao",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Badri-kedar_t78tkd.jpg",
        alt: "Badrinath Kedarnath Do Dham",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/01/Kedarnath-min.jpg",
        alt: "Kedarnath Temple Snow",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/01/Badrinath-min.jpg",
        alt: "Badrinath Temple",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Badrinath Kedarnath Do Dham Yatra" },
    ],

    badges: [
      { label: "DO DHAM YATRA", variant: "solid" as const, color: "orange" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 3,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Haridwar", nights: 1 },
      { city: "Guptkashi / Kedarnath Base", nights: 2 },
      { city: "Kedarnath", nights: 1 },
      { city: "Badrinath", nights: 2 },
      { city: "Haridwar (Return)", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Haridwar",
        details:
          "Arrive Haridwar. Check-in to hotel. Evening at Har Ki Pauri for the magnificent Ganga Aarti — one of India's most mesmerizing spiritual spectacles. Overnight Haridwar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Haridwar → Guptkashi",
        details:
          "Drive to Guptkashi (220 km / ~7 hrs) via Rishikesh, Devprayag, and Rudraprayag. Scenic mountain drives along the Alaknanda and Mandakini rivers. Check-in at Guptkashi. Evening visit to Vishwanath Temple at Guptkashi. Overnight Guptkashi.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Guptkashi → Kedarnath",
        details:
          "Early start. Drive to Gaurikund (30 km). Begin the 18 km trek to Kedarnath (or hire a pony / palki). Check-in at Kedarnath. Afternoon darshan at the sacred Kedarnath Temple — one of the 12 Jyotirlingas. Evening Rudrabhishek Aarti. Overnight Kedarnath.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Kedarnath → Guptkashi",
        details:
          "Early morning Kedarnath Darshan at sunrise — ethereal experience in the Himalayan snow. Trek back down to Gaurikund. Drive to Guptkashi. Rest and overnight Guptkashi.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Guptkashi → Badrinath",
        details:
          "Drive from Guptkashi to Badrinath (180 km / ~6 hrs) via Chopta and Joshimath. Arrive Badrinath. Check-in to hotel near the temple. Evening Darshan at Badri Vishal (Lord Vishnu). Evening Aarti. Overnight Badrinath.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Badrinath — Sightseeing",
        details:
          "Morning Abhishek Puja at Badrinath Temple. Visit Mana Village — last Indian village before the Tibet border. See Bhim Pul, Vasudhara Waterfall, and Vyas Gufa. Saraswati River origin point. Overnight Badrinath.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Badrinath → Rudraprayag",
        details:
          "Return drive from Badrinath. Stop at Vishnuprayag, Nandaprayag, and Karnaprayag — confluence points of the sacred Himalayan rivers. Overnight at Rudraprayag / Srinagar.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Rudraprayag → Haridwar — Departure",
        details:
          "Drive back to Haridwar via Rishikesh. Last dip at Har Ki Pauri Ghat. Transfer to railway station / airport. Do Dham Yatra concludes with blessings of Kedarnath and Badrinath.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Haridwar · Guptkashi · Kedarnath · Badrinath · Mana Village",
      },
      { label: "Departure & Return", value: "Haridwar" },
      { label: "Tour Code", value: "UK-DODHAM-HRW-08" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
      { label: "Best Time", value: "May–June & September–October" },
      {
        label: "Group Size",
        value: "Families, Senior Citizens, Devotees — Private & Group",
      },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 303,
    country: "India",
    place: "Badrinath",
    title: "Char Dham Yatra Package from Delhi",
    type: "Religious yatras",
    duration: "12 Days / 11 Nights",
    durationTag: "12 Days",
    startEnd: "Delhi → Delhi",
    destinations: [
      "Delhi",
      "Rishikesh",
      "Yamunotri",
      "Gangotri",
      "Kedarnath",
      "Badrinath",
    ],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 43900,
    rating: 4.9,
    reviews: 312,
    badge: "Top Rated",
    badgeColor: "bg-yellow-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Chardham-Yatra-Package-from-Delhi.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title: "Ganga Aarti at Har Ki Pauri Haridwar & Rishikesh Triveni Ghat",
      },
      {
        title:
          "Darshan at All Four Sacred Dhams — Yamunotri, Gangotri, Kedarnath & Badrinath",
      },
      {
        title:
          "Visit Mana Village — Last Indian Village on the Indo-Tibet Border",
      },
      { title: "Samadhi of Adi Shankaracharya at Kedarnath & Kempty Falls" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Chardham-Yatra-Package-from-Delhi.jpg",
      alt: "Char Dham Yatra Package from Delhi",
    },

    testimonials: [
      {
        id: 1,
        text: "The best decision to choose Namaste India Trip for our Chardham Yatra. Affordable package with excellent accommodations and transport. Spiritually fulfilling and an experience to return to.",
        author: "Mr Ramesh Rao and group",
        date: "Travelled March 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Chardham Yatra with NIT was truly excellent! Hotels were comfortable, food was great. Travelling with like-minded pilgrims made it all the more fulfilling. Guides were knowledgeable and ensured a smooth journey.",
        author: "Mr. Padmanaban and family",
        date: "Travelled March 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/Chardham-Yatra-Package-from-Delhi.jpg",
        alt: "Chardham Yatra from Delhi",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/01/Kedarnath-min.jpg",
        alt: "Kedarnath Temple",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/01/Gangotri-min.jpg",
        alt: "Gangotri Dham",
      },
      {
        id: 4,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/01/Badrinath-min.jpg",
        alt: "Badrinath Temple",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Char Dham", href: "/india/uttarakhand/chardham" },
      { label: "Char Dham Yatra Package from Delhi" },
    ],

    badges: [
      { label: "CHAR DHAM", variant: "solid" as const, color: "orange" },
      { label: "12 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 12,
    countryCount: 1,
    cityCount: 6,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Haridwar / Rishikesh", nights: 1 },
      { city: "Yamunotri (Kharsali)", nights: 1 },
      { city: "Gangotri (Harsil)", nights: 1 },
      { city: "Kedarnath (Guptkashi)", nights: 2 },
      { city: "Badrinath", nights: 2 },
      { city: "Haridwar", nights: 1 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Haridwar",
        details:
          "Drive from Delhi to Haridwar (210 km / ~5 hrs). Check-in. Evening Ganga Aarti at Har Ki Pauri — one of India's most spiritual spectacles. Overnight Haridwar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Haridwar → Rishikesh → Barkot",
        details:
          "Visit Triveni Ghat in Rishikesh. Drive to Barkot (210 km) via Kempty Falls, Mussoorie viewpoints, and Yamuna Valley. Overnight Barkot.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Barkot → Yamunotri → Barkot",
        details:
          "Drive to Janki Chatti (50 km). Trek 6 km to Yamunotri Temple or take a pony/palki. Darshan of Goddess Yamuna. Dip in Surya Kund hot spring. Return to Barkot. Overnight Barkot.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Barkot → Uttarkashi (Gangotri)",
        details:
          "Drive to Uttarkashi (100 km). En route visit Vishwanath Temple. Drive to Gangotri (100 km). Darshan at Gangotri Temple dedicated to Goddess Ganga. Overnight Gangotri / Harsil.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Gangotri → Guptkashi",
        details:
          "Drive from Gangotri to Guptkashi (220 km via Uttarkashi and Tehri). Scenic route through the Himalayan valleys. Overnight Guptkashi.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Guptkashi → Kedarnath",
        details:
          "Drive to Gaurikund (30 km). Trek or pony ride 18 km to Kedarnath. VIP Darshan at Kedarnath Jyotirlinga Temple. Visit Samadhi of Adi Shankaracharya. Overnight Kedarnath.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Kedarnath → Guptkashi",
        details:
          "Morning Kedarnath Abhishek Puja. Trek down to Gaurikund. Drive back to Guptkashi. Rest and overnight.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Guptkashi → Badrinath",
        details:
          "Drive to Badrinath (180 km) via Joshimath. Arrive Badrinath. Evening Darshan at Badri Vishal. Attend Aarti at the temple. Overnight Badrinath.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Badrinath — Sightseeing",
        details:
          "Abhishek Puja at Badrinath. Visit Mana Village — India's last village before Tibet. Bhim Pul, Vasudhara Waterfall, Vyas Gufa, Ganesh Gufa. Overnight Badrinath.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Badrinath → Rudraprayag",
        details:
          "Drive back via Joshimath, Vishnuprayag, and Nandaprayag — holy river confluences. Overnight Rudraprayag.",
      },
      {
        day: 11,
        date: "Day 11",
        title: "Rudraprayag → Haridwar",
        details:
          "Drive back to Haridwar via Devprayag and Rishikesh. Final dip at Har Ki Pauri. Evening Ganga Aarti. Overnight Haridwar.",
      },
      {
        day: 12,
        date: "Day 12",
        title: "Haridwar → Delhi — Departure",
        details:
          "Drive back to Delhi (210 km / ~5 hrs). Tour concludes with the divine blessings of all four Dhams.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "12 Days / 11 Nights" },
      {
        label: "Destinations",
        value:
          "Delhi · Haridwar · Rishikesh · Yamunotri · Gangotri · Kedarnath · Badrinath · Mana Village",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "UK-CHARDHAM-DEL-12" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
      { label: "Best Time", value: "May–June & September–October" },
      {
        label: "Group Size",
        value: "All types — Private & Group options available",
      },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 305,
    country: "India",
    place: "Vaishno Devi",
    title: "Mata Vaishno Devi Pilgrimage Yatra Package",
    type: "Religious yatras",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Katra",
    destinations: ["Delhi", "Jammu", "Katra", "Vaishno Devi"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 14900,
    rating: 4.7,
    reviews: 196,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2019/06/vaishno-devi.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Darshan at Mata Vaishno Devi Cave Shrine — 14 km Sacred Trek from Katra",
      },
      { title: "Bhawan Aarti — Spiritual Experience inside the Holy Cave" },
      { title: "Shiv Khori Temple & Banganga Kund En Route" },
      { title: "Raghunath Temple & Bahu Fort Sightseeing in Jammu" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/06/vaishno-devi.jpg",
      alt: "Mata Vaishno Devi Pilgrimage Yatra",
    },

    testimonials: [
      {
        id: 1,
        text: "Mata's darshan in the holy cave was a life-changing experience. The 14 km trek felt effortless because of the spiritual energy around. NIT arranged our yatra pass, pony service, and hotel all seamlessly.",
        author: "Rakesh & Sunita Sharma",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We are senior citizens and NIT customized the trek support with pony and battery vehicle rides. The cave darshan at night was absolutely divine. Highly recommended for all devotees.",
        author: "Rajendra & Kamla Gupta",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2019/06/vaishno-devi.jpg",
        alt: "Vaishno Devi Cave Shrine",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/include/footer/uttar-pradesh-tour-packages.jpg",
        alt: "Katra Base Camp",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/include/footer/uttarakhand-tour-packages.jpg",
        alt: "Jammu Raghunath Temple",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Jammu & Kashmir", href: "/india/jammu-kashmir" },
      { label: "Mata Vaishno Devi Pilgrimage Yatra" },
    ],

    badges: [
      { label: "PILGRIMAGE", variant: "solid" as const, color: "orange" },
      { label: "4 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 4,
    region: "Jammu & Kashmir, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Jammu", nights: 1 },
      { city: "Katra", nights: 1 },
      { city: "Vaishno Devi Bhawan", nights: 1 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Jammu (Overnight Train / Drive)",
        details:
          "Depart Delhi for Jammu by overnight train or AC vehicle. Arrive Jammu in the morning. Visit Raghunath Temple and Bahu Fort. Afternoon drive to Katra (50 km). Check-in to hotel near the base camp. Register for the Vaishno Devi Yatra. Overnight Katra.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Katra → Vaishno Devi Bhawan",
        details:
          "Begin the 14 km trek from Katra to Bhawan (or take a pony / battery vehicle). En route: Banganga Kund, Charan Paduka, Adhkwari (optional), Sanjhi Chatt helipad, Bhawan. Darshan at Mata Vaishno Devi Cave Shrine — three Pindis (Maha Kali, Maha Lakshmi, Maha Saraswati). Evening Aarti at Bhawan. Overnight at Bhawan / Katra.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Vaishno Devi → Shiv Khori → Katra",
        details:
          "Early morning optional visit to Bhairon Baba Temple (3 km beyond Bhawan — completing the yatra). Trek down to Katra. Afternoon drive to Shiv Khori Temple — a natural cave shrine dedicated to Lord Shiva with a 200 m long cave. Return to Katra. Overnight Katra.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Katra → Jammu → Delhi — Departure",
        details:
          "Morning at leisure. Drive to Jammu (50 km). Shopping at Raghunath Bazaar for dry fruits, Kashmiri shawls, and souvenirs. Board train / flight back to Delhi. Yatra concludes with Mata's blessings.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jammu · Katra · Vaishno Devi Bhawan · Shiv Khori",
      },
      { label: "Departure & Return", value: "Delhi → Katra" },
      { label: "Tour Code", value: "JK-VAISHNO-DEL-04" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
      { label: "Best Time", value: "March–June & September–November" },
      {
        label: "Group Size",
        value: "Families, Senior Citizens, Solo Devotees — Private & Group",
      },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 306,
    country: "India",
    place: "Amritsar",
    title: "Golden Temple Amritsar Spiritual Tour Package",
    type: "Religious yatras",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Delhi → Amritsar",
    destinations: ["Delhi", "Amritsar", "Wagah Border", "Jallianwala Bagh"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 12500,
    rating: 4.8,
    reviews: 154,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/include/footer/uttarakhand-tour-packages.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Golden Temple (Harmandir Sahib) — Pre-dawn Palki Sahib Procession & Amrit Vela",
      },
      {
        title:
          "Wagah Border Beating Retreat Ceremony — Electrifying Patriotic Spectacle",
      },
      { title: "Jallianwala Bagh Memorial — Solemn & Moving Historic Site" },
      {
        title:
          "Langar at the Golden Temple — World's Largest Free Community Kitchen",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/footer/uttarakhand-tour-packages.jpg",
      alt: "Golden Temple Amritsar Spiritual Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "The pre-dawn Amrit Vela at the Golden Temple was transcendently peaceful — the reflection in the Sarovar, the kirtan echoing across the water. Jallianwala Bagh moved us to tears. An unforgettable 4 days.",
        author: "Vikram & Harpreet Singh",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Wagah Border ceremony is something every Indian must witness. The patriotic fervour, the march, the crowd — incredible! NIT arranged front-row seats and brilliant logistics.",
        author: "Srinath & Meenakshi Iyer",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/footer/uttarakhand-tour-packages.jpg",
        alt: "Golden Temple Amritsar",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/tajmahal-agra.jpg",
        alt: "Wagah Border Ceremony",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/include/footer/uttar-pradesh-tour-packages.jpg",
        alt: "Jallianwala Bagh Amritsar",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Punjab", href: "/india/punjab" },
      { label: "Golden Temple Amritsar Spiritual Tour" },
    ],

    badges: [
      { label: "SPIRITUAL TOUR", variant: "solid" as const, color: "yellow" },
      { label: "4 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 4,
    region: "Punjab, India",

    itineraryStops: [
      { city: "Delhi", nights: 0 },
      { city: "Amritsar", nights: 3 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Delhi → Amritsar",
        details:
          "Depart Delhi for Amritsar by Shatabdi Express or AC vehicle (5–6 hrs). Check-in to hotel. Evening visit to the magnificent Golden Temple (Harmandir Sahib). Witness the Palki Sahib procession — the ceremonial return of the Guru Granth Sahib to the inner sanctum. Overnight Amritsar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Amritsar — Golden Temple & Sightseeing",
        details:
          "4 AM Amrit Vela visit to the Golden Temple — the most peaceful and spiritual time of the day. Participate in the Langar (free community kitchen — feeds 100,000+ people daily). Visit Akal Takht, the highest temporal seat of Sikh authority. Morning visit to Jallianwala Bagh Memorial. Afternoon at Ram Bagh Gardens and Maharaja Ranjit Singh Museum. Overnight Amritsar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Amritsar — Wagah Border Ceremony",
        details:
          "Morning visit to Durgiana Temple (the Hindu counterpart to the Golden Temple). Visit Partition Museum — India's first museum dedicated to the 1947 Partition. Afternoon drive to Wagah Border (30 km). Witness the iconic Beating Retreat Ceremony — electrifying display of patriotism with BSF soldiers. Return to Amritsar. Overnight Amritsar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Amritsar → Delhi — Departure",
        details:
          "Morning visit to Gobindgarh Fort. Shopping at Hall Bazaar and Lawrence Road for Punjabi juttis, phulkari dupattas, and Amritsari papad. Transfer to Amritsar railway station / airport. Return to Delhi. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Amritsar · Wagah Border · Jallianwala Bagh",
      },
      { label: "Departure & Return", value: "Delhi → Amritsar" },
      { label: "Tour Code", value: "PB-GOLDEN-DEL-04" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
      { label: "Best Time", value: "October–March" },
      {
        label: "Group Size",
        value: "Families, Couples, Solo, Senior Citizens — Private & Group",
      },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─── PURI / JAGANNATH ───────────────────────────────────────────────────────

  {
    id: 307,
    country: "India",
    place: "Puri",
    title: "Bhubaneswar Puri Konark Jagannath Temple Tour",
    type: "Religious yatras",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Bhubaneswar → Bhubaneswar",
    destinations: ["Bhubaneswar", "Konark", "Puri"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 12900,
    rating: 4.6,
    reviews: 98,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-6.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Darshan at Shri Jagannath Temple Puri — One of the 4 Sacred Dhams of India",
      },
      {
        title:
          "Konark Sun Temple — UNESCO World Heritage Site & One of 7 Wonders of India",
      },
      {
        title:
          "Chilika Lake Boat Ride — Asia's Largest Brackish Lagoon & Irrawaddy Dolphins",
      },
      {
        title:
          "Lingaraj, Mukteshwar & Rajarani Temples — Bhubaneswar's Ancient Temple Trail",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-6.jpg",
      alt: "Bhubaneswar Puri Konark Jagannath Temple Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "The Jagannath Temple darshan was a deeply moving spiritual experience. Konark's Sun Temple left us speechless — the architecture is beyond imagination. Chilika Lake with dolphins was the perfect bonus. NIT made every detail seamless.",
        author: "Sourabh Chouhan & Family",
        date: "Travelled January 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Orissa is truly the soul of India — its temples, beaches, and the Chilika Lake experience were all exceptional. The itinerary was perfectly paced for our senior parents. Hotels and transport were very comfortable.",
        author: "Krishnan & Saroja Pillai",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/top-selling-nit-tour-6.jpg",
        alt: "Jagannath Temple Puri",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/2.3-Konark-sun-temple-1.jpg",
        alt: "Konark Sun Temple",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/3.1-Chilka-lake.jpg",
        alt: "Chilika Lake Boat Ride",
      },
      {
        id: 4,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/1.2-lingaraj-temple.jpg",
        alt: "Lingaraj Temple Bhubaneswar",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Odisha", href: "/india/odisha" },
      { label: "Bhubaneswar Puri Konark Jagannath Temple Tour" },
    ],

    badges: [
      { label: "PILGRIMAGE", variant: "solid" as const, color: "orange" },
      { label: "4 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 4,
    countryCount: 1,
    cityCount: 3,
    region: "Odisha, India",

    itineraryStops: [
      { city: "Bhubaneswar", nights: 1 },
      { city: "Puri", nights: 2 },
      { city: "Bhubaneswar (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Bhubaneswar — Temple Trail",
        details:
          "Arrive Bhubaneswar airport / railway station. Met by NIT representative and transferred to hotel. Check-in and freshen up. Afternoon full-day Bhubaneswar temple tour — Lingaraj Temple, Mukteshwar Temple, Parshuram Temple, Rajarani Temple, Kedargouri Temple, and the serene Bindusagar Lake. Overnight Bhubaneswar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Bhubaneswar → Dhauli → Pipli → Konark → Puri",
        details:
          "Post-breakfast, drive via the peaceful Buddhist stupa at Dhauli and the appliqué craft village of Pipli. Visit the iconic Konark Sun Temple (UNESCO World Heritage Site & Black Pagoda). Continue to Chandrabhaga Beach. Stop at Ramchandi Temple en route. Arrive Puri and check in to beach hotel. Evening VIP Darshan at Shri Jagannath Temple. Overnight Puri.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Puri — Chilika Lake & Golden Beach",
        details:
          "Morning excursion to Chilika Lake — Asia's largest brackish water lagoon. Boat ride to spot Irrawaddy dolphins and thousands of migratory birds. Visit Kalijai Island Temple on the lake. Return to Puri for the afternoon. Sunset at Golden Beach — one of India's most beautiful beaches. Overnight Puri.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Puri → Bhubaneswar — Departure",
        details:
          "Breakfast at hotel. Drive back to Bhubaneswar. Shopping for Pattachitra paintings, Odissi craft, and local handicrafts. Transfer to Bhubaneswar airport / railway station. Tour concludes with the blessings of Lord Jagannath.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "4 Days / 3 Nights" },
      {
        label: "Destinations",
        value: "Bhubaneswar · Dhauli · Pipli · Konark · Puri · Chilika Lake",
      },
      {
        label: "Departure & Return",
        value: "Bhubaneswar Airport / Railway Station",
      },
      { label: "Tour Code", value: "OD-PURI-BHB-04" },
      { label: "Meals", value: "Breakfast daily" },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Families, Pilgrims, Solo — Private Tour" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─── RISHIKESH / YOGA ───────────────────────────────────────────────────────

  {
    id: 308,
    country: "India",
    place: "Rishikesh",
    title: "Yoga & Meditation Tour of India — Rishikesh",
    type: "Religious yatras",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Delhi → Rishikesh → Delhi",
    destinations: ["Delhi", "Haridwar", "Rishikesh"],
    amenities: ["Hotel", "Meals", "Transfers", "Yoga Classes"],
    price: 70819,
    rating: 4.8,
    reviews: 143,
    badge: "Trending",
    badgeColor: "bg-green-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/yoga-rishikesh.jpg",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Leaf, label: "Yoga & Spa", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Daily Yoga & Meditation Classes with Professional Trainer in Rishikesh",
      },
      {
        title:
          "Ganga Aarti at Har Ki Pauri Haridwar — India's Most Sacred Evening Ritual",
      },
      {
        title:
          "Vashishtha Cave Trek & Neer Garh Waterfall — Himalayan Nature Walk",
      },
      {
        title:
          "River Rafting on the Ganga — Roller Coaster, Return to Sender Rapids",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/yoga-rishikesh.jpg",
      alt: "Yoga and Meditation Tour Rishikesh",
    },

    testimonials: [
      {
        id: 1,
        text: "The morning yoga sessions overlooking the Ganga were transformative. The Ganga Aarti at Haridwar and the Vashishtha Cave meditation — this trip genuinely reset my mind and soul. NIT's planning was flawless.",
        author: "Vanita Jashnani",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "River rafting by day, Ayurvedic spa by evening, and yoga at dawn — Rishikesh is the perfect wellness destination. The Himalayan air and the Ganga's energy are incomparable. Thank you NIT for an exceptional experience.",
        author: "Rao Yagneswar & Family",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/yoga-rishikesh.jpg",
        alt: "Yoga at Rishikesh",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/include/himalayan-sojourn_rlqkkz.jpg",
        alt: "Haridwar Ganga Aarti",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/include/footer/uttarakhand-tour-packages.jpg",
        alt: "River Rafting Rishikesh",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Uttarakhand", href: "/india/uttarakhand" },
      { label: "Yoga & Meditation Tour — Rishikesh" },
    ],

    badges: [
      { label: "YOGA & WELLNESS", variant: "solid" as const, color: "green" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 3,
    region: "Uttarakhand, India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Haridwar", nights: 1 },
      { city: "Rishikesh", nights: 3 },
      { city: "Delhi (Return)", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Delhi",
        details:
          "Arrive Delhi International Airport. Meet and greet by NIT representative. Transfer to hotel. Evening at Delhi Haat or Connaught Place for a feel of the city. Overnight Delhi.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Delhi → Haridwar — Ganga Aarti",
        details:
          "Post-breakfast, drive to Haridwar (210 km / ~5 hrs). En route, cross the lush Himalayan foothills. Check-in to hotel. Evening attend the magnificent Ganga Aarti at Har Ki Pauri — the divine gateway to god. Overnight Haridwar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Haridwar → Rishikesh — Yoga Capital",
        details:
          "Morning Haridwar temple tour — Mansa Devi, Chandi Devi, Maya Devi, Bharat Mata Temple, and Sapt Rishi Ashram. Evening Ganga Aarti at Har Ki Pauri. Drive to Rishikesh (20 km). Check-in. Evening walk on Ram Jhula and Lakshman Jhula. Overnight Rishikesh.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Rishikesh — Yoga, Vashishtha Cave & Waterfall Trek",
        details:
          "Early morning Yoga and Meditation session with a professional trainer by the Ganga. Post-breakfast trek to Vashishtha Cave — where sage Vasistha meditated on the banks of the holy Ganga. Visit Neer Garh Waterfall — a scenic 30-minute forest walk. Evening Meditation session. Overnight Rishikesh.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Rishikesh — River Rafting & Ayurvedic Spa",
        details:
          "Morning Yoga session. Post-breakfast: thrilling Ganga river rafting — navigate rapids like Roller Coaster, Return to Sender, Golf Course, and Three Blind Mice. Optional cliff jumping and body surfing. Afternoon: Ayurvedic spa treatment and Panchakarma session at the resort. Evening crystal healing and meditation. Overnight Rishikesh.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Rishikesh → Delhi — Departure",
        details:
          "Final sunrise Yoga session. Breakfast. Drive back to Delhi (5–6 hrs). Shopping at Rishikesh for Ayurvedic products, yoga gear, rudraksha, and spiritual souvenirs. Transfer to Delhi airport. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value:
          "Delhi · Haridwar · Rishikesh · Vashishtha Cave · Neer Garh Waterfall",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "UK-YOGA-DEL-06" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
      {
        label: "Best Time",
        value: "October–June (avoid monsoon July–September)",
      },
      {
        label: "Group Size",
        value: "Solo, Couples, Small Groups — Private & Group options",
      },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Palace Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      alt: "Majestic Royal Rajasthan Tour Udaipur",
    },

    testimonials: [
      {
        id: 1,
        text: "Udaipur at sunset from a boat on Lake Pichola — one of the most beautiful sights I have ever seen. The palace hotel stay was extraordinary. NIT's Royal Rajasthan tour is truly worthy of its name.",
        author: "Manisha Dalvi & Family",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the pink city of Jaipur to the blue city of Jodhpur and the lake city of Udaipur — this tour is Rajasthan at its absolute finest. The elephant ride at Amber Fort and the camel safari were unforgettable.",
        author: "Kanchan Jorwal",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Royal Rajasthan Udaipur",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
        alt: "Hawa Mahal Jaipur",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/khajirao-temple.jpg",
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
        details:
          "Arrive Delhi. Transfer to hotel. Evening at leisure — optional visit to India Gate, Rajpath, or Connaught Place. Welcome dinner. Overnight Delhi.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Delhi → Jaipur — Pink City",
        details:
          "Drive to Jaipur (280 km / ~5 hrs). Check-in to palace/heritage hotel. Afternoon visit Hawa Mahal (Palace of Winds) and Jantar Mantar (UNESCO astronomical observatory). Evening at Chokhi Dhani — Rajasthani village experience, folk dances, and dinner. Overnight Jaipur.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur — Amber Fort & City Palace",
        details:
          "Morning elephant ride to Amber Fort — explore the Sheesh Mahal (Mirror Palace) and Diwan-i-Khas. Visit Jaigarh Fort and panoramic views of Jaipur. Afternoon at City Palace Museum and Maharaja's art collection. Evening at Johari Bazaar for gems and jewellery shopping. Overnight Jaipur.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Jaipur — Day at Leisure / Pushkar Excursion",
        details:
          "Option A: Day at leisure in Jaipur — visit Nahargarh Fort at sunset. Option B: Full-day excursion to Pushkar (150 km) — visit the only Brahma Temple in India, bathe at Pushkar Lake Ghats. Return to Jaipur. Overnight Jaipur.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Jaipur → Jodhpur — Blue City",
        details:
          "Drive to Jodhpur (340 km / ~5 hrs). Check-in. Afternoon visit Mehrangarh Fort — one of India's largest and most majestic forts, with sweeping views of the Blue City. Explore Jaswant Thada cenotaph. Overnight Jodhpur.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jodhpur — Old City & Clock Tower",
        details:
          "Morning visit Umaid Bhawan Palace (part-royal residence, part-museum, part-luxury hotel). Explore the vibrant Sardar Market at Ghanta Ghar (Clock Tower). Spice market and blue-house walking tour of Old Jodhpur. Rajasthani thali dinner. Overnight Jodhpur.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Jodhpur → Udaipur — City of Lakes",
        details:
          "Drive to Udaipur (250 km / ~4.5 hrs). Check-in to lake-view heritage hotel. Evening boat ride on Lake Pichola — views of the Lake Palace and City Palace at sunset. Dinner at a rooftop restaurant overlooking the lake. Overnight Udaipur.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Udaipur — City Palace & Jagdish Temple",
        details:
          "Morning visit City Palace Museum — the largest palace complex in Rajasthan. Visit Jagdish Temple (17th century Indo-Aryan architecture). Afternoon Saheliyon Ki Bari (Garden of the Maids of Honour). Evening cultural show at Bagore Ki Haveli — Rajasthani folk dances and puppetry. Overnight Udaipur.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Udaipur — Chittorgarh Excursion",
        details:
          "Full-day excursion to Chittorgarh Fort (110 km) — India's largest fort complex. Visit Vijay Stambha (Tower of Victory), Kirti Stambha, Padmini Palace, and Meera Temple. Return to Udaipur in the evening. Farewell dinner at a palace restaurant. Overnight Udaipur.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Udaipur — Departure",
        details:
          "Morning at leisure. Shopping at Udaipur's Hathi Pol Bazaar for miniature paintings, silver jewellery, and block-printed textiles. Transfer to Udaipur airport (UDR) or railway station. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jaipur · Pushkar · Jodhpur · Udaipur · Chittorgarh",
      },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RJ-ROYAL-DEL-10" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Luxury Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Heart, label: "Honeymoon", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
      alt: "Rajasthan Honeymoon Tour Jaipur Pushkar Udaipur",
    },

    testimonials: [
      {
        id: 1,
        text: "Our Rajasthan honeymoon was a dream come true — the Lake Palace boat ride at sunset, the rooftop dinners in Udaipur, and the romantic Amber Fort elephant ride. NIT planned every romantic detail to perfection.",
        author: "Arjun & Priya Mehta",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Pushkar's sacred lake at dusk, Jaipur's pink palaces, and Udaipur's shimmering Lake Pichola — Rajasthan is the most romantic destination in India. Our NIT honeymoon package exceeded every expectation.",
        author: "Rahul & Deepika Singhania",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
        alt: "Hawa Mahal Jaipur Honeymoon",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Udaipur Lake Palace",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/tajmahal-agra.jpg",
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
        details:
          "Drive / fly from Delhi to Jaipur. Check-in to luxury boutique hotel. Evening visit Hawa Mahal and Jantar Mantar. Candlelight dinner at a rooftop restaurant. Overnight Jaipur.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Jaipur — Amber Fort & City Palace",
        details:
          "Sunrise visit to Nahargarh Fort for panoramic views. Morning elephant ride to Amber Fort — explore the Sheesh Mahal and Sheesh Mahal. Afternoon City Palace and Hawa Mahal photo session. Romantic dinner at a palace restaurant. Overnight Jaipur.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur → Pushkar — Sacred Romantic Town",
        details:
          "Drive to Pushkar (150 km). Check-in to a lake-view boutique hotel. Visit the only Brahma Temple in India. Couple walk around the sacred Pushkar Lake at sunset — 52 ghats and evening lamps. Camel ride at the desert dunes. Romantic dinner. Overnight Pushkar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Pushkar → Udaipur — City of Lakes",
        details:
          "Drive to Udaipur (270 km). Check-in to luxury lake-view hotel. Sunset boat ride on Lake Pichola — floating by the legendary Lake Palace. Candlelight dinner at a rooftop lakeside restaurant. Overnight Udaipur.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Udaipur — City Palace & Romantic Sightseeing",
        details:
          "Morning visit City Palace and Jagdish Temple. Afternoon Saheliyon Ki Bari gardens. Evening Bagore Ki Haveli cultural show — Rajasthani folk dances and puppetry. Private spa and Ayurvedic couple's massage. Farewell dinner by the lake. Overnight Udaipur.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Udaipur — Departure",
        details:
          "Morning at leisure — sunrise views of Lake Pichola from the hotel terrace. Shopping for Rajasthani silver jewellery and miniature paintings. Transfer to Udaipur airport (UDR) or railway station. Fly or drive back to Delhi. Honeymoon tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Destinations", value: "Delhi · Jaipur · Pushkar · Udaipur" },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RJ-HONEY-DEL-06" },
      {
        label: "Meals",
        value: "Breakfast & Dinner daily; Candlelight dinner included",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─── JAIPUR ─────────────────────────────────────────────────────────────────

  {
    id: 403,
    country: "India",
    place: "Jaipur",
    title: "Golden Triangle Tour — Delhi Agra Jaipur",
    type: "Cultural Tour",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Delhi → Jaipur → Delhi",
    destinations: ["Delhi", "Agra", "Fatehpur Sikri", "Mathura", "Jaipur"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 12500,
    rating: 4.8,
    reviews: 326,
    badge: "Bestseller",
    badgeColor: "bg-orange-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/11/4days-golden-triangle-tour.webp",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title: "Taj Mahal Agra at Sunrise — World's Greatest Monument to Love",
      },
      { title: "Rickshaw Ride through Old Delhi's Chandni Chowk Spice Market" },
      {
        title: "Amber Fort Jaipur — Elephant Ride & Sheesh Mahal Mirror Palace",
      },
      {
        title:
          "Fatehpur Sikri — Akbar's Abandoned Mughal Capital (UNESCO Site)",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/11/4days-golden-triangle-tour.webp",
      alt: "Golden Triangle Tour Delhi Agra Jaipur",
    },

    testimonials: [
      {
        id: 1,
        text: "The car was great, our driver Manish was excellent and very patient. The Taj Mahal and the Amber Fort were highlights. When we return to India we would definitely use Namaste India Trip again.",
        author: "Alex de Aboitiz",
        date: "Travelled March 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Excellent management — all hotels were good, food was fresh and tasty, driver was calm. No hurry during sightseeing. Thank you Namaste India Team for making our journey a memorable one.",
        author: "Manisha Dalvi",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/11/4days-golden-triangle-tour.webp",
        alt: "Golden Triangle Delhi Agra Jaipur",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/tajmahal-agra.jpg",
        alt: "Taj Mahal Agra",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
        alt: "Hawa Mahal Jaipur",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Golden Triangle Tour — Delhi Agra Jaipur" },
    ],

    badges: [
      { label: "BESTSELLER", variant: "solid" as const, color: "orange" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 5,
    region: "North India",

    itineraryStops: [
      { city: "Delhi", nights: 2 },
      { city: "Agra", nights: 1 },
      { city: "Fatehpur Sikri", nights: 0 },
      { city: "Jaipur", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Delhi — Old Delhi Exploration",
        details:
          "Arrive Delhi. Transfer to hotel. Afternoon rickshaw ride through Chandni Chowk — the iconic old Delhi spice, silver and textile market. Visit Jama Masjid and Red Fort (exterior). Guided tour of Raj Ghat (Mahatma Gandhi Memorial). Overnight Delhi.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Delhi — New Delhi Monuments",
        details:
          "Morning guided tour of Qutub Minar (UNESCO) and Humayun's Tomb (UNESCO). Afternoon India Gate, Rajpath, Parliament House drive-by. Visit Akshardham Temple and Lotus Temple (exteriors). Evening at Connaught Place. Overnight Delhi.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Delhi → Mathura → Agra",
        details:
          "Drive to Agra (230 km) via Mathura — birthplace of Lord Krishna. Visit Krishna Janmabhoomi Temple and Dwarkadhish Temple in Mathura. Continue to Agra. Check-in to hotel with Taj Mahal view if possible. Evening sunset view of the Taj Mahal from Mehtab Bagh. Overnight Agra.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Agra — Taj Mahal & Fatehpur Sikri",
        details:
          "Sunrise visit to the Taj Mahal — the most beautiful monument in the world. Tonga ride on arrival at Agra Fort (Red Fort of Agra). Drive to Fatehpur Sikri — Akbar's abandoned Mughal capital (UNESCO World Heritage Site). Evening drive to Jaipur (240 km). Overnight Jaipur.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Jaipur — Amber Fort & Pink City",
        details:
          "Morning elephant ride to Amber Fort — explore Sheesh Mahal and Diwan-i-Aam. Visit Jaigarh Fort and City Palace Museum. Hawa Mahal photo stop. Afternoon Jantar Mantar (UNESCO). Evening at Johari Bazaar and Bapu Bazaar for gems and handicraft shopping. Overnight Jaipur.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jaipur → Delhi — Departure",
        details:
          "Morning at leisure. Drive back to Delhi (280 km / ~5 hrs) or take Shatabdi Express. Transfer to Delhi airport for onward travel. Golden Triangle Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Mathura · Agra · Fatehpur Sikri · Jaipur",
      },
      { label: "Departure & Return", value: "Delhi" },
      { label: "Tour Code", value: "GT-CLASSIC-DEL-06" },
      { label: "Meals", value: "Breakfast & Dinner daily" },
      { label: "Best Time", value: "October–March" },
      {
        label: "Group Size",
        value: "All types — Private & Group options available",
      },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 404,
    country: "India",
    place: "Jaipur",
    title: "Royal Rajasthan Grand Tour — Full Circuit",
    type: "Luxury stays",
    duration: "10 Days / 9 Nights",
    durationTag: "10 Days",
    startEnd: "Jaipur → Pushkar",
    destinations: [
      "Jaipur",
      "Bikaner",
      "Jaisalmer",
      "Jodhpur",
      "Udaipur",
      "Mount Abu",
      "Ajmer",
      "Pushkar",
    ],
    amenities: ["Heritage Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 78000,
    rating: 4.9,
    reviews: 214,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Heritage Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Jaisalmer Desert Camp — Camel Safari & Rajasthani Folk Dance at Sam Sand Dunes",
      },
      {
        title: "Mehrangarh Fort Jodhpur & Udaipur Lake Palace Sunset Boat Ride",
      },
      { title: "Bikaner Camel Breeding Farm & Junagarh Fort" },
      {
        title:
          "Mount Abu — Dilwara Jain Temples & Nakki Lake at Rajasthan's Only Hill Station",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      alt: "Royal Rajasthan Grand Tour Full Circuit",
    },

    testimonials: [
      {
        id: 1,
        text: "The full Rajasthan circuit is a journey through time — from the golden sands of Jaisalmer to the blue city of Jodhpur and the lake city of Udaipur. Every heritage hotel was exceptional. NIT's planning was meticulous.",
        author: "George Christopher",
        date: "Travelled March 2026",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Sleeping under the stars at Sam Sand Dunes after a camel safari was pure magic. The Dilwara Jain temples at Mount Abu are the most intricate marble carvings I have ever seen. An extraordinary 10 days.",
        author: "Rallabandi Srinivasa",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Royal Rajasthan Grand Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/hawa-mahal-jaipur.jpg",
        alt: "Jaipur Pink City",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/11/train-tour.jpg",
        alt: "Jaisalmer Desert Camp",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Royal Rajasthan Grand Tour — Full Circuit" },
    ],

    badges: [
      { label: "FULL CIRCUIT", variant: "solid" as const, color: "blue" },
      { label: "10 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 10,
    countryCount: 1,
    cityCount: 8,
    region: "Rajasthan, India",

    itineraryStops: [
      { city: "Jaipur", nights: 2 },
      { city: "Bikaner", nights: 1 },
      { city: "Jaisalmer", nights: 2 },
      { city: "Jodhpur", nights: 1 },
      { city: "Udaipur", nights: 2 },
      { city: "Mount Abu", nights: 1 },
      { city: "Ajmer / Pushkar", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Jaipur — Pink City",
        details:
          "Arrive Jaipur (JAI). Transfer to heritage hotel. Afternoon Amber Fort elephant ride and Sheesh Mahal. Evening at Chokhi Dhani — Rajasthani folk performance and dinner. Overnight Jaipur.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Jaipur — City Palace & Hawa Mahal",
        details:
          "Morning City Palace Museum, Jantar Mantar (UNESCO), Hawa Mahal. Afternoon Nahargarh Fort at sunset — panoramic Pink City views. Shopping at Johari Bazaar for gems. Overnight Jaipur.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur → Bikaner",
        details:
          "Drive to Bikaner (330 km). Visit Junagarh Fort — one of the few unconquered forts in Rajasthan. National Research Centre on Camel (Camel Breeding Farm). Karni Mata Temple (Rat Temple) en route. Overnight Bikaner.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Bikaner → Jaisalmer — Golden City",
        details:
          "Drive to Jaisalmer (330 km). Arrive the golden city. Check-in to heritage haveli. Visit Jaisalmer Fort (a living fort — UNESCO). Patwon Ki Haveli and Salim Singh Ki Haveli. Overnight Jaisalmer.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Jaisalmer — Desert Safari & Luxury Camp",
        details:
          "Morning Gadsisar Lake boat ride. Afternoon drive to Sam Sand Dunes. Camel safari at sunset. Check-in to luxury desert camp. Rajasthani folk dance and music under the stars. Bonfire dinner. Overnight luxury desert camp.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jaisalmer → Jodhpur — Blue City",
        details:
          "Drive to Jodhpur (300 km). Visit Mehrangarh Fort — massive 15th-century hilltop fortress. Jaswant Thada cenotaph. Old city walking tour through the blue-painted lanes of Brahmpuri. Rajasthani gala dinner. Overnight Jodhpur.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Jodhpur → Udaipur — City of Lakes",
        details:
          "Drive to Udaipur (250 km). Check-in to lake-view luxury hotel. Sunset boat ride on Lake Pichola. Rooftop candlelight dinner overlooking the Lake Palace. Overnight Udaipur.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Udaipur — City Palace & Cultural Show",
        details:
          "Morning City Palace Museum, Jagdish Temple, Saheliyon Ki Bari. Afternoon Pichola village excursion. Evening Bagore Ki Haveli cultural show — folk dances and puppetry. Overnight Udaipur.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Udaipur → Mount Abu",
        details:
          "Drive to Mount Abu (165 km) — Rajasthan's only hill station. Check-in. Visit Dilwara Jain Temples — considered among the finest marble temple carvings in the world. Sunset point. Nakki Lake boat ride. Overnight Mount Abu.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Mount Abu → Ajmer → Pushkar — Departure",
        details:
          "Drive to Ajmer (185 km). Visit Dargah Sharif of Khwaja Moinuddin Chishti. Continue to Pushkar — Brahma Temple and Pushkar Lake Ghats. Transfer to Jaipur airport (JAI) or Ajmer railway station. Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      {
        label: "Destinations",
        value:
          "Jaipur · Bikaner · Jaisalmer · Sam Dunes · Jodhpur · Udaipur · Mount Abu · Ajmer · Pushkar",
      },
      { label: "Departure & Return", value: "Jaipur → Ajmer / Pushkar" },
      { label: "Tour Code", value: "RJ-GRAND-JAI-10" },
      {
        label: "Meals",
        value: "Breakfast & Dinner daily; All meals at desert camp",
      },
      { label: "Best Time", value: "October–March" },
      {
        label: "Group Size",
        value: "Families, Couples, Groups — Private & Group options",
      },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2023/11/train-tour.jpg",
    popular: true,

    tourFeatures: [
      { icon: Train, label: "Train Suite", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "All Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Camera, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/11/train-tour.jpg",
      alt: "Indian Splendour Luxury Train Tour Rajasthan",
    },

    testimonials: [
      {
        id: 1,
        text: "The Indian Splendour luxury train is the most extraordinary way to experience Rajasthan. Waking up to a new royal destination each morning, dining in style, and watching the tiger in Ranthambore — absolutely peerless.",
        author: "Prashant Singh",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Every meal, every excursion, every sunrise from the train window was a luxury experience. The gala dinner in Jodhpur and the royal lunch in Udaipur were highlights we will never forget. Worth every rupee.",
        author: "Yatthra Karunaratne",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/11/train-tour.jpg",
        alt: "Indian Splendour Luxury Train",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/tajmahal-agra.jpg",
        alt: "Taj Mahal Agra",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/jim-corbett-national-park-jeep-safari.jpg",
        alt: "Ranthambore Tiger Safari",
      },
      {
        id: 4,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Jodhpur Blue City",
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
        details:
          "Board the Indian Splendour luxury train at Safdarjung Railway Station, Delhi. Welcome reception, cocktails, and orientation. Gourmet dinner in the dining car. Train departs overnight towards Agra. Overnight on train.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Agra — Taj Mahal & Exclusive Dinner",
        details:
          "Arrive Agra. Morning Taj Mahal visit at sunrise — the greatest monument to love. Agra Fort tour. Exclusive dinner at a private heritage venue in Agra. Return to train. Overnight on train.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Ranthambore — Tiger Safari",
        details:
          "Arrive Ranthambore. Shared Jeep Safari in Ranthambore National Park with naturalist — spot tigers, leopards, and crocodiles. Sundowners at a heritage property. Return to train. Overnight on train.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Jaipur — Elephant Ride & City",
        details:
          "Arrive Jaipur. Elephant ride to Amber Fort. City Palace and Hawa Mahal. Rajasthani craft shopping. Gourmet dinner on board. Train departs for Bikaner. Overnight on train.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Bikaner → Jaisalmer — Sundowners at Sand Dunes",
        details:
          "Arrive Bikaner. Junagarh Fort and Karni Mata Temple. Continue to Jaisalmer. Afternoon Jaisalmer Fort and Patwon Ki Haveli. Sundowner cocktails and camel ride at Sam Sand Dunes. Rajasthani folk music under the stars. Overnight on train.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jodhpur — Blue City & Gala Dinner",
        details:
          "Arrive Jodhpur. Visit Mehrangarh Fort and Jaswant Thada. Blue city walking tour. Gala dinner at a Jodhpur heritage property. Train departs for Udaipur. Overnight on train.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Udaipur — Royal Lunch & Departure",
        details:
          "Arrive Udaipur. Boat ride on Lake Pichola. City Palace Museum. Royal lunch at a lake-view palace restaurant. Visit Saheliyon Ki Bari. Transfer to Udaipur airport (UDR) for onward travel. Tour concludes.",
      },
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

  {
    id: 407,
    country: "India",
    place: "Alleppey",
    title: "Kerala Beaches & Backwaters Premium Houseboat Tour",
    type: "Adventure",
    duration: "7 Days / 6 Nights",
    durationTag: "7 Days",
    startEnd: "Cochin → Trivandrum",
    destinations: [
      "Cochin",
      "Munnar",
      "Thekkady",
      "Alleppey",
      "Varkala",
      "Kovalam",
      "Trivandrum",
    ],
    amenities: ["Premium Houseboat", "Meals", "Transfers", "Sightseeing"],
    price: 24999,
    rating: 4.7,
    reviews: 198,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Premium Houseboat",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      {
        icon: Waves,
        label: "Beach & Backwaters",
        color: "#E8508A",
        bg: "#FFF0F4",
      },
    ],

    tourHighlights: [
      {
        title:
          "Munnar Tea Gardens — Misty Hills, Rolling Estates & Scenic Sunrise",
      },
      {
        title:
          "Thekkady Periyar Wildlife Sanctuary — Elephant, Tiger & Boat Safari",
      },
      {
        title:
          "Alleppey Premium Houseboat Overnight — Kerala Backwaters & Village Life",
      },
      { title: "Varkala Cliff Sunset & Kovalam Lighthouse Beach" },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
      alt: "Kerala Beaches and Backwaters Premium Houseboat",
    },

    testimonials: [
      {
        id: 1,
        text: "Munnar's misty tea gardens in the morning and floating through the Alleppey backwaters at night — Kerala is impossibly beautiful. The premium houseboat was spacious, the food was authentic Kerala cuisine. Loved every moment.",
        author: "Ravi & Sunita Chandran",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "7 destinations in 7 days — each one completely different from the last. Periyar boat safari, Varkala cliffs, Kovalam beach — God's Own Country lives up to every word of its name. Brilliantly planned by NIT.",
        author: "Anand & Kavitha Iyer",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/footer/kerala-tour-packages.jpg",
        alt: "Kerala Houseboat Backwaters",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Fascinating-Kerala-Tour-Package.png",
        alt: "Munnar Tea Gardens",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Beaches-Tour-Package.png",
        alt: "Varkala Beach Kerala",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kerala", href: "/india/kerala" },
      { label: "Kerala Beaches & Backwaters Premium Houseboat Tour" },
    ],

    badges: [
      { label: "BACKWATERS", variant: "solid" as const, color: "blue" },
      { label: "7 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 7,
    countryCount: 1,
    cityCount: 7,
    region: "Kerala, India",

    itineraryStops: [
      { city: "Cochin", nights: 1 },
      { city: "Munnar", nights: 1 },
      { city: "Thekkady", nights: 1 },
      { city: "Alleppey (Houseboat)", nights: 1 },
      { city: "Varkala", nights: 1 },
      { city: "Kovalam", nights: 1 },
      { city: "Trivandrum", nights: 0 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Cochin — Fort Kochi",
        details:
          "Arrive Cochin (COK). Transfer to hotel. Visit Fort Kochi — Chinese fishing nets, Santa Cruz Basilica, Mattancherry Palace, Jew Town. Evening Kathakali dance performance. Overnight Cochin.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin → Munnar — Tea Hills",
        details:
          "Drive to Munnar (130 km / ~4 hrs) through scenic Ghats. Arrive Munnar — check-in to hill resort. Visit Eravikulam National Park (Nilgiri Tahr), Mattupetty Dam, and Echo Point. Tea estate walk. Overnight Munnar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Munnar → Thekkady — Wildlife Sanctuary",
        details:
          "Drive to Thekkady (90 km). Periyar Wildlife Sanctuary boat ride — spot wild elephants, bison, and migratory birds on the Periyar Lake. Spice plantation tour. Evening cultural show — Kalaripayattu martial arts. Overnight Thekkady.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Thekkady → Alleppey — Premium Houseboat",
        details:
          "Drive to Alleppey (140 km). Board your premium private houseboat. Cruise through the Alleppey backwaters — coconut groves, paddy fields, village canals. All Kerala meals served on board. Sunset on the backwaters. Overnight on houseboat.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Alleppey → Varkala — Cliff Beach",
        details:
          "Disembark houseboat. Drive to Varkala (80 km). Check-in to cliff-top resort. Walk along the dramatic laterite cliffs. Visit Janardhanaswamy Temple (2000+ years old). Sunset from the cliff with the Arabian Sea below. Overnight Varkala.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Varkala → Kovalam — Lighthouse Beach",
        details:
          "Drive to Kovalam (54 km). Check-in to beach resort. Day at Lighthouse Beach and Samudra Beach. Optional water sports. Ayurvedic massage. Sunset at the iconic Kovalam Lighthouse. Overnight Kovalam.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Kovalam → Trivandrum — Departure",
        details:
          "Drive to Trivandrum (16 km). Visit Padmanabhaswamy Temple, Napier Museum. Shopping at Chalai Bazaar for Kerala spices and handicrafts. Transfer to Trivandrum airport (TRV). Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      {
        label: "Destinations",
        value:
          "Cochin · Munnar · Thekkady · Alleppey · Varkala · Kovalam · Trivandrum",
      },
      { label: "Departure & Return", value: "Cochin (COK) → Trivandrum (TRV)" },
      { label: "Tour Code", value: "KER-BOAT-COK-07" },
      {
        label: "Meals",
        value: "Breakfast & Dinner daily; All meals on houseboat",
      },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Couples, Families — Private Tour" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  {
    id: 408,
    country: "India",
    place: "Munnar",
    title: "Kerala Honeymoon — Luxury Backwaters & Hill Stations",
    type: "Honeymoon packages",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Cochin → Kovalam",
    destinations: ["Cochin", "Munnar", "Alleppey", "Kumarakom", "Kovalam"],
    amenities: ["Luxury Houseboat", "Resort Stay", "Meals", "Transfers"],
    price: 35000,
    rating: 4.8,
    reviews: 156,
    badge: "Romantic",
    badgeColor: "bg-pink-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Luxury Resort",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Heart, label: "Honeymoon", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Waves, label: "Houseboat", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Munnar Luxury Hillside Resort — Misty Tea Gardens & Couple's Sunrise Trek",
      },
      {
        title:
          "Alleppey Luxury Houseboat — Private Backwater Cruise with Candlelight Dinner",
      },
      {
        title:
          "Kumarakom Bird Sanctuary Boat Ride — Tranquil Vembanad Lake & Lush Backwaters",
      },
      {
        title:
          "Kovalam Lighthouse Beach — Couples Ayurvedic Spa & Beachside Romance",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
      alt: "Kerala Honeymoon Luxury Backwaters and Hill Stations",
    },

    testimonials: [
      {
        id: 1,
        text: "Kerala is the most romantic destination in India — the misty Munnar hills, the magical Alleppey houseboat night, and the Kovalam sunset. Our NIT honeymoon package was perfectly curated down to the last candlelit dinner.",
        author: "Rohit & Priya Sharma",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kumarakom was the hidden gem of the trip — waking up to birds calling on Vembanad Lake, drifting through the backwaters in our private houseboat. NIT took care of every romantic detail flawlessly.",
        author: "Anil & Sunita Verma",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Kerala Honeymoon Luxury",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Fascinating-Kerala-Tour-Package.png",
        alt: "Munnar Tea Garden Honeymoon",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-with-Kanyakumari-Tour-Package.png",
        alt: "Alleppey Houseboat Honeymoon",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Kerala", href: "/india/kerala" },
      { label: "Kerala Honeymoon — Luxury Backwaters & Hill Stations" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Kerala, India",

    itineraryStops: [
      { city: "Cochin", nights: 1 },
      { city: "Munnar", nights: 2 },
      { city: "Alleppey (Houseboat)", nights: 1 },
      { city: "Kumarakom", nights: 2 },
      { city: "Kovalam", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Cochin — Romantic Fort Kochi",
        details:
          "Arrive Cochin (COK). Transfer to boutique hotel. Evening stroll at Fort Kochi — Chinese fishing nets, colonial streets. Candlelight dinner at a waterfront restaurant. Overnight Cochin.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Cochin → Munnar — Misty Hill Romance",
        details:
          "Drive to Munnar (130 km). Check-in to luxury hillside resort. Afternoon tea estate walk with couple's high tea overlooking the tea gardens. Sunset from Echo Point. Overnight Munnar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Munnar — Sunrise Trek & Nature",
        details:
          "Sunrise nature walk / couple's trek. Visit Eravikulam National Park (Nilgiri Tahr). Mattupetty Dam and Kundala Lake. Couples Ayurvedic massage at the resort spa. Romantic dinner. Overnight Munnar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Munnar → Alleppey — Luxury Houseboat",
        details:
          "Drive to Alleppey (140 km). Board your private luxury houseboat. Cruise through the famous Kerala backwaters — paddy fields, canals, village life. Candlelight dinner on the houseboat deck. Overnight on houseboat.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Alleppey → Kumarakom — Vembanad Lake",
        details:
          "Disembark houseboat. Drive to Kumarakom (30 km). Check-in to a luxury backwater resort on Vembanad Lake. Afternoon Kumarakom Bird Sanctuary boat ride. Sunset from the resort deck over the lake. Overnight Kumarakom.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Kumarakom — Lake & Leisure",
        details:
          "Day at leisure in Kumarakom. Optional canoe ride through the mangroves. Couple's Panchakarma Ayurvedic spa treatment. Evening romantic dinner on a floating platform. Overnight Kumarakom.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Kumarakom → Kovalam — Lighthouse Beach",
        details:
          "Drive to Kovalam (175 km). Check-in to beachside luxury resort. Sunset walk on Lighthouse Beach. Candlelight beachside dinner with the sound of the Arabian Sea. Overnight Kovalam.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Kovalam → Trivandrum — Departure",
        details:
          "Morning couples yoga and meditation on the beach. Drive to Trivandrum (16 km). Shopping for Kerala spices, coconut products, and handicrafts. Transfer to Trivandrum airport (TRV). Honeymoon tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Cochin · Munnar · Alleppey · Kumarakom · Kovalam · Trivandrum",
      },
      { label: "Departure & Return", value: "Cochin (COK) → Trivandrum (TRV)" },
      { label: "Tour Code", value: "KER-HONEY-COK-08" },
      {
        label: "Meals",
        value: "Breakfast & Dinner daily; Candlelight dinners included",
      },
      { label: "Best Time", value: "November–February" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      { icon: Building2, label: "Hotel", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Car, label: "Transfers", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Mountain, label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
      alt: "Leh Ladakh Adventure Tour Package",
    },

    testimonials: [
      {
        id: 1,
        text: "Pangong Tso at sunrise — the water changing from turquoise to sapphire to silver — is one of the most otherworldly sights on earth. NIT's Ladakh tour was meticulously planned with excellent acclimatization built in.",
        author: "Rallabandi Srinivasa",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Crossing Khardung La on the way to Nubra Valley and watching Bactrian camels against the Karakoram backdrop — Ladakh is unlike anywhere on earth. Every detail was handled perfectly by NIT's team.",
        author: "Krishan Bhardwaj",
        date: "Travelled September 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
        alt: "Leh Ladakh Adventure",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
        alt: "Pangong Tso Ladakh",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/jim-corbett-national-park-jeep-safari.jpg",
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
        details:
          "Arrive Srinagar (SXR). Transfer to houseboat on Dal Lake. Evening Shikara ride — floating gardens, lotus blooms, and Himalayan reflections on the lake. Welcome dinner on houseboat. Overnight Srinagar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Old City",
        details:
          "Morning visit Shalimar Bagh, Nishat Bagh (Mughal Gardens), and Chashme Shahi. Afternoon Hazratbal Shrine and Jamia Masjid. Old city bazaars — Pashmina shawls, Kashmiri embroidery, saffron. Overnight Srinagar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Gulmarg — Snow & Gondola",
        details:
          "Drive to Gulmarg (56 km). Board the Gulmarg Gondola — Asia's highest cable car (Phase 1: 2,650 m; Phase 2: 3,980 m). Snow activities, skiing, and panoramic Himalayan views. Overnight Gulmarg.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gulmarg → Sonamarg → Leh",
        details:
          "Drive through Sonamarg (Meadow of Gold) — stunning glacier views. Continue on the Srinagar-Leh Highway via Zoji La Pass, Drass, Kargil. Arrive Leh (3,500 m). Check-in. Rest for acclimatization. Overnight Leh.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Leh — Acclimatization & Local Sightseeing",
        details:
          "Easy day for acclimatization. Visit Leh Palace, Shanti Stupa, and Leh Market. Walk through the old town. Visit Namgyal Tsemo Monastery. Magnetic Hill afternoon. Sangam (Indus-Zanskar confluence) drive-by. Overnight Leh.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Monasteries Tour",
        details:
          "Full day monastery circuit: Thiksey Monastery (resembles Potala Palace), Hemis Monastery (largest in Ladakh), Shey Palace, and Rancho School (3 Idiots filming location). Sunset at Stakna Monastery. Overnight Leh.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Leh → Pangong Tso — Blue Lake",
        details:
          "Early drive to Pangong Tso Lake (160 km) via Chang La Pass (5,360 m — third highest motorable road in the world). First sight of the stunning blue-green lake (4,350 m). Afternoon at leisure by the lake. Overnight at Pangong camp.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Pangong Tso → Nubra Valley via Khardung La",
        details:
          "Sunrise at Pangong Tso. Drive back to Leh via Chang La. Continue via Khardung La Pass (one of the world's highest motorable roads at 5,359 m). Descend to Nubra Valley — the valley of flowers. Bactrian double-humped camel safari at Hunder Sand Dunes. Overnight Nubra.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Nubra → Leh → Manali Highway",
        details:
          "Morning at Diskit Monastery — giant Maitreya Buddha statue overlooking the valley. Drive back to Leh (120 km). Afternoon start on the legendary Manali-Leh Highway. Overnight Sarchu / Jispa.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Sarchu → Manali — Departure",
        details:
          "Drive through Baralacha La, Rohtang Pass, and descend into the Kullu Valley. Arrive Manali — the end of the Ladakh adventure. Transfer to Manali bus stand or Bhuntar airport. Tour concludes.",
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
      { label: "Meals", value: "Breakfast & Dinner daily" },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      { icon: Bike, label: "Bike Rental", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Tent, label: "Camp Stay", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Mountain, label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
      alt: "Leh Ladakh Bike Tour Manali to Leh",
    },

    testimonials: [
      {
        id: 1,
        text: "Riding through Rohtang Pass, Baralacha La, and Khardung La on a Royal Enfield — this is the adventure of a lifetime. NIT provided top-maintained bikes, a support vehicle, and brilliant route guidance throughout.",
        author: "Vikram & Sanjay Khanna",
        date: "Travelled July 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Manali-Leh highway is the most spectacular road I have ever ridden. Camping at Pangong Tso under the Milky Way was indescribable. This bike tour is for anyone who wants to live fully.",
        author: "Anirudh & Prateek Sharma",
        date: "Travelled August 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
        alt: "Ladakh Bike Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2023/10/jim-corbett-national-park-jeep-safari.jpg",
        alt: "Manali to Leh Highway",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
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
        details:
          "Arrive Manali. Check-in. Afternoon bike collection, safety briefing, and gear check. Test ride in Manali. Evening route briefing and acclimatization walk. Overnight Manali.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Manali — Acclimatization & Local Ride",
        details:
          "Easy local ride to Solang Valley and Hadimba Temple. Afternoon at leisure for acclimatization. Gear check and final preparations. Overnight Manali.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Manali → Rohtang Pass → Keylong",
        details:
          "Ride over Rohtang Pass (3,978 m) — first high-altitude pass of the trip. Descend into the Lahaul Valley. Continue to Keylong (110 km). Overnight Keylong.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Keylong → Baralacha La → Sarchu",
        details:
          "Ride through Sissu, Tandi, and up to the dramatic Baralacha La Pass (4,890 m). Descend to Sarchu (140 km) — camped at the Himachal-Ladakh border plateau. Overnight camp Sarchu.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Sarchu → Lachulung La → Pang → Leh",
        details:
          "Ride through the incredible Gata Loops (21 consecutive hairpin bends), Lachulung La (5,059 m), More Plains — the world's highest plateau. Arrive Leh (260 km). Overnight Leh.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Acclimatization & Rest",
        details:
          "Rest day in Leh for acclimatization. Light walk to Leh Palace, Leh Market, and Shanti Stupa. Gear maintenance. Overnight Leh.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Leh — Monastery Circuit Ride",
        details:
          "Ride to Thiksey, Hemis, and Shey Monasteries. Visit the Sangam (Indus-Zanskar confluence). Magnetic Hill experience. Overnight Leh.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Leh → Khardung La → Nubra Valley",
        details:
          "Ride up to Khardung La Pass (5,359 m) — one of the highest motorable roads in the world. Descend to Nubra Valley (120 km). Camel ride at Hunder Sand Dunes. Overnight Nubra camp.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Nubra → Leh → Pangong Tso",
        details:
          "Ride back to Leh via Khardung La. Continue to Pangong Tso (160 km) via Chang La Pass (5,360 m). Arrive at the iconic blue lake. Overnight camp at Pangong Tso.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Pangong Tso — Sunrise & Lake Day",
        details:
          "Sunrise at Pangong — the colours shifting from gold to silver to blue. Day at leisure by the lake. Evening campfire under the Ladakhi stars. Overnight Pangong camp.",
      },
      {
        day: 11,
        date: "Day 11",
        title: "Pangong Tso → Leh — Return Ride",
        details:
          "Return ride from Pangong to Leh via Chang La. Bike handover. Farewell dinner in Leh. Overnight Leh.",
      },
      {
        day: 12,
        date: "Day 12",
        title: "Leh — Departure",
        details:
          "Transfer to Leh Kushok Bakula Rimpochhe Airport (IXL). Fly to Delhi or Srinagar. Ladakh Bike Tour concludes — a journey of a lifetime complete.",
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
      { label: "Meals", value: "Breakfast & Dinner daily" },
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Luxury Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Heart, label: "Honeymoon", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Mountain, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
      alt: "Ladakh Honeymoon Tour Pangong Lake and Nubra Valley",
    },

    testimonials: [
      {
        id: 1,
        text: "Watching the sunrise together over Pangong Tso — the lake turning from deep blue to blazing gold in minutes — was the most romantic moment of our lives. Ladakh is an extraordinary honeymoon destination. NIT made it flawless.",
        author: "Rohit & Priya Kapoor",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We had never imagined honeymooning in Ladakh but it surpassed every beach destination we have ever visited. The Nubra Valley camel ride and the Pangong lake camp were moments we will cherish forever. Thank you NIT.",
        author: "Aakash & Sneha Bhatia",
        date: "Travelled July 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
        alt: "Ladakh Honeymoon Pangong Lake",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Nubra Valley Romantic",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
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
        details:
          "Arrive Leh (IXL). Transfer to luxury hotel. Complete rest for acclimatization (altitude 3,500 m). Evening light walk to Leh Market. Welcome dinner. Overnight Leh.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Leh — Monastery & Shanti Stupa",
        details:
          "Acclimatization continues. Visit Shanti Stupa at sunset — panoramic views of Leh and the Ladakhi Himalayas. Explore Leh Palace (17th-century royal residence) and Namgyal Tsemo Monastery. Romantic dinner at a Leh rooftop restaurant. Overnight Leh.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Leh — Monastery Circuit",
        details:
          "Visit Thiksey Monastery (resembles Tibet's Potala Palace), Hemis Monastery (largest in Ladakh), and Shey Palace. Sangam — the confluence of the Indus and Zanskar rivers. Magnetic Hill. Overnight Leh.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Leh → Khardung La → Nubra Valley",
        details:
          "Drive over Khardung La Pass (5,359 m) — couples photo stop at one of the world's highest motorable roads. Descend to Nubra Valley (120 km). Check-in to camp/resort. Bactrian camel safari at Hunder Sand Dunes — double-humped camels against the Karakoram backdrop. Campfire dinner. Overnight Nubra.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Nubra → Pangong Tso — Blue Lake",
        details:
          "Drive to Pangong Tso Lake (150 km) via Shyok River route. First view of the legendary blue-green lake (4,350 m). Check-in to luxury lake-side camp. Afternoon at the lakeside — the turquoise waters, white peaks, and changing light. Candlelight dinner by the lake. Overnight Pangong camp.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Pangong Tso — Sunrise & Romantic Day",
        details:
          "Wake up before dawn for the Pangong Tso sunrise — one of nature's most spectacular colour shows. Morning walk along the lakeshore. Afternoon at leisure — photography, kayaking (optional), or simply sitting together by the lake. Overnight Pangong camp.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Pangong Tso → Leh",
        details:
          "Drive back to Leh via Chang La Pass (5,360 m). Afternoon free for shopping at Leh Market — Pashmina, turquoise jewellery, Ladakhi handicrafts. Farewell dinner at a Leh heritage restaurant. Overnight Leh.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Leh — Departure",
        details:
          "Sunrise moment from the hotel. Transfer to Leh Kushok Bakula Rimpochhe Airport (IXL). Fly to Delhi. Ladakh Honeymoon Tour concludes with memories that will last a lifetime.",
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
          "Breakfast & Dinner daily; Candlelight dinner at Pangong included",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      { icon: Bike, label: "Bike Rental", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Tent, label: "Camp Stay", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Mountain, label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
      alt: "Kashmir to Ladakh Grand Tour — Srinagar to Manali via Kargil and Pangong",
    },

    testimonials: [
      {
        id: 1,
        text: "14 days, two worlds — lush Kashmir and barren Ladakh. From Dal Lake's floating gardens to Pangong's blue silence, this grand tour is the ultimate Indian road journey. NIT handled every pass and valley flawlessly.",
        author: "Vikram & Ananya Sharma",
        date: "Travelled July 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kargil and Lamayuru were unexpected highlights nobody talks about. The Leh–Manali highway finale through Rohtang was surreal. One trip, every landscape India has to offer. Thank you NIT.",
        author: "Rajesh & Pooja Mehta",
        date: "Travelled August 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
        alt: "Pangong Tso Ladakh Grand Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
        alt: "Dal Lake Srinagar Kashmir",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
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
        details:
          "Arrive Srinagar airport. Transfer to houseboat on Dal Lake. 2-hour Shikara ride past Char Chinar Island, Floating Gardens, and the lake bazaar. Welcome dinner on the houseboat. Overnight Srinagar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Pahalgam Excursion",
        details:
          "Morning visit to Nishat Bagh, Shalimar Bagh, and Chashma Shahi Mughal Gardens. Full-day excursion to Pahalgam (88 km) — Betaab Valley, Aru Valley, and Chandanwari. Return for dinner on houseboat. Overnight Srinagar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar — Gulmarg Gondola Ride",
        details:
          "Full-day excursion to Gulmarg (50 km). Ride the world's 2nd highest cable car — Gulmarg Gondola — for sweeping Himalayan views. Optional skiing and snow activities. Return to houseboat for dinner. Overnight Srinagar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Srinagar → Sonamarg → Kargil",
        details:
          "Checkout and drive to Kargil (200 km) via Sonamarg — the 'Meadow of Gold'. Cross Zoji La Pass. Stop at Drass — India's coldest town and site of the 1999 Kargil War. Visit Kargil War Memorial. Overnight Kargil.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Kargil → Lamayuru → Leh",
        details:
          "Drive to Leh (200 km) via Lamayuru — Ladakh's oldest monastery perched above the surreal Moonland landscape. Visit Alchi Monastery and Magnetic Hill en route. Arrive Leh, check-in and rest. Overnight Leh.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Acclimatization & Local Sightseeing",
        details:
          "Rest morning for high-altitude acclimatization (3,500 m). Afternoon visit to Shanti Stupa at sunset, 17th-century Leh Palace, and Namgyal Tsemo Monastery. Evening walk through Leh Market. Overnight Leh.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Leh — Monastery Circuit & Sangam",
        details:
          "Visit Thiksey Monastery (resembles Tibet's Potala Palace), Hemis Monastery (largest in Ladakh), and Shey Palace. Sangam — confluence of the Indus and Zanskar rivers. Magnetic Hill stop. Overnight Leh.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Leh → Khardung La → Nubra Valley",
        details:
          "Drive over Khardung La Pass (5,359 m) — photo stop at one of the world's highest motorable roads. Descend to Nubra Valley (120 km). Bactrian camel safari at Hunder Sand Dunes. Campfire dinner under Himalayan skies. Overnight Nubra Valley.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Nubra Valley → Shyok River → Pangong Tso",
        details:
          "Drive to Pangong Tso (140 km) via the scenic Shyok River Valley. First view of the legendary blue-green lake at 4,350 m. Check-in to lakeside camp. Candlelight dinner by the water. Overnight Pangong Tso.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Pangong Tso — Sunrise & Full Day at the Lake",
        details:
          "Wake before dawn for the Pangong Tso sunrise — the lake shifts from deep cobalt to blazing gold. Morning walk along the shore. Afternoon at leisure — photography, optional kayaking, or quiet time by the Indo-China border lake. Overnight Pangong Tso.",
      },
      {
        day: 11,
        date: "Day 11",
        title: "Pangong Tso → Leh via Chang La Pass",
        details:
          "Drive back to Leh (220 km) over Chang La Pass (5,360 m). Afternoon free for Leh Market shopping — Pashmina, turquoise jewellery, Ladakhi handicrafts. Farewell dinner at a Leh heritage restaurant. Overnight Leh.",
      },
      {
        day: 12,
        date: "Day 12",
        title: "Leh → Sarchu — Leh–Manali Highway Begins",
        details:
          "Begin the legendary Leh–Manali Highway (Day 1 of 2). Drive through Upshi and cross Tanglang La Pass (5,328 m). Descend into the high plains of Morey. Arrive Sarchu (4,290 m) camp by evening. Overnight Sarchu camp.",
      },
      {
        day: 13,
        date: "Day 13",
        title: "Sarchu → Rohtang Pass → Manali",
        details:
          "Cross Baralacha La (4,890 m) and Rohtang Pass (3,978 m) — a dramatic shift from barren desert to pine-forested Kullu Valley. Arrive Manali by evening. Celebration dinner. Overnight Manali.",
      },
      {
        day: 14,
        date: "Day 14",
        title: "Manali — Solang Valley & Departure",
        details:
          "Morning excursion to Solang Valley and Hadimba Devi Temple (16th-century pagoda in cedar forest). Last souvenir browse at Manali Mall Road. Transfer to Bhuntar Airport or bus stand. Kashmir to Ladakh Grand Tour concludes.",
      },
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
          "Breakfast & Dinner daily; Campfire dinner at Nubra & Pangong included",
      },
      { label: "Best Time", value: "June–September" },
      { label: "Group Size", value: "Private & Small Group Tours available" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────────────────
  // 👑  RAJASTHAN
  // ─────────────────────────────────────────────────────────

  {
    id: 506,
    country: "India",
    place: "Jaipur",
    title: "Rajasthan Royal Triangle — Jaipur Udaipur Jaisalmer",
    type: "Luxury Heritage Tour",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Delhi → Jaipur → Jaisalmer → Udaipur → Delhi",
    destinations: [
      "Delhi",
      "Jaipur",
      "Pushkar",
      "Jaisalmer",
      "Jodhpur",
      "Udaipur",
    ],
    amenities: ["Heritage Hotels", "Meals", "Transfers", "Sightseeing"],
    price: 52000,
    rating: 4.9,
    reviews: 289,
    badge: "Bestseller",
    badgeColor: "bg-orange-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Heritage Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: Crown,
        label: "Royal Experience",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: Mountain, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Amber Fort Elephant Ride — Royal Jaipur Welcome at a Mughal Masterpiece",
      },
      {
        title:
          "Jaisalmer Desert Camp — Camel Safari & Folk Music on Sam Sand Dunes",
      },
      {
        title:
          "City Palace Udaipur — Lake Pichola Sunset Boat Ride in the City of Lakes",
      },
      {
        title:
          "Mehrangarh Fort Jodhpur — Blue City Panorama from the Blue Fort",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      alt: "Rajasthan Royal Triangle Tour — Jaipur Udaipur Jaisalmer",
    },

    testimonials: [
      {
        id: 1,
        text: "The Jaisalmer desert camp under a canopy of stars was unlike anything we have ever experienced. Rajasthan is pure magic — every fort, every palace, every sunset. NIT made sure we didn't miss a single moment.",
        author: "Arjun & Meera Singhania",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "From the Pink City to the Blue City to the City of Lakes — 9 days was just enough to fall completely in love with Rajasthan. Amber Fort at sunrise was breathtaking. Highly recommend this itinerary.",
        author: "Sameer & Divya Lakhani",
        date: "Travelled October 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Rajasthan Royal Triangle Jaipur",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Jaisalmer Desert Camp Rajasthan",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
        alt: "Udaipur Lake Pichola Sunset",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Rajasthan Royal Triangle — Jaipur Udaipur Jaisalmer" },
    ],

    badges: [
      { label: "BESTSELLER", variant: "solid" as const, color: "orange" },
      { label: "9 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 9,
    countryCount: 1,
    cityCount: 6,
    region: "Rajasthan, India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Jaipur", nights: 2 },
      { city: "Jaisalmer", nights: 2 },
      { city: "Jodhpur", nights: 1 },
      { city: "Udaipur", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Delhi — Transfer to Jaipur",
        details:
          "Arrive Delhi. Transfer to Jaipur by road (280 km, ~5 hrs). Check-in to heritage hotel. Evening walk through Jaipur's bazaars — bangles, block prints, and blue pottery. Welcome dinner. Overnight Jaipur.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Jaipur — Amber Fort & City Palace",
        details:
          "Morning visit to Amber Fort — jeep or elephant ride to the hilltop entrance. Explore Sheesh Mahal (Hall of Mirrors). Afternoon at City Palace, Jantar Mantar observatory, and the iconic Hawa Mahal. Overnight Jaipur.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur → Pushkar → Jaisalmer",
        details:
          "Drive via Pushkar — visit the sacred Brahma Temple and the ghats of Pushkar Lake. Continue to Jaisalmer (550 km total). Check-in to haveli-style hotel inside the golden fort city. Overnight Jaisalmer.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Jaisalmer — Golden Fort & Sam Sand Dunes",
        details:
          "Morning exploration of Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake. Evening drive to Sam Sand Dunes — camel safari at sunset, Rajasthani folk music and dinner at the desert camp. Overnight Jaisalmer.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Jaisalmer → Jodhpur — The Blue City",
        details:
          "Drive to Jodhpur (280 km). Visit the magnificent Mehrangarh Fort — panoramic views of the blue-painted city below. Explore Jaswant Thada and the Clock Tower market. Overnight Jodhpur.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jodhpur → Udaipur — City of Lakes",
        details:
          "Drive to Udaipur (250 km) through the Aravalli hills. Check-in to lakeside hotel on the banks of Lake Pichola. Evening boat ride on Lake Pichola — views of the illuminated Lake Palace. Overnight Udaipur.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Udaipur — City Palace & Vintage Car Museum",
        details:
          "Visit the grand City Palace complex — seven palaces merged over centuries. Explore the Vintage Car Museum, Saheliyon Ki Bari gardens, and the Jagdish Temple. Sunset from the Monsoon Palace hilltop. Overnight Udaipur.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Udaipur — Leisure & Local Markets",
        details:
          "Morning at leisure — optional cooking class or pottery workshop. Afternoon stroll through Udaipur's art galleries and Hathi Pol market — miniature paintings, silver jewellery, and local textiles. Farewell dinner. Overnight Udaipur.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Udaipur — Departure to Delhi",
        details:
          "Transfer to Udaipur airport or railway station. Fly or train to Delhi. Rajasthan Royal Triangle Tour concludes — the colours, forts, and deserts of Rajasthan etched into memory.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jaipur · Pushkar · Jaisalmer · Jodhpur · Udaipur",
      },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RAJ-ROYAL-DEL-09" },
      {
        label: "Meals",
        value:
          "Breakfast & Dinner daily; Desert camp dinner at Sam Dunes included",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Private & Small Group Tours available" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────────────────

  {
    id: 507,
    country: "India",
    place: "Udaipur",
    title: "Jaipur Udaipur Jaisalmer Honeymoon Tour",
    type: "Honeymoon Tour",
    duration: "8 Days / 7 Nights",
    durationTag: "8 Days",
    startEnd: "Delhi → Jaipur → Jaisalmer → Udaipur",
    destinations: ["Delhi", "Jaipur", "Jaisalmer", "Sam Sand Dunes", "Udaipur"],
    amenities: ["Luxury Hotels", "Meals", "Desert Camp", "Sightseeing"],
    price: 48000,
    rating: 4.8,
    reviews: 198,
    badge: "Romantic",
    badgeColor: "bg-pink-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Luxury Hotel",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Heart, label: "Honeymoon", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Tent, label: "Desert Camp", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Amber Fort Sunrise — Romantic Jeep Ride to a Mughal Hilltop Palace",
      },
      {
        title:
          "Sam Sand Dunes Desert Camp — Candlelight Dinner under a Rajasthani Starlit Sky",
      },
      {
        title:
          "Lake Pichola Boat Ride — Udaipur's Illuminated Lake Palace at Dusk",
      },
      {
        title:
          "Jaisalmer Golden Fort — Honeymoon Stroll through a Living 12th-Century Citadel",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      alt: "Jaipur Udaipur Jaisalmer Honeymoon Tour — Rajasthan Romance",
    },

    testimonials: [
      {
        id: 1,
        text: "Rajasthan is the most romantic destination in India and nobody talks about it enough. The candlelight dinner at Sam Sand Dunes and the Lake Palace boat ride in Udaipur were pure magic. NIT took care of every detail.",
        author: "Karan & Nisha Malhotra",
        date: "Travelled December 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We chose Rajasthan over Goa for our honeymoon and it was the best decision we ever made. The colours, the forts, the desert — it is like honeymooning inside a fairytale. Thank you Namaste India Trip.",
        author: "Dev & Preethi Iyer",
        date: "Travelled November 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Jaisalmer Desert Honeymoon Rajasthan",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Udaipur Lake Palace Honeymoon",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
        alt: "Jaipur Amber Fort Romantic",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Jaipur Udaipur Jaisalmer Honeymoon Tour" },
    ],

    badges: [
      { label: "HONEYMOON", variant: "solid" as const, color: "pink" },
      { label: "8 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 8,
    countryCount: 1,
    cityCount: 5,
    region: "Rajasthan, India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Jaipur", nights: 2 },
      { city: "Jaisalmer", nights: 2 },
      { city: "Udaipur", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Delhi — Transfer to Jaipur",
        details:
          "Arrive Delhi. Drive to Jaipur (280 km). Check-in to luxury hotel. Evening candlelit dinner at a rooftop Jaipur restaurant with fort views. Welcome to Rajasthan. Overnight Jaipur.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Jaipur — Amber Fort & Hawa Mahal",
        details:
          "Sunrise jeep ride to Amber Fort — explore Sheesh Mahal and the royal zenana quarters. Afternoon at Hawa Mahal, City Palace, and Jantar Mantar. Romantic rooftop dinner overlooking the Pink City. Overnight Jaipur.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Jaipur → Jaisalmer — Golden City Arrival",
        details:
          "Drive to Jaisalmer (540 km). Check-in to a luxury heritage haveli inside or near Jaisalmer Fort. Sunset walk through the golden sandstone lanes of the living fort. Dinner at a haveli rooftop. Overnight Jaisalmer.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Jaisalmer — Fort, Havelis & Sam Sand Dunes Camp",
        details:
          "Morning visit to Patwon Ki Haveli and Gadisar Lake. Evening camel safari at Sam Sand Dunes at sunset. Candlelight dinner at a luxury desert camp with folk music and dance under the stars. Overnight Jaisalmer.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Jaisalmer → Udaipur — City of Lakes",
        details:
          "Drive to Udaipur (490 km). Check-in to a lakeside luxury hotel overlooking Lake Pichola. Evening sunset boat ride on Lake Pichola — the illuminated Lake Palace glowing on the water. Overnight Udaipur.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Udaipur — City Palace & Lake Palace Views",
        details:
          "Visit the City Palace complex — seven palaces merged over centuries of royal history. Explore Jagdish Temple and Saheliyon Ki Bari gardens. Romantic dinner at a Lake Pichola-facing terrace restaurant. Overnight Udaipur.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Udaipur — Monsoon Palace & Leisure",
        details:
          "Morning at leisure — optional couple's spa at the hotel. Afternoon drive to Monsoon Palace (Sajjan Garh) for panoramic sunset views of the Aravalli hills and the lakes of Udaipur. Farewell dinner. Overnight Udaipur.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Udaipur — Departure",
        details:
          "Transfer to Udaipur airport or railway station. Fly or train onward. Rajasthan Honeymoon Tour concludes — the forts, lakes, and desert skies of Rajasthan forever in your hearts.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jaipur · Jaisalmer · Sam Sand Dunes · Udaipur",
      },
      { label: "Departure & Return", value: "Delhi → Udaipur" },
      { label: "Tour Code", value: "RAJ-HONEY-DEL-08" },
      {
        label: "Meals",
        value:
          "Breakfast & Dinner daily; Candlelight desert camp dinner at Sam Dunes included",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────────────────

  {
    id: 508,
    country: "India",
    place: "Jaisalmer",
    title: "Jaisalmer Desert Camp & Jaipur Heritage Circuit",
    type: "Adventure & Heritage Tour",
    duration: "6 Days / 5 Nights",
    durationTag: "6 Days",
    startEnd: "Delhi → Jaipur → Jaisalmer → Delhi",
    destinations: ["Delhi", "Jaipur", "Bikaner", "Jaisalmer", "Sam Sand Dunes"],
    amenities: ["Hotel & Camp", "Meals", "Camel Safari", "Sightseeing"],
    price: 28500,
    rating: 4.7,
    reviews: 154,
    badge: "Trending",
    badgeColor: "bg-amber-600",
    mode: "Road",
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      { icon: Tent, label: "Camp Stay", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bike, label: "Camel Safari", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Mountain, label: "Adventure", color: "#E8508A", bg: "#FFF0F4" },
    ],

    tourHighlights: [
      {
        title:
          "Amber Fort Jaipur — Hilltop Mughal Fortress & Sheesh Mahal Hall of Mirrors",
      },
      {
        title:
          "Bikaner Camel Research Station — Only One of Its Kind in the World",
      },
      {
        title: "Sam Sand Dunes Camel Safari — Golden Desert Sunset on the Thar",
      },
      {
        title:
          "Jaisalmer Desert Camp — Starlit Rajasthani Campfire Night on the Dunes",
      },
    ],

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
      alt: "Jaisalmer Desert Camp and Jaipur Heritage Circuit Tour",
    },

    testimonials: [
      {
        id: 1,
        text: "6 days felt like a complete Rajasthan experience — the heritage of Jaipur, the quirky charm of Bikaner, and the sheer silence of the Jaisalmer desert. The Sam Sand Dunes camp night was unforgettable. Brilliant value from NIT.",
        author: "Rohit Sharma & Friends",
        date: "Travelled January 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The camel safari at sunset and the campfire dinner under a sky full of stars at Sam Dunes — I still think about it. Jaipur's Amber Fort is also something everyone should see. NIT delivered everything on time.",
        author: "Priya & Ankit Verma",
        date: "Travelled February 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Royal-Rajasthan-Tour-Packages.webp",
        alt: "Jaisalmer Desert Camp Sam Sand Dunes",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Jaipur Amber Fort Heritage Tour",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
        alt: "Bikaner Rajasthan Camel Safari",
      },
    ],

    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "India", href: "/india" },
      { label: "Rajasthan", href: "/india/rajasthan" },
      { label: "Jaisalmer Desert Camp & Jaipur Heritage Circuit" },
    ],

    badges: [
      { label: "TRENDING", variant: "solid" as const, color: "amber" },
      { label: "6 DAYS", variant: "outlined" as const, color: "cyan" },
    ],

    durationDays: 6,
    countryCount: 1,
    cityCount: 5,
    region: "Rajasthan, India",

    itineraryStops: [
      { city: "Delhi", nights: 1 },
      { city: "Jaipur", nights: 1 },
      { city: "Bikaner", nights: 1 },
      { city: "Jaisalmer", nights: 2 },
    ],

    days: [
      {
        day: 1,
        date: "Day 1",
        title: "Arrive Delhi — Transfer to Jaipur",
        details:
          "Arrive Delhi. Drive to Jaipur (280 km, ~5 hrs). Check-in to hotel. Evening stroll through Jaipur's Johari Bazaar — gems, silver, and block-printed textiles. Dinner at a local Rajasthani dhaba. Overnight Jaipur.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Jaipur — Amber Fort & City Heritage",
        details:
          "Sunrise jeep ride to Amber Fort — Sheesh Mahal, Ganesh Pol, and the panoramic Maota Lake views. Afternoon at Hawa Mahal, City Palace, and Jantar Mantar. Drive to Bikaner (330 km) by evening. Overnight Bikaner.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Bikaner — Junagarh Fort & Camel Research Centre",
        details:
          "Morning visit to Junagarh Fort — one of Rajasthan's most intact medieval fortresses. Visit the National Research Centre on Camels — the world's only camel research station. Drive to Jaisalmer (330 km). Overnight Jaisalmer.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Jaisalmer — Golden Fort & Havelis",
        details:
          "Explore Jaisalmer Fort — a living 12th-century citadel still inhabited today. Visit Patwon Ki Haveli and Nathmal Ki Haveli for intricate sandstone carvings. Afternoon at Gadisar Lake. Overnight Jaisalmer.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Jaisalmer — Sam Sand Dunes Desert Adventure",
        details:
          "Free morning in Jaisalmer. Afternoon drive to Sam Sand Dunes (42 km). Camel safari at golden hour sunset over the Thar Desert. Dinner at a desert camp — Rajasthani folk music and bonfire under stars. Overnight Jaisalmer.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Jaisalmer — Departure to Delhi",
        details:
          "Early morning sunrise over the dunes. Drive to Jaisalmer railway station or airport. Train or flight to Delhi. Jaisalmer Desert Camp & Jaipur Heritage Circuit Tour concludes.",
      },
    ],

    tourDetails: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      {
        label: "Destinations",
        value: "Delhi · Jaipur · Bikaner · Jaisalmer · Sam Sand Dunes",
      },
      { label: "Departure & Return", value: "Delhi → Jaisalmer" },
      { label: "Tour Code", value: "RAJ-DESERT-DEL-06" },
      {
        label: "Meals",
        value:
          "Breakfast & Dinner daily; Desert camp campfire dinner at Sam Dunes included",
      },
      { label: "Best Time", value: "October–March" },
      { label: "Group Size", value: "Private & Small Group Tours available" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────────────────
  // 🌸  KASHMIR — Paradise on Earth
  // ─────────────────────────────────────────────────────────

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
    img: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Houseboat Stay",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      {
        icon: Sailboat,
        label: "Shikara Ride",
        color: "#1AADA0",
        bg: "#E8F7F3",
      },
      { icon: Mountain, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
      alt: "Kashmir Tour Package — Srinagar Dal Lake Gulmarg Pahalgam",
    },

    testimonials: [
      {
        id: 1,
        text: "Dal Lake from a houseboat at dawn, with mist over the mountains and a Shikara bringing fresh lotus flowers — Kashmir is truly heaven on earth. NIT made every day smooth and memorable.",
        author: "Suresh & Kavita Nair",
        date: "Travelled June 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "The Gulmarg Gondola was worth the entire trip alone. Snow in June! Pahalgam's Betaab Valley is stunning. This is the Kashmir tour everyone should do at least once. Excellent arrangements by NIT.",
        author: "Amit & Shruti Joshi",
        date: "Travelled July 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
        alt: "Dal Lake Srinagar Kashmir Houseboat",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Gulmarg Gondola Snow Kashmir",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
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
        details:
          "Arrive Srinagar airport. Transfer to luxury houseboat on Dal Lake. 2-hour Shikara ride — Char Chinar Island, Floating Gardens, and the lake bazaar. Welcome Wazwan dinner on the houseboat. Overnight Srinagar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Local Sightseeing",
        details:
          "Visit the Mughal Gardens — Nishat Bagh, Shalimar Bagh, and Chashma Shahi. Explore Shankaracharya Temple hilltop for panoramic views of the valley. Evening shopping at Lal Chowk for Pashmina and Kashmiri handicrafts. Overnight Srinagar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Pahalgam — Valley of Shepherds",
        details:
          "Drive to Pahalgam (88 km, ~2.5 hrs). Visit Betaab Valley, Aru Valley, and Chandanwari along the banks of the Lidder River. Optional pony ride in the meadows. Check-in to hotel. Overnight Pahalgam.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Pahalgam → Gulmarg — Meadow of Flowers",
        details:
          "Drive to Gulmarg (140 km). Ride the Gulmarg Gondola — world's 2nd highest cable car — for sweeping views of Nanga Parbat and the Kashmir peaks. Optional skiing or snow activities. Check-in to hotel. Overnight Gulmarg.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Gulmarg → Sonamarg — Meadow of Gold",
        details:
          "Drive to Sonamarg (100 km) — the golden meadow at the gateway to Ladakh. Visit Thajiwas Glacier by pony or on foot — snow even in summer. Dramatic views of the Sindh River valley. Check-in to hotel. Overnight Sonamarg.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Sonamarg → Srinagar — Return & Leisure",
        details:
          "Drive back to Srinagar (80 km). Afternoon free for last-minute shopping — Kashmiri carpets, crewel embroidery, and dry fruits. Evening Shikara ride at sunset on Dal Lake. Farewell dinner. Overnight Srinagar.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Srinagar — Departure",
        details:
          "Morning sunrise over Dal Lake from the houseboat deck. Transfer to Srinagar airport (SXR). Kashmir Tour concludes — the valley, the lake, and the mountains will stay with you forever.",
      },
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
          "Breakfast & Dinner daily; Traditional Wazwan welcome dinner included",
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
    img: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
    popular: true,

    tourFeatures: [
      {
        icon: Building2,
        label: "Luxury Houseboat",
        color: "#6C72E8",
        bg: "#EEF0FD",
      },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Heart, label: "Honeymoon", color: "#1AADA0", bg: "#E8F7F3" },
      {
        icon: Sailboat,
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
      alt: "Kashmir Honeymoon Package — Dal Lake Shikara Houseboat Stay",
    },

    testimonials: [
      {
        id: 1,
        text: "Waking up on the houseboat with mountains reflected on Dal Lake, breakfast served by a floating Shikara, the smell of saffron in the air — Kashmir is the world's most romantic destination, period. NIT was perfect.",
        author: "Rohan & Simran Khanna",
        date: "Travelled May 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "We honeymooned in Kashmir after everyone said go to Maldives. Best decision ever. The private Shikara ride at sunset and the snow at Gulmarg in June were moments from a dream. Thank you NIT.",
        author: "Nikhil & Aarti Desai",
        date: "Travelled June 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
        alt: "Dal Lake Houseboat Honeymoon Kashmir",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2024/11/Kerala-Honeymoon-Tour-Package.png",
        alt: "Shikara Ride Sunset Dal Lake",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
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
        details:
          "Arrive Srinagar airport. Transfer to your luxury houseboat on Dal Lake. Private Shikara welcome ride across the lake — Floating Gardens, Char Chinar, and lotus beds. Candlelight Wazwan dinner on the houseboat. Overnight Srinagar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Sunset Shikara",
        details:
          "Morning visit to Nishat Bagh and Shalimar Bagh — the Mughal emperor's love letters to Kashmir. Afternoon at Shankaracharya Temple hilltop. Private sunset Shikara ride on Dal Lake. Romantic dinner on the houseboat deck. Overnight Srinagar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar → Gulmarg — Snow & Gondola Romance",
        details:
          "Drive to Gulmarg (50 km). Ride the Gulmarg Gondola — 2nd highest cable car in the world — for sweeping snow-peak views. Couple's walk through the flower meadows. Check-in to boutique Gulmarg hotel. Overnight Gulmarg.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Gulmarg → Pahalgam — Valley of Shepherds",
        details:
          "Drive to Pahalgam (140 km) through the Wular Lake region. Check-in to a riverside resort on the Lidder River. Evening stroll along the river banks — snow-melt waters, pine forests, and mountain air. Overnight Pahalgam.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Pahalgam — Betaab Valley & Aru Valley",
        details:
          "Full day in Pahalgam's valleys. Betaab Valley — the lush meadow made famous by Bollywood's most iconic scenes. Aru Valley — a quiet hamlet surrounded by glaciers and alpine flowers. Optional pony ride. Romantic picnic lunch. Overnight Pahalgam.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Pahalgam → Srinagar — Return & Farewell",
        details:
          "Drive back to Srinagar (88 km). Afternoon at Lal Chowk market — Kashmiri carpets, Pashmina shawls, and crewel embroidery. Final private Shikara ride at dusk. Farewell dinner on the houseboat. Overnight Srinagar.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Srinagar — Departure",
        details:
          "Wake to a last Dal Lake sunrise from the houseboat deck. Transfer to Srinagar Airport (SXR). Kashmir Honeymoon Tour concludes — the mountains, the lake, and the love story stay with you forever.",
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
          "Breakfast & Dinner daily; Candlelight Wazwan dinner & private Shikara ride included",
      },
      { label: "Best Time", value: "April–October" },
      { label: "Group Size", value: "Couples — Private Honeymoon Tour" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },

  // ─────────────────────────────────────────────────────────
  // 🏔️  KASHMIR → LADAKH GRAND TOUR
  // ─────────────────────────────────────────────────────────

  {
    id: 511,
    country: "India",
    place: "Leh",
    title: "Kashmir to Ladakh Grand Tour",
    type: "Adventure ",
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
    img: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
    popular: true,

    tourFeatures: [
      { icon: Tent, label: "Camp Stay", color: "#6C72E8", bg: "#EEF0FD" },
      {
        icon: UtensilsCrossed,
        label: "Meals",
        color: "#F4884A",
        bg: "#FEF0E8",
      },
      { icon: Bike, label: "Adventure", color: "#1AADA0", bg: "#E8F7F3" },
      { icon: Mountain, label: "Sightseeing", color: "#E8508A", bg: "#FFF0F4" },
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

    tourManagerCompany: "Namaste India Trip",

    heroImage: {
      src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
      alt: "Kashmir to Ladakh Grand Tour — Srinagar to Manali via Kargil and Pangong",
    },

    testimonials: [
      {
        id: 1,
        text: "14 days, two worlds — lush Kashmir and barren Ladakh. From Dal Lake's floating gardens to Pangong's blue silence, this grand tour is the ultimate Indian road journey. NIT handled every pass and valley flawlessly.",
        author: "Vikram & Ananya Sharma",
        date: "Travelled July 2025",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
      {
        id: 2,
        text: "Kargil and Lamayuru were unexpected highlights nobody talks about. The Leh–Manali highway finale through Rohtang was surreal. One trip, every landscape India has to offer. Thank you NIT.",
        author: "Rajesh & Pooja Mehta",
        date: "Travelled August 2024",
        manager: "Namaste India Trip Team",
        managerRole: "Tour Manager",
      },
    ],

    thumbnails: [
      {
        id: 1,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Ladakh-Adventure-Tour-Packages.webp",
        alt: "Pangong Tso Ladakh Grand Tour",
      },
      {
        id: 2,
        src: "https://www.namasteindiatrip.com/include/footer/kashmir-tour-packages.jpg",
        alt: "Dal Lake Srinagar Kashmir",
      },
      {
        id: 3,
        src: "https://www.namasteindiatrip.com/wp-content/uploads/2025/07/Sikkim-Darjeeling-Holiday-Packages.webp",
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
        details:
          "Arrive Srinagar airport. Transfer to houseboat on Dal Lake. 2-hour Shikara ride past Char Chinar Island, Floating Gardens, and the lake bazaar. Welcome dinner on the houseboat. Overnight Srinagar.",
      },
      {
        day: 2,
        date: "Day 2",
        title: "Srinagar — Mughal Gardens & Pahalgam Excursion",
        details:
          "Morning visit to Nishat Bagh, Shalimar Bagh, and Chashma Shahi Mughal Gardens. Full-day excursion to Pahalgam (88 km) — Betaab Valley, Aru Valley, and Chandanwari. Return for dinner on houseboat. Overnight Srinagar.",
      },
      {
        day: 3,
        date: "Day 3",
        title: "Srinagar — Gulmarg Gondola Ride",
        details:
          "Full-day excursion to Gulmarg (50 km). Ride the world's 2nd highest cable car — Gulmarg Gondola — for sweeping Himalayan views. Optional skiing and snow activities. Return to houseboat for dinner. Overnight Srinagar.",
      },
      {
        day: 4,
        date: "Day 4",
        title: "Srinagar → Sonamarg → Kargil",
        details:
          "Checkout and drive to Kargil (200 km) via Sonamarg — the 'Meadow of Gold'. Cross Zoji La Pass. Stop at Drass — India's coldest town and site of the 1999 Kargil War. Visit Kargil War Memorial. Overnight Kargil.",
      },
      {
        day: 5,
        date: "Day 5",
        title: "Kargil → Lamayuru → Leh",
        details:
          "Drive to Leh (200 km) via Lamayuru — Ladakh's oldest monastery perched above the surreal Moonland landscape. Visit Alchi Monastery and Magnetic Hill en route. Arrive Leh, check-in and rest. Overnight Leh.",
      },
      {
        day: 6,
        date: "Day 6",
        title: "Leh — Acclimatization & Local Sightseeing",
        details:
          "Rest morning for high-altitude acclimatization (3,500 m). Afternoon visit to Shanti Stupa at sunset, 17th-century Leh Palace, and Namgyal Tsemo Monastery. Evening walk through Leh Market. Overnight Leh.",
      },
      {
        day: 7,
        date: "Day 7",
        title: "Leh — Monastery Circuit & Sangam",
        details:
          "Visit Thiksey Monastery (resembles Tibet's Potala Palace), Hemis Monastery (largest in Ladakh), and Shey Palace. Sangam — confluence of the Indus and Zanskar rivers. Magnetic Hill stop. Overnight Leh.",
      },
      {
        day: 8,
        date: "Day 8",
        title: "Leh → Khardung La → Nubra Valley",
        details:
          "Drive over Khardung La Pass (5,359 m) — photo stop at one of the world's highest motorable roads. Descend to Nubra Valley (120 km). Bactrian camel safari at Hunder Sand Dunes. Campfire dinner under Himalayan skies. Overnight Nubra Valley.",
      },
      {
        day: 9,
        date: "Day 9",
        title: "Nubra Valley → Shyok River → Pangong Tso",
        details:
          "Drive to Pangong Tso (140 km) via the scenic Shyok River Valley. First view of the legendary blue-green lake at 4,350 m. Check-in to lakeside camp. Candlelight dinner by the water. Overnight Pangong Tso.",
      },
      {
        day: 10,
        date: "Day 10",
        title: "Pangong Tso — Sunrise & Full Day at the Lake",
        details:
          "Wake before dawn for the Pangong Tso sunrise — the lake shifts from deep cobalt to blazing gold. Morning walk along the shore. Afternoon at leisure — photography, optional kayaking, or quiet time by the Indo-China border lake. Overnight Pangong Tso.",
      },
      {
        day: 11,
        date: "Day 11",
        title: "Pangong Tso → Leh via Chang La Pass",
        details:
          "Drive back to Leh (220 km) over Chang La Pass (5,360 m). Afternoon free for Leh Market shopping — Pashmina, turquoise jewellery, Ladakhi handicrafts. Farewell dinner at a Leh heritage restaurant. Overnight Leh.",
      },
      {
        day: 12,
        date: "Day 12",
        title: "Leh → Sarchu — Leh–Manali Highway Begins",
        details:
          "Begin the legendary Leh–Manali Highway. Drive through Upshi and cross Tanglang La Pass (5,328 m). Descend into the high plains of Morey. Arrive Sarchu (4,290 m) camp by evening. Overnight Sarchu camp.",
      },
      {
        day: 13,
        date: "Day 13",
        title: "Sarchu → Rohtang Pass → Manali",
        details:
          "Cross Baralacha La (4,890 m) and Rohtang Pass (3,978 m) — dramatic shift from barren desert to pine-forested Kullu Valley. Arrive Manali by evening. Celebration dinner. Overnight Manali.",
      },
      {
        day: 14,
        date: "Day 14",
        title: "Manali — Solang Valley & Departure",
        details:
          "Morning excursion to Solang Valley and Hadimba Devi Temple (16th-century pagoda in cedar forest). Last browse at Manali Mall Road. Transfer to Bhuntar Airport or bus stand. Kashmir to Ladakh Grand Tour concludes.",
      },
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
          "Breakfast & Dinner daily; Campfire dinner at Nubra & Pangong included",
      },
      { label: "Best Time", value: "June–September" },
      { label: "Group Size", value: "Private & Small Group Tours available" },
    ],

    onViewItinerary: () => console.log("view itinerary clicked"),
  },
];
export const SPECIALITIES = [
  "Honeymoon packages",
  "Corporate tours",
  "School/college trips",
  "Religious yatras",
  "Luxury stays",
  "Budget backpacking trips",
  "Weekend Delhi-to-hills tours",
  "Hill Stations & Nature Destinations",
  "Beach Holidays",
];
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
