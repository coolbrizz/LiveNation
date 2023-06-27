import React , {useRef}from "react";
import { Text, View, ScrollView, Animated} from 'react-native';
import style from '../config/Style'

export default class Programmation extends React.Component{
    render(){

    //  axios   http://localhost/LiveNation/wp-json/tribe/events/v1/events
return(
    <View style={{width : 400 , height : 240}}>
        <View style ={style.titre}>
            <Text style= {style.titreProgrammation}>Programmation</Text>
            <Text style ={style.date}>Aujourd'hui : Vendredi 25 avril</Text>
        </View>
        <View style = {style.progCharger}>
        <Text >Scène 6 : Les blinders</Text>  
        <Text>---------&gt;</Text>
        <Text style={{fontWeight: 'bold'}}> 20h30</Text>
        </View>
        <View style = {style.progCharger}>
        <Text >Scène 6 : Les blinders</Text>  
        <Text>---------&gt;</Text>
        <Text style={{fontWeight: 'bold'}}> 20h30</Text>
        </View>
        <View style = {style.progCharger}>
        <Text >Scène 6 : Les blinders</Text>  
        <Text>---------&gt;</Text>
        <Text style={{fontWeight: 'bold'}}> 20h30</Text>
        </View>
        <View style = {style.progCharger}>
        <Text >Scène 6 : Les blinders</Text>  
        <Text>---------&gt;</Text>
        <Text style={{fontWeight: 'bold'}}> 20h30</Text>
        </View>
    </View>
    )}}
