import { motion } from "framer-motion";
import FilterBtn from "./FilterBtn";
import { fadeUp } from "../animations/animation";

const BlogFilter = () => {
  const techTopics = [
    "Web Development",
    "Cloud Computing",
    "Artificial Intelligence",
    "Cybersecurity",
    "Mobile Development",
    "Blockchain & Cryptocurrencies",
    "Internet of Things (IoT)",
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"animate"}
      className="mb-4 grid gap-4 2xl:grid-cols-2"
    >
      <input
        type="search"
        className="w-full px-4 py-2 bg-shade2/10 rounded-xl"
        placeholder="Search blog..."
      />
      <div className="flex flex-wrap gap-2">
        {techTopics.map((topic, index) => (
          <FilterBtn filter={topic} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default BlogFilter;
