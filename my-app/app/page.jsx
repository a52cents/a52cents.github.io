import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
const Home = () => {
  return (
    <div>
      
    <div className={styles.container}>
    <div className={styles.backImage}>
        <Image src="/backImage.png" alt="alt" width={125} height={125} />
        
      </div>    
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet facere at, labore quae quia? Praesentium voluptatibus maiores repellendus accusantium.</p>
      <div className={styles.buttons}>
          <button className={styles.button}>
            <span className={styles.buttonContent}>Join us !</span>
          </button>
      </div>
      
      </div>
      
      
      <div className={styles.heroImg}>
      <Image src="/hero.gif" alt="alt" width={500} height={500} />
    </div>
    </div>
    
    
    
    </div>
  )
}

export default Home