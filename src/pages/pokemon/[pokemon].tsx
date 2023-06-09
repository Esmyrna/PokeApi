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
  
  <C.AllComponentPokemon>
       {pokemonItem && (
          <>
          <C.PokeCard>
          <C.ImgCard src={pokemonItem?.sprites?.other?.home.front_default}
            alt="">
          </C.ImgCard>
        </C.PokeCard>
        <C.PokeBody>
        <C.PokemonTitle>
            {pokemonItem.name}
          </C.PokemonTitle>
       <C.Pokemon>
        
        <C.PokeInfo>
        <C.PokemonSubTitle>
              Name:
            </C.PokemonSubTitle>
            <C.PokemonText>
              {pokemonItem?.name}
            </C.PokemonText>
        </C.PokeInfo>
        <C.PokeInfo>
        <C.PokemonSubTitle>
              Type:
            </C.PokemonSubTitle>
            <C.PokemonText>
              {pokemonItem?.types?.map((type: any) => {
                return <p key={type.type.name}>{type.type.name},</p>;
              })}
            </C.PokemonText>
        </C.PokeInfo>
        <C.PokeInfo>
        <C.PokemonSubTitle>
              Abilities
            </C.PokemonSubTitle>
            <C.PokemonText>
              {pokemonItem?.abilities?.map((ability: any) => {
                return (
                  <p key={ability.ability.name}>{ability.ability.name},</p>
                );
              })}
            </C.PokemonText>
        </C.PokeInfo>
        
       
       </C.Pokemon>
          </C.PokeBody>
             </>

           
       )}
   </C.AllComponentPokemon>
  )
}

export default Pokemon
