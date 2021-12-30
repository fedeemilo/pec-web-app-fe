import { useState } from "react"
import Provider from "./context"
import Home from "./Page/Home/Index"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Open Sans', sans-serif;
    }
    
`

const App = () => {
    const [data, setData] = useState(0)

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
