import React from 'react'
import { 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
 } from 'react-native';

import data from '../../../info-data.json'

import styles from './Lists.style';

const InformationList = ({ navigation }) => {
 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeMessage}>Informacione për korrupsionin në Universitete</Text>
        {data.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.button} 
            onPress={() => navigation.navigate("InfromationScreen")}
            >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default InformationList