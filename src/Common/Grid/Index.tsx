import { FunctionComponent } from "react"
import styled from "styled-components"

interface ColInterface {
    size: number
    colSize?: number
    bgColor?: string
    width?: number
}

interface ContainerIterface {
    wrap?: Boolean
    alignContent?: string
}

export const Container: FunctionComponent<ContainerIterface> = styled("div")<{
    wrap?: Boolean
    alignContent?: string
}>`
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
    align-content: ${props => props?.alignContent};
`

export const Col: FunctionComponent<ColInterface> = styled("div")<{
    size: number
    colSize?: number
    bgColor?: string
    width?: number;
}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    background-color: ${props => props.bgColor};
    width: ${props => props?.width}rem;
`
