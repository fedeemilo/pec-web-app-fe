import { css } from "styled-components"
import { COLORS } from "../Constants"
import { BoxModelInterface, FlexInterface, FontStyleInterface } from "../Types/cssTypes"

const dFlex = css<FlexInterface>`
    display: ${({ display }) => display || "flex"};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ alignItems }) => alignItems};
    align-content: ${({ alignContent }) => alignContent};
    flex-wrap: ${({ wrap }) => wrap};
`

const boxModel = css<BoxModelInterface>`
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
    margin: ${({ margin }) => margin || "1.155rem"};
    padding: ${({ padding }) => padding || "20px 30px"};
    border: ${({ border }) => border || "0.5px solid " + COLORS.lightGray};
    border-radius: ${({ bRadius }) => bRadius || "4px"};
    background-color: ${({ bgColor }) => bgColor || COLORS.white};
`

const fontStyle = css<FontStyleInterface>`
    font-size: ${({ fSize }) => fSize};
    font-weight: ${({ fWeight }) => fWeight};
`

export { dFlex, boxModel, fontStyle }
