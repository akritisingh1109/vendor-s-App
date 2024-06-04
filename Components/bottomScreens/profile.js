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
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAddress from './myAddress';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
  const navigation=useNavigation();
  const [email, setEmail] = useState('');
  useEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    temp = await AsyncStorage.getItem('EMAIL');
    setEmail(temp);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', height: 100, flexDirection: 'row'}}>
        <Text
          style={{fontSize: 30, marginTop: 20, color: 'black', marginLeft: 10}}>
          Profile
        </Text>
        <TouchableOpacity>
          <Image
            style={{
              marginTop: 20,
              left: 250,
              height: 40,
              width: 40,
            }}
            source={require('../images/setting.png')}></Image>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
          }}
          source={require('../images/profile.png')}></Image>
        <Text style={{fontSize: 25, color: 'green', alignSelf: 'center'}}>
          {email}
        </Text>

        <TouchableOpacity style={{width:"100%",height:50,borderBottomWidth:3,borderBottomColor:"grey",marginTop:90}}
        onPress={()=>{
          navigation.navigate("MyAddress");
        }}>
          <Text style={{fontSize: 19}}>My Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"100%",height:50,borderBottomWidth:3,borderBottomColor:"grey",marginTop:90}}>
          <Text style={{fontSize: 19}}>My orders</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};
export default Profile;
