export type Device = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  idealFor: string[];
  features: string[];
  specs: { label: string; value: string }[];
  batteryLife: string;
  connectivity: string;
  coverage: string;
  installation: string;
  compatibleSensors: string[];
  startingPrice: string;
};

export const devices: Device[] = [
  {
    slug: "vehicle-gps-trackers",
    name: "Vehicle GPS Trackers",
    category: "Vehicles",
    tagline: "Real-time visibility for every car, truck, and machine you own.",
    description:
      "Bythron's vehicle trackers give personal car owners, taxi companies, rental fleets, and construction firms a single source of truth for where every vehicle is, how it's being driven, and when it needs attention. Hardwired into the vehicle's power system, they report continuously — even across Rwanda's more remote roads — and sync the moment signal returns.",
    icon: "Car",
    idealFor: [
      "Personal cars",
      "Commercial vehicles",
      "Taxi companies",
      "Rental companies",
      "Luxury vehicles",
      "Heavy equipment",
      "Construction machinery",
    ],
    features: [
      "Live GPS location updates every 10 seconds",
      "Ignition on/off and engine diagnostics (OBD-II)",
      "Geofencing with instant entry/exit alerts",
      "Trip history and route playback",
      "Remote engine immobilization for theft recovery",
      "Fuel-level and consumption monitoring",
      "Harsh driving and speed alerts",
    ],
    specs: [
      { label: "Dimensions", value: "58 × 42 × 15 mm" },
      { label: "Power Supply", value: "9–90V DC, hardwired with backup battery" },
      { label: "Operating Temp", value: "-20°C to 70°C" },
      { label: "Water Resistance", value: "IP65" },
      { label: "GPS Accuracy", value: "Up to 2.5 meters" },
    ],
    batteryLife: "Continuous power from vehicle + 48-hour internal backup battery",
    connectivity: "2G/4G LTE with automatic network fallback",
    coverage: "Nationwide across Rwanda, roaming across East Africa",
    installation: "Free professional installation by a certified Bythron technician, 30–45 minutes",
    compatibleSensors: ["Fuel sensor", "Temperature probe", "RFID driver ID", "Panic button", "Camera (ADAS/DMS)"],
    startingPrice: "From RWF 45,000 + monthly subscription",
  },
  {
    slug: "motorcycle-gps-trackers",
    name: "Motorcycle GPS Trackers",
    category: "Motorcycles",
    tagline: "Compact, waterproof theft protection built for motos.",
    description:
      "With thousands of motorcycles on Rwanda's roads, theft recovery and rider accountability matter. Our motorcycle trackers are compact enough to hide inside the bike's frame, fully waterproof for rainy-season riding, and built with a resilient internal battery so tracking continues even if power is cut.",
    icon: "Bike",
    idealFor: ["Moto-taxi operators", "Delivery riders", "Private motorcycle owners", "Rental moto fleets"],
    features: [
      "Ultra-compact, concealable design",
      "IP67 fully waterproof housing",
      "Anti-theft vibration and movement alerts",
      "Remote immobilization on theft detection",
      "Internal backup battery — keeps tracking if disconnected",
      "Geofencing for operating-zone compliance",
      "Trip and mileage reports for delivery riders",
    ],
    specs: [
      { label: "Dimensions", value: "44 × 34 × 12 mm" },
      { label: "Power Supply", value: "9–36V DC, hardwired" },
      { label: "Internal Battery", value: "600mAh backup, up to 72 hours standalone" },
      { label: "Water Resistance", value: "IP67" },
      { label: "GPS Accuracy", value: "Up to 3 meters" },
    ],
    batteryLife: "72 hours on internal backup battery if main power is cut",
    connectivity: "2G/4G LTE",
    coverage: "Nationwide across Rwanda",
    installation: "Concealed installation by a Bythron technician, 20 minutes",
    compatibleSensors: ["Vibration sensor", "Panic button"],
    startingPrice: "From RWF 35,000 + monthly subscription",
  },
  {
    slug: "pet-trackers",
    name: "Pet Trackers",
    category: "Pets & Livestock",
    tagline: "Keep dogs, cats, and livestock safe with a lightweight collar tracker.",
    description:
      "Never lose track of a wandering pet or a herd grazing far from home. Our pet and livestock trackers are lightweight enough for a collar, built for long battery life between charges, and paired with geofence alerts so you're notified the moment an animal leaves its safe zone.",
    icon: "PawPrint",
    idealFor: ["Dogs", "Cats", "Livestock (cattle, goats)", "Working farm animals"],
    features: [
      "Lightweight, collar-mountable design (28g)",
      "Up to 15 days battery life per charge",
      "Custom geo-fence safe zones with instant alerts",
      "Activity and rest tracking",
      "Low-battery notifications",
      "Live location history and heatmaps",
    ],
    specs: [
      { label: "Weight", value: "28 g" },
      { label: "Dimensions", value: "45 × 30 × 12 mm" },
      { label: "Water Resistance", value: "IP66, splash and rain safe" },
      { label: "Charging", value: "USB-C, 2 hours to full charge" },
      { label: "GPS Accuracy", value: "Up to 5 meters" },
    ],
    batteryLife: "Up to 15 days on standard reporting mode",
    connectivity: "2G/4G LTE",
    coverage: "Nationwide across Rwanda",
    installation: "Self-fit collar mount, no technician required",
    compatibleSensors: ["Activity/motion sensor"],
    startingPrice: "From RWF 25,000 + monthly subscription",
  },
  {
    slug: "wildlife-trackers",
    name: "Wildlife Trackers",
    category: "Conservation",
    tagline: "Rugged, solar-assisted trackers for conservation and research.",
    description:
      "Built with national parks, research institutions, and conservation NGOs, our wildlife tracking collars are engineered to survive harsh outdoor conditions for years, providing migration data, movement patterns, and territory analysis to support environmental monitoring and anti-poaching efforts.",
    icon: "PawPrint",
    idealFor: ["National parks", "Conservation NGOs", "Research institutions", "Anti-poaching units"],
    features: [
      "Solar-assisted charging for multi-year deployment",
      "Rugged, tamper-resistant collar housing",
      "Migration and territory pattern mapping",
      "Configurable low-power reporting intervals",
      "Mortality/motionless alert detection",
      "Satellite fallback in zero-signal terrain",
    ],
    specs: [
      { label: "Weight", value: "220 g (species-dependent housing)" },
      { label: "Power", value: "Solar panel + 3,000mAh Li-ion cell" },
      { label: "Operating Temp", value: "-30°C to 60°C" },
      { label: "Water Resistance", value: "IP68" },
      { label: "GPS Accuracy", value: "Up to 5 meters" },
    ],
    batteryLife: "3–5 years with solar-assisted charging",
    connectivity: "2G/4G LTE with satellite fallback for remote terrain",
    coverage: "National parks and remote conservation zones across Rwanda and the region",
    installation: "Fitted on-site by our field team alongside your veterinary or ranger staff",
    compatibleSensors: ["Temperature", "Accelerometer", "Mortality sensor"],
    startingPrice: "Custom project pricing — contact our conservation team",
  },
  {
    slug: "asset-trackers",
    name: "Asset Trackers",
    category: "Assets & Equipment",
    tagline: "Protect containers, generators, and industrial equipment from loss.",
    description:
      "High-value equipment doesn't always have an engine to draw power from. Our asset trackers run entirely on internal battery, built to withstand industrial environments, so you always know where your containers, generators, trailers, and machinery are — and get an alert the moment one moves without authorization.",
    icon: "Package",
    idealFor: ["Containers", "Generators", "Construction equipment", "Cargo & trailers", "Industrial machinery", "Shipping equipment"],
    features: [
      "Fully battery-powered, no wiring required",
      "Magnetic and bolt-mount installation options",
      "Unauthorized-movement alerts",
      "Long-life battery mode for dormant equipment",
      "Rugged, shock- and dust-resistant housing",
      "Geofencing per job site or warehouse",
    ],
    specs: [
      { label: "Dimensions", value: "90 × 65 × 30 mm" },
      { label: "Power", value: "10,000mAh replaceable Li-ion battery" },
      { label: "Water/Dust Resistance", value: "IP67" },
      { label: "Mounting", value: "Magnetic or bolt-on bracket" },
      { label: "GPS Accuracy", value: "Up to 3 meters" },
    ],
    batteryLife: "Up to 2 years on standard reporting interval",
    connectivity: "2G/4G LTE",
    coverage: "Nationwide across Rwanda, extendable to regional job sites",
    installation: "Magnetic self-mount or technician-installed bolt bracket",
    compatibleSensors: ["Temperature probe", "Door/tamper sensor", "Fuel sensor (generators)"],
    startingPrice: "From RWF 55,000 + monthly subscription",
  },
  {
    slug: "personal-gps-trackers",
    name: "Personal GPS Trackers",
    category: "Personal Safety",
    tagline: "Discreet, wearable safety for the people who matter most.",
    description:
      "From children walking to school to field workers in remote sites, our personal trackers put an SOS button and live location in the palm of a hand — small enough to wear, simple enough for anyone to use, and connected to instant alerts for the people who need to know.",
    icon: "ShieldCheck",
    idealFor: ["Children", "Elderly family members", "Field workers", "Security personnel", "Outdoor adventurers"],
    features: [
      "One-touch SOS emergency button",
      "Two-way voice calling on select models",
      "Safe-zone geofencing with school/home alerts",
      "Fall-detection mode for elderly users",
      "Ultra-light wearable design (watch or clip-on)",
      "Real-time location sharing with family members",
    ],
    specs: [
      { label: "Weight", value: "38 g" },
      { label: "Battery", value: "800mAh, up to 5 days standard use" },
      { label: "Water Resistance", value: "IP65" },
      { label: "Form Factor", value: "Wristband or clip-on" },
      { label: "GPS Accuracy", value: "Up to 5 meters, Wi-Fi/LBS indoor fallback" },
    ],
    batteryLife: "Up to 5 days per charge on standard mode",
    connectivity: "2G/4G LTE with Wi-Fi and LBS positioning fallback",
    coverage: "Nationwide across Rwanda",
    installation: "No installation required — charge and activate in the Track IQ app",
    compatibleSensors: ["SOS button", "Fall detection", "Heart-rate (select models)"],
    startingPrice: "From RWF 30,000 + monthly subscription",
  },
];

export function getDevice(slug: string) {
  return devices.find((d) => d.slug === slug);
}
