import {ADD_ADDRESS,DELETE_ADDRESS } from "../ActionTypes";

const Reducers1=(state=[],actions)=>{
    switch(actions.type){
        case ADD_ADDRESS:
            return[
                ...state,
                actions.payload
            ]
            case DELETE_ADDRESS:
               const deletedArray1=state.filter((item,index)=>{
                return index!==actions.payload
               })
               return deletedArray1;

                
               default: 
                return state;
    }
} 
export default Reducers1;