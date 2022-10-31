import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet isLoggedIn name="Talha Khalid" messageCount={10} />
    </div>
  );
}

export default App;
