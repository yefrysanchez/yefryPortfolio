import { motion } from "framer-motion";
import { fade, scaleX, sliceUp, sliceUp2 } from "../animations/animation";

const Hero = () => {
  return (
    <section className="h-screen text-shade1 tracking-[-6px] lg:tracking-[-10px] font-bold flex flex-col justify-center items-center text-7xl md:text-8xl lg:text-[180px]">
      <motion.div variants={fade} animate="enter" initial="initial">
        <p className="text-xl md:text-2xl lg:text-3xl tracking-tighter text-shade2 italic">
          Hello, I&apos;m
        </p>
      </motion.div>
      {/* firstname */}
      <h1 className="relative overflow-hidden">
        <motion.div variants={sliceUp} animate="animate" initial="initial">
          <span className="p-1">YEFRY</span>
          <span className="absolute top-0 left-0 translate-y-[100%]">
            YEFRY
          </span>
          <span className="absolute top-0 left-0 translate-y-[200%]">
            YEFRY
          </span>
          <span className="absolute top-0 left-0 translate-y-[300%]">
            YEFRY
          </span>
        </motion.div>
      </h1>
      <motion.div className="h-[1px] w-3/4 bg-shade2 px-4" variants={scaleX} animate="animate" initial="initial"></motion.div>
      {/* Lastname */}
      <h1 className="relative overflow-hidden">
        <motion.div variants={sliceUp2} animate="animate" initial="initial">
          <span>SANCHEZ</span>
          <span className="absolute top-0 left-0 translate-y-[100%]">
            SANCHEZ
          </span>
          <span className="absolute top-0 left-0 translate-y-[200%]">
            SANCHEZ
          </span>
          <span className="absolute top-0 left-0 translate-y-[300%]">
            SANCHEZ
          </span>
        </motion.div>
      </h1>
    </section>
  );
};

export default Hero;
