export interface PokemonChainItem {
  from: Info;
  to: Info;
  level: number;
}

export interface Info {
  name: string;
  url: string;
}
