import { useEffect } from "react"
import AboutSection from "../components/AboutSection"
import Hero from "../components/Hero"
import ProjectSection from "../components/ProjectSection"
import SoftDevSection from "../components/SoftDevSection"

const HomePage = () => {
  useEffect(() => {
    document.title = `Yefry Sanchez | Portfolio` || "Yefry Sanchez | Portfolio";
  }, []);
  return (
    <main className="mx-auto max-w-[2550px]">
      <Hero />
      <SoftDevSection/>
      <AboutSection />
      <ProjectSection />

    </main>
  )
}

export default HomePage