import { Box, Center, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'

const NavBar = () => {
    return (
        <Flex>
            <Box p="2" bg="#ac3939" width="200vh" color="white">
                <Center>
                    <Heading size="md">Calculator app</Heading>
                </Center>
            </Box>

        </Flex>
    )
}

export default NavBar
