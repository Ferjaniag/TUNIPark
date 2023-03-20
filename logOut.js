import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation  } from '@react-navigation/native' 

import { firebase } from '@react-native-firebase/auth';

const logOut=()=>{
    const navigation=useNavigation() ; 
    firebase.auth().signOut().then(
        navigation.navigate("Home")
  )
}

export default logOut ;

const styles = StyleSheet.create({})