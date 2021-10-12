import express from "express";
import passport from "passport";
import multer from "multer";

import { ImageModel} from "../../database/allmodels";

//utility
import { s3Upload } from "../../Utils/AWS/s3";
const Router = express.Router();
//multer
const storage = multer.memoryStorage();
const upload = multer({ storage });
//aws s3 bucket


/* 
Route /image

*/ 
Router.post("/", upload.single("file")  , async (req, res) =>{
    try{

      const file = req.file;
      const bucketOptions = {
        Bucket: "shapeaiproject",
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      };

    const uploadImage = await s3Upload(bucketOptions);
    return res.status(200).json({uploadImage});

    }catch(error){
        return res.status(500).json({ error: error.message});
    }
});


export default Router;