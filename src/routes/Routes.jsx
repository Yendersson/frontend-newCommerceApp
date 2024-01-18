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
import Main from "../container/Main";
import Bill from "../container/Bill";
import Purchase from "../container/Purchase";
import ProfileData from "../container/pure/ProfileData";

const Routes = () => {

    let routes = useRoutes([
        {
            path: "/",
            element: <Main/>,
            errorElement: <Error404/>,
            children: [
                {index:true, element: <Home/>},
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
                    path: "/profile",
                    element: <Profile/>,
                    children: [
                        {index: true, element: <ProfileData/>},
                        {
                            path: "/profile/purchase",
                            element: <Purchase/>
                        }
                    ]
                }
            ]
        }, 
        {
            path:"/bill",
            element: <Bill/>
        }
    ])

    return routes
}

export default Routes;