import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import axios from "axios";

const SearchBar = ({ setPokemonList, setPage, page, offset }) => {
  const { allPokemon, setSearchActive } = useContext(PokemonContext);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    if (input.length > 0) {
      let filteredPokemon = allPokemon.filter((singlePokemon) => {
        if (singlePokemon.name.toLowerCase().startsWith(input.toLowerCase())) {
          return singlePokemon;
        }
      });

      filteredPokemon = filteredPokemon.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );

      setPokemonList(filteredPokemon);
      setSearchActive(true);
      console.log(input);
    }
  };

  useEffect(() => {
    if (input === "") {
      const fetchPokemon = async () => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${
            offset * page - offset
          }`
        );

        setPokemonList(res.data.results);
      };
      fetchPokemon();
      setSearchActive(false);
    }
  }, [input]);

  return (
    <InputGroup w="300px" alignSelf="center">
      <Input
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        placeholder="Search Pokemon Name!"
        type="search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <InputRightElement
        children={
          <Button
            margin="4px"
            size="sm"
            _hover={{ background: "red", color: "white" }}
            onClick={handleChange}
          >
            Go
          </Button>
        }
      />
    </InputGroup>
  );
};

export default SearchBar;
