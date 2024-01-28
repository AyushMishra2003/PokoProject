import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
function PokemonDetail({name}){  
     const {id}=useParams() 
     const[pokemon,setPokemon]=useState({})
     async function downloadPokemon()
     {
        let response
        try{
            setPokemon({})  
            // name=name.toString()
             console.log(name);
             if(name){
                console.log("MAI EMPTY NAHI HU");
                response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) 
             }
             else{
                console.log("mai empty hu bhai");
                response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
             }
             console.log(name);
          
            
           setPokemon({
            name:response.data.name,
            weight:response.data.weight,
            image:response.data.sprites.other.dream_world.front_default,
            height:response.data.height
          })   
        }
        catch(error){
            console.log("something went wrong");
        }
    
    }
    useEffect(()=>{
        downloadPokemon()
    },[id,name])
    return( 
        <div className="border border-black flex-col items-center justify-center gap-2 p-[0.5rem] rounded-[2rem]">
          <img  className="w-[10rem]"  src={pokemon.image}  alt="" />
           <h1>name:{pokemon.name}</h1>
            <h1>weight:{pokemon.weight}</h1>
            <h1> height:{pokemon.height}</h1>
     </div>
    )  
}
export default PokemonDetail