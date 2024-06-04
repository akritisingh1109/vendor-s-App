import {Header} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Products} from '../product';c
import Header1 from '../header';
import {FlatList} from 'react-native-gesture-handler';
import MyProducts from '../product/myProducts';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../../redux/Actions/Action';
const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategorList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [topList, setTopList] = useState([]);
  const [pantList, setPantsList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  useEffect(() => {
    //  console.log(Products);
    let tempCategory = [];
    Products.category.map(item => {
      tempCategory.push(item);
    });
    setCategorList(tempCategory);
    setJacketList(Products.category[0].data);
    setTopList(Products.category[1].data);
    setPantsList(Products.category[2].data);
    setShoesList(Products.category[3].data);
  }, []);

  // const xyz = useSelector(state => state);
  // console.log(xyz);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header1 />
        <Image
          source={require('../images/banner.jpg')}
          style={{
            width: '99%',
            borderRadius: 10,
            height: 250,
            marginTop: 10,
            alignSelf: 'center',
          }}></Image>
        <View style={{marginTop: 10}}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 2,
                    margin: 20,
                    padding: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{fontSize: 20}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 16,
            fontWeight: 600,
          }}>
          New Jackets
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            data={jacketList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProducts
                  item={item}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                  onAddToWishlist={y => {
                    dispatch(addToWishlist(y));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 16,
            fontWeight: 600,
          }}>
          New Tops
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            data={topList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProducts
                  item={item}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                  onAddToWishlist={y => {
                    dispatch(addToWishlist(y));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 16,
            fontWeight: 600,
          }}>
          New Pants
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            data={pantList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProducts
                  item={item}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                  onAddToWishlist={y => {
                    dispatch(addToWishlist(y));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 16,
            fontWeight: 600,
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            data={shoesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProducts
                  item={item}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                  onAddToWishlist={y => {
                    dispatch(addToWishlist(y));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Main;
