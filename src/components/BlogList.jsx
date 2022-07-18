import BlogItem from "../components/BlogItem/BlogItem"

function BlogList({blogs}) {
  blogs = Array.from(blogs)
  return (
    
    <div> 
    {blogs.map((blog) => (
        <BlogItem blog = {blog} key = {blog.id}/>
      ))}
    </div>
  )
}

export default BlogList