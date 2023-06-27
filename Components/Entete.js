import React from "react";
import { Image, Text, View,StyleSheet } from 'react-native';

export default class Programmation extends React.Component{
    render(){
        return( 
            <View style = {styles.container}>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>Menu</Text>
                </View>
                <Image source={require('../Images/logoMspr.png')} style={{ width: 400, height: 80 }} />
            </View>
        )}}
        const styles = StyleSheet.create({

            textContainer: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            },
            text: {
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: 10,
            },})