import './App.css';

function SecretComponent()
{
  return (<div><h1>Secret information for authorised users only</h1></div>)
}

function RegularComponent()
{
  return (<div><h1>Everyone can see this component</h1></div>)
}

const [,,light] = ["boots","tent","HeadLamp"];
console.log(light);

function App(props) {
  return(
    <>
      {props.authorized ? <SecretComponent/> : <RegularComponent/> }
      </>
      );
  //alternate method
  // if(props.authorized)
  // {
  //   return(<SecretComponent/>)
  // }
  // else{
  //   return(<RegularComponent/>)
  // }
}

export default App;
