const BlogCard = () => {
  const url =
    "https://miro.medium.com/v2/resize:fit:800/1*VFStJoxV3Wa8Ees7ZtnN7A.png";

  return (
    <a href="">
      <div className="group lg:h-[550px] rounded-3xl overflow-hidden text-shade1 flex flex-col border border-shade2">
        <div className="h-full overflow-hidden">
          <img
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            src={url}
            alt="blog image"
          />
        </div>
        <p className="p-4 text-xl font-bold uppercase z-20 ">
          Lorem ipsum dolor sit amet consectetur exercitationem?
        </p>
      </div>
    </a>
  );
};

export default BlogCard;
