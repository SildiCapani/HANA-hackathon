import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  text: {
    fontSize: SIZES.medium,
    marginTop: 10,
    margin: 4,
    textAlign: 'center',
    letterSpacing: 1
  }, 
  headerTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
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
