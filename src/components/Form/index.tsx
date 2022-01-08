import { FunctionComponent, useRef } from "react"
import { Container } from "../../Common/Grid/Index"
import FormItem from "./FormItem"
import styled from "styled-components"
import { FormList, FormInterface } from "../../Types/formTypes"
import Dropdown from "../../Common/UI/Dropdown"
import { setAttributes } from "../../Utils/functions"
import { elementAttrs } from "../../Mocks/UI/attributes"

const Submit = styled.input`
    outline: none;
    padding: auto 22px;
    border: 1px solid #dadce0;
    font-size: 18px;
    border-radius: 5px;
    width: 97%;
    height: 3.3rem;
    margin: 1.07rem auto;
    background-color: #1f97ae;
    color: #ffffff;
    cursor: pointer;
`

const FormContainer = styled.form`
    background-color: #ffffff;
`

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

        console.log(dropdownElem)

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
                        colSize={6}
                        options={props.options}
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
