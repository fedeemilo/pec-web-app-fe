import { FunctionComponent } from "react";
import styled from 'styled-components';

interface ColInterface {
    size: number
    colSize?: number
};

export const Container: FunctionComponent = styled.div`
    box-sazing: border-box;    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Col: FunctionComponent<ColInterface> = styled('div')<{size: number, colSize?: number}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
`;