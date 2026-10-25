import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

export default function Reveal({ children }: { children: ReactNode }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`section reveal${visible ? " is-visible" : ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}
