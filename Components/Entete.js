import 'react-native-gesture-handler';
import React from "react";
import { Image, Text, View,StyleSheet,TouchableOpacity,Button } from 'react-native';

const Entete = ({navigation}) => {
        return( 
            <View style = {styles.container}>
                <Image source={require('../Images/logo.png')} style={{ width: 420, height: 100, }} />
                <View style = {styles.textContainer}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Image source={require('../Images/menu.png')} 
                        style={styles.menuburger}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )}

        const styles = StyleSheet.create({
            textContainer: {
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            },
            menuburger: {
                height : 25,
                width : 25,
                top : 5,
                left : 10,
            },})
            export default Entete
