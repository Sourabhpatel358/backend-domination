const express=require("express");
const noteModel=require("./model/note.models")

const app=express();
app.use(express.json());


app.post("/notes",async(req,res)=>{
    //req->data->database
    const data = req.body;

    await noteModel.create({
        title:data.title,
        description:data.description,
    })

    //response->postman
    res.status(200).json({
        message:"notes created successfully"
    })
})

app.get("/notes",async(req,res)=>{
    
})





module.exports=app;