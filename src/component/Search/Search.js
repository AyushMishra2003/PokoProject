import { useState } from "react"
import useDebounce from "../../hooks/useDebuance"

function Search({updateSearchterm}){
   // const  [searchterm,setsearchterm]=useState()
   // console.log();
      // const debounceCallback=useDebounce((e)=>updateSearchterm(e.target.value))
   return(
    <>
        <input
         type="text"
         placeholder="pokeman name" 
         className="w-[500px] border border-black p-[0.2rem]"
         onChange={(e)=>updateSearchterm(e.target.value)} 
         // value={updateSearchterm}
         />
    </>
   )
}
export default Search