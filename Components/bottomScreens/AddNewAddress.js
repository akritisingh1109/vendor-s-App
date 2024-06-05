import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import SignUpInput from '../signUpInput';
import SignUpButton from '../SignUpButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../redux/Actions/Action';
const AddNewAddress=()=>{
    const navigation=useNavigation();
    const addressList=useSelector(state=>state.Reducers1);
    // console.log(addressList)
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState('');
    const dispatch=useDispatch();
    return(
        <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{
              marginTop: 20,
              left: 15,
              height: 40,
              width: 40,
            }}
            source={require('../images/backButton.png')}></Image>
         
          </TouchableOpacity>
        </View>
        <SignUpInput
          placeholder={'Enter Name'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <SignUpInput
          placeholder={'Enter Mobile'}
          value={mobile}
          onChangeText={text => setMobile(text)}
        />
        <SignUpInput
          placeholder={'Enter city'}
          value={city}
          onChangeText={text => setCity(text)}
        />
       <SignUpButton
          style={styles.button1}
          title={'save'}
          onClick={() => {
            if(city!==""&& mobile!=="" && name!==""){
dispatch(addAddress({city:city,name:name,mobile:mobile}))
            }
            navigation.goBack();
          }}
        />
        </View>
            )
}
export default AddNewAddress;
const styles = StyleSheet.create({

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    }, backbutton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        elevation: 5,
        bottom: 10,
        left: 50,
      },
   
  });
  