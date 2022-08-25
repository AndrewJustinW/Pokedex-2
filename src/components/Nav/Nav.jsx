import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <Box
      p={{ base: "30px 10px", md: "30px" }}
      as="nav"
      w={{ base: "400px", md: "600px" }}
      background="white"
      borderRadius="10px"
      alignSelf="center"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    >
      <Flex direction="row" justify="space-around" color="grey">
        <button className="nav-link">Home</button>
        <button className="nav-link" style={{ color: "red" }}>
          Pokedex
        </button>
        <button className="nav-link">Videogames</button>
        <button className="nav-link">News</button>
      </Flex>
    </Box>
  );
};

export default Nav;
