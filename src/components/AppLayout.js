import Header from "./Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> Check the internet</h1>;
  }

// console.log(onlineStatus);
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
