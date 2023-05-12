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
                <C.Pokemon key={pokemon.id}>
                  <C.CardImage>
                    <C.Img src={pokemon.sprites.other.home.front_shiny}
                    alt={pokemon.name}></C.Img>
                  </C.CardImage>
                  <C.CardBody>
                    <C.Title>{pokemon.name}</C.Title>
                    <C.Text>More details: &nbsp; &rarr; </C.Text>
                  </C.CardBody>
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
