import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './nav';
import Contact from './components/Contact';
import About from './components/About';
import FateReview from './components/Blogs content/fate-review';

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
      </Routes>
      </BrowserRouter>
      
      </div>
      )
}

export default App;
