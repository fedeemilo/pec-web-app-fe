import React, { useState } from "react";
import Provider from "./context";
import Home from "./Page/Home/Index";
import RenderTree from "./Components/Tree";

import { tree } from './MockTree'

const App = () => {
  const [data, setData] = useState(0);

  return (
    <Provider value={{data, setData}}>
      <RenderTree  data={tree}/>
    </Provider>
  );
}

export default App;