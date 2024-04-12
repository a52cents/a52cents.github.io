import React from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'
const SingleBlogPage = () => {
return (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="alt" fill className={styles.img} />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.secondContainer}>
      <div className={styles.titleContainer}><h1 className={styles.title}>Title</h1></div>
      <div className={styles.detail}>
        <Image src="/noavatar.png" alt="alt" width={35} height={35} className={styles.avatar} />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Yaskaa</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>12/04/2024</span>
        </div>
      </div>
      </div>
      <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tenetur quia inventore architecto. Officiis delectus odio culpa quod dolorum modi ipsam qui est accusamus temporibus optio ab ducimus, maiores eum.</div>
    </div>
  </div>
)
}

export default SingleBlogPage