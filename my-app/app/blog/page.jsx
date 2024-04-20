import React from 'react'
import styles from './blog.module.css'
import PostCard from './../components/postCard/postCard';

const getData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if(!res.ok) {
    throw new Error("Quelque chose a échoué lors de la récupération des données");
  }
  return res.json();
  
}

const BlogPage = async () => {

  const posts = await getData();
  
  return (
    <div className={styles.container}>
        {Array.from(posts).map((post)=>{
           return <div className={styles.post} key={post.id}>
           <PostCard post={post}/>
         </div>
        })}
        

    </div>
  )
}

export default BlogPage