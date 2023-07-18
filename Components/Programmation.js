import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import axios from "axios";
import Style from "../config/Style";

const Programmation = () => {
  const [concert, setConcert] = useState(null);
  
  useEffect(() => {
    const fetchWordPressData = async () => {
      try {
        const response = await axios.get('http://localhost/LiveNation/wp-json/tribe/events/v1/events');
        setConcert(response.data.events); // Utilisez response.data pour accéder aux données de la réponse;
        console.log(response.data.events)
      } catch (error) {
        console.error(error);
      }
    };
      
    fetchWordPressData();
  }, []);

  return (

    <View style={{ flex : 1, height: 300 }}>
          <Text style={Style.titreProgrammation}>Programmation</Text>
      {concert ? (
        <Text>{concert.map(event => 
          <div key={event.id}>
            {event.title}
          </div> )}</Text>
      ) : (
        <Text>Chargement des données...</Text>
      )}
    </View>
  );
};

export default Programmation;

