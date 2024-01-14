import { useEffect, useState} from "react"
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"
function PokemonList(){   
     let  v=10
     const [pokemon,setpokemonLis]=useState([])
     const[isloading,setIsloading]=useState(false)
     const [offset,setOffset]=useState(0)
   //   const [offset,setOffset]=useState(0)
     const link=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
     const[pokodexUrl,Setpokodexurl]=useState('https://pokeapi.co/api/v2/pokemon')
     const[nextUrL,setnextUrl]=useState()
   //   const[prevUrl,setprevUrl]=useState()
     const[val,Setval]=useState(0)
     async function downloadPokemons(){  
        setIsloading(true) 
        const response=await axios.get(pokodexUrl)
        const pokemonresults=response.data.results  
        setnextUrl(response.data.next)
      //   setprevUrl(response.data.prev)
        const pokemonresultpromise=pokemonresults.map((response)=>axios.get(response.url))
        const pokemondata=await axios.all(pokemonresultpromise)
         setpokemonLis(pokemondata.map((pokodata)=>{
           const pokemon=pokodata.data
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
    },[pokodexUrl,nextUrL,offset])
    return(  
    <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="flex flex-wrap items-center justify-center gap-[2rem]">
            {(isloading)?"Loading....":
              pokemon.map((pok)=><Pokemon  name={pok.name} image={pok.image}/>)
           }
        </div>
  
        <div className="flex flex-rows border border-black  gap-[1rem]">
          <button  disabled={offset===0}   onClick={()=>
                       {  
                           setOffset(offset-20)
                           Setpokodexurl(link) 
                       }}className="p-[0.3rem] border border-black">Prev</button>
          <button disabled={nextUrL===undefined} onClick={()=>
            {Setpokodexurl(nextUrL)
            setOffset(offset+20)}
            }  className="p-[0.3rem] border border-black">Next</button>
       </div>
    </div>
   )
}
export default PokemonList