import { Text, View, StyleSheet, Image } from "react-native"; 
import { Stack, useRouter } from 'expo-router'


export const Home = () => {

    const router = useRouter();

    return (
        <View style={styles.container}>
          <Image source={require('../assets/images/image1.png')}/>
          {/* <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Fight Corruption</Text>
          <Text style={styles.subtitle}>Together, for Transparency</Text> */}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
      },
      logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
      },
    });