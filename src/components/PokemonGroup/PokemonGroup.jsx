import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonGroup = ({ pokemonList }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} w="800px" pr="30px">
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonGroup;
