import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';


const Map = () =>{
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
          <MapView
            style={styles.map}
            onPress={() => navigation.navigate('Map')}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height /3,
  },
});
export default Map;