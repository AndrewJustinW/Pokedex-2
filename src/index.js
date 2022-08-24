import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import PokemonContextProvider, {
  PokemonContext,
} from "./context/PokemonContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PokemonContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PokemonContextProvider>
  </React.StrictMode>
);
