import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { url } from "../utils/constants";
import useRestaurantDataFetch from "../utils/useRestaurantdatafetch";
import Restaurant_Menu from "./Restaurant_Menu";

const Restaurants_Details = () => {
  const resId  = useParams(); // Assuming resId is coming from the URL params
  const { resmenu, resdata } = useRestaurantDataFetch(resId);
  const [showindex, setshowindex] = useState(null);
  if (resdata === null) {
    return <Shimmer />;
  }

  const type = resmenu.filter(
    (res) =>
      res?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const { name, avgRating, totalRatingsString, costForTwoMessage } = resdata;
  

  return (
    <div className="res-details">
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="rate-cost">
        <h4>
          {avgRating}({totalRatingsString})
        </h4>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div className="Menu">
        <h2>Menu</h2>
        {type.map((res, index) => (
          <Restaurant_Menu
            key={res?.card?.card?.title}
            data={res?.card?.card}
            showitem={index === showindex}
            setshowindex={() => setshowindex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants_Details;


// <ul>
//   {type.map((res) => (
//     <li className="type">
//       {res.card.card.title}
//       {res.card.card.itemCards.map((resa) => (
//         <p>{resa.card.info.name}</p>
//       ))}
//     </li>
//   ))}
// </ul>;
