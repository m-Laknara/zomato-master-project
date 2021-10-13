import React from "react";
import { RiShoppingBag3Line} from "react-icons/ri";
import { IoFastFoodOutline , IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

const MobileTabs = () =>{
    return (
        <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        <div className="flex flex-col items-center text-xl">
        <RiShoppingBag3Line /> 
        <h5 className="text-sm">Delivery</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
        <IoFastFoodOutline /> 
        <h5 className="text-sm">Dining Out</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
        <BiDrink /> 
        <h5 className="text-sm">Night life</h5>
        </div>
        <div className="flex flex-col items-center text-xl">
        <IoNutritionOutline /> 
        <h5 className="text-sm">Nutrition</h5>
        </div>
        </div>
        </>
    );
};

const LargeTabs = () =>{
    return (
        <>
        <div className="hidden lg:flex">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 p-2 rounded-full">
                    <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                    alt="deliver"
                    className="w-full h-full"/>
                </div>
                <h3 className="text-base text-gray-700 font-semibold">Delivery</h3>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 p-2 rounded-full">
                    <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                    alt="deliver"
                    className="w-full h-full"/>
                </div>
                <h3 className="text-base text-gray-700 font-semibold">Delivery</h3>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 p-2 rounded-full">
                    <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                    alt="deliver"
                    className="w-full h-full"/>
                </div>
                <h3 className="text-base text-gray-700 font-semibold">Delivery</h3>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 p-2 rounded-full">
                    <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                    alt="deliver"
                    className="w-full h-full"/>
                </div>
                <h3 className="text-base text-gray-700 font-semibold">Delivery</h3>
            </div>
        </div>
        </>
    );
};

const FoodTab = () => {
    return (
    <>
        <div>
            <MobileTabs />
            <LargeTabs />
        </div>
    </>
    );
};

export default FoodTab;