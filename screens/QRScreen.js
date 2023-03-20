import { View,StyleSheet} from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import LottieView from 'lottie-react-native';
import { ApplicationProvider, Text,Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const QRScreen = () => {
  
    const route=useRoute(); 
  const navigation=useNavigation() ;

    const qrCode= route.params.code ;
    return (
      <ApplicationProvider {...eva} theme={eva.light}> 
     
    <View style={styles.container}>
    <Text style={styles.title} category='h5'> Awesome </Text>  
    <Text style={styles.text} category='s1'> Your booking has been confirmed </Text> 
  
<Text style={styles.textQr} category='p1'> Qrcode identifier for your reservation </Text> 
   <View style={styles.qcode}>

    <QRCode 
           value={qrCode}
           size={100}
           color="black"
           backgroundColor="white"
         />  
         </View>
         <Button style={styles.button} appearance='outline' status='info' onPress={()=> navigation.navigate("Home")}>
      Back
    </Button>
    </View> 
    <View style={styles.confirmer}>
    <LottieView   source={require("../assets/confirmation.json")} autoPlay loop
resizeMode="stretch"
/> 
</View>
    </ApplicationProvider>
    );
    };
    const styles = StyleSheet.create({
      qcode :{
        alignItems:"center" ,
        paddingTop: 10 ,
        paddingBottom:10
      } , 
      confirmer: {
        flex:2 , 
        justifyContent:'center' , 
        alignItems: "center" , 
        paddingTop: 150
      } , 
      button:{
    width: 140
      },
      container :{
        backgroundColor:"#FFFFFF" , 
        paddingTop:30 ,
        alignItems:"center" , 
      } ,
      textQr :{
        paddingTop: 20
      }
    }) 

  export default QRScreen  ;