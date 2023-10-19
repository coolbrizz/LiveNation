import { View, Text } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";

const Filtjour = ({onChange}) => {
  const [jour, setJour] = useState([]);
  const [selectedJour, setSelectedJour] = useState("");

  useEffect(() => {
    const fetchJour = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/events"
        );
        setJour(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJour();
  }, []);
  const uniqueJour = Array.from(new Set(jour.map(item => item.utc_start_date_details.day)))
    .map(day => ({
      utc_start_date_details: {
        day,
      }
    }));

  return (
    <View>
      <Text   style={{color : 'black'}}>Choix du jour</Text>
      <View>
      {Array.isArray(jour) && jour.length > 0 ? (
          <Picker
          selectedValue={selectedJour }
          onValueChange={(itemValue) => {
            setSelectedJour(itemValue);
            onChange(itemValue); 
          }}
          style={{ width: 180 }}
          >
          <Picker.Item label="Tous" value="" color = {'red'}/>
             {uniqueJour.map((jours) =>{             
          return(
            <Picker.Item
              key={jours.utc_start_date_details.day}
              label={jours.utc_start_date_details.day +"/12"}
              value={jours.utc_start_date_details.day}
              color = {'red'}
            />
                );
              }
            )}
          </Picker>
        ) : (
          <Text>Loading scenes...</Text>
        )}
      </View>
    </View>
  );
}

export default Filtjour;