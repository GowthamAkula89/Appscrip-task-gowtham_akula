import React from 'react'
import styles from './GreyStrip.module.css'
import Image from 'next/image'

const GreyStrip = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <Image src={'/assets/vuesax.png'} alt="vuesax-logo" width={16} height={16} />
        <p>Lorem, ipsum dolor.</p>
      </div >
      <div className={styles.flex}>
        <Image src={'/assets/vuesax.png'} alt="vuesax-logo" width={16} height={16} />
        <p>Lorem, ipsum dolor.</p>
      </div >
      <div className={styles.flex}>
        <Image src={'/assets/vuesax.png'} alt="vuesax-logo" width={16} height={16} />
        <p>Lorem, ipsum dolor.</p>
      </div >
    </div>
  )
}

export default GreyStrip