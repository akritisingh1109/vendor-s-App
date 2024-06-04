import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = () => {
  const navigation = useNavigation();
  
useEffect(()=>{
setTimeout(
    ()=>{
//navigation.navigate("Login");
 navigation.navigate("Home");
},2000);
},[])


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'lightgreen'} barStyle={'light-content'} />
      <Text style={styles.logo}>E-Com</Text>
      <Text style={styles.logo}>Vendor's App</Text>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  logo: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
