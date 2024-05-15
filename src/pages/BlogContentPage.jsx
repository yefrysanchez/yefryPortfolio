import RecommendedBlog from "../components/RecommendedBlog";

const BlogContentPage = () => {
  const url =
    "https://images.unsplash.com/photo-1715645942867-4c8649966352?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <main className="text-shade1  px-4 pt-32">
      <a
        className="flex gap-2 mb-4 group  xl:max-w-[1300px] xl:mx-auto"
        href="/blogs"
      >
        <span>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <span className="group-hover:translate-x-2 font-bold transition duration-300">
          BACK TO BLOG
        </span>
      </a>

      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:max-w-[1300px] xl:mx-auto uppercase tracking-tight mb-4 font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <p className="uppercase text-3xl md:text-xl mb-8  xl:max-w-[1300px] xl:mx-auto">
          May 15, 2024
        </p>
        <div className="h-[500px] lg:h-[700px] xl:h-[900px] xl:max-w-[1600px] mx-auto rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={url} alt="project blog" />
        </div>
      </div>

      <div className="text-xl xl:max-w-[1300px] xl:mx-auto mb-20">
        <p className="mb-12 text-shade1/85">
          In the competitive landscape of modern business, creating memorable
          brand experiences is essential for standing out in the minds of
          consumers. Design plays a pivotal role in shaping these experiences,
          influencing perceptions, emotions, and behaviors. From logos and
          packaging to digital interfaces and physical spaces, every touchpoint
          with a brand presents an opportunity to make an impact. In this
          article, we explore the principles and strategies behind designing for
          impact and creating lasting impressions that resonate with audiences.
        </p>
        <p className="mb-12 text-shade1/85">
          In the competitive landscape of modern business, creating memorable
          brand experiences is essential for standing out in the minds of
          consumers. Design plays a pivotal role in shaping these experiences,
          influencing perceptions, emotions, and behaviors. From logos and
          packaging to digital interfaces and physical spaces, every touchpoint
          with a brand presents an opportunity to make an impact. In this
          article, we explore the principles and strategies behind designing for
          impact and creating lasting impressions that resonate with audiences.
        </p>
        <p className=" text-shade1/85">
          In the competitive landscape of modern business, creating memorable
          brand experiences is essential for standing out in the minds of
          consumers. Design plays a pivotal role in shaping these experiences,
          influencing perceptions, emotions, and behaviors. From logos and
          packaging to digital interfaces and physical spaces, every touchpoint
          with a brand presents an opportunity to make an impact. In this
          article, we explore the principles and strategies behind designing for
          impact and creating lasting impressions that resonate with audiences.
        </p>
      </div>
      <RecommendedBlog />
    </main>
  );
};

export default BlogContentPage;
