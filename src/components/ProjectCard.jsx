import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import { MyCursorContext } from "../context/CursorContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const url =
    "https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const { setIsActive } = useContext(MyCursorContext);

  const onMouseEnter = () => {
    setIsActive(true);
  };
  const onMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Link to={"/works/work"}>
      <motion.div
        onClick={() => setIsActive(false)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="bg-[#E6E6FA] h-[500px] md:h-[550px] 2xl:h-[800px] rounded-3xl overflow-hidden relative group"
      >
        <img
          className="h-full w-full object-cover lg:group-hover:scale-100 scale-[1.02] transition duration-300"
          src={url}
          alt="project image"
        />
        <div className="z-50 absolute left-4 bottom-4 md:left-6 md:bottom-6 lg:left-8 lg:bottom-8">
          <p className=" text-shade1 z-10 tracking-tighter leading-[0.9] text-3xl md:text-4xl lg:text-5xl uppercase font-bold">
            Project Title
          </p>
          <p className=" text-shade1/65 z-10 tracking-tighter leading-[0.9] md:text-xl lg:text-2xl">
            Project Desc
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-40 transition duration-300 bg-gradient-to-t from-shade3 "></div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
