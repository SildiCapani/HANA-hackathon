import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        container2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          
        },
        
        title: {
          fontFamily: FONT.bold,
          fontSize: 45,
          textAlign: 'center',
          color: COLORS.primary,
          marginTop: 2,
          zIndex: 10
        },

        scrollViewContent: {
          paddingTop: 200,
      },

        dot: {
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: 'blue',
        },

        buttonText: {
          color: 'white', 
          padding: 14,
          paddingLeft: 27,
          paddingRight: 27,
          fontSize: SIZES.large,
          textAlign: 'center',
          fontFamily: FONT.bold
        },
      
        
        center: { alignItems: 'center', justifyContent: 'center' },

        image: {
            width: "100%",
            height: "100%",
            resizeMode: 'cover',
          },

      });

      export default styles;