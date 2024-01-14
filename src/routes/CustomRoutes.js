import { Routes,Route } from "react-router-dom"
import Pokodex from "../component/Pokodex/Pokodex"
import Search from "../component/Search/Search"
import PokemonDetail from "../component/PokemonDetails/PokemonDetails"
import Contact from "../component/Contact/Contact"
// import Pokodex from "../component/Pokodex/Pokodex"
// import pokomonDetails from "../component/PokomonDetail/PokomonDetail"
// import Pokemon from "../component/Pokemon/Pokemon"
// // import Hellps from "../component/Hellp/Hellp"

// // import PokomonDetail from "../component/PokomonDetail/pokomonDetail"
// import Pokodex from "../component/Pokodex/Pokodex"
// // import PokomonDetail from "../component/PokomonDetail/pokomonDetail"
// import Search from "../component/Search/Search"

function CustomRouter(){
    return(
              <Routes> 
                 <Route path="/" element={<Pokodex/>}></Route>
                 <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
                 <Route path="/Contact" element={<Contact/>}/>
                 {/* <Route path="/pokomon/:id" element={<Search/>}/> */}
              </Routes>
    )
}
export default CustomRouter