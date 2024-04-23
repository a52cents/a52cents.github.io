import React, { Suspense } from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'
import PostUser from './../../components/postUser/postUser';
import { getPost } from '@/app/lib/data';







// const getData = async ({slug})=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if(!res.ok) {
//     throw new Error("Quelque chose a échoué lors de la récupération des données");
//   }
//   return res.json();
  
// }

const SingleBlogPage  = async ({params}) => {

  const {slug} = params;
  const post = await getPost(slug)
  // const post = await getData({slug});


return (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="alt" fill className={styles.img} />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.secondContainer}>
      <div className={styles.titleContainer}><h1 className={styles.title}>{post?.title}</h1></div>
      <div className={styles.detail}>
        <Image src="/noavatar.png" alt="alt" width={35} height={35} className={styles.avatar} />
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post?.userId}/>
        </Suspense>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>12/04/2024</span>
        </div>
      </div>
      </div>
      <div className={styles.content}>{post?.body}.</div>
    </div>
  </div>
)
}

export default SingleBlogPage