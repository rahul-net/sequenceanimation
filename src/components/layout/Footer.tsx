import { Link } from "react-router-dom";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong style={{ color: "var(--ivory)" }}>{site.brandName}</strong>
          <p style={{ marginTop: 8 }}>{site.descriptor}</p>
          <p className="meta">{site.availability}</p>
        </div>
        <div>
          <p className="eyebrow">Links</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {site.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Pages</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: 32 }}>
        <p className="meta">
          Part 2 implementation. Artwork and project entries on this site are
          labelled concept / placeholder work.
        </p>
      </div>
    </footer>
  );
}
