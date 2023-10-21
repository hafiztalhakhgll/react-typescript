import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import User from "./components/User";
import Person from "./components/Person";

const PERSONS = [
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
      <UserContextProvider>
        <User />
        <Person name={PERSONS} />
      </UserContextProvider>
    </div>
  );
}

export default App;
