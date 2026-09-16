//first basics we'll require express
const express=require("express");
const app=express();

const notes=[];

//the data from post will be in json format so to make it readable by the express,
//we have to user a line to convert the code
app.use(express.json());


//using post api 
//post api is used to send data to the server 
//here-> the postman will send the data as a fronted user to the server

app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.status(201).json({
        message:"notes created successfully"
    })
})


//using get api
//get is used when we want to retrive the data from the server 
//here the user want to see all the notes created ,so the data from server is being sent to the forntend 
app.get('/notes',(req,res)=>{
    //mistake their is nothing like fetch  -> notes.fetch(notes.body)
    res.status(201).json({
        message:"notes fetched successfully",
        notes:notes
    })
})


//detete api
//it is used to delete the content

app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;
    delete notes[index];
    res.status(200).json({
        message:"notes deleted successfully"
    })
})

//patch api 
//it is used to update the data which is already present on the server
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const description=req.body.description;
    notes[index].description=description;
    res.status(200).json({
        message:"patch is done successfully"
    })
})

module.exports=app;