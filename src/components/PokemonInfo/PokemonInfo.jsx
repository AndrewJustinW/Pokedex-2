import {
  Image,
  VStack,
  Text,
  Stack,
  Flex,
  HStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PokeStats from "./Stats/PokeStats";

const PokemonInfo = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  const [types, setTypes] = useState([]);
  const [pokeStats, setPokeStats] = useState([]);
  const [pokeInfo, setPokeInfo] = useState();
  const [scrolled, setScrolled] = useState(false);
  let idNumber = ("0000" + selectedPokemon.id).slice(-3);

  useEffect(() => {
    const pokeFetch = async () => {
      const infoRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon.id}`
      );
      setPokeInfo(infoRes.data);
    };

    pokeFetch();
    // fetchEvolutionChain();

    let loadedTypes = [];
    let loadedStats = [];

    for (let i = 0; i < selectedPokemon.types.length; i++) {
      loadedTypes.push(selectedPokemon.types[i].type.name);
    }

    selectedPokemon.stats.forEach((stat) => {
      loadedStats.push({ statName: stat.stat.name, statNum: stat.base_stat });
    });

    setPokeStats(loadedStats);
    setTypes(loadedTypes);
  }, [selectedPokemon]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 150 ? setScrolled(true) : setScrolled(false);
  };

  const typeColor = (type) => {
    let color = "";
    switch (type) {
      case "grass":
        color = "#3bcb01";
        break;
      case "fire":
        color = "rgb(255,153,77)";
        break;
      case "water":
        color = "#717fff";
        break;
      case "poison":
        color = "purple";
        break;
      case "electric":
        color = "#ffd525";
        break;
      case "rock":
        color = "grey";
        break;
      case "ground":
        color = "brown";
        break;
      case "normal":
        color = "#adab8d";
        break;
      case "psychic":
        color = "#fe509b";
        break;
      case "fairy":
        color = "hotpink";
        break;
      case "fighting":
        color = "rgb(223,101,99)";
        break;
      case "flying":
        color = "teal";
        break;
      case "bug":
        color = "rgb(134, 212, 17)";
        break;
      case "ghost":
        color = "pink";
        break;
      case "dragon":
        color = "indianred";
        break;
      case "ice":
        color = "#88dbec";
        break;
      case "steel":
        color = "#a6a8c6";
        break;
      case "dark":
        color = "#494949";
        break;

      default:
        break;
    }

    return color;
  };

  return (
    <Stack
      fontWeight="bold"
      position={{ sm: "absolute", md: scrolled ? "sticky" : "unset" }}
      top={{ sm: "0", md: scrolled ? "50px" : "" }}
      bg="white"
      borderRadius="20px"
      width={{ sm: "100%", md: "350px" }}
      height={{ sm: "100vh", md: "unset" }}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      p="20px 30px"
      marginLeft={{ sm: 0, md: "15px" }}
      zIndex={{ base: "10", md: 0 }}
    >
      {/* Close Icon */}
      <Flex justify="flex-end">
        <AiOutlineCloseCircle
          fontSize="25px"
          justifySelf="flex-end"
          cursor="pointer"
          onClick={() => {
            setSelectedPokemon(null);
          }}
        />
      </Flex>

      <VStack spacing="20px">
        <Image
          objectFit="cover"
          marginBottom="15px"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${selectedPokemon.id}.gif`}
          onError={(event) => {
            event.target.src = `${selectedPokemon.sprites.front_default}`;
            event.onerror = null;
          }}
        />

        <VStack spacing="4px">
          <Text
            fontSize="sm"
            background={"grey "}
            borderRadius="10px"
            p="0 5px"
            color="white"
            w="50px"
          >
            # {idNumber}
          </Text>

          <Text fontSize="3xl" marginRight="5px" color={"black"}>
            {selectedPokemon.name[0].toUpperCase() +
              selectedPokemon.name.slice(1)}
          </Text>

          <UnorderedList listStyleType="none">
            <HStack spacing="10px">
              {types.map((type) => (
                <ListItem
                  color="white"
                  p="5px 10px"
                  className="pokemon-type"
                  style={{ backgroundColor: typeColor(type) }}
                  borderRadius="5px"
                >
                  {type[0].toUpperCase() + type.slice(1)}
                </ListItem>
              ))}
            </HStack>
          </UnorderedList>
        </VStack>

        <VStack>
          <Text fontWeight="extrabold">POKEDEX ENTRY</Text>

          {pokeInfo && (
            <Text fontSize="md" fontWeight="normal" textAlign="center">
              {pokeInfo.flavor_text_entries[0].flavor_text.replace("\f", " ")}
            </Text>
          )}
        </VStack>

        <VStack spacing="5px" w="95%">
          <Text fontWeight="bold">ABILITIES</Text>
          <HStack w="100%">
            {selectedPokemon.abilities.map((ability) => (
              <Text
                w="50%"
                p="7px 20px"
                background="#ebf0f8"
                borderRadius="25px"
                border="solid 1px #bbbbcd"
              >
                {ability.ability.name}
              </Text>
            ))}
          </HStack>
        </VStack>

        <HStack w="95%">
          <VStack w="50%" textAlign="center">
            <Text w="100%">HEIGHT</Text>
            <Text
              w="100%"
              p="7px 20px"
              background="#ebf0f8"
              borderRadius="25px"
            >
              {selectedPokemon.height}m
            </Text>
          </VStack>

          <VStack w="50%" textAlign="center">
            <Text w="100%">WEIGHT</Text>
            <Text
              w="100%"
              p="7px 20px"
              background="#ebf0f8"
              borderRadius="25px"
            >
              {selectedPokemon.weight}kg
            </Text>
          </VStack>
        </HStack>

        <PokeStats pokeStats={pokeStats} />
      </VStack>
    </Stack>
  );
};

export default PokemonInfo;
