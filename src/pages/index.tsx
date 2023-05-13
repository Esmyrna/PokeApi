import { useGlobalContext } from "@/context/global";
import * as C from "../styles/Home"
import { useState } from "react";
export default function Home() {
  const { allPokemonData } = useGlobalContext();

  console.log(allPokemonData)

  const [shouldShowShinies, setShouldShowShinies] = useState(false);

  const changShinyState = (e: React.MouseEvent) => {
    setShouldShowShinies(current => !current)
  }
  return (
    <>
      <main>

        <C.AllPokemon>
          {allPokemonData ? (
            allPokemonData.map((pokemon) => {
              return (
                <C.Card key={pokemon.id}>
                  <button onClick={changShinyState}>Show shiny</button>
                  <C.ImageCard>
                    <C.Img src={shouldShowShinies 
                                ? pokemon.sprites.other.home.front_shiny
                                : pokemon.sprites.other.home.front_default}
                                alt={pokemon.name} />
                  </C.ImageCard>
                  <C.CardBody>
                    <h3>{pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}</h3>
                    <p>More details: &nbsp; &rarr; </p>
                  </C.CardBody>
                </C.Card>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </C.AllPokemon>
      </main>
    </>
  );
}
