import axios from "axios";
import { clientAxios, getResponse } from "../client/axiosClient";
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "../types";

export const getAllProducts = () => clientAxios("/product", null, GET_ALL_PRODUCTS);

export const getOneProducts = (id) => clientAxios(`/product/${id}`, null, GET_ONE_PRODUCT);
