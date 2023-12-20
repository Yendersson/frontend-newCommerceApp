import axios from "axios";

export const getAllCategory = () =>{
    let initialState = {
        data:[],
        error:{
            exist:false,
            message:null
        },
        loader:true
    };

    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:18080/api/category");
            
            initialState.data = response.data;
            initialState.loader = false;

        } catch (error) {
            initialState.error = {
                exist:true,
                message: error.message
            };
        }

        dispatch({
            type: "api/getAllCategory",
            payload: initialState
        });
    }

}