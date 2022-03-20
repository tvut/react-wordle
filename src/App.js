import Grid from "./Components/Grid";
import { useEffect, useState } from "react";
import randomWord from "./Constants/GameWords";

function App() {
  const [word, setWord] = useState(randomWord());
  const [final, setFinal] = useState(0);
  useEffect(() => {
    console.log(word);
    document.getElementById("1-1").focus();
  });
  return (
    <div className="App transition-all">
      <div className="grid place-items-center min-h-screen w-screen">
      <div>
      <h1 className="text-gray-700 text-4xl w-screen text-center p-4">Wordle</h1>
      {<Grid setFinal={setFinal} word={word.toUpperCase()} />}
      <div className="mt-2 text-center">
      <p className="text-sm text-gray-300 mb-2">Built By Tristan Stevens.</p>
      <a href="https://github.com/tvut/wordle" className="text-4xl text-gray-300 hover:text-gray-600 transition-all"><i className="not-italic fa-brands fa-github"></i></a>
      </div>
      </div>
      </div>
      {(final == 2 || final == 1) && (
        <div className="grid place-items-center h-screen w-screen absolute top-0 left-0 rounded-lg">
          <div className="p-10 bg-orange-100 shadow-xl rounded-lg text-center">
            {final == 2 ? (<><h2 className="mb-2">Better luck next time!</h2>
            <h1 className="text-2xl mb-4">The word was {word}.</h1></>) : (
              <h1 className="mb-2 text-xl">Nice guess! You got the word.</h1>
            )}
            <button onClick={() => window.location.reload(true)} className="cursor bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              New Word
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
