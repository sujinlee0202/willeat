import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const PlaceCard = ({place, onClick}) => {
  const {id, name, category, description, address, imageUrl, mapx, mapy} = place

  return (
    <Link to={`/search/${id}`} onClick={(e) => {
      e.preventDefault()
      onClick(place)
    }}>
      <li className={styles.list}>
        <img src={imageUrl} alt={name} className={styles.placeImg}></img>
        <div className={styles.titleContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.category}>{category}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.address}>{address}</p>
      </li>
    </Link>
  )
}

export default PlaceCard