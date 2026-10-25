import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../../data/site";

/**
 * Accessible navigation: a real <button> toggles the mobile menu,
 * Escape closes it, focus moves into the menu on open and returns to
 * the toggle button on close. Desktop layout is unchanged.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  function closeAndReturnFocus() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          {site.brandName}
          <small>{site.descriptor}</small>
        </Link>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => (open ? closeAndReturnFocus() : setOpen(true))}
        >
          {open ? "Close menu" : "Menu"}
        </button>
        <nav aria-label="Primary">
          <ul id="primary-nav" className={`nav-links${open ? " open" : ""}`}>
            {site.nav.map((item, i) => (
              <li key={item.to}>
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
