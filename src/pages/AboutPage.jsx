import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import AboutPageCerts from "../components/AboutPageCerts";
import AboutPageDesc from "../components/AboutPageDesc";
import { useEffect } from "react";

const AboutPage = () => {

  useEffect(() => {
    document.title = "About Me | Portfolio"
  }, [])

  return (
    <main className="pt-[124px] px-[40px] pb-4 md:px-8 mx-auto max-w-[1650px]">
      <AboutPageDesc />

      <section>
        <motion.h2
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="text-[50px] text-shade1 lg:text-[100px]  uppercase tracking-tighter leading-[0.9] font-semibold my-20 lg:text-center"
        >
          skills
        </motion.h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((e) => (
            <motion.div
              key={e.skill}
              variants={fadeUp}
              initial="initial"
              viewport={{ once: true }}
              whileInView={"animate"}
              className="text-shade1 mx-auto w-full text-xl  md:max-w-lg min-h-40 bg-shade2/10 p-4 rounded-xl"
            >
              <h3 className="font-bold mb-2">{e.skill}</h3>
              <p className="text-shade2">{e.tech}</p>
            </motion.div>
          ))}
        </div>
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
  );
};

export default AboutPage;

const certs = [
  {
    title: "Meta Front-End Developer Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/ROUJXCAW6O6Q",
  },
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

const skills = [
  {
    skill: "Languages & Frameworks:",
    tech: "JavaScript, TypeScript, React, Node.js, Express.js, HTML, CSS.",
  },
  {
    skill: "Styling:",
    tech: "Tailwind CSS, Styled Components, CSS Modules , Framer Motion.",
  },
  {
    skill: "State Management:",
    tech: "Redux Toolkit, Zustand.",
  },
  {
    skill: "Databases:",
    tech: "MongoDB, SQL, Prisma, Mongoose.",
  },
  {
    skill: "Cloud:",
    tech: "AWS (Certified Developer in Process, Certified Cloud Practitioner), Google Cloud (Certified Engineer).",
  },
  {
    skill: "Version Control:",
    tech: "Git, GitHub.",
  },
];
