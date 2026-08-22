export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-data-sovereignty-matters-for-rwandan-businesses",
    title: "Why Data Sovereignty Matters for Rwandan Businesses",
    excerpt:
      "When your fleet data lives on servers outside the country, you inherit someone else's latency, someone else's outages, and someone else's compliance rules. Here's why we built Track IQ on Rwandan infrastructure.",
    category: "Data & Security",
    date: "2026-06-12",
    readTime: "5 min read",
    author: "Sandrine Uwimana",
    content: [
      "Every time a fleet manager opens their tracking dashboard, that request travels somewhere — and for most GPS platforms sold in Rwanda, 'somewhere' means a data center thousands of kilometers away, subject to another country's laws, outages, and internet infrastructure.",
      "When we built Track IQ, we made a deliberate choice to host all customer data on servers physically located inside Rwanda. This isn't a marketing checkbox — it changes how the product behaves. Dashboard loads are faster because requests never leave the region. Compliance conversations with government and NGO customers are simpler because data never crosses a border. And when international connectivity has a bad day, Rwandan customers accessing Rwandan infrastructure are largely unaffected.",
      "Data sovereignty also means something more fundamental: customers can be confident about exactly who can access their information, under which country's legal framework, and with what recourse if something goes wrong. For a school tracking its buses, or a government fleet tracking official vehicles, that clarity matters as much as the tracking dot on the map.",
      "As Rwanda's digital economy grows, we expect more businesses to ask this question before they buy: where does my data actually live? We built Bythron so the answer is always the same — right here.",
    ],
  },
  {
    slug: "how-fleet-tracking-cuts-fuel-costs",
    title: "How Fleet Tracking Cuts Fuel Costs by up to 20%",
    excerpt:
      "Fuel is the single largest controllable cost for most fleets. We break down the four levers — routing, idle time, driver behavior, and theft — that move the number most.",
    category: "Fleet Management",
    date: "2026-05-28",
    readTime: "6 min read",
    author: "David Mugabo",
    content: [
      "Across the fleets we work with, fuel typically accounts for 25-35% of total operating cost — more than maintenance, more than insurance, and often more than the drivers' wages combined. It's also the cost most fleet managers have the least real-time visibility into.",
      "The first lever is routing. Dispatchers who assign trips manually tend to default to familiar routes rather than optimal ones. Even modest route optimization — avoiding congestion windows, consolidating stops — routinely saves 8-12% in fuel per vehicle.",
      "The second is idle time. A truck idling at a loading dock for forty minutes burns fuel with zero output. Once managers can see idle-time reports per vehicle and per driver, that number drops fast — usually within the first two weeks of visibility alone, before any policy change.",
      "The third is driver behavior. Harsh acceleration and braking can increase fuel consumption by 15% or more. Pairing a safety score with a small incentive program turns this into a controllable, coachable metric rather than a fixed cost.",
      "The fourth, and the one that surprises new customers most, is theft. Siphoning is common enough in the region that fuel-level monitoring alone often pays for a tracking subscription within the first quarter. Combined, these four levers are where the 20% figure comes from — not from any single feature, but from making an invisible cost visible.",
    ],
  },
  {
    slug: "gps-tracking-in-low-connectivity-areas",
    title: "How GPS Tracking Keeps Working Without Signal",
    excerpt:
      "A look under the hood at how Bythron devices buffer and resynchronize location data after connectivity drops — critical for Rwanda's rural and mountainous regions.",
    category: "Technology",
    date: "2026-05-05",
    readTime: "4 min read",
    author: "David Mugabo",
    content: [
      "Rwanda's terrain is beautiful and, for network engineers, genuinely difficult: a thousand hills mean a thousand dead zones, and rural roads often dip in and out of signal within a single trip.",
      "Bythron devices are built around a simple principle: never assume the network is there. Each device buffers location, speed, and sensor readings locally in onboard flash memory, timestamped at the moment they're captured — not at the moment they're sent.",
      "When connectivity returns, the device reconciles its local buffer with the cloud, backfilling any gap in the timeline so the trip history in your dashboard shows a continuous route rather than a series of disconnected pings. For a delivery route through Musanze's mountain roads, this might mean twenty minutes of buffered data arriving in a single burst — invisible to the end user beyond a short delay before those points appear on the map.",
      "This matters most for exactly the customers who need it most: conservation projects tracking wildlife through national parks with no cellular coverage at all, and logistics companies running routes through Rwanda's more remote districts. In both cases, the alternative — losing data entirely during network gaps — isn't acceptable, so we engineered around it from day one.",
    ],
  },
  {
    slug: "school-bus-safety-parent-notifications",
    title: "What Parents Actually Want From School Bus Tracking",
    excerpt:
      "We interviewed 40 parents across three Kigali schools. The results shaped how arrival alerts work in Track IQ today.",
    category: "Case Studies",
    date: "2026-04-18",
    readTime: "5 min read",
    author: "Grace Niyonsaba",
    content: [
      "Before rolling out school bus tracking more broadly, we spent three weeks talking to parents at three Kigali schools already piloting Track IQ. We expected to hear requests for more data — live speed, exact GPS coordinates, driver identity. Instead, the most common request was simpler: just tell me when the bus is close.",
      "Parents told us that a constant stream of location updates was, if anything, a source of anxiety rather than reassurance — checking a map repeatedly while at work added stress rather than removing it. What they actually wanted was a short list of moments: bus departed school, bus is five minutes away, child has arrived.",
      "That insight reshaped how arrival alerts work in Track IQ today. Instead of a live map as the primary parent experience, the parent app leads with milestone notifications, with the live map available for anyone who wants to check it. Schools running this model report a significant drop in the daily 'where's the bus' calls to the front office — freeing staff time and, more importantly, giving parents genuine peace of mind rather than another screen to monitor.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
