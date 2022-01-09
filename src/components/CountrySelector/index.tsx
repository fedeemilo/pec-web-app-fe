import { useContext } from "react"
import { CONTEXT } from "../../context"
import { Container } from "../../Common/Grid/Index"
import Text from "../../Common/UI/Text"
import Box from "../../Common/UI/Box"
import Image from "../../Common/UI/Image"

const CountrySelector = () => {
    const CTX: any = useContext(CONTEXT)
    const {
        data: { FormCountryList }
    } = CTX

    const countryIconHandler = (e: any) => {
        const activeElems = document.querySelectorAll(".active")

        activeElems.forEach(img => img.classList.remove("active"))
        e.target.classList.toggle("active")
    }

    return (
        <Box width={"32.5rem"}>
            <Text
                size={".783rem"}
                margin={"0 0 1.4rem 0.49rem"}
            >
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
                        <Text
                            size={"0.87rem"}
                            margin={"0 0 .8rem 0.49rem"}
                        >
                            {country.name}
                        </Text>
                    </Box>
                ))}
            </Container>
        </Box>
    )
}

export default CountrySelector
