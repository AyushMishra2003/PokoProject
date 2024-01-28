import React  from 'react'
import CustomRouter from './routes/CustomRoutes'
// import { Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    // <div className='bg-black w-[100vw] h-[100vh] border flex flex-col items-center'>
    <div className='flex flex-col items-center justify-center mt-[2rem] gap-[2rem] underline'>
       {/* <Pokodex/> */}
         {/* hello */}
         <Link to={"/"} className='text-red-900'>POKODEX </Link>
         <CustomRouter/>
      
    </div>

  )
}

export default App