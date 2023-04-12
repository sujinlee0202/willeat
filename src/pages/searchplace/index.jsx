import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { clickPlaceMap } from '../../api/naver_map'

const SearchPlace = ({coord}) => {
  useEffect(() => {
    clickPlaceMap(coord[0], coord[1])
  }, [])
  return (
    <div id='clickMap' className={styles.map}></div>
  )
}

export default SearchPlace