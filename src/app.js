const express = require("express");

const app = express();
const notes=[];

app.use(express.json());

app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message :"notes created successfully",

    })
})

//now we want to send all the notes created by the user to the frontend to do so
//we'll use get coz the data is already on the server and we want to fetch to the frontend

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:("notes fatch successfull"),
        notes:notes
    })
})

module.exports = app;