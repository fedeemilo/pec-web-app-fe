import { FunctionComponent } from "react"
import { Container } from "../../Common/Grid/Index"
import FormItem from "./FormItem"
import styled from "styled-components"

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

export type FormList = {
    type: string
    value: string
    label: string
    colSize?: number
    placeholder?: string
    name?: string
    imSelect?: boolean
}

interface FormInterface {
    list: FormList[]
    colSize?: number
    callback: Function
    submitText?: string
}
const Form: FunctionComponent<FormInterface> = ({
    list,
    colSize,
    callback,
    submitText
}) => {
    const formHandler = (e: any) => {
        e.preventDefault()

        console.log(e.target)

        return callback(e.target)
            ? callback(e.target)
            : console.error("You should send a callback function!")
    }

    return (
        <FormContainer onSubmit={e => formHandler(e)}>
            <Container>
                {list?.map((props: FormList) => (
                    <FormItem {...props} colSize={colSize} />
                ))}
                <Submit type={`submit`} value={submitText || "Enviar"} />
            </Container>
        </FormContainer>
    )
}

export default Form
