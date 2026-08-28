const ROWS = [0, 1, 2, 3];
const ROW_DELAYS = ["0.2s", "0.6s", "1.0s", "1.4s"];
const CHIP_DELAYS = ["0.3s", "1.6s", "2.9s"];

export function StockLogIllustration() {
  return (
    <svg viewBox="0 0 380 220" width="100%" height="100%" style={{ maxWidth: 360, overflow: "visible" }}>
      <defs>
        <radialGradient id="stockGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="stockScreenClip">
          <rect x={138} y={30} width={106} height={160} rx={9} />
        </clipPath>
      </defs>

      {/* ambient glow */}
      <circle className="stocklog-glow" cx={190} cy={110} r={95} fill="url(#stockGlowGrad)" />

      <g className="stocklog-float">
        {/* floating barcode + scanner laser */}
        <g transform="translate(272, 40)">
          {[0, 5, 8, 13, 17, 20, 25, 29, 32].map((x, i) => (
            <rect key={x} x={x} y={0} width={i % 3 === 0 ? 2.4 : 1.4} height={34} fill="var(--ink-soft)" opacity={0.4} />
          ))}
          <rect className="stocklog-laser" x={-2} y={-6} width={2} height={46} rx={1} fill="var(--accent)" />
        </g>

        {/* floating "+1" chips drifting up from the barcode */}
        {CHIP_DELAYS.map((delay, i) => (
          <g key={delay} className="stocklog-chip" style={{ ["--delay" as string]: delay }} transform={`translate(${292 + i * 6}, 84)`}>
            <circle r={8} fill="var(--paper)" stroke="var(--accent)" strokeWidth={1.3} />
            <text x={0} y={3} textAnchor="middle" fontSize={8} fontWeight={700} fill="var(--accent)" fontFamily="var(--font-mono), monospace">
              +1
            </text>
          </g>
        ))}

        {/* phone mockup */}
        <rect x={130} y={18} width={122} height={184} rx={18} fill="var(--panel)" stroke="var(--line)" strokeWidth={2} />
        <rect x={138} y={30} width={106} height={160} rx={9} fill="var(--paper)" />

        {/* status bar */}
        <circle cx={150} cy={42} r={2} fill="var(--line)" />
        <circle cx={158} cy={42} r={2} fill="var(--line)" />
        <circle cx={166} cy={42} r={2} fill="var(--line)" />
        <rect x={200} y={40} width={30} height={4} rx={2} fill="var(--line)" />

        {/* scanning sweep, clipped to the screen */}
        <g clipPath="url(#stockScreenClip)">
          <rect className="stocklog-scanline" x={138} y={54} width={106} height={22} fill="var(--accent)" opacity={0.1} />
          <rect className="stocklog-scanline" x={138} y={54} width={106} height={1.5} fill="var(--accent)" />
        </g>

        {/* inventory rows */}
        {ROWS.map((i) => {
          const y = 58 + i * 30;
          const delay = ROW_DELAYS[i];
          return (
            <g key={i}>
              <rect x={146} y={y} width={16} height={20} rx={3} fill="none" stroke="var(--ink-soft)" strokeWidth={1.4} />
              <circle cx={154} cy={y + 15.5} r={1} fill="var(--ink-soft)" />

              <rect x={170} y={y + 2} width={48} height={5} rx={2.5} fill="var(--ink-soft)" opacity={0.55} />
              <rect
                className="stocklog-row-flash"
                style={{ ["--delay" as string]: delay }}
                x={170}
                y={y + 2}
                width={48}
                height={5}
                rx={2.5}
                fill="var(--accent)"
              />
              <rect x={170} y={y + 11} width={30} height={4} rx={2} fill="var(--line)" />

              <circle cx={230} cy={y + 9} r={3.5} fill={i % 2 === 0 ? "var(--accent)" : "var(--line)"} />
              <circle
                className="stocklog-ring"
                style={{ ["--delay" as string]: delay }}
                cx={230}
                cy={y + 9}
                r={3.5}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1.2}
              />
            </g>
          );
        })}
      </g>

      {/* synced chip */}
      <g className="stocklog-float" transform="translate(58, 168)">
        <rect x={0} y={0} width={92} height={34} rx={17} fill="var(--paper)" stroke="var(--line)" strokeWidth={1.5} />
        <path d="M16 17 l4 4 l8 -8" fill="none" stroke="var(--accent)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        <rect x={38} y={12} width={40} height={4} rx={2} fill="var(--ink-soft)" opacity={0.6} />
        <rect x={38} y={19} width={26} height={3.5} rx={1.75} fill="var(--line)" />
      </g>
    </svg>
  );
}
