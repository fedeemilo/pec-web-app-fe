import { Context, useContext } from "react";
import { Col, Container } from "../../Common/Grid/Index";
import Menu from "../../Components/Menu";
import { CONTEXT } from '../../context';

import {ItemType} from '../../Components/Menu/';

type graphContextType = {
    menu?: any
}

const Home = () => {
    const graphContext: graphContextType = useContext(CONTEXT);

    return (
        <Container>
            <Col size={1}>
                <Menu item={graphContext?.menu?.items} />
            </Col>
            <Col size={11}>
            </Col>
        </Container>
    )
}

export default Home;