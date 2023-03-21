// jshint esversion:6

const { response } = require("express");
const express=require("express");
const app=express();
app.get("/",function(request,response){
    // console.log(request);
    response.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at: saurabh@gmail.com");
});

app.get("/about", function(req,res){
    res.send("My name is Saurabh and I love to code.");
});

app.get("/hobbies", function(req,res){
    res.send("Cricket, Volleyball");
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});