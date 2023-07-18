import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Entete from '../Components/Entete';
import Programmation from '../Components/Programmation';
import Bouton from '../Components/Bouton';
import NouvelleG from '../Components/NouvelleG';
import Map from '../Components/Map';

import Maponglet from '../screens/Maponglet';
import Faq from '../screens/Faq';
import Informations from '../screens/Informations';
import Partenaires from '../screens/Partenaires';
import Programmescreen from '../screens/Programmescreen';
import Reseaux from '../screens/Reseaux';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="informations" component={Informations} />
//       <Drawer.Screen name="programmation" component={Programmescreen} />
//       <Drawer.Screen name="faq" component={Faq} />
//       <Drawer.Screen name="map" component={Maponglet} />
//       <Drawer.Screen name="reseaux" component={Reseaux} />
//       <Drawer.Screen name="partenaires" component={Partenaires} />
//     </Drawer.Navigator>
//   );
// }

const Homescreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: 'center' }}>
      {/* <NavigationContainer>
        <MyDrawer />
      </NavigationContainer> */}
      <Entete />
      <Programmation />
      <NouvelleG />
      <Map />
      <Bouton />
    </View>
  );
};

export default Homescreen;

