import Header from "../Header/Header"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import { Link } from "react-router-dom"
function Pokodex(){
   return(
          <div className="flex flex-col border border-black items-center justify-center">  
            {/* <link to="/pokemon/2"> */}
            {/* <Link to={}> */}
                <h1 className="text-red-800">Pokodex</h1>
                 <Header/>
                 <Search/>
                <PokemonList/> 
            {/* </Link> */}
        
               {/* </link> */}
          </div> 
   )
}
export default Pokodex