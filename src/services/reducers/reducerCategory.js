const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerCategory = (state = initialState, action) =>{

    switch (action.type) {
        case "api/getAllCategory":
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