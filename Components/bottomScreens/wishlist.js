import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import MyProducts2 from '../product/myProducts2';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../redux/Actions/Action';
import { addItemToCart } from '../../redux/Actions/Action';
const Wishlist=()=>{
    const CartList=useSelector(state=>state.Reducers2);
   // const CartList1=useSelector(state=>state.Reducers);
    const dispatch = useDispatch();
    
    //const combinedCartList = [...CartList1, ...CartList];

    return(
        <View style={{flex:1}}>
        {/* <FlatList data={combinedCartList}  */}
          <FlatList data={CartList} 
          renderItem={({item,index})=>{
            return(
                <MyProducts2 item={item}   onRemoveFromWishlist={ ()=> {
                  dispatch(removeFromWishlist(index));
                }}              
                />
            )
          }}/>
        </View>
            )
}
export default Wishlist;