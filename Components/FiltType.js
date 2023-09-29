import { View, Text } from 'react-native';
import axios from 'axios';
import { Picker,StyleSheet } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";

const FiltType = () => {
  const [type, setType] = useState([]);
  const [selectedType , setSelectedType] = useState(null)

  function eraseHtmlTags(html) {
    return html.replace(/<[^>]*>/g, '');
  }

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
const uniqueType = [...new Set(type.map((types) => types.excerpt))]
  return (
    <View>
      <Text style={{color : 'black'}}>Choix du type</Text>
      <View>
        {Array.isArray(type) && type.length > 0 ? (
          <Picker
            selectedValue={selectedType}
            onValueChange={(ItemValue , itemIndex) => setSelectedType(ItemValue)}
            style={{width :180}}
          >
            {uniqueType.map((types) => {
              let choice = eraseHtmlTags(types.excerpt)
              if (types.excerpt) {
                  return (
                    <Picker.Item
                      key={types.id}
                      label={choice}
                      value={choice}
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
  )
}
export default FiltType;