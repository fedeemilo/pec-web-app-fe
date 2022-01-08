import styled from "styled-components"

const Paragraph = styled("p")<{ color?: string; fontSize?: string }>`
    font-size: ${props => (props?.fontSize ? props?.fontSize : "1rem")};
    color: ${props => props?.color};
    margin: 0 0 1.3rem 0.4rem;
    height: .6rem;
`

export default Paragraph
