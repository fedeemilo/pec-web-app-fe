import React, { useState } from "react";
import Title from "./components/Title";
import Button from "./components/Button";
import "./App.css";
import Provider from "./context";

const App = () => {
    const [data, setData] = useState(0);

    return (
        <div className="App">
            <Provider value={{ data, setData }}>
                <Title>{data}</Title>
                <Button></Button>
            </Provider>
        </div>
    );
};

export default App;
