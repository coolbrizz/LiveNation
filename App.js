import { StyleSheet} from 'react-native';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Maponglet from './screens/Maponglet';
import Homescreen from './screens/Homescreen';
import Faq from './screens/Faq';
import Informations from './screens/Informations';
import Partenaires from './screens/Partenaires';
import Programmescreen from './screens/Programmescreen';
import Reseaux from './screens/Reseaux';
import Group from './screens/Group';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Homescreen" 
      screenOptions={{drawerActiveTintColor :'#fe344e', 
      headerPressColor: '#fe344e',
      drawerInactiveTintColor : '#ffffff', 
      drawerStyle: {
        backgroundColor: '#000000',
        width: 200,
      },
      headerStyle :{
        backgroundColor: '#000000',
        height : 30,
      },
      headerTintColor: '#ffffff', 
      }}>
        <Drawer.Screen name="Menu" component={Homescreen} />
        <Drawer.Screen name="Informations" component={Informations} />
        <Drawer.Screen name="Partenaires" component={Partenaires} />
        <Drawer.Screen name="Programme" component={Programmescreen} />
        <Drawer.Screen name="Map" component={Maponglet} />
        <Drawer.Screen name="Réseaux" component={Reseaux} />
        <Drawer.Screen name="Foire aux questions" component={Faq} />
        <Drawer.Screen name="Group" component={Group}  options={{ titleShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});