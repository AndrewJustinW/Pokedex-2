import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

const SearchBar = () => {
  return (
    <InputGroup w="300px" alignSelf="center">
        <Input bg="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" placeholder="Search Pokemon!" type="search"/>
        <InputRightElement  children={<Button >Go</Button>} />
    </InputGroup>
  )
}

export default SearchBar