import React from 'react'
import { Link } from 'react-router-dom'
const Pokemon = ({name,image}) => {
  return (
    <div className='border  m[1rem] flex flex-col hover:bg-yellow-800'>
      <Link to="/pokemon/2"> 
        <div>{name}</div>
      <div className='w-[7rem] '><img src={image}/></div>
      </Link>
    
    </div>
  )
}

export default Pokemon
