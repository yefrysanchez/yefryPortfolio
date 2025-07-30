import { Link } from "react-router-dom";
import BlogSlider from "./BlogSlider";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const BlogSection = () => {
  return (
    <section className="min-h-screen overflow-hidden px-4 lg:px-8 mb-12 pt-24 mx-auto w-full max-w-[2550px] flex flex-col justify-center">
      <motion.h2
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="text-shade1 uppercase tracking-tighter text-[70px] lg:text-[100px] 2xl:text-[18vw] font-bold"
      >
        <span>Blogs</span>{" "}
        <Link
          to={"/blogs"}
          className="text-sm tracking-wide hover:underline pt-8 h-fit w-fit"
        >
          View All
        </Link>
      </motion.h2>
      <BlogSlider />
    </section>
  );
};

export default BlogSection;
