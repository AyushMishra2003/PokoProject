import { useEffect, useState} from "react"
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"
import usePookemanList from "../../hooks/usePookemanlist"
function PokemonList(){   
    //  console.log(search);
     const [offset,setOffset]=useState(0)
     const link=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    //   ADVANCE USE STATE
    const {pokemonListState,setPokemonListState}=usePookemanList(offset)
    // console.log(offset);
    return(  
    <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="flex flex-wrap items-center justify-center gap-[2rem]">
            {(pokemonListState.isloading)?"Loading....":
              pokemonListState.pokemonList.map((pok,index)=><Pokemon key={index+1}  id={pok.id} name={pok.name} image={pok.image} />)
           }
        </div>
  
        <div className="flex flex-rows border border-black  gap-[1rem]">
          <button  disabled={offset===0}   onClick={()=>
                       {  
                           setOffset(offset-20)
                           setPokemonListState({...pokemonListState,pokodexUrl:link})
                       }}className="p-[0.3rem] border border-black">Prev</button>
          <button disabled={ pokemonListState.nextUrL===undefined} onClick={()=>
            { 
              setPokemonListState({...pokemonListState,pokodexUrl:pokemonListState.nextUrL}) 
              setOffset(offset+20)}
            }  className="p-[0.3rem] border border-black">Next</button>
       </div>
    </div>
   )
}
export default PokemonList