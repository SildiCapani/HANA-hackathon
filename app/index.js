import { Text, View, StyleSheet, ImageBackground } from "react-native"; 
import { Stack, useRouter } from 'expo-router'
import styles from "../components/style";


export const Home = () => {

    const router = useRouter();

    return (
        <View>
          <ImageBackground source={require('../assets/images/binary.png')} style={styles.image2}/>
        </View>
      );
    };