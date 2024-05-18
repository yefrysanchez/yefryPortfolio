
import { fadeUp } from "../animations/animation"
import StickyProject from "./StickyProject"
import { motion } from "framer-motion"

const ProjectSection = () => {


  
  return (
    <motion.section variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="min-h-screen px-4 lg:px-8 mb-12">
        <h2 className="text-shade1 uppercase tracking-tighter text-[50px] lg:text-[100px] font-bold">Works</h2>
        <div className="h-[300vh]">
            <StickyProject />
            <StickyProject />
            <StickyProject />
        </div>
    </motion.section>
  )
}

export default ProjectSection