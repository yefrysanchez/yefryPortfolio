import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const SoftDevSection = () => {
  return (
    <section className="min-h-screen px-4 py-12 text-shade1 text-[15vw] lg:text-[180px] xl:text-[200px] uppercase font-semibold flex flex-col justify-center lg:items-center tracking-tighter leading-[0.8] select-none">
      <motion.h2
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="flex flex-col"
      >
        <span>Software</span>{" "}
        <div className="flex items-center">
    
          <span className="ml-[51%] lg:ml-auto">Dev</span>
        </div>
      </motion.h2>
      <motion.div
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="h-4 w-32 my-8 bg-shade2 lg:hidden"
      ></motion.div>
      <h2 className="text-shade2 flex flex-col">
        <motion.span
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="lg:flex items-center"
        >
          <div className="h-4 w-32 lg:h-3 lg:w-48 my-8 bg-shade2 hidden lg:inline-block"></div>
          Based in
        </motion.span>
        <span className="ml-auto lg:ml-0 pr-5 flex flex-row-reverse xl:flex-row xl:gap-8">
          <motion.span
            viewport={{ once: true }}
            variants={fadeUp}
            initial="initial"
            whileInView={"animate"}
          >
            NYC
          </motion.span>{" "}
          <motion.span
            variants={fadeUp}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="overflow-hidden rounded-full"
          >
            <img
              className="h-[16vw] w-[16vw] lg:w-[150px] lg:h-[150px] xl:h-[170px] xl:w-[490px]  object-cover scale-150 md:scale-125 xl:scale-100 xl:object-[center_-80px]"
              src="/profile.jpeg"
              alt="profile image"
            />
          </motion.span>
        </span>
      </h2>
    </section>
  );
};

export default SoftDevSection;
