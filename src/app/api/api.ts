const BASE_URL = "https://pokeapi.co/api/v2";

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

export async function getPokemon(id: number): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
}

export async function getLimit<T>( offset: number ): Promise<T> {
  const res = await fetch(
    ` https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`,
    {
      next: { revalidate: 3600 }, //? 1 Hour
    }
  );
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
}


export async function getColor(id: number){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  if(!res.ok) throw new Error('Error to fetch pokemon')
    return res.json();
}


