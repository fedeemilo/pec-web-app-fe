import { Col, Container } from "../../Common/Grid/Index";
import Menu from "../../Components/Button/Menu";

const Home = () => {

    return (
        <Container>
            <Col size={1}>
                <Menu  item={
                    [
                        { itemName: 'A' },
                        { itemName: 'B' },
                        { itemName: 'C' },
                    ]
                }/>
            </Col>
            <Col size={11}>
            </Col>
        </Container>
    )
}

export default Home;