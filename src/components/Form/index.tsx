import { FunctionComponent, useRef } from "react"
import { Container } from "../../Common/Grid/Index"
import FormItem from "./FormItem"
import { FormList, FormInterface } from "../../Types/formTypes"
import { Dropdown } from "../../Common/UI"
import { setAttributes } from "../../Utils/functions"
import { elementAttrs } from "../../Mocks/UI/attributes"
import { FormContainer, Submit } from "./FormStyles"

const Form: FunctionComponent<FormInterface> = ({
    list,
    colSize,
    callback,
    submitText
}) => {
    const formRef = useRef<HTMLFormElement>(null)

    const formHandler = (e: any) => {
        e.preventDefault()

        return callback(e.target)
            ? callback(e.target)
            : console.error("You should send a callback function!")
    }

    const clickInput = (e: any) => {
        const inputSelected = e.target
        const formCurrent = formRef.current as HTMLFormElement
        const inputsList = formCurrent.querySelectorAll("input")
        const dropdownElem = document.querySelector(
            "#typeDoc"
        ) as HTMLDivElement

        const {
            homeForm: { disabledAttrs, enabledAttrs }
        } = elementAttrs

        inputSelected.name === "nroDoc"
            ? (dropdownElem.style.backgroundColor = "#ffffff")
            : (dropdownElem.style.backgroundColor = "#f0f0f0")

        inputsList.forEach(input => {
            if (input.type !== "submit") {
                inputSelected.placeholder !== input.placeholder
                    ? setAttributes(input, disabledAttrs)
                    : setAttributes(input, enabledAttrs)
            }
        })
    }

    const renderFormElements = () =>
        list?.map((props: FormList) => {
            if (props.type === "select")
                return (
                    <Dropdown
                        {...props}
                        selected={"DNI"}
                        colSize={6}
                        options={props.options}
                        isForm={true}
                    />
                )

            return (
                <FormItem
                    {...props}
                    colSize={colSize}
                    clickInput={clickInput}
                />
            )
        })


    return (
        <FormContainer onSubmit={e => formHandler(e)} ref={formRef}>
            <Container wrap={true}>
                {renderFormElements()}
                <Submit type={`submit`} value={submitText || "Enviar"} />
            </Container>
        </FormContainer>
    )
}

export default Form
