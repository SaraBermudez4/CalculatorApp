import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/layout'

const Footer = () => {
    return (
        <Flex>
            <Box p="2" bg="#ac3939" width="200vh" color="white">
                <Center>
                    <Heading size="md">Hecho por Sara Bermudez Alvarez | Copyright 2021</Heading>
                </Center>
            </Box>
        </Flex>
    )
}

export default Footer
