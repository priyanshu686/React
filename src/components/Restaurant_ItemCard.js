import { imglink } from "../utils/constants";

const Restaurant_itemCard = (props) => {
  const { card } = props;
//   console.log(card);
  return (
    <div>
      {card.map((res) => (
        <div key={res?.card?.info?.id} className="res-dish">
          <div>
            <div>{res?.card?.info?.name}</div>
            <div> ₹ {res?.card?.info?.price / 100}</div>
            <div>{res?.card?.info?.description}</div>
          </div>
          <div >
            <img className="food-img" src={imglink + res?.card?.info?.imageId} alt=""/>
            </div>
        </div>
      ))}
    </div>
  );
};
export default Restaurant_itemCard;
