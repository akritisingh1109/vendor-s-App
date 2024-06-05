import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addOrder} from '../../redux/Actions/Action';

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const CartList = useSelector(state => state.Reducers);
  const addressList = useSelector(state => state.Reducers1);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const totalValue = () => {
    let sum = 0;
    for (let i = 0; i < CartList.length; i++) {
      sum += CartList[i].prize;
    }
    return sum;
  };

  const handlePlaceOrder = () => {
    if (selectedAddress) {
      dispatch(addOrder({items: CartList, address: selectedAddress}));
      navigation.navigate('Home');
    } else {
      alert('Please select an address');
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{
            marginTop: 20,
            left: 15,
            height: 40,
            width: 40,
          }}
          source={require('../images/backButton.png')}
        />
      </TouchableOpacity>
      <View>
        <FlatList
          data={CartList}
          renderItem={({item}) => (
            <View style={{padding: 10, flexDirection: 'row', marginTop: 10}}>
              <Image style={{height: 100, width: 100}} source={item.image} />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20}}>{item.name}</Text>
                <Text style={{fontSize: 20}}>{'Rs ' + item.prize}</Text>
              </View>
            </View>
          )}
        />
        <View style={{flexDirection: 'row', borderTopWidth: 1, marginTop: 10}}>
          <Text style={{fontSize: 30}}>Total:</Text>
          <Text style={{fontSize: 30, left: 250}}>{totalValue()}</Text>
        </View>
        <Text style={{fontSize: 25, color: 'black'}}>Select Address:</Text>
        <FlatList
          data={addressList}
          renderItem={({item}) => (
            <View
              style={{
                marginTop: 10,
                width: '100%',
                borderWidth: 1,
                borderColor: 'green',
                alignSelf: 'center',
                height: 120,
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{marginLeft: 20, marginBottom: 5, fontSize: 20}}>
                  name: {item.name}
                </Text>
                <Text style={{marginLeft: 20, marginBottom: 5, fontSize: 20}}>
                  city: {item.city}
                </Text>
                <Text style={{marginLeft: 20, marginBottom: 5, fontSize: 20}}>
                  mobile: {item.mobile}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedAddress(
                    `Name: ${item.name} City: ${item.city} Mobile no: ${item.mobile}`,
                  );
                }}>
                <Image
                  style={{
                    top: 20,
                    left: 200,
                    height: 20,
                    width: 20,
                  }}
                  source={require('../images/icon.png')}
                />
              </TouchableOpacity>
            </View>
          )}
        />
        <Text style={{fontSize: 25, color: 'black'}}>Selected Address: </Text>
        <Text style={{fontSize: 20, padding: 20}}>{selectedAddress}</Text>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: 'orange',
          width: '50%',
          alignSelf: 'center',
          height: 55,
          borderRadius: 10,
        }}
        onPress={handlePlaceOrder}>
        <Text style={{alignSelf: 'center', fontSize: 20, padding: 10}}>
          Place Order
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Checkout;
const styles = StyleSheet.create({});
