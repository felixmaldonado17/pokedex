import { StyleSheet } from "react-native";
import { COLORS } from "../vars";

export const Carrousel = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 381,
    marginBottom: 20,
  },
  slide: {
    flex: 1,
    backgroundColor: COLORS.whiteBackground,
    padding: 20,
    borderRadius: 24,
  },
  slideTitle: {
    color: COLORS.platform.blue,
    fontSize: 24,
    fontWeight: "700",
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  imageContainer: {},

  image: {
    width: 106,
    height: 106,
  },
  evolutionChainItemContainer: {
    flexDirection: "row",
  },
  evolutionChainContainer: {
    top: 20,
    left: 20,
  },
  separator: {
    flexDirection: "column",
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  separatorIcon: {
    color: "#959595",
  },
  separatorText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 15,
    color: COLORS.platform.blue,
  },
  rotatedView: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  labelStyle: {
    right: 10,
    color: COLORS.darkBackground,
    
  },
});
