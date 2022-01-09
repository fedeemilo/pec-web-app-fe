import { useContext } from "react"
import { Col, Container } from "../../Common/Grid/Index"
import { Box, Image, Text, Divisor, Dropdown  } from "../../Common/UI"
import CountrySelector from "../../Components/CountrySelector"
import FormComponent from "../../Components/Form/FormComponent"
import { CONTEXT } from '../../context'

const Home = () => {

     const CTX: any = useContext(CONTEXT)
     const {
         data: {
             processDropdownObj,
             AdviserObj: { icon, title }
         }
     } = CTX

    return (
        <Container>
            <Col size={1}>Menu</Col>
            <Col size={11} bgColor={"#f5f5f5"}>
                <Box width={"32.5rem"}>
                    <Container>
                        <Col size={1}>
                            <Image src={icon} width={1.8} margin={"0 .45rem"} />
                        </Col>
                        <Col size={5}>
                            <Text size={".7rem"} margin={"-.4rem 0 0 1rem"}>
                                {title}
                            </Text>
                            <Text
                                size={"1rem"}
                                margin={"1rem 0 0 1rem"}
                                case={"uppercase"}
                                weight={"bold"}
                            >
                                Jorge Pérez
                            </Text>
                        </Col>
                        <Col size={6}>
                            <Divisor />
                            <Dropdown
                                {...processDropdownObj}
                                selected={'Seleccione un Perfil'}
                                option={processDropdownObj.options}
                                width={'17rem'}
                                isForm={false}
                            />
                        </Col>
                    </Container>
                </Box>

                <CountrySelector />

                <FormComponent />
            </Col>
        </Container>
    )
}

export default Home
