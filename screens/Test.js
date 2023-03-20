import { View,TextInput, Text, Button, ImageBackground, StyleSheet, Dimensions,
  
  ListView, Image, Animated, TouchableOpacity } from 'react-native';
import { AppStyles } from '../AppStyles';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/firestore';
import MapView, { Callout, Marker,CalloutSubview } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { ApplicationProvider } from '@ui-kitten/components';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

/* const [parkings,setParkings]=useState([]) ; */

; 
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const Test = (route) => {
  const [locations,setLocations]=useState([]) ;
   
    /*firebase.firestore().collection("locations").get().then(querySnapshot => {
     querySnapshot.docs.map(doc => {
      /* console.log("donne adr: ",doc.data) */
    /*  locationss.push(doc.data()) ;
    /*  console.log("log1: ",doc.data()) ; */
/*   locationss.map(data => {
    console.log("adress",data.adresse) ;
    console.log("coordinate lattitude",data.coordinates.latitude) ;
    console.log("coordinate longitude",data.coordinates.longitude) ;
   }) */ 
      
   useEffect(() => {
    firebase.firestore()
      .collection('locations')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        data.map(d=>{
          console.log("coordinates latitude",d.coordinates.latitude)
          console.log("coordinates longitutde",d.coordinates.longitude)


          console.log("coordinates",d.adresse)


        })
        setLocations(data);

      }) ;
  }, []);
  
    
    


 
  
  const [pin,setPin]= React.useState({
    latitude: 36.881100,
    longitude: 10.325990
  }) 
  const [data,setData]=useState([]) ;
  const navigation=useNavigation() ;
 /*  const { state} = navigation.setParams(); */
    return (
    <View style={{marginTo:30, flex:1}}> 
<Text> duration
  
</Text>
    <MapView style={styles.map}
    initialRegion={{
      /*latitude: 36.806496,
      longitude: 10.181532,
      latitudeDelta: 0,
      longitudeDelta: 0.05,  */ 
      latitude: 36.806496,
      longitude: 10.181532,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}

    provider="google"
    > 
  
    { locations.map( (marker,index) => (
     
      <Marker
      coordinate={{
        latitude: marker.coordinates.latitude,
      longitude:marker.coordinates.longitude
      }}
    /*  image={require('../assets/marker.png') 
       } */
      >
        <Callout 
       onPress={()=> navigation.navigate("Details")}
        >
        <View style={styles.card} key={index} >

<Image 
source={marker.image}
style={styles.cardImage}
resizeMode="cover"
/>
<View style={styles.textContent}>
<Text style={styles.cardtitle}> {marker.title} </Text>
<Text style={styles.cardAdress}> {marker.adresse} </Text>
<Text style={styles.cardDescription}> {marker.description} </Text>
<Text style={styles.cardDescription}> Capacity: {marker.capacity} </Text>

</View>

<View style={styles.button} >
{/* <TouchableOpacity 
onPress={() => (navigation.navigate("Details"))}
style={[styles.signIn,{
borderColor:"#808080"
}]}
>
<Text style={[styles.textSign,{
  color:"#808080"
}]}> Booking now </Text> 



</TouchableOpacity> */} 


<Button title="Booking"
            onPress={()=> navigation.navigate("Details")}
            />
           
</View>

</View>
        </Callout>
      </Marker>
       
    )

    )}
  
     </MapView>

     {/*
 <Animated.ScrollView
horizontal
scrollEventThrottle={1}
showsHorizontalScrollIndicator={false}
style={styles.scrollView}
pagingEnabled
snapToInterval={ CARD_WIDTH + 20}
snapToAlignment="center"



>
  {locations.map((marker,index)=>(

<View style={styles.card} key={index}>

  <Image
  source={marker.image}
  style={styles.cardImage}
  resizeMode="cover"
  />
  <View style={styles.textContent}>
<Text style={styles.cardtitle}> {marker.title} </Text>
<Text style={styles.cardAdress}> {marker.adresse} </Text>
<Text style={styles.cardDescription}> {marker.description} </Text>
<Text style={styles.cardDescription}> Capacity: {marker.capacity} </Text>


  </View>

  <View style={styles.button} >
  <Button title="Booking"
            onPress={()=> navigation.navigate("Details")}
            />
{/*<TouchableOpacity 
onPress={()=> navigation.navigate("Details")}
style={[styles.signIn,{
  borderColor:"#808080"

}]}

>
  <Text style={[styles.textSign,{
    color:"#808080"
  }]}> Booking now </Text>

</TouchableOpacity> 

  </View>

</View>



  ))}

  
</Animated.ScrollView> */ }



    </View>
        
      
    )
  } 
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main,
    }, 
    body: {
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text,

    }, 
    date : {
      height: 42, 
      paddingTop:20 ,
      paddingLeft: 20,
      paddingRight: 20,
      color: '#000000' ,
    },
    img: {
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center'
    },
    map: {
      width: Dimensions.get('window').width ,
      height:Dimensions.get('window').height

  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  cardAdress:{
fontSize:12,
color:"#808080"
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '95%',
      padding:5,
 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3, 
      borderWidth:1
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  }
   
  }) 
  export default Test;