import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const PokemonGroup = () => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={5} w="75%" pr="30px">

        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>
        <GridItem bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" borderRadius="20px" padding="10px" height="350px">Random</GridItem>



    </Grid>
  )
}

export default PokemonGroup