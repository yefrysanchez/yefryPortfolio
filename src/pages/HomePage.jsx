import AboutSection from "../components/AboutSection"
import Hero from "../components/Hero"
import ProjectSection from "../components/ProjectSection"
import WebDevSection from "../components/WebDevSection"

const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <WebDevSection/>
      <AboutSection />
      <ProjectSection />

    </main>
  )
}

export default HomePage