const express=require("express");
const {UserModel}=require("../model/users.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const userRouter=express.Router();

userRouter.post("/register",async(req,res)=>{
    const{email,password}=req.body;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                console.log(err);
            }else{
                const user=new UserModel({email,password:hash});
                await user.save();
                res.send({"msg":"Registered"})
            }
        })
    }catch(err){
        res.send({"msg":err})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UserModel.find({email});
        if(user.length>0){
            const hash=user[0].password;
            bcrypt.compare(password,hash,(err,result)=>{
                if(result){
                    const token=jwt.sign({id:user[0]._id},"masai");
                    res.send({"msg":"Logged in","token":token,"email":user[0].email});
                }else{
                    res.send({"msg":"Wrong Credientials"})
                }
            })
        }else{
            res.send({
                "msg":"Wrong Credientials"
            })
        }
    }catch(err){
        res.send({"msg":err})
    }
})

module.exports={
    userRouter
}