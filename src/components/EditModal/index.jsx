import React, { useState } from 'react'
import styles from './styles.module.css'
import { uploadImage } from '../../api/cloudinary'
import { addNewPlace } from '../../api/firebase'
// import addNewPlace from '../../api/firebase'

const EditModal = ({onClick, setOpenEditModal}) => {
  const [file, setFile] = useState()
  const [isUploading, setIsUploading] = useState(false)
  const [place, setPlace] = useState({})
  const [imageUrl, setImageUrl] = useState()

  const onChangeInput = (e) => {
    const {id, value, files} = e.target

    if(id === 'file') {
      setFile(files && files[0])
      const reader = new FileReader()
      reader.onload = () => {
        setImageUrl(reader.result)
      }
      reader.readAsDataURL(file)
      return
    }

    setPlace(place => ({...place, [id]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsUploading(true)
    uploadImage(file)
    .then(url => addNewPlace(place, url))
    .then(() => setTimeout(() => alert('성공적으로 지도에 추가됬습니다'), 1000))
    .finally(() => {
      setIsUploading(false)
      setFile('')
      setOpenEditModal(false)
    })
  }

  return (
    <form className={styles.modalContainer} onClick={onClick} onSubmit={handleSubmit}>
      {imageUrl 
        ? <img src={imageUrl} htmlFor='file' alt={place.name} className={styles.image}></img>
        : <label htmlFor='file' className={styles.fileButton}>파일 업로드</label>}
      <input type='file' id='file' className={styles.inputFile} onChange={onChangeInput} required></input>
      <div className={styles.fileButton}>위치</div>
      <div>
        <label>이름 :</label>
        <input type='text' id='name' placeholder='음식점 이름' value={place.name ?? ''} onChange={onChangeInput} required></input>
        <button>검색</button>
      </div>
      <div>
        <label>카테고리 :</label>
        <input type='text' id='category' placeholder='카테고리' value={place.category ?? ''} onChange={onChangeInput} required></input>
      </div>
      <div>
        <label>소개글 :</label>
        <input type='text' id='description' placeholder='음식점에 대한 소개글 작성' value={place.description ?? ''} onChange={onChangeInput} required></input>
      </div>
      <div>
        <label>태그 :</label>
        <input type='text' id='tag' placeholder='키워드 및 태그 (, 로 구분)' value={place.tag ?? ''} onChange={onChangeInput} required></input>
      </div>
      <button>
        {isUploading ? '업로드 중...' : '장소 등록하기'}
      </button>
    </form>
  )
}

export default EditModal