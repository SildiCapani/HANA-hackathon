import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    margin: 4,
    textAlign: 'center',
    letterSpacing: 1
  }, 
  headerTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
