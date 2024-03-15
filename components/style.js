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

        text1: {
          fontFamily: FONT.medium,
          fontSize: SIZES.large,
          color: 'red',
          marginBottom: 10
        },

        text2: {
          fontFamily: FONT.medium,
          fontSize: SIZES.large,
          color: 'green',
          marginBottom: 10,
          textAlign: 'right'
        },
        
        center: { alignItems: 'center', justifyContent: 'center' },

        image: {
            width: "100%",
            height: "100%",
            resizeMode: 'cover',
          },

          image2: {
            width: "100%",
            height: "100%",
            resizeMode: 'cover',
            justifyContent: 'center',
          },

      });

      export default styles;