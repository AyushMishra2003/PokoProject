import React from 'react'

const Pokemon = ({name,image}) => {
  return (
    <div className='border border-black m[1rem] flex flex-col items-center'>
      <div>{name}</div>
      <div className='w-[3rem] '><img src={image}/></div>
    </div>
  )
}

export default Pokemon
