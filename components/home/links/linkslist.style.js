import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },

  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
  },

  buttonText: {
    color: 'white', 
    padding: 14,
    fontSize: SIZES.large,
    textAlign: 'center',
    fontFamily: FONT.bold
  },

});

export default styles;
