const StickyProject = () => {

    
  return (
    <div
      className={`sticky top-0 h-screen bg-[#672626] text-[3.5vw] flex flex-col items-center justify-center text-shade1`}
    >
      <div>
        <h2 className="tracking-tighter uppercase font-bold">Project Title</h2>
      </div>
      <div className="">
        <img
          className="w-full h-full object-cover"
          src="https://assets-global.website-files.com/62dd44ff63a8786b269dc628/6514132d7187817720df161b_Frame%201168.webp"
          alt="project img"
        />
      </div>
    </div>
  );
};

export default StickyProject;
