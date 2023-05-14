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

  const pkColors = [
    "#f8d5a3",
    "#f5b7b1",
    "#c39bd3",
    "#aed6f1",
    "#a3e4d7",
    "#f9e79f",
    "#fadbd8",
    "#d2b4de",
    "#a9cce3",
    "#a2d9ce",
    "#f7dc6f",
    "#f5cba7",
    "#bb8fce",
    "#85c1e9",
    "#76d7c4",
  ];

  const randomColor = pkColors[Math.floor(Math.random() * pkColors.length)];
  

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
        <C.PokeInfo>
        <C.PokemonSubTitle>
              Stats
            </C.PokemonSubTitle>
            <C.PokemonText>
              {pokemonItem?.stats?.map((stat: any) => {
                return <p key={stat.stat.name}>{stat.stat.name},</p>;
              })}
            </C.PokemonText>
        </C.PokeInfo>
        <C.PokeInfo>
        <C.PokemonSubTitle>
              A few moves:
            </C.PokemonSubTitle>
            <C.PokemonText>
              {pokemonItem?.moves?.slice(0, 3).map((move: any) => {
                return <p key={move.move.name}>{move.move.name},</p>;
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
