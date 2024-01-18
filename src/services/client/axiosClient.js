import axios from "axios";

export function clientAxiosProduct(url, headers={"Content-Type":"application/json"}, action){
    const client = axios.create({
        baseURL: "http://localhost:18080/api/",
        url,
        headers
    });

    return async (dispatch) => {
        dispatch(action.request);
        try {
            const response = await client.get(url);
            const data = Array.isArray(response.data)? response.data: [response.data];

            dispatch(action.requestSuccess(data));
            
        } catch (error) {
            dispatch(action.requestFailed(error));
        }
    }
}