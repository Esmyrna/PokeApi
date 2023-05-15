import PokemonGrid from "@/components/PokemonGrid";
import { useGlobalContext } from "@/context/global";
import { Pokemon } from "@/styles/Pokemon";
 
import { useState } from "react";


export default function Home() {
  const { allPokemonData } = useGlobalContext();
  const [search, setSearch] = useState("");


  console.log(allPokemonData)
 
  return (
    <>
      <main>
      <PokemonGrid     />
      </main>
    </>
  );
}
