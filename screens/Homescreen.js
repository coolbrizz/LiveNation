import About from '../Components/About';
import Map from '../Components/Map';
import Programmation from '../Components/Programmation';
import Bouton from '../Components/Bouton';
import Entete from '../Components/Entete';
import NouvelleG from '../Components/NouvelleG';
import React from 'react';
import {View } from 'react-native';

const Homescreen = () => {

    return (
<View style={{flex: 1,backgroundColor : "#fff",alignItems : 'center',}}>
<Entete />
<About />
<Programmation/>
<NouvelleG />
<Map /> 
<Bouton />
</View> 
)};

export default Homescreen;