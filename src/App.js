import logo from "./logo.svg";
import "./App.css";
import Grid from "./Components/Grid";
import { useState } from "react";

function App() {
  const word = "Taper";
  const [final, setFinal] = useState(0);
  return (
    <div className="App">
      <h1 className="text-2xl w-screen text-center p-4">Wordle</h1>
      {<Grid setFinal={setFinal} word={word.toUpperCase()} />}
      {final == 1 && (
        <div className="grid place-items-center h-screen w-screen absolute top-0 left-0 rounded-lg">
          <div className="p-20 bg-orange-100">
          <h1>Nice guess! You got the word.</h1>
          </div>
        </div>
      )}
      {final == 2 && (
        <div className="grid place-items-center h-screen w-screen absolute top-0 left-0 rounded-lg">
          <div className="p-20 bg-orange-100">
          <h1>You failed. The word was {word}.</h1>
          </div>
        </div>
      )}
      </div>
  );
}

export default App;
