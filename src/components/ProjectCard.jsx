import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import { MyCursorContext } from "../context/CursorContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const ProjectCard = ({ img, title, desc, span = false }) => {
  const { setIsActive } = useContext(MyCursorContext);

  const onMouseEnter = () => {
    setIsActive(true);
  };
  const onMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Link to={`/works/${title}`} className={`${
      span ? "xl:col-span-2" : ""}`}>
      <motion.div
        onClick={() => setIsActive(false)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className=" h-[500px] md:h-[550px] 2xl:h-[800px] rounded-3xl overflow-hidden relative group"
      >
        <img
          className="h-full w-full object-cover lg:group-hover:scale-100  scale-[1.02] transition duration-700"
          src={img}
          alt="project image"
        />
        <div className="z-10 absolute left-4 bottom-4 md:left-6 md:bottom-6 lg:left-8 lg:-bottom-40 lg:group-hover:bottom-8 transition-all duration-700 lg:opacity-0 group-hover:opacity-100">
          <p className=" text-shade1 z-10 tracking-tighter leading-[0.9] text-3xl md:text-4xl lg:text-5xl uppercase font-bold">
            {title}
          </p>
          <p className=" text-shade1/65 z-10 tracking-tighter font-light leading-[0.9] md:text-xl lg:text-2xl">
            {desc}
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 lg:opacity-0 group-hover:opacity-50 transition duration-700 bg-gradient-to-t from-shade3 to-transparent "></div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  span: propTypes.bool,
};
