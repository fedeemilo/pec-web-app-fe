import styled from "styled-components"
import { dFlex } from "../../Styling"

interface ColInterface {
    size: number
    colSize?: number
    bgColor?: string
    width?: number
}

export const Container = styled.div`
    ${dFlex};
    box-sizing: border-box;
`

export const Col = styled("div") <ColInterface>`
    width: ${p => p.size * (100 / (p?.colSize || 12))}%;
    background-color: ${p => p.bgColor};
`
