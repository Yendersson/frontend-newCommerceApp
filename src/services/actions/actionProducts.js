import axios from "axios";

export const getAllProducts = () => {

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
            const response = await axios.get("http://localhost:18080/api/product");
            
            initialState.data = response.data;
            initialState.loader = false;

        } catch (error) {
            initialState.error = {
                exist:true,
                message: error.message
            };
        }

        dispatch({
            type: "api/getAllProducts",
            payload: initialState
        });
    }


}


export const getOneProducts = (id) => {

    let initialState = {
        data:{},
        error:{
            exist:false,
            message:null
        },
        loader:true
    };

    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:18080/api/product/"+id);
            
            initialState.data = [response.data];
            initialState.loader = false;

        } catch (error) {
            initialState.error = {
                exist:true,
                message: error.message
            };
        }

        dispatch({
            type: "api/getOneProducts",
            payload: initialState
        });
    }


}