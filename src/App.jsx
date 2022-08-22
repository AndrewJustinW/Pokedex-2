import { Stack,  Flex } from "@chakra-ui/react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import PokemonGroup from "./components/PokemonGroup/PokemonGroup";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Stack
        direction="column"
        w="100%"
        spacing="30px"
      >
        <Nav />

        <SearchBar />

        <Flex as="main" >

        <PokemonGroup />
        <PokemonInfo/>

        </Flex>
      </Stack>
    </div>
  );
}

export default App;
