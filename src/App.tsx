<<<<<<< HEAD
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
=======
import { useState } from "react";
import Provider from "./context";
import Home from "./Page/Home/Index";

const App = () => {
  const [data, setData] = useState(0);

  return (
    <Provider value={{data, setData}}>
      <Home />
    </Provider>
  );
}
>>>>>>> a49afb00d8fec56fdbdfc367aeae640454417788

export default App;