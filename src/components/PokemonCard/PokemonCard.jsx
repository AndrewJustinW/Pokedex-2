import {
  GridItem,
  VStack,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PokemonContext } from "../../context/PokemonContext";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const PokemonCard = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [types, setTypes] = useState([]);
  const [hovered, setHovered] = useState(false);
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  let idNumber = ("0000" + pokemonInfo.id).slice(-3);

  useEffect(() => {
    const fetchSinglePokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemonInfo(res.data);
      // console.log(res.data)
      let loadedTypes = [];

      for (let i = 0; i < res.data.types.length; i++) {
        loadedTypes.push(res.data.types[i].type.name);
      }

      setTypes(loadedTypes);
    };

    fetchSinglePokemon();
  }, [pokemon.name]);

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

  if (pokemonInfo.sprites === undefined || pokemonInfo.types === undefined) {
    return <div></div>;
  }

  return (
    <GridItem
      marginBottom="30px"
      bg="white"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      borderRadius="20px"
      padding="10px"
      height="230px"
      fontWeight="bold"
      cursor="pointer"
      onClick={() => {
        setSelectedPokemon(pokemonInfo);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Text
        fontSize="sm"
        background={selectedPokemon === pokemonInfo ? "red" : "grey "}
        borderRadius="10px"
        p="0 5px"
        color="white"
        w="50px"
      >
        # {idNumber}
      </Text>

      <VStack spacing="15px">
        <Flex direction="column" justify="flex-end" h="80px">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonInfo.id}.gif`}
            alt="Pokemon Pic"
            objectFit="cover"
            // If a gif doesn't exist for the pokemon just use the static image.
            onError={(event) => {
              event.target.src = `${pokemonInfo.sprites.front_default}`;
              event.onerror = null;
            }}
          />
        </Flex>
        <VStack spacing="10px">
          <Flex align="center">
            <Text
              fontSize="lg"
              marginRight="5px"
              color={selectedPokemon === pokemonInfo ? "red" : "black"}
              fontWeight="extrabold"
              borderBottom={
                hovered && pokemonInfo !== selectedPokemon && "solid 4px red"
              }
            >
              {pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}
            </Text>
            <MdOutlineCatchingPokemon
              fontSize="20px"
              color={selectedPokemon === pokemonInfo ? "red" : "black "}
              borderRadius="10px"
            />
          </Flex>

          <UnorderedList listStyleType="none">
            <HStack spacing="10px">
              {types.map((type) => (
                <ListItem
                  color="white"
                  p="0 10px"
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
      </VStack>
    </GridItem>
  );
};

export default PokemonCard;
