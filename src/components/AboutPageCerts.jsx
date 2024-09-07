import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import propTypes from "prop-types";

const AboutPageCerts = ({ url, title }) => {
  return (
    <motion.a
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      target="_blank"
      href={url}
      className=" transition  border-b py-20 flex items-center justify-between group lg:text-4xl lg:px-6"
    >
      <span className="lg:group-hover:translate-x-8 transition">{title}</span>
      <span>
        {" "}
        <i className="fa-solid fa-arrow-right text-shade1 bg-[#1C1D20] group-hover:bg-[#455CE9] transition  p-4 rounded-full lg:group-hover:-translate-x-8"></i>
      </span>
    </motion.a>
  );
};

export default AboutPageCerts;

AboutPageCerts.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};
