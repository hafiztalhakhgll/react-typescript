import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
