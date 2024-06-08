import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
                
            },
            {
                path: "/about",
                element: <About/>,
                
            },
            {
                path: "/contact",
                element: <Contact/>,
                
            },        
        ],
        errorElement :<Error/>,
    },
    {
        path: "/about",
        element: <About/>,
        errorElement :<Error/>
    },
    {
        path: "/contact",
        element: <Contact/>,
        errorElement :<Error/>
    },
]);

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)