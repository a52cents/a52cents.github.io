import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image width={500} height={500} src="/about.png" alt="alt"/>
      </div>
    </div>
  )
}

export default AboutPage