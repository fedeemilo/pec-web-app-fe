import styled from "styled-components";

const Paragraph = styled("p")<{ color?: string; fontSize?: string }>`
    font-size: ${props => (props?.fontSize ? props?.fontSize : "1rem")};
    color: ${props => props?.color};
    margin: 0 0 2.1rem 0;
`;

export default Paragraph;
