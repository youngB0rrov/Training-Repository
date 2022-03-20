import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer as cash } from "./cashReducer";
import { customerReducer as customers } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash,
    customers
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));