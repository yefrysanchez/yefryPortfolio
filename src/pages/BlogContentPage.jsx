import RecommendedBlog from "../components/RecommendedBlog";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogdata";


const BlogContentPage = () => {
  
  const { blog } = useParams();
  const data = blogs.find((dataBlog) => dataBlog.title.replace(" ","") === blog);


 

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
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:max-w-[1300px] xl:mx-auto uppercase tracking-tight mb-4 font-bold">
          {data.title}
        </h1>
        <p className="uppercase text-3xl md:text-xl mb-8  xl:max-w-[1300px] xl:mx-auto">
          {data.date}
        </p>
        <div className="h-[500px] lg:h-[700px] xl:h-[900px] xl:max-w-[1600px] mx-auto rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={data.img}
            alt="blog img"
          />
        </div>
      </div>

      <div className="text-xl xl:max-w-[1300px] xl:mx-auto mb-20">
        <p className="mb-12 text-shade1/85">{data.para1}</p>
        <p className="mb-12 text-shade1/85">{data.para1}</p>
        <p className=" text-shade1/85">{data.para1}</p>
      </div>
      <RecommendedBlog />
    </main>
  );
};

export default BlogContentPage;
