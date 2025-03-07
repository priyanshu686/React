import Header from "./Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext , Provider, useState} from "react";
import { Provider, Provider } from "react-redux";
import AppStore from "../utils/AppStore";


const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  const {LoggedInUser} = useContext(UserContext);
  const[username,setusername] = useState(LoggedInUser);
  if (onlineStatus === false) {
    return <h1> Check the internet</h1>;
  }

// console.log(onlineStatus);
  return (
    <Provider store = {AppStore}> 
    <UserContext.Provider value={{LoggedInUser : username , setusername}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
