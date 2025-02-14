// import { data } from "../utils/LiveData.js";
import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";

const Body = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      setlist(data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="distanceBody">
      <button
        onClick={() => {
          const filterdata = list.filter((res) => res.info.avgRating > 4.5);
          setlist(filterdata);
        }}
      >
        {" "}
        Top Rated Restaurants
      </button>

      {/* <button onClick={()=>{
            const filterdata = list.filter((res) => res.info.ratingNew.ratings.DELIVERY.ratingV2 === '-');
            setlist(filterdata)}}> New Restaurant</button> */}
      <div className="res-container">
        {list.map((restaurent) => (
          <ResCard key={restaurent.info.id} resobj={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
