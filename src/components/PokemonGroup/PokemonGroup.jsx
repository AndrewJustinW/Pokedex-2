import { Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonGroup = ({ pokemonList }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  return (
    <Grid
      templateColumns={{
        sm: selectedPokemon ? "repeat(1, 1fr)" : "repeat(1, 1fr)",
        md: selectedPokemon ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
        lg: selectedPokemon ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
        xl: selectedPokemon ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
      }}
      gap={4}
      w={{
        sm: selectedPokemon ? "300px" : "400px",
        md: selectedPokemon ? "400px" : "650px",
        lg: selectedPokemon ? "520px" : "1000px",
        xl: selectedPokemon ? "800px" : "1200px",
      }}
    >
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonGroup;
