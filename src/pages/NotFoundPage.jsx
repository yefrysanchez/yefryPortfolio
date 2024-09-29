import { motion } from "framer-motion"
import { scaleX, sliceUp, sliceUp2 } from "../animations/animation"
import { Link } from "react-router-dom"
import { FlipLink } from "../components/FlipLink"


const NotFoundPage = () => {
  return (
    <div className="h-screen text-shade1 tracking-tighter lg:tracking-[-6px] font-bold flex flex-col justify-center items-center text-5xl md:text-6xl lg:text-7xl">
     

      <h1 className="relative overflow-hidden">
        <motion.div variants={sliceUp} animate="animate" initial="initial">
          <span className="p-1">404</span>
          <span className="absolute top-0 left-0 translate-y-[100%]">
            404
          </span>
          <span className="absolute top-0 left-0 translate-y-[200%]">
            404
          </span>
          <span className="absolute top-0 left-0 translate-y-[300%]">
            404
          </span>
        </motion.div>
      </h1>
      <motion.div className="h-[1px] w-3/4 bg-shade2 px-4" variants={scaleX} animate="animate" initial="initial"></motion.div>
   
      <h2 className="relative overflow-hidden">
        <motion.div variants={sliceUp2} animate="animate" initial="initial">
          <span>Page Not Found</span>
          <span className="absolute top-0 left-0 translate-y-[100%]">
          Page Not Found
          </span>
          <span className="absolute top-0 left-0 translate-y-[200%]">
          Page Not Found
          </span>
          <span className="absolute top-0 left-0 translate-y-[300%]">
          Page Not Found
          </span>
        </motion.div>
      </h2>
      <Link to={"/"} className="text-3xl tracking-tighter mt-8 bg-shade1 px-4 py-2 rounded-lg text-shade3">
      
      <FlipLink>Back Home</FlipLink>
      </Link>
    </div>
  )
}

export default NotFoundPage