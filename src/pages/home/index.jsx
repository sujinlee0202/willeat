import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { initMap } from '../../api/fetchNaverMap'
import SideBar from '../../components/SideBar'
import Login from '../../components/Login'

const Home = () => {
  useEffect(() => {
    initMap()
  }, [])
  
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <div id='map' className={styles.map}></div>
      <Login />
    </div>
  )
}

export default Home