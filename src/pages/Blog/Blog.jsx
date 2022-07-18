import { useParams } from 'react-router'
import '../Blog/blog.css'
import { useState, useEffect } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'


function Blog() {
  const{ id } = useParams()
  const [blog, setBlog] = useState('')

  useEffect(() => {
    fetchBlogList()
  }, [])

   const fetchBlogList = async () => {
    const response = await fetch(
        `http://localhost:5000/blogList?_sort=id&_order=desc`
    )
    const data = await response.json()
    console.log(data)
    var blog = data.find((blogs) => blogs.id === parseInt(id))
    // var blogs = Array.from(data)
    // blogs = blog.find((blogs) => blogs.id === parseInt(id))
    // if (blogs){
    //   //console.log(blogs)
     setBlog(blog)  
    // }
    }                                                                        
  return (
    <>
    <Header/>
    <div className='blog-post container'>
       <h1 className='blog-name'>{blog.title}</h1>
        <img className="cover" src={blog.cover} alt="cover" />
        <p className='blog-desc'>{blog.description}</p>
        <Link to={'/'}>
          <Button title ={"Back"}/>
          </Link>
    </div>
    <Footer/>
</>
)
}


export default Blog