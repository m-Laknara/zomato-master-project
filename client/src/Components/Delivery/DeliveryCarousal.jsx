import React from "react";
import DeliveryCatagory from "./DeliveryCatagory";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "../Navbar/CarousalArrow";

const DeliveryCarousal = () => {

    const categories =[
        {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        title:"biriyani",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
        title:"Kesari Bath",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
        title:"Chiken",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        title:"Chaat",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
        title:"Chiken",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
        title:"Kesari Bath",
    },
    {
        image:"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        title:"Chaat",
    },
];
    const settings ={
        arrows:true,
        infinite:true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>

    };

    return (
    <>
        <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
        <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">

            {categories.map((food) =>(
                <DeliveryCatagory {...food}/>
            ))}
        </div>
        <div className="hidden lg:block">
            <Slider {...settings}>
            {categories.map((food) =>(
                <DeliveryCatagory {...food}/>
            ))}
            </Slider>

        </div>
    </>
    );
};

export default DeliveryCarousal;