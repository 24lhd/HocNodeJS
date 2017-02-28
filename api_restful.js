var express=require("express");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var app=express();
var port=80;

app.get("/",function(req,res){
    res.send("hi!")
})
app.get("/api/:user",(req,res)=>{
    // lay du lieu tu database
    var data={
        duong:req.params.user,
        age:'21'
    }
    res.json(data);
})
app.post("/api/user",jsonParser,(req,res)=>{
    //create new va save on database
})
app.put("/api/user",jsonParser,(req,res)=>{
    //update new va save on database
})
app.delete("/api/user/:id",function(req,res){
    //delete user from database
})

/**
 * cách tổ chức một ứng dụng
 */









app.listen(port,()=>{
    console.log("running");
})