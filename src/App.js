import './App.css';

function Header(props)
{
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props)
{
  return (
    <section>
      <p>We make the {props.adjective} and healthiest food in town</p>
      <ul style={{ textAlign: "left" }}>
      {props.dishes.map((dish ,i) => 
      <li key = {dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer(props)
{
  return (
    <section>
      <p>Copyright {props.year}</p>
    </section>
  );
}

const dishes = ["Mac and Cheese", "Squid", "Karage",  "Salmon"];

const dishObjects = dishes.map((dish,i) => ({id: i, title: dish} ));

//console.log(dishObjects);



function App() {
  return (
    <div className="App">
      <Header name = "Zyan"/>
      <Main adjective = "cheapest" dishes = {dishObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
