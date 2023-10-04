import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const FiltType = () => {
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchType = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/events"
        );
        setType(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchType();
  }, []);

  return (
    <View>
      <Text style={{ color: 'black' }}>Choix du type</Text>
      <View>
        {Array.isArray(type) && type.length > 0 ? (
          <Picker
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
            style={{ width: 180 }}
          >
            {type.map((event) => {
              if (event.tags && event.tags.length > 0) {
                return (
                  <Picker.Item
                    key={event.id}
                    label={event.tags[0].name}
                    value={event.tags[0].name}
                    color={'red'}
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

export default FiltType;
