import { useState } from "react";
import Provider from "./context";
import Home from "./Page/Home/Index";


import { MenuMock } from './Mocks/Menu/Items';


const graphData = {
  'menu': {
    'items': MenuMock
  }
}


const App = () => {
  return (
    <Provider value={{...graphData}}>
      <Home />
    </Provider>
  );
}

export default App;