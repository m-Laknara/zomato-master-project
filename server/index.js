require("dotenv").config();

//libararies
import  express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";




import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route_modules";

import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";

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
routeConfig(passport);
//application routes
zomato.use("/auth",Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/orders", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);

zomato.get("/" , (req, res) => res.json({ message: "Setup success"}));

zomato.listen(4000, () =>ConnectDB().then(() =>console.log("Server is running") )
.catch(() => console.log("Server is running, but database connection failed")) );
