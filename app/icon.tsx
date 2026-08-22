import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "linear-gradient(135deg, #0286FF 0%, #5BB8E8 100%)",
        }}
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8Z"
            fill="white"
            fillOpacity="0.9"
          />
          <circle cx="12" cy="10" r="2.6" fill="#0286FF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
