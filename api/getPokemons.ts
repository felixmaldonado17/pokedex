import { baseApi } from "./base";
import { IPokemonList, PokemonInfo } from "../interfaces/pokemon.interfaces";
import { IPokemonCharacteristics } from "../interfaces/pokemonCharacteristics";
import { IPokemonEvolveChain } from "../interfaces/pokemonEvolveChain.interface";
import { PokemonSpecies } from "../interfaces/pokemonSpecies.interface";

export const getPokemons = ({ offset, limit }: { offset: number; limit: number }): Promise<IPokemonList> =>
  baseApi.get(`/pokemon?offset=${offset}&limit=${limit}`).then((r) => r.data);

export const getPokemon = ({ name }: { name: string }): Promise<PokemonInfo> =>
  baseApi.get(`/pokemon/${name}`).then((r) => r.data);

export const getPokemonCharacteristics = ({ id }: { id: number }): Promise<IPokemonCharacteristics> =>
  baseApi.get(`/characteristic/${id}`).then((r) => r.data);

export const getPokemonEvolutionChain = ({ id }: { id: number }): Promise<IPokemonEvolveChain> =>
  baseApi.get(`/evolution-chain/${id}`).then((r) => r.data);

export const getPokemonSpecies = ({ id }: { id: number }): Promise<PokemonSpecies> =>
  baseApi.get(`/pokemon-species//${id}`).then((r) => r.data);
