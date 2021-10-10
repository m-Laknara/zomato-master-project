//Libaray
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/* 
Route /singup

*/ 
Router.post("/signup", async (req,res) => {
    try{

        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({token, status: "success"});
    }catch(error){
        return res.status(500).json({ error: error.message});
    }
});

/* 
Route /singin

*/ 
Router.post("/signin", async (req,res) => {
    try{

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token, status: "success"});
    }catch(error){
        return res.status(500).json({ error: error.message});
    }
});

/* 
Route /google

*/ 
Router.get("/google",passport.authenticate("google", {
    scope:[
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
],
})
 );

 /* 
Route /google/callback

*/ 
Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req, res) =>{
    return res.json({token: req.session.passport.user.token});
});

export default Router;