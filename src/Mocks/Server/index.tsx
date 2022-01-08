import argentinaIcon from "../../Assets/img/argentina.svg"
import uruguayIcon from "../../Assets/img/uruguay.svg"
import paraguayIcon from "../../Assets/img/paraguay.svg"

export const FormElementsList = [
    {
        type: "number",
        value: "",
        label: "N° de línea fija",
        placeholder: "N° de línea fija",
        name: "lineaFija"
    },
    {
        type: "number",
        value: "",
        label: "N° de línea móvil",
        placeholder: "Número de línea móvil",
        name: "lineaMovil"
    },

    {
        type: "number",
        value: "",
        label: "N° de Cuenta",
        placeholder: "0000000000",
        name: "nroCuenta"
    },
    {
        type: "email",
        value: "",
        label: "Correo electrónico",
        placeholder: "example@email.com",
        name: "email"
    },
    {
        id: "typeDoc",
        type: "select",
        label: "Tipo de Documento",
        name: "typeDoc",
        options: [
            {
                value: "DNI",
                text: "DNI"
            },
            {
                value: "CI",
                text: "Cédula de Identidad"
            },
            {
                value: "LC",
                text: "Libreta Cívica"
            }
        ]
    },
    {
        type: "number",
        value: "",
        label: "N°  Documento",
        placeholder: "00000000",
        name: "nroDoc"
    }
]

export const FormCountryList = [
    {
        name: "Argentina",
        icon: argentinaIcon
    },
    {
        name: "Uruguay",
        icon: uruguayIcon
    },
    {
        name: "Paraguay",
        icon: paraguayIcon
    }
]

// GENERAL DATA
export const generalData = {
    FormElementsList,
    FormCountryList
}
