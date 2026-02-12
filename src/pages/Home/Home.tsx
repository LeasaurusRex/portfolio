import styles from './Home.module.css'
import Hero from '@/pages/Home/components/Hero.tsx'

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  )
}

export default Home