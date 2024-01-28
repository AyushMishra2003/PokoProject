// import Header from "../Header/Header"
import { useEffect, useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import { Link } from "react-router-dom"
import PokemonDetail from "../PokemonDetails/PokemonDetails"
// import Ayush from "../Ayush/Ayush"
function Pokodex(){
   const [searchterm,setSearchterm]=useState('')
   // console.log(searchterm);

   // useEffect(()=>{

   // },[searchterm])
   return(
          <div className="flex flex-col items-center justify-center">  
             <Search  updateSearchterm={setSearchterm}/>
             {searchterm}
             {/* <PokemonList/> */}
                { !searchterm?<PokemonList/>:<PokemonDetail key={searchterm}  name={searchterm}/>}
               {/* <PokemonDetail />             */}
          </div> 
   )
}
export default Pokodex