import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectContentHeader = ({ projectTitle, projectType, img, url }) => {



  return (
    <div className="mb-16">
      <motion.div
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
      >
        <Link
          to={"/works"}
          className="group flex gap-2 mb-4 xl:max-w-7xl xl:mx-auto"
        >
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span className="group-hover:translate-x-2 font-bold transition duration-300 tracking-tighter">
            ALL PROJECTS
          </span>
        </Link>
      </motion.div>
      <motion.h1
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="text-7xl md:text-8xl xl:text-[160px] uppercase tracking-tighter font-semibold mb-8 xl:max-w-[1300px] xl:mx-auto"
      >
        {projectTitle}
      </motion.h1>
      <div className="flex items-center lg:justify-between gap-4 mb-8 xl:max-w-7xl xl:mx-auto">
        <motion.span
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-2xl inline-block text-shade1/60 capitalize tracking-tighter font-medium"
        >
          {projectType}
        </motion.span>
        <motion.a
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-shade3 inline-block bg-shade1 rounded-2xl py-4 px-8 hover:opacity-90 transition duration-300 group">
            Live Demo
            <span className="ml-2">
              <i className="fa-solid fa-arrow-up-right-from-square group-hover:translate-x-1 transition duration-300"></i>
            </span>
          </span>
        </motion.a>
      </div>

      {/* Optimized Image with Lazy Loading and WebP Support */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="h-[270px] md:h-[500px] lg:h-[900px] xl:max-w-[1600px] xl:mx-auto overflow-hidden rounded-3xl"
      >
        <img
          className="h-full w-full object-cover transition-opacity duration-500 opacity-0"
          src={img} // Uses WebP format
          alt="project image"
          loading="lazy"
          width="1600"
          height="900"
          onLoad={(e) => e.target.classList.remove("opacity-0")} // Fade-in effect
        />
      </motion.div>
    </div>
  );
};

export default ProjectContentHeader;

ProjectContentHeader.propTypes = {
  projectTitle: propTypes.string.isRequired,
  projectType: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
