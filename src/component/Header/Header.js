import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <Link to={"/"}>HOME</Link>
        <Link to={"/Contact"} >Contact</Link>
    </div>
  )
}

export default Header
