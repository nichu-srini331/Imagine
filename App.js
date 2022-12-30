import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';
import { Button, StyleSheet, Text,FlatList, TextInput, TouchableHighlight, View,Image } from 'react-native';
import {doctors} from './mockapi'

export default function App() {
  const [name,setname] = useState("")

const Doctors = ({item}) => {
  return(
    <TouchableHighlight>
      <View >
        <Text>{item.name}</Text>
        <Text>{item.Proffesion}</Text>
        <Text>{item.exp}</Text>
        <Image style={{width:100, height:100}} source={{uri:item.url}}/>
        <Button style={{width:20, height:20}} title="See More"/>
      </View>
    </TouchableHighlight>
  )
 }

  return (
    <View style={styles.container}>
      <View style={styles.v1}>
      <FlatList
        data={doctors}
        renderItem={Doctors}
        keyExtractor={(item) => item.id}
      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:90,
    flexDirection:'column',
    backgroundColor: '#fff',
  alignItems:'center',
  justifyContent:'center',
  },
  list:{

    marginTop:30

  },
  btn:{
    textAlign:'center'
  
  },
  input:{
    borderWidth: 1,
    width:'80%',
    marginRight:9,
    padding:5
  },
  v1:{
    flexDirection:'row',
    justifyContent:'space-around'
  }
  
});
