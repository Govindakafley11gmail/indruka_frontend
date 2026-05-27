// privacyData.ts
// All content for the Privacy Policy — replace "Indruka Tours and Travels" branding as needed.

export const COMPANY_NAME = "Indruka Tours and Travels";
export const COMPANY_EMAIL = "indruka2026@gmail.com";
export const COMPANY_PHONE = "+975 77367954";
export const COMPANY_ADDRESS = "Thimphu, Bhutan";
export const LAST_UPDATED = "January 1, 2025";

export interface PolicySection {
  id: string;
  title: string;
  content: PolicyContent[];
}

export type PolicyContent =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string };

export const privacySections: PolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      {
        type: "paragraph",
        text: `Welcome to ${COMPANY_NAME}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at ${COMPANY_EMAIL}.`,
      },
      {
        type: "paragraph",
        text: `When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important.`,
      },
      {
        type: "paragraph",
        text: `This privacy notice applies to all information collected through our website, and/or any related services, sales, marketing or events (we refer to them collectively in this privacy notice as the "Services").`,
      },
    ],
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We collect personal information that you voluntarily provide to us when you register on our website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.",
      },
      {
        type: "subheading",
        text: "Personal information provided by you may include:",
      },
      {
        type: "list",
        items: [
          "Name and contact details (email address, phone number, postal address)",
          "Passport information and travel document details required for booking",
          "Date of birth and nationality",
          "Payment information (processed securely through third-party payment processors)",
          "Travel preferences, dietary requirements, and special needs",
          "Emergency contact information",
          "Feedback, reviews, and correspondence with us",
        ],
      },
      {
        type: "subheading",
        text: "Information automatically collected:",
      },
      {
        type: "paragraph",
        text: "When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. As you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and how you interact with the site.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
      },
      {
        type: "list",
        items: [
          "To facilitate account creation and the login process",
          "To process and manage your tour bookings and travel arrangements",
          "To send you booking confirmations, itineraries, and travel updates",
          "To respond to your inquiries and provide customer support",
          "To send you promotional communications (where you have opted in)",
          "To comply with Bhutan Tourism Council regulations and legal requirements",
          "To process visa and permit applications on your behalf",
          "To improve our website and service offerings",
          "To prevent fraudulent transactions and monitor against theft",
          "To enforce our Terms and Conditions",
        ],
      },
    ],
  },
  {
    id: "sharing-information",
    title: "Will Your Information Be Shared With Anyone?",
    content: [
      {
        type: "paragraph",
        text: `We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with the following third parties:`,
      },
      {
        type: "list",
        items: [
          "Bhutan Tourism Council (TCB) — as required by Bhutanese law for all tourist registrations",
          "Hotels, lodges, and accommodation providers included in your itinerary",
          "Domestic airlines and transport operators in Bhutan",
          "Licensed local guides and cultural experts",
          "Payment processing partners (Stripe, PayPal, or similar secure processors)",
          "Government authorities when required by law",
          "Emergency services if necessary for your safety",
        ],
      },
      {
        type: "paragraph",
        text: `We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.`,
      },
    ],
  },
  {
    id: "cookies",
    title: "Do We Use Cookies?",
    content: [
      {
        type: "paragraph",
        text: `We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.`,
      },
      {
        type: "subheading",
        text: "Types of cookies we use:",
      },
      {
        type: "list",
        items: [
          "Essential cookies — necessary for the website to function properly",
          "Analytics cookies — help us understand how visitors interact with our website",
          "Preference cookies — remember your settings and preferences",
          "Marketing cookies — used to track visitors across websites for advertising purposes (only with your consent)",
        ],
      },
      {
        type: "paragraph",
        text: "You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "How Long Do We Keep Your Information?",
    content: [
      {
        type: "paragraph",
        text: `We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).`,
      },
      {
        type: "paragraph",
        text: `When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.`,
      },
      {
        type: "paragraph",
        text: "Booking records are retained for a minimum of 7 years in accordance with Bhutanese financial and tourism regulations.",
      },
    ],
  },
  {
    id: "data-security",
    title: "How Do We Keep Your Information Safe?",
    content: [
      {
        type: "paragraph",
        text: `We have implemented appropriate technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.`,
      },
      {
        type: "paragraph",
        text: "Our security measures include SSL/TLS encryption for all data in transit, secure servers with restricted access, regular security audits, and staff training on data protection best practices.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    content: [
      {
        type: "paragraph",
        text: `In some regions (like the European Economic Area and UK), you have certain rights under applicable data protection laws. These may include the right:`,
      },
      {
        type: "list",
        items: [
          "To request access to and obtain a copy of your personal information",
          "To request rectification or erasure of your personal information",
          "To restrict the processing of your personal information",
          "To data portability — receiving your data in a structured, machine-readable format",
          "To object to the processing of your personal information",
          "To withdraw consent at any time where processing is based on consent",
          "To lodge a complaint with your local data protection authority",
        ],
      },
      {
        type: "paragraph",
        text: `To exercise any of these rights, please contact us at ${COMPANY_EMAIL}. We will respond to your request within 30 days.`,
      },
    ],
  },
  {
    id: "children",
    title: "Do We Collect Information From Minors?",
    content: [
      {
        type: "paragraph",
        text: `We do not knowingly solicit data from or market to children under 18 years of age. By using the website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the website.`,
      },
      {
        type: "paragraph",
        text: `When booking tours that include minors, we collect only the information strictly necessary for travel arrangements (such as passport details and age). This information is handled with the highest level of care and shared only with parties required to facilitate the tour.`,
      },
    ],
  },
  {
    id: "updates",
    title: "Do We Make Updates to This Notice?",
    content: [
      {
        type: "paragraph",
        text: `We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.`,
      },
      {
        type: "paragraph",
        text: `We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.`,
      },
    ],
  },
  {
    id: "contact",
    title: "How Can You Contact Us About This Notice?",
    content: [
      {
        type: "paragraph",
        text: `If you have questions or comments about this notice, you may contact our Data Protection Officer by email at ${COMPANY_EMAIL}, or by post at:`,
      },
      {
        type: "list",
        items: [
          `${COMPANY_NAME}`,
          COMPANY_ADDRESS,
          `Phone: ${COMPANY_PHONE}`,
          `Email: ${COMPANY_EMAIL}`,
        ],
      },
    ],
  },
];
