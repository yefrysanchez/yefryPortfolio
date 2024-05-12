const AboutSection = () => {
  return (
    <div className="px-4 text-shade1 lg:h-[1000px] flex flex-col items-center justify-center">
      <div className="">
        <p className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-medium tracking-tight lg:max-w-[1100px] xl:max-w-[1400px] mx-auto">
          I'm a Web Developer with a passion for Front-End Development.
          I build visually stunning websites that leave a deep
          and lasting impression on users. Explore my portfolio and see how I
          can bring your vision to life!
        </p>
      </div>
      <div className="w-40 h-40 bg-shade2/15 rounded-full flex justify-center items-center ml-auto mr-8 mt-8 lg:ml-0 lg:mr-0 lg:mt-24">
        <span className="text-xl font-medium">About Me</span>
      </div>
    </div>
  );
};

export default AboutSection;
