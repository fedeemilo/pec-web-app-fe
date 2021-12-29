import { Col, Container } from "../../Common/Grid/Index"
import Box from "../../Common/UI/Box"
import Subtitle from "../../Common/Typography/Subtitle"
import Input from "../../Common/UI/Input"
import Paragraph from "../../Common/Typography/Paragraph"
import Button from "../../Common/UI/Button"

const Home = () => {
    return (
        <Container>
            <Col size={1}>Menu</Col>
            <Col size={11}>
                <Subtitle color={"#303030"}>Búsqueda de cliente</Subtitle>
                <Box width={"420px"} height={"27px"}></Box>
                <Box width={"521px"} height={"80px"}></Box>
                <Box width={"521px"} bgColor={"#ffffff"}>
                    <Paragraph fontSize={".83rem"} color={"#888888"}>
                        Llene uno de los campos para realizar la búsqueda:
                    </Paragraph>

                    <Container>
                        <Col size={5}>
                            <Input
                                id={"lineaFija"}
                                label={"N°de linea fija"}
                                type={"number"}
                                disabled
                            ></Input>
                            <Input
                                id={"tipoDoc"}
                                label={"Tipo de documento"}
                                type={"select"}
                                disabled
                            ></Input>
                            <Input
                                id={"nroCuenta"}
                                label={"N° Cuenta"}
                                disabled
                            ></Input>
                        </Col>
                        <Col size={5} ml={"3.5rem"}>
                            <Input
                                id={"lineaMovil"}
                                label={"N° de linea"}
                                disabled
                            ></Input>
                            <Input
                                id={"nroDoc"}
                                label={"N° Documento"}
                                disabled
                            ></Input>
                            <Input
                                id={"email"}
                                label={"Correo electronico"}
                                disabled
                            ></Input>
                        </Col>
                        <Button bgColor={"#1f97ae"} txtColor={"#ffffff"} />
                    </Container>
                </Box>
            </Col>
        </Container>
    )
}

export default Home
