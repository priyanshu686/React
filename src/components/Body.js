// import { data } from "../utils/LiveData.js";
import ResCard,{addDiscount} from "./ResCard.js";
import { useState, useEffect,useContext } from "react";
import { fetchlink } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext.js'

const Body = () => {
  const [list, setlist] = useState([]);
  const [filterlist, setfilterlist] = useState([]);
  const [searchText, setsearchText] = useState("");
  // console.log("After the UseState");
  useEffect(() => {
    fetchData();
    // console.log("useEffect is Rendered");
  }, []);
  const {setusername , LoggedInUser} = useContext(UserContext);

  const fetchData = async () => {
    try {
      const response = await fetch(fetchlink);
      const data = await response.json();
      setlist(
        data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterlist(
        data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (list.length === 0) {
    return <Shimmer />;
  }
  const Discount = addDiscount(ResCard);
  const res = (restaurant) => {
    const discountInfo = restaurant.info?.aggregatedDiscountInfoV3;
    if (discountInfo && Object.keys(discountInfo).length === 0) {
      return <ResCard resobj={restaurant} />;
    } else {
      return <Discount resobj={restaurant} />;
    }
  };
  return (
    <div className="distanceBody">
      {/* {console.log("Body Render")}; */}
      <div className="search-top_res">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterdata = list.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterlist(filterdata);
          }}
        >
          Search
        </button>
        <button
          className="top-res"
          onClick={() => {
            const filterdata = list.filter((res) => res.info.avgRating > 4.5);
            setfilterlist(filterdata);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <input type="text" value={LoggedInUser}  onChange={(e)=>setusername(e.target.value)}/>
      </div>
      <div className="res-container">
        {filterlist.map((restaurent) => (
          <Link
            to={`/restaurants/${restaurent.info.id}`}
            key={restaurent.info.id}
          >
            {res(restaurent)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
