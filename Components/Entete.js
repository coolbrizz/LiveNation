import React from "react";
import { Image, View,TouchableOpacity} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import Style from "../config/Style";

const Entete = () => {
  const navigation = useNavigation();

  return (
    <View >
      <TouchableOpacity style={{borderColor : '#28292b',borderBottomWidth : 1}}
      onPress={() => navigation.navigate('Menu')}>
      <Image source={require('../Images/logo.png')} 
      style={{ width: 420, height: 80 ,
      }}  />
      </TouchableOpacity>
    </View>
  );
}

export default Entete;