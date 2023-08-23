import React from 'react';
import { View, Image, Linking,TouchableOpacity } from 'react-native'; // Reordered the imports

import Entete from '../Components/Entete';
import Bouton from '../Components/Bouton';

const Reseaux = () => {
  return (
    <View style={{ flex: 1 }}>
      <Entete />
      <View
        style={{
          flex: 1,
          paddingTop: 15,
          alignItems: 'center', // Changed alignContent to alignItems
        }}
      >
        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
          {/* Added TouchableOpacity to make the image pressable */}
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Image
              source={require('../Images/logoFacebook.png')}
              style={{ width: 200, height: '90%', margin:3, }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')}>
            <Image
              source={require('../Images/logoTwitter.png')}
              style={{ width: 200, height: 200, margin: 3, }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flex: 1,alignSelf: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.Instagram.com')}>
            <Image
              source={require('../Images/logoInsta.png')}
              style={{ width: 200, height: 200, margin: 1, }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Bouton />
    </View>
  );
};

export default Reseaux;