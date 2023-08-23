import React from "react";
import { View, StyleSheet} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Entete from "../Components/Entete";

function Maponglet() {
  return (
    <View style={styles.container}>
      <Entete />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.909578,
          longitude: 2.127237,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 48.909578, longitude: 2.127237 }}
          title={"Scène 1"} // Enclosed title in double quotes
          image={require('../Images/scene.png' )}
        />
      </MapView>
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
  flex : 1,
  width : '100%',
  height : '100%',
  // width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height
}});
  export default Maponglet;