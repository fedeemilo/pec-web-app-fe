import { useContext } from "react"
import { CONTEXT } from "../../context"
import { Text, Box } from "../../Common/UI"
import Form from "."

const FormComponent = () => {
    const CTX: any = useContext(CONTEXT)
    const {
        data: { FormElementsList }
    } = CTX

    const formFunctionHandler = (formData: any): any => {
        console.log(formData)
    }

    return (
        <Box width={"32.5rem"} bgColor={"#ffffff"}>
            <Text
                size={".783rem"}
                color={"#5a5a5a"}
                margin={"0 0 1.4rem 0.49rem"}
            >
                Llene uno de los campos para realizar la búsqueda:
            </Text>

            <Form
                list={FormElementsList}
                colSize={6}
                callback={formFunctionHandler}
                submitText={"Buscar"}
            />
        </Box>
    )
}

export default FormComponent
