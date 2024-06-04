import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

const Reducers=(state=[],actions)=>{
    switch(actions.type){
        case ADD_TO_CART:
            return[
                ...state,
                actions.payload
            ]
            case REMOVE_FROM_CART:
               const deletedArray1=state.filter((item,index)=>{
                return index!==actions.payload
               })
               return deletedArray1;

    // case ADD_TO_WISHLIST:
    //             return[
    //                 ...state,
    //                 actions.payload
    //             ]
    //             case REMOVE_FROM_WISHLIST:
    //                const deletedArray2=state.filter((item,index)=>{
    //                 return index!==actions.payload
    //                })
    //                return deletedArray2;
               default: 
                return state;
    }
} 
export default Reducers;