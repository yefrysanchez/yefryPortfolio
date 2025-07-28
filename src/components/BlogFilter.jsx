import FilterBtn from "./FilterBtn";

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

  console.log(techTopics);

  return (
    <div className="mb-4 grid gap-4">
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
    </div>
  );
};

export default BlogFilter;
