import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Text
} from 'react-native';
import { COLORS, PokemonDetail as style } from "../styles";
import { ReadHeader, ImageCard, Carrousel } from "../components";
import { useRoute } from '@react-navigation/native';
import { Chip } from "@rneui/base";
import { PokemonInfo } from "../interfaces/pokemon.interfaces";
import { PokemonChainItem } from "../interfaces/pokemonChainItem";
import { useApi } from "../hooks/useApi";
import { getPokemonCharacteristics, getPokemonEvolutionChain, getPokemon, getPokemonSpecies } from "../api/getPokemons";
import { EvolvesTo, IPokemonEvolveChain } from "../interfaces/pokemonEvolveChain.interface";
import { barDataItem } from "react-native-gifted-charts";

const statsColors = {
  hp: "#48D0B0",
  att: "#FFD871",
  def: "#FB6C6C",
  ["sp.att"]: "#74EEFF",
  ["sp.def"]: "#C48CF0",
  spe: "#FC81CB"
}

export default function PokemonDetail({ navigation }: any) {
  const backToHome = () => navigation.navigate("ListPokemon");
  const route = useRoute();

  const [pokemonEvolutionChainList, setPokemonEvolutionChainList] = useState<PokemonChainItem[]>([]);
  const [bardDataItems, setBardDataItems] = useState<barDataItem[]>([]);

  const pokemonInfo: PokemonInfo = route.params?.pokemonInfo;
  const { execute: executePokemonCharacteristics, data: getPokemonCharacteristicsData, isLoading: isLoadingPokemonCharacteristicsData } = useApi(getPokemonCharacteristics);
  const { execute: executePokemonEvolutionChain, data: getPokemonEvolutionChainData, isLoading: isLoadingPokemonEvolutionChain } = useApi(getPokemonEvolutionChain);
  const { execute: executePokemonSpecies, data: getPokemonSpeciesData, isLoading: isLoadingPokemonSpecies } = useApi(getPokemonSpecies);
  const { execute: executePokemon, data: getPokemonData, isLoading: isLoadingPokemon } = useApi(getPokemon);

  useEffect(() => {
    const loadPokemonChainInfo = async (id: number) => {
      const pokemonSpecie = await executePokemonSpecies({ id })
      if (pokemonSpecie) {
        const { url } = pokemonSpecie.evolution_chain
        const evolutionChainId = Number(url.split('evolution-chain/')[1].split('/')[0]);

        executePokemonEvolutionChain({ id: evolutionChainId })
      }

    };
    if (pokemonInfo) {
      executePokemonCharacteristics({ id: pokemonInfo.id });
      loadPokemonChainInfo(pokemonInfo.id);
      setBardDataItems(pokemonInfo.stats.map((pi) => {
        const { stat, base_stat } = pi
        const name = stat.name.includes("-") ? `sp.${stat.name.split('-')[1].slice(0, 3)}` : stat.name.slice(0, 3)
        const bardItem: barDataItem = {
          label: name == 'spe' ? "speed" : name,
          value: base_stat,
          frontColor: statsColors[name],
          barWidth: 20,
          barBorderRadius: 10,
          topLabelContainerStyle: {
            top: -25,
          }
        }
        return bardItem;
      }))
    }
  }, [pokemonInfo])

  useEffect(() => {
    const loadPokemonChainInfo = async (listToFill: PokemonChainItem[], basePokemonName: string, evolvesTo: EvolvesTo) => {
      const { species, evolution_details, evolves_to } = evolvesTo;

      const basePokemon = await executePokemon({ name: basePokemonName })
      const secondPokemon = await executePokemon({ name: species.name })


      if (basePokemon && secondPokemon) {

        const pokemonEvolutionItem: PokemonChainItem = {
          level: evolution_details[0].min_level,
          from: { name: basePokemon.name, url: basePokemon.sprites.other["official-artwork"].front_default },
          to: { name: secondPokemon.name, url: secondPokemon.sprites.other["official-artwork"].front_default }
        }

        listToFill.push(pokemonEvolutionItem)

        if (evolves_to.length > 0) {
          await loadPokemonChainInfo(listToFill, secondPokemon.species.name, evolves_to[0])
        } else {
          setPokemonEvolutionChainList(listToFill);
        }
      }
    };

    if (getPokemonEvolutionChainData) {
      const { evolves_to, species } = getPokemonEvolutionChainData.chain

      loadPokemonChainInfo([], species.name, evolves_to[0])
    }
  }, [getPokemonEvolutionChainData])


  return (
    <ScrollView style={style.container}>
      <ReadHeader buttonAction={backToHome} buttonType="BACK">
      </ReadHeader>
      <View style={style.innerContainer}>
        <ImageCard data={pokemonInfo}></ImageCard>
        <View style={style.info}>
          <Text style={style.idText}>
            {`#${pokemonInfo.id}`}
          </Text>
          <Text style={style.nameText}>
            {pokemonInfo.name}
          </Text>
          <Text style={style.description}>
            {getPokemonCharacteristicsData?.descriptions.find((d) => d.language.name == 'en')?.description}
          </Text>
          <View style={style.chipList}>
            {pokemonInfo.types.map((type) => <Chip containerStyle={style.chip} key={type.type.name} title={type.type.name} color={COLORS.types[type.type.name].chip} />)}
          </View>
          <Carrousel slide1Info={pokemonEvolutionChainList} barChartData={bardDataItems}></Carrousel>
        </View>
        <View style={{ height: 20 }}></View>
        <StatusBar />
      </View>

    </ScrollView>
  );
}
