
import React from 'react'
import { AppStyles } from '../AppStyles';
import { useState } from 'react'; 
import Button from '@ui-kitten/components';
import firestore from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'firebase/auth';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Image,
    Alert
  } from 'react-native';
import { authentification } from '../firebase';

const signUpScreen=()=> {
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation=useNavigation() ;
    const onRegister=() => {
      if (fullname=="") {
        alert("Please fill fullname") ;
      } else if (phone=="") {
        alert("Please fill phone") ;
      } else if (email=="") {
        alert("Please fill email") ;
      } 
    
        createUserWithEmailAndPassword(authentification,email,password).then((response)=>{
            const data={
                email:email ,
                fullname:fullname,
                phone:phone
            } ;
          /*  const user_uid=response.user.uid ;  */
            
            console.log("data:",data) ;
           /* firestore().collection('users').doc(user_uid).set(data).then(response=> {
                console.log("inscription reuisite") ;
            }).catch(error => alert(error.message)) */
            navigation.navigate("Login") ;

        }).catch(error => alert(error.message))
    }
  return (
    
    <View style={styles.container}>
  
       <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
       
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Full Name"
          onChangeText={setFullname}
          value={fullname}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        /> 
        </View>
        <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Phone Number"
          onChangeText={setPhone}
          value={phone}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail Address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>

     

      <TouchableOpacity
                    onPress={() =>onRegister()}
                    style={[styles.facebookContainer]}
                > 
                    <Text style={[styles.facebookText]}>Sign Up</Text>
                </TouchableOpacity>






    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: 'bold',
      color: AppStyles.color.tint,
      marginTop: 20,
      marginBottom: 20,
    },
    leftTitle: {
      alignSelf: 'stretch',
      textAlign: 'left',
      marginLeft: 20,
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: 'center',
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text,
    },
    loginContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30,
    },
    loginText: {
      color: AppStyles.color.white,
    },
    placeholder: {
      color: 'red',
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
    facebookContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30,
    },
    facebookText: {
      color: AppStyles.color.white,
    },
    logo:{
      width:50 , 
      height:70 
     
    } , 
    txt :{
      fontWeight: 'bold',
    },
    logoco :{
      paddingBottom:10, 
      alignItems:"center" , 
    }
  });

  export default signUpScreen ;