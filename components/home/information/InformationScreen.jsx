import React from 'react'
import { Text, ScrollView } from 'react-native'
import { Divider, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './InformationScreen.style'



const InformationScreen = ({ route }) => {
  
  
  const { content, title } = route.params
  
  return (
    <ScrollView style={styles.container}  >
      <Text style={styles.headerTitle} >{title}</Text>
          <Divider/>
      {content.map((item, index) => (
        <Text style={styles.text} key={index}>{item}</Text>
      ) )}

    <Divider style={{ marginTop: 7 }} inset={true} insetType="middle" />

    <Button
      style={styles.button}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ["#a8bced", "#1f22ff"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
    >
      <Text style={styles.buttonText}> <AntDesign name='Safety' size={22}/> Denonco</Text>
    </Button>
          
    </ScrollView>
  )
}

export default InformationScreen;