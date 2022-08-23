import { Stack, Flex, VStack } from "@chakra-ui/react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PokemonGroup from "./components/PokemonGroup/PokemonGroup";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import PageBar from "./components/Pagebar/Pagebar";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(15);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=15&offset=${
          offset * page - offset
        }`
      );
      setPokemonList(res.data.results);
    };
    fetchPokemon();
  }, [offset, page]);

  return (
    <div className="App">
      <Stack direction="column" w="100%" spacing="30px">
        <Nav />
        <SearchBar />
        <Flex as="main" width="full" justify="center">
          <VStack>
            <PokemonGroup pokemonList={pokemonList} />
            <PageBar page={page} setPage={setPage} />
          </VStack>
          <PokemonInfo />
        </Flex>
      </Stack>
    </div>
  );
}

export default App;
