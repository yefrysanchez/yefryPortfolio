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
      className="rounded-3xl overflow-hidden h-[300px] md:h-[500px] select-none"
    >
      <video
        autoPlay
        playsInline
        muted
        loop
        className="h-full w-full object-cover"
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
