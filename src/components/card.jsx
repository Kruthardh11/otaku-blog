import axios from 'axios';
import React from 'react';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = () => {

//   const Blogs = [
//     {
//         id:'1',
//         Title:'Fate Review',
//         image:'https://i.pinimg.com/originals/40/e6/6b/40e66b4593190a817eebebcb05626d2e.jpg',
//         Description:'it is what it is',
//         path: '/fate-review'
//     },
//     {
//         id:'2',
//         Title:'my fav',
//         image:"https://img.etimg.com/thumb/msid-95893645,width-1070,height-580,imgsize-40040,overlay-economictimes/photo.jpg",
//         Description:'my fav of all time',
//         path:'/my-fav'
//     }
// ]
  

//     return(
//       Blogs.map((item)=>{
//         return(
          
//           <div className='card' key={item.id}>
//             <div className='card-image' style={{backgroundImage: `url(${item.image})` }}/>
//             <div className='card-title'>{item.Title}</div>
           
//             <div className='card-text'>{item.Description}</div>
            
          
//             <Link to='/fate-review' className='read-more' > Read more</Link>
//           </div>
          
//         )
//       })
//     )

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        const fetchAllBlogs = async ()=>{
          try{
            const res = await axios.get("http://localhost:8800/blogs")
            // console.log(res)
            setBlogs(res.data)
          }catch(err){
            console.log(err)
          }
        }
        fetchAllBlogs()
    })

    const handleDelete =async (id)=>{
      try{
        await axios.delete("http://localhost:8800/blogs/"+id)
        window.location.reload();
      }catch(err){
        console.log(err)
      }
    }
    
    return(
      <div className='parent'>
          {blogs.map((blogs)=>(
            <div className='blog-component' key={blogs.id}>
              {blogs.coverImage && <img src={blogs.coverImage} alt='' className='blog-image' />}
              <div className='blog-content'>
              <h2 className='blog-title'>{blogs.title}</h2>
              <h5 className='blog-description'>{blogs.description}</h5>
              <Link to={blogs.link} className="link">Read more</Link>
              <button onClick={()=>handleDelete(blogs.id)} className="blog-button">delete</button>
              <button><Link to={`/update-blog/${blogs.id}`} className="blog-button" >update</Link></button>
              </div>
              
            </div>
            
          ))}

      </div>
    )
   
  
};

export default Card;
