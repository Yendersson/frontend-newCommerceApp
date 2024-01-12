import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../container/Home";
import ProductList from "../container/ProductList";
import ProductCategory from "../container/ProductCategory";
import ProductSubCategory from "../container/ProductSubcategory";
import Product from "../container/Product";
import Error404 from "../container/404";
import Faqs from "../container/Faqs";
import Profile from "../container/Profile";
import Kart from "../container/Kart";
import Bill from "../container/Bill";

const Routes = () => {

    let routes = useRoutes([

        {
            path: "*",
            element: <Error404></Error404>
        },
        {
            path: "/",
            element: <Home></Home>
        },

        {
            path: "/products",
            element: <ProductList></ProductList>
        },
        {
            path: "/products/search/:search",
            element: <ProductList></ProductList>
        },
        {
            path: "/products/:id",
            element: <Product></Product>
        },

        {
            path: "/products/category/:name",
            element: <ProductCategory></ProductCategory>
        },
        {
            path: "/products/subcategory/:name",
            element: <ProductSubCategory></ProductSubCategory>
        },
        {
            path: "/faqs",
            element: <Faqs></Faqs>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        },
        {
            path: "/kart",
            element: <Kart></Kart>
        },
        {
            path: "/bill/:id",
            element: <Bill></Bill>
        }


    ])

    return routes
}

export default Routes;