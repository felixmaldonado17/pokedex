import React, { useState } from "react";
import { Card } from "@rneui/base";
import { ListCard as style } from "../styles/components";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text, ScrollView, FlatList } from "react-native";
import { Chip } from "@rneui/themed";
import { PokemonInfo } from "../interfaces/pokemon.interfaces";
import { PokemonCard } from "./card";

interface PropsTypes {
  buttonAction: (pokemonInfo: PokemonInfo) => any,
  loadData: () => any,
  data: PokemonInfo[],
};

export function ListCard(props: PropsTypes) {
  const { buttonAction, data, loadData } = props;

  return (
    <View style={style.container}>
      <FlatList
        horizontal={false}
        data={data.map((rows): PokemonInfo => ({ ...rows }))}
        renderItem={({ item }: { item: PokemonInfo }) => <PokemonCard key={item.id} buttonAction={buttonAction} data={item} />}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}


