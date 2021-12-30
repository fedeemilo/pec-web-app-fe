import {FunctionComponent, useState} from 'react'
import {formList} from './'
import { Col } from '../../Common/Grid/Index'
import styled from 'styled-components'

const InputContainer = styled.div`
    overflow: hidden;
    padding: 10px;
`;
const Input = styled.input`
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 0px;
    outline: none;
    padding: 10px;
    width: -webkit-fill-available;
`;
const LabelSpan = styled.div`
    padding-bottom: 10px;
`;

const FormItem: FunctionComponent<formList> = ({
    type,
    value,
    label,
    colSize,
    placeholder,
    name,
}) => {
    let size: number = colSize || 6; 

    const [valueState, setValueState] = useState(value)

    return (
        <Col size={size}>
            <InputContainer>
                <LabelSpan>
                    { label }
                </LabelSpan>
                <Input 
                    type={type}
                    value={valueState}
                    placeholder={placeholder}
                    name={name}
                    onChange={e => setValueState(e.target.value)}
                />
            </InputContainer>
        </Col>
    )
}

export default FormItem;