import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        background: "#f8f7f3",
        color: "#1d2232",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 27, fontWeight: 700 }}>
        <span style={{ display: "flex", width: 24, height: 24, borderRadius: 12, background: "#2958d2" }} />
        Akorede Alao
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 91, fontWeight: 800, lineHeight: 1.02, letterSpacing: -4 }}>
          Software Engineer.
        </div>
        <div style={{ display: "flex", fontSize: 31, color: "#545d72" }}>
          Building software real businesses run on.
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: 9, background: "#2958d2" }} />
    </div>,
    size,
  );
}
