import React from "react";
import FoodTab from "../Components/FoodTab";
import Navbar from "../Components/Navbar";

const HomeLayout = (props) => {
    return (
    <>
    <Navbar />
    <FoodTab />
    <div className="container mx-auto px-4 lg:px-20">
        {props.children}
        </div>
    </> 
    );
};

export default HomeLayout;
