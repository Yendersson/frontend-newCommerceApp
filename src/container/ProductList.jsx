import React, { useEffect, useState } from "react";
import List from "./pure/List";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../services/actions/actionProducts";
import { useParams } from "react-router-dom";
import Spinner from "./pure/Spinner";


const selector = state => state.product;
const ProductList = () => {
    const [isVisible, setIsVisible] = useState(true);
    const state = useSelector(selector);
    const dispatch = useDispatch();

    const {search} = useParams();
    function getWithParam(){
        if (search){
            const searchLike = state.data.filter(item => item.title.startsWith(search));

            if (searchLike.length > 0) return (<List data={searchLike} result={search}></List>)
            
        } 
        return (<List data={state.data} result="Todos los productos"></List>)

    }



    useEffect(_=> {
        dispatch(getAllProducts());
    },[]);

    function renderizado() {
        if (state.loader) return (<Spinner></Spinner>);
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);
        return (
        <div className={`fade ${isVisible ? 'in' : 'out'}`}>
            {getWithParam()}
        </div>    
        )
    }

    return (
        renderizado()
    ) 
}

export default ProductList;