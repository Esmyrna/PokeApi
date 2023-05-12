import { Pokemon } from "@/styles/Home";
import { useContext, createContext, ReactNode, useReducer, useEffect, useState } from "react";

interface Pokemon {
  sprites: any;
  name: string;
  url: string;
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
  
}

interface Action {
  type: string;
  payload?: any;
}

const GET_ALL_POKEMON = "GET_ALL_POKEMON";

const GlobalContext = createContext<GlobalContextProps>({
  value: "",
  allPokemon: [],
  pokemon: { name: "", url: "", sprites: [] },
  pokemonDataBase: [],
  searchResults: [],
  next: "",
  loading: false,
  allPokemonData: [],
});

const LOADING = "LOADING";

const reducer = (state: GlobalContextProps, action: Action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true}
    case GET_ALL_POKEMON:
      return {...state, allPokemon: action.payload, loading: false }
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const baseUrl = 'https://pokeapi.co/api/v2/'

  const allPokemon = async () => {
    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
     dispatch({type: "GET_ALL_POKEMON", payload: data.results});

  const AllPokemons = [];
  for(const pokemon of data.results){
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData =  await pokemonRes.json();
      AllPokemons.push(pokemonData);
  }
    setallPokemonData(AllPokemons)
  }

  const initialState: GlobalContextProps = {
    allPokemon: [],
    pokemon: { name: "", url: "" , sprites: []},
    pokemonDataBase: [],
    searchResults: [],
    next: "",
    loading: false,
    value: "",
    allPokemonData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [allPokemonData, setallPokemonData] = useState<Pokemon[]>([]);


  useEffect(() => {
    allPokemon();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, allPokemonData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
