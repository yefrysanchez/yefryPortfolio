import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import { fadeUp } from "../animations/animation"

const ProjectPage = () => {

  // https://htmlmafia.digital/en

  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="min-h-screen px-4 lg:px-8 mb-12 pt-24"
    >
      <h2 className="text-shade1 uppercase tracking-tighter text-[50px] lg:text-[100px] 2xl:text-[18vw] font-bold">
        Works
      </h2>
      <div className="flex flex-col gap-16 lg:flex-row w-full">
        <div className="flex flex-col gap-16 mt-48 w-full">
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex flex-col gap-16 w-full">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </motion.main>
  )
}

export default ProjectPage