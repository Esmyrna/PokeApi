import { Pokemon, useGlobalContext } from '@/context/global';
import * as C from "../../styles/Home"
import React from 'react'
import PokemonCard from '../PokemonCard';
import Form from '../Form';
import { SearchResults } from '@/styles/Form';

type ChildComponentProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const PokemonGrid:  React.FC<ChildComponentProps> = ({ search, setSearch })=> {

  const { allPokemonData, searchResults, realTimeSearch } = useGlobalContext();



  return (
    <>
     <Form />
    {search &&  <SearchResults>
 
    </SearchResults>
    
    
    }
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
    </>
  )
}

export default PokemonGrid