import Image from 'next/image'
import React from 'react'
import styles from './postCard.module.css'
import Link from 'next/link'
const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="alt" fill className={styles.img} />
            </div>
            <span className={styles.date}>12/04/2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quo quod, deserunt, architecto inventore officiis animi ratione reprehenderit, earum laboriosam suscipit praesentium quae est odit incidunt? Laboriosam labore vero natus!</p>
            <Link href="/blog/post">READ MORE</Link>
        </div>
    </div>
)
}

export default PostCard