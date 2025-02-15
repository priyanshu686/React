import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
const routers = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<ContactUs/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers}/>);