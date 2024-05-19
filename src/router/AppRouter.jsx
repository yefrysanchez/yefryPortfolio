import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProjectPage from "../pages/ProjectPage"
import AboutPage from "../pages/AboutPage"
import BlogPage from "../pages/BlogPage"
import ContactPage from "../components/ContactPage"
import ProjectContentPage from "../pages/ProjectContentPage"
import BlogContentPage from "../pages/BlogContentPage"


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
    </Routes>
  )
}

export default AppRouter