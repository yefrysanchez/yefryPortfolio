import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <section className="min-h-screen px-4 lg:px-8 mb-12">
        <h2 className="text-shade1 uppercase tracking-tighter text-[80px] lg:text-[100px] font-bold">Projects</h2>
        <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </section>
  )
}

export default ProjectSection