import { LucideIcon } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  desc?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

interface FeatureCardProps {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}
