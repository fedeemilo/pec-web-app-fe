import { useState } from "react"
import { createGlobalStyle } from "styled-components"
import { generalData } from "./Mocks/Server"
import Provider from "./context"
import Home from "./Page/Home/Index"
import { COLORS } from "./Constants"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-family: 'Open Sans', sans-serif;   
    }
    
    body {
        height: 100%;
        min-height: 100%;
        display: flex;
        margin: 0;
        padding: 0; 
        background-color: ${COLORS.bgColor};
    }

    img, p {
        pointer-events: none;
        user-select: none;
    }
`

const App = () => {
    const [data, setData] = useState(generalData)

    return (
        <>
            <GlobalStyle />
            <Provider value={{ data, setData }}>
                <Home />
            </Provider>
        </>
    )
}

export default App
