import { useContext, createContext, ReactNode, useReducer, useEffect } from "react";

// interface para tipar informações do pokemon

interface Pokemon {
  name: string;
  url: string;
}

// interface para tipar as propiedades do meu estado inicial

interface GlobalContextProps {
  value: string;
  allPokemon: Pokemon[];
  pokemon: Pokemon;
  pokemonDataBase: Pokemon[];
  searchResults: Pokemon[];
  next: string;
  loading: boolean;
}

// interface para a ação

interface Action {
  type: string;
  payload?: any;
}

const GlobalContext = createContext<GlobalContextProps>({
  value: "",
  allPokemon: [],
  pokemon: { name: "", url: "" },
  pokemonDataBase: [],
  searchResults: [],
  next: "",
  loading: false,
});

// função reducer
const reducer = (state: GlobalContextProps, action: Action) => {
  switch (action.type) {
    // adicionar um caso para cada tipo de ação
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

  const baseUrl = 'https://pokeapi.co/api/v2/'

  const allPokemon = async () => {
    const res = await fetch(`${baseUrl}pokemon?limit=20`);
    const data = await res.json();
    console.log(data)
  }

  // Renderizar meu componente com os dados da API:

  useEffect(() => {
    allPokemon();
  })

  // objeto do meu estado inicial:
  const initialState: GlobalContextProps = {
    allPokemon: [],
    pokemon: { name: "", url: "" },
    pokemonDataBase: [],
    searchResults: [],
    next: "",
    loading: false,
    value: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
