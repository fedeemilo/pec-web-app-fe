import styled from "styled-components"

const Box = styled("div")<{
    width: string
    height?: string
    bgColor?: string
    margin?: string
    padding?: string
    display?: string
    fontSize?: string
    fontWeight?: string
    cursor?: string
}>`
    display: ${props => props?.display};
    align-items: ${props => (props.display === "flex" ? "center" : "")};
    justify-content: ${props => (props.display === "flex" ? "center" : "")};
    width: ${props => props.width};
    height: ${props => (props?.height ? props?.height : "auto")};
    background-color: ${props => (props.bgColor ? props.bgColor : "#ffffff")};
    border: 0.5px solid #d3d3d3;
    border-radius: 4px;
    margin: ${props => (props.margin ? props.margin : "1.6875rem")};
    padding: ${props => (props.padding ? props.padding : "20px 30px")};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    cursor: ${props => props.cursor};

    .active {
        transition: 280ms;
        box-shadow: 0px 0px 0px 2px #57b4e5;
    }
`

export default Box
