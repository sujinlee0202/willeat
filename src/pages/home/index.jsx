import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { initMap, searchMap } from '../../api/naver_map'
import SideBar from '../../components/SideBar'
import Login from '../../components/Login'
import { getPlace } from '../../api/firebase'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  useEffect(() => {
    const success = (pos) => {
      let crd = pos.coords
      initMap(crd.latitude, crd.longitude)
    }
    navigator.geolocation.getCurrentPosition(success)
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