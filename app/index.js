import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"; 
import { Stack, useRouter } from 'expo-router'
import styles from "../components/style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated'




export const Home = () => {

    const router = useRouter();
    const iconName = 'notification';


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[ styles.title ]}> Corrupt Fighter </Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {/* <ImageBackground source={require('../assets/images/logo.png')} style={styles.image}/>  */}
              
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
                      style={[StyleSheet.absoluteFillObject, styles.dot]}
                    />
                  );
                })}
                
                <TouchableOpacity style={[styles.dot , styles.center ]} >
                  <Ionicons name="megaphone-outline" size={40} color='#f0f0f0' />
                </TouchableOpacity>
              </View>
          </View>
        </View>
      );
    };