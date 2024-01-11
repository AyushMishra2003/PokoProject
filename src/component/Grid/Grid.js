import { useState } from "react"
import Card from "../Card/Card"
import isWinner from "../../Helper/Helper"

function Grid({numberofcards}){
   const[board,setBoard]=useState(Array(numberofcards).fill(""))
   const[turn,setTurn]=useState(true)
   const[winner,setWinner]=useState(null)
   // TURN TRUE-0 IF FALSE THEN X KI TURN

   function play(idex){
    if(!winner)
    {
    console.log("hello i am calling");
    if(turn==true){
        board[idex]='O'
    }else{
        board[idex]="X"
    }
    const win=isWinner(board,turn?"O":"X")
    if(win)
    {
        console.log("hello baby");
    }
    if(win){
       setWinner(win)
    }
    setBoard([...board])
    setTurn(!turn)
   }
   }

   function reset(){
    setTurn(true)
    setWinner(null)
    setBoard(Array(numberofcards).fill(""))
   }
   return(
    <div>
        {
            winner && (
                <>
                  
                  <h1 className="text-white ">Winner is {winner}</h1>
                  <button  on className="border border-white p-[0.5rem] rounded-md text-white" onClick={reset}>RESTART</button>
                </>
               
            )
        }
        <h1 className="text-white">Current Turn:{(turn)?'O':'X'}</h1>
        <div className="h-[500px] w-[500px] flex flex-wrap justify-between items-center">
           {board.map((el,idex)=> <Card key={idex} onPLay={play} player={el} index={idex}/>)}
      </div> 
    </div>
     
   )
}

export default Grid