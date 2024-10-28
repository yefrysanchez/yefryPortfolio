import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { fadeUp } from "../animations/animation";
import OldProjectCard from "../components/AllProjectCard";

const ProjectPage = () => {
  // https://htmlmafia.digital/en

  return (
    <motion.main
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="min-h-screen px-4 lg:px-8 mb-12 pt-24 mx-auto max-w-[2550px]"
    >
      <h2 className="text-shade1 select-none uppercase tracking-tighter text-[50px] lg:text-[100px] 2xl:text-[18vw] font-bold">
        Works
      </h2>
      <div className="grid xl:grid-cols-2 gap-12">
        <ProjectCard img="/ezpos.png" />
        <ProjectCard img="/rulay.webp" />
        <ProjectCard img="/codevenue.webp" />
        <div className="grid grid-cols-2 gap-2 md:gap-4 h-[500px] md:h-[550px] 2xl:h-[800px]">
          <OldProjectCard img="/more.webp"/>
          <OldProjectCard img="/more.webp"/>
          <OldProjectCard img="/more.webp"/>
          <OldProjectCard img="/more.webp"/>
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectPage;
