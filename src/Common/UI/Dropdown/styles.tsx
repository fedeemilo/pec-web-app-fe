import styled from "styled-components"
import { COLORS } from "../../../Constants"

const DropdownLabel = styled.label`
    position: relative;
    left: 0.67rem;
    top: 0.6rem;
    color: ${COLORS.darkGray};
    font-size: 0.75rem;
`

const DropdownWrapper = styled("div")<{
    width?: string
    border?: string
    bgColor?: string
    padding?: string
}>`
    position: relative;
    background-color: ${props => props?.bgColor};
    width: ${props => (props?.width ? props.width : "12.3rem")};
    height: 1.35rem;
    border: ${props => props?.border};
    padding: ${props => props?.padding};
    color: ${props => props?.color};
    border-radius: 3px;
    font-size: 0.9rem;
    left: 0.6rem;
    top: 0.95rem;
    cursor: pointer;
    margin-top: -.34rem;
`

const ItemSelected = styled("div")<{
    width?: string
}>`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    width: ${props => (props?.width ? props.width : "9.375rem")};
    text-decoration: none;
`

const OptionList = styled("ul")<{
    height?: string
    scroll?: string
}>`
    background: ${COLORS.white} none repeat scroll 0 0;
    height: ${props => props?.height};
    list-style: none;
    padding: 10px;
    position: absolute;
    left: -1px;
    top: 3.01rem;
    width: auto;
    min-width: 13.8rem;
    border: 1px solid ${COLORS.lightGray};
    border-radius: 4px;
    z-index: 999999;
    overflow: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 0.6rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${COLORS.lightGray};
        outline: none;
        border-radius: 1rem;
    }
`

const OptionItem = styled.li`
    padding: 11px;
    transition: 200ms;

    :not(:last-child) {
        border-bottom: 1px solid ${COLORS.smoothGray};
    }

    :hover {
        font-weight: 700;
    }
`
export { DropdownLabel, DropdownWrapper, ItemSelected, OptionList, OptionItem }
