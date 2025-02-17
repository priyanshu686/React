import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Restaurants_Details from "./components/Restaurants_Details";

const routers = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/restaurants/:resid",
                element:<Restaurants_Details/>
            }
        ],
        errorElement:<Error/>,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers}/>);