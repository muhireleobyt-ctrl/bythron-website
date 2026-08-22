export type Industry = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export const industries: Industry[] = [
  { slug: "transportation", name: "Transportation", icon: "Bus", description: "Fleet visibility and driver safety for public and private transport operators." },
  { slug: "logistics", name: "Logistics", icon: "PackageSearch", description: "Shipment tracking and supply chain visibility from dispatch to delivery." },
  { slug: "construction", name: "Construction", icon: "HardHat", description: "Equipment and machinery tracking across active job sites." },
  { slug: "government", name: "Government", icon: "Landmark", description: "Fleet accountability and asset management for public institutions." },
  { slug: "agriculture", name: "Agriculture", icon: "Wheat", description: "Livestock and equipment tracking across farms and cooperatives." },
  { slug: "healthcare", name: "Healthcare", icon: "HeartPulse", description: "Cold chain and ambulance tracking for reliable patient care." },
  { slug: "ngos", name: "NGOs", icon: "HandHeart", description: "Field vehicle and asset tracking across remote program areas." },
  { slug: "schools", name: "Schools", icon: "GraduationCap", description: "Student-safe school bus tracking with parent notifications." },
  { slug: "mining", name: "Mining", icon: "Mountain", description: "Heavy equipment monitoring in remote, high-value operations." },
  { slug: "security", name: "Security Companies", icon: "Shield", description: "Patrol vehicle tracking and rapid-response coordination." },
  { slug: "wildlife-conservation", name: "Wildlife Conservation", icon: "PawPrint", description: "Migration tracking and anti-poaching support for parks and researchers." },
  { slug: "food-distribution", name: "Food Distribution", icon: "Truck", description: "Cold chain and delivery tracking for perishable goods." },
  { slug: "retail", name: "Retail", icon: "ShoppingBag", description: "Delivery fleet and last-mile tracking for retail operations." },
  { slug: "manufacturing", name: "Manufacturing", icon: "Factory", description: "Asset and outbound logistics tracking across production sites." },
];
