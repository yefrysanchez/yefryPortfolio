import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fade, menuSlide, slice } from "../animations/animation";
import { FlipLink } from "./FlipLink";

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
    <nav className="z-40 fixed w-full top-0 text-shade1 bg-shade3/30 h-24 flex justify-between items-center ">
      <div className="font-bold tracking-[-5px] text-6xl w-fit ml-4">
        <Link to={"/"}>
          <h1 className="flex flex-col select-none text-[35px] leading-6  text-center lg:pl-8">
            <span>YEF</span>
            <span>RY</span>
          </h1>
        </Link>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="h-full w-[125px] flex flex-col justify-end bg-shade2/20 hover:bg-shade2/0 transition p-[10px] group cursor-pointer"
      >
        <div className="transition w-[125px] group translate-x-[100%] group-hover:translate-x-0 bg-shade1 absolute top-0 right-0 bottom-0 -z-10 "></div>

        <svg
          className=""
          width="56"
          height="7"
          viewBox="0 0 56 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            className="transition group-hover:stroke-shade3"
            x1="56"
            y1="0.5"
            x2="4.37114e-08"
            y2="0.500005"
            stroke="white"
          />

          <line
            className="transition group-hover:stroke-shade3"
            x1="56"
            y1="6.5"
            x2="28"
            y2="6.5"
            stroke="white"
          />
        </svg>

        <p className="group-hover:text-shade3 transition-colors">MENU</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.ul
              variants={menuSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className="bg-shade1 text-shade3 z-30 group absolute top-0 right-0 h-screen text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl font-medium flex flex-col w-full lg:w-[40%] 2xl:w-[50%] gap-2 md:gap-4 px-8 pt-20"
            >
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="absolute top-5 right-5 cursor-pointer"
              >
                <motion.svg
                  variants={slice}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.5 1.5L67 67" stroke="black" />

                  <path d="M66.5 1L0.999997 66.5" stroke="black" />
                </motion.svg>
              </div>
             {links.map((link, i) => (
              <Link onClick={() => setIsOpen(false)} to={link.href} key={i}>
                <FlipLink>{link.title}</FlipLink>
              </Link>
             ))}
            </motion.ul>
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              variants={fade}
              animate="enter"
              exit="exit"
              initial="initial"
              className="fixed top-0 z-10 left-0 right-0 bottom-0 bg-shade3/80 "
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
