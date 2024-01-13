import { useEffect, useState} from "react"
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"
function PokemonList(){   

     const [pokemon,setpokemonLis]=useState([])
     const[isloading,setIsloading]=useState(false)
     const[pokodexUrl,Setpokodexurl]=useState('https://pokeapi.co/api/v2/pokemon')
     const[nextUrL,setnextUrl]=useState('')
     const[prevUrl,setprevUrl]=useState('')
     const[val,Setval]=useState(0)
     async function downloadPokemons(){  
        setIsloading(true) 
        //console.log("ayush");
        const response=await axios.get(pokodexUrl)
      //   console.log(response);
        const pokemonresults=response.data.results  
        // console.log(pokemonresults)
        setnextUrl(response.data.next)
        setprevUrl(response.data.prev)
        console.log(prevUrl);
        console.log(nextUrL);
        const pokemonresultpromise=pokemonresults.map((response)=>axios.get(response.url))
        const pokemondata=await axios.all(pokemonresultpromise)
      //   console.log(pokemondata);
         setpokemonLis(pokemondata.map((pokodata)=>{
           const pokemon=pokodata.data
          //  console.log(pokemon);
           return(
             {
                name:pokemon.name,
               image:pokemon.sprites.other.dream_world.front_default,
             }
           )
        }))
        setIsloading(false) 
    }
    useEffect(()=>{
         downloadPokemons()
    },[pokodexUrl])
    return(  
    <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="flex flex-wrap items-center justify-center gap-[2rem]">
            {(isloading)?"Loading....":
          pokemon.map((pok)=><Pokemon  name={pok.name} image={pok.image}/>)
           }
        </div>
  
        <div className="flex flex-rows border border-black  gap-[1rem]">
          {/* <button className="border border-black p-[1rem] rounded-sm hover:bg-slate-700" disabled={val==0}>MAXIMUM</button> */}
          {/* <button disabled>ADD</button> */}
          {
            prevUrl==undefined?console.log("ayush"):console.log("mishra")
          }
          <button disabled={prevUrl===undefined}  onClick={()=>Setpokodexurl(prevUrl)} className="p-[0.3rem] border border-black">Prev</button>
          <button disabled={nextUrL===undefined} onClick={()=>Setpokodexurl(nextUrL)}  className="p-[0.3rem] border border-black">Next</button>
       </div>
    </div>
   )
}
export default PokemonList