import './App.css';
import React, {useState} from 'react';

function App(props) {
  const [emotion, setEmotion] = useState("happy");
  return(
    <>
    <h1>Current emotion is {emotion}.</h1>
    <button onClick={() => setEmotion("happy")}>Happy</button>
    <button onClick={() => setEmotion("fraustrated")}>Fraustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
      );

}

export default App;
