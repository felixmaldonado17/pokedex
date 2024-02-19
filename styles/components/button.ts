import { StyleSheet } from "react-native";
import { COLORS } from "../vars";
import { Typography } from "./typography";

export const Button = StyleSheet.create({
  primary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: COLORS.brand.primaryDark,
    borderRadius: 8,
    maxHeight: 65,
    width: 200,
    borderColor: COLORS.brand.primaryDark,
  },
  primaryText: {
    color: COLORS.whiteBackground,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  disabledPrimary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: COLORS.platform.grayscaleBackgrounds,
    borderRadius: 8,
    maxHeight: 65,
    width: 200,
    borderColor: COLORS.platform.grayscaleBorders,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  disabledPrimaryText: {
    color: COLORS.platform.grayscalePlaceholders,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  secundary: {
    borderWidth: 2,
    backgroundColor: COLORS.brand.primaryMain,
    borderRadius: 100,
    height: 50,
    borderColor: COLORS.brand.primaryMain,
  },
  secundaryText: {
    color: COLORS.brand.primaryDark,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  Start: {
    borderWidth: 1,
    backgroundColor: COLORS.whiteBackground,
    borderRadius: 24,
    height: 84,
    width: 280,
    borderBottomColor: COLORS.platform.blue,
  },
  outlineText: {
    color: Typography.buttons.color,
    fontSize: Typography.buttons.fontSize,
    lineHeight: 29.05,
    textTransform: "none",
    fontWeight: "bold",
  },
});
