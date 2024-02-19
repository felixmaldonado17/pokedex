import React, { useState } from "react";
import { Card } from "@rneui/base";
import { ImageCard as style } from "../styles/components";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { Chip } from "@rneui/themed";
import { PokemonInfo } from "../interfaces/pokemon.interfaces";
import { COLORS } from "../styles";

interface PropsTypes {
  data: PokemonInfo
};

export function ImageCard(props: PropsTypes) {
  const {  data } = props;

  return (
      <Card containerStyle={{ ...style.cardStyle, backgroundColor: COLORS.types[data.types[0].type.name]?.background }}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{ uri: data.sprites.other["official-artwork"].front_default }} />
        </View>
      </Card>
  );
}


