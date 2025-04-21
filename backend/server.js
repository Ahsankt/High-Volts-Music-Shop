import express from 'express';
import bodyParser from 'body-parser';
import fs from 'node:fs'
import path from 'node:path';

const express_app=express();

// Middleware to parse JSON body
express_app.use(express.json());





express_app.post("/create",(req,res)=>{
    let file=fs.readFileSync("../backend/userInput.js","utf-8");
    const {name,price,qty}=req.body;
    console.log(file)
    console.log( JSON.stringify({name,price,qty}))
    let jsonData=[];
    jsonData=JSON.parse(file)
  jsonData.push({name,price,qty});
  fs.writeFile("../backend/userInput.js", JSON.stringify(jsonData, null, 2),(err)=>{
    console.log(err);
  })
    res.status(200).json({
        message:"updated"
    })
})


express_app.use(express.static("../static"))






express_app.listen(3000,()=>{
    console.log("connected to port: 3000")
})