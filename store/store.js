import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import {productReducer} from "./reducers/product"
import {cartReducer} from "./reducers/cart"
import {orderReducer} from "./reducers/order"
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({product:productReducer,cart:cartReducer,orders:orderReducer})

const store = createStore(rootReducer,compose(applyMiddleware(ReduxThunk),window.devToolsExtension ? window.devToolsExtension() : f => f))

export default store