const WebDevSection = () => {


  return (
    <section className="min-h-screen px-4 py-12 text-shade1 text-[15vw] lg:text-[180px] xl:text-[200px] uppercase font-semibold flex flex-col justify-center lg:items-center tracking-tighter leading-[0.8]">
      <h2 className="flex flex-col">
        <span>Web</span> <span>Developer</span>
      </h2>
      <div className="h-4 w-32 my-8 bg-shade2 lg:hidden"></div>
      <h2 className="text-shade2 flex flex-col">
        <span className="lg:flex items-center">
          <div className="h-4 w-32 lg:h-3 lg:w-48 my-8 bg-shade2 hidden lg:inline-block"></div>
          Based on
        </span>{" "}
        <span className="ml-auto lg:ml-0 pr-5 flex flex-row-reverse xl:flex-row xl:gap-8"><span>NYC</span> <span className="overflow-hidden rounded-full"><img className="h-[16vw] w-[16vw] lg:w-[150px] lg:h-[150px] xl:h-[170px] xl:w-[490px]  object-cover scale-150 md:scale-125 xl:scale-100 xl:object-[center_-80px]" src="/profile.jpeg" alt="profile image" /></span></span>
      </h2>
    </section>
  );
};

export default WebDevSection;
