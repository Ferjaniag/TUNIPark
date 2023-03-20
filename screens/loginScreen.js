import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Button,
  Image,

  Alert
} from 'react-native';
import { authentification } from '../firebase';

import { signInWithEmailAndPassword} from 'firebase/auth' ;
import { useEffect, useState } from 'react';

import { AppStyles } from '../AppStyles';
import { useNavigation } from '@react-navigation/native';



 const loginScreen = () => { 
  const [isSignedIn, setIsSignedIn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation=useNavigation() ;


  const SignUser=() => {
    signInWithEmailAndPassword(authentification,email,password).
    then(userCredentials => {
const user=userCredentials.user; 
console.log("login in with ",user.email) ; 
if (user.email==="admin@gmail.com") 
navigation.navigate("ListAdmin") ;
else navigation.navigate("Home") ;

    })
.catch(error => alert(error.message))
  }
  return (
  
    <View  style={styles.container}>  
   <View style={styles.logoco}>
    <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
    />
     <Text style={styles.txt}> TuniPark </Text>
     </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail or phone number"
         onChangeText={setEmail} 
          value={email} 
          placeholderTextColor={AppStyles.color.grey} 
          underlineColorAndroid="transparent"
        /> 
        </View>

        <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
         secureTextEntry={true} 
          placeholder="Password"
         onChangeText={setPassword}
          value={password} 
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity
                    onPress={SignUser}
                    style={[styles.loginContainer]}
                > 
                    <Text style={[styles.loginText]}>Sign In</Text>
                </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[styles.loginContainer]}
                > 
                    <Text style={[styles.loginText]}>Sign Up</Text>
                </TouchableOpacity>



    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  txt :{
    fontWeight: 'bold',
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
    width: 192,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleContainer: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
  googleText: {
    color: AppStyles.color.white,
  },
  logo:{
    width:50 , 
    height:70 
   
  } , 
  logoco :{
    paddingTop:40, 
    alignItems:"center" , 
  }
});

export default loginScreen ; 

