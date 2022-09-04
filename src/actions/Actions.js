import { ActionTypes } from "./action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}

export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}

export const incrementQuantity = () => {
    return {
        type: ActionTypes.INCREMENT_QUNTITY,
    }
}

export const decrementQuantity = () => {
    return {
        type: ActionTypes.DECREMENT_QUNTITY,
    }
}