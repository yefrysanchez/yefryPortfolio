const ProjectContentPage = () => {
  return (
    <div className="mb-12 text-shade1 font">
      <div className="h-screen relative">
        <h1 className="absolute text-[90px] text-center w-full px-4 lg:text-[180px] top-1/2 translate-x-[-50%] leading-none left-1/2 translate-y-[-50%] uppercase font-bold text-white z-10 tracking-tighter">
          Lorem ipsum dolor sit amet.
        </h1>
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/8973482/pexels-photo-8973482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="project image"
        />
        <div className="bg-shade3/40 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="bg-gradient-to-t from-black to-transparent absolute top-0 left-0 right-0 bottom-0"></div>
      </div>

      <div className="bg-shade3 min-h-screen  lg:flex lg:flex-row-reverse mt-4">
        <div className=" text-shade1 flex-1 px-4">
          <h2 className="text-4xl lg:text-6xl tracking-tighter mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="text-xl lg:text-2xl tracking-tighter text-shade1/60 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            similique totam maiores sapiente, dolorem excepturi error, quas
            doloremque consectetur, aspernatur possimus voluptate quod placeat
            porro?
          </p>
          <p className="text-xl lg:text-2xl tracking-tighter text-shade1/60 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            similique totam maiores sapiente, dolorem excepturi error, quas
            doloremque consectetur, aspernatur possimus voluptate quod placeat
            porro?
          </p>

          <a className="text-shade1 mx-auto mb-8 flex justify-center " target="_blank" href="">
            <span className="bg-shade2/40 rounded-3xl py-4 px-12">Live Demo</span>
          </a>

        </div>
        <div className=" flex-1">
          <div className="">
            <video
              className="w-full"
              loop
              autoPlay
              src="https://videos.pexels.com/video-files/5473797/5473797-uhd_4096_2160_25fps.mp4"
            ></video>
          </div>
          <div>
            <video
              className="w-full"
              loop
              autoPlay
              src="https://videos.pexels.com/video-files/5473799/5473799-sd_640_338_25fps.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContentPage;
