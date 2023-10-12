import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import axios from "axios";
import Style from "../config/Style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Entete from "../Components/Entete";
import Bouton from "../Components/Bouton";
import Filtscene from "../Components/Filtscene";
import FiltHeure from "../Components/FiltHeure";
import FiltJour from "../Components/FiltJour";
import FiltType from "../Components/FiltType";

const Programmescreen = () => {
  const [concert, setConcert] = useState([]);
  const [selectedScene, setSelectedScene] = useState("");
  const [selectedJour, setSelectedJour] = useState("");
  const [selectedHeure, setSelectedHeure] = useState("")
  const [selectedType, setSelectedType] = useState("")

  //Récupération des éléments choisit dans les input
  const handleHeureChange = (newHour) =>{
    setSelectedHeure(newHour)}
  const handleJourChange = (newJour) =>{
    setSelectedJour(newJour)}
  const handleSceneChange = (newSceneValue) => {
    setSelectedScene(newSceneValue)}
  const handleTypeChange = (newType) => {
      setSelectedType(newType)}

      useEffect(() => {
        const fetchWordPressData = async () => {
          try {
            const response = await axios.get(
              "http://192.168.1.20/LiveNation/wp-json/tribe/events/v1/events",
              {
                headers: {
                  Authorization: "Bearer VOTRE_TOKEN",
                },
              }
            );
            setConcert(response.data.events);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchWordPressData();
      }, []);



  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Entete />
      <Text style={Style.titreProgrammation}>Programmation</Text>
      <ScrollView style={{ marginBottom: 10, marginTop: 8 }}>
        {concert ? (
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center' }}>
           <Filtscene onChange={handleSceneChange}/>
           <FiltHeure onChange={handleHeureChange}/>
           <FiltJour onChange={handleJourChange}/>
           <FiltType onChange={handleTypeChange}/>
            {concert
            // .filter
            .filter((choice) => {
              let itemMatches = true; 
            
              if (selectedScene !== "" && selectedScene !== choice.venue.venue) {
                itemMatches = false; 
              }
              if (selectedHeure !== "" && selectedHeure !== choice.utc_start_date_details.hour) {
                itemMatches = false;
              }
              if (selectedJour !== "" && selectedJour !== choice.utc_start_date_details.day) {
                itemMatches = false;
              }
              if(selectedType !== "" && selectedType !== choice.tags[0].name) {
                itemMatches = false;
              }
              return itemMatches;
            })
            .map((event) => {
              let imageSource;
              switch(event.slug){
                case "trivali":
                  imageSource =require('../Images/trivali.jpeg');
                  break;
                  case "bass-trigger" : 
                  imageSource =require('../Images/bass-trigger.jpeg');
                  break;
                  case "blacking" : 
                  imageSource =require('../Images/blacking.jpeg');
                  break;
                  case "boombass" : 
                  imageSource =require('../Images/boombass.jpeg');
                  break;
                  case "deathje" : 
                  imageSource =require('../Images/deathje.jpeg');
                  break;
                  case "dj-sonos" : 
                  imageSource =require('../Images/dj-sonos.jpeg');
                  break;
                  case "dj-venom" : 
                  imageSource =require('../Images/dj-venom.jpeg');
                  break;
                  case "malumine" : 
                  imageSource =require('../Images/malumine.jpeg');
                  break;
                  case "plipikak" : 
                  imageSource =require('../Images/plipikak.jpeg');
                  break;
              }
              return (
                <View
                  key={event.id}
                  style={Style.styleProgrammation}
                >
                  <View style={{flexDirection : 'row'}}>
                    <View>
                    <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Group', { eventId: event.description, eventTitle: event.title, eventSlug : event.slug })}>
                      <Image
                        source={imageSource}
                        style={{
                          width: 70,
                          height:70,
                          borderRadius: 10,
                          resizeMode: 'contain',
                        }}
                      />
                      </TouchableOpacity>
                    </View>
                    <View style={{paddingLeft : 10}}>
                        <View style={{marginBottom: 7 }}>
                        <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Group', { eventId: event.description, eventTitle: event.title, eventSlug : event.slug })}
                      >
                            <Text style={Style.titreGroup}>
                              {event.title}
                            </Text>
                          </TouchableOpacity>
                          {event.utc_start_date_details && (
                            <Text style={{ color: '#000000' }}>
                              {new Date(
                                event.utc_start_date_details.year,
                                event.utc_start_date_details.day,
                                event.utc_start_date_details.month ,
                              ).toLocaleDateString()}
                            </Text>
                          )}
                        </View>
                        <View style={{flexDirection: "row", flexWrap: "wrap" }}>
                          <Text style={{ color: '#000000', fontWeight: 'bold', width: '50%' }}>
                            {event.venue.venue}
                          </Text>
                          <Text style={{ color: '#000000', width: '50%',fontWeight: 'bold', }}>
                            {event.utc_start_date_details.hour}h{event.utc_start_date_details.minutes}
                          </Text>
                        </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <Text>Chargement des données...</Text>
        )}
      </ScrollView>
      <Bouton />
    </View>
  );
};

export default Programmescreen;