import { ORDER_BY, PRODUCTS_REQUEST, PRODUCTS_REQUEST_FAILED, PRODUCTS_REQUEST_SUCCESS } from "../types";

export const product_action = {
    request: () => ({type: PRODUCTS_REQUEST}),

    requestSuccess: (data) => ({
        type: PRODUCTS_REQUEST_SUCCESS,
        payload: data
    }),

    requestFailed: (err) => ({
        type: PRODUCTS_REQUEST_FAILED,
        payload: err
    }),
};

export const filterByOrden = (orderBy) => {
    return {
        type: ORDER_BY,
        payload: orderBy
    }
}