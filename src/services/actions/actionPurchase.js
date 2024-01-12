import { clientAxios } from "../client/axiosClient.js";
import { GET_PURCHASE } from "../types.js";


export const getPurchase = (id) => clientAxios(`/purchase/${id}`, null, GET_PURCHASE);