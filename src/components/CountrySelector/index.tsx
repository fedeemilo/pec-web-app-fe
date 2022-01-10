import { useContext } from "react"
import { CONTEXT } from "../../context"
import { Container } from "../../Common/Grid/Index"
import { Text, Box, Image } from "../../Common/UI"
import { countryIconHandler } from "../../Utils/functions"

const CountrySelector = () => {
    const CTX: any = useContext(CONTEXT)
    const {
        data: { FormCountryList }
    } = CTX

    return (
        <Box width={"32.5rem"}>
            <Text size={".783rem"} margin={"0 0 1.4rem 0.49rem"}>
                Seleccione un país para la búsqueda:
            </Text>

            <Container>
                {FormCountryList.map((country: any) => (
                    <Box
                        width={"7.1rem"}
                        height={".1rem"}
                        margin={".1rem .59rem"}
                        padding={"20px"}
                        display={"flex"}
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        onClick={countryIconHandler}
                    >
                        <Image src={country.icon} alt="countryIcon" />
                        <Text size={"0.87rem"} margin={"0 0 .8rem 0.49rem"}>
                            {country.name}
                        </Text>
                    </Box>
                ))}
            </Container>
        </Box>
    )
}

export default CountrySelector
