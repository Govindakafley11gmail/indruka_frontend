import {
  Bird,
  Building2,
  Bus,
  Camera,
  Car,
  Crown,
  Drama,
  Flame,
  FlameKindling,
  Footprints,
  Heart,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  Mountain,
  Music2,
  Plane,
  ScrollText,
  Ship,
  Sparkles,
  Star,
  Tent,
  Train,
  TreePine,
  UserCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import type { TourCardProps } from "../../Bhutan/landing/card";

export const BhutanItem: TourCardProps[] = [
  {
    title: "Bhutan Tour with Haa Valley",
    place: "Paro",
    itinerary:
      "1N Paro • 2N Thimphu • 1N Punakha • 1N Phobjikha • 1N Tang Valley • 1N Bumthang • 1N Thimphu • 1N Haa • 2N Paro",
    country: "Bhutan",
    price: 'From $3,370', // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
    type:["Cultural","Family"],
    tags: [
      "10N/11D",
      "Cultural Tour",
      "Valley Explorer",
      "Haa Valley",
      "Max 16 Guests",
    ],
    images: [
      "/Haa_Valley.jpg", // To be filled
      "/haa1.jpg", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels & Homestay" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Guided Hikes" },
      { icon: Flame, label: "Hot Stone Bath" },
    ],
  },
  {
    title: "Jomolhari Trekking in Bhutan",
    place: "Pharo",
    itinerary:
      "2N Paro • 1N Shingkharap • 1N Soi Thangkha • 2N Jangothang • 1N Lingzhi • 1N Shodu • 1N Thimphu • 1N Punakha • 1N Paro",
    country: "Bhutan",
    price: '$ 3,980', // To be filled
    oldPrice: 0, // To be filled
    discount:"", // To be filled
    type:["Trekking"],
    tags: ["11N/12D", "Trekking", "Himalayan Adventure", "Max 16 Guests"],
    images: [
      "/Jomolhari.jpg",
      "/jomolhari2.png", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Tent, label: "Camp Stay" },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Guided Treks" },
    ],
  },

  
  {
    title: "Bhutan Short Trip",
    place: "Paro",
    itinerary: "1N Thimphu • 2N Paro",
    country: "Bhutan",
    price: "$ 1,065", // To be filled
    oldPrice: 0, // To be filled
    discount: "", 
     type:["Family","Cultural"],
    tags: ["3N/4D", "Cultural Tour", "Tiger's Nest", "Max 16 Guests"],
    images: [
      "/short_trip.jpg", // To be filled
      "Paro.jpg", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
    ],
  },
  {
    title: "Paro Festival Tour",
    place: "Paro",
    itinerary: "2N Thimphu • 2N Punakha • 3N Paro",
    country: "Bhutan",
    price:"$ 2,300", // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
     type:["Family","Festivals"],
    tags: ["7N/8D", "Festival Tour", "Paro Tsechu", "Max 16 Guests"],
    images: [
      "/paro-festival1.jpg", // To be filled
      "/paro-festival2.jpg", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Landmark, label: "Festival Entry" },
    ],
  },
  {
    title: "Best of Bhutan Tour",
    place: "Paro",
    itinerary: "2N Thimphu • 2N Phobjikha • 1N Punakha • 2N Paro",
    country: "Bhutan",
    price:"$ 2,550", // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
            type:["Family","Cultural"],

    tags: [
      "8N/9D",
      "Cultural Tour",
      "Tiger's Nest",
      "Black-Necked Cranes",
      "Max 16 Guests",
    ],
    images: [
      "/thimphu1.jpg", // To be filled
      "/dochula_overview.jpg", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Bird, label: "Crane Sanctuary Visit" },
    ],
  },
  
