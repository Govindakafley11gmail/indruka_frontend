import {
  LayoutDashboard,
  ShieldCheck,
  FolderKanban,
  Users,
  Boxes,
  Calculator,
  UserCog,
  KeyRound,
  CreditCard,
  FileCheck,
  FileSearch,
  FileText,
  Landmark,
  ScrollText,
  MarsStroke,
  AccessibilityIcon,
  Group,
  PopcornIcon,
  BriefcaseBusiness,
  BookmarkMinusIcon,
} from "lucide-react";

export const sidebarMenuMain = [
  {
    section: "Menu",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Authentication",
        icon: ShieldCheck,
        children: [
          {
            title: "Users",
            href: "/users",
            icon: Users,
          },
          {
            title: "Roles",
            href: "/roles",
            icon: UserCog,
          },
          {
            title: "Permissions",
            href: "/permissions",
            icon: KeyRound,
          },
        ],
      },
      {
        title: "Master",
        icon: MarsStroke,
        children: [
          {
            title: "Account Group",
            href: "/account-group",
            icon: Group,
          },
          {
            title: "Account Type",
            href: "/account-type",
            icon: AccessibilityIcon,
          },
          {
            title: "Line of Business",
            href: "/line-of-business",
            icon: PopcornIcon,
          },
          {
            title: "Line of Business Product",
            href: "/line-of-business-product",
            icon: BriefcaseBusiness,
          },
          {
            title: "Life Insurance Scheme",
            href: "/life-insurance-scheme",
            icon: BriefcaseBusiness,
          },
          {
            title: "Bonus Rate",
            href: "/bonus-rate",
            icon: BriefcaseBusiness,
          },
        ],
      },
      {
        title: "Party (eKYC)",
        href: "/party",
        icon: FolderKanban,
      },
        {
        title: "Contact",
        href: "/contact",
        icon: LayoutDashboard,
      },
      {
        title: "Call Back",
        href: "/call-back",
        icon: LayoutDashboard,
      },
    ],
  },
  // {
  //   title: "contact",
  //   href: "/contact",
  //   icon: Boxes,
  // },
  {
    section: "Applications",
    items: [
      {
        title: "Inventory",
        href: "/inventory",
        icon: Boxes,
      },
      {
        title: "Accounting",
        href: "/accounting",
        icon: Calculator,
      },
    ],

  },
  {
    section: "Reports",
    items: [
      {
        title: "Report",
        href: "/report",
        icon: Boxes,
      }
    ],

  },

];

// Example dynamic "Party" menu
export const sidebarMenuParty = [
  {
    section: "Menu",
    items: [
      {
        title: "Booking",
        href: "/booking",
        icon: BookmarkMinusIcon, // insurance claims
      },

      {
        title: "Payment",
        href: "/payment",
        icon: CreditCard, // payments
      },

      {
        title: "Claim",
        href: "/claim",
        icon: Landmark, // insurance claims
      },
      {
        title: "Document",
        href: "/document",
        icon: FileSearch, // document search
      },
    ],
  },
];
