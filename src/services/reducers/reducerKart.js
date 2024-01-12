
const initialState = {
    items:[],
};

export const reducerKart = (state = initialState, action) => {
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
        
        case "DELETE_KART":
            let prevState = []
            prevState = JSON.parse(localStorage.getItem("items"));
            prevState = prevState.filter(item => item.item.id != action.payload);
            localStorage.setItem("items", JSON.stringify(prevState));
            
            return {
                items: prevState
            };

    
        default:
            return state;
        }
    }