import { useEffect, useState} from "react"
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){  
     const [pokemon,setpokemonLis]=useState([])
     const[isloading,setIsloading]=useState(false)
     async function downloadPokemons(){
      console.log("ayush");
        const response=await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonresults=response.data.results 
        const pokemonresultpromise=pokemonresults.map((response)=>axios.get(response.url))
        const pokemondata=await axios.all(pokemonresultpromise)
      //   console.log(pokemondata);
        setpokemonLis(pokemondata.map((pokodata)=>{
           const pokemon=pokodata.data
           console.log(pokemon);
           return(
             {
               // name:pokemon.name\,
                name:pokemon.name,
               //  image:pokemondata.data.sprites.other.dream_world.front_default
               image:pokemon.sprites.other.dream_world.front_default,
               // age:22
             }
           )
        }))
      //   console.log(pokemon);
        setIsloading(false)
      //   console.log(isloading);
    }
    useEffect(()=>{
         downloadPokemons()
    },[])
    return(
    <div className="">

    <p>POKEMON LIST</p>
    {/* {(isloading)?{
      PokemonList.map(()=>{

      })
    }:'LOADING.....'} */}
    {(isloading)?"Loading....":
        pokemon.map((pok)=><Pokemon name={pok.name} image={pok.image}/>)
         
    }
    {/* downloadPokemons() */}
    {/* {pokemon} */}
    </div>
   )
}
export default PokemonList