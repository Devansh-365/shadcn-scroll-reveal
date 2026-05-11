import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Shadcn Scroll Reveal — Pure CSS scroll-driven image reveals and caption animations for shadcn/ui. No JavaScript required."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #1a1614 0%, #251e18 60%, #1a1614 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Amber accent bar */}
        <div
          style={{
            width: "48px",
            height: "4px",
            background: "#f59e0b",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#f5f0eb",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Shadcn{" "}
          <span style={{ color: "#f59e0b" }}>Scroll Reveal</span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "26px",
            color: "#a89880",
            lineHeight: 1.5,
            maxWidth: "720px",
            marginBottom: "48px",
          }}
        >
          Pure CSS scroll-driven image reveals and caption animations for shadcn/ui. No JavaScript required.
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["CSS Only", "shadcn/ui", "Open Source"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                background: "rgba(245,158,11,0.12)",
                border: "1px solid rgba(245,158,11,0.25)",
                borderRadius: "6px",
                fontSize: "16px",
                color: "#f59e0b",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
