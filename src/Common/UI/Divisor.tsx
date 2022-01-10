import styled from "styled-components"
import { COLORS } from "../../Styling"

const Divisor = styled.div`
    position: absolute;
    width: 2px;
    height: 4.5%;
    padding: 2px;
    border-left: 1px solid ${COLORS.lightGray};
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
`

export default Divisor
