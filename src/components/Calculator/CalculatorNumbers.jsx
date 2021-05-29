import { Box, Grid, GridItem } from '@chakra-ui/layout'
import React from 'react'
import styled from 'styled-components'
import CalculatorBottom from './CalculatorBottom'
import CalculatorTop from './CalculatorTop'

const StyledBoxNumber = styled(Box)`
    background: #4d4d4d;
    border-color: black;
    border-width: thin;
    width: 80px;
    &:hover{
        border-color: #b4b4b4;
    }
    &:active{
        background: #ff8671;
    }
    font-size: 20px;
`

const CalculatorNumbers = (props) => {
    console.log(props.obtenerNumero);
    return (
        <Grid width="240px">
            <GridItem colSpan={3}>
                <CalculatorTop />
            </GridItem>
            <GridItem>
                <StyledBoxNumber id="seven" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        7
                        </button>
                </StyledBoxNumber>
                <StyledBoxNumber id="eight" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        8
                        </button>
                </StyledBoxNumber>
                <StyledBoxNumber id="nine" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        9
                        </button>
                </StyledBoxNumber>
            </GridItem>
            <GridItem>
                <StyledBoxNumber id="four" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        4
                        </button>
                </StyledBoxNumber>
                <StyledBoxNumber id="five" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        5
                        </button>
                </StyledBoxNumber>
                <StyledBoxNumber id="six" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        6
                        </button>
                </StyledBoxNumber>
            </GridItem>
            <GridItem>
                <StyledBoxNumber id="one" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        1
                </button>
                </StyledBoxNumber>
                <StyledBoxNumber id="two" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        2
                        </button>
                </StyledBoxNumber>
                <StyledBoxNumber id="three" h="80px">
                    <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                        3
                        </button>
                </StyledBoxNumber>
            </GridItem>
            <GridItem colSpan={3}>
                <CalculatorBottom />
            </GridItem>
        </Grid>
    )
}

export default CalculatorNumbers
