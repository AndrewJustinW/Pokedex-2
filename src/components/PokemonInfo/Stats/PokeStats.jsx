import React from "react";
import { VStack, Text, Flex } from "@chakra-ui/react";
const PokeStats = ({ pokeStats }) => {
  console.log(pokeStats);

  const stats = (stat) => {
    let statOptions = {};
    switch (stat) {
      case "hp":
        statOptions.name = "HP";
        statOptions.color = "red";
        break;
      case "attack":
        statOptions.name = "ATK";
        statOptions.color = "Orange";
        break;
      case "defense":
        statOptions.name = "DEF";
        statOptions.color = "Yellow";
        break;
      case "special-attack":
        statOptions.name = "SPA";
        statOptions.color = "lightblue";
        break;
      case "special-defense":
        statOptions.name = "SPD";
        statOptions.color = "lightgreen";
        break;
      case "speed":
        statOptions.name = "SPD";
        statOptions.color = "purple";
        break;

      default:
        break;
    }

    return statOptions;
  };
  return (
    <VStack>
      <Text>STATS</Text>
      <Flex justify="space-around" w="300px">
        {pokeStats.map((stat) => (
          <VStack
            background="#ebf0f8"
            borderRadius="20px"
            fontWeight="bold"
            p="4px"
          >
            <Text
              borderRadius="50%"
              p="7px"
              background={stats(stat.statName).color}
              fontSize="xs"
              color="white"
            >
              {stats(stat.statName).name}
            </Text>
            <Text>{stat.statNum}</Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
};

export default PokeStats;
