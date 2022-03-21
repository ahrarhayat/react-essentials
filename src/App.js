import './App.css';
import React, {useState, useEffect} from 'react';

function App(props) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  useEffect(() =>{console.log(`Its ${emotion} around here`)},[emotion]);
  useEffect(() =>{console.log(`Its ${secondary} around here`)},[secondary]);
  return(
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion("happy")}>Happy</button>
    <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
    <button onClick={() => setEmotion("fraustrated")}>Fraustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
      );

}

export default App;
