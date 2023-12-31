const  rouge = '#fe0122'
const gfoncé = '#000000'

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
        backgroundColor: rouge,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#28292b',
        borderWidth : 1,
      },
      bouton : {
        width : 420, 
        height : 60, 
        backgroundColor: gfoncé,
        justifyContent : 'center',
        alignItems : 'center',
         
      },
      boutonText : {
        color :rouge,
        fontSize : 40,
      },
      titreProgrammation : {
        fontSize : 30,
        color : '#252a34',
        paddingTop : 5,
        textAlign : 'center', 
        fontWeight :'bold',
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
      },
      titleFaq : {
        fontWeight : 'bold' ,
         fontSize : 20, 
         textAlign :'center',
          padding : 10, 
          color : rouge,
      },
      text : {
        color : 'black',
      },
      styleProgrammation :{
        width: "90%",
        padding: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#fe0122',
        margin: 6,
        
      },
      titreGroup :{
        fontSize : 20,
        fontWeight : 'bold',
        color : rouge,
      }, 
      buttonFilter : {
        backgroundColor : 'red',
        left : 10,
        zIndex : 80,
        paddingTop: 10, 
    paddingLeft: 20,
    paddingBottom: 10, 
    paddingRight: 20,
    borderRadius : 10,
      },
      textButtonFilter : {
        color : 'white', 
        fontWeight : 'bold', 
        fontSize : 18
      },
      caseFilter : {
        position : 'absolute', 
      top : 100,
      left : 10,
      zIndex : 80,
      },
      buttonFilterOpen : {
        backgroundColor : 'red',
        left : 10,
        zIndex : 85,
        paddingTop: 10, 
    paddingLeft: 20,
    paddingBottom: 10, 
    paddingRight: 20,
    borderRadius : 10,
    width : '100%',
    height : 100,
      }, 
      filtreNonChoisi : {
        margin : 10, 
        fontSize : 18, 
        color : 'white',
        fontWeight : 'bold',
        textDecorationLine:'none'
      },
      filtreChoisi :{
        color : 'black', 
        textDecorationLine: 'line-through',
        margin : 10, 
        fontSize : 18, 
        fontWeight : 'bold',
      }



}