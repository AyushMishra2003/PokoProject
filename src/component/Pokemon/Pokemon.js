import React from 'react'

const Pokemon = ({name,image}) => {
  return (
    <div className='border  m[1rem] flex flex-col '>
      <div>{name}</div>
      <div className='w-[7rem] '><img src={image}/></div>
    </div>
  )
}

export default Pokemon
