
const ProjectCard = () => {

    const url = "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="h-[560px] xl:h-[800px] w-full rounded-2xl overflow-hidden relative group mb-8 border border-shade2/50">
        <img className="h-full w-full object-cover group-hover:scale-105 transition duration-500" src={url} alt="project image" />
        <p className="z-10 absolute top-1/2 left-1/2 translate-x-[-50%] font-medium text-shade1  tracking-tighter text-3xl md:text-4xl lg:text-5xl xl:text-7xl lg:opacity-0 lg:group-hover:opacity-100 transition duration-500 lg:translate-y-8 lg:group-hover:translate-y-0">Project Title</p>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-shade3 opacity-50 lg:opacity-0 lg:group-hover:opacity-50 transition duration-500"></div>
    </div>
  )
}

export default ProjectCard