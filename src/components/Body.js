// import { data } from "../utils/LiveData.js";
import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import { fetchlink } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import {Link} from 'react-router-dom';

const Body = () => {
  const [list, setlist] = useState([]);
  const[filterlist,setfilterlist] = useState([]);
  const[searchText,setsearchText] = useState("");
  // console.log("After the UseState");
  useEffect(() => {
    fetchData();
    // console.log("useEffect is Rendered");
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(fetchlink);
      const data = await response.json();
      setlist(data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterlist(data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if(list.length === 0){
    return <Shimmer/>;
  }

  return ( 
    <div className="distanceBody">
      {/* {console.log("Body Render")}; */}
      <div className="search-top_res">
        <input type="text" 
        className="search-box"
        value={searchText} 
        onChange={(e)=>{
          setsearchText(e.target.value);
        }}
        />
        <button onClick={()=>{
          const filterdata = list.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setfilterlist(filterdata);
        }}>
          Search
        </button>
      <button className="top-res"
        onClick={() => {
          const filterdata = list.filter((res) => res.info.avgRating > 4.5);
          setfilterlist(filterdata);
        }}>
        Top Rated Restaurants
      </button>
      </div>
      <div className="res-container">
        {filterlist.map((restaurent) => (
         <Link to ={"/restaurants/"+restaurent.info.id}> <ResCard key={restaurent.info.id} resobj={restaurent} />  </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
