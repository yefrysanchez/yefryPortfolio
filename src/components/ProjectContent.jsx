import { motion } from "framer-motion";
import { fadeUp, scaleY } from "../animations/animation";
import PropTypes from "prop-types";

const ProjectContent = ({ data }) => {
  return (
    <div className="text-xl mb-4 lg:mb-12 xl:max-w-7xl xl:mx-auto">
      {/* Project Overview */}
      <div className="mb-8">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="uppercase font-bold mb-4 xl:text-5xl"
        >
          {data.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-shade1/60 text-lg"
        >
          {data.info}
        </motion.p>
      </div>
      {/* Role and Contributions */}
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row gap-4 ">
        <div className="flex-1">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="uppercase font-bold mb-4 xl:text-4xl"
          >
            Role and Contributions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            {data.role}
          </motion.p>
        </div>
        <motion.div variants={scaleY}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"} className="h-12 w-1 bg-shade2 hidden md:block"></motion.div>
        <div className="flex-1 ">
        <motion.h2
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="uppercase font-bold mb-4 xl:text-4xl"
          >
            Technologies and Tools:
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            <span className="text-shade1">Languages:</span> {data.lang}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            <span className="text-shade1">Frameworks:</span> {data.framework}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            <span className="text-shade1">Database:</span> {data.database}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            <span className="text-shade1">Payment Integration:</span> {data.payment}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            <span className="text-shade1">Design Tools:</span> {data.design}
          </motion.p>
        </div>
      </div>
      <div className="mb-4">
     
          <motion.h2
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="uppercase font-bold mb-8 xl:text-4xl"
          >
            Challenges and Solutions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg mb-4"
          >
            <span className="text-shade1">Challenge:</span> {data.challenge}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/60 text-lg"
          >
            <span className="text-shade1">Solution:</span> {data.solution}
          </motion.p>
        
      </div>
    </div>
  );
};

export default ProjectContent;

ProjectContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    framework: PropTypes.string.isRequired,
    database: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
    design: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    vid1: PropTypes.string.isRequired,
    vid2: PropTypes.string.isRequired,
  }).isRequired,
};
