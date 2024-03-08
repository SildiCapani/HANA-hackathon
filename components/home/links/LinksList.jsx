import React from 'react';
import { View, Text } from 'react-native';
import { Divider, Button } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './linkslist.style';
import { LinearGradient } from 'expo-linear-gradient';



const LinksList = () => {
  return (
    <View>
      <Text style={styles.welcomeMessage}>Linke për denoncimin e rasteve të korrupsionit</Text>
      <Divider style={{ marginTop: 5 }} inset={true} insetType="middle" />

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
              }}
            //onPress={() => {}}
            >
            <Text style={styles.buttonText}>Link <FontAwesome name="arrow-circle-right" size={20}/></Text>
          </Button>
    </View>
  )
}

export default LinksList;