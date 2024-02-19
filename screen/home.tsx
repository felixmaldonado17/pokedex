import * as React from "react";
import { View, Image } from "react-native";
import { Typography, Button } from "../components";
import { Home } from "../styles/home";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={Home.Container}>
      <View style={Home.BlueContainer}>
      </View>
      <View style={Home.RedContainer}>
        <View style={Home.ContainerButton}>
          <Button.Start
            title={"Turn On Pokedex"}
            onPress={() => navigation.navigate("ListPokemon")}
          />
        </View>
      </View>
      <View style={Home.ImageBackground}>
        <Image source={require('../assets/mainPagePokeball.png')} />
      </View>
      <View style={Home.TitleImageContainer}>
        <Image style={Home.TitleImage} source={require('../assets/title.png')} />
      </View>
    </View>
  );
}