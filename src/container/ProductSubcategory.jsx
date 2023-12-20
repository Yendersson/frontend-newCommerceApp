import React, { useEffect } from "react";
import List from "./pure/List";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../services/actions/actionProducts";

const selector = state => state.product;
const ProductSubCategory = () => {
    const state = useSelector(selector);
    const dispatch = useDispatch();


    useEffect(_=> {
        dispatch(getAllProducts());
    },[]);


    const {name} = useParams();

    function renderizado() {
        if (state.loader) return (<p>Cargando...</p>);
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        const products = state.data.filter(item => item.subCategory.title.replaceAll(" ","_") === name);

        return (
            <List data={products} result={name}></List>
        )
    }

    return (
        <div>
            {renderizado()}
        </div>
    )
}

export default ProductSubCategory;