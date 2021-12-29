import { FunctionComponent } from 'react'
import { Container } from '../../Common/Grid/Index'
import FormItem from './FormItem';
import styled from 'styled-components';

const Submit = styled.input`
    background: #1f97ae;
    border: none;
    border-radius: 5px;
    color: #FFF; 
    font-size: 16px;   
    height: 40px;
    margin: auto;
    margin-top: 16px;
    width: 97%;
`;

const FormContainer = styled.form``;

export type formList = {
    type: string
    value: string
    label: string
    colSize?: number
    placeholder?: string
    name?: string
}
interface FormInterface {
    list: formList[]
    colSize?: number
    callback: Function
    submitText?: string
}
const Form: FunctionComponent<FormInterface> = ({
    list,
    colSize,
    callback,
    submitText,
}) => {

    const formHandler = (e: any) => {
        e.preventDefault()
        return callback(e.target) ? callback(e.target) : console.error('You should send a callback function!');
    }

    return (
        <FormContainer onSubmit={(e) => formHandler(e)}>
            <Container>
                {list?.map((props: formList) => <FormItem {...props} colSize={colSize} />)}
                <Submit type={`submit`} value={submitText || 'Enviar'} />
            </Container>
        </FormContainer>
    )
}

export default Form;