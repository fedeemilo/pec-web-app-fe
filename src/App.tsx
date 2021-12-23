import { useState } from "react";
import Provider from "./context";
import Home from "./Page/Home/Index";

const App = () => {
    const [data, setData] = useState(0);

    return (
        <Provider value={{ data, setData }}>
            <Home />
        </Provider>
    );
};

export default App;
