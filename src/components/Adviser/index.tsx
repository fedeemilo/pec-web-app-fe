import { useContext } from "react"
import { Col, Container } from "../../Common/Grid/Index"
import { Box, Divisor, Dropdown, Image, Text } from "../../Common/UI"
import { CONTEXT } from "../../context"
import { COLORS } from "../../Constants"

const Adviser = () => {
    const CTX: any = useContext(CONTEXT)
    const {
        data: {
            processDropdownObj,
            AdviserObj: { icon, title, name }
        }
    } = CTX

    return (
        <Box width={32.5}>
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
                        {name}
                    </Text>
                </Col>

                <Col size={6}>
                    <Divisor />
                    <Dropdown
                        {...processDropdownObj}
                        selected={"Seleccione un Perfil"}
                        option={processDropdownObj.options}
                        width={"17rem"}
                        isForm={false}
                        styles={{
                            padding: "0 0 0 1.5rem",
                            color: "#5a5a5a",
                            width: '14rem',
                            bgColor: COLORS.white
                        }}
                    />
                </Col>   
            </Container>
        </Box>
    )
}

export default Adviser
