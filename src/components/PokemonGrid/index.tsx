import { useGlobalContext } from '@/context/global';
import * as C from "../../styles/Home"
import React from 'react'
import PokemonCard from '../PokemonCard';
const PokemonGrid = () => {

  const { allPokemonData } = useGlobalContext();

  return (
    <C.AllPokemon>
      {allPokemonData ? (
        allPokemonData.map((mappedPokemon) => {
          return (
            <PokemonCard key={mappedPokemon.id} 
                         pokemon={mappedPokemon}  />
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </C.AllPokemon>
  )
}

export default PokemonGrid