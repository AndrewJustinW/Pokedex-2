import { Stack, Flex, Image } from "@chakra-ui/react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PokemonGroup from "./components/PokemonGroup/PokemonGroup";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PageBar from "./components/Pagebar/Pagebar";
import { PokemonContext } from "./context/PokemonContext";
import { useMediaQuery } from "@chakra-ui/react";
import logo from "./assets/pokemonIcon.svg";

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
    <div className="App" zIndex="5">
      {/* <Image
        width="500px"
        position="absolute"
        top="-200px"
        left="-200px"
        zIndex="1"
        src={logo}
      /> */}
      <Stack
        direction="column"
        spacing="30px"
        as="main"
        align="center"
        overflow={{ sm: "hidden", md: "unset" }}
        zIndex="5"
      >
        <Nav />
        <SearchBar
          originalList={originalList}
          setPokemonList={setPokemonList}
          page={page}
          setPage={setPage}
          offset={offset}
        />
        <Flex
          as="main"
          justify="center"
          align="flex-start"
          spacing="20px"
          width="400px"
        >
          <Stack align="center">
            <PokemonGroup pokemonList={pokemonList} />
            <PageBar page={page} setPage={setPage} />
          </Stack>
          {selectedPokemon && <PokemonInfo />}
        </Flex>
      </Stack>
    </div>
  );
}

export default App;
