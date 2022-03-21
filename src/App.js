import './App.css';
import React, {useReducer} from 'react';


function App(props) {
  const [checked, toggle] = useReducer((checked => !checked),false);
  

  return(
    <>
    <input type="checkbox" 
    value = {checked}
    onChange={toggle}>
    </input>
    <p>{checked ? "checked" : "not checked"}</p>
    </>
      );

}

export default App;
