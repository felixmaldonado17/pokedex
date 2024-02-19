import { StyleSheet } from "react-native";
import { COLORS } from "./vars";

export const PokemonDetail = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: COLORS.whiteBackground,
  },
  innerContainer: {
    backgroundColor: COLORS.grayBackground,
  },
  idText: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 15,
    color: COLORS.platform.blue,
  },
  nameText: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.platform.blue,
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
    color: COLORS.darkBackground,
  },
  cardStyle: {
    width: 361,
    flexDirection: "row",
    borderRadius: 16,
  },
  info: {
    flexDirection: "column",
    width: 361,
    top: 20,
    left: 20,
  },
  imageContainer: {
    position: "absolute",
    left: 150,
  },
  image: {
    width: 88,
    height: 88,
    left: 80,
  },
  chipList: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  chip: {
    marginRight: 5,
  },
});
