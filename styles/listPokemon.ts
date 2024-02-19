import { StyleSheet } from "react-native";
import { COLORS } from "./vars";
import { color } from "@rneui/base";

export const ListPokemon = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.whiteBackground,
  },
  ImageContainer: {
    height: "100%",
    backgroundColor: COLORS.platform.darkBackgroundTransparentWrapper,
  },
  ContainerTitle: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
  },

  ContainerFormHeader: {
    flex: 1,
    alignContent: "center",
  },
  ContainerFormBody: {
    alignContent: "center",
  },
  ContainerButton: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  searchBarContainer: {
    padding: 5,
    backgroundColor: COLORS.whiteBackground,
    color: COLORS.whiteBackground,
    borderBlockColor: COLORS.whiteBackground,
  },
  searchBar: {
    borderRadius: 16,
    backgroundColor: COLORS.whiteBackground,
    color: COLORS.whiteBackground,
    borderBlockColor: COLORS.whiteBackground,
    overlayColor: COLORS.whiteBackground,
  },
  searchBarInputStyle: {
    borderRadius: 16,
    backgroundColor: COLORS.platform.gray,
  },
  imageNotFound: {
    width: 130,
    height: 122,
    left: 115,
  },
  textNotFound: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.platform.blue,
    width: 200,
    left: 80,
    textAlign: "center",
  },
  notFoundContainer: {
    padding: 10,
  },
});
