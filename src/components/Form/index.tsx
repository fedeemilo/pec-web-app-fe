import { FunctionComponent, useRef, useEffect } from "react"
import { Container } from "../../Common/Grid/Index"
import FormItem from "./FormItem"
import { FormList, FormInterface } from "../../Types/formTypes"
import { Dropdown } from "../../Common/UI"
import { attributesHandler, formHandler } from "../../Utils/functions"
import { FormContainer, Submit } from "./FormStyles"
import { elementAttrs } from "../../Mocks/UI/attributes"
import { COLORS } from "../../Styling"

const Form: FunctionComponent<FormInterface> = ({
    list,
    colSize,
    callback,
    submitText
}) => {
    const formRef = useRef<HTMLFormElement>(null)
    
    const inputHandler = (e: any) => {
        const inputSelected = e.target
        const formCurrent = formRef.current as HTMLFormElement
        const inputsList = formCurrent.querySelectorAll("input")
        const dropdownElem = document.querySelector(
            "#typeDoc"
        ) as HTMLDivElement

        const {
            homeForm: { disabledAttrs, enabledAttrs }
        } = elementAttrs

        const dropdownBgColor = {
            
        }

        dropdownElem.style.backgroundColor =
            inputSelected.name === "nroDoc" ? COLORS.white : COLORS.smoothGray

        inputsList.forEach(input => {
            if (input.type !== "submit") {
                inputSelected.placeholder !== input.placeholder
                    ? attributesHandler(input, disabledAttrs)
                    : attributesHandler(input, enabledAttrs)
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
                    inputHandler={e => inputHandler(e)}
                />
            )
        })

    return (
        <FormContainer onSubmit={e => formHandler(e, callback)} ref={formRef}>
            <Container wrap={true}>
                {renderFormElements()}
                <Submit type={`submit`} value={submitText || "Enviar"} />
            </Container>
        </FormContainer>
    )
}

export default Form
