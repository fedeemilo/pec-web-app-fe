import styled from "styled-components"

const Image = styled("img")<{
    width?: number
    margin?: string
    left?: number
    filter?: string
    select?: string
}>`
    position: relative;
    left: ${props => props?.left}rem;
    width: ${props => props?.width}rem;
    margin: ${props => props?.margin};
    filter : ${props => props?.filter};
    user-select: ${props => props?.select}
`

export default Image
