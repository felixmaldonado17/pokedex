import { StyleSheet } from "react-native";
import { COLORS } from "../vars";

export const RedHeader = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: COLORS.platform.red,
    width: "100%",
    height: 124,
    borderBottomColor: COLORS.brand.primaryDark,
  },
  OffButton: {
    width: "100%",
    height: "100%",
    top: "50%",
    left: "5%",
  },
  lights: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "20%",
  },
});
