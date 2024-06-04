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
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import MyProducts1 from '../product/myProduct1';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/Actions/Action';
const Cart=()=>{
  const CartList=useSelector(state=>state.Reducers);

    const dispatch = useDispatch();
    return(
        <View style={{flex:1}}>
            
          <FlatList data={CartList} 
          renderItem={({item,index})=>{
            return(
                <MyProducts1 item={item}   onRemoveToCart={ ()=> {
                  dispatch(removeFromCart(index));
                }}     
                />
            )
          }}/>
          <View style={{marginBottom:80}}>
         <Button color="green" title="Checkout"/>
        </View>
        </View>
            )
}
export default Cart;