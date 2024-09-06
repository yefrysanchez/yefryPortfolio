import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import propTypes from "prop-types";

const ProjectContent = ({ title, paragraph }) => {
  return (
    <div className="text-xl mb-4 lg:mb-12 xl:max-w-[900px] xl:mx-auto">
      <motion.h2
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="uppercase font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="text-shade1/60"
      >
        {paragraph}
      </motion.p>
    </div>
  );
};

export default ProjectContent;

ProjectContent.propTypes = {
  title: propTypes.string.isRequired,
  paragraph: propTypes.string.isRequired,
};
