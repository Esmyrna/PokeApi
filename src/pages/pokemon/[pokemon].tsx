// pages/pokemon/[pokemon].js

import { useGlobalContext } from '@/context/global'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Pokemon = () => {
  const router = useRouter();
  const {pokemon} = router.query;

  const {getPokemon, loading, pokemon: pokemonItem} = useGlobalContext();
  
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      pokemon
    </div>
  )
}

export default Pokemon
