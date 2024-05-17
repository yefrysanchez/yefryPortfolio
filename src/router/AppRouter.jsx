import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProjectPage from "../pages/ProjectPage"
import AboutPage from "../pages/AboutPage"
import BlogPage from "../pages/BlogPage"
import ContactPage from "../components/ContactPage"
import ProjectContentPage from "../pages/ProjectContentPage"
import BlogContentPage from "../pages/BlogContentPage"
import { useEffect } from "react"

const AppRouter = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<ProjectPage />} />
        <Route path="/works/work" element={<ProjectContentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/blog" element={<BlogContentPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default AppRouter