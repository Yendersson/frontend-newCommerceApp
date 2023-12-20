import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../container/Home";
import ProductList from "../container/ProductList";
import ProductCategory from "../container/ProductCategory";
import ProductSubCategory from "../container/ProductSubcategory";
import Product from "../container/Product";

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
        }
    ])

    return routes
}

export default Routes;