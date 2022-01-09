import styled from "styled-components"

const Text = styled("p")<{
    color?: string
    size?: string
    margin?: string
    case?: string
    weight?: string
}>`
    font-size: ${props => (props?.size ? props?.size : "1rem")};
    color: ${props => (props?.color ? props?.color : "#5a5a5a")};
    margin: ${props => props?.margin};
    height: 0.6rem;
    text-transform: ${props => props?.case};
    font-weight: ${props => props.weight};
`

export default Text
