import { useDispatch } from "react-redux";
import { imglink } from "../utils/constants";
import { additems, removeitems } from "../utils/cartSlice";

const Restaurant_itemCard = (props) => {
  const { card } = props;
  //   console.log(card);
  const dispatcher = useDispatch();
  const handleClick = (props) => {
    const { id, name, price } = props;
    dispatcher(
      additems({
        id: id,
        name: name,
        Price: price,
      })
    );
  };

  return (
    <div>
      {card.map((res) => (
        <div key={res?.card?.info?.id} className="res-dish">
          <div>
            <div>{res?.card?.info?.name}</div>
            <div> ₹ {res?.card?.info?.price / 100}</div>
            <div>{res?.card?.info?.description}</div>
          </div>
          <div>
            <img
              className="food-img"
              src={imglink + res?.card?.info?.imageId}
              alt=""
            />
          </div>
          <button className="remove-item" onClick={() => {
            dispatcher(
              removeitems()
            )
          }}>
            -
          </button>
          <button
            className="add-item"
            onClick={() => handleClick(res?.card?.info)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};
export default Restaurant_itemCard;
