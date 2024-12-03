import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import propTypes from "prop-types";
import { FlipLink } from "./FlipLink";

const OldProjectCard = ({ title, url }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className={`h-full rounded-3xl overflow-hidden hover:bg-shade1/10 transition-colors duration-300 text-shade1 text-2xl lg:text-4xl 2xl:text-5xl border border-shade2`}
    >
      <a target="_blank" className="flex justify-center items-center h-full w-full" href={url}>
        <FlipLink>{title}</FlipLink>
      </a>
    </motion.div>
  );
};

export default OldProjectCard;

OldProjectCard.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
