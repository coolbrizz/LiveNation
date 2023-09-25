import { View, Text,Image,useWindowDimensions } from 'react-native'
import React from 'react'
import Entete from '../Components/Entete';
import Bouton from '../Components/Bouton';
import { useRoute } from '@react-navigation/native';
import style from '../config/Style';
import HTML from 'react-native-render-html';

const Group = () => {
        const route = useRoute();
        const routes = useRoute();
        const routes2 = useRoute();
        const eventId = route.params.eventId;
        const eventTitle = routes.params.eventTitle;
        const eventSlug = routes2.params.eventSlug;
        const { width: contentWidth } = useWindowDimensions();
        const htmlStyles = {
            p: { fontSize: 15, color: 'black',margin : 7, textAlign :'center' }, }
            let imageSource;
            switch(eventSlug){
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
    <View style={{flex : 1}}>
        <Entete />
        <View style={{flex : 1,alignItems : 'center'}}>
          <Text style={style.titreProgrammation}>{eventTitle}</Text>
          <Image source={imageSource} style={{ width: 150, height: 200 ,padding : 10,margin : 10,borderRadius: 10,resizeMode : 'contain' }}  />
            <View>
            <HTML source={{ html: eventId }} contentWidth={contentWidth} tagsStyles={htmlStyles} />
            </View>
      </View>
      <Bouton />
    </View>
  )
}

export default Group