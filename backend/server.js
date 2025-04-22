import express from 'express';
import bodyParser from 'body-parser';
import fs, { writeFileSync } from 'node:fs'
import path from 'node:path';

const express_app=express();

// Middleware to parse JSON body
express_app.use(express.json());




//for posting new content into filesystem
express_app.post("/create",(req,res)=>{
    let file=fs.readFileSync("../backend/userInput.js","utf-8");
    const {name,price,qty}=req.body;
   // console.log(file)
   // console.log( JSON.stringify({name,price,qty}))
    let jsonData=[];
    jsonData=JSON.parse(file)
    
    let existingItem=jsonData.find(element=>element.name==name);
    if(existingItem){
        existingItem.qty+=qty;
    }
    else{
        jsonData.push({name,price,qty});
    }
  fs.writeFile("../backend/userInput.js", JSON.stringify(jsonData, null, 2),(err)=>{
    console.log(err);
  })
    res.status(200).json({
        message:"updated"
    })
})


//for updateting qty in file system..
express_app.patch("/cartUpdate",(req,res)=>{
    let carts=JSON.parse(fs.readFileSync("../backend/userInput.js","utf-8"));
    const{qty,name}=req.body
    let cart=carts.find(item=>item.name==name);
    if(cart){
        cart.qty=qty;
        fs.writeFileSync("../backend/userInput.js", JSON.stringify(carts, null, 2), "utf-8");
        return res.status(200).json({message:"succesfully updated"})
    }
    else{
        console.log("not found ")
       return res.status(400).json({message:"not found"})
    }

})






//for retrieving data from file system .....
express_app.get("/cartRetrieval",(req,res)=>{
    let carts=fs.readFileSync("../backend/userInput.js","utf-8");
    console.log(typeof(carts))
    console.log(typeof(JSON.parse(carts)))
    //console.log(carts)
    carts=JSON.parse(carts)
    if(carts){
        console.log(carts)
       res.status(200).json({carts})
    }
    else{
        res.status(400).json({message:"Error Reading Filesystem !!"})
    }
})
express_app.use(express.static("../static"))



//deleting 
express_app.delete("/cartDelete",(req,res)=>{
const carts=JSON.parse(fs.readFileSync("../backend/userInput.js","utf-8"));
const {name}=req.body;
console.log(name)
let filtered=carts.filter(item=>item.name !==name)
if(filtered.length===carts.length){
    return res.status(400).json({message:"not found"})
}
fs.writeFileSync("../backend/userInput.js",JSON.stringify(filtered, null, 2), "utf-8");
return res.status(200).json({message:"deleted!!"})
})


express_app.listen(3000,()=>{
    console.log("connected to port: 3000")
})