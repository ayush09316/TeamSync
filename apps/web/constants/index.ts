import { PricingPlan } from "@/types";
import {
  ListTodo,
  FileText,
  Video,
  Laptop,
  LayoutDashboard,
  Users,
  ClipboardCheck,
  Copy,
  Files,
} from "lucide-react/icons";

export const navLinks = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Company",
    href: "/company",
    subLinks: [
      {
        title: "About Us",
        href: "/docs/primitives/alert-dialog",
        description: "Meet the Team",
      },
      {
        title: "Carrer",
        href: "/docs/primitives/hover-card",
        description: "Join TeamSync",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Doe",
    title: "CTO, Example Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Smith",
    title: "COO, Example Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: "$0",
    desc: "To kickstart your projects, no credit card required.",
    features: [
      "5 Projects",
      "Community Support",
      "1 Team Member",
      "Basic Analytics",
    ],
    buttonText: "Start for Free",
  },
  {
    name: "Basic",
    price: "$19",
    desc: "The resources, features, and support you need to launch.",
    features: [
      "20 Projects",
      "Email Support",
      "5 Team Members",
      "Advanced Analytics",
      "Custom Branding",
    ],
    buttonText: "Get Basic",
    isPopular: true,
  },
  {
    name: "Pro",
    price: "$49",
    desc: "For growing teams that need more advanced features.",
    features: [
      "Unlimited Projects",
      "Priority Email Support",
      "Unlimited Team Members",
      "Detailed Reports",
      "Custom Workflows",
    ],
    buttonText: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "$100",
    desc: "For large organizations that need a custom solution.",
    features: [
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Priority Support",
      "Advanced Security Features",
      "Enterprise-Grade Analytics",
      "Onboarding Assistance",
    ],
    buttonText: "Upgrade to Enterprise",
  },
];

export const features = [
  {
    title: "Task Management",
    description:
      "Real-time task tracking and updates with progress monitoring and team assignments.",
    points: ["Real-time updates", "Task dependencies", "Progress tracking"],
    icon: ListTodo,
  },
  {
    title: "Document Collaboration",
    description:
      "Work together on documents with real-time editing and version control.",
    points: ["Live editing", "Version history", "Comment threading"],
    icon: FileText,
  },
  {
    title: "Video Check-ins",
    description:
      "Quick and efficient video calls for daily updates and team meetings.",
    points: ["One-click joining", "Screen sharing", "Meeting recordings"],
    icon: Video,
  },
  {
    title: "Virtual Whiteboard",
    description: "Collaborative space for brainstorming and creative ideation.",
    points: ["Real-time drawing", "Templates library", "Export options"],
    icon: Laptop,
  },
];

export const sidebarLink = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: ClipboardCheck,
  },
  {
    label: "Documents",
    href: "/documents",
    icon: Files,
  },
  {
    label: "Meetings",
    href: "/meetings",
    icon: Video,
  },
  {
    label: "WhiteBoard",
    href: "/whiteboard",
    icon: Copy,
  },
  {
    label: "Teams",
    href: "/teams",
    icon: Users,
  },
];

export const priorityOptions = [
  {
    value: "all",
    label: "All Priority",
  },
  {
    value: "high",
    label: "High",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "low",
    label: "Low",
  },
];

export const statusOptions = [
  {
    value: "all",
    label: "All Status",
  },
  {
    value: "todo",
    label: "To Do",
  },
  {
    value: "progress",
    label: "In Progress",
  },
  {
    value: "review",
    label: "Review",
  },
  {
    value: "done",
    label: "Done",
  },
];
