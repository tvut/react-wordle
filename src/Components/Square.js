export const Square = ({ valid, row, id, c, setChar }) => {
  const handleTextChange = (e) => {
    if (e.target.value.length <= 1) {
      setChar(e.target.value.toUpperCase());

    }
    if (e.target.value.length === 1) {
      if (id < 5) {
        document.getElementById(row + "-" + (id + 1)).focus();
      } else {
        document.getElementById(row + 1 + "-" + 1).focus();
      }
    }
  };
  const backUp = (e) => {
    if (e.keyCode === 8 && id > 1 && c.length===0) {
      document.getElementById(row + "-" + (id - 1)).focus();
    }
  };
  return (
    <div className="flex w-full place-items-center justify-center justify-self-center mx-auto">
      {valid === 0 && (
        <input
          id={row + "-" + id}
          onChange={handleTextChange}
          value={c}
          className="text-3xl border-4 h-16 w-16 text-center"
          onKeyDown={backUp}
        ></input>
      )}
      {valid === 1 && (
        <div
          id={row + "-" + id}
          className="text-3xl flex justify-center items-center bg-green-400 border-green-400 border-4 h-16 w-16"
        >
          {c}
        </div>
      )}
      {valid === 2 && (
        <div
          id={row + "-" + id}
          className="text-3xl flex justify-center items-center bg-yellow-400 border-yellow-400 border-4 h-16 w-16"
        >
          {c}
        </div>
      )}
      {valid === 3 && (
        <div
          id={row + "-" + id}
          className="text-3xl flex justify-center items-center border-gray-400 bg-gray-400 border-4 h-16 w-16"
        >
          {c}
        </div>
      )}
    </div>
  );
};

export default Square;
