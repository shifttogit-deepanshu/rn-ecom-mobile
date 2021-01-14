import PRODUCTS from "../../data/dummy-data.js"
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actions/product"
import Product from "../../models/product"

const initialState = {
    availableProducts:PRODUCTS,
    userProducts:PRODUCTS.filter(product=>product.ownerId=='u1')
}


export const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case DELETE_PRODUCT:
            return {...state,userProducts:state.userProducts.filter(product=>product.id!=action.id),
                    availableProducts:state.availableProducts.filter(product=>product.id!=action.id)}
        case CREATE_PRODUCT:
                const newProduct = new Product(new Date().toString(),'u1',action.productData.title,action.productData.imageUrl,action.productData.description,action.productData.price)
                return {...state,availableProducts:state.availableProducts.concat(newProduct),userProducts:state.userProducts.concat(newProduct)}
        case UPDATE_PRODUCT:
                const productIndex = state.userProducts.findIndex(prod=>prod.id==action.pid)
                let updateProduct = new Product(action.pid,'u1',action.productData.title,action.productData.imageUrl,action.productData.description,action.productData.price)
                const updatedProduct = [...state.userProducts]
                updatedProduct[productIndex] = updateProduct
                const availableProductIndex = state.availableProducts.findIndex(prod=>prod.id==action.pid)
                const updatedAvailableProduct = [...state.availableProducts]
                updatedAvailableProduct[availableProductIndex] = updateProduct
                return {...state,availableProducts:updatedAvailableProduct,userProducts:updatedProduct}
        default: return state
    }
}
