const initialState = {
    data:[],
    error:{
        exist:false,
        message:null
    },
    loader:true
};

export const reducerSubCategory = (state = initialState, action) =>{

    switch (action.type) {
        case "api/getSubCategory":
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