import {createStore,combineReducers} from "redux"
import {productReducer} from "./reducers/product"
import {cartReducer} from "./reducers/cart"
import {orderReducer} from "./reducers/order"

const rootReducer = combineReducers({product:productReducer,cart:cartReducer,orders:orderReducer})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store