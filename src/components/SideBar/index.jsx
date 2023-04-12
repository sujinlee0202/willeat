import React, { useContext, useRef, useState } from 'react'
import styles from './styles.module.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import { getPlace } from '../../api/firebase'
import PlaceCard from '../PlaceCard'
import Scrollbars from 'react-custom-scrollbars-2'
import { Link } from 'react-router-dom'
import { searchPageContext } from '../../context/searchPageContext'

const SideBar = ({position}) => {
  const [close, setClose] = useState(false)
  const [range, setRange] = useState(1)
  const [calRange, setCalRange] = useState(0.01)
  const {data: places, isLoading, error} = useQuery(['place'], getPlace, {
    staleTime: 1000 * 60
  })
  const scrollRef = useRef(null)
  const {showSearchPlace, onClickSearchCard} = useContext(searchPageContext)

  const onClickCloseButton = () => setClose(prev => !prev)

  const onKeyDownRange = (e) => {
    if(e.key === 'Backspace' || e.key === 'Delete' || !isNaN(Number(e.key))) {
      setRange(range)
    } else {
      e.preventDefault()
      return
    }
  }

  const onChangeRange = (e) => setRange(e.target.value)

  const handleSubmitRange = (e) => {
    e.preventDefault()
    setCalRange(range/100)
  }

  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error}</div>

  return (
    <>
      <nav className={`${styles.sidebar} ${close && styles.close}`}>
        <Link to='/'>
          <h2 className={styles.title}>WillEat</h2>
        </Link>
        <Scrollbars ref={scrollRef}>
          <ul className={styles.lists}>
            {places && places.map(place => {
              if(
                (position.x - calRange <= place.mapx && position.x + calRange >= place.mapx)
                && (position.y - calRange <= place.mapy && position.y + calRange >= place.mapy)
              ) {
                return <PlaceCard key={place.id} place={place} onClick={onClickSearchCard} />
              }
            })}
          </ul>
        </Scrollbars>
      </nav>
      <button className={styles.btnClose} onClick={onClickCloseButton}>
        {close ? <AiOutlineRight /> : <AiOutlineLeft />}
      </button>
      <nav className={styles.langeContainer}>
        <form className={styles.langeForm} onSubmit={handleSubmitRange}>
          <label className={styles.langeText}>거리 :</label>
          <input 
            type='number'
            min='0' 
            step='1' 
            className={styles.langeInput}
            value={range}
            placeholder='숫자'
            onChange={onChangeRange}
            onKeyDown={onKeyDownRange}
          />
          <button className={styles.searchIcon}>
            <BsSearch />
          </button>
        </form>
        <div className={styles.notice}>단위 : 1 = 약 1km</div>
      </nav>
    </>
  )
}

export default SideBar