// pages/pokemon/[pokemon].js

import { useGlobalContext } from '@/context/global'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import * as C from "../../styles/Pokemon"
const Pokemon = () => {
  const router = useRouter();
  const { pokemon } = router.query;

  const {getPokemon, loading, pokemon: pokemonItem} = useGlobalContext();
  
  useEffect(() => {
    if(pokemon){
      getPokemon(pokemon);
    }
  }, []);

  console.log(pokemon);



  return (
  
    <div>
       {pokemonItem && (
          <C.PokeCard>
            <C.ImgCard src={pokemonItem?.sprites?.other?.home.front_default}
            alt="">
            </C.ImgCard>
            <C.PokemonTitle>
              {pokemonItem.name}
            </C.PokemonTitle>
            <C.Pokemon>
              <C.PokemonSubTitle>
                Name:
              </C.PokemonSubTitle>
              <C.PokemonText>
                {pokemonItem?.name}
              </C.PokemonText>
            </C.Pokemon>
              <C.PokemonType>
                <C.PokemonSubTitle>
                  Type:
                </C.PokemonSubTitle>
                <C.PokemonText>
                {pokemonItem?.types?.map((type: any) => {
  return <p key={type.type.name}>{type.type.name},</p>;
})}
                </C.PokemonText>
              </C.PokemonType>
              <C.PokemonType>
              <C.PokemonSubTitle>
                  Height:
                </C.PokemonSubTitle>
                <C.PokemonText>
                  {pokemonItem?.height}
                </C.PokemonText>
              </C.PokemonType>
              <C.PokemonType>
                <C.PokemonSubTitle>
                  
                </C.PokemonSubTitle>
                <C.PokemonText>
                
                </C.PokemonText>
              </C.PokemonType>

          </C.PokeCard>
           
       )}
    </div>
  )
}

export default Pokemon
