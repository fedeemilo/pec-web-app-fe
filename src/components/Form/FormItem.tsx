import { FunctionComponent, useState } from "react"
import { FormList } from "../../Types/formTypes"
import { Col } from "../../Common/Grid/Index"
import styled from "styled-components"

const InputContainer = styled.div`
    overflow: hidden;
    padding: 10px;
    position: relative;
`

const Input = styled("input")<{
    enabled?: string
}>`
    border: none;
    border-radius: 2px;
    border: 1px solid #e0e0e0;
    outline: none;
    padding: 10px 17px;
    width: -webkit-fill-available;
    height: 1.8rem;
    font-size: 0.9rem;
    cursor: pointer;
    background-color: ${props => (!props.enabled ? "#f0f0f0" : "#ffffff")};

    ::placeholder {
        color: #a8a8a8;
    }
`

const LabelSpan = styled.div`
    padding-bottom: 10px;
    color: #707070;
    color: #5a5a5a;
    font-size: 0.75rem;
`

const FormItem: FunctionComponent<FormList> = ({
    type,
    value,
    label,
    colSize,
    placeholder,
    name,
    clickInput
}) => {
    const size: number = colSize || 6

    const [valueState, setValueState] = useState(value)

    return (
        <Col size={size}>
            <InputContainer>
                <LabelSpan>{label}</LabelSpan>
                <Input
                    type={type}
                    value={valueState}
                    placeholder={placeholder}
                    name={name}
                    onChange={e => setValueState(e.target.value)}
                    onClick={clickInput}
                />
            </InputContainer>
        </Col>
    )
}

export default FormItem
