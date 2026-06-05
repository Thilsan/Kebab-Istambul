import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #c0392b 0%, #96281b 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1.5px solid #c8a45a",
        }}
      >
        <span
          style={{
            color: "#c8a45a",
            fontSize: 18,
            fontWeight: 900,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          K
        </span>
      </div>
    ),
    { ...size }
  );
}
