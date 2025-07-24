import { fadeUp } from "../animations/animation";
import { motion } from "framer-motion";
import propTypes from "prop-types";

const ProjectVideo = ({ src }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="h-[300px] md:h-[500px] select-none rounded-2xl overflow-hidden"
    >
      <video
        autoPlay
        playsInline
        muted
        loop
        className="h-full w-full object-contain"
        loading="lazy"
      >
        <source src={src} />
      </video>
    </motion.div>
  );
};

export default ProjectVideo;

ProjectVideo.propTypes = {
  src: propTypes.string.isRequired,
};
