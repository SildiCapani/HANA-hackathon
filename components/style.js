import { StyleSheet } from "react-native";

    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          paddingHorizontal: 20,
        },
        
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center',
        },
        
        image: {
            width: "100%",
            height: 400,
            resizeMode: 'cover',
            justifyContent: 'center',
          },

          image2: {
            width: "100%",
            height: "100%",
            resizeMode: 'cover',
            justifyContent: 'center',
          },

      });

      export default styles;