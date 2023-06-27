import React from "react";
import {Text, View } from 'react-native';
import style from '../config/Style'

export default class About extends React.Component{
  render(){
    return(
        <View  style={style.notif}>
          <Text style={style.messageUrgent}> ⚠️ Annulation concert de Sum scène 3 : cause de problème technique</Text>
        </View>
    )
  }
}
