import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

import styles from './InformationScreen.style'

const InformationScreen = ({ route }) => {
  
  
  const { content, title } = route.params
  

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <Text style={styles.headerTitle} >{title}</Text>
      <Text style={styles.text} >{content}</Text>
    </ScrollView>
  )
}

export default InformationScreen;