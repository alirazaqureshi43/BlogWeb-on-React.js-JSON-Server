import Header from "../components/Header"
import Footer from "../components/Footer"
import BlogList from '../components/BlogList'
import {useState, useEffect} from 'react'
import Button from "../components/Button"
import { Link } from 'react-router-dom'

function Home() {

  const [blogs, setBlogs] = useState('')
  useEffect(() => {
    fetchBlogList()
  }, [])

  const fetchBlogList = async () => {
    const response = await fetch(
        `http://localhost:5000/blogList`
    )
    const data = await response.json()
   
    setBlogs(data)
  }

  return (
    <div>
      <Header/>
      <Link to={"/blogsub"}>
      <Button title={"Create"}/>
      </Link>
      <BlogList blogs={blogs}/>
      <Footer/>
    </div>
  )
  }
export default Home