import PokemonGrid from "@/components/PokemonGrid";
import { useGlobalContext } from "@/context/global";
import { useState } from "react";
export default function Home() {
  const { allPokemonData } = useGlobalContext();

  console.log(allPokemonData)
 
  return (
    <>
      <main>
        <PokemonGrid />
      </main>
    </>
  );
}
