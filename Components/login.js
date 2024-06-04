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
  Alert,
} from 'react-native';
import SignUpInput from './signUpInput';
import SignUpButton from './SignUpButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const validate = () => {
    let valid = true;
    if (email == ' ') {
      valid = false;
    } else if (pass == '') {
      valid = false;
    }
//    return valid;
getData();
  };

  const getData = async () => {
    const saveEmail = await AsyncStorage.getItem('EMAIL');
    const savePass = await AsyncStorage.getItem('PASS');
    // console.warn(saveEmail,savePass,email,pass) 
               
    // if (email === saveEmail && savePass === pass)
        if (email === saveEmail && pass === savePass)
        {
            // console.warn(saveEmail,savePass)            
            navigation.navigate('Home')
        }
        else {
            Alert.alert("wrong password");
        }
  };
  return (
    <View style={styles.container}>
      <Image source={require('./images/signupBG.jpg')} style={styles.Banner} />
      <View style={styles.view1}>
        <Text style={styles.text1}>Login</Text>
        <SignUpInput
          placeholder={'Enter Email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <SignUpInput placeholder={'Enter Password'}
          value={pass}
          onChangeText={text => setPass(text)}
         />
        <SignUpButton
          title={'Login'}
//           onClick={() => {
//             if (validate()) {
//             //  Alert.alert('Good');
//   getData();   
//             } else {
//               Alert.alert('Please Check Data');
//             }
//           }}
onClick={() =>
    validate()
}
        />
        <View style={styles.view2}>
          <Text>Dont have an acount?</Text>
          <Text
            style={styles.text2}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            {' '}
            Create One
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  text2: {
    fontSize: 15,
    color: 'orange',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Banner: {
    width: '100%',
    height: 250,
  },
  view1: {
    width: '90%',
    height: '100%',
    backgroundColor: 'lightgrey',
    elevation: 5,
    position: 'absolute',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: 220,
    alignSelf: 'center',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
