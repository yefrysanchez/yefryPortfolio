import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import ScrollRestoration from "../components/ScrollRestoration";
import AboutPageCerts from "../components/AboutPageCerts";
import AboutPageDesc from "../components/AboutPageDesc";

const AboutPage = () => {
  return (
    <>
      <ScrollRestoration />
      <main className="pt-[124px] px-[40px] pb-4 md:px-8 mx-auto max-w-[2550px]">
        <AboutPageDesc />
        <section className="my-40 ">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-[50px] text-shade1 lg:text-[100px]  uppercase tracking-tighter leading-[0.9] font-semibold my-20 lg:text-center"
          >
            skills
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1 text-6xl grid grid-cols-3 md:grid-cols-4 md:gap-y-20 gap-4 lg:grid-cols-9"
          >
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
          <motion.h2
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-[10.5vw] text-shade1 lg:text-[100px]  uppercase tracking-tighter leading-[0.9] font-semibold mb-40 lg:text-center"
          >
            Certifications
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="font-alata text-2xl text-shade1 border-t"
          >
            {certs.map((cert) => (
              <AboutPageCerts
                key={cert.title}
                title={cert.title}
                url={cert.url}
              />
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;

const certs = [
  {
    title: "Google Cloud: Associate Cloud Engineer",
    url: "https://www.credly.com/badges/7ac77b31-e544-4863-9845-c8f4c93f8b40/linked_in_profile",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/b6074a5a-a750-4142-b64d-c6ad47098995/linked_in_profile",
  },
  {
    title: "Google: Technical Support Fundamentals",
    url: "https://www.coursera.org/account/accomplishments/verify/VWMAQRSDT53A",
  },
];
