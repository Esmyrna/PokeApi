import React, { useState } from 'react'
import * as C from "../../styles/Home"
import { Pokemon } from '@/context/global';
import  Router  from 'next/router';

interface PokemonCardProps{
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {

  const [shouldShowShiny, setShouldShowShiny] = useState(false);

  const changShinyState = (e: React.MouseEvent) => {
    setShouldShowShiny(current => !current)
  }

 const changeColorRoute = () => {
    const color = shouldShowShiny ? 'shiny' : 'default';
    Router.push(`/pokemon/${pokemon.name}?color=${color}`);
   
 }
  return (
    <C.Card >
      <C.Button onClick={changShinyState}>Show shiny</C.Button>
      <C.ImageCard onClick={changeColorRoute} >
        <C.Img src={shouldShowShiny
          ? pokemon.sprites.other.home.front_shiny
          : pokemon.sprites.other.home.front_default}
          alt={pokemon.name} />
      </C.ImageCard>
      <C.CardBody>
        <h3>{pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}</h3>
        <p>More details: &nbsp; &rarr; </p>
      </C.CardBody>
    </C.Card>
  )
}

export default PokemonCard