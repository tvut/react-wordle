import Row from "./Row";
import Square from "./Square";

export const Grid = ({setFinal, word}) => {

  return (
    <div style={{width:300}} className="mx-auto">
      <Row setFinal={setFinal} fail={0} word={word} row={1}/>
      <Row setFinal={setFinal} fail={0} word={word} row={2}/>
      <Row setFinal={setFinal} fail={0} word={word} row={3}/>
      <Row setFinal={setFinal} fail={0} word={word} row={4}/>
      <Row setFinal={setFinal} fail={2} word={word} row={5}/>
    </div>
  );
};

export default Grid;
