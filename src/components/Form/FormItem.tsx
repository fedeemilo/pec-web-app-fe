import { FunctionComponent, useState } from "react"
import { FormList } from "../../Types/formTypes"
import { Col } from "../../Common/Grid/Index"
import { Input, InputContainer, LabelSpan } from './FormStyles'

const FormItem: FunctionComponent<FormList> = ({
    type,
    value,
    label,
    colSize,
    placeholder,
    name,
    clickInput
}) => {
    const size: number = colSize || 6
    const [valueState, setValueState]: any = useState(value)

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
                    onClick={clickInput}
                />
            </InputContainer>
        </Col>
    )
}

export default FormItem
