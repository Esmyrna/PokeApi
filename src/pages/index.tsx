import { useGlobalContext } from "@/context/global";
import * as C from "../styles/Home";
import GlobalStyle, *  as Jolonga from '../styles/global'
 
export default function Home() {
  const { allPokemonData } = useGlobalContext();
console.log(allPokemonData)
  return (
    <>
      <main>
        <GlobalStyle />
        <C.AllPokemon>
          {allPokemonData ? (
            allPokemonData.map((pokemon) => {
              return (
                <C.Pokemon>
                  <C.CardImage>
                    <C.Img src={pokemon.sprites.other.home.front_shiny}></C.Img>
                  </C.CardImage>
                </C.Pokemon>
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
