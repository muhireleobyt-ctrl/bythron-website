"use client";

import dynamic from "next/dynamic";

const LiveMapInner = dynamic(() => import("./live-map-inner"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse-slow bg-muted" />,
});

export function LiveMap({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border shadow-glow ${className ?? ""}`}>
      <LiveMapInner />
    </div>
  );
}
