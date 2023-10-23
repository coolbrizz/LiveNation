import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Style from '../config/Style'

const FiltMap = ({onSendData}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const scene = ["Toilettes", "Scène" , "Shop", "Buvette"]
  const [arrayChoice , setArrayChoice ]= useState([]);


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
            <TouchableOpacity onPress={closeFilter}>
              <Text style={Style.textButtonFilter}>FILTRE : </Text>
            </TouchableOpacity>
          <View style={{flexDirection : "row", padding : 10}}>
          {scene.map((lieu) =>
              <TouchableOpacity key={lieu} onPress={() =>handleCheckBoxChange(lieu)}>              
                      <Text style={[Style.filtreNonChoisi, arrayChoice.includes(lieu) && Style.filtreChoisi]}>{lieu} </Text>
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