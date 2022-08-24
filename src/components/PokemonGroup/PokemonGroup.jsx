import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonGroup = ({ pokemonList }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  return (
    <Grid
      templateColumns={selectedPokemon ? "repeat(3, 1fr)" : "repeat(4, 1fr)"}
      gap={5}
      w={selectedPokemon ? "900px" : "1200px"}
      pr="30px"
    >
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonGroup;
