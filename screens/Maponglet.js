import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Entete from "../Components/Entete";
import axios from "axios";

function Maponglet() {
  const [scene, setScene] = useState([]);

  useEffect(() => {
    const fetchWordPressData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/venues",
          {
            headers: {
              Authorization: "Bearer VOTRE_TOKEN", 
            },
          }
        );
        setScene(response.data.venues);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWordPressData();
  }, []);

  return (
    <View style={styles.container}>
      <Entete />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.830609,
          longitude: 2.365844,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {scene.map((scene) => {
          const latitude = parseFloat(scene.address);
          const longitude = parseFloat(scene.city);
          let imageSpot;
          switch (scene.venue){
            case"Toilettes" : 
            imageSpot= require('../Images/toilette.png');
            break
            case "Shop" : 
            imageSpot = require('../Images/shop.png');
            break
            case "Buvette" : 
            imageSpot =  require ('../Images/buvette.png')
            break;
            default : 
            imageSpot= require('../Images/scene.png');
            break
          }
          return (
            <Marker
              key={scene.id}
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title={scene.venue}
              image={imageSpot}
            />
          );
        })}
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
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Maponglet;
