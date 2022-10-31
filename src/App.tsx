import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

const personName = {
  firstName: "Talha",
  lastName: "Khalid",
};

function App() {
  return (
    <div className="App">
      <Greet isLoggedIn name="Talha Khalid" messageCount={10} />
      <Person name={personName} />
    </div>
  );
}

export default App;
