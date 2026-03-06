const express= require("express");
const app = express();

const path =("path");

const port= 3000;

app.listen(port,(req,res) =>{
     console.log(`app is listening ${port}`);
});


app.get("/:username/:id", (req,res) =>{
     let {username,id}= req.params;
     res.send(`This is for you ${username}`);
     console.log(username,id);
})
app.get("/apple", (req,res)=>{
     res.send("THIS IS FOR APPLE");
});

app.get("/home", (req,res)=>{
     res.send("this is for home");
     console.log("accepted :");
});