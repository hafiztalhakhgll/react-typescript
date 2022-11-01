import React from "react";
import "./App.css";
import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button clicked", e);
  };

  return (
    <div className="App">
      <TextField value="" onChange={handleChange} />
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;
