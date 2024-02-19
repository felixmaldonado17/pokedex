import { StyleSheet } from "react-native";
import { COLORS } from "../vars";

export const ListCard = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
    flexDirection: "column",
  },
  idText: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 15,
    color: COLORS.whiteBackground
  },
  nameText: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.whiteBackground,
  },
  cardStyle: {
    width: 361,
    flexDirection: "row",
    borderRadius: 16,
  },
  info: {
    flexDirection: "column",
    width: 135,
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
  },
  chip: {
    marginRight: 5,
  },
});
