import { InputHTMLAttributes, FunctionComponent } from "react"
import styled from "styled-components"

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
}

const InputGroup = styled.div`
    position: relative;
    margin-bottom: 1rem;
`

const InputLabel = styled.label`
    color: #888888;
    font-size: 0.8rem;
`

const InputField = styled.input`
    outline: none;
    padding: 16px 22px;
    border: 1px solid #dadce0;
    font-size: 18px;
    border-radius: 5px;
    width: 12rem;
    height: 0.7rem;
    margin-top: 0.25rem;
`

const Input: FunctionComponent<InputType> = ({ id, label, ...rest }) => {
    return (
        <InputGroup>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <InputField id={id} {...rest} />
        </InputGroup>
    )
}

export default Input
