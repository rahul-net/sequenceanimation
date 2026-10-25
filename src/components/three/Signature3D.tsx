import { Suspense, lazy, useEffect, useState } from "react";
import HeroArtwork from "../hero/HeroArtwork";

const SignatureCanvas = lazy(() => import("./SignatureCanvas"));

function webglAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Lazy-loaded 3D, with a static SVG fallback. The site never depends on
 * WebGL: on failure, or when prefers-reduced-motion is set, the same
 * procedural emerald-ribbon artwork renders instead — labelled as a
 * placeholder, never as the artist's own work.
 */
export default function Signature3D() {
  const [canRender3d, setCanRender3d] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCanRender3d(webglAvailable());
  }, []);

  if (!canRender3d) return <HeroArtwork />;

  return (
    <figure className="artwork-frame" aria-label="Interactive 3D sculpture: emerald glass ribbon">
      <div className="signature-3d artwork-enter">
        <Suspense fallback={<HeroArtwork />}>
          <SignatureCanvas />
        </Suspense>
      </div>
      <figcaption className="placeholder-note">
        Signature 3D — procedural concept, not the artist&apos;s own work · Move the pointer on desktop to tilt the sculpture
      </figcaption>
    </figure>
  );
}
