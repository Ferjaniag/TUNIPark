import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TextInput from 'react-native';
import LottieView from 'lottie-react-native';
import { AppStyles } from '../AppStyles';

import {
  ApplicationProvider,
  Button,
  Icon,
  Input,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva'; 
import { useNavigation } from '@react-navigation/native';

const StarIcon = (style) => (
   <Icon {...style} name='facebook'/>
 );

const SplashScreen = () => {

    const navigation=useNavigation() ;
  return (
    <ApplicationProvider {...eva} theme={eva.light}> 
<Layout style={styles.container} > 
 
 <View style={styles.header}> 

 <LottieView style={styles.logo}  source={require("../assets/findparking.json")} autoPlay loop

resizeMode="stretch"

/> 
 
 </View>
 <View style={styles.footer}> 
 <Text style={styles.title}> Parking on time with 
  <Text style={styles.title2} > complete peace of mind ! </Text>   </Text>
 <Text style={styles.text}> Log in with an account  </Text> 
<View style={styles.button}>
 <Button   onPress={() =>
        navigation.navigate('Login')
      }
       style={styles.signIn} status='primary' icon={StarIcon}>Login</Button>
 </View>
         
     

 </View>

 

</Layout>
</ApplicationProvider>

  );
};

const {height}= Dimensions.get("screen") ; 
const height_logo= height* 0.28 ;
const styles = StyleSheet.create({
 container : {
    flex:1, 
    backgroundColor:'#DCDCDC'
 }, 
 header : {
    flex:2 ,
    justifyContent:'center' , 
    alignItems: 'center' 
 }, 
 footer : {
    flex : 1 ,
    backgroundColor: '#fff' ,
    borderTopLeftRadius: 30,
    borderTopRightRadius:30, 
    paddingVertical: 50, 
    paddingHorizontal: 30

 }, 
 logo: {
    borderRadius:150 ,
    width: height_logo,
    height: height_logo 
 }, 
 title: {
    color : '#05375a' ,
    fontSize: 30, 
    fontWeight: 'bold' ,
  

 }, 
 title2: {
 color: AppStyles.color.tint, 
   fontSize: 30, 
   fontWeight: 'bold' ,
 

},
 button:{
   margin:8 ,
   paddingLeft: 140
 },
 text : {
    color :'grey' , 
    marginTop: 15  
 }, 
 signIn :{
  
    width:150, 
    height : 45, 
    justifyContent:'center' , 
    alignItems:'center',
    borderRadius:50, 
    flexDirection: 'row-reverse',
 }, 
 textSign: {
    color:'white' , 
    fontWeight:'bold' ,
 }






} );

export default SplashScreen;