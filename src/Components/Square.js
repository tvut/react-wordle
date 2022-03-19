export const Square = ({valid, row, id, c, setChar}) => {
    const handleTextChange = (e) => {
        if (e.target.value.length <= 1) {
          setChar(e.target.value.toUpperCase());
        }
        if (e.target.value.length === 1) {
            if(id < 5){
                document.getElementById(row+"-"+(id+1)).focus()
            } else {
                document.getElementById((row+1)+"-"+(1)).focus()
            }
        }
      }
      return(
        <>  
        {(valid===0) && (<input id={row+"-"+id} onChange={handleTextChange} value={c} className="border-4 h-10 w-10 text-center">
          </input>)}
          {(valid===1) && (<div id={row+"-"+id} className="flex justify-center items-center bg-green-400 border-4 h-10 w-10">
          {c}</div>)}
          {(valid===2) && (<div id={row+"-"+id} className="flex justify-center items-center bg-yellow-400 border-4 h-10 w-10">
          {c}</div>)}
          </>
      )
  }
  
  export default Square;