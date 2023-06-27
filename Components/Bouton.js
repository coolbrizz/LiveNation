import React from "react";
import {Text,TouchableOpacity, Linking } from 'react-native';
import style from "../config/Style";

    const handlePress = () => {
        // Ouvrir le lien dans le navigateur
        Linking.openURL('https://www.livenation.fr/');
        };
        
export default class About extends React.Component {
    render() {
      return (
        <TouchableOpacity style={style.bouton} onPress={handlePress}>
<Text style={style.boutonText}>Billeterie</Text>
</TouchableOpacity>
      )}}