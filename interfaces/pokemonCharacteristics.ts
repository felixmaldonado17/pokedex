export interface IPokemonCharacteristics {
  descriptions: Description[];
  gene_modulo: number;
  highest_stat: HighestStat;
  id: number;
  possible_values: number[];
}

export interface Description {
  description: string;
  language: Language;
}

export interface Language {
  name: string;
  url: string;
}

export interface HighestStat {
  name: string;
  url: string;
}
