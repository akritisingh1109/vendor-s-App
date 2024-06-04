import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Header1=()=>{
    return(
<View style={styles.view1}>
    <Text style={{fontSize:25,marginLeft:20,fontWeight:"bold",color:"black"}}>
        SHOPPING APP
    </Text>

</View>
    )
}
export default Header1;
const styles=StyleSheet.create(
    {
        view1:{
            width:"100%",
            height:70,
            // justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            borderBottomWidth:1,
            borderBlockColor:"lightgreen",
            backgroundColor:"lightyellow"
        }
    }
)