import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [allPokemon, setAllPokemon] = useState();
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      setAllPokemon(res.data.results);
    };
    fetchAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        allPokemon,
        setAllPokemon,
        searchActive,
        setSearchActive,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
