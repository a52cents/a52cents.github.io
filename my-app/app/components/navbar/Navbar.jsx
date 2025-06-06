import Link from 'next/link'
import React from 'react'
import Links from './links/Links';
import Modeswitch from '../darkmodeswitch/Modeswitch';
import styles from "./navbar.module.css"
const Navbar = () => {


  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Logo</Link>
        <div>
          <Links/>
        </div>
        
    </div>
  )
}

export default Navbar