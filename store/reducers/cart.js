import {ADD_TO_CART} from "../actions/cart"
import {CART} from "../../models/cart"
const initialState = {
    items: {},
    totalAmount : 0
}

export const cartReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD_TO_CART : 
            const itemToAdd = action.productToAdd
            const id = itemToAdd.id
            if(id in state.items){
                const newQuantity = state.items[id].quantity+1
                let newItemsobj = {...state.items}
                const newPrice = itemToAdd.price*newQuantity
                newItemsobj[id] = new CART(newQuantity,itemToAdd.price,itemToAdd.title,newPrice)
                const total = state.totalAmount + itemToAdd.price
                return {...state,items:newItemsobj,totalAmount:total}
            
            }
            else{
            let newItemsobj = {...state.items} 
            const total = state.totalAmount + itemToAdd.price
            newItemsobj[id] = new CART(1,itemToAdd.price,itemToAdd.title,itemToAdd.price)
            return {...state,items:newItemsobj,totalAmount:total}
            }

        default:
            return state
    }
    
}