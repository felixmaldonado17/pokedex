import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../vars";

export const Typography = StyleSheet.create({
  headLine: {
    color: COLORS.platform.white,
    fontSize: FONTSIZE.HeadLine,
    textTransform: "capitalize",
  },
  subtitleLarge: {
    color: COLORS.platform.white,
    fontSize: FONTSIZE.subtitleLarge,
  },
  subtitleMedium: {
    color: COLORS.platform.white,
    fontSize: FONTSIZE.subtitleMedium,
  },
  bodyMedium: {
    color: COLORS.platform.white,
    fontSize: FONTSIZE.bodyMedium,
  },
  caption: {
    color: COLORS.platform.white,
    fontSize: FONTSIZE.caption,
  },
  buttons: {
    color: COLORS.platform.blue,
    fontSize: FONTSIZE.mainButton
  },
});
