import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { merchantReducer ,merchantDetailsReducer} from "./reducers/merchantReducers"
import { offerReducer ,offerDetailsReducer} from "./reducers/offerReducers"
import {userReducer ,userDataReducer} from "./reducers/userReducers"
const reducer = combineReducers({
    merchant: merchantReducer,
    merchantDetails : merchantDetailsReducer,
    offer : offerReducer,
    offerDetails : offerDetailsReducer,
    user: userReducer,
    userData : userDataReducer
})

let initialState = {}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store