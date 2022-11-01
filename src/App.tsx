import "./App.css";
import Heading from "./components/Heading";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>This is heading</Heading>
    </div>
  );
}

export default App;
