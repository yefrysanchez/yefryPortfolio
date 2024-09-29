import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ProjectContentPage from "../pages/ProjectContentPage";
import BlogContentPage from "../pages/BlogContentPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/works" element={<ProjectPage />} />
      <Route path="/works/:work" element={<ProjectContentPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:blog" element={<BlogContentPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
