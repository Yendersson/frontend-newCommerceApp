import { PURCHASE_REQUEST, PURCHASE_REQUEST_FAILED, PURCHASE_REQUEST_SUCCESS } from "../types";


export const landing_action = {
    request: () => ({type: PURCHASE_REQUEST}),

    requestSuccess: (data) => ({
        type: PURCHASE_REQUEST_SUCCESS,
        payload: data
    }),

    requestFailed: (err) => ({
        type: PURCHASE_REQUEST_FAILED,
        payload: err
    }),
};