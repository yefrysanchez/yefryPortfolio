import RecommendedBlog from "../components/RecommendedBlog";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogdata";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import { useContext, useEffect } from "react";
import { MyCursorContext } from "../context/CursorContext";
import NotFoundPage from "./NotFoundPage";

const BlogContentPage = () => {
  const { blog } = useParams();
  const data = blogs.find(
    (dataBlog) => dataBlog.title.replace(" ", "") === blog
  );

  const { setIsActive } = useContext(MyCursorContext);

  useEffect(() => {
    setIsActive(false); //cursor bug fix
    document.title = `${blog ? blog : "Yefry Sanchez"} | Portfolio`;
  }, [blog]);

  if (!data) {
    return <NotFoundPage />;
  }
  return (
    <main className="text-shade1  px-4 pt-32">
      <Link
        className="flex gap-2 mb-4 group  xl:max-w-[1300px] xl:mx-auto"
        to="/blogs"
      >
        <span>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <span className="group-hover:translate-x-2 font-bold transition duration-300">
          BACK TO BLOGS
        </span>
      </Link>

      <div className="mb-12">
        <motion.h1
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:max-w-[1300px] xl:mx-auto uppercase tracking-tight mb-4 font-bold"
        >
          {data.title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="uppercase text-3xl md:text-xl mb-8  xl:max-w-[1300px] xl:mx-auto"
        >
          {data.date}
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="h-[500px] lg:h-[700px] xl:h-[900px] xl:max-w-[1600px] mx-auto rounded-3xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src={data.img}
            alt="blog img"
          />
        </motion.div>
      </div>

      <div className="text-xl xl:max-w-[1300px] xl:mx-auto mb-20">
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="mb-12 text-shade1/85"
        >
          {data.para1}
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="mb-12 text-shade1/85"
        >
          {data.para1}
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className=" text-shade1/85"
        >
          {data.para1}
        </motion.p>
      </div>
      <RecommendedBlog />
    </main>
  );
};

export default BlogContentPage;
