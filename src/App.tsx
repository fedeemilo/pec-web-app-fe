// import { useState } from "react";
import Provider from "./context";
import Home from "./Page/Home/Index";
import logoExit from "./img/box-arrow-right.svg"

import { MenuMock } from './Mocks/Menu/Items';


const graphData = {
  'menu': {
    'items': MenuMock,
    'last':{
      type: 'Icon',
      value: logoExit,
      action: '/'
          }
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