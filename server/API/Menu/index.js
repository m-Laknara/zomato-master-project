import express from "express";
import passport from "passport";

import { MenuModel} from "../../database/allmodels";

const Router = express.Router();

/* 
Route /list

*/ 

Router.get("/list/:_id", (req, res) =>{
    try{
        const { _id } =req.params;
        const menus = await MenuModel.findOne(_id);
        return res.json({ menus});
    }catch(error){
        return res.status(500).json({ error: error.message});

    }
});

/* 
Route /image

*/ 
Router.get("/image/:_id", async (req , res) =>{

    try{
        const { _id } =req.params;
        const menus = await ImageModel.findOne(_id);
        return res.json({ menus});
    }catch(error){
        return res.status(500).json({ error: error.message});

    }
});