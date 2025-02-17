import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { url } from "../utils/constants";

const Restaurants_Details = () => {
  const [resdata, setresdata] = useState(null);
  const [resmenu, setresmenu] = useState(null);
  const [vegmenu, setvegmenu] = useState(null);
  const [veg, setveg] = useState("Both");
  const resId = useParams();
  console.log();
  
  useEffect(async () => {
    const url1 =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=" + resId.resid;

    try {
      const response = await fetch(url + resId.resid);
      const json = await response.json();
      setresdata(json?.data?.cards[2]?.card?.card?.info);
      setresmenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1].card
          .card
      );
      setvegmenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1].card
          .card
      );
      console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1].card
        .card);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  }, [resId]);

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
