// termsData.ts
// All content for the Terms & Conditions — Indruka Tours and Travels

export const COMPANY_NAME = "Indruka Tours and Travels";
export const COMPANY_EMAIL = "indruka2026@gmail.com";
export const COMPANY_PHONE = "+975 77367954";
export const COMPANY_ADDRESS = "Thimphu, Bhutan";
export const LAST_UPDATED = "January 1, 2025";
export const GOVERNING_LAW = "Kingdom of Bhutan";

export interface TermsSection {
  id: string;
  title: string;
  content: TermsContent[];
}

export type TermsContent =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "note"; text: string };

export const termsSections: TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        type: "paragraph",
        text: `By accessing our website, making a booking, or using any services provided by ${COMPANY_NAME} ("we", "us", "our"), you ("the client", "you") agree to be bound by these Terms and Conditions. Please read them carefully before proceeding with any booking or purchase.`,
      },
      {
        type: "paragraph",
        text: `These Terms and Conditions constitute a legally binding agreement between you and ${COMPANY_NAME}, a licensed tour operator registered in the Kingdom of Bhutan and operating in full compliance with the Tourism Council of Bhutan (TCB) regulations.`,
      },
      {
        type: "note",
        text: "If you do not agree to these Terms and Conditions, please do not use our services or make any bookings through our website.",
      },
    ],
  },
  {
    id: "booking-process",
    title: "Booking Process & Confirmation",
    content: [
      {
        type: "paragraph",
        text: "All tour bookings with Indruka Tours and Travels are subject to availability and are confirmed only upon receipt of a deposit and written confirmation from us. A booking is considered confirmed once you receive an official confirmation email from our team.",
      },
      {
        type: "subheading",
        text: "To complete a booking, you must:",
      },
      {
        type: "list",
        items: [
          "Submit a completed booking inquiry or request through our website or directly to our team",
          "Provide accurate passport details, nationality, and personal information for all travellers",
          "Pay the required deposit (typically 30% of the total tour cost) within the specified timeframe",
          "Receive and retain your written booking confirmation from Indruka Tours and Travels",
          "Ensure your travel insurance is in place before departure",
        ],
      },
      {
        type: "paragraph",
        text: "We reserve the right to decline any booking at our discretion without being required to provide reasons. In such cases, any deposit paid will be refunded in full.",
      },
    ],
  },
  {
    id: "pricing-payment",
    title: "Pricing & Payment",
    content: [
      {
        type: "paragraph",
        text: `All prices quoted by ${COMPANY_NAME} are in US Dollars (USD) unless otherwise stated, and are based on the prevailing Tourism Council of Bhutan (TCB) Sustainable Development Fee (SDF) and applicable tariffs at the time of quotation.`,
      },
      {
        type: "subheading",
        text: "Payment Schedule:",
      },
      {
        type: "list",
        items: [
          "Deposit: 30% of total tour cost due within 7 days of booking confirmation",
          "Balance: Remaining 70% due no later than 60 days before tour departure",
          "For bookings made within 60 days of departure: Full payment is due immediately upon confirmation",
          "All payments must be received in cleared funds before tour commencement",
        ],
      },
      {
        type: "subheading",
        text: "Accepted Payment Methods:",
      },
      {
        type: "list",
        items: [
          "Bank wire / international transfer",
          "Major credit cards (Visa, MasterCard, American Express) — a 3% processing fee applies",
          "PayPal (fees may apply)",
          "Secure online payment gateway",
        ],
      },
      {
        type: "note",
        text: "Bhutan's SDF (Sustainable Development Fee) and visa fees are included in our quoted tour packages as applicable. Any changes to SDF rates imposed by TCB after booking confirmation may result in a price adjustment, for which we will notify you promptly.",
      },
    ],
  },
  {
    id: "cancellation-client",
    title: "Cancellation by the Client",
    content: [
      {
        type: "paragraph",
        text: "If you need to cancel your booking, you must notify us in writing (by email) as soon as possible. Cancellation charges are calculated from the date we receive your written cancellation notice, as follows:",
      },
      {
        type: "list",
        items: [
          "More than 90 days before departure: Deposit forfeited; balance refunded in full",
          "60–89 days before departure: 25% of total tour cost",
          "30–59 days before departure: 50% of total tour cost",
          "15–29 days before departure: 75% of total tour cost",
          "Less than 15 days before departure or no-show: 100% of total tour cost — no refund",
        ],
      },
      {
        type: "paragraph",
        text: "Please note that visa fees, permit fees, and Bhutan SDF charges paid to the Tourism Council of Bhutan are non-refundable under any circumstances once processed.",
      },
      {
        type: "note",
        text: "We strongly recommend purchasing comprehensive travel insurance that includes cancellation cover to protect yourself against unforeseen circumstances.",
      },
    ],
  },
  {
    id: "cancellation-company",
    title: "Cancellation or Changes by Indruka Tours and Travels",
    content: [
      {
        type: "paragraph",
        text: `${COMPANY_NAME} reserves the right to cancel, modify, or postpone a tour in the following circumstances:`,
      },
      {
        type: "list",
        items: [
          "Insufficient number of participants (we will notify you at least 30 days in advance)",
          "Natural disasters, extreme weather, or force majeure events",
          "Government travel advisories or restrictions imposed by Bhutanese authorities",
          "Safety concerns that make the tour inadvisable",
          "Failure by the client to make payments as required",
        ],
      },
      {
        type: "subheading",
        text: "If we cancel your tour:",
      },
      {
        type: "list",
        items: [
          "You will receive a full refund of all amounts paid to us (excluding non-recoverable third-party costs)",
          "We will offer an alternative tour of equivalent value wherever possible",
          "We will not be liable for any additional costs you have incurred (e.g. flights, visas, insurance) unless the cancellation is due to our negligence",
        ],
      },
      {
        type: "paragraph",
        text: "In the event of minor itinerary changes due to operational requirements or local conditions, we reserve the right to substitute accommodation, transport, or activities of equal or superior quality without prior notice.",
      },
    ],
  },
  {
    id: "itinerary-changes",
    title: "Itinerary & Tour Amendments",
    content: [
      {
        type: "paragraph",
        text: "While we make every effort to operate tours as described, Bhutan's geography, weather, and local conditions can sometimes necessitate changes. We reserve the right to alter routes, accommodation, transport, and activities where necessary for operational or safety reasons.",
      },
      {
        type: "subheading",
        text: "Client-requested amendments:",
      },
      {
        type: "list",
        items: [
          "Requests to amend a confirmed itinerary must be made in writing",
          "An amendment fee of USD 50 per change may apply",
          "Changes requested within 30 days of departure are subject to availability and may not always be possible",
          "Any price difference resulting from amendments will be charged or refunded accordingly",
        ],
      },
    ],
  },
  {
    id: "bhutan-requirements",
    title: "Bhutan Entry Requirements & Visas",
    content: [
      {
        type: "paragraph",
        text: "All international visitors to Bhutan (except Indian, Bangladeshi, and Maldivian nationals) must obtain a Bhutan visa and travel through a licensed Bhutanese tour operator. Indruka Tours and Travels will process your visa application on your behalf once your booking is confirmed and full payment received.",
      },
      {
        type: "subheading",
        text: "Client responsibilities:",
      },
      {
        type: "list",
        items: [
          "Ensure your passport is valid for at least 6 months beyond your intended travel dates",
          "Provide accurate and complete personal information for visa processing",
          "Obtain any required transit visas independently (e.g. Indian transit visa if flying via India)",
          "Comply with all Bhutanese laws, regulations, and customs during your visit",
          "Respect restricted areas and sacred sites as instructed by your guide",
        ],
      },
      {
        type: "note",
        text: "Visa approval is at the sole discretion of the Tourism Council of Bhutan. Indruka Tours and Travels accepts no liability if a visa is refused, though we will assist wherever possible.",
      },
    ],
  },
  {
    id: "sdf",
    title: "Sustainable Development Fee (SDF)",
    content: [
      {
        type: "paragraph",
        text: "Bhutan charges all international tourists a Sustainable Development Fee (SDF) as mandated by the Tourism Council of Bhutan. This fee contributes to Bhutan's free education, healthcare, and environmental conservation programmes.",
      },
      {
        type: "paragraph",
        text: "The SDF is included in our quoted tour prices for applicable nationalities. Current rates and exemptions (including for nationals from India, Bangladesh, and Maldives) are subject to change by the Government of Bhutan without notice.",
      },
      {
        type: "paragraph",
        text: "In the event of a rate change after your booking is confirmed, we will advise you of any impact on your total price. We are not liable for changes to SDF rates imposed by the Government of Bhutan.",
      },
    ],
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    content: [
      {
        type: "paragraph",
        text: "Comprehensive travel insurance is strongly recommended and is the sole responsibility of the client. We strongly advise that your policy covers:",
      },
      {
        type: "list",
        items: [
          "Medical expenses and emergency evacuation (especially important given Bhutan's remote terrain)",
          "Trip cancellation and curtailment",
          "Loss of personal belongings and baggage",
          "Personal liability",
          "High-altitude trekking and adventure activities (if applicable to your itinerary)",
          "COVID-19 related disruptions",
        ],
      },
      {
        type: "paragraph",
        text: `${COMPANY_NAME} accepts no liability for any costs arising from the absence of, or inadequacy of, your travel insurance.`,
      },
    ],
  },
  {
    id: "health-fitness",
    title: "Health, Fitness & Medical Requirements",
    content: [
      {
        type: "paragraph",
        text: "Bhutan's altitude ranges from approximately 200m to over 7,500m above sea level. Many popular destinations including Thimphu, Paro, and Punakha sit between 1,200m and 2,400m. Some treks reach considerably higher altitudes.",
      },
      {
        type: "paragraph",
        text: "You are responsible for ensuring you are physically fit to undertake the tour or trek you have booked. We strongly recommend consulting your doctor before travelling, particularly if you have any existing medical conditions.",
      },
      {
        type: "list",
        items: [
          "Inform us of any medical conditions, dietary requirements, or special needs at the time of booking",
          "Carry sufficient personal medication for the duration of your trip",
          "Follow your guide's instructions regarding altitude acclimatisation",
          "We reserve the right to exclude a participant from a trek or activity if we consider it unsafe for them to continue",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: `${COMPANY_NAME} acts as an organiser and agent on your behalf. While we take every care in selecting our suppliers and planning your itinerary, we cannot be held responsible for events beyond our reasonable control.`,
      },
      {
        type: "subheading",
        text: "We shall not be liable for:",
      },
      {
        type: "list",
        items: [
          "Death, personal injury, illness, or loss of property unless caused directly by our proven negligence",
          "Delays, changes, or cancellations caused by weather, natural disasters, or force majeure events",
          "Acts or omissions of third-party suppliers (airlines, hotels, transport providers)",
          "Loss, damage, or theft of personal belongings during the tour",
          "Political unrest, government actions, or travel restrictions",
          "Your failure to obtain appropriate visas, permits, or insurance",
          "Indirect or consequential losses of any kind",
        ],
      },
      {
        type: "paragraph",
        text: "Where liability cannot be excluded by law, our total liability to you shall not exceed the total price paid for the tour.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content: [
      {
        type: "paragraph",
        text: `${COMPANY_NAME} shall not be in breach of these Terms and Conditions and shall not be liable to you for any failure or delay in performing our obligations where such failure or delay results from events, circumstances, or causes beyond our reasonable control.`,
      },
      {
        type: "list",
        items: [
          "Acts of God — floods, earthquakes, landslides, severe weather",
          "Pandemic, epidemic, or public health emergency",
          "War, terrorism, civil unrest, or government action",
          "Strikes, industrial action, or transport disruption",
          "Road closures or blockades",
          "Any other event beyond our reasonable control",
        ],
      },
      {
        type: "paragraph",
        text: "In such circumstances, we will make every effort to offer you an alternative arrangement or a partial refund based on recoverable costs. We will not be liable for any additional losses you incur as a result.",
      },
    ],
  },
  {
    id: "client-conduct",
    title: "Client Conduct & Responsibilities",
    content: [
      {
        type: "paragraph",
        text: "All clients are expected to behave in a manner that is respectful to local culture, the environment, and fellow travellers. Bhutan is a deeply spiritual and culturally rich nation; we ask all guests to honour and observe local customs.",
      },
      {
        type: "list",
        items: [
          "Dress modestly and respectfully when visiting temples, monasteries, and sacred sites",
          "Follow all instructions given by your tour guide and local authorities",
          "Do not photograph restricted areas, monks, or religious ceremonies without permission",
          "Respect Bhutan's strict environmental policies — no littering, no smoking in public areas",
          "Do not import or consume items that are restricted or illegal in Bhutan",
          "Treat all service personnel with courtesy and respect",
        ],
      },
      {
        type: "paragraph",
        text: `${COMPANY_NAME} reserves the right to terminate a client's participation in a tour without refund if their behaviour is deemed inappropriate, dangerous, or disrespectful to others or to local culture.`,
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints & Dispute Resolution",
    content: [
      {
        type: "paragraph",
        text: "We are committed to delivering exceptional service. If you have a complaint during your tour, please inform your guide or our local team immediately so we can resolve the issue as quickly as possible.",
      },
      {
        type: "paragraph",
        text: `If your complaint is not resolved to your satisfaction during the tour, please submit a written complaint to us at ${COMPANY_EMAIL} within 30 days of your return. Include all relevant details and supporting evidence.`,
      },
      {
        type: "paragraph",
        text: "We will acknowledge your complaint within 5 business days and endeavour to provide a full response within 28 days.",
      },
      {
        type: "note",
        text: "Complaints submitted more than 30 days after the tour end date may not be considered.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: `All content on the ${COMPANY_NAME} website — including text, images, logos, itineraries, videos, and design — is the intellectual property of ${COMPANY_NAME} or our licensors and is protected by copyright law.`,
      },
      {
        type: "list",
        items: [
          "You may not reproduce, distribute, or commercially use any content from our website without prior written permission",
          "You may share links to our website for personal, non-commercial purposes",
          "Unauthorised use of our brand name, logo, or content may result in legal action",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law & Jurisdiction",
    content: [
      {
        type: "paragraph",
        text: `These Terms and Conditions are governed by and construed in accordance with the laws of the ${GOVERNING_LAW}. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of the ${GOVERNING_LAW}.`,
      },
      {
        type: "paragraph",
        text: "We will always endeavour to resolve any dispute amicably and in good faith before resorting to formal legal proceedings.",
      },
    ],
  },
  {
    id: "amendments",
    title: "Amendments to These Terms",
    content: [
      {
        type: "paragraph",
        text: `${COMPANY_NAME} reserves the right to update or amend these Terms and Conditions at any time. Any changes will be published on our website and will take effect from the date of publication.`,
      },
      {
        type: "paragraph",
        text: "Your continued use of our website or services after any such changes constitutes your acceptance of the updated Terms. We recommend reviewing this page periodically.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        type: "paragraph",
        text: `If you have any questions about these Terms and Conditions, please contact us:`,
      },
      {
        type: "list",
        items: [
          `Company: ${COMPANY_NAME}`,
          `Email: ${COMPANY_EMAIL}`,
          `Phone: ${COMPANY_PHONE}`,
          `Address: ${COMPANY_ADDRESS}`,
        ],
      },
    ],
  },
];
