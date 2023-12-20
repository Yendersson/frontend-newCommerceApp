const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerProduct = (state = initialState, action) =>{

    switch (action.type) {
        case "api/getAllProducts":
            return {
                ...state,
                data: action.payload.data,
                loader: action.payload.loader,
                error:action.payload.error
            };

        case "api/getOneProducts":
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