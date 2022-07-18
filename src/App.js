import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import BlogSub from './pages/BlogSub'
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
      <Route path = '/blogsub' element= {<BlogSub/>}/>
    </Routes>
  </Router>
  );
}

export default App;
