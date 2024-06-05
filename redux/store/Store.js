import {combineReducers, createStore} from "redux"
import Reducers from "../reducers/reducer"
import Reducers2 from "../reducers/reducer2";
import Reducers1 from "../reducers/reducer1";
import Reducers3 from "../reducers/reducer3";
const routeReducer=combineReducers({Reducers,Reducers2,Reducers1,Reducers3})
export const store=createStore(routeReducer);
