import { HStack, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import "./pagebar.scss";

const PageBar = ({ page, setPage }) => {
  let totalPages = [];
  let totalPokemon = 898;
  for (let i = 1; i <= totalPokemon / 12; i++) {
    totalPages.push(i);
  }
  const { selectedPokemon } = useContext(PokemonContext);

  return (
    <HStack
      className="pages-container"
      w={{
        base: selectedPokemon ? "300px" : "400px",
        md: selectedPokemon ? "400px" : "730px",
        lg: selectedPokemon ? "565px" : "1000px",
        xl: selectedPokemon ? "790px" : "1200px",
      }}
      overflowX="scroll"
      alignSelf="flex-start"
      pb="20px"
    >
      {totalPages.map((singlePage) => (
        <Button
          color={singlePage === page && "white"}
          background={singlePage === page && "red"}
          onClick={() => {
            setPage(singlePage);
          }}
          _hover={{ background: "black", color: "white" }}
        >
          {singlePage}
        </Button>
      ))}
    </HStack>
  );
};

export default PageBar;
