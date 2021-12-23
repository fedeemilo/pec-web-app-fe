import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

const InputGroup = styled.div`
    position: relative;
    margin-bottom: 1rem;

`;

const InputLabel = styled.label``;

const InputField = styled.input`
    outline: none;
    padding: 16px 22px;
    border: 1px solid #dadce0;
    font-size: 18px;
    border-radius: 5px;
    width: 12rem;
    height: .7rem;
    margin-top: .5rem;
`;

const Input: React.FC<InputProps> = ({ id, label, ...rest }) => {
    return (
        <InputGroup>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <InputField id={id} {...rest} />
        </InputGroup>
    );
};

export default Input;
