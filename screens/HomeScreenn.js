import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react' ; 
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Duration from '../composants/duration';
import BottomNavigationAccessoriesShowcase  from '../composants/ButtomNavigation' ; 
import DatePicker from 'react-native-date-picker';
import { ApplicationProvider, Layout, Input, Select, IndexPath,SelectItem } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import SelectDropdown from 'react-native-select-dropdown';
import LottieView from 'lottie-react-native';

const HomeScreenn=()=> {
  const navigation=useNavigation();
  const { width, height } = Dimensions.get("window");
  const duration=["1 Hour","2 Hours","3 Hours","4 Hours","5 Hours"] ; 
  
  const CARD_HEIGHT = 220;
  const CARD_WIDTH = width * 0.8;
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
   
    <View style={styles.container}>
      <View style={styles.selectDate}>
    {/*   <TouchableOpacity onPress={() => setOpen(true)}> 
        <Text> Selected date </Text>
  </TouchableOpacity> */}
      
     {/* <DatePicker
        modal
        open={open}
        date={date} 
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      */}

<Text style={styles.textContent}> Selected date </Text>
 <DatePicker style={styles.picker} date={date} onDateChange={setDate} />
      
      </View>
      <View style={styles.duration}>
      <Text style={styles.textContent}> Selected duration </Text>
        <SelectDropdown
        data={duration}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
       />
      </View>
     
      <View style={styles.card}> 
      <LottieView  source={require("../assets/findparking.json")} autoPlay loop/>
      <View style={styles.textContent}> 

     <Text>  View list of parkings  </Text>
      </View>
      <View style={styles.button}>
      <TouchableOpacity 
onPress={() => navigation.navigate('ListParking')}
style={[styles.signIn,{
  borderColor:"#808080",
}]}
>
  <Text style={[styles.textSign,{
    color:"#808080"
  }]}>
     View list 
     </Text>
</TouchableOpacity>
      </View>
    

      </View>
    
    </View>
   
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:"#F0FFFF"
  },
  card: {
     padding: 2,
    elevation: 2,
    backgroundColor: "#F0FFFF"	,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    alignItems:"center" ,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 220,
    width: 400,
    overflow: "hidden",
  },
  calendarContainer: {
    margin: 2,
  },
  signIn: {
    width: '95%',
    padding:5,
    paddingBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, 
    borderWidth:1
},
  text: {
    marginVertical: 8,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
    width:"50%"
  },
  textContent: {
    
    padding: 2,
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold"
  },
  selectDate: {
    paddingTop:20,
    justifyContent:"center" ,
    textAlign:"center",
    alignItems:"center"
  },
  duration:{
    padding:5, 
    alignItems:"center",
    alignContent:"center", 
    marginLeft:30

  },
  picker:{
    width:250, 
    height:150,
    paddingTop:20,
    justifyContent:"center" ,
    textAlign:"center"
  }
});

export default HomeScreenn;


