import React  from 'react'
import Pokodex from './component/Pokodex/Pokodex'
import Search from './component/Search/Search'
import PokemonList from './component/PokemonList/PokemonList'
import CustomRouter from './routes/CustomRoutes'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    // <div className='bg-black w-[100vw] h-[100vh] border flex flex-col items-center'>
    <div className='flex flex-col items-center justify-center mt-[2rem] gap-[2rem]'>
       {/* <Pokodex/> */}
         {/* hello */}
         <CustomRouter/>
      
    </div>

  )
}

export default App