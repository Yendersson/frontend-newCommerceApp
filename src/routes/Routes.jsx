import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../container/Home";
import ProductList from "../container/ProductList";
import ProductCategory from "../container/ProductCategory";

const Routes = () => {

    let routes = useRoutes([
        {
            path: "/",
            element: <Home></Home>
        },

        {
            path: "/products",
            element: <ProductList></ProductList>
        },

        {
            path: "/products/:name",
            element: <ProductCategory></ProductCategory>
        }
    ])

    return routes
}

export default Routes;