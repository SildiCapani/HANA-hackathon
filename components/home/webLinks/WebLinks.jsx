import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Linking } from "react-native";
import { Divider, Button } from '@rneui/themed';
import data from '../../../info-data.json';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from "./WebLinks.style";
import { ScrollView } from "react-native-gesture-handler";




const WebLinks = () => {

    return (
        <View style={styles.background}>

            <Text style={styles.welcomeMessage}> Përceptimi i Korrupsionit në Shqipëri </Text>
            <Divider style={{ marginTop: 7 }} />
            <ScrollView>

             {data.pdfLinks.map((item, index) => (
                <View key={index}>
                    <Text style={styles.itemTitle}>{item.autor}</Text>
                <Button
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ["#11f75a", "#1f22ff"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{
                    borderRadius: 15,
                    marginBottom: 15,
                    margin: 19,
                }}
                     
                    onPress={() => Linking.openURL(item.link)}
                >
                    <Text style={styles.buttonText}> PDF {index+1} <AntDesign name="pdffile1" size={20}/></Text>
                </Button>
                <Divider style={{ marginTop: 5 }} inset={true} insetType="middle" />
                </View>
             ))}
             </ScrollView>
            
        </View>
    )
}

export default WebLinks;