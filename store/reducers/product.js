import PRODUCTS from "../../data/dummy-data.js"
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actions/product"
import Product from "../../models/product"
import {SET_PRODUCTS} from "../actions/product"

const initialState = {
    availableProducts:[],
    userProducts:[]
}

export const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            const fetchedUserProducts = action.productsFetched.filter(prod=>prod.ownerId=='u1')
            return {...state,availableProducts:action.productsFetched,userProducts:fetchedUserProducts}
        default: return state
    }
}
