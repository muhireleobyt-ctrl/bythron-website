"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Battery, Fuel, MapPin, ShieldCheck } from "lucide-react";

const activity = [
  { day: "Mon", trips: 42 },
  { day: "Tue", trips: 58 },
  { day: "Wed", trips: 51 },
  { day: "Thu", trips: 67 },
  { day: "Fri", trips: 74 },
  { day: "Sat", trips: 49 },
  { day: "Sun", trips: 38 },
];

const vehicles = [
  { name: "Truck RAD 214 B", status: "Moving", speed: "62 km/h", color: "bg-success" },
  { name: "Van RAC 883 A", status: "Idle", speed: "0 km/h", color: "bg-warning" },
  { name: "Bus RAB 102 C", status: "Moving", speed: "41 km/h", color: "bg-success" },
  { name: "Truck RAD 559 D", status: "Offline", speed: "—", color: "bg-muted-foreground" },
];

export function DashboardMockup() {
  return (
    <div className="glass-card w-full rounded-3xl border p-5 shadow-glow sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Fleet Overview</p>
          <p className="text-2xl font-bold">128 Vehicles</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-slow" />
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-muted/60 p-3">
          <MapPin className="h-4 w-4 text-primary" />
          <p className="mt-2 text-lg font-bold">96</p>
          <p className="text-[11px] text-muted-foreground">Moving now</p>
        </div>
        <div className="rounded-xl bg-muted/60 p-3">
          <Fuel className="h-4 w-4 text-primary" />
          <p className="mt-2 text-lg font-bold">82%</p>
          <p className="text-[11px] text-muted-foreground">Avg. fuel level</p>
        </div>
        <div className="rounded-xl bg-muted/60 p-3">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <p className="mt-2 text-lg font-bold">94</p>
          <p className="text-[11px] text-muted-foreground">Avg. safety score</p>
        </div>
      </div>

      <div className="mt-5 h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activity} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="tripsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" hide />
            <Tooltip
              cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1 }}
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 12,
                fontSize: 12,
              }}
            />
            <Area type="monotone" dataKey="trips" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#tripsFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 space-y-2">
        {vehicles.map((v) => (
          <div key={v.name} className="flex items-center justify-between rounded-xl border bg-card/60 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className={`h-2 w-2 rounded-full ${v.color}`} />
              <span className="text-sm font-medium">{v.name}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{v.status}</span>
              <span className="font-mono">{v.speed}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Battery className="h-3.5 w-3.5" /> Devices syncing normally
        </span>
        <span>Updated just now</span>
      </div>
    </div>
  );
}
