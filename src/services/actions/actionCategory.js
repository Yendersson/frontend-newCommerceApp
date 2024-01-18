import { CATEGORY_REQUEST, CATEGORY_REQUEST_FAILED, CATEGORY_REQUEST_SUCCESS } from "../types";
    
export const category_action = {
    request: () => ({type: CATEGORY_REQUEST}),

    requestSuccess: (data) => ({
        type: CATEGORY_REQUEST_SUCCESS,
        payload: data
    }),

    requestFailed: (err) => ({
        type: CATEGORY_REQUEST_FAILED,
        payload: err
    }),
};