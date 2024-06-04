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
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Splash';
import Login from './login';
import SignUp from './signup';
import Home from './Home';
import MyAddress from './bottomScreens/myAddress';
import AddNewAddress from './bottomScreens/AddNewAddress';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="SignUp"
          component={SignUp}
         options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
       <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AddNewAddress"
          component={AddNewAddress}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
