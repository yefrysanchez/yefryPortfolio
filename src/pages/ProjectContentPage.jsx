


const ProjectContentPage = () => {

  const url = "https://images.unsplash.com/photo-1715276611597-048987ab7d97?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"




  return (
    <div className="pt-32 text-shade1 px-4">
      <div className="mb-16">
        <a
          className="flex gap-2 mb-4 group  xl:max-w-[1300px] xl:mx-auto"
          href="/works"
        >
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span className="group-hover:translate-x-2 font-bold transition duration-300 tracking-tighter">
            ALL PROJECTS
          </span>
        </a>
        <h1 className="text-7xl md:text-8xl xl:text-[160px] uppercase tracking-tighter font-semibold mb-8 xl:max-w-[1300px] xl:mx-auto">
          project title
        </h1>
        <div className="flex items-center lg:justify-between gap-4 mb-8 xl:max-w-[1300px] xl:mx-auto">
          <span className="text-2xl inline-block text-shade1/60 uppercase tracking-tighter font-medium ">
            Project Type
          </span>
          <a href="">
            <span className="text-shade3 inline-block bg-shade1 rounded-2xl py-4 px-8 hover:opacity-90 transition duration-300 group">
              {" "}
              Live Preview
              <span className="ml-2"><i className="fa-solid fa-arrow-up-right-from-square group-hover:translate-x-1 transition duration-300"></i></span>
            </span>
            
          </a>
        </div>
        <div className="h-[270px] md:h-[500px] lg:h-[900px] xl:max-w-[1600px] xl:mx-auto overflow-hidden rounded-3xl">
          <img className="h-full w-full object-cover" src={url} alt="project image" />
        </div>
      </div>
      <div className="text-xl mb-4 lg:mb-12 xl:max-w-[900px] xl:mx-auto">
        <h2 className="uppercase font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et facere dolore corrupti laborum!</h2>
        <p className="text-shade1/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis ipsa neque laborum ex veniam at distinctio accusantium? Consequuntur esse illum numquam nobis fugit aut!</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 xl:max-w-[1600px] xl:mx-auto mb-12">
        <div className="rounded-3xl overflow-hidden h-[300px] md:h-[500px]">
          <video autoPlay loop className="h-full w-full object-cover" src="https://media.istockphoto.com/id/1444290062/video/dramatic-aerial-view-of-the-statue-of-liberty-and-nyc-skyline-at-dawn.mp4?s=mp4-640x640-is&k=20&c=SEwKZXkGSod44SGFZ0r8wL3ZWqM7ZTxYzaYX0njhkQo="></video>
        </div>
        <div className="rounded-3xl overflow-hidden h-[300px] md:h-[500px]">
          <video autoPlay loop className="h-full w-full object-cover" src="https://videos.pexels.com/video-files/3999358/3999358-uhd_3840_2160_24fps.mp4"></video>
        </div>
      </div>


    </div>
  );
};

export default ProjectContentPage;
