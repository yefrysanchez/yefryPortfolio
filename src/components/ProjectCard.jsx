import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const ProjectCard = () => {
  const url =
    "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="bg-[#E6E6FA] h-[450px] md:h-[550px] 2xl:h-[700px] rounded-3xl overflow-hidden relative group"
    >
      <img
        className="h-full w-full object-cover"
        src={url}
        alt="project image"
      />
      <p className=" text-shade1 z-10 tracking-tighter leading-[0.9] absolute left-4 xl:left-6 bottom-4 xl:bottom-6 group-hover:translate-y-0 translate-y-14 opacity-0 group-hover:opacity-100  transition duration-500 uppercase text-[7vw] lg:text-5xl xl:text-6xl font-bold">
        Project Title
      </p>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-shade3 opacity-0 group-hover:opacity-40 transition duration-300"></div>
    </motion.div>
  );
};

export default ProjectCard;
