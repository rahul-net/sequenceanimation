import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

/**
 * One coherent 3D concept: an emerald glass ribbon (torus knot) inside a
 * thin metallic ring. Two meshes, three lights, no post-processing.
 * Pointer response is desktop-only (pointer: fine) and all listeners
 * are removed on unmount; R3F disposes the WebGL context on unmount.
 *
 * Performance (Part 3 fix): the render loop PAUSES when the canvas is
 * off-screen (IntersectionObserver) or the document is hidden
 * (visibilitychange), via frameloop "never" — it resumes automatically
 * when visible again. This replaces the Part 2 always-on frame loop.
 */
function Sculpture() {
  const group = useRef<Group | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const d = Math.min(delta, 0.05);
    g.rotation.y += d * 0.18;
    // Ease toward the pointer tilt; base rotation keeps turning slowly.
    g.rotation.x += (pointer.current.y * 0.25 - g.rotation.x) * 0.04;
    g.rotation.z += (pointer.current.x * 0.12 - g.rotation.z) * 0.04;
  });

  return (
    <group ref={group}>
      {/* Emerald glass ribbon */}
      <mesh>
        <torusKnotGeometry args={[1, 0.32, 96, 16]} />
        <meshPhysicalMaterial color="#67c58b" metalness={0.15} roughness={0.15} clearcoat={0.6} clearcoatRoughness={0.3} />
      </mesh>
      {/* Thin metallic ring around it */}
      <mesh rotation={[Math.PI / 2.4, 0, 0.4]}>
        <torusGeometry args={[1.7, 0.05, 16, 80]} />
        <meshStandardMaterial color="#e8e5dc" metalness={0.9} roughness={0.25} />
      </mesh>
    </group>
  );
}

export default function SignatureCanvas() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let intersecting = true;
    const apply = () => setActive(intersecting && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersecting = Boolean(entry?.isIntersecting);
        apply();
      },
      { threshold: 0 },
    );
    observer.observe(el);
    document.addEventListener("visibilitychange", apply);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", apply);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ height: "100%" }}>
      <Canvas
        dpr={[1, 1.75]}
        frameloop={active ? "always" : "never"}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        aria-label="Interactive 3D sculpture: emerald glass ribbon"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 2, -5]} intensity={0.8} color="#b9e4c8" />
        <Sculpture />
      </Canvas>
    </div>
  );
}
