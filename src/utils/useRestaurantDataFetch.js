import { useState, useEffect } from "react";
import { url } from "./constants";

const useRestaurantDataFetch = (resId) => {
  const [resdata, setresdata] = useState(null);
  const [resmenu, setresmenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(url + resId.resid);
      const json = await response.json();
      setresdata(json?.data?.cards[2]?.card?.card?.info);
      setresmenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1].card
          .card
      );
    // console.log(
    //     json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[1].card
    //       .card
    //   );
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return {resdata , resmenu};
};

export default useRestaurantDataFetch;