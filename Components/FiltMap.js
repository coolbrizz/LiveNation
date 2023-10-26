import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Style from '../config/Style'

const FiltMap = ({onSendData}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const scene = ["Toilettes", "Scène" , "Shop", "Buvette"]
  const [arrayChoice , setArrayChoice ]= useState(["Toilettes", "Scène" , "Shop", "Buvette"]);


const openFilter = () =>{
setIsFilterOpen(true)
};
const closeFilter = () =>{
  setIsFilterOpen(false)
};
const handleCheckBoxChange = (lieu) => {
  if (arrayChoice.includes(lieu)) {
    const updatedChoices = arrayChoice.filter((choice) => choice !== lieu);
    setArrayChoice(updatedChoices);
    onSendData(updatedChoices)
  } else {
    const updatedChoices = [...arrayChoice, lieu]
    setArrayChoice([...arrayChoice, lieu]);
    onSendData(updatedChoices)
  }
};
  return (
    <View style={Style.caseFilter}>
      {isFilterOpen ? (
        <View style={Style.buttonFilterOpen} >
            <TouchableOpacity style={{flexDirection : "row"}} onPress={closeFilter}>
              <Text style={Style.textButtonFilter}>FILTRE  </Text>
              <Text style={{color : "white",position : 'absolute', right : 5, fontWeight : "bold"}}> X </Text>
            </TouchableOpacity>
          <View style={{flexDirection : "row", padding : 10}}>
          {scene.map((lieu) =>
              <TouchableOpacity key={lieu} onPress={() =>handleCheckBoxChange(lieu)}>              
                      <Text style={[Style.filtreChoisi, arrayChoice.includes(lieu) && Style.filtreNonChoisi]}>{lieu} </Text>
              </TouchableOpacity>)}
           </View>
        </View>) : (
      <View style={Style.buttonFilter}>
        <TouchableOpacity onPress={openFilter}>
          <Text style={Style.textButtonFilter}>FILTRER  +</Text>
        </TouchableOpacity>
      </View>)}
    </View>
  )
}

export default FiltMap