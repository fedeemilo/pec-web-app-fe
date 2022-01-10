import styled from "styled-components"

const ButtonUI = styled("button")<{
    txtColor?: string
    bgColor?: string
    width?: string
}>`
    width: ${props => (props?.width ? props?.width : "100%")};
    height: 2.7rem;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.bgColor};
    color: ${props => props.txtColor};
    font-size: 1rem;
    margin-top: 0.4rem;
`

const Button = ({ ...rest }) => {
    return <ButtonUI {...rest}>Buscar</ButtonUI>
}

export default Button
