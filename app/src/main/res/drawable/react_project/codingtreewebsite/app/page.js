"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Homee from "./Pages/Home/Home"

export default function Home() {
  return (
    <main className={styles.main}>
      <Homee/>
    </main>
  )
}
