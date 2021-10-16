import React from "react";
import { useParams } from "react-router-dom";

// components
import Delivery from "./Delivery";
import Dining from "./Dining";
import NightLife from "./NightLife";
import Nutrition from "./Nutition";

const Master = () => {
  const { type } = useParams();
  return (
    <div className="my-5">
      {type === "Delivery" && <Delivery />}
      {type === "Dining%20Out" && <Dining />}
      {type === "Nightlife" && <NightLife />}
      {type === "Nutrition" && <Nutrition />}
    </div>
  );
};

export default Master;