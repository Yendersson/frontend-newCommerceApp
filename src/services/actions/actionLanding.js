import { clientAxios } from "../client/axiosClient.js";
import { GET_ACTIVE_LANDING } from "../types.js";


export const getActiveLanding = () => clientAxios(`/landing/active`, null, GET_ACTIVE_LANDING);