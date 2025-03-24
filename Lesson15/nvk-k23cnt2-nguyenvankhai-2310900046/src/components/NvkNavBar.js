import React from 'react'
import {Link} from 'react-router-dom'

export default function NvkNavBar() {
  return (
    <nav>
        <Link to='/'>Home</Link> |
        <Link to='/nvk-list-user'>List user</Link> |
        <Link to='/nvk-create-user'>Create user</Link>
        
    </nav>
  )
}
