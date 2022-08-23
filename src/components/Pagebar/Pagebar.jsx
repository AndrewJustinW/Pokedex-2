import { HStack, Button } from "@chakra-ui/react";
import "./pagebar.scss";

const PageBar = ({ page, setPage }) => {
  let totalPages = [];
  let totalPokemon = 898;
  for (let i = 1; i <= totalPokemon / 15; i++) {
    totalPages.push(i);
  }

  return (
    <HStack
      className="pages-container"
      w="750px"
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
        >
          {singlePage}
        </Button>
      ))}
    </HStack>
  );
};

export default PageBar;
