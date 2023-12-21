import axios from "axios";
import { clientAxios } from "../client/axiosClient";
import { GET_ALL_SUBCATEGORIES } from "../types";

export const getAllSubCategory = () => clientAxios("/subcategory", null, GET_ALL_SUBCATEGORIES);