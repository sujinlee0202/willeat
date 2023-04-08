import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { initMap } from '../../api/naver_map'
import SideBar from '../../components/SideBar'
import Login from '../../components/Login'

const Home = () => {
  // 첫 시작 시 현재 위치를 기준으로 naver map 로드
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