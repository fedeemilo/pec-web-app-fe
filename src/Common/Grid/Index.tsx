import { FunctionComponent } from "react"
import styled from "styled-components"

interface ColInterface {
    size: number
    colSize?: number
    ml?: string
    mt?: string
    bgColor?: string
}

interface ContainerIterface {
    wrap?: Boolean
}

export const Container: FunctionComponent<ContainerIterface> = styled("div")<{
    wrap?: Boolean
}>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
`

export const Col: FunctionComponent<ColInterface> = styled("div")<{
    size: number
    colSize?: number
    ml?: string
    mt?: string
    bgColor?: string
}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    margin-left: ${props => props.ml};
    margin-top: ${props => props.mt};
    background-color: ${props => props.bgColor};
`
