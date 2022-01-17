import { FunctionComponent, useState } from "react"
import { FormList } from "../../Types/formTypes"
import { Col } from "../../Common/Grid/Index"
import { Input, InputContainer, LabelSpan } from "./styles"
import { COLORS } from "../../Constants"

const FormItem: FunctionComponent<FormList> = ({
    type,
    value,
    label,
    colSize,
    placeholder,
    name
}) => {
    const size: number = colSize || 6
    const [valueState, setValueState]: any = useState(value)

    const handleClick = (e: any) => {
        const inputClicked = e.target
        const form = e.target.form
        const formElements = Array.from(form.elements)
        const isFocused = document.activeElement === inputClicked
        const typeDocSelect = document.getElementById("typeDoc")

        const elemDisabled = {
            style: {
                backgroundColor: COLORS.smoothGray
            },
            value: ''
        }

        // User press TAB
        if (e.key === "Tab") {
            const index = Array.prototype.indexOf.call(form, e.target)
            const actualElem = form.elements[index]
            const nextElem = form.elements[index + 1]

            if (nextElem.type !== "submit") {
                Object.assign(actualElem, elemDisabled)

                nextElem.focus()
                nextElem.style.backgroundColor = COLORS.white

                if (nextElem.name === "nroDoc")
                    typeDocSelect!.style.backgroundColor = COLORS.white
            }

            e.preventDefault()
            return
        }

        formElements.map((elem: any) => {
            if (elem.type !== "submit" && elem.name !== inputClicked.name) {
                elem.style.backgroundColor = COLORS.smoothGray
                elem.value = ""
            }
        })

        const isNroDoc = inputClicked.name === "nroDoc"

        if (isFocused) {
            inputClicked.style.backgroundColor = COLORS.white
            isNroDoc
                ? (typeDocSelect!.style.backgroundColor = COLORS.white)
                : (typeDocSelect!.style.backgroundColor = COLORS.smoothGray)
        }
    }

    return (
        <Col size={size}>
            <InputContainer>
                <LabelSpan>{label}</LabelSpan>
                <Input
                    type={type}
                    value={valueState}
                    placeholder={placeholder}
                    name={name}
                    onChange={e => setValueState(e.target.value)}
                    onClick={handleClick}
                    onKeyDown={handleClick}
                />
            </InputContainer>
        </Col>
    )
}

export default FormItem
