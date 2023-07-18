import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Maponglet from './screens/Maponglet';
import Homescreen from './screens/Homescreen';
import Faq from './screens/Faq';
import Informations from './screens/Informations';
import Partenaires from './screens/Partenaires';
import Programmescreen from './screens/Programmescreen';
import Reseaux from './screens/Reseaux';
import Bouton from './Components/Bouton';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation initialRouteName="Homescreen">
//       <Drawer.Screen name="informations" component={Informations} />
//       <Drawer.Screen name="programmation" component={Programmescreen} />
//       <Drawer.Screen name="faq" component={Faq} />
//       <Drawer.Screen name="map" component={Maponglet} />
//       <Drawer.Screen name="reseaux" component={Reseaux} />
//       <Drawer.Screen name="partenaires" component={Partenaires} />
//       <Drawer.Screen name="bouton" component={Bouton} />
//     </Drawer.Navigator>
//   );
// }

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Map" component={Maponglet} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App