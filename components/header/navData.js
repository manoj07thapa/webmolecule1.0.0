import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

export const courses = [
  {
    name: "All courses",
    description:
      "Get all of your questions answered in our forums or contact support.",
    icon: ViewGridIcon,
    key: "all",
  },
  {
    name: "Frontend",
    description:
      "Get all of your questions answered in our forums or contact support.",
    icon: SupportIcon,
    key: "frontend",
  },
  {
    name: "Backend",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    icon: BookmarkAltIcon,
    key: "backend",
  },
  {
    name: "Web Design",
    description:
      "See what meet-ups and other events we might be planning near you.",
    icon: CalendarIcon,
    key: "webDesign",
  },
  {
    name: "Full Stack ",
    description: "Understand how we take your privacy seriously.",
    icon: ShieldCheckIcon,
    key: "fullstack",
  },
  {
    name: "Database ",
    description: "Understand how we take your privacy seriously.",
    icon: ShieldCheckIcon,
    key: "database",
  },
  {
    name: "AWS Amplify",
    description: "Understand how we take your privacy seriously.",
    icon: ShieldCheckIcon,
    key: "awsAmplify",
  },
];

export const solutions = [
  {
    name: "View all solutions",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ViewGridIcon,
    key: "all",
  },
  {
    name: "Portfolio",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
    key: "portfolio",
  },
  {
    name: "E-commerce Store",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
    key: "ecommerce",
  },
  {
    name: "Student management system",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
    key: "sms",
  },
  {
    name: "Account management system",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
    key: "ams",
  },
  {
    name: "Human resources management system",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
    key: "hrms",
  },
];
