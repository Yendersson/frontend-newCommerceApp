import { GET_ACTIVE_LANDING } from "../types";

const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerLanding =(state = initialState, action) => {

    switch(action.type){
        case GET_ACTIVE_LANDING:

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