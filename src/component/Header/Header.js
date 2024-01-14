import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <Link to={"/PokoProject"}>HOME</Link>
        <Link to={"/PokoProject/Contact"} >Contact</Link>
    </div>
  )
}

export default Header
