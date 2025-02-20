import { useEffect, useState , useContext} from "react";
import logo from "../../Image/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const online = useOnlineStatus();
  
  const cart = useSelector((store)=>store.carts.items);
  console.log(cart);


  const {LoggedInUser} = useContext(UserContext);
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Online Status: {online ? <p>Online</p> : <p>offline</p>}</li>

          <li id="n1">
            <Link to="/">Home</Link>
          </li>
          <li id="n2">
            <Link to="/about">About Us</Link>
          </li>
          <li id="n3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li id="n4">Cart - {cart.join(" , ")}  ({cart.length} Length)</li>
          <button
            id="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li id="n4">UserName : "{LoggedInUser}"</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
