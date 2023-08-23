import { View, Text, Image } from 'react-native'
import React from 'react'
import Entete from '../Components/Entete'
import Bouton from '../Components/Bouton'

const Partenaires = () => {
  return (

    <View style={{flex : 1}}>
          <Entete />
          <View style={{flex : 1 ,
            paddingTop : 15,
            alignContent : 'center'
           }}>
            <View style={{ flexDirection: 'row',flex :1,padding: 1, alignSelf : 'center' }}>
          <Image source={require('../Images/logo_label1.jpg')} style={{ width: "45%", height: "90%" ,padding : 10,margin : 5,borderRadius: 10}}  />
          <Image source={require('../Images/logo_label2.jpg')} style={{ width: "45%", height: "90%" ,padding : 10,margin : 5,borderRadius: 10}}   />
          </View>
          <View style={{ flexDirection: 'row', padding: 1 ,flex :1,alignSelf : 'center' }}>
          <Image source={require('../Images/logo_label3.jpg')} style={{ width: "45%", height: "90%" ,padding : 10,margin : 5,borderRadius: 10}}   />
          <Image source={require('../Images/logo_label4.jpg')} style={{ width: "45%", height: "90%" ,padding : 10,margin : 5,borderRadius: 10}}   />
          </View>
          </View>
          <Bouton />
    </View>
  )
}

export default Partenaires