import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { url } from "../utils/constants";
import useRestaurantDataFetch from "../utils/useRestaurantdatafetch";

const Restaurants_Details = () => {
  const resId = useParams();
  // console.log();
  const resmenu = useRestaurantDataFetch(resId).resmenu;
  const resdata = useRestaurantDataFetch(resId).resdata

  if (resdata === null) {
    return <Shimmer />;
  }

  const { itemCards } = resmenu;
  const change = () => {
    if (veg === "Both") {
      setveg("VEG");
      // Filter items where vegClassifier is "VEG"
      if (itemCards) {
        setvegmenu(
          itemCards.filter(
            (res) => res.card.info.itemAttribute.vegClassifier === "VEG"
          )
        );
      }
    } else {
      setveg("Both");
      setvegmenu(itemCards);
    }
  };

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
      <h3> Menu </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}  - {item.card.info.defaultPric}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants_Details;
