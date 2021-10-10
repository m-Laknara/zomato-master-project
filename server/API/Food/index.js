import express from "express";
import passport from "passport";

import { FoodModel} from "../../database/allmodels";

const Router = express.Router();

Router.get("/r/:_id", async (req, res) => {
    try{
        const { id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id});

        return res.json({ foods });
    }catch (error){
        return res.status(500).json({ error: error.message});
    }
});


Router.get("/r/:category", async (req, res) => {
    try{
        const { category } = req.params;
        const foods = await FoodModel.find({ category: {$regex: category, $options: "i"},
    });

        return res.json({ foods });
    }catch (error){
        return res.status(500).json({ error: error.message});
    }
});