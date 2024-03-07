import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  userName: {
    fontFamily: FONT.regular, 
    fontSize: SIZES.large,
    color: COLORS.secondary,
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



  container: {
    flex: 1,
    margin: 'auto'
  },


  buttonText: {
    color: 'white', // Example color for button text
    fontSize: SIZES.medium,
    padding: 17,
    fontWeight: 'bold',
  },



  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    padding: 7,
    marginTop: SIZES.medium,
  },
  tab: (activeTabList, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeTabList === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeTabList, item) => ({
    fontFamily: FONT.medium,
    color: activeTabList === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
