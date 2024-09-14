import { useState } from "react";
import ValueDisplay from "./components/ValueDisplay";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Current and Previous Value</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ValueDisplay value={inputValue} />
    </>
  );
}

export default App;
