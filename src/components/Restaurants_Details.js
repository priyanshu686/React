import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { url } from "../utils/constants";
import useRestaurantDataFetch from "../utils/useRestaurantdatafetch";

const Restaurants_Details = () => {
  const resId = useParams();
  // console.log();
  const resmenu = useRestaurantDataFetch(resId).resmenu;
  const resdata = useRestaurantDataFetch(resId).resdata;
  if (resdata === null) {
    return <Shimmer />;
  }
  console.log(resmenu);
  const type = resmenu.filter(
    (res) =>
      res?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(type);
  const { name, avgRating, totalRatingsString, costForTwoMessage } = resdata;

  return (
    <div className="res-details">
      <h1>{name}</h1>
      <div className="rate-cost">
        <h4>
          {avgRating}({totalRatingsString})
        </h4>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div>
        {/* <button className="veg/nonveg" onClick={change}>
          {veg}
        </button> */}
      </div>
      <div className="Menu">
        <h2>Menu</h2>
        <ul>
          {type.map((res) => (
            <li className="type">{res.card.card.title}
            {res.card.card.itemCards.map((resa) => (<p>{resa.card.info.name}</p>))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurants_Details;
