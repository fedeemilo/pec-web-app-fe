import { Col, Container } from "../../Common/Grid/Index"
import Adviser from "../../Components/Adviser"
import CountrySelector from "../../Components/CountrySelector"
import FormComponent from "../../Components/Form/FormComponent"
import { COLORS } from "../../Styling"

const Home = () => {
    return (
        <Container alignContent={'flex-end'}>
            <Col size={1} bgColor={COLORS.white} width={7}></Col>
            <Col size={11} bgColor={COLORS.bgColor}>
                <Adviser />
                <CountrySelector />
                <FormComponent />
            </Col>
        </Container>
    )
}

export default Home 
