import { FunctionComponent, useState, useRef } from "react"
import { Col } from "../../Grid/Index"
import { Image } from ".."
import {
    DropdownLabel,
    DropdownWrapper,
    ItemSelected,
    OptionItem,
    OptionList
} from "./styles"
import { DropdownType } from "../../../Types/dropdownTypes"
import arrowDown from "../../../Assets/img/arrow-down.svg"
import arrowUp from "../../../Assets/img/arrow-up.svg"
import { useOutsideRef } from "../../../Hooks/useOutsideRef"

const Dropdown: FunctionComponent<DropdownType> = ({
    id,
    label,
    options,
    colSize,
    selected,
    isForm,
    styles
}) => {
    const [choice, setChoice] = useState(selected)

    const size: number = colSize || 6

    const { ref, isVisible, setIsVisible } = useOutsideRef(false)

    return (
        <Col size={size}>
            {isForm && <DropdownLabel>{label}</DropdownLabel>}
            <DropdownWrapper
                id={id}
                ref={ref}
                onClick={() => setIsVisible(!isVisible)}
                {...styles}
            >
                <ItemSelected width={styles?.width}>
                    {choice}
                    <Image
                        src={isVisible ? arrowUp : arrowDown}
                        width={0.8}
                        left={isForm ? 3.5 : -0.8}
                    />
                </ItemSelected>
                {isVisible && (
                    <OptionList height={!isForm ? "21rem" : "7.8rem"}>
                        {options?.map(({ value }) => (
                            <OptionItem
                                key={value}
                                onClick={(e: any) =>
                                    setChoice(e.target.textContent)
                                }
                            >
                                {value}
                            </OptionItem>
                        ))}
                    </OptionList>
                )}
            </DropdownWrapper>
        </Col>
    )
}

export default Dropdown
