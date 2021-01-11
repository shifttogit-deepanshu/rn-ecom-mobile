import {ADD_TO_CART} from "../actions/cart"
import CART from "../../models/cart"

const initialState = {
    items: {},
    totalAmount : 0
}

export const cartReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD_TO_CART : 
            const itemToAdd = action.productToAdd
            const id = itemToAdd.id
            let newItemsobj = {...state.items}
            newItemsobj[id] = itemToAdd
            
            return {...state,items:newItemsobj}

        default:
            return state
    }
    
}