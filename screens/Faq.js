import { View, Text,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import Style from '../config/Style'
import Entete from '../Components/Entete'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet} from 'react-native';

const Faq = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollViewRef = useRef(null); // Declare the ref using useRef

  const handleScroll = event => {
    const currentPosition = event.nativeEvent.contentOffset.y;
    setScrollPosition(currentPosition);
  };

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };
  return (
    <View>
      <Entete />
      <Text style={Style.titleFaq}>Foire aux Questions</Text>
      <ScrollView
        ref={scrollViewRef} // Pass the ref to the ScrollView component
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
      <View style={{padding : 10, }}>
      <Text style ={{fontWeight : 'bold', margin : 5, color : '#000000'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</Text> 
       <Text> Cupiditate, nostrum ducimus! Eveniet minima possimus sunt sit debitis! Qui dolore expedita at sequi quisquam blanditiis dignissimos vitae sit debitis! Ut deleniti harum iure nobis soluta minima sapiente neque iste explicabo veritatis, officia modi. Mollitia molestiae minus vitae, itaque numquam dolore iste, perferendis, impedit sit beatae dolorum. Dicta, doloribus est alias quis harum totam culpa. Consequuntur omnis repellat odio laudantium nesciunt cum. Consectetur cumque perferendis tempore, ducimus quod facere tempora totam doloremque nihil, possimus ut quasi nam error sit maiores officia odit facilis sunt dolores mollitia eligendi, sequi provident ea. Eaque, aspernatur.
      </Text>
      </View>
      <View style={{padding : 10}}>
      <Text style ={{fontWeight : 'bold', margin : 5, color : '#000000'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</Text> 
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis nisi laborum cumque, id illum. Asperiores obcaecati quisquam minus reprehenderit tenetur qui deserunt doloribus praesentium voluptas maxime provident perferendis quibusdam, rerum et sint esse nemo atque quidem recusandae ut repellat! Mollitia quaerat quas exercitationem ad non, atque in ea doloremque.
      </Text>
      </View>
      <View style={{padding : 10, }}>
      <Text style ={{fontWeight : 'bold', margin : 5, color : '#000000'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</Text> 
       <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ratione. Architecto adipisci laudantium, dolorem blanditiis reiciendis, voluptate, voluptates fugiat exercitationem nemo corrupti perspiciatis. Obcaecati fuga repudiandae enim corporis libero id!
      </Text>
      </View>
      <View style={{padding : 10}}>
      <Text style ={{fontWeight : 'bold', margin : 5, color : '#000000'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</Text> 
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis nisi laborum cumque, id illum. Asperiores obcaecati quisquam minus reprehenderit tenetur qui deserunt doloribus praesentium voluptas maxime provident perferendis quibusdam, rerum et sint esse nemo atque quidem recusandae ut repellat! Mollitia quaerat quas exercitationem ad non, atque in ea doloremque.
      </Text>
      </View>
      <View style={{padding : 10}}>
      <Text style ={{fontWeight : 'bold', margin : 5, color : '#000000'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</Text> 
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis nisi laborum cumque, id illum. Asperiores obcaecati quisquam minus reprehenderit tenetur qui deserunt doloribus praesentium voluptas maxime provident perferendis quibusdam, rerum et sint esse nemo atque quidem recusandae ut repellat! Mollitia quaerat quas exercitationem ad non, atque in ea doloremque.
      </Text>
      </View>
      <View style={{padding : 10, }}>
      <Text style ={{fontWeight : 'bold', margin : 5, color : '#000000',}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</Text> 
       <Text style ={{paddingBottom : 200}}> Cupiditate, nostrum ducimus! Eveniet minima possimus sunt sit debitis! Qui dolore expedita at sequi quisquam blanditiis dignissimos vitae sit debitis! Ut deleniti harum iure nobis soluta minima sapiente neque iste explicabo veritatis, officia modi. Mollitia molestiae minus vitae, itaque numquam dolore iste, perferendis, impedit sit beatae dolorum. Dicta, doloribus est alias quis harum totam culpa. Consequuntur omnis repellat odio laudantium nesciunt cum. Consectetur cumque perferendis tempore, ducimus quod facere tempora totam doloremque nihil, possimus ut quasi nam error sit maiores officia odit facilis sunt dolores mollitia eligendi, sequi provident ea. Eaque, aspernatur.
      </Text>

      </View>
      </ScrollView>
      {scrollPosition > 0 && (
        <TouchableOpacity onPress={scrollToTop} style={styles.scrollToTopButton}>
          <Icon name="arrow-up" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  scrollToTopButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    padding: 100,
  },
});
export default Faq