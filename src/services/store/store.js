import { applyMiddleware, combineReducers, createStore } from "redux";
import {reducerProduct} from "../reducers/reducerProduct.js"
import { thunk } from "redux-thunk";
import { reducerCategory } from "../reducers/reducerCategory.js";
import { reducerSubCategory } from "../reducers/reducerSubCategory.js";
import { reducerLanding } from "../reducers/reducerLanding.js";
import { reducerKart } from "../reducers/reducerKart.js";

const rootReducer = combineReducers({
    product:reducerProduct,
    category: reducerCategory,
    subCategory: reducerSubCategory,
    landing: reducerLanding,
    kart: reducerKart
});

export const store = createStore(rootReducer,applyMiddleware(thunk));