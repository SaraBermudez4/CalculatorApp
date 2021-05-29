import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'
import styled from 'styled-components'

const StyledBoxNumber = styled(Box)`
    border-color: black;
    border-width: thin;
    &:hover{
        border-color: #b4b4b4;
    }
    &:active{
        background: #ff8671;
    }
    font-size: 20px;

`
const CalculatorTop = () => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" width="240px">
            <StyledBoxNumber bg="rgb(172, 57, 57)" w="160px" h="80px" id="clear">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    AC
                    </button>
            </StyledBoxNumber>
            <StyledBoxNumber bg="rgb(102, 102, 102)" h="80px" w="80px" id="divide">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    /
                    </button>
            </StyledBoxNumber>
        </Grid>
    )
}

export default CalculatorTop
