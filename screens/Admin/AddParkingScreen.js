import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ApplicationProvider, Layout,Button, Input, Text,Card,Modal, SelectItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useState } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../AppStyles';
import { firebase } from '@react-native-firebase/firestore';
export default function AddParkingScreen() {
    const navigation=useNavigation() ;
    const [titlee,setTitle]=useState();
    const [descriptionn,setDescription]=useState() ;
    const [adress,setAdress]=useState() ;
   const [latitudee,setLatitudee]=useState() ;
    const [longitudee,setLongitudee]=useState() ; 
    const [capacityy,setCapacity]=useState() ;
    const [visible, setVisible] = React.useState(false);
    
/*    const [coordinates,setCoordinates]= useState({ latitude:' ', longitude : ' '}) ;  */
 /*   const addParking = () => {
     
     console.log("latitude",latitudee) ; 
     console.log("longitude",longitudee) ; 
     
    } ;   */
   
   const addParking = () => {
        firebase.firestore()
          .collection('locations')
          .add({
           adresse: adress ,
           capacity: capacityy,
           title : titlee ,
           description: descriptionn,
           latitude : latitudee ,
           longitude : longitudee
          })
          .then(() => {
            // Le document a été ajouté avec succès
            setVisible(true)
          })
          .catch((error) => {
            // Il y a eu un problème lors de l'ajout du document
          });
      };  
      
  return (
    <ApplicationProvider {...eva} theme={eva.light}>  
    <Layout style={styles.header} >
      <LottieView   source={require("../../assets/addParking.json")} autoPlay loop
resizeMode="stretch"
/> 
</Layout>
    <View style={{backgroundColor:"#ffffff"}}>
      <View style={styles.buttons}> 
        <Input 
      value={titlee}
      label='Title'
      placeholder='Place your Text' 
      onChangeText={nextValue => setTitle(nextValue)}
    /> 
      <Input 
      value={adress}
      label='Adresse'
      placeholder='Place your Text' 
      onChangeText={nextValue => setAdress(nextValue)}
    /> 
    </View> 
    <View style={styles.coordinates}>
    <Input
        value={descriptionn}
        label='Description'
        textStyle={{ minHeight: 46 }}
        placeholder='Put your description'
        onChangeText={nextValue => setDescription(nextValue)}
      />
       <Input
      value={capacityy}
      label='Capacity'
      placeholder='Place your Text'
      onChangeText={nextValue => setCapacity(nextValue)}
    /> 
    </View>
      
      <Text style={styles.titlec} > Coordinates </Text> 
      <View style={styles.coordinates}>
      <Input
      value={latitudee}
      label='Latitude'
      placeholder='Place your Text'
    onChangeText={nextValue => setLatitudee(nextValue) }
    /> 
<Input
      value={longitudee}
      label='Longitude'
      placeholder='Place your Text'
      onChangeText={nextValue => setLongitudee(nextValue)}
    /> 
      </View> 
      <View style={styles.buttons}>
      
          <Button onPress={() =>navigation.navigate('ListAdmin') }>
            Back
          </Button>
          <Button onPress={addParking}>
            Add
          </Button>
          </View>
    </View> 
    <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
        <Text style={styles.title} category='h5'> Awesome </Text>  
    {/*  <LottieView   source={require("../assets/confirmation.json")} autoPlay loop
resizeMode="stretch"
    />  */ }

        <Text style={styles.text} > Your parking has been added.</Text>
          <Button onPress={() => setVisible(false)}>
            Ok
          </Button>
        </Card>
      </Modal>
    </ApplicationProvider>
  )
}
const styles = StyleSheet.create({

    title: { marginRight: 50,
        paddingTop:15,
        alignContent:"center" ,
        alignItems:"center"
    
    }, 
    titlec :{
        fontSize: 15, 
   fontWeight: 'bold' ,
    },
      ajouter: {
      marginLeft: 250 ,  
      paddingTop: 20, 
     alignItems:"flex-end" ,
     justifyContent:"flex-end" ,
     width: 100
      },
      coordinates:{
        flexDirection: 'row',
        justifyContent:"space-evenly"
      }, 
      buttons:{
        flexDirection: 'row', 
        justifyContent:"space-evenly"
      },
      header : {
        flex:2 ,
        justifyContent:'center' , 
        alignItems: 'center' 
     }, 
     backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems:"center" ,
      alignContent:"center"
    }
})