import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/layout'
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
const StyledText1 = styled(Text)`
    font-family: digital;
    font-size: 20px;
    line-height: 20px;
    color: orange;
`
const StyledText2 = styled(Text)`
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

    const [resultado, setResultado] = useState(0)
    const [numero, setNumero] = useState('')
    const [textResultado, setTextResultado] = useState('')

    const sumar = () => {
        if (textResultado.includes('=')) {
            setNumero(resultado)
            setResultado(resultado)
            setTextResultado(`${resultado}+`)
        } else {
            setTextResultado(`${textResultado}+`)
        }
    }
    const restar = () => {
        if (textResultado.includes('=')) {
            setNumero(resultado)
            setResultado(resultado)
            setTextResultado(`${resultado}-`)
        } else {
            setTextResultado(`${textResultado}-`)
        }
    }
    const dividir = () => {
        if (textResultado.includes('=')) {
            setNumero(resultado)
            setResultado(resultado)
            setTextResultado(`${resultado}/`)
        } else {
            setTextResultado(`${textResultado}/`)
        }
    }
    const multiplicar = () => {
        if (textResultado.includes('=')) {
            setNumero(resultado)
            setResultado(resultado)
            setTextResultado(`${resultado}*`)
        } else {
            setTextResultado(`${textResultado}*`)
        }
    }
    const decimal = () => {
        if (textResultado.includes('=')) {
            // if (!parseFloat(numero) % 1 !== 0) {
            //     setResultado(numero)
            //     setTextResultado(`${numero}`)
            // }
            // } else {
            // setTextResultado(`${textResultado}.`)
            setNumero(resultado)
            setResultado(resultado)
            setTextResultado(`${resultado}.`)
        } else {
            setNumero(`${numero}.`)
            setTextResultado(`${textResultado}.`)
        }

    }
    const resultadoCalculadora = () => {
        if (resultado % 1 !== 0) {
            setResultado(parseFloat(resultado.toFixed(4)))
            setTextResultado(textResultado + '=' + parseFloat(resultado.toFixed(4)))
            setNumero(parseFloat(resultado.toFixed(4)))
        } else {
            if (textResultado.includes('*-')) {
                setResultado(parseFloat('-' + resultado))
                setTextResultado(textResultado + '=' + parseFloat('-' + resultado))
                setNumero('-' + resultado)
            } else {
                setResultado(resultado)
                setTextResultado(textResultado + '=' + resultado)
                setNumero(resultado)
            }
        }

    }

    const obtenerNumero = (n) => {
        if (textResultado.includes('=')) {
            // if (n !== "0") {
            setNumero(n)
            setResultado(n)
            setTextResultado('' + n)
            // }
        }
        else if (textResultado.includes('*')) {
            n = (parseFloat(n))
            setNumero(n)
            setTextResultado(textResultado + n)
            setResultado(parseFloat(resultado) * n)
        }
        else if (textResultado.includes('/')) {
            n = (parseFloat(n))
            setNumero(n)
            setTextResultado(textResultado + n)
            setResultado(parseFloat(resultado) / n)
        }
        else if (textResultado.includes('-')) {
            // n = (parseFloat(n))
            // if (resultado % 1 !== 0){
            //     setNumero(numero +)
            //     setTextResultado(textResultado + n)
            //     setResultado(parseFloat(resultado) - n)
            // }else{
            //     setNumero(n)
            //     setTextResultado(textResultado + n)
            //     setResultado(parseFloat(resultado) - n)
            // }
            setNumero(n)
            setTextResultado(textResultado + n)
            setResultado(parseFloat(resultado) - n)
        }
        else if (textResultado.includes('+')) {
            n = (parseFloat(n))
            setNumero(n)
            setTextResultado(textResultado + n)
            setResultado(parseFloat(resultado) + n)
        }
        else if (!textResultado.includes('..')) {
            setNumero(textResultado + n)
            setTextResultado(textResultado + n)
            setResultado(textResultado + n)

        } else {
            setNumero(numero + n)
            setTextResultado(textResultado + n)
            setResultado(numero + n)
        }
    }

    return (
        <StyledContainerCalculator>
            <Box textAlign="right" >
                <StyledText1 id="display">
                    {
                        (textResultado !== '')
                            ?
                            textResultado
                            :
                            <p style={{ height: "20px" }}>
                                {"0"}
                            </p>
                    }
                </StyledText1>
                <StyledText2 >
                    {
                        (numero !== '')
                            ?
                            numero
                            :
                            <p style={{ height: "45px" }}>
                                {"0"}
                            </p>
                    }

                </StyledText2>
            </Box>
            <Grid
                templateColumns="repeat(2, 1fr)"
            >
                <Grid width="240px" colSpan={3}>
                    <GridItem colSpan={3}>
                        <Grid templateColumns="repeat(3, 1fr)" width="240px">
                            <StyledBoxNumber bg="rgb(172, 57, 57) !important" w="160px" h="80px" id="clear">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => {
                                    setNumero('')
                                    setResultado(0)
                                    setTextResultado('')
                                }
                                }>
                                    AC
                    </button>
                            </StyledBoxNumber>
                            <StyledBoxNumber bg="rgb(102, 102, 102) !important" h="80px" w="80px" id="divide">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => {
                                    dividir('/')
                                }
                                }>
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
                                <button style={{ height: "100%", width: "100%" }} onClick={() => {
                                    // if (!textResultado === '') {
                                    obtenerNumero('0')
                                    // }
                                }
                                }>
                                    0
                    </button>
                            </StyledBoxNumber>
                            <StyledBoxNumber h="80px" w="80px" id="decimal">
                                <button style={{ height: "100%", width: "100%" }} onClick={() => {
                                    // if (!textResultado.includes(".")) {
                                    decimal('.')
                                    // }
                                }
                                }>
                                    .
                    </button>
                            </StyledBoxNumber>
                        </Grid>
                    </GridItem>
                </Grid>
                <GridItem colSpan={1}>
                    <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="multiply">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => {
                            multiplicar('*')
                        }
                        }>
                            x
                </button>
                    </StypedBoxRight>
                    <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="subtract">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => {
                            restar('-')
                        }
                        }>
                            -
                </button>
                    </StypedBoxRight>
                    <StypedBoxRight h="80px" bg="rgb(102, 102, 102)" id="add">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => {
                            sumar('+')
                        }
                        }>
                            +
                </button>
                    </StypedBoxRight>
                    <StypedBoxRight h="160px" bg="rgb(0, 68, 102)" id="equals">
                        <button style={{ height: "100%", width: "100%" }} onClick={() => {
                            resultadoCalculadora()
                        }
                        }>
                            =
                </button>
                    </StypedBoxRight>
                </GridItem>
            </Grid>
        </StyledContainerCalculator>
    )
}

export default CalculatorContainer
