import React from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SignUpButton=({title,onClick})=>{
  return(
    <View>
<TouchableOpacity style={styles.button} 
onPress={()=>onClick()}>
<Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
</View>
  )
}
export default SignUpButton;
const styles=StyleSheet.create({
button:{
    height:45,
    width:100,
    backgroundColor:"darkorange",
alignSelf:"center",
marginTop:10,
borderRadius:5,
},
buttonText:{
    fontSize:20,
    color:"black",
alignSelf:"center",
padding:5,

}
})
