import React, { useState } from "react";
import { Card } from "@rneui/base";
import { ListCard as style } from "../styles/components";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { Chip } from "@rneui/themed";
import { PokemonInfo } from "../interfaces/pokemon.interfaces";
import { COLORS } from "../styles";

interface PropsTypes {
  buttonAction: (pokemonInfo: PokemonInfo) => any,
  data: PokemonInfo
};

export function PokemonCard(props: PropsTypes) {
  const { buttonAction, data } = props;

  return (
    <TouchableOpacity onPress={() => { buttonAction(data) }}>
      <Card containerStyle={{ ...style.cardStyle, backgroundColor: COLORS.types[data.types[0].type.name]?.background }}>
        <View style={style.info}>
          <Text style={style.idText}>
            {`#${data.id}`}
          </Text>
          <Text style={style.nameText}>
            {data.name}
          </Text>
          <View style={style.chipList}>
            {data.types.map((type) => <Chip containerStyle={style.chip} key={type.type.name} title={type.type.name} color={COLORS.types[type.type.name].chip} />)}
          </View>
        </View>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{ uri: data.sprites.other["official-artwork"].front_default }} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}


