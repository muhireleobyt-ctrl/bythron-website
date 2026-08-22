import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #051633 0%, #0A2A5C 55%, #0286FF 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8Z" fill="white" />
              <circle cx="12" cy="10" r="2.6" fill="#0286FF" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>Bythron</div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, marginTop: 40, maxWidth: 950, lineHeight: 1.1 }}>
          Know Every Move.
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, maxWidth: 950, lineHeight: 1.1 }}>
          Anytime. Anywhere.
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 28, opacity: 0.85, maxWidth: 820 }}>
          Track IQ — Rwanda&apos;s trusted GPS tracking &amp; location intelligence platform
        </div>
      </div>
    ),
    { ...size }
  );
}
