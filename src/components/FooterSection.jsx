const FooterSection = () => {
  return (
    <footer className="text-shade1 flex flex-col lg:flex-row lg:h-[412px] h-screen lg:border-t lg:border-t-shade2/50">
      <div className="lg:border-r lg:border-r-shade2/50 lg:border-b border-b-shade2/50 lg:h-auto h-[80%]">
        <div className="lg:p-12 pt-8 px-4 lg:w-[418px] h-[60%]">
          <h1 className="flex flex-col tracking-tighter leading-[.7] text-[150px] font-bold select-none pt-20 lg:pt-0">
            <span>YEF</span>

            <span className="tracking-normal pl-4"> RY</span>
          </h1>
        </div>
      </div>

      <div className=" lg:flex-auto">
        <div className="lg:h-[80%] lg:border-b border-b-shade2/50 w-full relative px-4 lg:px-0 border-b pb-4 lg:pb-0">
          <a
            className="flex flex-col tracking-tighter leading-[.85] text-4xl font-medium lg:absolute lg:right-8 bottom-8 hover:text-shade2 transition duration-300"
            href=""
          >
            <span>YEFRYMSP@</span>
            <span>GMAIL.COM</span>
          </a>
        </div>

        <div className="flex gap-8 text-2xl text-shade2 p-6">
          <div className="">
            <a
              className="mr-6 hover:text-shade1 transition duration-300"
              href=""
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="hover:text-shade1 transition duration-300" href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <p className="tracking-tighter">2024</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
