import express from "express";
import passport from "passport";

import { UserModel} from "../../database/allmodels";

const Router = express.Router();

/* 
Route /_id

*/ 
Router.get("/:_id", async (req,res) =>{
    try{
        const {_id} = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
    }catch (error){
        return res.status(500).json({ error: error.message});
    }
});

/* 
Route /update

*/ 
Router.get("/update/:userId", async (req,res) =>{
    try{
        const {userId} = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
            $set: userData,
            },
            { new: true}
            );

        return res.json({ user: updateUserData });
    }catch (error){
        return res.status(500).json({ error: error.message});
    }
});

export default Router;