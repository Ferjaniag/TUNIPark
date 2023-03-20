import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { ApplicationProvider,Button, Icon, List, ListItem,Modal, Card,Input} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { firebase } from '@react-native-firebase/firestore';
import {FontAwesome5} from 'react-native-vector-icons/FontAwesome5';


const ListScreen = () => {

  const navigation=useNavigation() ; 
  const [titlee,setTitle]=useState();
  const [descriptionn,setDescription]=useState() ;
  const [adress,setAdress]=useState() ;
 const [latitudee,setLatitudee]=useState() ;
  const [longitudee,setLongitudee]=useState() ; 
  const [capacityy,setCapacity]=useState() ;
  const [visible, setVisible] = React.useState(false);
  const [visibleRemove, setVisibleRemove] = React.useState(false);
  const [locations,setLocations]=useState([]) ;
  useEffect(() => {
   
    firebase.firestore()
      .collection('locations')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data() );
        data.map(d=>{
          console.log("id ",d.id)
          console.log("coordinates latitude",d.latitude)
          console.log("coordinates longitutde",d.longitude)
          console.log("coordinates",d.adresse)
        })
        setLocations(data);

      }) ;
  }, []);

  const deleteParking = () => { 


  }
  const renderItemAccessory = (props) => ( 
    <View style={styles.buttons}>
    <Button size='tiny' onPress={()=> setVisibleRemove(true)}> Remove</Button>
    <Button size='tiny' onPress={()=> setVisible(true)}> Edit</Button>

    </View>
  );
  
  /* const renderItemIcon = (props) => (
    <FontAwesome5 name='parking'/>
  );  */
  
  const renderItem = ({ item, index }) => (
    <ListItem  
    title={item.title}
    description={item.description}
    /* accessoryLeft={renderItemIcon} */
    accessoryRight={renderItemAccessory}
    />
  );
  
  return (
    <ApplicationProvider {...eva} theme={eva.light}>  
    <View style={styles.ajouter}> 
    <Button style={styles.button} appearance='outline' onPress={()=> navigation.navigate('AddParking')}>
      Add
    </Button>
    </View>
    <View style={styles.list}>
    <List
      style={styles.container}
      data={locations}
      renderItem={renderItem} 
    />  
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
        <Text style={styles.title} category='h5'> Edit your parking </Text>
       
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
          <Button onPress={() => setVisible(false)}>
            Confirm
          </Button>
        </Card>
      </Modal> 
     { /* Modal remove parking */ } 
     <Modal
        visible={visibleRemove}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisibleRemove(false)}>
        <Card disabled={true}>
        <Text style={styles.title} category='h5'> Warning </Text>  
        <Text style={styles.text} > Do you want to delete this parking ?</Text>
         <View style={styles.buttons}>
          <Button onPress={() => setVisibleRemove(false)}>
            Yes 
          </Button>
          <Button onPress={() => setVisibleRemove(false)}>
            No 
          </Button>
          </View>
        </Card>
      </Modal>
    </View>
    </ApplicationProvider>
  );
}; 
const styles = StyleSheet.create({
  container: {
    maxHeight: 270,
  },
  list :{
    paddingVertical: 15
  },
  title: { marginRight: 50,
    paddingTop:15,
    alignContent:"center" ,
    alignItems:"center"

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
    justifyContent:"space-between"
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems:"center" ,
    alignContent:"center" , 
  },
  coordinates:{
    flexDirection: 'row',
    justifyContent:"space-between"
  }, 
  buttons:{
    flexDirection: 'row', 
    justifyContent:"space-between"
  }
});
export default ListScreen ;