import { useContext } from "react"
import { Col, Container } from "../../Common/Grid/Index"
import Box from "../../Common/UI/Box"
import Paragraph from "../../Common/Typography/Paragraph"
import Form from "../../components/Form"
import { CONTEXT } from "../../context"

const formFunctionHandler = (formData: any): any => {
    console.log(formData)
}

const Home = () => {
    const CTX: any = useContext(CONTEXT)
    const {
        data: { FormElementsList, FormCountryList }
    } = CTX

    const countryIconHandler = (e: any) => {
        const activeElems = document.querySelectorAll(".active")

        activeElems.forEach(img => img.classList.remove("active"))
        e.target.classList.toggle("active")
    }

    return (
        <Container>
            <Col size={1}>Menu</Col>
            <Col size={11} bgColor={"#f5f5f5"}>
                <Box width={"32.5rem"} height={"27px"}></Box>
                <Box width={"32.5rem"}>
                    <Paragraph fontSize={".783rem"} color={"#5a5a5a"}>
                        Seleccione un país para la búsqueda:
                    </Paragraph>

                    <Container>
                        {FormCountryList.map((country: any) => (
                            <Box
                                width={"7rem"}
                                height={".1rem"}
                                margin={".1rem .59rem"}
                                padding={"20px"}
                                display={"flex"}
                                fontSize={".9rem"}
                                fontWeight={"bold"}
                                cursor={"pointer"}
                                onClick={countryIconHandler}
                            >
                                {country.name}
                                <img src={country.icon} alt="countryIcon" />
                            </Box>
                        ))}
                    </Container>
                </Box>

                {/* Form Box */}
                <Box width={"32.5rem"} bgColor={"#ffffff"}>
                    <Paragraph fontSize={".783rem"} color={"#5a5a5a"}>
                        Llene uno de los campos para realizar la búsqueda:
                    </Paragraph>

                    <Form
                        list={FormElementsList}
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
