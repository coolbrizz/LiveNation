import { View, Text } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";

const Filtscene = ({onChange}) => {
  const [heure, setHeure] = useState([]);
  const [selectedHeure, setSelectedHeure] = useState(null);

  useEffect(() => {
    const fetchScene = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/events"
        );
        setHeure(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchScene();
  }, []);

  return (
    <View>
      <Text   style={{color : 'black'}}>Choix de l'heure</Text>
      <View>
      </View>
      <View>
        <Picker
          selectedValue={selectedHeure}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedHeure(itemValue)
            onChange(itemValue)}}
          style={{ width: 150 }}
        >
           <Picker.Item label="Tous" value="" color = {'red'}/>
          {heure.map((heures) =>{    
          return(
            <Picker.Item
              key={heures.id}
              label={heures.utc_start_date_details.hour + " h"}
              value={heures.utc_start_date_details.hour}
              color = {'red'}
            />
          )})}
        </Picker>
      </View>
    </View>
  );
}

export default Filtscene;
