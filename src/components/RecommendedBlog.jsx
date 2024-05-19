import BlogCard from "./BlogCard";
import { blogs } from "../data/blogdata";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const RecommendedBlog = () => {
  const { blog } = useParams();
  const filteredBlog = blogs.filter((e) => e.title.replace(" ", "") !== blog);

  return (
    <div className="mb-12">
      <div className="mb-8">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-3xl tracking-tighter font-bold md:text-5xl"
        >
          YOU MIGHT ALSO LIKE
        </motion.h2>
      </div>
      <motion.div
        variants={fadeUp}
        initial="initial"
        viewport={{ once: true }}
        whileInView={"animate"}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {filteredBlog.map((e, i) => (
          <BlogCard img={e.img} title={e.title.replace(" ", "")} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default RecommendedBlog;
