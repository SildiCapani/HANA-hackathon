import { Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView, Image, ImageBackground } from "react-native"; 
import styles from "../components/style";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated'




export const Home = () => {


    return (
      <ImageBackground style={styles.image} source={require('../assets/images/bkimg.jpg')}>   
          <View style={[styles.container]}>
          <Text style={[ styles.title ]}> Corrupt Fighter </Text>
          
        <View style={styles.container2}>
              
              <View style={styles.center}>
                {[...Array(5).keys()].map((index) => {
                  return (
                    <MotiView 
                      from={{ opacity: 0.71, scale: 1 }}
                      animate={{ opacity: 0, scale: 7 }}
                      transition={{
                        type: 'timing',
                        duration: 2000,
                        easing: Easing.out(Easing.ease),
                        delay: index * Math.floor(300, 400),
                        loop: true
                      }}
                      key={index}
                      style={[StyleSheet.absoluteFillObject, styles.dot ]}
                    />
                  );
                })}
                
                <TouchableOpacity style={[styles.dot , styles.center ]} onPress={() => Linking.openURL('https://spak.gov.al/denonco-2/')} >
                  <FontAwesome name='hand-stop-o' size={40} color='#f0f0f0' />
                </TouchableOpacity>
              </View>

          </View>
          </View>
        </ImageBackground>
      );
    };