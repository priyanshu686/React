import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Error from "./components/Error"
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
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers}/>);