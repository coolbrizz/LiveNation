import React from 'react';
import { View, Image, Linking,TouchableOpacity, Text } from 'react-native'; 

import Entete from '../Components/Entete';
import Bouton from '../Components/Bouton';

const Reseaux = () => {
  return (
    <View style={{ flex: 1 }}>
      <Entete />
      <Text style={{color : 'black' , textAlign : 'center', fontWeight : 'bold', fontSize : 16}}> Venez nombreux nous rejoindre sur les réseaux sociaux afin de rester informé de nos dernières actualités </Text>
      <View
        style={{
          flex: 1,
          paddingTop: 15,
          alignItems: 'center', 
        }}
      >
        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Image
              source={require('../Images/logoFacebook.png')}
              style={{ width: 150, height : 150,margin : 10}}
            />
  
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')}>
            <Image
              source={require('../Images/logoTwitter.png')}
              style={{ width: 150, height: 150,margin : 10}}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', flex: 1,alignSelf: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.Instagram.com')}>
            <Image
              source={require('../Images/logoInsta.png')}
              style={{ width: 150, height: 150,margin : 10}}
            />
          </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com')}>
            <Image
              source={require('../Images/linkedin.webp')}
              style={{width: 150, height: 150,margin : 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 1,alignSelf: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com')}>
            <Image
              source={require('../Images/youtube.png')}
              style={{width: 150, height: 150,margin : 10}}
            />
          </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.snapchat.com')}>
            <Image
              source={require('../Images/snapchat.jpg')}
              style={{ width: 150, height: 150,margin : 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Bouton />
    </View>
  );
};

export default Reseaux;