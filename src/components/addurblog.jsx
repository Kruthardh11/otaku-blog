import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddurBlog =()=>{

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

    const handleClick=async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/blogs", blog)
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
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}
export default AddurBlog;