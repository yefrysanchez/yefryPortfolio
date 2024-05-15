import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "WORKS",
      href: "/works",
    },
    {
      title: "ABOUT",
      href: "/about",
    },
    {
      title: "BLOG",
      href: "/blogs",
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 fixed w-full top-0 text-shade1 bg-shade3/30 h-24 flex justify-between items-center p-8">
      <div className="font-bold tracking-[-5px] text-6xl w-fit">
        <h1 className="flex flex-col select-none text-[40px]">
          <span>YEFRY</span>

        </h1>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="h-full w-32 flex flex-col justify-center items-center gap-3 group cursor-pointer"
      >
        <div className="h-[2px] w-24 bg-shade1  transition duration-500"></div>
        <div className="h-[2px] w-24 bg-shade1 transition duration-500 -translate-x-5 group-hover:translate-x-0"></div>
        <div className="h-[2px] w-24 bg-shade1  transition duration-500"></div>
      </div>
      {isOpen && (
        <ul className="bg-shade3 group overflow-y-scroll absolute top-0 left-0 right-0 h-screen  text-6xl md:text-7xl lg:text-8xl font-medium flex flex-col  gap-2 md:gap-4  px-8 pt-20">
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => setIsOpen(!isOpen)}
              className="transition duration-300 w-fit hover:translate-x-4 hover:text-shade2"
            >
              <a href="">{link.title}</a>
            </li>
          ))}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute cursor-pointer top-4 right-8"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className=" flex items-end justify-end gap-8 w-full h-full  text-shade2 text-3xl pb-12">
            <div className="flex gap-8">
                <a className="hover:text-shade1 transition duration-300" target="_blank" href=""><i className="fa-brands fa-github"></i></a>
                <a className="hover:text-shade1 transition duration-300" target="_blank" href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="text-xl">
                <p>New York, NY</p>
            </div>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
