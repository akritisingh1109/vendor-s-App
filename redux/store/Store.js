import {combineReducers, createStore} from "redux"
import Reducers from "../reducers/reducer"
import Reducers2 from "../reducers/reducer2";
const routeReducer=combineReducers({Reducers,Reducers2})
export const store=createStore(routeReducer);
