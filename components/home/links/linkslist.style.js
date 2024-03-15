import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },

  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.lightWhite,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
  },

  background: {
    height: "100%",
    width: "100%",
    backgroundColor: '#4e3efa',
    resizeMode: 'cover'
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
