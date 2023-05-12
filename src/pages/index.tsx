import { useGlobalContext } from "@/context/global";
import variable from "../styles/global.module.scss"
export default function Home() {
  const { allPokemonData } = useGlobalContext();
console.log(allPokemonData)
  return (
    <>
      <main>
   
        <div className={variable.body}>
          {allPokemonData ? (
            allPokemonData.map((pokemon) => {
              return (
                <div className={variable.background} key={pokemon.id}>
                  <div className={variable.cardImage}>
                    <img src={pokemon.sprites.other.home.front_shiny}
                    alt={pokemon.name}/>
                  </div>
                  <div className="cardBody">
                    <h3>{pokemon.name}</h3>
                    <p>More details: &nbsp; &rarr; </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </main>
    </>
  );
}
