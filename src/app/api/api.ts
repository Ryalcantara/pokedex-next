const BASE_URL = "https://pokeapi.co/api/v2";


interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
  
}


interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

interface PokemonSpeciesName {
  name: string;
  language: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  color: {
    name: string;
  };
  names: PokemonSpeciesName[];
}


export interface Location {
  region: {
    name: string;
  };
}


export async function getPokemon(id: number): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
}

export async function getLimit(offset: number): Promise<PokemonListResponse> {
  const res = await fetch(`${BASE_URL}/pokemon?limit=10&offset=${offset}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
}

export async function getColor(id: number): Promise<PokemonSpecies> {
  const res = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  if (!res.ok) throw new Error("Error to fetch pokemon");
  return res.json();
}

export async function getRegion(id: number): Promise<Location> {
  const res = await fetch(`${BASE_URL}/location/${id}`);
  if (!res.ok) throw new Error("Error to fetch region");
  return res.json();
}