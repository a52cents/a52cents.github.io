'use client'
import React, { useState } from 'react'
import styles from "./links.module.css";
import NavLink from './navLink/NavLink';
import Image from 'next/image';
const linksArray =[
    {
        title:"Homepage",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },
    {
        title:"Blog",
        path:"/blog"
    },

]
const Links = () => {
 const [open,setOpen]= useState(false)
  
    const openMenu = (e) =>{
        setOpen((prev)=> !prev)
    }
    //Temporaire
    const session=false;
    const isAdmin=false;

return (
    <div className={styles.container}>
        <div className={styles.links}>
        {linksArray.map((link)=>{
           return <NavLink item={link} key={link.title}/>
        })}
        {session ? (
        <>
            {isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}/>}
            <button className={styles.logout}>Logout</button>
        </>
        ):(
            <NavLink item={{title: "Login", path:"/login"}}/>
        )}
    </div>
    <Image className={styles.menuButton} src="/menu.png" alt="alt" width={30} height={30} onClick={openMenu}/>
    {open && (<div className={styles.mobileLinks}>
        {linksArray.map((link) =>(
            <NavLink item={link} key={link.title}/>
        ))}
        </div>)}
    </div>
  )
}

export default Links