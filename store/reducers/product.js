import PRODUCTS from "../../data/dummy-data.js"

const initialState = {
    availableProducts:PRODUCTS,
    userProducts:PRODUCTS.filter(product=>product.ownerId=='u1')
}


export const productReducer = (state=initialState,action)=>{
    switch(action.type){
        default: return state
    }
}
