import { useEffect } from "react";
import { site } from "../data/site";

/**
 * Per-route document title + meta description + canonical link.
 * Canonical is emitted ONLY when site.siteUrl is set by the owner;
 * with the default empty value no canonical link is created (and any
 * previously created one is removed), so no invented domain is ever
 * published. `path` is the HashRouter route, e.g. "/" or "/works/slug".
 * Note: crawlers do not execute this JS reliably, so the static
 * index.html tags remain the fallback for the home page; deep-page
 * titles are a progressive enhancement, and the HashRouter SEO trade-off
 * is documented in README.md.
 */
export function useDocumentTitle(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);

    const base = site.siteUrl.replace(/\/$/, "");
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!base) {
      link?.remove();
      return;
    }
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `${base}/#${path}`);
  }, [title, description, path]);
}
