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
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
const MyOrders = () => {
  const navigation = useNavigation();
  const orderList = useSelector(state => state.Reducers3);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{
            marginTop: 20,
            left: 15,
            height: 40,
            width: 40,
          }}
          source={require('../images/backButton.png')}></Image>
      </TouchableOpacity>
   
      <View>
        <FlatList
        data={orderList}
        renderItem={({item, index})=>{
            return (
                <View
                  style={{
                    width: '100%',
                    borderWidth: 0.5,
                    justifyContent: 'center',
                    borderColor: 'orange',
                  }}>
                  {item.items.map(item1 => {
                    return (
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={item1.image}
                          style={{
                            width: 50,
                            height: 50,
                            marginTop: 10,
                            marginLeft: 20,
                            marginBottom: 10,
                          }}
                        />
                        <Text style={{marginLeft: 20, fontSize: 18}}>
                          {item1.name}
                        </Text>
                        <Text style={{marginLeft: 20, fontSize: 18}}>
                           Rs {item1.prize}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              );
        }}/>
      </View>
    </View>
  );
};
export default MyOrders;
