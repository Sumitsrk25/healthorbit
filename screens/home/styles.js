import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { COLOR_PRESETS } from "../../presets/colors";

const spacingPresets = {};

const textPresets = {};

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLOR_PRESETS.LIGHT.WHITE,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    paddingVertical: verticalScale(10),
  },

  logoSize: {
    width: moderateScale(220),
    height: moderateScale(220),
    resizeMode: "contain",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: COLOR_PRESETS.PRIMARY.DARK,
    borderRadius: 10,
    height: 40,
  },
  leftIconContainer: {
    marginLeft: 15,
    marginRight: 8,
  },
  input: {
    fontSize: 15,
    textAlign: "center",
  },
  inputRootContainer: {
    paddingHorizontal: 32,
    paddingVertical: 30,
    paddingBottom: 0,
  },
  testHeader: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
    color: COLOR_PRESETS.PRIMARY.DARK,
  },
  listContainer: {
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  cardRootContainer: {
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    width: (Dimensions.get("window").width - 60) / 2,
    borderRadius: 15,
  },
});
