import Header from "../components/Header"
import Footer from "../components/Footer"
import {useState} from 'react'
function BlogSub() {
  const [id, setID] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')
  const [cover, setImg] = useState('')
  const [form, setForm] = useState({
    id: '',
    title: '',
    cover: '',
    description: '',
  })


  const handleTitleChange = (e) =>{
    setTitle(e.target.value)
  }
  const handleDescChange = (e) =>{
    setDesc(e.target.value)
  }
 const handleIDChange = (e) =>{
   setID(e.target.value)
  }
  const handleImgChange = (e) =>{
    setImg(e.target.value)
  }

  const submitForm = (e)=>{
    // debugger
    //console({description, title,id,cover})
    setForm({description, title,id,cover})

  fetch('http://localhost:5000/blogList', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json'
  },
  body: form
})

.then(response => response.json())
.then(form => {
  console.log('Success:', form);
  alert('Submited')
})
.catch((error) => {
  console.error('Error:', error);
});
    // blogList.push(form)
    // console.log(JSON.stringify(form))
    // console.log(blogList)
    //window.reload()
    e.preventDefault()
    }
    
  return (
    <>
    <Header/>
    <div className="container">
    <h1>Blog Submission Form</h1>
    <form onSubmit={submitForm} >
      <div className="form-group">
       <label style={{color: 'white'}}>Enter id</label>
      <input type="text"
      name="id"
      onChange={handleIDChange} 
      value={id}
      className="form-control"/> 

      <label style={{color: 'white'}}>Enter Headline</label>
      <input type="text"
      name="title"
      onChange={handleTitleChange} 
      value={title}
      className="form-control"/>

      <label style={{color: 'white'}}>Enter Description</label>
      <textarea type="text" 
      onChange={handleDescChange}
      value={description}
      name='description'
      className="form-control"/>

      <label htmlFor="exampleFormControlFile1"  style={{color: 'white'}}>Choose an Image</label>
      <input type="file" value= {cover}  onChange={handleImgChange} className="form-control-file" style={{color: 'white'}} id="exampleFormControlFile1"/>
      <button className="btn btn-primary my-2">Submit</button>

      </div>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default BlogSub
