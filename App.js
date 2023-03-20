/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import ListParkingScreen from './screens/ListParkingScreen';
import DetailScreen from './screens/DetailsScreen';
import loginScreen from './screens/loginScreen';
import signUpScreen from './screens/signUpScreen';
import { ApplicationProvider } from '@ui-kitten/components';
import TestScreen from './screens/Test';
import AcceuilScreen from './screens/AcceuilScreen';
import QRScreen from './screens/QRScreen';
import Test from './screens/Test';
import HomeScreenn from './screens/HomeScreenn';
import SplashScreen from './screens/SplashScreen'; 
import ListScreen  from './screens/Admin/ListScreen';
import AddParkingScreen from './screens/Admin/AddParkingScreen'; 
import { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
const Stack=createNativeStackNavigator() ;

const App = () => { 

  return (
    
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen  name="Splash" component={SplashScreen}  options={{ headerShown: false }}/> 
    <Stack.Screen  name="Login" component={loginScreen} options={{ headerShown: false }}/> 
    { /* <Stack.Screen name="Homeee" component={HomeScreenn}/> */ }
     <Stack.Screen name="Home" component={AcceuilScreen} 
     /> 
     <Stack.Screen name="ListAdmin" component={ListScreen} options={{ title:"Administrator access" }}/> 
   { /*<Stack.Screen name="Test" component={Test}/> */ }  
     <Stack.Screen name="ListParking" component={ListParkingScreen}/> 
     <Stack.Screen name="SignUp" component={signUpScreen}/>
     <Stack.Screen name="Details" component={DetailScreen}/>
     <Stack.Screen name="qrcode" component={QRScreen} options={{ headerShown: false }}/>
     <Stack.Screen name="AddParking" component={AddParkingScreen} options={{ title:"Add parking" }}/>

  </Stack.Navigator> 
  
   </NavigationContainer> 
 
  );
};

export default App ;

