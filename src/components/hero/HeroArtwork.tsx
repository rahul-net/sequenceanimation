/**
 * PROCEDURAL PLACEHOLDER ARTWORK — NOT the user's own work.
 * One coherent concept: an emerald glass ribbon / sculptural form,
 * drawn in SVG with controlled shadow and reflection. No particles,
 * no giant spheres, no random gradients. Replace with real artwork
 * only when real artwork exists.
 */
export default function HeroArtwork() {
  return (
    <figure className="artwork-frame" aria-label="Procedural placeholder: emerald glass ribbon sculpture">
      <svg viewBox="0 0 800 420" role="img" aria-hidden="true" style={{ display: "block", width: "100%" }}>
        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#163c2b" />
            <stop offset="55%" stopColor="#67c58b" />
            <stop offset="100%" stopColor="#b9e4c8" />
          </linearGradient>
          <linearGradient id="ribbonShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#080a09" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#080a09" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Ground shadow */}
        <ellipse cx="400" cy="368" rx="300" ry="22" fill="#000" opacity="0.45" />
        {/* Sculptural ribbon: one continuous folded form */}
        <path
          d="M120 300 C 220 120, 320 360, 430 200 S 640 120, 700 240 L 660 268 C 600 180, 520 320, 420 260 S 240 340, 160 318 Z"
          fill="url(#ribbon)"
          opacity="0.95"
        />
        <path
          d="M120 300 C 220 120, 320 360, 430 200 S 640 120, 700 240 L 700 268 C 640 150, 520 340, 420 280 S 240 360, 160 330 Z"
          fill="url(#ribbonShadow)"
          opacity="0.35"
        />
        {/* Fine highlight edge — the “glass” cut */}
        <path
          d="M130 292 C 230 118, 330 350, 435 198"
          fill="none"
          stroke="#b9e4c8"
          strokeWidth="2"
          opacity="0.7"
        />
        <circle cx="700" cy="240" r="5" fill="#b9e4c8" />
      </svg>
      <figcaption className="placeholder-note">
        Signature artwork — procedural placeholder, not the artist&apos;s own work
      </figcaption>
    </figure>
  );
}
