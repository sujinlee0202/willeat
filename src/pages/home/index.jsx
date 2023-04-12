import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { initMap } from '../../api/naver_map'
import SideBar from '../../components/SideBar'
import Login from '../../components/Login'
import SearchPlace from '../searchplace'
import MainMap from '../main'
import { searchPageContext } from '../../context/searchPageContext'

export const getCurPosition = async (x, y) => {
  return {x, y}
}

const Home = () => {
  const [curPosition, setCurPosition] = useState()
  const {showSearchPlace, coord} = useContext(searchPageContext)

  useEffect(() => {
    // 첫 시작 시 현재 위치를 기준으로 naver map 로드
    const success = (pos) => {
      let crd = pos.coords
      initMap(crd.latitude, crd.longitude)
      getCurPosition(crd.latitude, crd.longitude)
      .then(position => setCurPosition(position))
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <div className={styles.mainContainer}>
      <SideBar position={curPosition} />
      {showSearchPlace
        ? <SearchPlace coord={coord} />
        : <MainMap />
      }
      <Login />
    </div>
  )
}

export default Home