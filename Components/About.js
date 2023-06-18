import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import style from './Style'

export default class About extends React.Component{
  render(){
    return(
        <View  style={style.notif}>
          <Text style={{color : 'white',justifyContent : 'center', alignItems :'center', padding : 5, }}> ⚠️ Annulation concert de Sum scène 3 : cause de problème technique</Text>
        </View>
    )
  }
}
