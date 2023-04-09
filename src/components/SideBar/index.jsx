import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import { getPlace } from '../../api/firebase'
import PlaceCard from '../PlaceCard'
import Scrollbars from 'react-custom-scrollbars-2'

const RANGE = 0.001 // 1km

const SideBar = ({position}) => {
  const [close, setClose] = useState(false)
  const [search, setSearch] = useState('')
  const {data: places, isLoading, error} = useQuery(['place'], getPlace, {
    staleTime: 1000 * 60
  })
  const scrollRef = useRef(null)

  const onClickCloseButton = () => setClose(prev => !prev)
  const onChangeInput = (e) => setSearch(e.target.value)
  const handleSearch = () => {}

  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error}</div>

  return (
    <>
      <nav className={`${styles.sidebar} ${close && styles.close}`}>
        <h2 className={styles.title}>WillEat</h2>
        <form onSubmit={handleSearch} className={styles.form}>
          <input 
            type='text' 
            placeholder='지역, 장소 검색'
            className={styles.input}
            value={search}
            onChange={onChangeInput}
          />
          <BsSearch className={styles.searchIcon} />
        </form>
        <Scrollbars ref={scrollRef}>
          <ul className={styles.lists}>
            {places && places.map(place => {
              if(
                (position.x - RANGE <= place.mapx && position.x + RANGE >= place.mapx)
                && (position.y - RANGE <= place.mapy && position.y + RANGE >= place.mapy)
              ) {
                return <PlaceCard key={place.id} place={place} />
              }
            })}
          </ul>
        </Scrollbars>
      </nav>
      <button className={styles.btnClose} onClick={onClickCloseButton}>
        {close ? <AiOutlineRight /> : <AiOutlineLeft />}
      </button>
    </>
  )
}

export default SideBar