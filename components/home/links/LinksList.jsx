import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Divider, Button } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import data from '../../../info-data.json'

import styles from './linkslist.style';
import { LinearGradient } from 'expo-linear-gradient';



const LinksList = () => {
  return (
    <View>
      <Text style={styles.welcomeMessage}>Linke për denoncimin e rasteve të korrupsionit</Text>
      <Divider style={{ marginTop: 5 }} />
      {data.reportingLinks.map((item, index) => (
        <View key={index}>
          <Button
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ["#fc0505", "#1f22ff"],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={{
                borderRadius: 10,
                marginBottom: 10,
                margin: 19,
                marginTop: "10%"
              }}
            onPress={() => Linking.openURL(item.link)}
            >
            <Text style={styles.buttonText}>{item.title} <FontAwesome name="arrow-circle-right" size={20}/></Text>
          </Button>
          <Divider style={{ marginTop: 5 }} inset={true} insetType="middle" />
        </View>
      ))}
    </View>
  )
}

export default LinksList;