import { Col, Container } from "../../Common/Grid/Index";
import Box from "../../components/Box/Index";
import Subtitle from "../../components/Subtitle";
import Input from "../../components/Input/Index";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";

const Home = () => {
    return (
        <Container>
            <Col size={1}>Menu</Col>
            <Col size={11}>
                <Subtitle>Búsqueda de Cliente</Subtitle>
                <Box width={"420px"} height={"60px"}></Box>
                <Box width={"521px"} height={"110px"}></Box>
                <Box width={"521px"} bgColor={"#ffffff"}>
                    <Paragraph>Llene uno de los campos para realizar la búsqueda</Paragraph>

                    <Container>
                        <Col size={5} >
                            <Input
                                id={"lineaFija"}
                                label={"N°de linea fija"}
                                type={"number"}
                            ></Input>
                            <Input
                                id={"tipoDoc"}
                                label={"Tipo de documento"}
                                type={"select"}
                            ></Input>
                            <Input id={"nroCuenta"} label={"N° Cuenta"}></Input>
                        </Col>
                        <Col size={5} ml={'3.5rem'}>
                            <Input
                                id={"lineaMovil"}
                                label={"N° de linea"}
                            ></Input>
                            <Input id={"nroDoc"} label={"N° Documento"}></Input>
                            <Input
                                id={"email"}
                                label={"Correo electronico"}
                            ></Input>
                        </Col>
                        <Button />
                    </Container>
                </Box>
            </Col>
        </Container>
    );
};

export default Home;
