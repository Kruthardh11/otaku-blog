import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './nav';
import Contact from './components/Contact';
import About from './components/About';
import FateReview from './components/Blogs content/fate-review';
import AddurBlog from './components/addurblog';
import UpdateBlog from './components/updateBlog';

const  App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/fate-review" element={<FateReview/>} />
          <Route path="/add-your-blog" element={<AddurBlog/>}/>
          <Route path="/update-blog/:id" element={<UpdateBlog/>} />
      </Routes>
      </BrowserRouter>
      
      </div>
      )
}

export default App;
