import React from "react";
import BlogCard from "./BlogCard";

const RecommendedBlog = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl tracking-tighter font-bold md:text-5xl">YOU MIGHT ALSO LIKE</h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

        </div>
    </div>
  );
};

export default RecommendedBlog;
