import Pokemon from "@/pages/pokemon/[pokemon]";
import { SearchResults } from "@/styles/Form";
import { useContext, createContext, ReactNode, useReducer, useEffect, useState } from "react";

export interface Pokemon {
  sprites: any;
  name: any;
  url: Object;
  id: number;
  types: [];
  height: number;
  abilities: [];
}

interface GlobalContextProps {
  value: string;
  allPokemon: Pokemon[];
  pokemon: Pokemon;
  pokemonDataBase: Pokemon[];
  searchResults: Pokemon[];
  next: string;
  loading: boolean;
  allPokemonData: Pokemon[];
  getPokemon: any;



}

interface Action {
  type: string;
  payload?: any;
}

const LOADING = "LOADING";
const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const GET_POKEMON = "GET_POKEMON"
const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE"
const GET_SEARCH = "GET_SEARCH";

const GlobalContext = createContext<GlobalContextProps>({
  value: "",
  allPokemon: [],
  pokemon: { name: "", url: "", sprites: [], id: 1, types: [], height: 1, abilities: [] },
  pokemonDataBase: [],
  searchResults: [],
  next: "",
  loading: false,
  allPokemonData: [],
  getPokemon: Object,


});



const reducer = (state: GlobalContextProps, action: Action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case GET_ALL_POKEMON:
      return { ...state, allPokemon: action.payload, loading: false }
    case GET_POKEMON:
      return { ...state, pokemon: action.payload, loading: false }
    case GET_POKEMON_DATABASE:
      return { ...state, pokemon: action.payload, loading: false }
    case GET_SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const baseUrl = 'https://pokeapi.co/api/v2/'

  const allPokemon = async () => {
    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
    dispatch({ type: "GET_ALL_POKEMON", payload: data.results });

    const AllPokemons = [];
    for (const pokemon of data.results) {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      AllPokemons.push(pokemonData);
    }
    setallPokemonData(AllPokemons)
  }
  const getPokemon = async (name: string) => {
    dispatch({ type: "LOADING" });
    const res = await fetch(`${baseUrl}pokemon/${name}`);
    const data = await res.json();

    dispatch({ type: "GET_POKEMON", payload: data })


  }



  const realTimeSearch = async (search: string) => {

    dispatch({ type: "LOADING" });
    if (!search) { // if search is empty, set searchResults to an empty array
      dispatch({ type: "GET_SEARCH", payload: [] });
      return;
    }
    //search pokemon database
    const res = await state.pokemonDataBase.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });
    console.log(search);
    dispatch({ type: "GET_SEARCH", payload: res });
    console.log(res);
  }
  console.log(SearchResults)
  const initialState: GlobalContextProps = {
    allPokemon: [],
    pokemon: { name: "", url: "", sprites: [], id: 1, types: [], height: 1, abilities: [] },
    pokemonDataBase: [],
    searchResults: [],
    next: "",
    loading: false,
    value: "",
    allPokemonData: [],
    getPokemon: [],

  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [allPokemonData, setallPokemonData] = useState<Pokemon[]>([]);


  useEffect(() => {

    allPokemon();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, allPokemonData, getPokemon }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
