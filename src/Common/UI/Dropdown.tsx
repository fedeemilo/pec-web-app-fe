import {
    SelectHTMLAttributes,
    FunctionComponent,
    useRef,
    useState,
    MouseEventHandler
} from "react"
import styled from "styled-components"
import { Col } from "../Grid/Index"
import { Image } from "../UI"
import arrowDown from "../../Assets/img/arrow-down.svg"
import arrowUp from "../../Assets/img/arrow-up.svg"

interface DropdownType extends SelectHTMLAttributes<HTMLSelectElement> {
    id?: string
    label: string
    options?: any[]
    colSize?: number
    selected?: string
    isForm?: boolean
}

const DropdownLabel = styled.label`
    position: relative;
    left: 0.67rem;
    top: 0.4rem;
    color: #5a5a5a;
    font-size: 0.75rem;
`

const DropdownWrapper = styled("div")<{
    bgEnabled?: boolean
    width?: string
    border?: string
    bgColor?: string
    padding?: string
}>`
    position: relative;
    border: ${props => props?.border};
    border-radius: 3px;
    padding: ${props => props?.padding};
    height: 1.28rem;
    width: ${props => (props?.width ? props.width : "12.3rem")};
    left: 0.6rem;
    top: 0.95rem;
    font-size: 0.9rem;
    color: #a8a8a8;
    background-color: ${props => (!props.bgEnabled ? "#f0f0f0" : "#ffffff")};
    cursor: pointer;
`

const ItemSelected = styled("div")<{
    width?: string
    color?: string
}>`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    width: ${props => (props?.width ? props.width : "9.375rem")};
    text-decoration: none;
    color: ${props => props?.color};
`

const OptionsWrapper = styled.div``

const OptionList: FunctionComponent<any> = styled("ul")<{
    display?: string
}>`
    background: #fff none repeat scroll 0 0;
    display: ${props => (props.display ? "" : "none")};
    list-style: none;
    padding: 10px;
    position: absolute;
    left: -1px;
    top: 3.01rem;
    width: auto;
    min-width: 13.8rem;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    z-index: 999999;
`

const OptionItem = styled.li`
    padding: 11px;
    transition: 200ms;

    :not(:last-child) {
        border-bottom: 1px solid #f0f0f0;
    }

    :hover {
        font-weight: 700;
    }
`

const Dropdown: FunctionComponent<DropdownType> = ({
    id,
    label,
    options,
    colSize,
    selected,
    isForm
}) => {
    const [displayDropList, setDisplayDropList] = useState(false)
    const [typeSelected, setTypeSelected] = useState(selected)

    const size: number = colSize || 6

    const handleClickOption: MouseEventHandler<HTMLLIElement> = (e: any) => {
        setTypeSelected(e.target.textContent)
    }

    const handleClickDropdown: MouseEventHandler<HTMLDivElement> = (e: any) => {
        setDisplayDropList(!displayDropList)
    }

    return (
        <Col size={size}>
            {isForm && <DropdownLabel>{label}</DropdownLabel>}
            <DropdownWrapper
                id={id}
                onClick={handleClickDropdown}
                border={isForm ? "1px solid #e0e0e0" : ""}
                bgEnabled={!isForm}
                padding={isForm ? "13.68px 22px" : "0 0 0 1.5rem"}
            >
                <ItemSelected
                    width={selected === "Seleccione un Perfil" ? "14rem" : ""}
                    color={!isForm ? "#5a5a5a" : ""}
                >
                    {typeSelected}
                    <Image
                        src={displayDropList ? arrowUp : arrowDown}
                        width={.8}
                        left={isForm ? 3.5 : -0.8}
                        select={"none"}
                        filter={
                            "invert(36%) sepia(0%) saturate(1755%) hue-rotate(142deg) brightness(96%) contrast(94%);"
                        }
                    />
                </ItemSelected>
                <OptionsWrapper>
                    <OptionList display={displayDropList}>
                        {options?.map(({ value }) => (
                            <OptionItem onClick={handleClickOption}>
                                {value}
                            </OptionItem>
                        ))}
                    </OptionList>
                </OptionsWrapper>
            </DropdownWrapper>
        </Col>
    )
}

export default Dropdown
