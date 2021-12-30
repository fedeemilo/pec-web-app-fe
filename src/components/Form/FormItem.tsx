import { FunctionComponent, useState } from "react"
import { FormList } from "./"
import { Col } from "../../Common/Grid/Index"
import styled from "styled-components"
import { SelectItem } from "../../components/Form/SelectItem"

const InputContainer = styled.div`
    overflow: hidden;
    padding: 10px;
    position: relative;
`
const Input = styled.input`
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 0px;
    outline: none;
    padding: 10px 17px;
    width: -webkit-fill-available;
    height: 1.8rem;
    font-size: 1rem;

    ::placeholder {
        color: #a8a8a8;
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
`

const LabelSpan = styled.div`
    padding-bottom: 10px;
    color: #707070;
    font-size: 0.8rem;
`



const FormItem: FunctionComponent<FormList> = ({
    type,
    value,
    label,
    colSize,
    placeholder,
    name,
    imSelect
}) => {
    let size: number = colSize || 6

    const [valueState, setValueState] = useState(value)

    return (
        <Col size={size}>
            <InputContainer>
                <LabelSpan>{label}</LabelSpan>
                {
                    imSelect ? (<SelectItem />) : (
                        <Input
                            type={type}
                            value={valueState}
                            placeholder={placeholder}
                            name={name}
                            onChange={e => setValueState(e.target.value)}
                        />

                    )
                }

            </InputContainer>
        </Col>
    )
}

export default FormItem





/*
<>
{
    type === 'Icon' && (<Icon src={value} />) || (
        <MenuItemDiv href={action}>
            <Icon src={value} />
        </MenuItemDiv>
    )
}
</>*/