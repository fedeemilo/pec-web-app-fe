import { SelectHTMLAttributes } from "react";

export interface DropdownType extends SelectHTMLAttributes<HTMLSelectElement> {
    id?: string
    label: string
    options?: any[]
    colSize?: number
    selected?: string
    isForm?: boolean
    styles?: any
}
