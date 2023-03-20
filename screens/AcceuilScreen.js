
import { View,StyleSheet,TextInput} from 'react-native';
import React from 'react';
import { TimeDatePicker, Modes } from "react-native-time-date-picker"; 
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import SelectDropdown from 'react-native-select-dropdown';
import { ApplicationProvider, Layout,Button, Input, Text,Card,Modal, Select,Datepicker, IndexPath,SelectItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { SelectList } from 'react-native-dropdown-select-list';
import { useLayoutEffect } from 'react';
import { firebase } from '@react-native-firebase/auth';
const AcceuilScreen = () => {
  const navigation=useNavigation();  

  const [dure,setDure]=useState();
  const duration=[
    {key:"1 Hour",value:"1 Hour"},
    {key:"2 Hours",value:"2 Hours"},
    {key:"3 Hours",value:"3 Hours"},
    {key:"4 Hours",value:"4 Hours"},
  
  ] ; 
  const times=[
    {key:"AM", value:"AM"} ,
    {key:"PM", value:"PM"} ,
  ]
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [date, setDate] = useState(new Date())
  const [selectedDate,setSelectedDate]=useState(new Date()) ;
  const [selectedOption, setSelectedOption] = React.useState();
  const [selectedItem, setSelectedItem] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState(""); 

 
    return (
      <ApplicationProvider {...eva} theme={eva.light} >  
     <Layout style={styles.container}> 
       <Text style={styles.title} category='h4' > Make a reservation </Text>
<Layout style={styles.selectduration}>
       <Text category='h6'>
        Selected date: 
      </Text> 
     
      <Datepicker
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        
      /> 
      </Layout>
      <Layout style={styles.selectduration}>
       <Text category='h6'>
        Time 
      </Text>
      <Input
        style={styles.input}
        value={dure} 
        onChangeText={(text)=> setDure(text)}
        placeholder='12:00'
       /* onChangeText={nextValue => setValue(nextValue)} */
      />
       <SelectList 
         style={styles.input}
    data={times}
    setSelected={setSelectedTime}
    defaultOption={{key:"AM",value:"AM"}}

  />
      </Layout>
     <Layout style={styles.selectduration}>
     <Text style={styles.text} category='h6'> Duration </Text> 
  <SelectList 
    data={duration}
    setSelected={setSelectedItem}
    placeholder={" select duration "} 
    defaultOption={{key:"1 Hour",value:"1 Hour"}}

  />
    { /* <Select 
     style={styles.select}
     placeholder='Default' 
      selectedValue={selectedOption} 
      onValueChange={option => setSelectedOption(option)}
        selectedIndex={selectedIndex} 
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='1 Hours' value="1 Hours"/>
        <SelectItem title='2 Hours' value="2 Hours"/>
        <SelectItem title='3 Hours'/>
        <SelectItem title='4 Hours'/>
      </Select>  
    */}
      </Layout>
       
    {/*  <LottieView style={styles.lottie}  source={require("../assets/findparking.json")} autoPlay loop/> */ }
    
      <Button style={styles.button}  
    onPress={() => navigation.navigate('ListParking',{
      duree:dure , 
      datee: date.toLocaleDateString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short' , 
      
      }) , 
      option: selectedItem ,
      time: selectedTime
    })}>
      Look for parking 
    </Button>
      </Layout> 
      </ApplicationProvider>
    )
  }
  const styles = StyleSheet.create({
      text: {
        margin:5
      },
      select:{
        width:250,
      },
      title:{
          paddingTop:5,
          paddingBottom:10,
          alignContent:"center" , 
          color:"#696969"

      }, 
    
      lottie:{
       paddingTop:600,
       margin:20,
       alignContent:"center"
      }, 
      button:{
          color:"#00BFFF" ,
          alignItems: 'center',
          borderRadius: 5, 
          
          borderColor:"#00BFFF",
          borderWidth:1 , 
          paddingTop:10 , 
      },
      container:{
       margin:15,
       paddingTop:15,
     
      },  
      backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems:"center" ,
        alignContent:"center"
      },
      input: {
        margin: 15,
        width:200
      },
selectduration:{
  flexDirection: 'row',
}, 
logout: {
  marginLeft: 250 ,  
  paddingTop: 20, 
 alignItems:"flex-end" ,
 justifyContent:"flex-end" ,
 width: 100
  },
  })
  export default AcceuilScreen ;