import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const SignUpInput = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput1}
        placeholder={placeholder}
        value={value}
        onChangeText={text => {
          onChangeText(text);
        }}
      />
    </View>
  );
};
export default SignUpInput;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginTop: 10,
    padding: 2,
    borderColor: 'green',
  },
  textInput1: {
    fontSize: 18,
  },
});
