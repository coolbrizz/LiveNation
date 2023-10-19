import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Style from '../config/Style'

const FiltMap = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false)
  const scene = ["Toilettes", "Scène" , "Shop", "Buvette"]

const openFilter = () =>{
setIsFilterOpen(true)
};
const closeFilter = () =>{
  setIsFilterOpen(false)
};
const handleCheckBoxChange = () => {
  setCheckBoxValue(!checkBoxValue);
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
              <TouchableOpacity onPress={handleCheckBoxChange}>              
                      <Text style={{margin : 10, fontSize : 18}}>{lieu} </Text>
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