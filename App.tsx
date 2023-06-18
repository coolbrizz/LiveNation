import React from 'react';
import { Linking,
    View, 
    Text,
    Image, 
    TouchableOpacity } from 'react-native';
import About from './Components/About';
// import Programmation from './Components/Programmation';
import Map from './Components/Map';
import style from './Components/Style';
import Programmation from './Components/Programmation';
import Bouton from './Components/Bouton';
import Entete from './Components/Entete';

const App = () => {

    const retourAccueil = () =>{
        Linking.openURL('')
    }
return (
<View style={{flex: 1,backgroundColor : "#fff",alignItems : 'center',}}>
<Entete />
<About />
<Programmation/>
<Map /> 
<Bouton />
</View>
);
};

export default App;







