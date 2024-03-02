import React from 'react'
import { View, Text } from 'react-native'

import styles from './InformationScreen.style'

const InformationScreen = ({ route }) => {
  
  
  const { content } = route.params
  

  return (
    <View>
      <Text>{content}</Text>
    </View>
  )
}

export default InformationScreen;