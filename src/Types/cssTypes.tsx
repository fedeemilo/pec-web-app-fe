interface FlexInterface {
    display?: string
    direction?: string
    justify?: string
    alignItems?: string
    alignContent?: string
    wrap?: string
}

interface BoxModelInterface {
    width?: number
    height?: number
    margin?: string
    padding?: string
    border?: string
    bRadius?: string
    bgColor?: string
}

interface FontStyleInterface {
    fSize?: string
    fWeight?: string
}


export type { FlexInterface, BoxModelInterface, FontStyleInterface }

export type BoxInterface = FlexInterface & BoxModelInterface & FontStyleInterface