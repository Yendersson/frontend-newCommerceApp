
import {configureStore, combineReducers} from "@reduxjs/toolkit"
import {reducerProduct} from "../reducers/reducerProduct.js"
import { reducerCategory } from "../reducers/reducerCategory.js";
import { reducerSubCategory } from "../reducers/reducerSubCategory.js";
import { reducerLanding } from "../reducers/reducerLanding.js";
import { reducerKart } from "../reducers/reducerKart.js";
import { reducePurchase } from "../reducers/reducerPurchase.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    product:reducerProduct,
    category: reducerCategory,
    subCategory: reducerSubCategory,
    landing: reducerLanding,
    kart: reducerKart,
    purchase: reducePurchase,
});

const store = configureStore({
    reducer:rootReducer,
    middleware:[thunk]
});

export default store;
