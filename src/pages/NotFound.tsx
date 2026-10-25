import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle(
    "Page not found — SEQUENCE / CREATIVE",
    "This page does not exist in the SEQUENCE / CREATIVE portfolio.",
    "/404",
  );
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="404"
          title="This page does not exist."
          text="The address may have changed, or the page was never part of this portfolio."
        />
        <Link className="btn" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
