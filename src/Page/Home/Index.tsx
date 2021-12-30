import { Col, Container } from "../../Common/Grid/Index"
import Box from "../../Common/UI/Box"
import Subtitle from "../../Common/Typography/Subtitle"
import Paragraph from "../../Common/Typography/Paragraph"
import Form from "../../components/Form/Form"

const FormList = [
    {
        type: "number",
        value: "",
        label: "N° de línea fija",
        placeholder: "N° de línea fija",
        name: "lineaFija"
    },
    {
        type: "number",
        value: "",
        label: "N° de línea móvil",
        placeholder: "Número de línea móvil",
        name: "lineaMovil"
    },
    // SELECT
    {
        type: "select",
        value: "",
        label: "Tipo de Documento",
        placeholder: "DNI",
        name: "tipoDoc",
    },
    {
        type: "number",
        value: "",
        label: "N°  Documento",
        placeholder: "00000000",
        name: "nroDoc"
    },
    {
        type: "number",
        value: "",
        label: "N° de Cuenta",
        placeholder: "0000000000",
        name: "nroCuenta"
    },
    {
        type: "email",
        value: "",
        label: "Correo electrónico",
        placeholder: "example@email.com",
        name: "email"
    }
]

const formFunctionHandler = ({
    lineaFija,
    lineaMovil,
    tipoDoc,
    nroDoc,
    nroCuenta,
    email
}: any): any => {
    console.log(lineaFija.value)
    console.log(lineaFija.placeholder)
    console.log(email.value)
}

const Home = () => {
    return (
        <Container height={"100vh"}>
            <Col size={1}>Menu</Col>
            <Col size={11} bgColor={"#f5f5f5"}>
                <Subtitle color={"#303030"}>Búsqueda de cliente</Subtitle>
                <Box width={"420px"} height={"27px"} bgColor={"#ffffff"}></Box>
                <Box width={"521px"} height={"80px"} bgColor={"#ffffff"}>
                    <Paragraph fontSize={".83rem"} color={"#888888"}>
                        Seleccione un país para la búsqueda:
                    </Paragraph>
                </Box>
                <Box width={"521px"} height={"27.875rem"} bgColor={"#ffffff"}>
                    <Paragraph fontSize={".83rem"} color={"#888888"}>
                        Llene uno de los campos para realizar la búsqueda:
                    </Paragraph>

                    <Form
                        list={FormList}
                        colSize={6}
                        callback={formFunctionHandler}
                        submitText={"Buscar"}
                    />
                </Box>
            </Col>
        </Container>
    )
}

export default Home
