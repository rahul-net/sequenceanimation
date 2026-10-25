import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Works from "../pages/Works";
import ProjectDetail from "../pages/ProjectDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

/**
 * HashRouter is deliberate: on a static host, a refreshed nested route
 * such as /works/emerald-ribbon-study must not 404. The hash form
 * (#/works/...) always serves index.html, so every route works after
 * refresh without server-side rewrites.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
