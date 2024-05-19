import { Link } from "react-router-dom";

const BlogCard = ({title,img}) => {


  return (
    <Link to={`/blogs/${title}`}>
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
