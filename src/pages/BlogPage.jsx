import BlogCard from "../components/BlogCard"

const BlogPage = () => {
  return (
    <main className="text-shade1 pt-24 px-4 min-h-screen">
        <h1 className="font-bold tracking-tighter text-[35vw] text-center leading-[1.2]">BLOG</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

        </div>
    </main>
  )
}

export default BlogPage