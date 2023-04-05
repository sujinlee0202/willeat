import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { initMap, searchMap } from '../../api/fetchNaverMap'
import SideBar from '../../components/SideBar'
import Login from '../../components/Login'
import { getPlace } from '../../api/firebase'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const {data: place, isLoading, error} = useQuery(['place'], getPlace, {
    staleTime: 1000
  })

  useEffect(() => {
    const success = (pos) => {
      let crd = pos.coords
      initMap(crd.latitude, crd.longitude)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  if(isLoading) <div>'loading...'</div>
  if(error) <div>{error}</div>

  return (
    <div className={styles.mainContainer}>
      <SideBar />
        <div id='map' className={styles.map}></div>
      <Login />
    </div>
  )
}

export default Home