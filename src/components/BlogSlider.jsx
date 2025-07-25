import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import BlogSliderCard from "./BlogSliderCard";
import { useState } from "react";
import { blogs } from "../data/blogdata";

const BlogSlider = () => {
  const [isSelected, setIsSelected] = useState(false);

  const [index, setIndex] = useState(0);
  const [disable, setDisable] = useState({ left: true, right: false });



  return (
    <div className="max-w-4xl 2xl:mx-auto">
      <div className="flex gap-4 mb-4 ">
        {blogs.map((blog, i) => (
          <BlogSliderCard title={blog.title} src={blog.img} date={blog.date} key={i} isSelected={true} />
        ))}
      </div>
      <div className="text-shade1 flex gap-2 w-fit bg-shade2/30 p-2 rounded-xl">
        <button
          disabled={disable.left}
          className="disabled:opacity-40 disabled:cursor-not-allowed bg-shade3 p-4 rounded-xl hover:bg-accent transition-colors duration-300"
        >
          <ArrowLeftIcon />
        </button>
        <button
          disabled={disable.right}
          className="disabled:opacity-40 disabled:cursor-not-allowed bg-shade3 p-4 rounded-xl hover:bg-accent transition-colors duration-300"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
