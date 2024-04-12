import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        @yaskaa
      </div>
      <div className={styles.text}>
        blog of yaskaa © All rights reserved.
      </div>
    </div>
  )
}

export default Footer