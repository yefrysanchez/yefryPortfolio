
import { motion } from "framer-motion";
import PropTypes from "prop-types"

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"

      className="relative w-fit block overflow-hidden cursor-pointer whitespace-nowrap font-black uppercase "
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 top-[2px] md:top-0 text-[#905ee7]">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};


FlipLink.propTypes = {
  children: PropTypes.string.isRequired
}