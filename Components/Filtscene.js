import { View, Text } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";

function Filtscene  ({onChange}) {
  const [scene, setScene] = useState([]);
  const [selectedScene, setSelectedScene] = useState("");

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
      <Text   style={{color : 'black'}}>Choix de scène</Text>
      <View>
        {Array.isArray(scene) && scene.length > 0 ? (
          <Picker
            selectedValue={selectedScene}
            onValueChange={(itemValue) => {
              setSelectedScene(itemValue);
              onChange(itemValue); 
            }}
            style={{ width: 180 }}
          >
             <Picker.Item label="Tous" value="" color = {'red'}/>
            {scene.map((scenes) => {
              if (scenes.excerpt) {
                return (
                  <Picker.Item
                    key={scenes.id}
                    label={scenes.venue}
                    value={scenes.venue}
                    color = {'red'}
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
  );
};

export default Filtscene;







