import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "../data/site";
import SectionHeading from "../components/ui/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle(
    "Contact — SEQUENCE / CREATIVE",
    "Contact SEQUENCE / CREATIVE via the verified YouTube, Facebook and portfolio links. Email and WhatsApp are available on request.",
    "/contact",
  );
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    // Placeholder only: no backend, no message is sent, no fake success.
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation."
          text="Have an idea worth moving? If the idea is clear and the ambition is cinematic, the conversation starts with the verified links below. The form underneath is a non-submitting placeholder until a real contact route is chosen."
        />
        <ul>
          {site.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label} — {link.url}
              </a>
            </li>
          ))}
        </ul>
        <p>
          Email — {site.email ?? "available on request"}
          <br />
          WhatsApp — available on request
        </p>
        <p className="meta">
          No email address, phone number, or WhatsApp number is listed, because
          none has been verified for this portfolio. No address below is a
          mailto link to an invented address.
        </p>

        <form className="form" onSubmit={onSubmit} style={{ marginTop: 32 }}>
          <p className="form-note">
            Placeholder form — this form does not send anything. It exists so
            the layout can be reviewed.
          </p>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} />
          </div>
          <div>
            <button className="btn" type="submit">
              Send message (placeholder)
            </button>
          </div>
          {submitted ? (
            <p className="form-note">
              Form preview only — nothing was sent and no message was
              delivered. Connect a real contact route in Part 3 to make this
              form work.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
