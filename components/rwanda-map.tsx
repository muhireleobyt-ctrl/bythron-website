"use client";

import { motion } from "framer-motion";

const cities = [
  { name: "Kigali", x: 195, y: 210, primary: true },
  { name: "Musanze", x: 130, y: 100, primary: false },
  { name: "Rubavu", x: 70, y: 130, primary: false },
  { name: "Huye", x: 150, y: 340, primary: false },
  { name: "Rusizi", x: 55, y: 300, primary: false },
  { name: "Nyagatare", x: 300, y: 90, primary: false },
];

// Country-level label, drawn with the same dot + text device as the city
// markers above, just larger — placed in the open pocket of the outline
// with no city marker nearby (right-of-center, mid-height).
const countryLabel = { name: "RWANDA", x: 205, y: 255 };

// Stylized, decorative outline evoking Rwanda's shape — not survey-accurate.
const outline =
  "M120,20 L230,10 L300,60 L330,120 L310,190 L340,260 L280,330 L200,370 L120,360 L60,300 L30,220 L45,140 L20,80 Z";

export function RwandaMap({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 360 400" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rw-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.16" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <pattern id="rw-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M18 0H0V18" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.12" strokeWidth="1" />
        </pattern>

        <motion.path
          d={outline}
          fill="url(#rw-fill)"
          stroke="hsl(var(--primary))"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <path d={outline} fill="url(#rw-grid)" opacity="0.5" />

        {cities.map((city, i) => (
          <g key={city.name}>
            {city.primary && (
              <circle cx={city.x} cy={city.y} r="10" fill="hsl(var(--primary))" opacity="0.25" className="animate-radar" />
            )}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={city.primary ? 6 : 4}
              fill={city.primary ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
            />
            <motion.text
              x={city.x + 12}
              y={city.y + 4}
              fontSize="11"
              fontWeight={city.primary ? 700 : 500}
              fill="hsl(var(--foreground))"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.9 + i * 0.15 }}
            >
              {city.name}
            </motion.text>
          </g>
        ))}

        <g>
          <motion.circle
            cx={countryLabel.x}
            cy={countryLabel.y}
            r={5}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.9, type: "spring", stiffness: 240, damping: 18 }}
          />
          <motion.text
            x={countryLabel.x + 14}
            y={countryLabel.y + 6}
            fontSize="19"
            fontWeight={800}
            letterSpacing="0.05em"
            fill="hsl(var(--foreground))"
            initial={{ opacity: 0, x: countryLabel.x + 4 }}
            animate={{ opacity: 1, x: countryLabel.x + 14 }}
            transition={{ delay: 2.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {countryLabel.name}
          </motion.text>
        </g>
      </svg>
    </div>
  );
}
