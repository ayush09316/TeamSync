import { LucideIcon } from "lucide-react";

declare interface PricingPlan {
  name: string;
  price: string;
  desc?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

declare interface FeatureCardProps {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}
