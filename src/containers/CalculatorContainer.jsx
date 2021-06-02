import { Box, Container, Grid, GridItem } from '@chakra-ui/layout'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledContainerCalculator = styled(Container)`
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
    font-family: 'Share Tech Mono', monospace;
    padding: 19px;
    color: white;
    margin-top: 2%;
    text-align:-webkit-center;
    background:black;
    width:360px;
    border-radius: 5px;
`
const StyledText1 = styled.div`
    font-family: digital;
    font-size: 20px;
    line-height: 20px;
    color: orange;
`
const StyledText2 = styled.div`
@font-face {
  font-family: 'Digital';
  src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot');
  src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix')
      format('embedded-opentype'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2')
      format('woff2'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff')
      format('woff'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf')
      format('truetype'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7')
      format('svg');
}
    font-size: 30px;
    font-family: digital;
    color: white;
`

const StyledBoxNumber = styled(Box)`
    background: #4d4d4d;
    border-color: black;
    border-width: thin;
    border-radius: 3px;
    &:hover{
        border-color: #b4b4b4;
    }
    &:active{
        background: #ff8671;
    }
    font-size: 20px;
`

const StypedBoxRight = styled(Box)`
    margin-top:0px !important;
    border-color: black;
    border-width: thin;
    border-radius: 3px;
    &:hover{
        border-color: #b4b4b4;
    }
    &:active{
        background: #ff8671;
    }
    font-size: 20px;
`

const CalculatorContainer = () => {

    const [textResultado, setTextResultado] = useState('')
    const [respuesta, setRespuesta] = useState(0)

    const obtenerNumero = (numero) => {

        if (textResultado.includes('=')) {
            setTextResultado('')
            setRespuesta(0)
        }
        else if (numero === 'AC') {
            setTextResultado('')
            setRespuesta('')
        } else {
            setTextResultado(n => n + numero)
            if (textResultado[textResultado.length - 1] == '=') {
                if (/[0-9.]/.test(numero)) {
                    setTextResultado(numero)
                } else {
                    setTextResultado(respuesta + numero)
                }
            }
        }
    }

    const operation = () => {
        setRespuesta(eval(textResultado))
        setTextResultado(n => n + '=')
    }

    return (
        <StyledContainerCalculator>
            <Box textAlign="right">

                <StyledText1>
                    {
                        textResultado !== ''
                            ?
                            textResultado.includes('.')
                                ?
                                textResultado.toFixed(4)
                                :
                                textResultado
                            :
                            '0'
                    }
                </StyledText1>
                <StyledText2 id='display'>
                    {
                        respuesta !== ''
                            ?
                            !Number.isInteger(respuesta)
                                ?
                                respuesta.toFixed(4)
                                :
                                respuesta
                            :
                            '0'
                    }
                </StyledText2>
            </Box>
            <Grid
                templateColumns="repeat(2, 1fr)">
                <Grid width="240px" colSpan={3}>
                    <GridItem colSpan={3}>
                        <Grid templateColumns="repeat(3, 1fr)" width="240px">
                            <StyledBoxNumber bg="rgb(172, 57, 57) !important" w="160px" h="80px" id="clear">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero('AC')} id='clear'>
                                    AC
                                </button>
                            </StyledBoxNumber>
                            <StyledBoxNumber bg="rgb(102, 102, 102) !important" h="80px" w="80px" id="divide">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("/")}>
                                    /
                    </button>
                            </StyledBoxNumber>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <StyledBoxNumber id="seven" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("7")}>
                                7
                        </button>
                        </StyledBoxNumber>
                        <StyledBoxNumber id="eight" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("4")}>
                                4
                        </button>
                        </StyledBoxNumber>
                        <StyledBoxNumber id="nine" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("1")}>
                                1
                        </button>
                        </StyledBoxNumber>
                    </GridItem>
                    <GridItem>
                        <StyledBoxNumber id="four" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("8")}>
                                8
                        </button>
                        </StyledBoxNumber>
                        <StyledBoxNumber id="five" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("5")}>
                                5
                        </button>
                        </StyledBoxNumber>
                        <StyledBoxNumber id="six" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("2")}>
                                2
                        </button>
                        </StyledBoxNumber>
                    </GridItem>
                    <GridItem>
                        <StyledBoxNumber id="one" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("9")}>
                                9
                            </button>
                        </StyledBoxNumber>
                        <StyledBoxNumber id="two" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("6")}>
                                6
                        </button>
                        </StyledBoxNumber>
                        <StyledBoxNumber id="three" h="80px">
                            <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("3")}>
                                3
                        </button>
                        </StyledBoxNumber>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Grid templateColumns="repeat(3, 1fr)" width="240px">
                            <StyledBoxNumber id="zero" w="160px" h="80px">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("0")}>
                                    0
                    </button>
                            </StyledBoxNumber>
                            <StyledBoxNumber h="80px" w="80px" id="decimal">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero(".")}>
                                    .
                    </button>
                            </StyledBoxNumber>
                        </Grid>
                    </GridItem>
                </Grid>
                <GridItem colSpan={1}>
                    <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="multiply">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("*")}>
                            x
                </button>
                    </StypedBoxRight>
                    <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="subtract">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("-")}>
                            -
                </button>
                    </StypedBoxRight>
                    <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="add">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => obtenerNumero("+")}>
                            +
                </button>
                    </StypedBoxRight>
                    <StypedBoxRight h="160px" bg="rgb(0, 68, 102)" id="equals">
                        <button style={{ height: "100%", width: "100%" }} onClick={operation}>
                            =
                </button>
                    </StypedBoxRight>
                </GridItem>
            </Grid>
        </StyledContainerCalculator>
    )
}

export default CalculatorContainer
