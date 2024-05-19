import ProjectCard from "../components/ProjectCard"

const ProjectPage = () => {
  return (
    <main className="pt-[124px] lg:px-[40px] pb-4 md:px-8 px-4 ">
        <h2 className="text-shade1 uppercase tracking-tighter text-[50px] lg:text-[100px] font-bold">Projects</h2>
        <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </main>
  )
}

export default ProjectPage