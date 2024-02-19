import { StyleSheet } from "react-native";
import { COLORS } from "../vars";

export const ImageCard = StyleSheet.create({
  outerCardContainer: {
    flex: 1,
    width: 390,
    height: 304,
    backgroundColor: COLORS.darkBackground,
    borderRadius: 23,
    padding: 10
  },
  cardStyle: {
    width: 361,
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 8,
    borderColor: COLORS.whiteBackground,
  },
  imageContainer: {
    left:20
  },
  image: {
    width: 269,
    height: 269,
  },
  
});
