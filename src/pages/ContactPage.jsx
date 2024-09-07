import { motion } from "framer-motion";
import { fadeUp } from "../animations/animation";
import { useState } from "react";

const ContactPage = () => {
  let url =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmgzaHU4dGZ6aWJobjMybW1zZmltY2k5emJoZHc3bDhncXl4cWRtNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp";

const [isCopied, setIsCopied] = useState(false)
const handleCopy = () => {
  const email = "yefrymsp@gmail.com"
  navigator.clipboard.writeText(email)
  setIsCopied(true)
}

  return (
    <main className="px-4 lg:px-8 mx-auto max-w-[2550px]">
      <div className="pt-28 text-shade1 mb-12">
        <motion.h1
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="tracking-tighter uppercase text-8xl mx-auto max-w-[1800px] lg:text-[140px] xl:text-[240px] font-semibold mb-8"
        >
          get in touch.
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="initial"
          viewport={{ once: true }}
          whileInView={"animate"}
          className="lg:h-[550px]  h-[500px] md:h-[550px] 2xl:h-[800px] mx-auto max-w-[1800px] rounded-3xl overflow-hidden"
        >
          <img
            className="h-full w-full object-cover opacity-70"
            src={url}
            alt="contact image"
          />
        </motion.div>
      </div>

      <div className="lg:flex gap-8 max-w-[1300px] lg:mx-auto mb-12">
        <div className="mb-8 lg:flex-1">
          <motion.p
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="text-shade1/70 text-xl xl:text-2xl"
          >
            Do you have a question about my work or a project in mind? I&apos;d
            love to hear from you! Feel free to send me an email directly, or
            connect with me on social media. I&apos;m always open to
            collaborating on creative projects.
          </motion.p>
        </div>

        <div className="text-shade1 flex flex-col md:flex-row gap-4 lg:flex-1 ">
          <motion.a
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            target="_blank"
            href="https://www.linkedin.com/in/yefrysanchez/"
          >
            <div className=" bg-shade2/15 rounded-3xl flex justify-center items-center p-6 gap-4">
              <span className="text-xl font-medium">LinkedIn</span>{" "}
              <span>
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </span>
            </div>
          </motion.a>{" "}
          <motion.div
          onClick={handleCopy}
            variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView={"animate"}
            className="cursor-pointer rounded-3xl h-fit bg-shade2/15 active:bg-shade2/50 select-none duration-200"
          >
            <div className="flex justify-center items-center p-6 gap-4">
              <span className="text-xl font-medium">yefrymsp@gmail.com</span>{" "}
              <span>
                <i className={`fa-solid ${isCopied ? "fa-check" :"fa-copy" } text-3xl`}></i>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
