import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const ContactPage = () => {
  let url =
    "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  
    return (
    <main className="px-4 lg:px-8">
      <div className="pt-28 text-shade1 mb-12">
        <motion.h1 variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="tracking-tighter uppercase text-8xl lg:text-[140px] xl:text-[240px] font-semibold mb-8">
          get in touch.
        </motion.h1>
        <motion.div variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="h-[350px] lg:h-[550px] rounded-3xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={url}
            alt="contact image"
          />
        </motion.div>
      </div>

      <div className="lg:flex gap-8 max-w-[1300px] lg:mx-auto mb-12">
        <div className="mb-8 lg:flex-1">
          <motion.p variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="text-shade1/70 text-xl xl:text-2xl">
            Do you have a question about my work or a project in mind? I'd love
            to hear from you! Feel free to send me
            an email directly, or connect with me on social media. I'm always
            open to collaborating on creative projects.
          </motion.p>
        </div>

        <div className="text-shade1 flex flex-col  gap-4 lg:flex-1">
          <motion.a variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} href="mailto:">
          <div className=" bg-shade2/15 rounded-3xl flex justify-center items-center p-6 gap-4">
           <span className="text-xl font-medium">yefrymsp@gmail.com</span> <span><i className="fa-solid fa-envelope text-3xl"></i></span>
          </div>
          </motion.a>
          <motion.a variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} target="_blank" href="https://www.linkedin.com/in/yefrysanchez/">
          <div className=" bg-shade2/15 rounded-3xl flex justify-center items-center p-6 gap-4">
            <span className="text-xl font-medium">LinkedIn</span> <span><i className="fa-brands fa-linkedin text-3xl"></i></span>
          </div>
          </motion.a>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
