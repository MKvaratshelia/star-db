import SwapiService from "../services/index";

function App() {
  return <div className="App"></div>;
}

export default App;
const swapi = new SwapiService();

swapi.getPerson(3).then((person) => {
  console.log(person.name);
});
