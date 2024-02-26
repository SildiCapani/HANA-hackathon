import React from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  return (
    <View>
      <Text style={styles.welcomeMessage}>Welcome</Text>
    </View>
  )
}

export default Welcome