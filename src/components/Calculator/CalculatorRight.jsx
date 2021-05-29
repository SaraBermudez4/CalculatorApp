import { Box } from '@chakra-ui/layout'
import React from 'react'
import styled from 'styled-components'

const StypedBoxRight = styled(Box)`
    margin-top:0px !important;
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

const CalculatorRight = () => {
    return (
        <>
            <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="multiply">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    x
                </button>
            </StypedBoxRight>
            <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="subtract">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    -
                </button>
            </StypedBoxRight>
            <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="add">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    +
                </button>
            </StypedBoxRight>
            <StypedBoxRight h="160px" bg="rgb(0, 68, 102)" id="equals">
                <button style={{ height: "100%", width: "100%" }} onClick={() => console.log("Hola")}>
                    =
                </button>
            </StypedBoxRight>
        </>
    )
}

export default CalculatorRight
