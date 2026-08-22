"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

const kigali: LatLngExpression = [-1.9536, 30.0925];

const markers: { position: LatLngExpression; label: string; status: "moving" | "idle" }[] = [
  { position: [-1.9536, 30.0925], label: "Truck RAD 214 B", status: "moving" },
  { position: [-1.9706, 30.1044], label: "Van RAC 883 A", status: "idle" },
  { position: [-1.9441, 30.0619], label: "Bus RAB 102 C", status: "moving" },
  { position: [-1.9302, 30.1127], label: "Truck RAD 559 D", status: "moving" },
  { position: [-1.9812, 30.0781], label: "Moto RAM 771 E", status: "idle" },
];

export default function LiveMapInner() {
  return (
    <MapContainer center={kigali} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((m, i) => (
        <CircleMarker
          key={i}
          center={m.position}
          radius={9}
          pathOptions={{
            color: m.status === "moving" ? "#10B981" : "#F59E0B",
            fillColor: m.status === "moving" ? "#10B981" : "#F59E0B",
            fillOpacity: 0.9,
            weight: 2,
          }}
        >
          <Tooltip direction="top" offset={[0, -8]}>
            {m.label} — {m.status === "moving" ? "Moving" : "Idle"}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
