export const modifyKart = (item) => {
    return {
        type: "ADD_KART",
        payload: item
    };
} 

export const updateKart = () => {
    return {
        type: 'UPDATE_KART'
    }
}

export const deleteKart = (item) => {
    
    return {
        type: 'DELETE_KART',
        payload: item
    }
}