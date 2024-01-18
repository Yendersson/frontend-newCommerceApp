import { useParams } from "react-router-dom";
import { useProductList } from "./useProductList"

export const useProductCategory = () => {

    const {name} = useParams();
    const {state} = useProductList();

    const products = state.data.filter(item => item.category.title.replaceAll(" ", "_") === name);
    
    return {products, state, name};
}

export const useProductSubCategory = () => {

    const {name} = useParams();
    const {state} = useProductList();

    const products = state.data.filter(item => item.subCategory.title.replaceAll(" ", "_") === name);
    
    return {products, state, name};
}

