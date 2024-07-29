import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogdata";
import { fadeUp } from "../animations/animation";

const BlogPage = () => {
  return (
    <main className="text-shade1 pt-24 px-4 min-h-screen mx-auto max-w-[2550px]">
      <motion.h1
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="font-bold tracking-tighter text-[35vw] text-center leading-[1.2]"
      >
        BLOG
      </motion.h1>
      <motion.div
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {blogs.map((e, i) => (
          <BlogCard img={e.img} title={e.title.replace(" ", "")} key={i} />
        ))}
      </motion.div>
    </main>
  );
};

export default BlogPage;
