import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";

const AboutPage = () => {

  
  return (
    <main className="pt-[124px] px-[40px] pb-4 md:px-8 ">
      <section className="xl:flex relative xl:min-h-screen ">
        <div className="text-shade1 flex-1 z-10 xl:w-1/2 2xl:w-1/3 mb-12">
          <h1 className="text-[70px] lg:text-[100px] xl:text-[240px]  uppercase tracking-tighter flex flex-col leading-[0.9] font-semibold mb-12">
            <span className="flex items-center xl:w-[997px]">
              Yefry{" "}
              <div className="h-2 w-16 xl:h-8 xl:w-44 mx-4 bg-shade1 inline-block"></div>
            </span>
            <span>Sanchez</span>
          </h1>
          <p className="text-2xl flex flex-col gap-4 xl:pr-4">
            <span>Passionate Front-end Developer dedicated to crafting intuitive user
            interfaces. With a focus on blending design and functionality, I
            transform concepts into responsive and engaging websites.</span>
            <span className="mt-4">I am
            constantly exploring new technologies to enhance user experiences
            and drive innovation in web development. I love baseball, video
            games, producing music, and all about computers from hardware to
            software. I am passionate about technology in general.</span>
          </p>
        </div>
        <div className="xl:w-1/2 2xl:w-2/3 xl:h-[960px]">
          <img
            className="rounded-3xl w-full h-full object-cover 2xl:object-[center_-250px]"
            src="/profile.jpeg"
            alt="about image"
          />
        </div>
      </section>
      <section className="my-40 ">
        <motion.h2 variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="text-[50px] text-shade1 lg:text-[100px]  uppercase tracking-tighter leading-[0.9] font-semibold my-20 lg:text-center">
          skills
        </motion.h2>
        <motion.div variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="text-shade1 text-6xl grid grid-cols-3 md:grid-cols-4 md:gap-y-20 gap-4 lg:grid-cols-9">
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-html5"></i>
            <span className="text-xl">HTML</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-css3-alt"></i>
            <span className="text-xl">CSS</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-js"></i>
            <span className="text-xl">JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-react"></i>
            <span className="text-xl">React</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-aws"></i>
            <span className="text-xl">AWS</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-google"></i>
            <span className="md:text-xl text-[3vw]">Google Cloud</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-solid fa-database"></i>
            <span className="text-xl">Postgres</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-git"></i>
            <span className="text-xl">Git</span>
          </span>
          <span className="flex flex-col items-center">
            <i className="fa-brands fa-docker"></i>
            <span className="text-xl">Docker</span>
          </span>
        </motion.div>
      </section>
      <section className="my-40 ">
          <motion.h2 variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} className="text-[10.5vw] text-shade1 lg:text-[100px]  uppercase tracking-tighter leading-[0.9] font-semibold mb-40 lg:text-center">Certifications</motion.h2>
          <div className="font-alata text-2xl text-shade1">
            <motion.a variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} target="_blank" href="https://www.credly.com/badges/7ac77b31-e544-4863-9845-c8f4c93f8b40/linked_in_profile" className=" transition  border-y border-sha py-20 flex items-center justify-between group lg:text-4xl lg:px-6"><span className="lg:group-hover:translate-x-8 transition">Google Cloud: Associate Cloud Engineer</span><span> <i className="fa-solid fa-arrow-right text-shade1 bg-[#1C1D20] group-hover:bg-[#455CE9] transition  p-4 rounded-full lg:group-hover:-translate-x-8"></i></span></motion.a>
            <motion.a variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} target="_blank" href="https://www.credly.com/badges/b6074a5a-a750-4142-b64d-c6ad47098995/linked_in_profile" className=" transition  border-b py-20 flex items-center justify-between group lg:text-4xl lg:px-6"><span className="lg:group-hover:translate-x-8 transition ">AWS Certified Cloud Practitioner</span><span> <i className="fa-solid fa-arrow-right text-shade1 bg-[#1C1D20] group-hover:bg-[#455CE9] transition  p-4 rounded-full lg:group-hover:-translate-x-8"></i></span></motion.a>
            <motion.a variants={fadeUp} initial="initial" viewport={{once:true}} whileInView={"animate"} target="_blank" href="https://www.coursera.org/account/accomplishments/verify/VWMAQRSDT53A" className=" transition  border-b py-20 flex items-center justify-between group lg:text-4xl lg:px-6"><span className="lg:group-hover:translate-x-8 transition ">Google: Technical Support Fundamentals</span><span> <i className="fa-solid fa-arrow-right text-shade1 bg-[#1C1D20] group-hover:bg-[#455CE9] transition p-4 rounded-full lg:group-hover:-translate-x-8"></i></span></motion.a>
            </div>
        </section>
    </main>
  );
};

export default AboutPage;
