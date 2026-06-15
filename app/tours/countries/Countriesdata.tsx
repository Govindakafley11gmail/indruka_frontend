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
    slug: "australia",
    name: "Australia",
    flag: "https://flagcdn.com/w80/au.png",
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
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "https://flagcdn.com/w80/bd.png",
    entryNote:
      "Bangladeshi travelers can fly into Paro via Kolkata or Delhi, or take a scenic land route through India to Phuentsholing.",
    flightNote:
      "Typical routing: Bangladesh → Kolkata (CCU) or Delhi (DEL) → Paro (PBH). Flight time approx. 4–8 hours total.",
    currency: "BDT",
    visaNote:
      "Bangladeshi citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 5 Days",
      "Tiger's Nest & Punakha – 4 Days",
      "Bhutan Festival Tour – 7 Days",
      "Bhutan Weekend Getaway – 3 Days",
    ],
    metaTitle:
      "Bhutan Tours from Bangladesh – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Bangladesh with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Kolkata or Delhi to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/bangladesh",
    heroHeading: "Bhutan Tours from Bangladesh",
    heroSubheading:
      "From Dhaka to the Himalayas — one of the closest South Asian gateways to Bhutan. Fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Bangladesh?",
        answer:
          "Fly from Dhaka (DAC) to Kolkata (CCU) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 4–8 hours.",
      },
      {
        question: "Do Bangladeshi citizens need a visa for Bhutan?",
        answer:
          "Yes. Bangladeshi citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Bangladesh?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Bangladesh cost?",
        answer:
          "Packages start from approximately BDT 280,000 per person for a 5-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
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
    slug: "china",
    name: "China",
    flag: "https://flagcdn.com/w80/cn.png",
    entryNote:
      "Chinese travelers fly into Paro via Bangkok or Kathmandu. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: China → Bangkok (BKK) or Kathmandu (KTM) → Paro (PBH). Flight time approx. 6–10 hours total.",
    currency: "CNY",
    visaNote:
      "Chinese citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from China – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from China with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Kathmandu to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/china",
    heroHeading: "Bhutan Tours from China",
    heroSubheading:
      "From Beijing or Shanghai to the Kingdom of Happiness — a fully guided Bhutan journey planned by a licensed local expert, tailored entirely to you.",
    faqs: [
      {
        question: "How do I travel to Bhutan from China?",
        answer:
          "Fly from Beijing (PEK), Shanghai (PVG), or Chengdu (CTU) to Bangkok (BKK) or Kathmandu (KTM), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 6–10 hours.",
      },
      {
        question: "Do Chinese citizens need a visa for Bhutan?",
        answer:
          "Yes. Chinese citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from China?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most famous cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from China cost?",
        answer:
          "Packages start from approximately CNY 18,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    flag: "https://flagcdn.com/w80/fr.png",
    entryNote:
      "French travelers fly into Paro via Bangkok or Delhi. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: France → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 12–16 hours total.",
    currency: "EUR",
    visaNote:
      "French citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from France – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from France with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Bangkok or Delhi to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/france",
    heroHeading: "Bhutan Tours from France",
    heroSubheading:
      "From Paris to the Himalayas — experience Bhutan's ancient monasteries, pristine valleys, and warm hospitality with a fully licensed local guide.",
    faqs: [
      {
        question: "How do I get to Bhutan from France?",
        answer:
          "Fly from Paris (CDG) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 12–16 hours.",
      },
      {
        question: "Do French citizens need a visa for Bhutan?",
        answer:
          "Yes. French citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from France?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with comfortable temperatures and the country's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from France?",
        answer:
          "Packages start from approximately €2,800 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "https://flagcdn.com/w80/de.png",
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
    slug: "india",
    name: "India",
    flag: "https://flagcdn.com/w80/in.png",
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
    slug: "indonesia",
    name: "Indonesia",
    flag: "https://flagcdn.com/w80/id.png",
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
  {
    slug: "italy",
    name: "Italy",
    flag: "https://flagcdn.com/w80/it.png",
    entryNote:
      "Italian travelers fly into Paro via Bangkok or Delhi. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Italy → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 12–16 hours total.",
    currency: "EUR",
    visaNote:
      "Italian citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Italy – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Italy with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Bangkok or Delhi to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/italy",
    heroHeading: "Bhutan Tours from Italy",
    heroSubheading:
      "From Rome to the Roof of the World — discover Bhutan's timeless monasteries, Himalayan valleys, and legendary hospitality with a licensed local guide.",
    faqs: [
      {
        question: "How do I get to Bhutan from Italy?",
        answer:
          "Fly from Rome (FCO) or Milan (MXP) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 12–16 hours.",
      },
      {
        question: "Do Italian citizens need a visa for Bhutan?",
        answer:
          "Yes. Italian citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from Italy?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with comfortable temperatures and Bhutan's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from Italy?",
        answer:
          "Packages start from approximately €2,800 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "https://flagcdn.com/w80/jp.png",
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
    slug: "malaysia",
    name: "Malaysia",
    flag: "https://flagcdn.com/w80/my.png",
    entryNote:
      "Malaysian travelers fly into Paro via Bangkok or Singapore, with convenient connecting flights on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: Malaysia → Bangkok (BKK) or Singapore (SIN) → Paro (PBH). Flight time approx. 6–10 hours total.",
    currency: "MYR",
    visaNote:
      "Malaysian citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from Malaysia – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Malaysia with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Singapore to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/malaysia",
    heroHeading: "Bhutan Tours from Malaysia",
    heroSubheading:
      "From Kuala Lumpur to the Kingdom of Happiness — a short hop to one of Asia's most magical destinations, fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Malaysia?",
        answer:
          "Fly from Kuala Lumpur (KUL) to Bangkok (BKK) or Singapore (SIN), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 6–10 hours.",
      },
      {
        question: "Do Malaysian citizens need a visa for Bhutan?",
        answer:
          "Yes. Malaysian citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Malaysia?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Malaysia cost?",
        answer:
          "Packages start from approximately MYR 12,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "myanmar",
    name: "Myanmar",
    flag: "https://flagcdn.com/w80/mm.png",
    entryNote:
      "Myanmar travelers fly into Paro via Bangkok or Kolkata. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Myanmar → Bangkok (BKK) or Kolkata (CCU) → Paro (PBH). Flight time approx. 5–9 hours total.",
    currency: "MMK",
    visaNote:
      "Myanmar citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Myanmar – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Myanmar with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Kolkata to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/myanmar",
    heroHeading: "Bhutan Tours from Myanmar",
    heroSubheading:
      "From Yangon to the Himalayas — two great Buddhist nations, one extraordinary journey. Fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Myanmar?",
        answer:
          "Fly from Yangon (RGN) or Mandalay (MDL) to Bangkok (BKK) or Kolkata (CCU), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 5–9 hours.",
      },
      {
        question: "Do Myanmar citizens need a visa for Bhutan?",
        answer:
          "Yes. Myanmar citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Myanmar?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Myanmar cost?",
        answer:
          "Packages start from approximately MMK 15,000,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "nepal",
    name: "Nepal",
    flag: "https://flagcdn.com/w80/np.png",
    entryNote:
      "Nepali travelers have the most convenient access to Bhutan with direct flights from Kathmandu to Paro, making it the closest international gateway to Bhutan.",
    flightNote:
      "Typical routing: Nepal → Kathmandu (KTM) → Paro (PBH). Direct flight time approx. 1.5–2 hours.",
    currency: "NPR",
    visaNote:
      "Nepali citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 5 Days",
      "Tiger's Nest & Punakha – 4 Days",
      "Bhutan Festival Tour – 7 Days",
      "Bhutan Trekking Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from Nepal – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Nepal with a licensed local expert. Direct flights from Kathmandu to Paro. Cultural tours, trekking & festival packages. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/nepal",
    heroHeading: "Bhutan Tours from Nepal",
    heroSubheading:
      "From Kathmandu to Paro in under 2 hours — the closest Himalayan neighbor, a world apart. Fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Nepal?",
        answer:
          "Fly directly from Kathmandu (KTM) to Paro (PBH) on Druk Air or Bhutan Airlines. It is one of the shortest international flights to Bhutan, taking approximately 1.5–2 hours.",
      },
      {
        question: "Do Nepali citizens need a visa for Bhutan?",
        answer:
          "Yes. Nepali citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Nepal?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather and coincide with Bhutan's most famous festivals. Many travelers combine both countries in one trip.",
      },
      {
        question: "What does a Bhutan tour from Nepal cost?",
        answer:
          "Packages start from approximately NPR 280,000 per person for a 5-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    flag: "https://flagcdn.com/w80/ph.png",
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
    slug: "russia",
    name: "Russia",
    flag: "https://flagcdn.com/w80/ru.png",
    entryNote:
      "Russian travelers fly into Paro via Delhi or Bangkok. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Russia → Delhi (DEL) or Bangkok (BKK) → Paro (PBH). Flight time approx. 10–16 hours total.",
    currency: "RUB",
    visaNote:
      "Russian citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Russia – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Russia with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Delhi or Bangkok to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/russia",
    heroHeading: "Bhutan Tours from Russia",
    heroSubheading:
      "From Moscow to the Mountains — discover Bhutan's ancient Buddhist culture, pristine Himalayan valleys, and legendary hospitality with a licensed local guide.",
    faqs: [
      {
        question: "How do I get to Bhutan from Russia?",
        answer:
          "Fly from Moscow (SVO) to Delhi (DEL) or Bangkok (BKK), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 10–16 hours.",
      },
      {
        question: "Do Russian citizens need a visa for Bhutan?",
        answer:
          "Yes. Russian citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from Russia?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with clear skies, comfortable temperatures, and major Bhutanese festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from Russia?",
        answer:
          "Packages start from approximately RUB 250,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "https://flagcdn.com/w80/sg.png",
    entryNote:
      "Singaporean travelers enjoy one of the most direct connections to Paro, with short connecting flights via Bangkok on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: Singapore (SIN) → Bangkok (BKK) → Paro (PBH). Flight time approx. 5–7 hours total.",
    currency: "SGD",
    visaNote:
      "Singaporean citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Luxury Tour – 8 Days",
    ],
    metaTitle:
      "Bhutan Tours from Singapore – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Singapore with a licensed local expert. Cultural tours, Tiger's Nest treks & luxury packages. Fly via Bangkok to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/singapore",
    heroHeading: "Bhutan Tours from Singapore",
    heroSubheading:
      "From the Lion City to the Kingdom of Happiness — one of Southeast Asia's quickest routes to Bhutan, fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Singapore?",
        answer:
          "Fly from Singapore (SIN) to Bangkok (BKK), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 5–7 hours.",
      },
      {
        question: "Do Singaporean citizens need a visa for Bhutan?",
        answer:
          "Yes. Singaporean citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Singapore?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most famous cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Singapore cost?",
        answer:
          "Packages start from approximately SGD 3,500 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    flag: "https://flagcdn.com/w80/za.png",
    entryNote:
      "South African travelers fly into Paro via Dubai or Bangkok, with connecting flights on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: South Africa → Dubai (DXB) or Bangkok (BKK) → Paro (PBH). Flight time approx. 16–22 hours total.",
    currency: "ZAR",
    visaNote:
      "South African citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 7 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from South Africa – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from South Africa with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Dubai or Bangkok to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/south-africa",
    heroHeading: "Bhutan Tours from South Africa",
    heroSubheading:
      "From Cape Town or Johannesburg to the Himalayas — a remarkable journey to one of the world's last hidden kingdoms, fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I get to Bhutan from South Africa?",
        answer:
          "Fly from Johannesburg (JNB) or Cape Town (CPT) to Dubai (DXB) or Bangkok (BKK), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 16–22 hours.",
      },
      {
        question: "Do South African citizens need a visa for Bhutan?",
        answer:
          "Yes. South African citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from South Africa?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with comfortable temperatures and Bhutan's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from South Africa?",
        answer:
          "Packages start from approximately ZAR 52,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "https://flagcdn.com/w80/kr.png",
    entryNote:
      "South Korean travelers fly into Paro via Bangkok or Delhi. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: South Korea → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 8–12 hours total.",
    currency: "KRW",
    visaNote:
      "South Korean citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Zen & Monastery Tour – 8 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from South Korea – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from South Korea with a licensed local expert. Cultural tours, monastery treks & festival packages. Fly via Bangkok or Delhi to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/south-korea",
    heroHeading: "Bhutan Tours from South Korea",
    heroSubheading:
      "From Seoul to Tiger's Nest — two dynamic Asian cultures, one extraordinary Himalayan journey. Fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I get to Bhutan from South Korea?",
        answer:
          "Fly from Seoul (ICN) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 8–12 hours.",
      },
      {
        question: "Do South Korean citizens need a visa for Bhutan?",
        answer:
          "Yes. South Korean citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles this process completely.",
      },
      {
        question: "What is the best time for South Koreans to visit Bhutan?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal. The rhododendron blooms in spring and the golden foliage in autumn are especially popular with Korean visitors.",
      },
      {
        question: "What does a Bhutan tour from South Korea cost?",
        answer:
          "Packages start from approximately KRW 3,500,000 per person for a 7-day cultural tour with accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    flag: "https://flagcdn.com/w80/lk.png",
    entryNote:
      "Sri Lankan travelers fly into Paro via Kolkata or Bangkok, with connecting flights on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: Sri Lanka → Kolkata (CCU) or Bangkok (BKK) → Paro (PBH). Flight time approx. 6–10 hours total.",
    currency: "LKR",
    visaNote:
      "Sri Lankan citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Sri Lanka – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Sri Lanka with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Kolkata or Bangkok to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/sri-lanka",
    heroHeading: "Bhutan Tours from Sri Lanka",
    heroSubheading:
      "From Colombo to the Kingdom of Happiness — two island and mountain Buddhist nations, one extraordinary journey. Fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Sri Lanka?",
        answer:
          "Fly from Colombo (CMB) to Kolkata (CCU) or Bangkok (BKK), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 6–10 hours.",
      },
      {
        question: "Do Sri Lankan citizens need a visa for Bhutan?",
        answer:
          "Yes. Sri Lankan citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Sri Lanka?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Sri Lanka cost?",
        answer:
          "Packages start from approximately LKR 2,500,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "https://flagcdn.com/w80/se.png",
    entryNote:
      "Swedish travelers fly into Paro via Bangkok or Delhi. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Sweden → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 14–18 hours total.",
    currency: "SEK",
    visaNote:
      "Swedish citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 7 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Sweden – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Sweden with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Bangkok or Delhi to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/sweden",
    heroHeading: "Bhutan Tours from Sweden",
    heroSubheading:
      "From Stockholm to the Himalayas — swap Scandinavian serenity for Himalayan spirituality with a fully guided Bhutan journey by a licensed local expert.",
    faqs: [
      {
        question: "How do I get to Bhutan from Sweden?",
        answer:
          "Fly from Stockholm (ARN) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 14–18 hours.",
      },
      {
        question: "Do Swedish citizens need a visa for Bhutan?",
        answer:
          "Yes. Swedish citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from Sweden?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with comfortable temperatures and Bhutan's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from Sweden?",
        answer:
          "Packages start from approximately SEK 32,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "https://flagcdn.com/w80/ch.png",
    entryNote:
      "Swiss travelers fly into Paro via Bangkok or Delhi. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Switzerland → Bangkok (BKK) or Delhi (DEL) → Paro (PBH). Flight time approx. 12–16 hours total.",
    currency: "CHF",
    visaNote:
      "Swiss citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 7 Days",
      "Bhutan Luxury Tour – 9 Days",
    ],
    metaTitle:
      "Bhutan Tours from Switzerland – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Switzerland with a licensed local expert. Cultural tours, trekking & luxury packages. Fly via Bangkok or Delhi to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/switzerland",
    heroHeading: "Bhutan Tours from Switzerland",
    heroSubheading:
      "From the Alps to the Himalayas — trade one mountain paradise for another and discover Bhutan's ancient culture with a fully licensed local guide.",
    faqs: [
      {
        question: "How do I get to Bhutan from Switzerland?",
        answer:
          "Fly from Zurich (ZRH) or Geneva (GVA) to Bangkok (BKK) or Delhi (DEL), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 12–16 hours.",
      },
      {
        question: "Do Swiss citizens need a visa for Bhutan?",
        answer:
          "Yes. Swiss citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from Switzerland?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with clear skies, dramatic Himalayan scenery, and Bhutan's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from Switzerland?",
        answer:
          "Packages start from approximately CHF 3,200 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    flag: "https://flagcdn.com/w80/tw.png",
    entryNote:
      "Taiwanese travelers fly into Paro via Bangkok or Hong Kong. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Taiwan → Bangkok (BKK) or Hong Kong (HKG) → Paro (PBH). Flight time approx. 8–12 hours total.",
    currency: "TWD",
    visaNote:
      "Taiwanese citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 6 Days",
      "Bhutan Zen & Monastery Tour – 8 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Taiwan – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Taiwan with a licensed local expert. Cultural tours, monastery treks & festival packages. Fly via Bangkok or Hong Kong to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/taiwan",
    heroHeading: "Bhutan Tours from Taiwan",
    heroSubheading:
      "From Taipei to Tiger's Nest — a journey between two vibrant Asian cultures and one of the world's most serene Himalayan kingdoms. Fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Taiwan?",
        answer:
          "Fly from Taipei (TPE) to Bangkok (BKK) or Hong Kong (HKG), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 8–12 hours.",
      },
      {
        question: "Do Taiwanese citizens need a visa for Bhutan?",
        answer:
          "Yes. Taiwanese citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Taiwan?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Taiwan cost?",
        answer:
          "Packages start from approximately TWD 95,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    flag: "https://flagcdn.com/w80/th.png",
    entryNote:
      "Thai travelers have a convenient direct connection to Paro from Bangkok, making Bhutan one of the most accessible Himalayan destinations from Thailand.",
    flightNote:
      "Typical routing: Thailand → Bangkok (BKK) → Paro (PBH). Flight time approx. 3–4 hours total.",
    currency: "THB",
    visaNote:
      "Thai citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Thailand – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Thailand with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Direct flight from Bangkok to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/thailand",
    heroHeading: "Bhutan Tours from Thailand",
    heroSubheading:
      "From Bangkok to the Last Shangri-La — one of the shortest routes to Bhutan in all of Asia. Fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Thailand?",
        answer:
          "Fly directly from Bangkok (BKK) to Paro (PBH) on Druk Air or Bhutan Airlines. It is one of the shortest flights to Bhutan from anywhere in Southeast Asia, taking approximately 3–4 hours.",
      },
      {
        question: "Do Thai citizens need a visa for Bhutan?",
        answer:
          "Yes. Thai citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Thailand?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with clear skies and Bhutan's most celebrated festivals.",
      },
      {
        question: "What does a Bhutan tour from Thailand cost?",
        answer:
          "Packages start from approximately THB 90,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "https://flagcdn.com/w80/tr.png",
    entryNote:
      "Turkish travelers fly into Paro via Dubai or Bangkok. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Turkey → Dubai (DXB) or Bangkok (BKK) → Paro (PBH). Flight time approx. 10–14 hours total.",
    currency: "TRY",
    visaNote:
      "Turkish citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 8 Days",
      "Bhutan Trekking Tour – 10 Days",
      "Tiger's Nest & Punakha – 7 Days",
      "Bhutan Festival Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Turkey – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Turkey with a licensed local expert. Cultural tours, trekking & festival packages. Fly via Dubai or Bangkok to Paro. Visa support included. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/turkey",
    heroHeading: "Bhutan Tours from Turkey",
    heroSubheading:
      "From Istanbul to the Himalayas — two ancient civilizations at the crossroads of history and spirituality. Fully guided by a licensed local Bhutanese expert.",
    faqs: [
      {
        question: "How do I get to Bhutan from Turkey?",
        answer:
          "Fly from Istanbul (IST) to Dubai (DXB) or Bangkok (BKK), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 10–14 hours.",
      },
      {
        question: "Do Turkish citizens need a visa for Bhutan?",
        answer:
          "Yes. Turkish citizens require a Bhutan e-Visa arranged through a licensed tour operator before departure. Indruka Tours handles the complete process.",
      },
      {
        question: "What is the best time to visit Bhutan from Turkey?",
        answer:
          "Spring (March–May) and autumn (September–November) are ideal, with comfortable temperatures and Bhutan's most celebrated festivals.",
      },
      {
        question: "What is the cost of a Bhutan tour from Turkey?",
        answer:
          "Packages start from approximately TRY 95,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transport. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "https://flagcdn.com/w80/ae.png",
    entryNote:
      "UAE-based travelers enjoy one of the most direct routes to Paro, with short connecting flights via Delhi or Bangkok on Druk Air or Bhutan Airlines.",
    flightNote:
      "Typical routing: UAE → Delhi (DEL) or Bangkok (BKK) → Paro (PBH). Flight time approx. 6–9 hours total.",
    currency: "AED",
    visaNote:
      "UAE residents and citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Luxury Tour – 8 Days",
      "Bhutan Festival Tour – 9 Days",
    ],
    metaTitle:
      "Bhutan Tours from UAE – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from UAE with a licensed local expert. Cultural tours, luxury packages & festival experiences. Fly via Delhi or Bangkok to Paro. Visa support included. Free quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/uae",
    heroHeading: "Bhutan Tours from UAE",
    heroSubheading:
      "From Dubai or Abu Dhabi to the Last Shangri-La — one of the quickest connections from the Gulf to the Himalayas, fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from the UAE?",
        answer:
          "Fly from Dubai (DXB) or Abu Dhabi (AUH) to Delhi (DEL) or Bangkok (BKK), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 6–9 hours.",
      },
      {
        question: "Do UAE residents need a visa for Bhutan?",
        answer:
          "Yes. Both UAE citizens and expatriate residents require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from the UAE?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from the UAE cost?",
        answer:
          "Packages start from approximately AED 9,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "uk",
    name: "UK",
    flag: "https://flagcdn.com/w80/gb.png",
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
    slug: "usa",
    name: "USA",
    flag: "https://flagcdn.com/w80/us.png",
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
    slug: "vietnam",
    name: "Vietnam",
    flag: "https://flagcdn.com/w80/vn.png",
    entryNote:
      "Vietnamese travelers fly into Paro via Bangkok or Singapore. Connecting flights available on Druk Air and Bhutan Airlines.",
    flightNote:
      "Typical routing: Vietnam → Bangkok (BKK) or Singapore (SIN) → Paro (PBH). Flight time approx. 6–10 hours total.",
    currency: "VND",
    visaNote:
      "Vietnamese citizens require a Bhutan e-Visa arranged through a licensed tour operator before arrival. Indruka Tours manages the full visa process.",
    popularTours: [
      "Bhutan Cultural Tour – 7 Days",
      "Tiger's Nest & Punakha – 5 Days",
      "Bhutan Festival Tour – 9 Days",
      "Bhutan Trekking Tour – 10 Days",
    ],
    metaTitle:
      "Bhutan Tours from Vietnam – Licensed Local Guide | Indruka Tours",
    metaDescription:
      "Book Bhutan tours from Vietnam with a licensed local expert. Cultural tours, Tiger's Nest treks & festival packages. Fly via Bangkok or Singapore to Paro. Free custom quote!",
    canonicalUrl:
      "https://www.indrukatours.com/bhutan-tours-from/vietnam",
    heroHeading: "Bhutan Tours from Vietnam",
    heroSubheading:
      "From Hanoi or Ho Chi Minh City to the Kingdom of Happiness — two rich Southeast and South Asian cultures, one extraordinary Himalayan journey. Fully guided by a licensed local expert.",
    faqs: [
      {
        question: "How do I travel to Bhutan from Vietnam?",
        answer:
          "Fly from Hanoi (HAN) or Ho Chi Minh City (SGN) to Bangkok (BKK) or Singapore (SIN), then connect to Paro (PBH) on Druk Air or Bhutan Airlines. Total travel time is approximately 6–10 hours.",
      },
      {
        question: "Do Vietnamese citizens need a visa for Bhutan?",
        answer:
          "Yes. Vietnamese citizens require a Bhutan e-Visa arranged through a licensed tour operator before travel. Indruka Tours handles the complete visa application on your behalf.",
      },
      {
        question: "When is the best time to visit Bhutan from Vietnam?",
        answer:
          "Spring (March–May) and autumn (September–November) offer the best weather, clear Himalayan views, and Bhutan's most celebrated cultural festivals.",
      },
      {
        question: "What does a Bhutan tour from Vietnam cost?",
        answer:
          "Packages start from approximately VND 65,000,000 per person for a 7-day cultural tour including accommodation, all meals, licensed guide, and in-country transfers. Contact us for a custom quote.",
      },
    ],
  },
];