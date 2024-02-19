import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  Image,
  Text
} from 'react-native';
import { COLORS, RedHeader, ListPokemon as style } from "../styles";
import { useApi } from "../hooks/useApi";
import { getPokemons, getPokemon } from "../api/getPokemons";
import { ReadHeader, ListCard } from "../components";
import { SearchBar, Icon } from "@rneui/themed";
import { IPokemonList, PokemonInfo } from "../interfaces/pokemon.interfaces";


export default function ListPokemon({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([]);
  const { execute: executePokemons, data: getDataPokemons, isLoading: isLoadingPokemons } = useApi(getPokemons);
  const { execute: executePokemon, data: getDataPokemon, isLoading: isLoadingPokemon } = useApi(getPokemon);

  const backToHome = () => navigation.navigate("Home");
  const goToDetail = (pokemonInfo: PokemonInfo) => navigation.navigate("pokemonDetail", {
    pokemonInfo
  });

  useEffect(() => {
    if (search !== "") {
      setLimit(150);
      setOffset(0);
    } else {
      setLimit(20);
      setOffset(0);
    }
  }, [search])

  const addOffset = () => {
    if (offset < 121 && limit != 150) {
      setOffset(offset + 20)
    }
  }
  useEffect(() => {
    if (limit == 150) {
      setPokemonList([])
    }
    executePokemons({ offset: offset, limit: limit });
  }, [offset, limit, search])


  useEffect(() => {
    const loadPokemonInfoToCards = async (p: IPokemonList) => {
      const promises = p.results.map(async (e) => {
        return executePokemon({ name: e.name })
      })

      const results = await Promise.all(promises);

      const filtered = results.filter(value => {
        if (value && Number(value.id) < 151) {
          return value
        }
      });
      if (limit == 20) {
        setPokemonList(pokemonList.concat(filtered))
      } else {
        setPokemonList(filtered)
      }


    };

    if (getDataPokemons && getDataPokemons.results.length > 0) {
      const getDataPokemonsFiltered = getDataPokemons.results.filter((pi) => pi.name.toLowerCase().includes(search.toLowerCase()))
      loadPokemonInfoToCards({ ...getDataPokemons, results: getDataPokemonsFiltered })
    }
  }, [getDataPokemons])

  return (
    <View style={style.Container}>
      <ReadHeader buttonAction={backToHome} buttonType="OFF">
      </ReadHeader>
      <View style={style.searchBarContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
          searchIcon={<Icon
            name="search"
            type="ionicon"
            size={24}
          />}
          containerStyle={style.searchBar}
          inputContainerStyle={style.searchBarInputStyle}
        />
      </View>
      {pokemonList.length == 0 && isLoadingPokemon == false ?
        <View style={style.notFoundContainer}>
          <View style={style.imageNotFound}>
            <Image source={require('../assets/NotFoundImage.png')} />
          </View>
          <Text style={style.textNotFound}>
            Sorry, we couldn't find what you were looking for.
          </Text>
        </View>
        :
        <ListCard buttonAction={goToDetail} data={pokemonList} loadData={addOffset}></ListCard>
      }
      <StatusBar />
    </View>
  );
}
