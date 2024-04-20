import React from 'react'
import styles from './postUser.module.css'

const getData = async ({userId})=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:'no-store'});

  if(!res.ok) {
    throw new Error("Quelque chose a échoué lors de la récupération des données");
  }
  return res.json();
  
}

const PostUser = async ({userId}) => {
  const user = await getData({userId});
  return (
    <div className={styles.container}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user.username}</span>
        </div>
  )
}

export default PostUser