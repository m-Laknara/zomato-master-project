import express from "express";
import passport from "passport";

import { ReviewModel} from "../../database/allmodels";

const Router = express.Router();

/* 
Route /new

*/
Router.post("/new", async (req, res)=>{
    try{
        const { reviewData} = req.body;

        await ReviewModel.create(reviewData);
        return res.json({ review: "Sucessfully Created Review"})

    }catch (error){
        return res.status(500).json({ error: error.message});
    }
});


/* 
Route /delete

*/
Router.delete("/delete/:id", async (req, res)=>{
    try{
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Sucessfully Deleted the Review"})
    }catch (error){
        return res.status(500).json({ error: error.message});
    }
});

export default Router;