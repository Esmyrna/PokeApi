import { Pokemon, useGlobalContext } from '@/context/global';
import * as C from "../../styles/Home"
import React from 'react'
import PokemonCard from '../PokemonCard';
import { SearchResults } from '@/styles/Form';

 
const PokemonGrid: React.FC  = () => {

  const { allPokemonData } = useGlobalContext();

  return (
    <>
      <C.AllPokemon>
        {allPokemonData ? (
          allPokemonData.map((mappedPokemon) => {
            return (
              <PokemonCard key={mappedPokemon.id}
                pokemon={mappedPokemon} />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </C.AllPokemon>
    </>
  )
}

export default PokemonGrid