import { Col, Container } from "../../Common/Grid/Index"
import { COLORS } from "../../Constants"
import Adviser from "../../Components/Adviser"
import CountrySelector from "../../Components/CountrySelector"
import FormComponent from "../../Components/Form/FormComponent"

const Home = () => {
    return (
        <Container>
            <Col size={1} bgColor={COLORS.white} width={9}></Col>
            <Col size={11} bgColor={COLORS.bgColor}>
                <Adviser />
                <CountrySelector />
                <FormComponent />
            </Col>
        </Container>
    )
}

export default Home 
