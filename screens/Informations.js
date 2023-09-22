import { View, Text, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from "react";
import Entete from '../Components/Entete'
import Bouton from '../Components/Bouton'
import axios from 'axios';
import HTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

const Informations = () => {
  const [events, setEvents] = useState([]);
  const { width: contentWidth } = useWindowDimensions();
  const htmlStyles = {
    p: { fontSize: 15, color: 'black',margin : 7, textAlign :'center' }, }

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/wp/v2/posts"
        );
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <View>
      <Entete />
      <ScrollView>
      <View>

        {events.map((event) => (
          <View key={event.id}>
            <Text style={{ color : 'black', fontSize : 25, textAlign : "center", fontWeight : 'bold'}}>{event.title.rendered}</Text>
            <HTML source={{ html: event.content.rendered }} 
            contentWidth={contentWidth}
            tagsStyles={htmlStyles}/>
          </View>
        ))}

      </View>

      <Bouton />
      </ScrollView>
    </View>
  );
}

export default Informations