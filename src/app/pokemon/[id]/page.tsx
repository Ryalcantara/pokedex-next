import { getColor, getLimit, getPokemon } from "@/app/api/api";
import PokemonPagination from "../components/pagination/pagination";
import Image from "next/image";

export default async function PokemonCard({ params }) {
  const { id } = await params;
  const [pokeData, getNumber, getColorSpecies] = await Promise.all([
    getPokemon(id),
    getLimit(id),
    getColor(id),
  ]);

  return (
    <div
      className="h-dvh"
      style={{
        backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 50%, white)`,
      }}
    >
      <div className={`flex flex-col items-center gap-4`}>
        <PokemonPagination currentPage={id} getLimit={getNumber} />
      </div>
      <div className="flex mt-16 flex-col gap-9 mx-3">
        <div className="flex flex-col gap-3 font-bold text-2xl">
          <h1>{`#${pokeData.id}`}</h1>
          {pokeData.name}
        </div>
        <div className="flex  items-start">
          <div className="rotate-180 [writing-mode:vertical-lr]  font-medium">
            Region: Kanto
          </div>
          <div className="flex flex-col m-10">
            <p>Height: 3.34m</p>
            <p>Weight: 38.3kg</p>
          </div>
          <div>
            <h1 className="absolute opacity-40 text-[5rem] ">
              {getColorSpecies.names[0].name}
            </h1>
            <Image
              src={pokeData.sprites.other["official-artwork"].front_default}
              height={400}
              width={400}
              alt={pokeData.name}
              className="mx-20"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex"></div>
            <h1 className="font-bold text-2xl">Base Stats:</h1>
            <div className="flex">
              <div className="flex gap-4">
                <div className="flex flex-col gap-5 text-white border-l-1">
                  <div className="flex gap-3">
                    <div className="flex ">
                      <div
                        className="rounded-tl-lg rounded-bl-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 80%, black)`,
                        }}
                      >
                        HP:
                      </div>
                      <div
                        className="rounded-tr-lg rounded-br-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 60%, black)`,
                        }}
                      >
                        60
                      </div>
                    </div>
                    <div className="flex">
                      <div
                        className="rounded-tl-lg rounded-bl-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 80%, black)`,
                        }}
                      >
                        HP:
                      </div>
                      <div
                        className="rounded-tr-lg rounded-br-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 60%, black)`,
                        }}
                      >
                        60
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex ">
                      <div
                        className="rounded-tl-lg rounded-bl-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 80%, black)`,
                        }}
                      >
                        HP:
                      </div>
                      <div
                        className="rounded-tr-lg rounded-br-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 60%, black)`,
                        }}
                      >
                        60
                      </div>
                    </div>
                    <div className="flex">
                      <div
                        className="rounded-tl-lg rounded-bl-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 80%, black)`,
                        }}
                      >
                        HP:
                      </div>
                      <div
                        className="rounded-tr-lg rounded-br-lg p-1"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 60%, black)`,
                        }}
                      >
                        60
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
