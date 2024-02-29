import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          paddingHorizontal: 20,
        },
        
        title: {
          fontFamily: FONT.bold,
          fontSize: 45,
          color: COLORS.primary,
          marginTop: 2,
          zIndex: 10
        },

        dot: {
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: 'blue'
        },
        
        center: { alignItems: 'center', justifyContent: 'center' },

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