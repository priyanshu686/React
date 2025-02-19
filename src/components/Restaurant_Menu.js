import { useState } from "react";
import Restaurant_itemCard from "./Restaurant_ItemCard";

const Restaurant_Menu = ({ data, showitem, setshowindex }) => {
  //   console.log(type[0]?.card?.card?.title);
  const handleClick = () => {
    setshowindex();
  };

  return (
    <div>
      <div className="res-title">
        <div className="dish-title" onClick={handleClick}>
          {data.title}
        </div>
        <div>{showitem && <Restaurant_itemCard card={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default Restaurant_Menu;
