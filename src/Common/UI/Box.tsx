import styled from "styled-components"
import { COLORS } from "../../Constants"
import { boxModel, dFlex, fontStyle } from '../../Styling'
import { BoxInterface } from "../../Types/cssTypes"

const Box = styled('div')<BoxInterface>`
    
    ${dFlex};
    ${boxModel};
    ${fontStyle};
    cursor: pointer;
    
    .active {
        transition: 280ms;
        box-shadow: 0px 0px 0px 2px ${COLORS.lightBlue};
    }
`

export default Box
