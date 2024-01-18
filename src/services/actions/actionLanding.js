import { LANDING_REQUEST, LANDING_REQUEST_FAILED, LANDING_REQUEST_SUCCESS } from "../types.js";


export const landing_action = {
    request: () => ({type: LANDING_REQUEST}),

    requestSuccess: (data) => ({
        type: LANDING_REQUEST_SUCCESS,
        payload: data
    }),

    requestFailed: (err) => ({
        type: LANDING_REQUEST_FAILED,
        payload: err
    }),
};