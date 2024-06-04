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
  TouchableOpacity, // Import for back button functionality
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AddNewAddress from './AddNewAddress';
import { FlatList } from 'react-native-gesture-handler';
import { deleteAddress } from '../../redux/Actions/Action';
const MyAddress = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch();
  const addressList=useSelector(state=>state.Reducers1);
  console.log(addressList)
  return (
    <View>
      <View style={styles.header}>
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewAddress');
          }}>
          <Image
            style={{
              marginTop: 20,
              left: 300,
              height: 40,
              width: 40,
            }}
            source={require('../images/icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:30,color:"black"}}> MY ADDRESS</Text>
   <FlatList data={addressList} renderItem={({item,index})=>{
    return(
        <View style={{width:"100%",justifyContent:"center",borderWidth:2,borderColor:"green",alignSelf:"center"}}>
            <Text style={{marginLeft:20,marginBottom:10}}>name: {item.name}</Text>
            <Text style={{marginLeft:20,marginBottom:10}}>city :{item.city}</Text>
            <Text style={{marginLeft:20,marginBottom:10}}>mobile :{item.mobile}</Text>
<TouchableOpacity onPress={()=>{
    dispatch(deleteAddress(index))
}}>
<Image style={{
              left: 350,
              height: 40,
              width: 40,
              marginBottom:10
            }}
            source={require('../images/delete.png')}></Image>
</TouchableOpacity>
        </View>
    )
   }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default MyAddress;
