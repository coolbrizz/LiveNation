import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

function Maponglet(){
    return (
      <View style={styles.container}>
          <MapView
          style={styles.map}
            initialRegion={{
              
              latitude: 48.909578,
              longitude: 2.127237,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
map :{
  width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}});
  export default Maponglet;