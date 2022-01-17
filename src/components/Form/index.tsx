import { FunctionComponent, useRef } from "react"
import { Container } from "../../Common/Grid/Index"
import FormItem from "./FormItem"
import { FormList, FormInterface } from "../../Types/formTypes"
import { Dropdown } from "../../Common/UI"
import { attributesHandler, formHandler } from "../../Utils/functions"
import { FormContainer, Submit } from "./styles"
import { elementAttrs } from "../../Mocks/UI/attributes"
import { COLORS } from "../../Constants"

const Form: FunctionComponent<FormInterface> = ({
    list,
    colSize,
    callback,
    submitText
}) => {
    const formRef = useRef<HTMLFormElement>(null)
    const formDropdownStyles = {
        border: "1px solid #e0e0e0",
        padding: "13.68px 22px",
        color: COLORS.boldGray,
        bgColor: COLORS.smoothGray
    }

    const renderFormElements = () =>
        list?.map((props: FormList, i: number) => {
            if (props.type === "select")
                return (
                    <Dropdown
                        {...props}
                        key={i}
                        selected={"DNI"}
                        colSize={colSize}
                        options={props.options}
                        isForm={true}
                        styles={formDropdownStyles}
                    />
                )

            return (
                <FormItem
                    {...props}
                    key={i}
                    colSize={6}
                />
            )
        })

    return (
        <FormContainer onSubmit={e => formHandler(e, callback)} ref={formRef}>
            <Container wrap={"wrap"}>
                {renderFormElements()}
                <Submit type={`submit`} value={submitText || "Enviar"} />
            </Container>
        </FormContainer>
    )
}

export default Form
