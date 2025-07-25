import { Link } from "react-router-dom";
import { MyCursorContext } from "../context/CursorContext";
import { useContext } from "react";
import propTypes from "prop-types";

const BlogCard = ({ title, img, date, readingTime }) => {
  const { setIsActive } = useContext(MyCursorContext);

  const onMouseEnter = () => {
    setIsActive(true);
  };
  const onMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Link
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={`/blogs/${title}`}
    >
      <div className="group text-shade1 w-full text-3xl  flex flex-col gap-4 min-h-40 h-full bg-shade2/10 p-4 rounded-xl">
        <div className="h-full rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover object-center group-hover:scale-105 transition duration-500"
            src={img}
            alt="blog image"
          />
        </div>
       <div className=" h-full flex flex-col gap-2 justify-between">
        <>
          <div className="mb-4">
            <span className="bg-shade2/30 p-2 rounded-lg text-xs">
              Development
            </span>
          </div>
          <h3 className="font-semibold md:text-3xl tracking-tighter">
            {title} Lorem ipsum dolor sit amet consectetur.
          </h3>
        </>
        <div className="grid font-thin text-sm mt-auto">
          <span className="opacity-50">{readingTime} min</span>
          <span className="font-medium">{date}</span>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  readingTime: propTypes.string.isRequired
};
