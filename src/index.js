import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";


function AppDeux()
{
  return (
  <div className="AppTwo">
    <h1>"This is the second app"</h1>
  </div>
  );
}

ReactDOM.render(
  <>
    <App/> <AppDeux/>
    </>,
  document.getElementById('root')
);


