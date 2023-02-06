import express from "express";
import mysql from "mysql";
import cors from "cors";

const app =express();

const db = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Yoruichi11",
    database:"blogs"
})

app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.json("this is the rear end");
})

app.get('/blogs', (req,res)=>{
    console.log("get working")
    const q = "SELECT * FROM cards"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/blogs', (req, res)=>{
    
    const q = "INSERT INTO cards (`title`,`description`, `coverImage`, `link` ) VALUES(?) "
    const values =[req.body.title, req.body.description, req.body.coverImage, req.body.link,];
    // const values = ["title from back", "desc from back", "image from back", "link form back"]

    db.query(q, [values], (err, data)=>{
        console.log("post going")
        if(err) return res.json(err)
        return res.json("working successfully ") 
    })
})

app.delete("/blogs/:id", (req,res)=>{
    const blogId= req.params.id;
    const q = "DELETE FROM cards WHERE id = ? ";

    db.query(q, [blogId], (err, data)=>{
        if (err) return res.json(err);
        return res.json("Blog deleted succesfully");
    });

})

app.put("/blogs/:id", (req,res)=>{
    const blogId= req.params.id;
    const q = "UPDATE cards SET  `title` = ? , `description`= ?, `coverImage` = ? , `link`= ?  WHERE id = ?";
    const values =[
        req.body.title, 
        req.body.description,
         req.body.coverImage, 
         req.body.link,
        ];

    db.query(q, [...values, blogId], (err, data)=>{
        if (err) return res.json(err);
        return res.json("Blog updated succesfully");
    });

})

app.listen(8800, ()=>{
    console.log("bingo");
})