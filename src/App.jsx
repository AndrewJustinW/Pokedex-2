import { Stack, Flex, VStack } from "@chakra-ui/react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PokemonGroup from "./components/PokemonGroup/PokemonGroup";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PageBar from "./components/Pagebar/Pagebar";
import { PokemonContext } from "./context/PokemonContext";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(12);

  const { selectedPokemon } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${
          offset * page - offset
        }`
      );

      setOriginalList(res.data.results);
      setPokemonList(res.data.results);
    };
    fetchPokemon();
  }, [offset, page]);

  return (
    <div className="App">
      <Stack direction="column" w="100%" spacing="30px">
        <Nav />
        <SearchBar
          originalList={originalList}
          setPokemonList={setPokemonList}
          page={page}
          setPage={setPage}
          offset={offset}
        />
        <Flex as="main" width="full" justify="center">
          <VStack>
            <PokemonGroup pokemonList={pokemonList} />
            <PageBar page={page} setPage={setPage} />
          </VStack>
          {selectedPokemon && <PokemonInfo />}
        </Flex>
      </Stack>
    </div>
  );
}

export default App;
