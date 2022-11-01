import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>This is heading</Heading>
      <Oscar>
        <Heading>This heading is in Oscar Component</Heading>
      </Oscar>
      <Greet name="Talha Khalid" isLoggedIn />
    </div>
  );
}

export default App;
