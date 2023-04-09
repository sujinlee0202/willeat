import React from 'react'
import styles from './styles.module.css'

const PlaceCard = ({place}) => {
  const {name, category, description, address, imageUrl} = place

  return (
    <li className={styles.list}>
      <img src={imageUrl} alt={name} className={styles.placeImg}></img>
      <div>
        <p>{name}</p>
        <p>{category}</p>
      </div>
      <p>{description}</p>
      <p>{address}</p>
    </li>
  )
}

export default PlaceCard