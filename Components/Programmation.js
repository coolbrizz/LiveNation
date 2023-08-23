import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native"; 
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
    <View style={{ flex: 1, height: 300, width: "100%", alignContent: "center" }}>
      <Text style={Style.titreProgrammation}>Programmation</Text>
      {concert ? (
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          {concert.map((event) => (
            <View
              key={event.id}
              style={{
                width: "50%",
                height: "auto",
                borderRadius: 10,
                padding: 5,
              }}
            >
              <View>
              {/* <Image
                  source={require(`../Images/${event.slug}.jpeg`)}
                  style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 10,
                    resizeMode: "cover",
                  }}
                /> */}
                <Text style={{ 
                  width: "70%", 
                  height: "auto" ,
                  fontWeight: 'bold',
                  color : '#fe0122',
                  fontSize : 18,}}>
                    {event.title}
                </Text>
                {event.utc_start_date_details && (
                  <Text style={{ 
                    width: "50%", 
                    height: "auto" ,
                    color : '#000000',}}>
                    {new Date(event.utc_start_date_details.year, event.utc_start_date_details.month - 1, event.utc_start_date_details.day).toLocaleDateString()} 
                  </Text>
                )}
                </View>
                <View>
                  <Text style={{color : '#000000',}}>
                    De {event.utc_start_date_details.hour}h{event.utc_start_date_details.minutes} à {event.utc_end_date_details.hour}h{event.utc_end_date_details.minutes}
                  </Text>
                <Text style={{
                  color : '#000000',
                  fontWeight: 'bold',}}>
                  {event.venue.venue}
                </Text>
            </View>
          </View>
          ))}
        </View>
      ) : (
        <Text>Chargement des données...</Text>
      )}
    </View>
  );
};

export default Programmation;