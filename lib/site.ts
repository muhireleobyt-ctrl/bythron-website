export const siteConfig = {
  name: "Bythron",
  product: "Track IQ",
  tagline: "Know Every Move. Anytime. Anywhere.",
  description:
    "Bythron is Rwanda's trusted GPS tracking and location intelligence company. Our flagship platform, Track IQ, lets you monitor vehicles, motorcycles, fleets, assets, pets, and wildlife in real time — with all data securely hosted on servers inside Rwanda.",
  url: "https://www.bythron.rw",
  ogImage: "/opengraph-image",
  keywords: [
    "GPS tracking Rwanda",
    "fleet management Rwanda",
    "vehicle tracking Kigali",
    "Track IQ",
    "Bythron",
    "asset tracking East Africa",
    "motorcycle tracker Rwanda",
    "pet tracker Rwanda",
    "wildlife tracking Rwanda",
    "fuel monitoring system",
    "driver behavior monitoring",
    "school bus tracking Rwanda",
    "cold chain monitoring",
    "logistics tracking Rwanda",
    "location intelligence Africa",
  ],
  contact: {
    phone: "+250 784 863 317",
    phoneHref: "tel:+250784863317",
    whatsapp: "+250 784 863 317",
    whatsappHref: "https://wa.me/250784863317",
    email: "contact@bythron.tech",
    supportEmail: "support@bythron.tech",
    address: "KG 7 Ave, Kigali Heights, Kacyiru, Kigali, Rwanda",
    hours: "Mon – Fri: 7:30 AM – 6:00 PM · Sat: 9:00 AM – 1:00 PM",
    emergencyLine: "+250 784 863 317",
  },
  social: {
    twitter: "https://twitter.com/bythronrw",
    linkedin: "https://linkedin.com/company/bythron",
    facebook: "https://facebook.com/bythronrw",
    instagram: "https://instagram.com/bythronrw",
    youtube: "https://youtube.com/@bythronrw",
  },
  geo: {
    lat: -1.9536,
    lng: 30.0925,
  },
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our App", href: "/our-app" },
  { label: "Our Devices & Products", href: "/devices" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  product: [
    { label: "Track IQ App", href: "/our-app" },
    { label: "Devices & Products", href: "/devices" },
    { label: "Pricing", href: "/pricing" },
    { label: "Request a Demo", href: "/demo" },
  ],
  services: [
    { label: "Fleet Management", href: "/services/fleet-management" },
    { label: "Asset Monitoring", href: "/services/asset-monitoring" },
    { label: "Driver Behavior Monitoring", href: "/services/driver-behavior-monitoring" },
    { label: "School Bus Tracking", href: "/services/school-bus-tracking" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
    { label: "Trust & Security", href: "/about#security" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Data Protection", href: "/about#security" },
  ],
};
