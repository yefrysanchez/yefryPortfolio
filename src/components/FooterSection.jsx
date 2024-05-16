import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const FooterSection = () => {
  const container = useRef();
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0])

  return (
    <footer ref={container} className="text-shade1 ">
      <svg className="mb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text fill="white" className="text-[9px] font-bold uppercase">
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                ref={(ref) => (texts.current[i] = ref)}
                key={i}
                startOffset={i * 40 + "%"}
                href="#curve"
              >
                let's work together! -
              </textPath>
            );
          })}
        </text>
      </svg>
      <div className="overflow-hidden bg-shade1">
      <motion.div style={{y}} className="bg-shade1 h-[250px] flex items-center justify-center">
        <div className="text-shade3 text-5xl flex gap-5 lg:gap-10">
          <i className="fa-solid fa-house"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-solid fa-user"></i>
          <i className="fa-brands fa-readme"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
      </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

