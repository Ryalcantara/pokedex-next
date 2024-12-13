import {
  getColor,
  getLimit,
  getPokemon,
  getRegion,
} from "@/app/api/api";
import PokemonPagination from "../components/pagination/pagination";
import Image from "next/image";

export default async function PokemonCard({ params }: { params: { id: string}}) {
  const id = parseInt(params.id);
  const [pokeData, getNumber, getColorSpecies, getLocation] = await Promise.all(
    [getPokemon(id), getLimit(id), getColor(id), getRegion(id)]
  );
  return (
    <div
      className="h-dvh w-dvw"
      style={{
        backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 50%, white)`,
      }}
    >
      <div className={`flex flex-col items-center gap-4`}>
        <PokemonPagination currentPage={id} getLimit={getNumber} />
      </div>
      <div
        className="flex flex-col gap-9 mx-3 justify-center"
        style={{
          height: "calc(100dvh - 11.5rem)",
        }}
      >
        <div className="flex flex-col gap-3 font-bold text-2xl ">
          <h1>{`#${pokeData.id}`}</h1>
          {pokeData.name}
        </div>
        <div className="flex  items-start ">
          <div className="flex">
            <div className="rotate-180 [writing-mode:vertical-lr]  font-medium">
              Region: {getLocation.region.name}
            </div>
            <div className="hidden lg:flex flex-col lg:m-10">
              <p className="">Height: {pokeData.height}m</p>
              <p>Weight: {pokeData.weight}kg</p>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="">
              <h1 className="absolute opacity-40 text-[4rem] lg:text-[5rem] font-extrabold z-10">
                {getColorSpecies.names[0].name}
              </h1>
              <div className="relative md:w-[25rem] lg:w-[30rem]">
                <div className="rounded-full bg-white/50 relative overflow-hidden h-[350px] w-[350px]"></div>

                <div className="absolute top-0 left-0 pointer-events-none">
                  <Image
                    src={
                      pokeData.sprites.other["official-artwork"].front_default
                    }
                    height={400}
                    width={400}
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col">
              <div className="flex gap-5" >
              {pokeData.types.map((type, index) => (
                  <Image
                    src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type.type.name}.svg`}
                    alt={`${type.type.name} type`}
                    width={100}
                    height={100}
                    className="flex bg-white/30  rounded-full p-5"
                    key={index}
                  />
                ))}
                </div>
              <h1 className="font-bold text-4xl p-5">Base Stats:</h1>
              <div className="flex">
                <div className="flex gap-4">
                  <div className="flex gap-5 text-white border-l-1  flex-wrap w-[20rem] px-5">
                    {pokeData.stats.map((stat, index) => (
                      <>
                        <div className="flex" key={index}>
                          <div
                            className="rounded-tl-lg rounded-bl-lg p-1"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 80%, black)`,
                            }}
                          >
                            {stat.stat.name}
                          </div>
                          <div
                            className="rounded-tr-lg rounded-br-lg p-1"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${getColorSpecies.color.name} 60%, black)`,
                            }}
                          >
                            {stat.base_stat}
                          </div>
                        </div>
                      </>
                    ))}
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
