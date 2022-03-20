import Square from "./Square";
import { useState } from "react";
import isInWords from "../Constants/Words"

export const Row = ({ word, row, setFinal, fail }) => {
  const [invalid, setInvalid] = useState(false);
  const [c1, setChar1] = useState("");
  const [c2, setChar2] = useState("");
  const [c3, setChar3] = useState("");
  const [c4, setChar4] = useState("");
  const [c5, setChar5] = useState("");

  const [valid1, setValid1] = useState(0);
  const [valid2, setValid2] = useState(0);
  const [valid3, setValid3] = useState(0);
  const [valid4, setValid4] = useState(0);
  const [valid5, setValid5] = useState(0);

  const backUp = (e) => {
    if (e.keyCode === 8) {
      if(c5.length===0){
      document.getElementById(row + "-4").focus();
      } else {
        setInvalid(false);
      }
    }
  };

  const handleTextChange = (e) => {
    if (e.target.value.length <= 1) {
      setChar5(e.target.value.toUpperCase());
    }
    if (e.target.value.length === 1) {
      filledIn(e.target.value.toUpperCase());
    }
  };

  const filledIn = (last) => {
    const wordSplit = word.split("");
    var done = true;
    // console.log(wordSplit)
    var fullWord = c1+c2+c3+c4+last;
    if(isInWords(fullWord.toLowerCase())){
      if (c1 === wordSplit[0]) {
        setValid1(1);
      } else if (word.indexOf(c1) != -1) {
        setValid1(2);
        done = false;
      } else {
        done = false;
        setValid1(3);
      }
      if (c2 === wordSplit[1]) {
        setValid2(1);
      } else if (word.indexOf(c2) != -1) {
        setValid2(2);
        done = false;
      } else {
        done = false;
        setValid2(3);
      }
      if (c3 === wordSplit[2]) {
        setValid3(1);
      } else if (word.indexOf(c3) != -1) {
        setValid3(2);
        done = false;
      } else {
        done = false;
        setValid3(3);
      }
      if (c4 === wordSplit[3]) {
        setValid4(1);
      } else if (word.indexOf(c4) != -1) {
        setValid4(2);
        done = false;
      } else {
        done = false;
        setValid4(3);
      }
      if (last === wordSplit[4]) {
        setValid5(1);
      } else if (word.indexOf(last) != -1) {
        setValid5(2);
        done = false;
      } else {
        done = false;
        setValid5(3);
      }
      if (done) {
        setInvalid(false)
        setFinal(1);
      } else {
        setFinal(fail);
      }
      document.getElementById(row + 1 + "-" + 1).focus();
    } else {
      setInvalid(true)
    }
  };

  return (
    <div className={`grid grid-cols-5 p-1 items-center ${invalid ? "border-red-400 border-4": ""}`}>
      <Square valid={valid1} c={c1} setChar={setChar1} row={row} id={1} />
      <Square valid={valid2} c={c2} setChar={setChar2} row={row} id={2} />
      <Square valid={valid3} c={c3} setChar={setChar3} row={row} id={3} />
      <Square valid={valid4} c={c4} setChar={setChar4} row={row} id={4} />
      {valid5 === 0 && (
        <input
          id={row + "-5"}
          onChange={handleTextChange}
          onKeyDown={backUp}
          value={c5}
          className="text-3xl border-4 h-16 w-16 text-center"
        ></input>
      )}
      {valid5 === 1 && (
        <div
          id={row + "-5"}
          className="text-3xl flex justify-center border-green-400 items-center bg-green-400 border-4 h-16 w-16"
        >
          {c5}
        </div>
      )}
      {valid5 === 2 && (
        <div
          id={row + "-5"}
          className="text-3xl flex justify-center border-yellow-400 items-center bg-yellow-400 border-4 h-16 w-16"
        >
          {c5}
        </div>
      )}
      {valid5 === 3 && (
        <div
          id={row + "-5"}
          className="text-3xl flex justify-center items-center border-gray-400 bg-gray-400 border-4 h-16 w-16"
        >
          {c5}
        </div>
      )}
    </div>
  );
};

export default Row;
