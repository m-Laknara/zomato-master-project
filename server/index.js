require("dotenv").config();

//libararies
import  express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import Auth from "./API/Auth";
import googleAuthConfig from "./config/google.config";
//database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet());
zomato.use(cors());
//zomato.use(passport.initialize());
//zomato.use(passport.session());


//passport configuration
googleAuthConfig(passport);
//application routes
zomato.use("/auth",Auth);

zomato.get("/" , (req, res) => res.json({ message: "Setup success"}));

zomato.listen(4000, () =>ConnectDB().then(() =>console.log("Server is running") )
.catch(() => console.log("Server is running, but database connection failed")) );
