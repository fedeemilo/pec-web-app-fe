import styled from "styled-components"

const Subtitle = styled("h2")<{ color?: String }>`
    color: ${props => props?.color};
    margin: 2rem 3.875rem;
    font-size: 1.77rem;
`

export default Subtitle
