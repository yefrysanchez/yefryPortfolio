import { Link } from "react-router-dom";
import { MyCursorContext } from "../context/CursorContext";
import { useContext } from "react";

const BlogCard = ({title,img}) => {


  const {setIsActive} = useContext(MyCursorContext)

  const onMouseEnter = () => {
    setIsActive(true)
  }
  const onMouseLeave = () => {
    setIsActive(false)
  }


  return (
    <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to={`/blogs/${title}`}>
      <div className="group lg:h-[550px] rounded-3xl overflow-hidden text-shade1 flex flex-col border border-shade2">
        <div className="h-full overflow-hidden">
          <img
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            src={img}
            alt="blog image"
          />
        </div>
        <p className="p-4 text-xl font-bold uppercase z-20 text-center">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
