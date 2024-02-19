import { StyleSheet } from "react-native";
import { COLORS } from "./vars";

export const Home = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  BlueContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: COLORS.platform.blue,
  },
  RedContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: COLORS.platform.red,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: '32.5%',
    left: '13%',
  },
  TitleImageContainer: {
    flex: 1,
    position: "absolute",
    top: '20%',
    left: '9%',
  },
  TitleImage: {
    width: 339, 
    height: 61,
  },
  ContainerText: {
    width: "100%",
    height: "40%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerButton: {
    top: 200,
    left: '15%',
    height: "100%",
    width: "100%"
  },
});