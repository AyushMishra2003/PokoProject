import { Routes,Route } from "react-router-dom"
import Pokodex from "../component/Pokodex/Pokodex"
import PokemonDetail from "../component/PokemonDetails/PokemonDetails"

function CustomRouter(){
    return(
              <Routes> 
                 <Route path="/" element={<Pokodex/>}/>
                 <Route path="/pokemon/:id/" element={<PokemonDetail/>}/>
              </Routes>
    )
}
export default CustomRouter