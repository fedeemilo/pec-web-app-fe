/* Set multiple attributes of an element at once  */

import { elementAttrs } from "../Mocks/UI/attributes"

/* Country Selector handler functions */

export const countryIconHandler = (e: any) => {
    const activeElems = document.querySelectorAll(".active")
    const countrySelected = e.target

    activeElems.forEach(img => img.classList.remove("active"))
    countrySelected.classList.toggle("active")
}

/* Form handler functions */

export const attributesHandler = (elem: any, attrs: any) => {
    Object.keys(attrs).forEach(key => {
        if (attrs[key] === "false") {
            elem.removeAttribute(key)
            return
        }

        if (attrs[key] === "autofocus") {
            elem.focus()
        }

        if (!attrs[key]) {
            elem.value = ""
        }

        elem.setAttribute(key, attrs[key])
    })
}

export const formHandler = (e: any, callback: Function) => {
    e.preventDefault()

    return callback(e.target)
        ? callback(e.target)
        : console.error("You should send a callback function!")
}

export const inputHandler = (e: any, formCurrent: HTMLFormElement) => {
    const inputSelected = e.target
    const inputsList = formCurrent.querySelectorAll("input")
    const dropdownElem = document.querySelector("#typeDoc") as HTMLDivElement

    const {
        homeForm: { disabledAttrs, enabledAttrs }
    } = elementAttrs

    inputSelected.name === "nroDoc"
        ? (dropdownElem.style.backgroundColor = "#ffffff")
        : (dropdownElem.style.backgroundColor = "#f0f0f0")

    inputsList.forEach(input => {
        if (input.type !== "submit") {
            inputSelected.placeholder !== input.placeholder
                ? attributesHandler(input, disabledAttrs)
                : attributesHandler(input, enabledAttrs)
        }
    })
}
