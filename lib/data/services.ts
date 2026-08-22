export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  overview: string;
  benefits: string[];
  features: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "fleet-management",
    name: "Fleet Management System",
    shortName: "Fleet Management",
    tagline: "Monitor, optimize, and control your entire fleet from one dashboard.",
    icon: "Truck",
    overview:
      "Bythron's Fleet Management System gives logistics companies, transporters, and organizations with vehicle fleets a live, unified view of every vehicle on the road. From dispatch to maintenance, Track IQ turns fleet data into decisions that cut costs and improve safety.",
    benefits: [
      "Reduce fuel costs by up to 20% through route optimization",
      "Cut unplanned downtime with proactive maintenance scheduling",
      "Improve driver accountability with objective performance data",
      "Respond to customers faster with accurate live ETAs",
      "Lower insurance premiums with documented safe-driving records",
    ],
    features: [
      "Live tracking of every vehicle on an interactive map",
      "Automated maintenance scheduling and service reminders",
      "Driver analytics and safety scorecards",
      "Fuel consumption and cost reports",
      "AI-assisted route optimization",
      "Fleet utilization and idle-time dashboards",
      "Custom alerts for geofence, speed, and after-hours use",
    ],
    industries: ["Transportation", "Logistics", "Construction", "Government", "Retail", "Manufacturing"],
    faqs: [
      {
        question: "How many vehicles can the system manage?",
        answer:
          "Track IQ's Fleet Management System scales from a handful of vehicles to national fleets of several thousand, with role-based dashboards per depot, region, or business unit.",
      },
      {
        question: "Can I set different alerts for different vehicle types?",
        answer:
          "Yes. Speed limits, geofences, working hours, and maintenance intervals are all configurable per vehicle or vehicle group.",
      },
      {
        question: "Does it integrate with our existing fuel cards or ERP?",
        answer:
          "Our API and webhook system let your team integrate fleet data with fuel card providers, ERP, and accounting systems used across Rwanda and the region.",
      },
    ],
  },
  {
    slug: "asset-monitoring",
    name: "Asset Monitoring System",
    shortName: "Asset Monitoring",
    tagline: "Track valuable machinery and equipment, and stop losses before they happen.",
    icon: "Boxes",
    overview:
      "From construction machinery to shipping containers, Bythron's Asset Monitoring System keeps eyes on equipment that doesn't move under its own power. Get instant alerts on unauthorized movement, plan maintenance before failures happen, and maintain a complete audit trail of every asset's location history.",
    benefits: [
      "Prevent theft with instant unauthorized-movement alerts",
      "Extend equipment lifespan with scheduled maintenance",
      "Improve utilization by knowing what's idle vs. active",
      "Simplify insurance claims with full location history",
      "Reduce equipment search time on large job sites",
    ],
    features: [
      "Real-time location for all tracked assets",
      "Movement and geofence breach alerts",
      "Maintenance planning and service logs",
      "Utilization and idle-time reporting",
      "Battery-powered devices — no wiring needed",
      "Multi-site and multi-project dashboards",
    ],
    industries: ["Construction", "Mining", "Manufacturing", "Logistics", "Government", "Retail"],
    faqs: [
      {
        question: "Do asset trackers need a power source?",
        answer:
          "No — our asset trackers are fully battery-powered with a service life of up to two years, so they can be mounted on equipment with no electrical connection.",
      },
      {
        question: "Can I organize assets by project or site?",
        answer:
          "Yes. Assets can be grouped by project, site, department, or client, each with its own geofence and reporting view.",
      },
    ],
  },
  {
    slug: "driver-behavior-monitoring",
    name: "Driver Behavior Monitoring",
    shortName: "Driver Behavior",
    tagline: "Turn driving data into safer roads and lower operating costs.",
    icon: "Gauge",
    overview:
      "Speeding, harsh braking, and rapid acceleration don't just endanger drivers — they cost fuel, damage vehicles, and increase liability. Track IQ's Driver Behavior Monitoring scores every trip so fleet managers can coach drivers with objective data, not guesswork.",
    benefits: [
      "Lower accident rates through early risk identification",
      "Reduce fuel and maintenance costs from harsh driving",
      "Build fair, transparent driver incentive programs",
      "Strengthen safety compliance for corporate and NGO fleets",
    ],
    features: [
      "Speed monitoring against posted and custom limits",
      "Harsh braking and rapid acceleration detection",
      "Cornering and swerving analysis",
      "Idle-time tracking",
      "Automated safety scoring per driver and per trip",
      "Exportable driver performance reports",
    ],
    industries: ["Transportation", "Logistics", "Government", "Security Companies", "NGOs"],
    faqs: [
      {
        question: "How is the safety score calculated?",
        answer:
          "Our scoring model weighs speeding events, harsh braking, rapid acceleration, cornering, and idle time into a single 0–100 score per driver, updated after every trip.",
      },
      {
        question: "Can drivers see their own scores?",
        answer:
          "Yes — fleet managers can optionally give drivers app access to their own scorecards to encourage self-improvement.",
      },
    ],
  },
  {
    slug: "school-bus-tracking",
    name: "School Bus Tracking System",
    shortName: "School Bus Tracking",
    tagline: "Give parents peace of mind and schools full route visibility.",
    icon: "Bus",
    overview:
      "Student safety starts with knowing exactly where every bus is. Bythron's School Bus Tracking System connects school administrators, drivers, and parents with live location, automated arrival alerts, and route management — built for Rwandan schools of every size.",
    benefits: [
      "Give parents real-time confidence about their child's commute",
      "Reduce administrative calls with automated notifications",
      "Improve route efficiency and punctuality",
      "Strengthen student safety and duty-of-care compliance",
    ],
    features: [
      "Live bus tracking on parent and admin apps",
      "Automated pickup and drop-off notifications",
      "Arrival and delay alerts",
      "Route planning and optimization",
      "Attendance integration with school systems",
      "Emergency SOS from the driver's device",
    ],
    industries: ["Schools", "NGOs", "Government"],
    faqs: [
      {
        question: "Do parents need to install an app?",
        answer:
          "Parents receive an invite link to the Track IQ parent portal — available as a lightweight mobile app or a browser view, no complex setup required.",
      },
      {
        question: "Can we integrate with our existing school management software?",
        answer:
          "Yes, our API supports integration with common school management and attendance platforms used in Rwanda.",
      },
    ],
  },
  {
    slug: "fuel-monitoring",
    name: "Fuel Monitoring System",
    shortName: "Fuel Monitoring",
    tagline: "See every liter — consumption, efficiency, and theft, in real time.",
    icon: "Fuel",
    overview:
      "Fuel is one of the largest controllable costs in any fleet. Our Fuel Monitoring System pairs precision fuel-level sensors with Track IQ analytics to flag theft and siphoning the moment it happens, and to show exactly which vehicles and drivers are burning more fuel than they should.",
    benefits: [
      "Detect fuel theft and siphoning within minutes",
      "Cut fuel spend with consumption benchmarking",
      "Validate fuel card and receipt spending automatically",
      "Improve budgeting accuracy with mileage-based efficiency data",
    ],
    features: [
      "Real-time fuel-level monitoring",
      "Fill-up and drain event detection",
      "Fuel theft and siphoning alerts",
      "Mileage and fuel-efficiency reports",
      "Vehicle and driver consumption comparisons",
      "Exportable reports for finance teams",
    ],
    industries: ["Transportation", "Logistics", "Construction", "Agriculture", "Government"],
    faqs: [
      {
        question: "What sensor is used for fuel monitoring?",
        answer:
          "We install calibrated capacitive fuel-level sensors directly in the tank, accurate to within 1–2% of tank capacity, synced live to Track IQ.",
      },
      {
        question: "Can it detect partial siphoning, not just full drains?",
        answer:
          "Yes — the system flags any rapid, unexplained fuel-level drop that doesn't match a normal fill or consumption pattern, however small.",
      },
    ],
  },
  {
    slug: "temperature-monitoring",
    name: "Temperature Monitoring System",
    shortName: "Temperature Monitoring",
    tagline: "Protect sensitive cargo with continuous temperature visibility.",
    icon: "Thermometer",
    overview:
      "Whether you're moving fresh produce, pharmaceuticals, or perishable goods, temperature excursions can mean spoiled products and compliance failures. Bythron's Temperature Monitoring System tracks conditions continuously and alerts your team the instant something drifts out of range.",
    benefits: [
      "Prevent spoilage losses on food and pharma shipments",
      "Meet regulatory and client compliance requirements",
      "Get instant alerts before cargo is compromised",
      "Maintain a full audit trail of temperature history",
    ],
    features: [
      "Continuous temperature and humidity logging",
      "Configurable threshold alerts",
      "Full historical temperature charts per shipment",
      "Multi-sensor support for multi-compartment vehicles",
      "Integration with cold storage and warehouse sensors",
    ],
    industries: ["Food Distribution", "Healthcare", "Logistics", "Agriculture", "Retail"],
    faqs: [
      {
        question: "How often is temperature data recorded?",
        answer:
          "Sensors log readings every 60 seconds by default, with configurable intervals down to real time for high-sensitivity cargo.",
      },
      {
        question: "Can I generate compliance reports automatically?",
        answer:
          "Yes — temperature history can be exported per shipment or scheduled as automated compliance reports for auditors and clients.",
      },
    ],
  },
  {
    slug: "cold-chain-monitoring",
    name: "Cold Chain Monitoring System",
    shortName: "Cold Chain Monitoring",
    tagline: "End-to-end visibility across your entire cold supply chain.",
    icon: "Snowflake",
    overview:
      "Cold chain failures anywhere between storage and delivery can compromise an entire shipment. Bythron combines IoT sensors, cold storage monitoring, and transport tracking into a single Cold Chain Monitoring System so nothing slips through the gaps — from warehouse to final delivery.",
    benefits: [
      "Maintain product integrity across storage and transit",
      "Automate compliance reporting for regulators and clients",
      "Catch equipment failures before stock is lost",
      "Build customer trust with verifiable cold chain records",
    ],
    features: [
      "Continuous monitoring across storage, loading, and transit",
      "Automatic threshold-breach alerts to relevant staff",
      "IoT sensor integration for cold rooms and reefer trucks",
      "Cold storage analytics and uptime dashboards",
      "Exportable compliance reports",
    ],
    industries: ["Food Distribution", "Healthcare", "Agriculture", "Logistics"],
    faqs: [
      {
        question: "Does this cover both storage facilities and vehicles?",
        answer:
          "Yes — the same dashboard monitors fixed cold rooms, warehouse chillers, and refrigerated vehicles in transit, giving you one continuous chain of visibility.",
      },
      {
        question: "What happens when a threshold is breached?",
        answer:
          "Configured staff receive instant SMS, email, and in-app alerts, with an escalation path if the issue isn't acknowledged within a set time.",
      },
    ],
  },
  {
    slug: "logistics-tracking",
    name: "Logistics Tracking System",
    shortName: "Logistics Tracking",
    tagline: "Full supply chain visibility, from dispatch to proof of delivery.",
    icon: "PackageSearch",
    overview:
      "Bythron's Logistics Tracking System gives shippers, distributors, and their customers real-time visibility into every shipment — with predictive ETAs, container-level monitoring, and digital proof of delivery that closes the loop on every order.",
    benefits: [
      "Improve customer satisfaction with accurate, live ETAs",
      "Reduce disputes with digital proof of delivery",
      "Gain end-to-end supply chain visibility across partners",
      "Identify bottlenecks with route and delay analytics",
    ],
    features: [
      "Live shipment and delivery tracking",
      "AI-assisted ETA prediction",
      "Digital proof of delivery (photo, signature, geo-stamp)",
      "Container and trailer-level monitoring",
      "Exception alerts for delays and route deviations",
      "Client-facing tracking links",
    ],
    industries: ["Logistics", "Retail", "Manufacturing", "Food Distribution", "NGOs"],
    faqs: [
      {
        question: "Can customers track their own shipments?",
        answer:
          "Yes — every shipment can generate a shareable, branded tracking link so your customers see live status without needing an account.",
      },
      {
        question: "How accurate are the ETA predictions?",
        answer:
          "ETAs factor in live traffic, historical route data, and driver behavior patterns, and continuously refine as the shipment progresses.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
