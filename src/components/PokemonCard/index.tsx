import React, { useState } from 'react'
import * as C from "../../styles/Home"
import { Pokemon } from '@/context/global';

interface PokemonCardProps{
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {


  const [shouldShowShiny, setShouldShowShiny] = useState(false);

  const changShinyState = (e: React.MouseEvent) => {
    setShouldShowShiny(current => !current)
  }

  return (
    <C.Card >
      <button onClick={changShinyState}>Show shiny</button>
      <C.ImageCard>
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