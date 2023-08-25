import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native"; 
import axios from "axios";
import Style from "../config/Style";

const Programmation = () => {
  const [concert, setConcert] = useState(null);

  useEffect(() => {
    const fetchWordPressData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/events"
        );
        setConcert(response.data.events);
        console.log(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWordPressData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={Style.titreProgrammation}>Programmation</Text>
      <ScrollView style={{marginBottom : 10,marginTop :8}}>
        {concert ? (
          <View style={{ flexDirection: "row", flexWrap: "wrap",  justifyContent :'center', }}>
            {concert.map((event) => (
              <View
                key={event.id}
                style={{
                  width: "80%",
                  padding: 5,
                  borderWidth : 1,
                  borderRadius : 6,
                  borderColor : '#fe0122',
                margin : 3,
              marginBottom : 8}}
              >
                {/* Image */}
                {/* <Image
                  source={require(`../Images/${event.slug}.jpeg`)}
                  style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 10,
                    resizeMode: "cover",
                  }}
                /> */}
                 <View style={{flex : 1,flexDirection: "row", flexWrap: "wrap", marginBottom : 7}}>
                <Text style={{ 
                  fontWeight: 'bold',
                  color: '#fe0122',
                  fontSize: 18,
                  width : '50%'
                }}>
                  {event.title}
                </Text>
                {event.utc_start_date_details && (
                  <Text style={{ color: '#000000'}}>
                    {new Date(
                      event.utc_start_date_details.year,
                      event.utc_start_date_details.day,
                      event.utc_start_date_details.month - 1,
                    ).toLocaleDateString()}
                  </Text>
                )}
                </View>
                <View style={{flex : 1,flexDirection: "row", flexWrap: "wrap"}}>
                <Text style={{ color: '#000000', fontWeight: 'bold', width : '20%' }}>
                  {event.venue.venue}
                </Text>
                <Text style={{ color: '#000000',width : '50%'  }}>
                  -   {event.utc_start_date_details.hour}h{event.utc_start_date_details.minutes}
                </Text>

                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text>Chargement des données...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Programmation;
