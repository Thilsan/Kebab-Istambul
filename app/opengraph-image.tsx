import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "radial-gradient(ellipse at center, #1a0a00 0%, #0d0000 50%, #000 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        {/* Decorative line top */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div style={{ width: 120, height: 1, background: "#c8a45a" }} />
          <span style={{ color: "#c8a45a", fontSize: 32 }}>✦</span>
          <div style={{ width: 120, height: 1, background: "#c8a45a" }} />
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#ffffff", fontSize: 72, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Costa Kebab
          </span>
          <span style={{ color: "#c0392b", fontSize: 96, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Istambul
          </span>
        </div>

        {/* Tagline */}
        <p style={{ color: "rgba(200,164,90,0.7)", fontSize: 24, letterSpacing: "0.4em", textTransform: "uppercase", marginTop: 24 }}>
          Authentic Flavours
        </p>

        {/* Decorative line bottom */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 40 }}>
          <div style={{ width: 120, height: 1, background: "#c8a45a" }} />
          <span style={{ color: "#c8a45a", fontSize: 32 }}>✦</span>
          <div style={{ width: 120, height: 1, background: "#c8a45a" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
