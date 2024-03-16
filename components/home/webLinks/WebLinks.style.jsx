import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },

  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 7,
  },

  background: {
    height: "75%",
    width: "100%",
    backgroundColor: '#122337',
    resizeMode: 'cover'
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
    color: COLORS.gray2,
    textAlign: 'center',
    marginTop: "10%"
  }

});

export default styles;
