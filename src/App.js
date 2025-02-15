import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
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
            }
        ],
        errorElement:<Error/>,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers}/>);