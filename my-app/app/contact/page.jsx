import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt='alt'fill  />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Nom et Prénom'/>
          <input type="text" placeholder='Adresse mail'/>
          <input type="text" placeholder='Téléphone(optional)'/>
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'>
            </textarea>
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
