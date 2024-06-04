import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import AppNavigator from './Components/AppNavigator';
import { Provider } from 'react-redux';
import {store }from './redux/store/Store';
import MainContainer from './mainContainer';
const App=()=>{
  return(
<Provider store={store}>
  <MainContainer/>
</Provider>
  )
}

export default App;