{
    title: "Bhutan Cultural Journey",
    place: "Paro",
    itinerary: "2N Thimphu • 1N Phobjikha • 1N Tang Valley • 1N Jakar • 2N Punakha • 2N Paro",
    country: "Bhutan",
    price: 0, // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
    tags: [
      "9N/10D",
      "Cultural Tour",
      "Tiger's Nest",
      "Central Bhutan",
      "Max 16 Guests",
    ],
    images: [
      "/paro2.jpg", // To be filled
      "/paro-festival.jpg", // To be filled
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Car, label: "Transfers" },
      { icon: UserCheck, label: "Licensed Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Bird, label: "Crane Sanctuary Visit" },
      { icon: Landmark, label: "Trongsa & Bumthang Dzongs" },
      { icon: TreePine, label: "Dochula Pass Panorama" },
    ],
},
 {
    title: "Bhutan Luxury Tour",
    place: "Paro",
    itinerary: "2N Thimphu • 2N Punakha • 2N Gangtey • 2N Bumthang • 2N Paro",
    country: "Bhutan",
    price: 0, // To be filled
    oldPrice: 0, // To be filled
    discount: "", // To be filled
        type:["Family","Luxury"],
    tags: [
      "10N/11D",
      "Luxury",
      "Tiger's Nest",
      "Zhiwaling Heritage",
      "Indruka Tours and Travels",
    ],
    images: [
      "bhutan-lux.jpg", // To be filled
     "bhutan-lux2.jpg", 
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Plane, label: "Domestic Flight (Bumthang–Paro)" },
      { icon: Building2, label: "Luxury Hotels" },
      { icon: UtensilsCrossed, label: "Fine Dining" },
      { icon: Car, label: "Luxury Transfers" },
      { icon: UserCheck, label: "Expert Private Guide" },
      { icon: Mountain, label: "Tiger's Nest Hike" },
      { icon: Bird, label: "Crane Sanctuary Visit" },
      { icon: Sparkles, label: "GNH Talk & Meditation" },
      { icon: HeartHandshake, label: "Community Immersion" },
      { icon: FlameKindling, label: "Traditional Hot Stone Bath" },
      { icon: Drama, label: "Private Farewell Dinner" },
    ],
  },
  //   {
  //   title: "Happiness Trek",
  //   place: "Paro",
  //   itinerary: "2N Bumthang • 4N Camping • 2N Phobjikha • 1N Punakha • 1N Thimphu • 2N Paro",
  //   country: "Bhutan",
  //   price: 0, // To be filled
  //   oldPrice: 0, // To be filled
  //   discount: "", // To be filled
  //       type:["Trekking"],
  //   tags: [
  //     "13N/14D",
  //     "Trek & Walk",
  //     "Moderate",
  //     "Central Bhutan",
  //     "Village Immersion",
  //   ],
  //   images: [
  //     "", // To be filled
  //     "", // To be filled
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Domestic Flight (Bumthang)", optional: true },
  //     { icon: Building2, label: "Hotels & Guesthouses" },
  //     { icon: Home, label: "Village Homestays" },
  //     { icon: Tent, label: "Indruka Camping" },
  //     { icon: UtensilsCrossed, label: "All Meals" },
  //     { icon: Car, label: "Transfers" },
  //     { icon: UserCheck, label: "Expert Trek Guide" },
  //     { icon: Footprints, label: "Trekking Crew & Pack Animals" },
  //     { icon: Mountain, label: "Tiger's Nest Hike" },
  //     { icon: Bird, label: "Crane Sanctuary Visit" },
  //     { icon: Flame, label: "Campfire & Ara Tasting" },
  //     { icon: Music2, label: "Village Folk Dance Evening" },
  //   ],
  // },
    {
    title: "From Historical to Modern Day Bhutan",
    place: "Phuentsholing",
    itinerary: "2N Phuentsholing • 1N Thimphu • 2N Paro",
    country: "Bhutan",
    price: 21000,
    oldPrice: 23334,
    discount: "10% OFF",
        type:["Family","Cultural"],
    // currency: "INR",
    tags: [
      "5N/6D",
      "Cultural Tour",
      "Budget Friendly",
      "From Phuentsholing",
      "Indruka Tours and Travel",
    ],
    images: [
      "/phuentsholing.jpg", // To be filled
      "/phuentsholing1.jpg", // To be filled
    ],
    inclusions: [
      { icon: Building2, label: "Base Category Hotels" },
      { icon: UtensilsCrossed, label: "Meals (MAP — Breakfast & Dinner)" },
      { icon: Car, label: "Non-AC Cab Transfers" },
      { icon: UserCheck, label: "Local Guide & Driver" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Landmark, label: "Dzongs & Temples" },
      { icon: ScrollText, label: "Innerline Permit Included" },
    ],
  },

];

