import React from "react";
import List from "./pure/List";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
    const {name} = useParams();

    return (
        <div>
            <h1>{name}</h1>
            <List></List>
        </div>
    )
}

export default ProductCategory;