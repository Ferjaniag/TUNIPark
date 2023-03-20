
import { View,StyleSheet} from 'react-native';
import React from 'react';
import { TimeDatePicker, Modes } from "react-native-time-date-picker"; 
import { useState } from 'react';
import moment from 'moment';
import { ApplicationProvider, Layout,Button, Input, Text,Card,Modal, Select, IndexPath,SelectItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AppNavigator } from '../composants/ButtomNavigation';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { firebase } from '@react-native-firebase/firestore'; 
import QRCode from 'react-native-qrcode-svg';


const DetailScreen = () => {

  const route=useRoute();
const variableTime= route.params.du +" "+ route.params.time ;
  useEffect(() => {
    console.log("date",variableTime)
    
  }); 
  const navigation=useNavigation() ;
  const [visible, setVisible] = React.useState(false);

  const addReservation = () => {
   const qr = Math.random().toString(36).substring(2, 15)  ;
    firebase.firestore()
      .collection('reservations')
      .add({
       
        date: route.params.dat,
        duration: route.params.opt ,
        time : variableTime , 
        identifiantQrCode:  qr  
      }) 
      .then(() => {
       navigation.navigate("qrcode",{
        code :  qr 

       })  
      })
      .catch((error) => {
        // Il y a eu un problème lors de l'ajout du document
      });
  };

    return (
      <ApplicationProvider {...eva} theme={eva.light}>  
        <Text style={styles.title} category='h4'> Reservation details </Text>
  <Layout style={styles.header} >
      <LottieView   source={require("../assets/bookingDetails.json")} autoPlay loop
resizeMode="stretch"
/> 
</Layout>
      <Layout style={styles.container}>
       <Text style={styles.text} category='label'>Reservation for </Text>
       <Text style={styles.text} >  {route.params.dat} At { route.params.du} {route.params.time} </Text>
       <Text style={styles.text} category='label'> Duration </Text> 
       <Text style={styles.text} >{route.params.opt} </Text>
       <Text style={styles.text} category='label'>Reservation on parking </Text> 
       <Text style={styles.text} > {route.params.adrs} </Text>
       <Button style={styles.button} appearance='ghost' status='primary' onPress={addReservation}>
      Booking
    </Button>
    <Button style={styles.button}  appearance='ghost' status='success'>
      Pass to payment
    </Button>

    <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
        <Text style={styles.title} category='h5'> Awesome </Text>  
    {/*  <LottieView   source={require("../assets/confirmation.json")} autoPlay loop
resizeMode="stretch"
    />  */ }

        <Text style={styles.text} > Your booking has been confirmed.</Text>
          <Button onPress={() => setVisible(false)}>
            Ok
          </Button>
        </Card>
      </Modal>

       </Layout>
      
      </ApplicationProvider>
    )
  }
  const styles = StyleSheet.create({
      text: {
        margin:5
      },
      title:{ marginRight: 50,
          paddingTop:15,
          alignContent:"center" ,
          alignItems:"center"

      },
      container:{
        alignItems:"center" ,
        paddingTop:15, 
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
      },

  })
  export default DetailScreen ;