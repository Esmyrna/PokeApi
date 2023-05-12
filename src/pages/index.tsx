import { useGlobalContext } from "@/context/global";
import * as C from "../styles/Home";
import GlobalStyle, *  as Jolonga from '../styles/global'
interface Pokemon {
  name: string;
  url: string;
  id: number;
  image: string;
}

export default function Home() {
  const { allPokemonData } = useGlobalContext();

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
                    <C.Img></C.Img>
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
