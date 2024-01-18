import { SUBCATEGORY_REQUEST, SUBCATEGORY_REQUEST_FAILED, SUBCATEGORY_REQUEST_SUCCESS } from "../types";


export const subCategory_action = {
    request: () => ({type: SUBCATEGORY_REQUEST}),

    requestSuccess: (data) => ({
        type: SUBCATEGORY_REQUEST_SUCCESS,
        payload: data
    }),

    requestFailed: (err) => ({
        type: SUBCATEGORY_REQUEST_FAILED,
        payload: err
    }),
};