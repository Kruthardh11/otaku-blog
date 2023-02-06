import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateBlog =()=>{
    const [blog, setBlog] = useState(
        {
            title: "",
            description: "",
            coverImage: "",
            link:""
        }
    )

    const handleChange=(e)=>{
        setBlog((prev) =>({...prev, [e.target.name]: e.target.value}));
    }

    const navigate = useNavigate()
    const location = useLocation();

    const blogId = location.pathname.split("/")[2]
    console.log(blogId)

    const handleClick=async e=>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/blogs/" + blogId, blog)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Add your blog here </h1>
            <input type="text" name="title" placeholder="title" onChange={handleChange} />
            <input type="text" name="description" placeholder="a breif description " onChange={handleChange} />
            <input type="text" name="coverImage" placeholder="link for the cover image" onChange={handleChange} />
            <input type="text" name="link" placeholder="link" onChange={handleChange} />
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default UpdateBlog;