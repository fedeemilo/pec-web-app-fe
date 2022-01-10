import argentinaIcon from "../../Assets/img/argentina.svg"
import uruguayIcon from "../../Assets/img/uruguay.svg"
import paraguayIcon from "../../Assets/img/paraguay.svg"
import adviserIcon from "../../Assets/img/adviser.svg"

const FormElementsList = [
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
        id: "nroDoc",
        type: "number",
        value: "",
        label: "N°  Documento",
        placeholder: "00000000",
        name: "nroDoc"
    }
]

const FormCountryList = [
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

const AdviserObj = {
    title: "Asesor",
    icon: adviserIcon,
    name: "Roberto Gomez"
}

const processDropdownObj = {
    id: "process",

    options: [
        {
            id: "",
            value: "Seleccione Perfil"
        },
        {
            id: "622",
            value: "622"
        },
        {
            id: "cobranzas",
            value: "Cobranzas"
        },
        {
            id: "corporativo",
            value: "Corporativo"
        },
        {
            id: "delivery",
            value: "Delivery"
        },
        {
            id: "digital",
            value: "Digital"
        },
        {
            id: "fija",
            value: "Fija"
        },
        {
            id: "generales",
            value: "Generales"
        },
        {
            id: "ger",
            value: "GER"
        },
        {
            id: "loyalty",
            value: "Loyalty"
        },
        {
            id: "loyaltyOut",
            value: "Loyalty OUT"
        },
        {
            id: "personalizada",
            value: "Personalizada"
        },
        {
            id: "soper",
            value: "Soper"
        },
        {
            id: "tecnica",
            value: "Técnica"
        },
        {
            id: "telemarketing",
            value: "Telemarketing"
        },
        {
            id: "PEC_CACS",
            value: "Pec CACS"
        },
        {
            id: "PEC_COBRANZAS",
            value: "Pec Cobranzas"
        },
        {
            id: "PEC_CONSULTAS",
            value: "Pec Consultas"
        },
        {
            id: "PEC_CORPO",
            value: "Pec Corporativo"
        },
        {
            id: "PEC_TECNICA_2DA",
            value: "Pec Técnica 2da. Línea"
        },
        {
            id: "PEC_TRAC",
            value: "Pec TRAC"
        },
        {
            id: "WDC_ASESOR",
            value: "Pec WDC Asesor"
        }
    ]
}

// GENERAL DATA
export const generalData = {
    FormElementsList,
    FormCountryList,
    AdviserObj,
    processDropdownObj
}
