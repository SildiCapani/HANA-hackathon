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
    marginTop: 7,
  },

  buttonText: {
    color: 'white', 
    padding: 14,
    fontSize: SIZES.large,
    textAlign: 'center',
    fontFamily: FONT.bold
  },

  itemTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: "10%"
  }

});

export default styles;
