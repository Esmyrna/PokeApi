import React, { FormEvent, useContext, useState } from 'react'
import * as C from "../../styles/Form"
import { useGlobalContext } from '@/context/global'
import { Button } from '@/styles/Home';
import { ButtonSearch } from '../../styles/Form';
 
  
const Form = () => {
    
    const handleSearch = (e: FormEvent<HTMLFormElement>, realTimeSearch: (search: string) => void) => {
        e.preventDefault();
        realTimeSearch(search)
      };

    const { allPokemonData } = useGlobalContext();
    const [search, setSearch] =useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
  return (
   <C.Form>
    <C.InputControl>
        <C.Input type="text" placeholder="Search for a Pokemon"
        onChange={handleChange}/>
    <ButtonSearch >
        Search
    </ButtonSearch>
    </C.InputControl>
   </C.Form>
  )
}

export default Form