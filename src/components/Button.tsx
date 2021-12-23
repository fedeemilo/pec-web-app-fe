import { useContext } from "react";
import { CONTEXT } from "../context";

import styled from 'styled-components'

const ButtonUI = styled('button') <{ color?: String }>`
    width: 100%;
    height: 3rem;
    background-color: #5eb8d2;
    color: #ffffff;
`

const Button = () => {


    return <ButtonUI>Buscar</ButtonUI>;
};

export default Button;
