import styled from "styled-components";

const Box = styled("div")<{
    width: string;
    height?: string;
    bgColor?: string;
}>`
    width: ${props => props.width};
    height: ${props => (props?.height ? props?.height : "auto")};
    background-color: ${props => props.bgColor};
    border: 0.5px solid #d3d3d3;
    border-radius: 4px;
    margin: 27px;
    padding: 20px 30px;
`;

export default Box;
