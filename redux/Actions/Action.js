import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,REMOVE_FROM_CART,ADD_ADDRESS,DELETE_ADDRESS } from "../ActionTypes";

export const addItemToCart=data=>({
   type:ADD_TO_CART,
   payload:data, 
})

export const removeFromCart=index=>({
    type: REMOVE_FROM_CART,
    payload:index, 
})

 export const addToWishlist=data=>({
    type:ADD_TO_WISHLIST,
    payload:data, 
})

 export const removeFromWishlist=index=>({
    type:REMOVE_FROM_WISHLIST,
    payload:index, 
})
export const addAddress=data=>({
    type:ADD_ADDRESS,
    payload:data
})
export const deleteAddress=index=>({
    type:DELETE_ADDRESS,
    payload:index
})