import {
    SelectHTMLAttributes,
    FunctionComponent,
    useRef,
    useState,
    MouseEventHandler
} from "react"
import styled from "styled-components"
import { Col } from "../Grid/Index"

interface DropdownType extends SelectHTMLAttributes<HTMLSelectElement> {
    id?: string
    label: string
    options?: any[]
    colSize?: number
}

const DropdownLabel = styled.label`
    position: relative;
    left: 0.67rem;
    top: 0.4rem;
    color: #5a5a5a;
    font-size: 0.75rem;
`

const DropdownWrapper = styled("div")<{
    bgEnabled?: string
}>`
    position: relative;
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 12.4px 22px;
    height: 1.415rem;
    width: 12.3rem;
    left: 0.6rem;
    top: 0.91rem;
    font-size: 0.9rem;
    color: #a8a8a8;
    border: 1px solid #e0e0e0;
    background-color: ${props => (!props.bgEnabled ? "#f0f0f0" : "#ffffff")};
    cursor: pointer;
`

const ItemSelected = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    width: 150px;
    text-decoration: none;
`

const DropdownArrow = styled.div`
    position: relative;
    left: 3rem;
    bottom: 0.15rem;
    height: 1rem;
    width: 1rem;
    font-size: 1.1rem;
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
    colSize
}) => {
    const size: number = colSize || 6

    const [displayDropList, setDisplayDropList] = useState(false)
    const [typeSelected, setTypeSelected] = useState('DNI')

    const dropdownRef = useRef<HTMLDivElement>(null)
    const arrowIconRef = useRef<HTMLDivElement>(null)

    const handleClickDropdown: MouseEventHandler<HTMLDivElement> = () => {
        const arrowIconCurrent = arrowIconRef.current as HTMLDivElement

        setDisplayDropList(!displayDropList)
        arrowIconCurrent.innerHTML = displayDropList ? "&#x25BC;" : "&#x25B2;"
    }

    const handleClickOption: MouseEventHandler<HTMLLIElement> = (e: any) => {
        setTypeSelected(e.target.textContent)
    }

    return (
        <Col size={size}>
            <DropdownLabel>{label}</DropdownLabel>
            <DropdownWrapper
                id={id}
                ref={dropdownRef}
                onClick={handleClickDropdown}
            >
                <ItemSelected>
                    {typeSelected}
                    <DropdownArrow ref={arrowIconRef}>&#x25BC;</DropdownArrow>
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
