export const modifyKart = (item) => {
    console.log(item);
    return {
        type: "ADD_KART",
        payload: item
    };
} 

export const updateKart = () => {
    console.log("action KART")
    return {
        type: 'UPDATE_KART'
    }
}