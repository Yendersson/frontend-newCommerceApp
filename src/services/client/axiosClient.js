import axios from "axios";

export function clientAxios(url, headers={"Content-Type":"application/json"}, type) {
    let initialObj= {
        data: [],
        error:{
            exist:false,
            message:null
        },
        loader:true
    };

    const client = axios.create({
        baseURL: "http://localhost:18080/api/",
        url,
        headers
    });

    return async (dispatch) => {
        try {
            const response = await client.get(url);
            initialObj.data = Array.isArray(response.data)? response.data: [response.data];
            initialObj.loader = false;
            
        } catch (error) {
            initialObj.error = {
                exist:true,
                message: error.message
            };
        }

        dispatch({
            type:type,
            payload:initialObj
        })

    }
}

