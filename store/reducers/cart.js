import {ADD_TO_CART} from "../actions/cart"
import {CART} from "../../models/cart"
const initialState = {
    items: {},
    totalAmount : 0
}
import {REMOVE_FROM_CART} from "../actions/cart"
import {ADD_ORDER} from "../actions/order"

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
        case REMOVE_FROM_CART:
            const itemToRemove = action.productToRemove
            const ProductId = itemToRemove.id
            if(state.items[ProductId].quantity>1){
                const price = state.items[ProductId].productPrice
                const newQuantity = state.items[ProductId].quantity - 1
                const newSum = price*newQuantity
                const total = state.totalAmount - price
                let newItemsobj = {...state.items}
                newItemsobj[ProductId] = new CART(newQuantity,price,state.items[ProductId].productTitle,newSum)
                return {...state,items:newItemsobj,totalAmount:total}
            }
            else{
                const price = state.items[ProductId].productPrice
                let newItemsobj = {...state.items}
                delete newItemsobj[ProductId]
                const total = state.totalAmount - price
                return {...state,items:newItemsobj,totalAmount:total}
            }
        case ADD_ORDER:
            return initialState
        default:
            return state
    }
    
}