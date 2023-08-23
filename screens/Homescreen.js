import React from 'react';
import { View } from 'react-native';
import Entete from '../Components/Entete';
import Programmation from '../Components/Programmation';
import Bouton from '../Components/Bouton';
import NouvelleG from '../Components/NouvelleG';
import Map from '../Components/Map';

const Homescreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: 'center' }}>
      <Entete />
      <Programmation />
      <NouvelleG />
      <Map />
      <Bouton />
    </View>
  );
};

export default Homescreen;

