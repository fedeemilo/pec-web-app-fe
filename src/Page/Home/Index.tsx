import { Context, useContext } from "react";
import { Col, Container } from "../../Common/Grid/Index";
import Menu from "../../Components/Menu";
import { CONTEXT } from '../../context';

import Form from "../../Components/Form";
//import {ItemType} from '../../Components/Menu/';

type graphContextType = {
    menu?: any
}

const FormList = [
    {
        type: 'number',
        value: '',
        label: 'Lorem ipsum',
        placeholder: '00.000.00',
        name: 'doc',
    },
    {
        type: 'email',
        value: '',
        label: 'Lorem ipsum',
        placeholder: 'gmail@gmail.com',
        name: 'email',
    },
];

const formFunctionHandler = ({doc, email}: any) : any => {
    console.log(doc.value);
    console.log(email.value);
}

const Home = () => {
    const graphContext: graphContextType = useContext(CONTEXT);

    return (
        <Container>
            <Col size={1}>
                <Menu item={graphContext?.menu?.items} last={graphContext?.menu?.last} />
            </Col>
            <Col size={11}>
                <Form list={FormList} colSize={6} callback={formFunctionHandler}/>
            </Col>
        </Container>
    )
}

export default Home;