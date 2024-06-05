import {ADD_ADDRESS,DELETE_ADDRESS,ADD_ORDER,DELETE_ORDER } from "../ActionTypes";

const Reducers3=(state=[],actions)=>{
    switch(actions.type){
        case ADD_ORDER:
            return[
                ...state,
                actions.payload
            ]
            case DELETE_ORDER:
               const deletedArray1=state.filter((item,index)=>{
                return index!==actions.payload
               })
               return deletedArray1;
               default: 
                return state;
    }
} 
export default Reducers3;