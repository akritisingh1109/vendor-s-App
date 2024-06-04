import React, {useState} from 'react';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
const MyProducts = ({item,onAddToCart,onAddToWishlist}) => {
  return (
    <View
      style={{
        width: 200,
        height: 250,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'lightyellow',
        elevation: 10,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '60%',
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}></Image>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: '800',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 18}}>Rs {item.prize}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderRadius: 10,
            height: 40,
            width: 100,
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems: 'center',
            marginLeft: 25,
          }} onPress={()=>{
            onAddToCart(item)
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Add To Cart</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            bottom:190,
            left:150,
            
          }} 
          onPress={()=>{
            onAddToWishlist(item)
          }}>
            <Image source={require("../images/heart.png")} style={{height:20,width:20,alignItems:"center",padding:18}}></Image>
        </TouchableOpacity>
      </View>
  );
};
export default MyProducts;