export const Indiaitem: TourCardProps[] = [
  {
    title: "Himachal Pradesh Packages",
    place: "Himachal Pradesh",
    itinerary: "Manali  • Shimla ",
    country: "India",
    price: 43000,
    oldPrice: 46000,
    discount: "6% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Deluxe"],
    images: [
      "/himachal2.jpg",
      "/Hima-Scence5.jpg",
       "/himaExoctic2.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Goa Packages",
    place: "Goa",
    itinerary: "South Goa  • North Goa ",
    country: "India",
    price: 43000,
    oldPrice: 46000,
    discount: "6% OFF",
    tags: ["Multi-Day", "Pilgrimage", "Deluxe"],
    images: [
      "/goa3.jpg",
      "/goa4.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  
  {
    title: "Nainital Packages",
    place: "Nainital",
    itinerary: "Delhi • Nainital • Corbett • Ranikhet • Almora",
    country: "India",
    price: 10900,
    oldPrice: 13300,
    discount: "18% OFF",
    tags: ["Multi-Day", "Hill Station", "Customized"],
    images: [
      "/nainital5.jpg",
      "/nainital4.jpg",
        "/nainital-bird.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Darjeeling Packages",
    place: "Darjeeling",
    itinerary: "Bagdogra • Gangtok • Nathula Pass • Darjeeling",
    country: "India",
    price: 13999,
    oldPrice: 17499,
    discount: "20% OFF",
    tags: ["Multi-Day", "Hill Station", "Customized"],
    images: [
      "/darjeeling1.jpg",
      "/darjeeling10.jpg",
       "/dar-gangtok2.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Car, label: "Transfers" },
    ],
  },


  {
    title: "Kovalam Packages",
    place: "Kovalam",
    itinerary: "Cochin • Munnar • Thekkady • Alleppey • Kovalam • Trivandrum",
    country: "India",
    price: 19999,
    oldPrice: 24999,
    discount: "20% OFF",
    tags: ["Multi-Day", "Beach", "Backwaters"],
    images: [
      "/Kovalam.jpg",
      "Kovalam1.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Car, label: "Transfers" },
    ],
  },


  // ─── 2. KEDARNATH TEMPLE ─────────────────────────────────
  {
    title: "Badrinath Kedarnath Do Dham Yatra",
    place: "Kedarnath",
    itinerary: "Haridwar • Rishikesh • Kedarnath • Badrinath",
    country: "India",
    price: 24900,
    oldPrice: 28000,
    discount: "11% OFF",
    tags: ["8N/7D", "Do Dham Yatra", "Bestseller"],
    images: [
      "/badrinath1.jpg",
     "/badrinath2.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 3. BADRINATH TEMPLE ─────────────────────────────────
  {
    title: "Char Dham Yatra Package from Delhi",
    place: "Badrinath",
    itinerary:
      "Delhi • Rishikesh • Yamunotri • Gangotri • Kedarnath • Badrinath",
    country: "India",
    price: 43900,
    oldPrice: 46900,
    discount: "6% OFF",
    tags: ["12N/11D", "Char Dham", "Top Rated"],
    images: [
      "/chardham1.jpg",
      "/chardham2.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 4. KEDARNATH + BADRINATH — HELICOPTER (Premium) ─────
  // {
  //   title: "Char Dham Yatra By Helicopter — Premium",
  //   place: "Kedarnath",
  //   itinerary: "Dehradun • Yamunotri • Gangotri • Kedarnath • Badrinath",
  //   country: "India",
  //   price: 230000,
  //   oldPrice: 235000,
  //   discount: "2% OFF",
  //   tags: ["6N/5D", "Helicopter Yatra", "Luxury"],
  //   images: [
  //     "https://www.namasteindiatrip.com/include/top-selling-nit-tour-5.jpg",
  //     "https://www.namasteindiatrip.com/wp-content/uploads/2024/10/chardham_heli_slavnk.jpg",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Helicopter" },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Bus, label: "Transfers" },
  //   ],
  // },

  // ─── 5. VAISHNO DEVI ─────────────────────────────────────
  {
    title: "Mata Vaishno Devi Pilgrimage Yatra",
    place: "Vaishno Devi",
    itinerary: "Delhi • Jammu • Katra • Vaishno Devi Shrine",
    country: "India",
    price: 14900,
    oldPrice: 16500,
    discount: "10% OFF",
    tags: ["4N/3D", "Pilgrimage Tour", "Popular"],
    images: [
      "/Vaishno-Hima1.jpg",
"/Vaishno-Hima6.jpg",    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 6. GOLDEN TEMPLE, AMRITSAR ──────────────────────────
  {
    title: "Golden Temple Amritsar Spiritual Tour",
    place: "Amritsar",
    itinerary: "Delhi • Amritsar • Wagah Border • Jallianwala Bagh",
    country: "India",
    price: 12500,
    oldPrice: 15000,
    discount: "17% OFF",
    tags: ["4N/3D", "Sikh Pilgrimage", "Popular"],
    images: [
      "/golden2.jpg",
"/golden5.jpg",    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 7. JAGANNATH TEMPLE, PURI ───────────────────────────
  {
    title: "Bhubaneswar Puri Konark Jagannath Temple Tour",
    place: "Puri",
    itinerary: "Bhubaneswar • Konark • Puri • Jagannath Temple",
    country: "India",
    price: 12900,
    oldPrice: 14400,
    discount: "10% OFF",
    tags: ["4N/3D", "Temple Tour", "Popular"],
    images: [
      "/bhuPK2.jpg",
       "/bhuPK3.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 8. RISHIKESH — YOGA + SPIRITUAL ─────────────────────
  {
    title: "Yoga & Meditation Spiritual Tour — Rishikesh",
    place: "Rishikesh",
    itinerary: "Delhi • Haridwar • Rishikesh • Triveni Ghat",
    country: "India",
    price: 70819,
    oldPrice: 76000,
    discount: "7% OFF",
    tags: ["6N/5D", "Yoga & Spiritual", "Trending"],
    images: [
      "/Udelight1.jpg",
 "/UDelight2.png",    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: HeartHandshake, label: "Yoga Classes" },
      { icon: Bus, label: "Transfers" },
    ],
  },
  // ─── 1. UDAIPUR — City of Lakes · Destination Weddings ───
  {
    title: "Majestic Rajasthan Royal Tour — Udaipur",
    place: "Udaipur",
    itinerary: "Delhi • Jaipur • Jodhpur • Udaipur",
    country: "India",
    price: 78000,
    oldPrice: 85000,
    discount: "8% OFF",
    tags: ["10N/9D", "Royal Heritage", "Luxury"],
    images: [
      "UDelight3.jpeg",
      "UDelight.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Palace Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  

 

  // ─── 4. JAIPUR — Royal Rajasthan Full Circuit ─────────────
  {
    title: "Royal Rajasthan Grand Tour — Full Circuit",
    place: "Jaipur",
    itinerary:
      "Jaipur • Bikaner • Jaisalmer • Jodhpur • Udaipur • Mount Abu • Ajmer • Pushkar",
    country: "India",
    price: 78000,
    oldPrice: 85000,
    discount: "8% OFF",
    tags: ["10N/9D", "Royal Rajasthan", "Bestseller"],
    images: [
      "/jaipur1.jpg",
"/jaipur.jpg"    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Crown, label: "Heritage Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 5. JAISALMER — Desert Camps & Safari ────────────────
  {
    title: "Jaisalmer Desert Safari & Luxury Camp Experience",
    place: "Jaisalmer",
    itinerary: "Delhi • Bikaner • Jaisalmer • Sam Sand Dunes • Jodhpur",
    country: "India",
    price: 28500,
    oldPrice: 32000,
    discount: "11% OFF",
    tags: ["6N/5D", "Desert Safari", "Luxury Camp"],
    images: [
      "jaisalmer3.jpg",
        "jaisalmer4.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Tent, label: "Luxury Desert Camp" },
      { icon: Camera, label: "Camel Safari" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
      { icon: Star, label: "Cultural Show" },
    ],
  },



  // ─── 7. KERALA BACKWATERS — Premium Houseboat Tourism ────
  {
    title: "Kerala Beaches & Backwaters Premium Houseboat Tour",
    place: "Alleppey",
    itinerary:
      "Cochin • Munnar • Thekkady • Alleppey • Varkala • Kovalam • Trivandrum",
    country: "India",
    price: 24999,
    oldPrice: 28500,
    discount: "12% OFF",
    tags: ["7N/6D", "Houseboat", "Premium"],
    images: [
      "kerala-black7.jpg",
      "kerala-black9.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Ship, label: "Premium Houseboat" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },

  // ─── 8. KERALA BACKWATERS — Honeymoon Luxury ─────────────
  {
    title: "Kerala Honeymoon Luxury Backwaters & Hill Stations",
    place: "Munnar",
    itinerary: "Cochin • Munnar • Alleppey • Kumarakom • Kovalam",
    country: "India",
    price: 35000,
    oldPrice: 40000,
    discount: "13% OFF",
    tags: ["8N/7D", "Honeymoon", "Luxury Backwaters"],
    images: [
      "/Kerala-Munnar1.jpg",
     "/kerala-Munnar2.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Ship, label: "Luxury Houseboat" },
      { icon: Crown, label: "Resort Stay" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
    ],
  },
  {
    title: "Leh Ladakh Adventure Tour Package",
    place: "Leh",
    itinerary:
      "Srinagar • Gulmarg • Sonamarg • Leh • Pangong Tso • Nubra Valley • Manali",
    country: "India",
    price: 70000,
    oldPrice: 75000,
    discount: "7% OFF",
    tags: ["10N/9D", "Adventure Tour", "Trending"],
    images: [
      "/ladak1.jpg",
      "/ladak2.jpg",
      "/ladak4.jpg"
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Hotels" },
      { icon: Camera, label: "Sightseeing" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Bus, label: "Transfers" },
    ],
  },





  

  // ─────────────────────────────────────────────────────────
  // 🌸  KASHMIR
  // ─────────────────────────────────────────────────────────

  {
    title: "Kashmir Tour — Srinagar Gulmarg Pahalgam Sonamarg",
    place: "Srinagar",
    itinerary: "Srinagar • Dal Lake • Pahalgam • Gulmarg • Sonamarg",
    country: "India",
    price: 22000,
    oldPrice: 26000,
    discount: "15% OFF",
    tags: ["7N/6D", "Scenic Holiday", "Bestseller"],
    images: [
      "/kashmir-scene2.jpg",
       "/kashmir-scene4.jpg",
         "/kashmir-scene5.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Ship, label: "Houseboat Stay" },
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Bus, label: "Transfers" },
    ],
  },


 
 
  
  {
    title: "Tamil Nadu Temple Tour",
    place: "Chennai",
    itinerary: "Chennai • Pondicherry • Rameswaram • Kanyakumari • Madurai",
    country: "India",
    price: 38900,
    oldPrice: 41000,
    discount: "5% OFF",
    tags: ["8N/7D", "Temple Tour", "Deluxe"],
    images: [
      "/TamilTemple.jpg",
      "/TamilTemple1.jpg",
    ],
    inclusions: [
      { icon: Building2, label: "Hotels" },
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Plane, label: "Transfers" },
    ],
  },
  {
    title: "Andaman Island Retreat",
    place: "Andaman",
    itinerary: "3N Port Blair • 2N Havelock • Elephant Beach",
    country: "India",
    price: 39000,
    oldPrice: 42000,
    discount: "7% OFF",
    tags: ["5N/6D", "Island Tour", "Premium"],
    images: [
      "/Andaman2.jpg",
      "/Andaman3.jpg",
    ],
    inclusions: [
      { icon: Plane, label: "Flights", optional: true },
      { icon: Building2, label: "Beach Resorts" },
      { icon: Camera, label: "Island Tours" },
      { icon: UtensilsCrossed, label: "Meals" },
    ],
  },
  
  // {
  //   title: "Sikkim & Darjeeling Holiday",
  //   place: "Gangtok",
  //   itinerary: "Kalimpong • Gangtok • Darjeeling",
  //   country: "India",
  //   price: 35000,
  //   oldPrice: 37500,
  //   discount: "7% OFF",
  //   tags: ["5N/6D", "Hill Station", "Standard"],
  //   images: [
  //     "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
  //     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Excursions" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //   ],
  // },
  // {
  //   title: "Royal Rajasthan Tour",
  //   place: "Jaipur",
  //   itinerary: "Jaipur • Bikaner • Jaisalmer • Jodhpur • Udaipur • Pushkar",
  //   country: "India",
  //   price: 78000,
  //   oldPrice: 85000,
  //   discount: "8% OFF",
  //   tags: ["10N/9D", "Heritage Tour", "Luxury"],
  //   images: [
  //     "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
  //     "https://images.unsplash.com/photo-1599661046827-dacde6976549?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //   ],
  // },
  // {
  //   title: "Shirdi – Bhimashankar Pilgrimage",
  //   place: "Shirdi",
  //   itinerary: "Shirdi • Bhimashankar",
  //   country: "India",
  //   price: 26000,
  //   oldPrice: 28000,
  //   discount: "7% OFF",
  //   tags: ["5N/6D", "Pilgrimage", "Standard"],
  //   images: [
  //     "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
  //     "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Building2, label: "Hotels" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: Plane, label: "Transfers" },
  //   ],
  // },
  // {
  //   title: "Jyotirlinga Darshan Yatra",
  //   place: "Mumbai",
  //   itinerary: "12 Jyotirlinga Pilgrimage Tour across India",
  //   country: "India",
  //   price: 110000,
  //   oldPrice: 120000,
  //   discount: "8% OFF",
  //   tags: ["19N/20D", "Pilgrimage", "Deluxe"],
  //   images: [
  //     "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
  //     "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Building2, label: "Hotels" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: Plane, label: "Transfers" },
  //   ],
  // },

  // {
  //   title: "Rameshwaram Madurai Kanyakumari",
  //   place: "Chennai",
  //   itinerary: "Chennai • Mahabalipuram • Madurai • Rameshwaram • Kanyakumari",
  //   country: "India",
  //   price: 42000,
  //   oldPrice: 45000,
  //   discount: "7% OFF",
  //   tags: ["6N/5D", "Temple Tour", "Premium"],
  //   images: [
  //     "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
  //     "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80",
  //   ],
  //   inclusions: [
  //     { icon: Plane, label: "Flights", optional: true },
  //     { icon: Building2, label: "Hotels" },
  //     { icon: Camera, label: "Sightseeing" },
  //     { icon: UtensilsCrossed, label: "Meals" },
  //   ],
  // },
];