import { GET_PURCHASE } from "../types.js";


const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducePurchase = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_PURCHASE:
            return {
                ...state,
                data: action.payload.data,
                loader: action.payload.loader,
                error:action.payload.error
            };

        default:
            return state;
    }
}