export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "RWF 8,000",
    period: "/ device / month",
    description: "For individuals tracking a single car, moto, or pet.",
    features: [
      "1–3 devices",
      "Live GPS tracking",
      "30-day trip history",
      "Geofencing (up to 3 zones)",
      "Mobile app (Android & iOS)",
      "Email support",
    ],
    cta: "Start Tracking",
  },
  {
    name: "Business",
    price: "RWF 12,000",
    period: "/ device / month",
    description: "For growing fleets that need analytics and driver insight.",
    features: [
      "4–50 devices",
      "Everything in Starter",
      "Unlimited trip history",
      "Driver behavior scoring",
      "Fuel monitoring & reports",
      "Unlimited geofences",
      "Role-based team access",
      "Priority phone & WhatsApp support",
    ],
    cta: "Start Tracking",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large fleets, government, and multi-site operations.",
    features: [
      "50+ devices",
      "Everything in Business",
      "Dedicated account manager",
      "API & custom integrations",
      "Custom SLAs & uptime guarantees",
      "On-site training & onboarding",
      "Advanced reporting & data exports",
    ],
    cta: "Talk to Sales",
  },
];
