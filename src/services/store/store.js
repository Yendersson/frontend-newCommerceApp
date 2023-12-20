import { applyMiddleware, combineReducers, createStore } from "redux";
import {reducerProduct} from "../reducers/reducerProduct.js"
import { thunk } from "redux-thunk";
import { reducerCategory } from "../reducers/reducerCategory.js";
import { reducerSubCategory } from "../reducers/reducerSubCategory.js";

const rootReducer = combineReducers({
    product:reducerProduct,
    category: reducerCategory,
    subCategory: reducerSubCategory,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));