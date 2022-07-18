import '../BlogItem/BlogItem.css'
import { Link } from 'react-router-dom'
import Button from '../Button'
function BlogItem({
 blog:{id,
     description,
    cover,
    title,
}
}) {
  return (
    <div className="container blog-post">
        <h1 className='blog-title'>{title}</h1>
        <span className='inline-style'>
        <img className="blog-cover" src={cover} alt="cover" />
        <p>{description}</p>
        </span>
        <Link to={`/blog/${id}`}>
          <Button title= {"Read More"}/>
          </Link>
    </div>
  )
}

export default BlogItem