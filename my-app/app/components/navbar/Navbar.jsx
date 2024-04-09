import Link from 'next/link'
import React from 'react'
import Links from './links/Links';
import Modeswitch from '../darkmodeswitch/Modeswitch';
import "./navbar.css"
const Navbar = () => {


  return (
    <div>
        <div>Logo</div>
        <div className='navbar-container'>
            <Links/>
            <Modeswitch/>
        </div>
    </div>
  )
}

export default Navbar