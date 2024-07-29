import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../animations/animation";

const AboutSection = () => {
  return (
    <div className="px-4 text-shade1 lg:h-[1000px] 2xl:h-screen mb-12 flex flex-col items-center justify-center">
      <div className="">
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-shade2 font-medium tracking-tight lg:max-w-[1100px] xl:max-w-[1400px] mx-auto"
        >
          I'm a <span className="text-shade1">Web Developer</span> with a passion for <span className="text-shade1">Front-End Development</span>. I build
          visually stunning websites that leave a deep and lasting impression on
          users. <span className="text-shade1">Explore my portfolio</span> and see how I can bring your vision to
          life!
        </motion.p>
      </div>
      <motion.div variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}>
        <Link
          to={"/about"}
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="w-40 h-40 bg-shade2/15 hover:bg-shade1 hover:text-shade3 transition duration-300 rounded-full flex justify-center items-center ml-auto mr-8 mt-8 lg:ml-0 lg:mr-0 lg:mt-24"
        >
          <span className="text-xl font-medium">About Me</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutSection;
