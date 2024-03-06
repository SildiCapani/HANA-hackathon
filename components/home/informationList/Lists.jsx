import React, { useState } from 'react'
import { 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View
 } from 'react-native';
import { Link } from 'expo-router'
import data from '../../../info-data.json'

import styles from './Lists.style';
import { SIZES } from '../../../constants';


const tabsList = ['Të gjitha','Korrupsioni në Universitetet', 'Raportimi i Rasteve', 'Kundër Korrupsionit']


const InformationList = ({ navigation }) => {

  const [ activeTabList, setActiveTabList] = useState('Të gjitha')

  const filterData = data.filter(item => {
    if(activeTabList === 'Të gjitha'){
      return true;
    } else {
      return item.type === activeTabList
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Informacione për korrupsionin në Universitete</Text>
      
      <View style={styles.tabsContainer}>
        <FlatList data={tabsList} renderItem={({ item }) => (
          <TouchableOpacity style={styles.tab(activeTabList, item)} onPress={() => setActiveTabList(item)}>
            <Text style={styles.tabText(activeTabList, item)}>{item}</Text>
          </TouchableOpacity>          
        )} 
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    <ScrollView>
        {filterData.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.button} 
            onPress={() => navigation.navigate("InfromationScreen", { content:  item.content  })}
            >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
    </View>
  )
}

export default InformationList