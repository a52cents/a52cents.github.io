import Link from 'next/link'
import React from 'react'
import styles from "./links.module.css";
const Links = () => {

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

  return (
    <div className={styles.links}>
        {linksArray.map((link)=>{
           return <Link href={link.path} key={link.title}>{link.title}</Link>
        })}
    </div>
  )
}

export default Links