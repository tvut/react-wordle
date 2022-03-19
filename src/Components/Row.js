import Square from "./Square";
import { useState } from "react";

export const Row = ({ word, row, setFinal, fail }) => {
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

  const handleTextChange = (e) => {
    if (e.target.value.length <= 1) {
      setChar5(e.target.value.toUpperCase());
      filledIn(e.target.value.toUpperCase());
    }
    if (e.target.value.length === 1) {
      document.getElementById(row + 1 + "-" + 1).focus();
    }
  };

  const filledIn = (last) => {
      const wordSplit = word.split("")
      var done = true;
      console.log(wordSplit)
      if(c1 === wordSplit[0]){
        setValid1(1)
      } else if(word.indexOf(c1)!=-1){
        setValid1(2)
        done = false;
      } else{
        done=false;
    }
      if(c2 === wordSplit[1]){
        setValid2(1)
      }else if(word.indexOf(c2)!=-1){
        setValid2(2)
        done = false;
      } else{
        done=false;
    }
      if(c3 === wordSplit[2]){
        setValid3(1)
      }else if(word.indexOf(c3)!=-1){
        setValid3(2)
        done = false;
      } else{
        done=false;
    }
      if(c4 === wordSplit[3]){
        setValid4(1)
      }else if(word.indexOf(c4)!=-1){
        setValid4(2)
        done = false;
      } else{
          done=false;
      }
      if(last === wordSplit[4]){
        setValid5(1)
      }else if(word.indexOf(last)!=-1){
        setValid5(2)
        done = false;
      } else{
        done=false;
    }
    if(done){
        setFinal(1)
    } else {
        setFinal(fail)
    }
  }

  return (
    <div className="grid grid-cols-5 p-2">
      <Square valid={valid1} c={c1} setChar={setChar1} row={row} id={1} />
      <Square valid={valid2} c={c2} setChar={setChar2} row={row} id={2} />
      <Square valid={valid3} c={c3} setChar={setChar3} row={row} id={3} />
      <Square valid={valid4} c={c4} setChar={setChar4} row={row} id={4} />
      {(valid5===0) && (<input
        id={row + "-5"}
        onChange={handleTextChange}
        value={c5}
        className="border-4 h-10 w-10 text-center"
      ></input>)}
      {(valid5===1) && (<div id={row + "-5"} className="flex justify-center items-center bg-green-400 border-4 h-10 w-10">
          {c5}</div>)}
          {(valid5===2) && (<div id={row + "-5"} className="flex justify-center items-center bg-yellow-400 border-4 h-10 w-10">
          {c5}</div>)}
    </div>
  );
};

export default Row;
