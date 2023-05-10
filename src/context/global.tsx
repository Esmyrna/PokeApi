import { useContext, createContext, ReactNode } from "react";

interface GlobalContextProps {
  value: string;
}

// Passar o estado inicial para o nosso Context do React.

const GlobalContext = createContext<GlobalContextProps>({
  value: "",
});

// Provider vai passar as informações para todos os componentes

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalContext.Provider value={{ value: 'Hello World' }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext).value;
};
