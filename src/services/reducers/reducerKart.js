
const initialState = {
    items:[],
};

export const reducerKart = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_KART":
            let temp = state.items;
            temp.push(action.payload);
            localStorage.setItem("items",JSON.stringify(temp));

            return {
                items: temp
            }

        case "UPDATE_KART":
            let verify = [];
            if (localStorage.getItem("items")) {
                
                verify = JSON.parse(localStorage.getItem("items"));
            }
            return {
                items: verify
            };

    
        default:
            return state;
        }
    }