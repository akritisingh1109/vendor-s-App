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
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Search from './bottomScreens/search';
import Main from './bottomScreens/Main';
import Cart from './bottomScreens/Cart';
import Profile from './bottomScreens/profile';
import Wishlist from './bottomScreens/wishlist';
import { useSelector } from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data= useSelector(state => state);

  return (
    <View style={{flex: 1}}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Cart />
      ) : selectedTab === 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: 'lightgreen',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.touch1}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('./images/home.png')}
            style={{width: 50, height: 50, margin: 18}}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch1}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('./images/search.png')}
            style={{
              width: 50,
              height: 50,
              margin: 18,
              marginRight: 30,
            }}></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '10%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.touch2}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={require('./images/bag.png')}
              style={{
                width: 50,
                height: 50,
                margin: 11,
                marginRight: 30,
                borderRadius: 30,
              }}></Image>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                right: 4,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>{data.Reducers.length}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.touch1}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('./images/heart.webp')}
            style={{width: 50, height: 50, margin: 20, marginLeft: 30}}>
            </Image>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                position:"absolute",
                top: 5,
                left:60
              }}>
                <Text style={{color:"white",fontSize:15}}>{data.Reducers2.length}</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch1}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('./images/user.png')}
            style={{width: 50, height: 50, margin: 18}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  touch1: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  touch2: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'darkorange',
  },
});
