export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jean-Paul Habimana",
    role: "Operations Manager",
    company: "Kigali Express Logistics",
    quote:
      "Track IQ cut our fuel losses almost overnight. We caught two siphoning incidents in the first month alone, and our dispatch team finally has real ETAs to give customers.",
    initials: "JH",
    rating: 5,
  },
  {
    name: "Claudine Uwase",
    role: "Fleet Administrator",
    company: "Rwanda Construction Group",
    quote:
      "We manage machinery across five active sites. Being able to see every generator and mixer on one map, with alerts if anything moves after hours, has stopped theft completely.",
    initials: "CU",
    rating: 5,
  },
  {
    name: "Eric Mugisha",
    role: "Director of Transport",
    company: "Greenhill Academy",
    quote:
      "Parents used to call the school every afternoon asking where the bus was. Since Track IQ, those calls stopped — everyone can see the bus live on their phone.",
    initials: "EM",
    rating: 5,
  },
  {
    name: "Aline Mukamana",
    role: "Program Coordinator",
    company: "East Africa Wildlife Trust",
    quote:
      "The wildlife collars kept reporting reliably through months in the field with almost no connectivity. When the data synced, we had a complete, unbroken migration record.",
    initials: "AM",
    rating: 5,
  },
  {
    name: "Patrick Nshuti",
    role: "Owner",
    company: "Nshuti Moto Rentals",
    quote:
      "I run 40 rental motorcycles across Kigali. Bythron's trackers have recovered three stolen bikes for me this year — the immobilization feature alone paid for the whole system.",
    initials: "PN",
    rating: 5,
  },
  {
    name: "Diane Ingabire",
    role: "Supply Chain Lead",
    company: "FreshHarvest Rwanda",
    quote:
      "Cold chain monitoring gave us the compliance reporting our export clients required, without hiring anyone new. The alerts have saved at least two shipments from spoiling.",
    initials: "DI",
    rating: 5,
  },
];
