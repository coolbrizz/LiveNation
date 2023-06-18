import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

export default class About extends React.Component {
  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height : 280,
    borderColor : 'red',
    borderWidth : 5,

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    borderColor : 'red',
    borderWidth : 5,
  },
});