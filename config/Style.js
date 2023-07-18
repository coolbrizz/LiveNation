const  bclair = '#4ae8d4'
const gfoncé = '#28292b'

export default {

    notif :{
        width : 420, 
        height : 60, 
        backgroundColor: 'red',
        justifyContent : 'center',
        alignItems : 'center',
        fontWeight: 'bold'
      },
      notifGeneral: {
        width : 420, 
        height : 30, 
        backgroundColor: bclair,
        justifyContent : 'center',
        alignItems : 'center',
      },
      messageUrgent :{
        color : 'white',
        justifyContent : 'center',
         alignItems :'center',
          padding : 5,
          fontWeight: 'bold',
          fontSize : 20,
          textAlign : 'center',
      },
      bouton : {
        width : 420, 
        height : 60, 
        backgroundColor: gfoncé,
        justifyContent : 'center',
        alignItems : 'center', 
      },
      boutonText : {
        color :bclair,
        fontSize : 40,
      },
      titreProgrammation : {
        fontSize : 30,
        color : '#252a34',
        paddingTop : 5,
      },
      titre :{
        alignItems : 'center',
        justifyContent : 'center',
      },
      date : {
        fontSize : 15,
        color : '#252a34',
        paddingTop : 10,
        paddingBottom : 5,
      },
      progCharger : {
        flexDirection : "row",
        justifyContent : 'space-between',
        padding : 10,
        paddingLeft : 30,
        paddingRight : 30,
      }

}