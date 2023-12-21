import axios from "axios";
import { clientAxios } from "../client/axiosClient";
import { GET_ALL_CATEGORIES } from "../types";

export const getAllCategory = () => clientAxios("/category", null, GET_ALL_CATEGORIES);
    