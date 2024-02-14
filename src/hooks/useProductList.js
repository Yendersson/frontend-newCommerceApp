import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clientAxiosProduct } from "../services/client/axiosClient";
import { product_action } from "../services/actions/actionProducts";
import { useParams } from "react-router-dom";

export const useProductList = () => {
    const { search } = useParams();
    const [isVisible, setIsVisible] = useState(true);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(_ => {
        
        dispatch(clientAxiosProduct("/product", null, product_action));
        console.log("render")
        
    }, [search, dispatch]);

    
    if (search) product.data = product.data.filter(item => item.title.toLowerCase().startsWith(search.toLowerCase()));
    let state = {...product};
    
    return {
        state,
        isVisible,
        search
    }
}