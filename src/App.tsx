import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

const personNamesList = [
  {
    firstName: "Talha",
    lastName: "Khalid",
  },
  {
    firstName: "Faraz",
    lastName: "Ali",
  },
];

function App() {
  return (
    <div className="App">
      <Greet isLoggedIn name="Talha Khalid" messageCount={10} />
      <Person name={personNamesList} />
    </div>
  );
}

export default App;
