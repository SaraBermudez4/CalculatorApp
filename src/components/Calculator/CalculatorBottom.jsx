import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'
import styled from 'styled-components'

const StyledBoxNumber = styled(Box)`
    background: #4d4d4d;
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
const CalculatorBottom = () => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" width="240px">
            <StyledBoxNumber id="zero" w="160px" h="80px">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    0
                    </button>
            </StyledBoxNumber>
            <StyledBoxNumber h="80px" w="80px" id="decimal">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    .
                    </button>
            </StyledBoxNumber>
        </Grid>
    )
}

export default CalculatorBottom
