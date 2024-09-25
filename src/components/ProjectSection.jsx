import { fadeUp } from "../animations/animation";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projects from "../data/projectData";

const ProjectSection = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="min-h-screen px-4 lg:px-8 mb-12 pt-24 mx-auto max-w-[2550px]"
    >
      <h2 className="text-shade1 uppercase tracking-tighter text-[70px] lg:text-[100px] 2xl:text-[18vw] font-bold">
        <a href="/works">Works</a>
      </h2>
      <div className="grid gap-8 xl:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} desc={p.desc} img={p.img} />
        ))}

        <ProjectCard img="/more.webp" />
      </div>
    </motion.section>
  );
};

export default ProjectSection;
