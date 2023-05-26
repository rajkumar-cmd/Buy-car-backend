const express=require("express");
const {connection} = require("./db");
const {userRouter} = require("./routes/users.route")
const {OEM_SpecsRouter} =require("./routes/OEM_Specs.route")
const {marketplaceRouter}=require("./routes/marketplace.route")
require("dotenv").config();
const app=express();
const cors=require("cors");
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.use("/user",userRouter);
app.use("/OEM_Specs",OEM_SpecsRouter);
app.use("/marketplace",marketplaceRouter);
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected");
    }catch(err){
        console.log("ERROR:",err);
    }
    console.log("Port running at 8080");
})