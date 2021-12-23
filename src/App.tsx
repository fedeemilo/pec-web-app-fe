import { useState } from "react";
import Provider from "./context";
import Home from "./Page/Home/Index";
import search from './images/search.svg'
import close from './images/close.svg'
import "font-awesome/css/font-awesome.min.css";


const App = () => {
  const myData = {
    logoUri: 'https://assets.turbologo.com/blog/es/2019/11/19132900/gaming-logo-cover.jpg', 
    items: [
      {name: 'item1', label: 'item1', icon: search, linkTo: 'item1'},
      {name: 'item2', label: 'item2', icon: 'item2', linkTo: 'item2'},
      {name: 'item3', label: 'item3', icon: 'item3', linkTo: 'item3'}
    ],
    lastItem: {label:'cerrar session', icon: close, linkTo: 'item3'}
  }
  const [data, setData] = useState(myData);
  return (
    <Provider value={{data, setData}}>
      <Home />
    </Provider>
  );
}

export default App;