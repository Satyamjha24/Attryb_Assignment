import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer as authReducer } from "./Authentication/reducer"
import { reducer as dealerReducer } from "./DealerProduct/reducer"
import { reducer as marketReducer } from "./MarketProduct/reducer"
import { reducer as oemReducer } from "./OEMproduct/reducer"

const mainReducer=combineReducers({
    oemReducer,
    marketReducer,
    authReducer,
    dealerReducer,
})
export const store=legacy_createStore(mainReducer,applyMiddleware(thunk))