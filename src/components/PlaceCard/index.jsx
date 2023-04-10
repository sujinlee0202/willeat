import React from 'react'
import styles from './styles.module.css'

const PlaceCard = ({place}) => {
  const {name, category, description, address, imageUrl} = place

  return (
    <li className={styles.list}>
      <img src={imageUrl} alt={name} className={styles.placeImg}></img>
      <div className={styles.titleContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.address}>{address}</p>
    </li>
  )
}

export default PlaceCard