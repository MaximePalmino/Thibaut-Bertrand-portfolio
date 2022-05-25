import type { NextPage } from 'next'
import Header from '../components/Header/Header'
import WorkList from '../components/Works/WorkList'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Navbar />
      <div style={{padding: "120px"}}>
        <Header />
        <WorkList />
      </div>
    </div>
  )
}

export default Home
