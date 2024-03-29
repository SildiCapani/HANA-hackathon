import { useState } from 'react'
import { 
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View,
  ImageBackground,
 } from 'react-native';
import { Divider, Button } from '@rneui/themed';
import data from '../../../info-data.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './Lists.style';
import { SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';


const tabsList = ['Të gjitha','Korrupsioni në Universitetet', 'Raportimi i Rasteve', 'Kundër Korrupsionit']


const InformationList = ({ navigation }) => {

  const [ activeTabList, setActiveTabList] = useState('Të gjitha');

  const filterData = data.information.filter(item => {
    return activeTabList === 'Të gjitha' ?  true : item.type === activeTabList
  })

  return (
    <ImageBackground source={require('../../../assets/images/bkimg2.jpg')} style={styles.container}>
      <Text style={styles.welcomeMessage}>Korrupsioni në Universitete</Text>
      
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

    <Divider style={{ marginTop: 7 }} inset={true} insetType="middle" />
        {filterData.map((item, index) => (
          <View key={index}>
          <Button
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ["#a8bced", "#1f22ff"],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={{
                borderRadius: 15,
                marginBottom: 10,
                margin: 19,
              }} 
            onPress={() => navigation.navigate("InfromationScreen", { content:  item.content, title: item.title  })}
            >
            <Text style={styles.buttonText}>{item.title} <FontAwesome name="arrow-circle-right" size={14}/></Text>
          </Button>
              <Divider style={{ marginTop: 5 }} inset={true} insetType="middle" />
          </View>
        ))}
    </ScrollView>
    </ImageBackground>
  )
}

export default InformationList