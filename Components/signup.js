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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const validate = () => {
    let valid = true;
    if (email == ' ') {
      valid = false;
    } 
    else if(mobile==""||mobile.length<10){
       valid=false;
    }
    else if (pass == '') {
      valid = false;
    }
    else if (pass !== confirm) {
      valid = false;
    }
    return valid;
  };
  const saveData=async()=>{
    await AsyncStorage.setItem("EMAIL",email);
    await AsyncStorage.setItem("PASS",pass);
    await AsyncStorage.setItem("CONFIRM",confirm);
    await AsyncStorage.setItem("MOBILE",mobile);
navigation.goBack();
}
  return (
    <View style={styles.container}>
      <Image source={require('./images/signupBG.jpg')} style={styles.Banner} />
      <View style={styles.view1}>
        <Text style={styles.text1}>Sign Up</Text>
        <SignUpInput
          placeholder={'Enter Email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <SignUpInput
          placeholder={'Enter Mobile'}
          value={mobile}
          onChangeText={text => setMobile(text)}
        />
        <SignUpInput
          placeholder={'Enter Password'}
          value={pass}
          onChangeText={text => setPass(text)}
        />
        <SignUpInput
          placeholder={'Confirm Password'}
          value={confirm}
          onChangeText={text => setConfirm(text)}
        />
        <SignUpButton
          style={styles.button1}
          title={'sign up'}
          onClick={() => {
            if(validate()){
                saveData();
            }
            else {
                Alert.alert("Please Check Data")
            }
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('./images/backButton.png')}
          style={styles.backicon}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backicon: {
    height: '90%',
    width: '90%',
  },
  backbutton: {
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
  text1: {
    fontSize: 30,
    color: 'darkorange',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  Banner: {
    width: '100%',
    height: 230,
  },
  view1: {
    width: '95%',
    height: '100%',
    backgroundColor: 'lightgrey',
    elevation: 5,
    position: 'absolute',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: 170,
    alignSelf: 'center',
  },
});
