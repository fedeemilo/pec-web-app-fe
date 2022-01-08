import { MouseEventHandler } from 'react'

// FormList
export type FormList = {
    type: string
    value?: string
    label: string
    colSize?: number
    placeholder?: string
    name?: string
    clickInput?: MouseEventHandler,
    options?: any[],
    id?: string
}

// FormInterface
export interface FormInterface {
    list: FormList[]
    colSize?: number
    callback: Function
    submitText?: string
    clickInput?: MouseEventHandler
}
