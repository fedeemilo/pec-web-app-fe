import styled from 'styled-components'

export const InputContainer = styled.div`
    overflow: hidden;
    padding: 10px;
    position: relative;
`

export const Input = styled("input")<{
    enabled?: string
}>`
    border: none;
    border-radius: 2px;
    border: 1px solid #e0e0e0;
    outline: none;
    padding: 10px 17px;
    width: -webkit-fill-available;
    height: 1.8rem;
    font-size: 0.9rem;
    cursor: pointer;
    background-color: ${props => (!props.enabled ? "#f0f0f0" : "#ffffff")};

    ::placeholder {
        color: #a8a8a8;
    }
`

export const LabelSpan = styled.div`
    padding-bottom: 10px;
    color: #707070;
    color: #5a5a5a;
    font-size: 0.75rem;
`

export const Submit = styled.input`
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

export const FormContainer = styled.form`
    background-color: #ffffff;
`