export type CountryData = {
  slug: string;
  name: string;
  flag: string;
  entryNote: string;
  flightNote: string;
  currency: string;
  visaNote: string;
  popularTours: string[];
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  heroHeading: string;
  heroSubheading: string;
  faqs: { question: string; answer: string }[];
};

export const countriesData: CountryData[] = [
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    entryNote:
      "Most US travelers fly into Paro via Bangkok, Delhi, or Kathmandu. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: USA → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 20–24 hours total.",
    currency: "USD",
    visaNote:
      "US citizens require a Bhutan e-Visa, processed through your licensed tour operator before arrival.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 10 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from USA – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Plan your Bhutan trip from the USA with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Delhi to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/usa",
    heroHeading: "Bhutan Tours from the USA",
    heroSubheading:
      "Your journey to the Kingdom of Happiness starts here. Licensed local guide, fully customized itineraries, and seamless visa support — from your first inquiry to your Paro landing.",
    faqs: [
      {
        question: "How do I get to Bhutan from the USA?",
        answer:
          "Fly from any major US city to Bangkok (BKK) or Delhi (DEL), then connect to Paro International Airport (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 20–24 hours.",
      },
      {
        question: "Do US citizens need a visa for Bhutan?",
        answer:
          "Yes. US citizens require a Bhutan e-Visa, which must be arranged through a licensed Bhutanese tour operator like Indruka Tours before you travel. We handle the entire visa process for you.",
      },
      {
        question: "What is the best time to visit Bhutan from the USA?",
        answer:
          "March–May (spring) and September–November (autumn) offer the best weather, clear Himalayan views, and major festivals like Paro Tshechu and Thimphu Tshechu.",
      },
      {
        question: "How much does a Bhutan tour from the USA cost?",
        answer:
          "Tour packages start from approximately $2,500 USD per person for a 7-day itinerary, inclusive of accommodation, meals, guide, and transport within Bhutan. Contact us for a free custom quote.",
      },
    ],
  },
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    entryNote:
      "Indian travelers can enter Bhutan by land via Phuentsholing (our base) or fly into Paro from Delhi, Kolkata, or Mumbai.",
    flightNote:
      "Direct flights available from Delhi (DEL), Kolkata (CCU), and Mumbai (BOM) to Paro (PBH) on Druk Air. Land entry via Phuentsholing is also popular.",
    currency: "INR",
    visaNote:
      "Indian citizens do not require a visa for Bhutan. A valid Indian passport or Voter ID is sufficient for entry.",
    popularTours: [
      "Bhutan Cultural Tour – 5 Days",
      "Paro & Thimphu Weekend Tour – 3 Days",
      "Bhutan Festival Tour – 7 Days",
      "Bumthang Spiritual Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from India – Land Entry Phuentsholing | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from India with a licensed local guide. No visa required for Indian citizens. Land entry via Phuentsholing or fly to Paro from Delhi, Kolkata & Mumbai. Free quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/india",
    heroHeading: "Bhutan Tours from India",
    heroSubheading:
      "No visa. No hassle. Just the Himalayas. Enter Bhutan by road through Phuentsholing or fly direct to Paro — your licensed local guide takes care of everything.",
    faqs: [
      {
        question: "Do Indian citizens need a visa for Bhutan?",
        answer:
          "No. Indian citizens do not require a visa to enter Bhutan. A valid Indian passport or Election Commission Voter ID card is sufficient.",
      },
      {
        question: "Can I enter Bhutan by road from India?",
        answer:
          "Yes. The most popular land entry point is Phuentsholing (West Bengal border), which is our base. We can arrange full pickup and tour from Phuentsholing.",
      },
      {
        question: "What is the best time to visit Bhutan from India?",
        answer:
          "March–May and September–November are ideal. Festival seasons (Paro Tshechu in March/April and Thimphu Tshechu in September/October) are especially popular with Indian travelers.",
      },
      {
        question: "How much does a Bhutan tour from India cost?",
        answer:
          "Tour packages start from approximately ₹25,000 per person for a 5-day itinerary including accommodation, meals, guide, and transfers. Contact us for a personalized quote.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    entryNote:
      "Canadian travelers typically fly into Paro via Bangkok or Delhi. Our team handles your Bhutan e-Visa and full itinerary.",
    flightNote:
      "Typical routing: Canada → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 22–26 hours total.",
    currency: "CAD",
    visaNote:
      "Canadian citizens require a Bhutan e-Visa, arranged through a licensed tour operator. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Haa Valley – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from Canada – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Explore Bhutan from Canada with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Bangkok or Delhi to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/canada",
    heroHeading: "Bhutan Tours from Canada",
    heroSubheading:
      "From Vancouver to Paro, from Toronto to Tiger's Nest — your Bhutan journey, fully planned by a licensed local guide with end-to-end support.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Canada?",
        answer:
          "Fly from Toronto (YYZ) or Vancouver (YVR) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 22–26 hours.",
      },
      {
        question: "Do Canadian citizens need a visa for Bhutan?",
        answer:
          "Yes. Canadian citizens require a Bhutan e-Visa arranged through a licensed tour operator. Indruka Tours handles the complete visa application process on your behalf.",
      },
      {
        question: "What is the best time for Canadians to visit Bhutan?",
        answer:
          "Spring (March–May) and autumn (September–November) are the best seasons, with clear skies and festivals. Many Canadians combine Bhutan with Nepal or India for a longer Asia trip.",
      },
      {
        question: "What does a Bhutan tour from Canada cost?",
        answer:
          "Packages start from approximately CAD 3,200 per person for a 7-day tour including accommodation, meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    entryNote:
      "German travelers fly into Paro via Bangkok, Delhi, or Kathmandu. Druk Air and Bhutan Airlines operate connecting flights.",
    flightNote:
      "Typical routing: Germany → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 12–18 hours total.",
    currency: "EUR",
    visaNote:
      "German citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Germany – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Discover Bhutan from Germany with a licensed local expert. Cultural tours, trekking & luxury packages. Fly via Bangkok or Delhi to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/germany",
    heroHeading: "Bhutan Tours from Germany",
    heroSubheading:
      "From Frankfurt to the Himalayas — experience Bhutan's ancient monasteries, pristine valleys, and warm hospitality with a fully licensed local guide.",
    faqs: [
      {
        question: "How do I get to Bhutan from Germany?",
        answer:
          "Fly from Frankfurt (FRA) or Munich (MUC) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH). Total travel time is approximately 12–18 hours depending on your connection.",
      },
      {
        question: "Do German citizens need a visa for Bhutan?",
        answer:
          "Yes. German citizens require a Bhutan e-Visa, which must be arranged through a licensed Bhutanese tour operator before departure. We handle the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from Germany?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with comfortable temperatures and the country's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from Germany?",
        answer:
          "Packages start from approximately €2,800 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    entryNote:
      "Australian travelers fly into Paro via Bangkok or Delhi. Short connecting flights available on Druk Air.",
    flightNote:
      "Typical routing: Australia → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 14–20 hours total.",
    currency: "AUD",
    visaNote:
      "Australian citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Haa Valley – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from Australia – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Plan your Bhutan trip from Australia with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Bangkok or Delhi to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/australia",
    heroHeading: "Bhutan Tours from Australia",
    heroSubheading:
      "From Sydney to the Kingdom of Happiness — your fully guided Bhutan adventure, planned by a licensed local expert from start to finish.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Australia?",
        answer:
          "Fly from Sydney (SYD) or Melbourne (MEL) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines.",
      },
      {
        question: "Do Australian citizens need a visa for Bhutan?",
        answer:
          "Yes. Australians require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours manages this process fully.",
      },
      {
        question: "When is the best time to visit Bhutan from Australia?",
        answer:
          "Spring (March–May) and autumn (September–November) are the best seasons for clear weather, Himalayan views, and cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Australia cost?",
        answer:
          "Packages start from approximately AUD 3,800 per person for a 7-day tour with accommodation, meals, guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    entryNote:
      "UK travelers fly into Paro via Bangkok, Delhi, or Kathmandu on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: UK → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 12–16 hours total.",
    currency: "GBP",
    visaNote:
      "UK citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Festival Tour – 10 Days",
      "Bhutan Trekking Tour – 9 Days",
    ],
    metaTitle:
      "Bhutan Tours from UK – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from the UK with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Delhi to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/uk",
    heroHeading: "Bhutan Tours from the UK",
    heroSubheading:
      "From London to the Last Shangri-La — a fully guided Bhutan journey with a licensed local expert, tailored entirely to you.",
    faqs: [
      {
        question: "How do I get to Bhutan from the UK?",
        answer:
          "Fly from London (LHR or LGW) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH). Total travel time is approximately 12–16 hours.",
      },
      {
        question: "Do UK citizens need a visa for Bhutan?",
        answer:
          "Yes. UK citizens require a Bhutan e-Visa arranged through a licensed tour operator. Indruka Tours handles the full visa process before your departure.",
      },
      {
        question: "What is the best time for UK travelers to visit Bhutan?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather and coincide with Bhutan's most famous festivals.",
      },
      {
        question: "How much does a Bhutan tour from the UK cost?",
        answer:
          "Packages start from approximately £2,200 per person for a 7-day cultural tour with accommodation, meals, guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    flag: "🇵🇭",
    entryNote:
      "Filipino travelers fly into Paro via Bangkok or Singapore. Druk Air and Bhutan Airlines operate connecting flights from both hubs.",
    flightNote:
      "Typical routing: Philippines → Bangkok (BKK) or Singapore (SIN) → Paro (PBH). Flight time approx. 8–12 hours total.",
    currency: "PHP",
    visaNote:
      "Filipino citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours handles the full process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Philippines – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Explore Bhutan from the Philippines with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Singapore to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/philippines",
    heroHeading: "Bhutan Tours from the Philippines",
    heroSubheading:
      "From Manila to the Himalayas — experience Bhutan's sacred monasteries, pristine valleys, and warm hospitality with a fully licensed local guide.",
    faqs: [
      {
        question: "How do I travel to Bhutan from the Philippines?",
        answer:
          "Fly from Manila (MNL) or Cebu (CEB) to Bangkok (BKK) or Singapore (SIN), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 8–12 hours.",
      },
      {
        question: "Do Filipino citizens need a visa for Bhutan?",
        answer:
          "Yes. Filipino citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours manages the entire visa application process.",
      },
      {
        question: "When is the best time to visit Bhutan from the Philippines?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with clear skies, comfortable temperatures, and Bhutan's most celebrated festivals.",
      },
      {
        question: "What does a Bhutan tour from the Philippines cost?",
        answer:
          "Packages start from approximately PHP 140,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    entryNote:
      "Japanese travelers fly into Paro via Bangkok or Delhi. Both Druk Air and Bhutan Airlines operate connecting flights from these hubs.",
    flightNote:
      "Typical routing: Japan → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 10–14 hours total.",
    currency: "JPY",
    visaNote:
      "Japanese citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours handles the complete process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Zen & Monastery Tour – 8 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Japan – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Discover Bhutan from Japan with a licensed local expert. Cultural tours, monastery treks & festival packages. Fly via Bangkok or Delhi to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/japan",
    heroHeading: "Bhutan Tours from Japan",
    heroSubheading:
      "From Tokyo to Tiger's Nest — two ancient Buddhist cultures, one unforgettable journey. Fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I get to Bhutan from Japan?",
        answer:
          "Fly from Tokyo (NRT or HND) or Osaka (KIX) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 10–14 hours.",
      },
      {
        question: "Do Japanese citizens need a visa for Bhutan?",
        answer:
          "Yes. Japanese citizens require a Bhutan e-Visa arranged through a licensed Bhutanese tour operator before departure. Indruka Tours handles this process completely.",
      },
      {
        question: "What is the best time for Japanese travelers to visit Bhutan?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal. The rhododendron blooms in spring and the golden foliage in autumn are especially popular with Japanese visitors.",
      },
      {
        question: "What does a Bhutan tour from Japan cost?",
        answer:
          "Packages start from approximately ¥380,000 per person for a 7-day cultural tour with accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    entryNote:
      "Indonesian travelers fly into Paro via Bangkok or Singapore, with short connecting flights on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: Indonesia → Bangkok (BKK) or Singapore (SIN) → Paro (PBH). Flight time approx. 8–12 hours total.",
    currency: "IDR",
    visaNote:
      "Indonesian citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from Indonesia – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Indonesia with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Singapore to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/indonesia",
    heroHeading: "Bhutan Tours from Indonesia",
    heroSubheading:
      "From Bali or Jakarta to the Kingdom of Happiness — a fully guided Bhutan journey planned by a licensed local expert, tailored entirely to you.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Indonesia?",
        answer:
          "Fly from Jakarta (CGK) or Bali (DPS) to Bangkok (BKK) or Singapore (SIN), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 8–12 hours.",
      },
      {
        question: "Do Indonesian citizens need a visa for Bhutan?",
        answer:
          "Yes. Indonesian citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Indonesia?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most famous cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Indonesia cost?",
        answer:
          "Packages start from approximately IDR 45,000,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
];