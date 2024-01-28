import axios from "axios"
import { useEffect,useState } from "react"
function usePookemanList(offset){
    // const [offset,setOffset]=useState(0)
    // const link=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`

    const [pokemonListState,setPokemonListState]=useState({
        pokemonList:[],
        isloading:false,  
        // offset:0,
        pokodexUrl:`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
        nextUrL:'',
        prevUrl:''
      
      })
      async function downloadPokemons(){  
        setPokemonListState({...pokemonListState,isloading:true})
        const response=await axios.get(pokemonListState.pokodexUrl)
        const pokemonresults=response.data.results  
        setPokemonListState({...pokemonListState,nextUrL:response.data.next,prevUrl:response.data.previous})
        const pokemonresultpromise=pokemonresults.map((response)=>axios.get(response.url))
        const pokemondata=await axios.all(pokemonresultpromise)
          const pokelistResult=pokemondata.map((pokedata)=>{
              const pokemon=pokedata.data
              return{
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
              }
          })
          setPokemonListState({...pokemonListState,
          isloading:false,
          pokemonList:pokelistResult
        })
        // console.log(offset);
    }

    useEffect(()=>{
        downloadPokemons()
   },[pokemonListState.pokodexUrl,pokemonListState.nextUrL,pokemonListState.offset])

    return  {pokemonListState,setPokemonListState,offset}
}
export default usePookemanList