const express = require("express");
const app= express();
let PORT=5000;
app.get("/",(req,res)=>{
    res.send("I am Server");
});
const start=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`I am live in port no.${PORT}`);
        })
    }catch(error){}
};
start();