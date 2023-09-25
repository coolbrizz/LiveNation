import { View, Text } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";

const Filtscene = () => {
  const [scene, setScene] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);

  useEffect(() => {
    const fetchScene = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/venues"
        );
        setScene(response.data.venues);
      } catch (error) {
        console.error(error);
      }
    };
    fetchScene();
  }, []);

  return (
    <View>
      <Text>Choix du type</Text>
      <View>
        {Array.isArray(scene) && scene.length > 0 ? (
          <Picker
            selectedValue={selectedScene}
            onValueChange={(ItemValue , itemIndex) => setSelectedScene(ItemValue)}
            style={{width : 150}}
          >
            {scene.map((scenes) => {
              if (scenes.excerpt) {
                  return (
                    <Picker.Item
                      key={scenes.id}
                      label={scenes.venue}
                      value={scenes.venue}
                    />
                  );
              }
              return null;
            })}
          </Picker>
        ) : (
          <Text>Loading scenes...</Text>
        )}
      </View>
    </View>
  )
}

export default Filtscene;