import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = () => {

  const Blogs = [
    {
        id:'1',
        Title:'Fate Review',
        image:'https://i.pinimg.com/originals/40/e6/6b/40e66b4593190a817eebebcb05626d2e.jpg',
        Description:'it is what it is',
        path: '/fate-review'
    },
    {
        id:'2',
        Title:'my fav',
        image:"https://img.etimg.com/thumb/msid-95893645,width-1070,height-580,imgsize-40040,overlay-economictimes/photo.jpg",
        Description:'my fav of all time',
        path:'/my-fav'
    }
]
  
    // <div className="card">
    //   <div className="card-title">{title}</div>
    //   <div className="card-text">{description}</div>
    //   <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
    //   </div>
    return(
      Blogs.map((item)=>{
        return(
          <div className='card' key={item.id}>
            <div className='card-title'>{item.Title}</div>
            <div className='card-text'>{item.Description}</div>
            <div className='card-image' style={{backgroundImage: `url(${item.image})` }}/>
            <Link to='/fate-review' ></Link>
          </div>
        )
      })
    )
   
  
};

export default Card;
