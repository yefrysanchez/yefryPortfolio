import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const AboutPageDesc = () => {
  return (
    <section className="xl:flex relative xl:min-h-screen ">
      <div className="text-shade1 flex-1 z-10 xl:w-1/2 2xl:w-1/3 mb-12">
        <motion.h1
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-[70px] lg:text-[100px] xl:text-[240px]  uppercase tracking-tighter flex flex-col leading-[0.9] font-semibold mb-12"
        >
          <span className="flex items-center xl:w-[997px]">
            Yefry{" "}
            <div className="h-2 w-16 xl:h-8 xl:w-44 mx-4 bg-shade1 inline-block"></div>
          </span>
          <span>Sanchez</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-2xl flex flex-col gap-4 xl:pr-4"
        >
          <span>
            Passionate Front-end Developer dedicated to crafting intuitive user
            interfaces. With a focus on blending design and functionality, I
            transform concepts into responsive and engaging websites.
          </span>
          <span className="mt-4">
            I am constantly exploring new technologies to enhance user
            experiences and drive innovation in web development. I love
            baseball, video games, producing music, and all about computers from
            hardware to software. I am passionate about technology in general.
          </span>
        </motion.p>
      </div>
      <motion.div
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="xl:w-1/2 2xl:w-2/3 xl:h-[960px] rounded-3xl overflow-hidden"
      >
        <img
          className=" w-full h-full object-cover"
          src="/profile.jpeg"
          alt="about image"
        />
      </motion.div>
    </section>
  );
};

export default AboutPageDesc;
